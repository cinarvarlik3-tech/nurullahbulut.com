import { buildMetadata } from "@/lib/seo";
import DeviceSwitch from "@/components/shared/DeviceSwitch";
import RandevuAlDesktop from "./Desktop";
import RandevuAlMobile from "./Mobile";

export const metadata = buildMetadata({
  title: "Randevu Al",
  description:
    "Doç. Dr. Nurullah Bulut ile göz muayenesi randevusu alın. Tarih ve saat seçerek randevunuzu planlayın.",
  path: "/randevu-al",
});

export default function RandevuAlPage() {
  return (
    <DeviceSwitch
      desktop={<RandevuAlDesktop />}
      mobile={<RandevuAlMobile />}
    />
  );
}
