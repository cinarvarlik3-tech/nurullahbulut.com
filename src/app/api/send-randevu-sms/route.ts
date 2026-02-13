import { NextResponse } from "next/server";
import twilio from "twilio";

const DOCTOR_SMS_NUMBER = "+90 555 183 96 44";

/** Short date for SMS (1 segment on trial). e.g. "14.02.2026" */
function formatDateShort(d: Date): string {
  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  return `${day}.${month}.${d.getFullYear()}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { date, time, patientName, complaint } = body as {
      date: string;
      time: string;
      patientName: string;
      complaint: string;
    };

    if (!date || !time || patientName == null || complaint == null) {
      return NextResponse.json(
        { error: "date, time, patientName and complaint are required" },
        { status: 400 }
      );
    }

    const dateFormatted = formatDateShort(new Date(date));
    const complaintRaw = String(complaint).trim() || "-";
    const nameText = String(patientName).trim() || "-";
    // Trial accounts (error 30044) allow only 1 segment. Keep under ~70 chars (Unicode) or 160 (GSM).
    const complaintText = complaintRaw.length > 18 ? `${complaintRaw.slice(0, 15)}..` : complaintRaw;
    const nameShort = nameText.length > 20 ? `${nameText.slice(0, 17)}..` : nameText;
    const message = `Randevu: ${dateFormatted} ${time}. Hasta: ${nameShort}. Sikayet: ${complaintText}`;

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !fromNumber) {
      console.warn(
        "[Randevu SMS] Skipped: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN or TWILIO_PHONE_NUMBER missing. Restart the dev server after adding .env.local."
      );
      return NextResponse.json({ ok: true, skipped: true });
    }

    const client = twilio(accountSid, authToken);
    const toNumber = DOCTOR_SMS_NUMBER.replace(/\s/g, "");
    const e164 = toNumber.startsWith("+") ? toNumber : `+90${toNumber.replace(/^0/, "")}`;

    const twilioMessage = await client.messages.create({
      body: message,
      from: fromNumber,
      to: e164,
    });

    console.info("[Randevu SMS] Sent to", e164, "sid:", twilioMessage.sid, "status:", twilioMessage.status);
    return NextResponse.json({
      ok: true,
      sid: twilioMessage.sid,
      status: twilioMessage.status,
      to: e164,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send SMS";
    const code = err && typeof err === "object" && "code" in err ? (err as { code?: number }).code : undefined;
    console.error("[Randevu SMS] Error:", message, code ?? "", err);
    return NextResponse.json(
      { error: message, code },
      { status: 500 }
    );
  }
}
