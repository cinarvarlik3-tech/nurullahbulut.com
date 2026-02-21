import React from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getCluster, getAllClusterSlugs } from "@/lib/content";
import { buildMetadata, buildBreadcrumbSchema, buildArticleSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { PILLAR_SECTIONS } from "@/lib/constants";

const comparisonTableComponents = {
  table: ({ children, ...props }: React.ComponentProps<"table">) => (
    <div className="my-8 w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
      <table className="w-full border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: React.ComponentProps<"thead">) => (
    <thead className="bg-white" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: React.ComponentProps<"tbody">) => (
    <tbody {...props}>{children}</tbody>
  ),
  tr: ({ children, ...props }: React.ComponentProps<"tr">) => (
    <tr className="border-b border-gray-200 last:border-b-0" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }: React.ComponentProps<"th">) => (
    <th
      className="px-4 py-3.5 text-left text-sm font-semibold text-[#071952]"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.ComponentProps<"td">) => (
    <td className="px-4 py-3.5 text-sm text-foreground" {...props}>
      {children}
    </td>
  ),
};

const PILLAR_SLUG = "lazer-goz-tedavileri";
const PILLAR_TITLE = "Lazer Göz Tedavileri";

function getClusterTitle(slug: string): string | undefined {
  const section = PILLAR_SECTIONS.find((s) => s.pillarSlug === PILLAR_SLUG);
  return section?.clusters.find((c) => c.slug === slug)?.title;
}

export async function generateStaticParams() {
  const fromContent = getAllClusterSlugs(PILLAR_SLUG);
  const fromSections =
    PILLAR_SECTIONS.find((s) => s.pillarSlug === PILLAR_SLUG)?.clusters.map((c) => c.slug) ?? [];
  const slugs = Array.from(new Set([...fromContent, ...fromSections]));
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { frontmatter } = getCluster(PILLAR_SLUG, slug);
    return buildMetadata({
      title: frontmatter.title,
      description: frontmatter.description,
      path: `/${PILLAR_SLUG}/${slug}`,
      image: frontmatter.image,
    });
  } catch {
    const title = getClusterTitle(slug);
    return title ? buildMetadata({ title, description: "", path: `/${PILLAR_SLUG}/${slug}` }) : {};
  }
}

export default async function LazerClusterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let title: string;
  let description: string;
  let content: string = "";
  try {
    const cluster = getCluster(PILLAR_SLUG, slug);
    title = cluster.frontmatter.title;
    description = cluster.frontmatter.description || "";
    content = cluster.content;
  } catch {
    const fallbackTitle = getClusterTitle(slug);
    if (!fallbackTitle) notFound();
    title = fallbackTitle;
    description = "Bu konu hakkında detaylı bilgi yakında eklenecektir.";
  }

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: PILLAR_TITLE, url: `/${PILLAR_SLUG}` },
    { name: title, url: `/${PILLAR_SLUG}/${slug}` },
  ]);

  const articleSchema = buildArticleSchema({
    title,
    description,
    url: `/${PILLAR_SLUG}/${slug}`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumbs
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: PILLAR_TITLE, href: `/${PILLAR_SLUG}` },
            { label: title },
          ]}
        />
        <article className="mt-6 prose prose-lg max-w-none prose-headings:text-[#071952] prose-a:text-[#088395] prose-strong:text-[#071952]">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={comparisonTableComponents}>
            {content}
          </ReactMarkdown>
        </article>
        <CTABanner />
      </div>
    </>
  );
}
