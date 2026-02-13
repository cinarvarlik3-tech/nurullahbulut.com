import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, DOCTOR_NAME, CLINIC_ADDRESS, CLINIC_PHONE } from "./constants";

export function buildMetadata({
  title,
  description,
  path: pagePath = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${pagePath}`;
  const ogImage = image ?? "/images/og-default.jpg";

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
      locale: "tr_TR",
      type: "website",
    },
  };
}

export function buildPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: DOCTOR_NAME,
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
      streetAddress: CLINIC_ADDRESS,
    },
    telephone: CLINIC_PHONE,
    url: SITE_URL,
    medicalSpecialty: "Ophthalmology",
  };
}

export function buildMedicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: SITE_NAME,
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
      streetAddress: CLINIC_ADDRESS,
    },
    telephone: CLINIC_PHONE,
    url: SITE_URL,
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildArticleSchema({
  title,
  description,
  url,
  image,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    image: image ?? `${SITE_URL}/images/og-default.jpg`,
    author: {
      "@type": "Person",
      name: DOCTOR_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
