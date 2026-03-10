import Link from "next/link";
import { buildMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { getPillar, getClustersForPillar } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";
import PillarClusterCards from "@/components/PillarClusterCards";
import CTABanner from "@/components/CTABanner";

const PILLAR_SLUG = "goz-sagligi-ve-koruma";

/** Cluster slug → card image (in public/images/procedures). */
const CLUSTER_IMAGE_MAP: Record<string, string> = {
  "goz-kurulugu-nasil-gecer": "/images/procedures/goz-kurulugu-nasil-gecer.jpeg",
  "goz-kurulugu-neden-olur": "/images/procedures/goz-kurulugu-neden-olur.jpeg",
  "goz-sagligi-icin-beslenme": "/images/procedures/goz-sagligi-icin-beslenme.jpeg",
  "ekran-goz-yorgunlugu": "/images/procedures/Goz-yorgunlugu.jpeg",
  "kontakt-lens-kullanimi": "/images/procedures/lens-kullanimi.jpg",
  "mavi-isik-zararli-mi": "/images/procedures/mavi-isik-kullanimi.jpg",
};

export const metadata = buildMetadata({
  title: "Göz Sağlığı Nasıl Korunur",
  description:
    "Ekran göz yorgunluğu, göz kuruluğu, mavi ışık, kontakt lens kullanımı ve göz sağlığı için beslenme önerileri.",
  path: `/${PILLAR_SLUG}`,
});

export default function GozSagligiPage() {
  const { frontmatter } = getPillar(PILLAR_SLUG);
  const clusters = getClustersForPillar(PILLAR_SLUG);
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: frontmatter.title, url: `/${PILLAR_SLUG}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumbs
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: frontmatter.title },
          ]}
        />
        <h1 className="text-3xl md:text-4xl font-bold text-[#071952] mt-4 mb-3">
          {frontmatter.title}
        </h1>
        <div className="mb-6">
          <Link
            href="/randevu-al"
            className="inline-flex px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Randevu Al
          </Link>
        </div>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
          {frontmatter.description}
        </p>

        <h2 className="text-2xl font-semibold text-[#071952] mb-6">İlgili Sayfalar</h2>
        <PillarClusterCards clusters={clusters} pillarSlug={PILLAR_SLUG} imageMap={CLUSTER_IMAGE_MAP} />

        <CTABanner />
      </div>
    </>
  );
}
