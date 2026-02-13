import Link from "next/link";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6136828706312!2d29.078168976260052!3d40.98993937135306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac726ca60410f%3A0x2e368bd0653d1cfd!2sMemorial%20G%C3%B6ztepe%20Hastanesi!5e0!3m2!1sen!2str!4v1770950052446!5m2!1sen!2str";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export default function CTABanner({
  title = "Muayene Randevusu Alın",
  description = "Göz şikayetleriniz için gecikmeden doktora görünün.",
}: CTABannerProps) {
  return (
    <div className="bg-secondary text-secondary-foreground rounded-2xl my-12 overflow-hidden">
      {/* CTA section — same vertical space as before */}
      <div className="px-8 py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">{description}</p>
        <Link
          href="/randevu-al"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Randevu Al
        </Link>
      </div>
      {/* Map section — half the previous height (8:3 ≈ half of 4:3) */}
      <div className="w-full aspect-[8/3] min-h-[140px] sm:min-h-[160px] md:min-h-[200px]">
        <iframe
          src={MAP_EMBED_SRC}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Memorial Göztepe Hastanesi konumu"
          className="block w-full h-full"
        />
      </div>
    </div>
  );
}
