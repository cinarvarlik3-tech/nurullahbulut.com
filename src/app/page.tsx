import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { DestinationCard } from "@/components/ui/card-21";
import { PILLAR_SECTIONS, SITE_NAME } from "@/lib/constants";
import { buildPhysicianSchema, buildMedicalClinicSchema } from "@/lib/seo";

const NAVY_GRADIENT = "217 92% 18%"; // #071952
const PILLAR_CARD_ASSETS = [
  { imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&auto=format&fit=crop&q=80", themeColor: NAVY_GRADIENT },
  { imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&auto=format&fit=crop&q=80", themeColor: NAVY_GRADIENT },
  { imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&auto=format&fit=crop&q=80", themeColor: NAVY_GRADIENT },
  { imageUrl: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&auto=format&fit=crop&q=80", themeColor: NAVY_GRADIENT },
] as const;

const CLUSTER_CARD_IMAGES = [
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&auto=format&fit=crop&q=80",
];

/** Lazer cluster slugs on home -> procedure image (for Lazer Göz Tedavileri section) */
const LAZER_HOME_IMAGES: Record<string, string> = {
  "no-touch-lazer-nedir": "/images/procedures/no-touch-lazer-nedir.jpg",
  "lasik-nedir": "/images/procedures/lasik-goz-ameliyati.jpg",
  "prk-nedir": "/images/procedures/PRK-nedir.jpg",
};

/** Katarakt cluster slugs on home -> procedure image (for Katarakt ve Akıllı Lens section) */
const KATARAKT_HOME_IMAGES: Record<string, string> = {
  "katarakt-belirtileri": "/images/procedures/katarakt-belirti.jpg",
  "katarakt-neden-olur": "/images/procedures/katarakt-neden-olur.png",
  "katarakt-ameliyati-nasil-yapilir": "/images/procedures/goz-tansiyonu-ve-katarakt-ameliyati.jpg",
};

/** Göz Hastalıkları cluster slugs on home -> procedure image (for Göz Hastalıkları ve Belirtileri section) */
const GOZ_HASTALIKLARI_HOME_IMAGES: Record<string, string> = {
  "miyop-nedir": "/images/procedures/miyop-nedir.jpg",
  "astigmat-nedir": "/images/procedures/astigmat-nedir.png",
  "hipermetrop-nedir": "/images/procedures/hipermetrop-nedir.png",
};

/** Göz Sağlığı ve Koruma cluster slugs on home -> procedure image */
const GOZ_SAGLIGI_HOME_IMAGES: Record<string, string> = {
  "ekran-goz-yorgunlugu": "/images/procedures/Goz-yorgunlugu.jpeg",
  "goz-kurulugu-nasil-gecer": "/images/procedures/goz-kurulugu-nasil-gecer.jpeg",
  "mavi-isik-zararli-mi": "/images/procedures/mavi-isik-kullanimi.jpg",
};

export const metadata: Metadata = {
  title: `${SITE_NAME} | Göz Hastalıkları ve Lazer Göz Ameliyatı`,
  description:
    "Lazer göz ameliyatı, katarakt, akıllı lens tedavileri ve göz hastalıkları hakkında uzman bilgi. Online randevu alın.",
};

export default function HomePage() {
  const physicianSchema = buildPhysicianSchema();
  const clinicSchema = buildMedicalClinicSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />

      {/* Hero */}
      <section className="bg-background border-b border-border overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row min-h-[38rem] items-stretch">
          {/* Left column — doctor image with navy gradient (same as cards) */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
            <div className="relative aspect-square w-full max-w-[20rem] md:h-[34rem] md:w-[34rem] rounded-2xl overflow-hidden shadow-lg">
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
          </div>

          {/* Right column — text and buttons */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-10 py-8 md:py-0 text-center md:text-left">
            <span className="inline-block w-fit px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Göz Hastalıkları ve Cerrahisi Uzmanı
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Doç. Dr. Nurullah Bulut
            </h1>
            <p className="text-lg text-black max-w-lg mb-6">
              Lazer göz ameliyatı, katarakt tedavisi, akıllı lens uygulamaları ve
              göz hastalıklarında deneyimli kadromuzla yanınızdayız.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
              {["Retina Cerrahisi", "Lazer Ameliyatı", "Katarakt", "LASIK"].map((label) => (
                <span
                  key={label}
                  className="inline-block px-2 py-1 rounded-full bg-[#071952] text-white text-xs font-medium"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/randevu-al"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Randevu Al
              </Link>
              <Link
                href="/online-danisma"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Online Danışma
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tedavi Alanlarımız — pillar heading + 3 cluster cards each */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-14">
          {PILLAR_SECTIONS.map((section, sectionIndex) => {
            const assets = PILLAR_CARD_ASSETS[sectionIndex];
            return (
              <div key={section.pillarSlug}>
                <Link
                  href={section.pillarHref}
                  className="block mb-6 text-[#071952] text-2xl md:text-3xl font-bold hover:underline focus:outline-none focus:underline text-center"
                >
                  {section.pillarTitle}
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.clusters.map((cluster, clusterIndex) => {
                    const imageUrl =
                      section.pillarSlug === "lazer-goz-tedavileri" && LAZER_HOME_IMAGES[cluster.slug]
                        ? LAZER_HOME_IMAGES[cluster.slug]
                        : section.pillarSlug === "katarakt-akilli-lens" && KATARAKT_HOME_IMAGES[cluster.slug]
                          ? KATARAKT_HOME_IMAGES[cluster.slug]
                          : section.pillarSlug === "goz-hastaliklari-ve-belirtileri" && GOZ_HASTALIKLARI_HOME_IMAGES[cluster.slug]
                            ? GOZ_HASTALIKLARI_HOME_IMAGES[cluster.slug]
                            : section.pillarSlug === "goz-sagligi-ve-koruma" && GOZ_SAGLIGI_HOME_IMAGES[cluster.slug]
                              ? GOZ_SAGLIGI_HOME_IMAGES[cluster.slug]
                              : clusterIndex === 1
                                ? CLUSTER_CARD_IMAGES[3]
                                : CLUSTER_CARD_IMAGES[clusterIndex];
                    return (
                      <div
                        key={cluster.slug}
                        className="w-full h-[320px] sm:h-[380px] min-h-[280px]"
                      >
                        <DestinationCard
                          imageUrl={imageUrl}
                          location={cluster.title}
                          flag=""
                          stats=""
                          href={`${section.pillarHref}/${cluster.slug}`}
                          themeColor={assets.themeColor}
                        />
                      </div>
                    );
                  })}
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
