import Link from "next/link";
import { SITE_NAME, PILLARS, CLINIC_PHONE, CLINIC_ADDRESS } from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-secondary-foreground font-bold text-lg mb-2">{SITE_NAME}</p>
          <p className="text-sm leading-relaxed">
            Göz hakkındaki tüm şikayetleriniz için yanınızdayız.
          </p>
          {CLINIC_ADDRESS && (
            <p className="text-sm mt-3">{CLINIC_ADDRESS}</p>
          )}
          {CLINIC_PHONE && (
            <a href={`tel:${CLINIC_PHONE}`} className="text-sm text-primary hover:underline mt-1 block">
              {CLINIC_PHONE}
            </a>
          )}
        </div>

        <div>
          <p className="text-secondary-foreground font-semibold mb-3">Tedavi ve Makaleler</p>
          <ul className="space-y-2">
            {PILLARS.map((p) => (
              <li key={p.slug}>
                <Link href={p.href} className="text-sm hover:text-secondary-foreground transition-colors">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-secondary-foreground font-semibold mb-3">Hızlı Bağlantılar</p>
          <ul className="space-y-2">
            <li><Link href="/doktor-profili" className="text-sm hover:text-secondary-foreground">Hakkında</Link></li>
            <li><Link href="/online-danisma" className="text-sm hover:text-secondary-foreground">Online Danışma</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/20 text-center py-4 text-xs text-secondary-foreground/70">
        © {new Date().getFullYear()} {SITE_NAME}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
