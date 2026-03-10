const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6136828706312!2d29.078168976260052!3d40.98993937135306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac726ca60410f%3A0x2e368bd0653d1cfd!2sMemorial%20G%C3%B6ztepe%20Hastanesi!5e0!3m2!1sen!2str!4v1770950052446!5m2!1sen!2str";

/**
 * CTA box for /randevu-al only: title + map, no description, no button.
 * Mobile: same proportions as CTABanner (matching text-block height and map section).
 * Other pages use CTABanner.
 */
export default function RandevuAlCTABanner() {
  return (
    <div className="bg-secondary text-secondary-foreground rounded-2xl my-12 overflow-hidden">
      {/* Navy section: on mobile half height (py-5, min-h-6rem); desktop unchanged */}
      <div className="px-8 py-5 sm:py-10 min-h-[6rem] sm:min-h-0 flex items-center justify-center text-center">
        <h2 className="text-2xl font-bold">Yol Tarifi İçin Haritaya Tıklayın</h2>
      </div>
      {/* Same map section as CTABanner */}
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
