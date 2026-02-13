import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PageFrontmatter {
  title: string;
  description: string;
  slug: string;
  pillar?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  image?: string;
}

const contentDir = path.join(process.cwd(), "src/content");

function readMDX(filePath: string): { frontmatter: PageFrontmatter; content: string } {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as PageFrontmatter, content };
}

export function getPillar(slug: string) {
  const filePath = path.join(contentDir, "pillars", `${slug}.mdx`);
  return readMDX(filePath);
}

export function getCluster(pillarSlug: string, clusterSlug: string) {
  const filePath = path.join(contentDir, "clusters", pillarSlug, `${clusterSlug}.mdx`);
  return readMDX(filePath);
}

export function getHelper(slug: string) {
  const filePath = path.join(contentDir, "helpers", `${slug}.mdx`);
  return readMDX(filePath);
}

export function getClustersForPillar(pillarSlug: string): PageFrontmatter[] {
  const dir = path.join(contentDir, "clusters", pillarSlug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const { frontmatter } = readMDX(path.join(dir, f));
      return frontmatter;
    });
}

export function getAllClusterSlugs(pillarSlug: string): string[] {
  const dir = path.join(contentDir, "clusters", pillarSlug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
