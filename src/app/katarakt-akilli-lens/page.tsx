import Link from "next/link";
import { buildMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { getPillar, getClustersForPillar } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";
import PillarClusterCards from "@/components/PillarClusterCards";
import CTABanner from "@/components/CTABanner";

const PILLAR_SLUG = "katarakt-akilli-lens";

/** Procedure card images: cluster slug -> public image path */
const KATARAKT_CLUSTER_IMAGES: Record<string, string> = {
  "katarakt-belirtileri": "/images/procedures/katarakt-belirti.jpg",
  "akilli-lens-kimlere-yapilir": "/images/procedures/akilli-lens-kimlere-yapilir.jpg",
  "akilli-lens-nedir": "/images/procedures/akilli-lens-nedir.jpg",
  "akilli-lens-riskleri": "/images/procedures/akilli-lens-riskleri-nelerdir.jpg",
  "katarakt-ameliyati-nasil-yapilir": "/images/procedures/goz-tansiyonu-ve-katarakt-ameliyati.jpg",
  "katarakt-neden-olur": "/images/procedures/katarakt-neden-olur.png",
  "katarakt-ameliyati-olunmazsa-ne-olur": "/images/procedures/katarakt-ameliyati-olmazsa-ne-olur.jpeg.webp",
  "katarakt-sonrasi-surec": "/images/procedures/katarakt-ameliyati-sonrasi-dikkat-edilmesi-gerekenler.jpg",
};

export const metadata = buildMetadata({
  title: "Katarakt ve Akıllı Lens Tedavileri",
  description:
    "Katarakt ameliyatı, akıllı lens ve trifokal lens tedavileri hakkında kapsamlı bilgi. Belirtiler, iyileşme süreci ve sık sorulan sorular.",
  path: `/${PILLAR_SLUG}`,
});

export default function KataraktAkilliLensPage() {
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
        <PillarClusterCards
          clusters={clusters}
          pillarSlug={PILLAR_SLUG}
          imageMap={KATARAKT_CLUSTER_IMAGES}
        />

        <CTABanner />
      </div>
    </>
  );
}
