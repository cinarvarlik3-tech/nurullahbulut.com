import Breadcrumbs from "@/components/Breadcrumbs";
import RandevuAlStepper from "@/components/randevu-al-stepper";

export default function RandevuAlMobile() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <Breadcrumbs
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Randevu Al" },
        ]}
      />

      <div className="mt-6">
        <RandevuAlStepper />
      </div>
    </div>
  );
}
