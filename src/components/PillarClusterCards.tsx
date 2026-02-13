import { DestinationCard } from "@/components/ui/card-21";
import type { PageFrontmatter } from "@/lib/content";

const NAVY_GRADIENT = "217 92% 18%";
const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&auto=format&fit=crop&q=80",
];

interface PillarClusterCardsProps {
  clusters: PageFrontmatter[];
  pillarSlug: string;
  /** Number of cards per row on large screens. Default 3. */
  columns?: 3 | 4;
  /** Optional map of cluster slug -> image URL for card images. */
  imageMap?: Record<string, string>;
}

const CARD_WRAPPER_CLASS = "w-full h-[320px] sm:h-[380px] min-h-[280px]";

function getImageUrl(
  cluster: PageFrontmatter,
  index: number,
  imageMap?: Record<string, string>
): string {
  if (imageMap?.[cluster.slug]) return imageMap[cluster.slug];
  return PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length];
}

function CardCell({
  cluster,
  index,
  pillarHref,
  imageMap,
}: {
  cluster: PageFrontmatter;
  index: number;
  pillarHref: string;
  imageMap?: Record<string, string>;
}) {
  return (
    <div key={cluster.slug} className={CARD_WRAPPER_CLASS}>
      <DestinationCard
        imageUrl={getImageUrl(cluster, index, imageMap)}
        location={cluster.title}
        flag=""
        stats={cluster.description ?? ""}
        href={`${pillarHref}/${cluster.slug}`}
        themeColor={NAVY_GRADIENT}
      />
    </div>
  );
}

export default function PillarClusterCards({ clusters, pillarSlug, columns = 3, imageMap }: PillarClusterCardsProps) {
  const pillarHref = `/${pillarSlug}`;
  const gridCols = columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  const remainder = columns === 3 ? clusters.length % 3 : 0;
  const hasPartialLastRow = remainder === 1 || remainder === 2;
  const fullRowCount = hasPartialLastRow ? clusters.length - remainder : clusters.length;
  const fullRows = clusters.slice(0, fullRowCount);
  const lastRowItems = hasPartialLastRow ? clusters.slice(fullRowCount) : [];

  return (
    <div className="space-y-6">
      {fullRows.length > 0 && (
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-6`}>
          {fullRows.map((cluster, index) => (
            <CardCell
              key={cluster.slug}
              cluster={cluster}
              index={index}
              pillarHref={pillarHref}
              imageMap={imageMap}
            />
          ))}
        </div>
      )}
      {lastRowItems.length > 0 && (
        <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap">
          {lastRowItems.map((cluster, index) => (
            <div key={cluster.slug} className={`${CARD_WRAPPER_CLASS} lg:w-[calc((100%-3rem)/3)] lg:max-w-[calc((100%-3rem)/3)]`}>
              <DestinationCard
                imageUrl={getImageUrl(cluster, fullRowCount + index, imageMap)}
                location={cluster.title}
                flag=""
                stats={cluster.description ?? ""}
                href={`${pillarHref}/${cluster.slug}`}
                themeColor={NAVY_GRADIENT}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
