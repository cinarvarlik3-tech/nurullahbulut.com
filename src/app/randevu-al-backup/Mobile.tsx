import Breadcrumbs from "@/components/Breadcrumbs";
import RandevuAlStepper from "@/components/randevu-al-stepper";

export default function RandevuAlMobile() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col items-center">
      <div className="w-full max-w-lg">
        <Breadcrumbs
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Randevu Al" },
          ]}
        />
      </div>

      <div className="mt-6 w-full max-w-lg flex flex-col items-center">
        <RandevuAlStepper />
      </div>
    </div>
  );
}
