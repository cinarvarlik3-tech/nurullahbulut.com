import RandevuAlHeroBox from "@/components/randevu-al-hero-box";
import RandevuAlCTABanner from "@/components/RandevuAlCTABanner";

export default function RandevuAlDesktop() {
  return (
    <div className="w-full px-20 py-4 min-h-[calc(100vh-5rem)] flex flex-col gap-8">
      <RandevuAlHeroBox />
      <RandevuAlCTABanner />
    </div>
  );
}
