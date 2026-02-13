import Image from "next/image";
import { buildMetadata, buildPhysicianSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import DoctorProfileAccordion from "@/components/ui/doctor-profile-accordion";

export const metadata = buildMetadata({
  title: "Doktor Profili",
  description:
    "Doç. Dr. Nurullah Bulut — göz hastalıkları ve cerrahisi uzmanı. Retina, katarakt, lazer göz tedavileri ve göz travmaları alanında deneyim.",
  path: "/doktor-profili",
});

export default function DoktorProfilPage() {
  const schema = buildPhysicianSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Breadcrumbs
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Doktor Profili" },
          ]}
        />

        <div className="mt-4 mb-8 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12 items-start">
          {/* Left half: photo and header */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full aspect-[3/4] max-w-sm rounded-xl overflow-hidden border border-border bg-muted">
              <Image
                src="/images/doctor/drnurullahbulur.jpg"
                alt="Doç. Dr. Nurullah Bulut"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <header className="mt-6 w-full text-center lg:text-left">
              <h1 className="text-3xl font-bold text-foreground">
                Doç. Dr. Nurullah Bulut
              </h1>
              <p className="text-xl text-muted-foreground mt-1">
                Göz Hastalıkları ve Cerrahisi Uzmanı
              </p>
            </header>
          </div>

          {/* Right half: accordion — box ends at bottom of content */}
          <div className="flex w-full flex-col lg:min-w-0">
            <div className="bg-card overflow-hidden rounded-xl border border-border">
              <h2 className="px-8 pt-8 pb-2 text-2xl font-bold text-foreground">
                Doktorumuz Hakkında
              </h2>
              <DoctorProfileAccordion />
            </div>
          </div>
        </div>

        <CTABanner />
      </div>
    </>
  );
}
