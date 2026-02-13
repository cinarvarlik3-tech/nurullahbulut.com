import { buildMetadata } from "@/lib/seo";
import ContactSection from "@/components/ui/contact-section";

export const metadata = buildMetadata({
  title: "Online Danışma",
  description:
    "Göz doktorumuzla online danışma için iletişime geçin. Randevu almak için formu doldurun veya WhatsApp üzerinden ulaşın.",
  path: "/online-danisma",
});

export default function OnlineDanismaPage() {
  return <ContactSection />;
}
