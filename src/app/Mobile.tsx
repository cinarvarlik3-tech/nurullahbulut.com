import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { DestinationCard } from "@/components/ui/card-21";
import {
  PILLAR_SECTIONS,
  PILLAR_CARD_ASSETS,
  getClusterImageUrl,
} from "./home-constants";

export default function HomeMobile() {
  return (
    <>
      {/* Hero — image first, then text */}
      <section className="bg-background border-b border-border overflow-hidden min-h-[85vh] flex flex-col items-center justify-center px-4 py-10 gap-8">
        {/* Doctor image */}
        <div className="relative aspect-square w-full max-w-[18rem] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/doctor/drnurullahbulur.jpg)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, hsl(217 92% 18% / 0.9), hsl(217 92% 18% / 0.6) 30%, transparent 60%)",
            }}
          />
        </div>
        <div className="w-full max-w-lg flex flex-col items-center justify-center text-center">
          <span className="inline-block w-fit px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Göz Hastalıkları ve Cerrahisi Uzmanı
          </span>
          <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
            Doç. Dr. Nurullah Bulut
          </h1>
          <p className="text-lg text-black max-w-lg mb-6">
            Lazer göz ameliyatı, katarakt tedavisi, akıllı lens uygulamaları ve
            göz hastalıklarında yanınızdayız.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {["Retina Cerrahisi", "Lazer Ameliyatı", "Katarakt", "LASIK"].map((label) => (
              <span
                key={label}
                className="inline-block px-2 py-1 rounded-full bg-[#071952] text-white text-xs font-medium"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="flex flex-row gap-3 w-full">
            <Link
              href="/randevu-al"
              className="flex-1 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-base text-center"
            >
              Randevu Al
            </Link>
            <Link
              href="/online-danisma"
              className="flex-1 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors text-base text-center"
            >
              Online Danışma
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-14">
          {PILLAR_SECTIONS.map((section, sectionIndex) => {
            const assets = PILLAR_CARD_ASSETS[sectionIndex];
            return (
              <div key={section.pillarSlug}>
                <Link
                  href={section.pillarHref}
                  className="block mb-6 text-[#071952] text-2xl font-bold hover:underline focus:outline-none focus:underline text-center"
                >
                  {section.pillarTitle}
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {section.clusters.map((cluster, clusterIndex) => (
                    <div
                      key={cluster.slug}
                      className="w-full h-[320px] sm:h-[380px] min-h-[280px]"
                    >
                      <DestinationCard
                        imageUrl={getClusterImageUrl(section, cluster, clusterIndex)}
                        location={cluster.title}
                        flag=""
                        stats=""
                        href={`${section.pillarHref}/${cluster.slug}`}
                        themeColor={assets.themeColor}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href={section.pillarHref}
                    className="inline-block text-primary text-[1.3rem] font-semibold hover:underline focus:outline-none focus:underline"
                  >
                    Hepsini Gör
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <CTABanner />
      </div>
    </>
  );
}
