import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "İletişim",
  description: "Doç. Dr. Nurullah Bulut ile iletişime geçin. Randevu ve bilgi için iletişim sayfası.",
  path: "/iletisim",
});

export default function IletisimPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim" },
        ]}
      />

      <section className="mt-6 border-b border-border overflow-hidden">
        <div className="flex flex-col md:flex-row items-start">
          {/* Left: doctor image (same proportions and text as Hakkında page) */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-6 md:p-8">
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
            <header className="mt-6 w-full text-center md:text-left">
              <h2 className="text-3xl font-bold text-foreground">
                Doç. Dr. Nurullah Bulut
              </h2>
              <p className="text-xl text-muted-foreground mt-1">
                Göz Hastalıkları ve Cerrahisi Uzmanı
              </p>
            </header>
          </div>

          {/* Right: white box with shadow (same style as Hakkında section) — top aligned with image */}
          <div className="w-full md:w-1/2 flex items-stretch pt-6 md:pt-8 md:pl-0 pl-6 pr-6 md:pr-8">
            <div className="w-full bg-card overflow-hidden rounded-xl border border-border shadow-md flex flex-col justify-start items-start p-8 md:p-12 text-foreground text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">İletişim</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-md">
                Randevu ve bilgi için bize ulaşabilirsiniz.
              </p>
              <p className="text-base text-foreground">
                <strong>Telefon:</strong> 05350574224
              </p>
              <p className="text-base text-foreground mt-2 max-w-md">
                <strong>Adres:</strong> Yeni Sahra, Karaman Cd No: 1, 34634 Ataşehir/İstanbul (Memorial Göztepe Hastanesi)
              </p>
              <div className="flex justify-center sm:justify-start mt-8">
                <Link href="/randevu-al" className="inline-block min-w-[200px] text-center">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-8">
                    Randevu Al
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
