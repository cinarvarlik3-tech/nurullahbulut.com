import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import RandevuAlStepper from "@/components/randevu-al-stepper";

export const metadata = buildMetadata({
  title: "Randevu Al",
  description:
    "Doç. Dr. Nurullah Bulut ile göz muayenesi randevusu alın. Tarih ve saat seçerek randevunuzu planlayın.",
  path: "/randevu-al",
});

export default function RandevuAlPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Randevu Al" },
        ]}
      />

      <div className="mt-8">
        <RandevuAlStepper />
      </div>
    </div>
  );
}
