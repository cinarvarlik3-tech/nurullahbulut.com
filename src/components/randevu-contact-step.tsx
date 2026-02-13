"use client";

import { useState } from "react";
import Link from "next/link";
import { parsePhoneNumber } from "libphonenumber-js";
import { Mail, MapPin, Phone, ChevronLeft } from "lucide-react";
import { CircleCheckIcon } from "lucide-react";
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CLINIC_PHONE, CLINIC_EMAIL, CLINIC_ADDRESS } from "@/lib/constants";
import type { AppointmentSelection } from "@/components/ui/appointment-booking";

const YOL_TARIFI_URL = "https://maps.app.goo.gl/dJLd1D4MnQx6BAad7";

/** Success view used after "Bilgilerim Doğru": same box, tick, heading, Ana Sayfa (left, teal) + Yol Tarifi (right). */
export function AppointmentSuccessView() {
  return (
    <div className="bg-card border relative grid h-full w-full shadow md:grid-cols-2 lg:grid-cols-3 rounded-lg overflow-hidden">
      <div className="col-span-full flex flex-col items-center justify-start gap-4 px-6 pt-6 pb-6">
        <CircleCheckIcon
          className="size-14 shrink-0 stroke-[2.5] text-green-600 dark:text-green-500"
          aria-hidden
        />
        <h2 className="text-lg font-semibold text-center md:text-xl">
          Randevunuz Başarıyla Oluşturuldu
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="min-w-[140px] bg-accent text-white hover:bg-accent/90 hover:text-white">
            <Link href="/">Ana Sayfa</Link>
          </Button>
          <Button asChild className="min-w-[140px] bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={YOL_TARIFI_URL} target="_blank" rel="noopener noreferrer">
              Yol Tarifi
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

/** Accepts any TLD: .com, .net, .org, .co.uk, business domains, etc. */
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(value: string): boolean {
  return value.length > 0 && EMAIL_PATTERN.test(value.trim());
}

/** Valid if it matches a valid phone format for any country. Accepts 05XX XXX XX XX (TR) and +country ... */
function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  const normalized = trimmed.replace(/[\s\-().]/g, "");
  if (!normalized) return false;
  try {
    const hasPlus = normalized.startsWith("+");
    const toParse = hasPlus ? normalized : (normalized.startsWith("0") ? normalized : `+${normalized}`);
    const parsed = parsePhoneNumber(toParse, hasPlus ? undefined : "TR");
    return parsed != null && parsed.isValid();
  } catch {
    return false;
  }
}

function formatDateTR(d: Date) {
  return d.toLocaleDateString("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function getContactInfo(): Array<{ icon: typeof Mail; label: string; value: string; className?: string }> {
  const items: Array<{ icon: typeof Mail; label: string; value: string; className?: string }> = [];
  if (CLINIC_EMAIL) items.push({ icon: Mail, label: "E-posta", value: CLINIC_EMAIL });
  if (CLINIC_PHONE) items.push({ icon: Phone, label: "Telefon", value: CLINIC_PHONE });
  if (CLINIC_ADDRESS) items.push({ icon: MapPin, label: "Adres", value: CLINIC_ADDRESS, className: "col-span-2" });
  return items;
}

export type FormValues = { adSoyad: string; email: string; phone: string; sikayet: string };

interface RandevuContactStepProps {
  appointmentSelection: AppointmentSelection | null;
  onBack?: () => void;
  /** When provided, form submit calls this and parent should advance to Özet step. */
  onContinue?: (values: FormValues) => void;
  /** Show read-only summary instead of form (used when stepper is on Özet step). */
  mode?: "form" | "summary";
  /** Pre-fill form or display in summary. Required when mode === "summary". */
  initialFormValues?: FormValues | null;
  /** Called when user clicks "Bilgilerim Doğru"; stepper should advance to Onay (step 4). */
  onSuccess?: () => void;
}

const emptyFormValues: FormValues = { adSoyad: "", email: "", phone: "", sikayet: "" };

export default function RandevuContactStep({
  appointmentSelection,
  onBack,
  onContinue,
  mode = "form",
  initialFormValues = null,
  onSuccess,
}: RandevuContactStepProps) {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues ?? emptyFormValues);
  const [localConfirmation, setLocalConfirmation] = useState(false);
  const [showSuccessView, setShowSuccessView] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; phone?: string }>({});

  const showSummary = mode === "summary" || (mode === "form" && localConfirmation && !onContinue);
  const displayValues = mode === "summary" ? (initialFormValues ?? emptyFormValues) : formValues;

  const appointmentSummaryNode = appointmentSelection ? (
    <div className="flex items-center gap-2 text-sm">
      <CircleCheckIcon className="size-5 shrink-0 stroke-green-600 dark:stroke-green-400" />
      <span>
        Randevunuz{" "}
        <span className="font-medium">{formatDateTR(appointmentSelection.date)}</span> tarihinde, saat{" "}
        <span className="font-medium">{appointmentSelection.time}</span> için planlandı.
      </span>
    </div>
  ) : null;

  const confirmationSummaryNode = appointmentSelection ? (
    <div className="flex flex-col gap-4 pb-8">
      <div className="flex items-center gap-2 text-sm">
        <CircleCheckIcon className="size-5 shrink-0 stroke-green-600 dark:stroke-green-400" />
        <span>
          Randevunuz{" "}
          <span className="font-medium">{formatDateTR(appointmentSelection.date)}</span> tarihinde, saat{" "}
          <span className="font-medium">{appointmentSelection.time}</span> için planlandı.
        </span>
      </div>
      <div className="h-[192px] w-full overflow-hidden rounded-lg border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6136828706317!2d29.078168976260045!3d40.98993937135305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac726ca60410f%3A0x2e368bd0653d1cfd!2sMemorial%20G%C3%B6ztepe%20Hastanesi!5e0!3m2!1sen!2str!4v1770945221844!5m2!1sen!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Memorial Göztepe Hastanesi konumu"
          />
        </div>
    </div>
  ) : null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("randevu-email") as HTMLInputElement)?.value ?? "";
    const phone = (form.elements.namedItem("randevu-phone") as HTMLInputElement)?.value ?? "";
    const errors: { email?: string; phone?: string } = {};

    if (!isValidEmail(email)) {
      errors.email = "Geçerli bir e-posta adresi girin (örn. ad@firma.net veya ad@alanadi.com)";
    }
    if (!isValidPhone(phone)) {
      errors.phone = "Geçerli bir telefon numarası girin (ülke kodu ile, örn. +90 5XX XXX XX XX)";
    }
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const values: FormValues = {
      adSoyad: (form.elements.namedItem("randevu-name") as HTMLInputElement)?.value ?? "",
      email,
      phone,
      sikayet: (form.elements.namedItem("randevu-message") as HTMLTextAreaElement)?.value ?? "",
    };
    if (onContinue) {
      onContinue(values);
    } else {
      setFormValues(values);
      setLocalConfirmation(true);
    }
  };

  const confirmationContent = (
    <ContactCard
      title="Bilgileriniz Doğru Mu?"
      description="Lütfen bilgilerinizi kontrol edin."
      contactInfo={getContactInfo()}
      appointmentSummary={confirmationSummaryNode}
      formSectionClassName="pb-8"
      className="rounded-lg overflow-hidden"
    >
      <div className="flex h-full w-full flex-col">
        <div className="w-full flex-1 space-y-4">
          <div className="flex flex-col gap-2">
            <Label className="text-muted-foreground">Ad Soyad</Label>
            <Input readOnly value={displayValues.adSoyad} className="bg-muted/60 cursor-default" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-muted-foreground">E-posta</Label>
            <Input readOnly value={displayValues.email} className="bg-muted/60 cursor-default" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-muted-foreground">Telefon</Label>
            <Input readOnly value={displayValues.phone} className="bg-muted/60 cursor-default" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-muted-foreground">Şikayetiniz</Label>
            <Textarea readOnly value={displayValues.sikayet} rows={4} className="bg-muted/60 cursor-default resize-none" />
          </div>
          <Button
            type="button"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={async () => {
              if (appointmentSelection) {
                try {
                  const date =
                    appointmentSelection.date instanceof Date
                      ? appointmentSelection.date.toISOString()
                      : String(appointmentSelection.date);
                  const res = await fetch("/api/send-randevu-sms", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      date,
                      time: appointmentSelection.time,
                      patientName: displayValues.adSoyad,
                      complaint: displayValues.sikayet,
                    }),
                  });
                  const text = await res.text();
                  const data = (() => {
                    try {
                      return text ? JSON.parse(text) : {};
                    } catch {
                      return { _raw: text };
                    }
                  })();
                  if (!res.ok) {
                    const msg = data.error || data.message || data._raw || res.statusText;
                    console.error("[Randevu SMS] Request failed:", res.status, msg, data.code != null ? `(code ${data.code})` : "");
                  } else if (data.skipped) {
                    console.warn("[Randevu SMS] Skipped (Twilio env vars not set). Restart dev server after adding .env.local");
                  } else if (data.sid) {
                    console.info("[Randevu SMS] Accepted by Twilio. SID:", data.sid, "| Check delivery: https://console.twilio.com/us1/monitor/logs/sms");
                  }
                } catch (e) {
                  console.error("[Randevu SMS] Error:", e);
                }
              }
              if (onSuccess) onSuccess();
              else setShowSuccessView(true);
            }}
          >
            Bilgilerim Doğru
          </Button>
        </div>
      </div>
    </ContactCard>
  );

  const successContent = <AppointmentSuccessView />;

  const formContent = (
    <ContactCard
      title="İletişim Bilgileriniz"
      description="Randevunuzu tamamlamak için aşağıdaki bilgileri doldurun. En kısa sürede size dönüş yapacağız."
      contactInfo={getContactInfo()}
      appointmentSummary={appointmentSummaryNode}
      className="rounded-lg overflow-hidden"
    >
      <div className="flex h-full w-full flex-col">
        <form className="w-full flex-1 space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="randevu-name">Ad Soyad</Label>
            <Input
              id="randevu-name"
              name="randevu-name"
              type="text"
              placeholder="Adınız ve soyadınız"
              value={formValues.adSoyad}
              onChange={(e) => setFormValues((p) => ({ ...p, adSoyad: e.target.value }))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="randevu-email">E-posta</Label>
            <Input
              id="randevu-email"
              name="randevu-email"
              type="email"
              placeholder="ornek@email.com veya ad@firma.net"
              value={formValues.email}
              onChange={(e) => {
                setFormValues((p) => ({ ...p, email: e.target.value }));
                if (fieldErrors.email) setFieldErrors((p) => ({ ...p, email: undefined }));
              }}
              pattern={"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"}
              title="Örn: ad@alanadi.com veya ad@firma.net"
              aria-invalid={!!fieldErrors.email}
              className={fieldErrors.email ? "border-destructive focus-visible:ring-destructive" : undefined}
            />
            {fieldErrors.email && (
              <p className="text-sm text-destructive" role="alert">
                {fieldErrors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="randevu-phone">Telefon</Label>
            <Input
              id="randevu-phone"
              name="randevu-phone"
              type="tel"
              placeholder="+90 5XX XXX XX XX veya ülke kodu ile"
              value={formValues.phone}
              onChange={(e) => {
                setFormValues((p) => ({ ...p, phone: e.target.value }));
                if (fieldErrors.phone) setFieldErrors((p) => ({ ...p, phone: undefined }));
              }}
              aria-invalid={!!fieldErrors.phone}
              className={fieldErrors.phone ? "border-destructive focus-visible:ring-destructive" : undefined}
            />
            {fieldErrors.phone && (
              <p className="text-sm text-destructive" role="alert">
                {fieldErrors.phone}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="randevu-message">Şikayetiniz</Label>
            <Textarea
              id="randevu-message"
              name="randevu-message"
              placeholder="Randevu veya şikayetiniz hakkında not..."
              rows={4}
              value={formValues.sikayet}
              onChange={(e) => setFormValues((p) => ({ ...p, sikayet: e.target.value }))}
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Devam
          </Button>
        </form>
      </div>
    </ContactCard>
  );

  return (
    <div className="relative">
      {showSuccessView && showSummary && !onSuccess
        ? successContent
        : showSummary
          ? confirmationContent
          : formContent}
      {onBack && !showSuccessView && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="absolute bottom-4 left-4 rounded-full border border-border bg-background shadow-sm hover:bg-[#001f3f] hover:text-white"
          aria-label="Randevu tarih ve saate dön"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
