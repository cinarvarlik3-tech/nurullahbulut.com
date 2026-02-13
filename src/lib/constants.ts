export const SITE_NAME = "Doç. Dr. Nurullah Bulut";
export const SITE_URL = "https://example.com"; // Update with real domain
export const DOCTOR_NAME = ""; // Update with doctor's name
export const CLINIC_PHONE = ""; // Update with phone number
export const CLINIC_EMAIL = ""; // Update with contact email (optional)
export const CLINIC_ADDRESS = ""; // Update with address
export const WHATSAPP_NUMBER = ""; // Update with WhatsApp number (e.g. "905XXXXXXXXX")
export const INSTAGRAM_URL = "https://www.instagram.com/dr.nurullahbulut/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/doç-dr-nurullah-bulut-337796395/";

export const NAV_ITEMS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Lazer Göz Tedavileri", href: "/lazer-goz-tedavileri" },
  { label: "Katarakt ve Akıllı Lens", href: "/katarakt-akilli-lens" },
  { label: "Göz Hastalıkları", href: "/goz-hastaliklari-ve-belirtileri" },
  { label: "Göz Sağlığı", href: "/goz-sagligi-ve-koruma" },
  { label: "Doktor Profili", href: "/doktor-profili" },
  { label: "Online Danışma", href: "/online-danisma" },
];

export const PILLARS = [
  {
    slug: "lazer-goz-tedavileri",
    title: "Lazer Göz Tedavileri",
    description:
      "LASIK, PRK ve No Touch Lazer yöntemleri hakkında kapsamlı bilgi.",
    href: "/lazer-goz-tedavileri",
  },
  {
    slug: "katarakt-akilli-lens",
    title: "Katarakt ve Akıllı Lens",
    description:
      "Katarakt ameliyatı ve akıllı lens tedavileri hakkında her şey.",
    href: "/katarakt-akilli-lens",
  },
  {
    slug: "goz-hastaliklari-ve-belirtileri",
    title: "Göz Hastalıkları ve Belirtileri",
    description:
      "Miyop, astigmat, glokom ve diğer göz hastalıkları hakkında bilgi.",
    href: "/goz-hastaliklari-ve-belirtileri",
  },
  {
    slug: "goz-sagligi-ve-koruma",
    title: "Göz Sağlığı ve Koruma",
    description: "Göz sağlığınızı korumak için ipuçları ve öneriler.",
    href: "/goz-sagligi-ve-koruma",
  },
];

/** Home: each pillar section = heading (links to pillar) + 3 cluster cards. */
export const PILLAR_SECTIONS = [
  {
    pillarTitle: "Lazer Göz Tedavileri",
    pillarHref: "/lazer-goz-tedavileri",
    pillarSlug: "lazer-goz-tedavileri",
    clusters: [
      { title: "No Touch Lazer Nedir", slug: "no-touch-lazer-nedir" },
      { title: "LASIK Nedir", slug: "lasik-nedir" },
      { title: "PRK Nedir", slug: "prk-nedir" },
    ],
  },
  {
    pillarTitle: "Katarakt ve Akıllı Lens",
    pillarHref: "/katarakt-akilli-lens",
    pillarSlug: "katarakt-akilli-lens",
    clusters: [
      { title: "Katarakt Belirtileri", slug: "katarakt-belirtileri" },
      { title: "Katarakt Neden Olur", slug: "katarakt-neden-olur" },
      { title: "Katarakt Ameliyatı Nasıl Yapılır", slug: "katarakt-ameliyati-nasil-yapilir" },
    ],
  },
  {
    pillarTitle: "Göz Hastalıkları ve Belirtileri",
    pillarHref: "/goz-hastaliklari-ve-belirtileri",
    pillarSlug: "goz-hastaliklari-ve-belirtileri",
    clusters: [
      { title: "Miyop Nedir", slug: "miyop-nedir" },
      { title: "Astigmat Nedir", slug: "astigmat-nedir" },
      { title: "Hipermetrop Nedir", slug: "hipermetrop-nedir" },
    ],
  },
  {
    pillarTitle: "Göz Sağlığı ve Koruma",
    pillarHref: "/goz-sagligi-ve-koruma",
    pillarSlug: "goz-sagligi-ve-koruma",
    clusters: [
      { title: "Ekran Göz Yorgunluğu", slug: "ekran-goz-yorgunlugu" },
      { title: "Göz Kuruluğu Nasıl Geçer", slug: "goz-kurulugu-nasil-gecer" },
      { title: "Mavi Işık Zararlı mı?", slug: "mavi-isik-zararli-mi" },
    ],
  },
];
