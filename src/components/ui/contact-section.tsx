"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CLINIC_PHONE,
  CLINIC_EMAIL,
  CLINIC_ADDRESS,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

/** Validates international phone: 10–15 digits (after stripping spaces/dashes/etc.). */
function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className }: ContactSectionProps) {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const waLink = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=Merhaba,%20online%20danışma%20almak%20istiyorum.`
    : null;

  const contactMethods = [
    ...(CLINIC_PHONE
      ? [
          {
            icon: Phone,
            contact: CLINIC_PHONE,
            href: `tel:${CLINIC_PHONE}`,
            label: "Telefon",
          },
        ]
      : []),
    ...(waLink
      ? [
          {
            icon: MessageCircle,
            contact: "WhatsApp ile yazın",
            href: waLink,
            label: "WhatsApp",
          },
        ]
      : []),
    ...(CLINIC_EMAIL
      ? [
          {
            icon: Mail,
            contact: CLINIC_EMAIL,
            href: `mailto:${CLINIC_EMAIL}`,
            label: "E-posta",
          },
        ]
      : []),
    ...(CLINIC_ADDRESS
      ? [
          {
            icon: MapPin,
            contact: CLINIC_ADDRESS,
            href: undefined,
            label: "Adres",
          },
        ]
      : []),
  ];

  return (
    <section className={cn("py-14", className)}>
      <div className="max-w-screen-xl mx-auto px-4 text-muted-foreground md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3 flex flex-col">
            <h3 className="text-primary font-semibold">İletişim</h3>
            <p className="text-foreground text-3xl font-semibold sm:text-4xl">
              Online danışma için bize ulaşın
            </p>
            <p>
              Göz sağlığınız hakkındaki sorularınız için buradayız. Şikayetlerinizi ve durumunuzu anlatın, gerekliyse sizi online veya yüz yüze muayene için çağıralım.
            </p>
            {contactMethods.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <div className="flex-none text-muted-foreground">
                        <Icon className="w-5 h-5" />
                      </div>
                      <p className="text-foreground/90">{item.contact}</p>
                    </>
                  );
                  return (
                    <li key={idx}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-center gap-x-3 hover:text-primary transition-colors"
                        >
                          {content}
                        </a>
                      ) : (
                        <span className="flex items-center gap-x-3">
                          {content}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
            {/* Clinic image with hero-style navy gradient overlay — links to Google Maps */}
            <a
              href="https://maps.app.goo.gl/C7ngKUiD5EN56UWw7"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 min-h-[320px] sm:min-h-[380px] w-full flex-1 rounded-2xl overflow-hidden shadow-lg block cursor-pointer hover:opacity-95 transition-opacity"
              aria-label="Memorial Göztepe Hastanesi konumunu haritada aç"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url(/images/clinic/1758204720266.jpeg)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, hsl(217 92% 18% / 0.9), hsl(217 92% 18% / 0.6) 30%, transparent 60%)",
                }}
              />
              <p className="absolute bottom-4 left-4 text-white text-lg font-semibold tracking-tight">
                Memorial Göztepe Hastanesi
              </p>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Açık Adresimiz: Yeni Sahra, Karaman Cd No: 1, 34634 Ataşehir/İstanbul
            </p>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (phone && !isValidPhone(phone)) {
                  setPhoneError("Geçerli bir telefon numarası girin (en az 10, en fazla 15 rakam).");
                  return;
                }
                setPhoneError(null);
                // TODO: submit form
              }}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-medium text-foreground"
                >
                  Ad Soyad
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-foreground bg-background outline-none border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="font-medium text-foreground"
                >
                  Telefon Numarası
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  inputMode="tel"
                  required
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (phoneError) setPhoneError(null);
                  }}
                  onBlur={() => {
                    if (phone && !isValidPhone(phone)) {
                      setPhoneError("Geçerli bir telefon numarası girin (en az 10, en fazla 15 rakam).");
                    } else {
                      setPhoneError(null);
                    }
                  }}
                  placeholder="Örn: +90 XXX XXX XX XX veya 05XX XXX XX XX"
                  autoComplete="tel"
                  aria-invalid={!!phoneError}
                  aria-describedby={phoneError ? "contact-phone-error" : undefined}
                  className={cn(
                    "w-full mt-2 px-3 py-2 text-foreground bg-background outline-none border rounded-lg focus:ring-2 focus:ring-primary/20 transition-colors placeholder:text-muted-foreground",
                    phoneError
                      ? "border-destructive focus:border-destructive"
                      : "border-input focus:border-primary"
                  )}
                />
                {phoneError && (
                  <p id="contact-phone-error" className="mt-1 text-sm text-destructive">
                    {phoneError}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="font-medium text-foreground"
                >
                  Konu
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="Örn: Lazer tedavisi, katarakt, randevu"
                  className="w-full mt-2 px-3 py-2 text-foreground bg-background outline-none border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="font-medium text-foreground"
                >
                  Şikayetiniz ve Halihazırda Bildiğiniz Sağlık Durumlarınız
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Mesajınızı yazın..."
                  className="w-full mt-2 px-3 py-2 resize-none bg-background outline-none border border-input rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Gönder
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
