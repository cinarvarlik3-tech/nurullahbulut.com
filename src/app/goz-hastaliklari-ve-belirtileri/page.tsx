import Link from "next/link";
import { buildMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { getPillar, getClustersForPillar } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";
import PillarClusterCards from "@/components/PillarClusterCards";
import CTABanner from "@/components/CTABanner";

const PILLAR_SLUG = "goz-hastaliklari-ve-belirtileri";

/** Cluster slug → card image (in public/images/procedures). */
const CLUSTER_IMAGE_MAP: Record<string, string> = {
  "astigmat-nedir": "/images/procedures/astigmat-nedir.png",
  "glokom-nedir": "/images/procedures/glokom-nedir.jpg",
  "hipermetrop-nedir": "/images/procedures/hipermetrop-nedir.png",
  "keratokonus-nedir": "/images/procedures/keratokonus-nedir.jpg",
  "miyop-nedir": "/images/procedures/miyop-nedir.jpg",
  "retina-yirtilmasi-belirtileri": "/images/procedures/retina-yirtilmasi-belirtileri.jpg",
  "sari-nokta-hastaligi": "/images/procedures/sari-nokta-hastaligi.jpg",
  "sasilik-nedir": "/images/procedures/sasilik-nedir.jpg",
};

export const metadata = buildMetadata({
  title: "Göz Hastalıkları ve Belirtileri",
  description:
    "Miyop, astigmat, hipermetrop, glokom, keratokonus ve diğer göz hastalıkları hakkında bilgi. Yaygın göz hastalıklarının belirtileri ve tedavileri.",
  path: `/${PILLAR_SLUG}`,
});

export default function GozHastaliklariPage() {
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
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Link
            href="/randevu-al"
            className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Randevu Al
          </Link>
          <div className="border-r border-border self-stretch my-1" aria-hidden />
          <Link
            href="/online-danisma"
            className="inline-flex px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Online Danışma
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
