import RandevuAlHeroBox from "@/components/randevu-al-hero-box";
import RandevuAlCTABanner from "@/components/RandevuAlCTABanner";

export default function RandevuAlMobile() {
  return (
    <div className="w-full px-2 py-4 min-h-[calc(100vh-5rem)] flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-center text-foreground pt-6">Randevu Alın</h1>
      <RandevuAlHeroBox />
      <RandevuAlCTABanner />
    </div>
  );
}
