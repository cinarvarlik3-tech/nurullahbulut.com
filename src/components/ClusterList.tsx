import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { PageFrontmatter } from "@/lib/content";

interface ClusterListProps {
  clusters: PageFrontmatter[];
  pillarSlug: string;
}

export default function ClusterList({ clusters, pillarSlug }: ClusterListProps) {
  return (
    <ul className="divide-y divide-border border border-border rounded-xl overflow-hidden">
      {clusters.map((cluster) => (
        <li key={cluster.slug}>
          <Link
            href={`/${pillarSlug}/${cluster.slug}`}
            className="flex items-center justify-between px-5 py-4 bg-card hover:bg-muted transition-colors group"
          >
            <div>
              <p className="text-sm font-medium text-card-foreground group-hover:text-accent">
                {cluster.title}
              </p>
              {cluster.description && (
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                  {cluster.description}
                </p>
              )}
            </div>
            <ChevronRight size={16} className="text-muted-foreground group-hover:text-accent flex-shrink-0" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
