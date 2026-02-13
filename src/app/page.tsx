import type { Metadata } from "next";
import DeviceSwitch from "@/components/shared/DeviceSwitch";
import { SITE_NAME } from "@/lib/constants";
import { buildPhysicianSchema, buildMedicalClinicSchema } from "@/lib/seo";
import HomeDesktop from "./Desktop";
import HomeMobile from "./Mobile";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Göz Hastalıkları ve Lazer Göz Ameliyatı`,
  description:
    "Lazer göz ameliyatı, katarakt, akıllı lens tedavileri ve göz hastalıkları hakkında uzman bilgi. Online randevu alın.",
};

export default function HomePage() {
  const physicianSchema = buildPhysicianSchema();
  const clinicSchema = buildMedicalClinicSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <DeviceSwitch desktop={<HomeDesktop />} mobile={<HomeMobile />} />
    </>
  );
}
