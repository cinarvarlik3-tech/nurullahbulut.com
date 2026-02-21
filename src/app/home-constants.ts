import { PILLAR_SECTIONS } from "@/lib/constants";

const NAVY_GRADIENT = "217 92% 18%";
export const PILLAR_CARD_ASSETS = [
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

export const LAZER_HOME_IMAGES: Record<string, string> = {
  "smile-pro": "/images/procedures/smile-pro-laser-1-1.jpg",
  "lasik-nedir": "/images/procedures/lasik-goz-ameliyati.jpg",
  "prk-nedir": "/images/procedures/PRK-nedir.jpg",
};

export const KATARAKT_HOME_IMAGES: Record<string, string> = {
  "katarakt-belirtileri": "/images/procedures/katarakt-belirti.jpg",
  "katarakt-neden-olur": "/images/procedures/katarakt-neden-olur.png",
  "katarakt-ameliyati-nasil-yapilir": "/images/procedures/goz-tansiyonu-ve-katarakt-ameliyati.jpg",
};

export const GOZ_HASTALIKLARI_HOME_IMAGES: Record<string, string> = {
  "miyop-nedir": "/images/procedures/miyop-nedir.jpg",
  "astigmat-nedir": "/images/procedures/astigmat-nedir.png",
  "hipermetrop-nedir": "/images/procedures/hipermetrop-nedir.png",
};

export const GOZ_SAGLIGI_HOME_IMAGES: Record<string, string> = {
  "ekran-goz-yorgunlugu": "/images/procedures/Goz-yorgunlugu.jpeg",
  "goz-kurulugu-nasil-gecer": "/images/procedures/goz-kurulugu-nasil-gecer.jpeg",
  "mavi-isik-zararli-mi": "/images/procedures/mavi-isik-kullanimi.jpg",
};

export function getClusterImageUrl(
  section: (typeof PILLAR_SECTIONS)[number],
  cluster: { slug: string },
  clusterIndex: number
): string {
  if (section.pillarSlug === "lazer-goz-tedavileri" && LAZER_HOME_IMAGES[cluster.slug])
    return LAZER_HOME_IMAGES[cluster.slug];
  if (section.pillarSlug === "katarakt-akilli-lens" && KATARAKT_HOME_IMAGES[cluster.slug])
    return KATARAKT_HOME_IMAGES[cluster.slug];
  if (section.pillarSlug === "goz-hastaliklari-ve-belirtileri" && GOZ_HASTALIKLARI_HOME_IMAGES[cluster.slug])
    return GOZ_HASTALIKLARI_HOME_IMAGES[cluster.slug];
  if (section.pillarSlug === "goz-sagligi-ve-koruma" && GOZ_SAGLIGI_HOME_IMAGES[cluster.slug])
    return GOZ_SAGLIGI_HOME_IMAGES[cluster.slug];
  return clusterIndex === 1 ? CLUSTER_CARD_IMAGES[3] : CLUSTER_CARD_IMAGES[clusterIndex];
}

export { PILLAR_SECTIONS };
