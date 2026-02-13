import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllClusterSlugs } from "@/lib/content";

export const dynamic = "force-static";

const pillars = [
  "lazer-goz-tedavileri",
  "katarakt-akilli-lens",
  "goz-hastaliklari-ve-belirtileri",
  "goz-sagligi-ve-koruma",
];

const helpers = ["doktor-profili", "online-danisma", "randevu-al"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  for (const pillar of pillars) {
    entries.push({
      url: `${SITE_URL}/${pillar}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });

    const slugs = getAllClusterSlugs(pillar);
    for (const slug of slugs) {
      entries.push({
        url: `${SITE_URL}/${pillar}/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  for (const helper of helpers) {
    entries.push({
      url: `${SITE_URL}/${helper}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
