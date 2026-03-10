"use client";

import Image from "next/image";

const HERO_IMAGE = "/images/clinic/1758204720266.jpeg";

/**
 * Full-height hero box for /randevu-al: single image slot.
 * Mobile: same proportions as cluster cards (w-full h-[320px] min-h-[280px], rounded-2xl).
 * Desktop: full viewport height, rounded-3xl.
 */
export default function RandevuAlHeroBox() {
  return (
    <div
      className="w-full overflow-hidden flex flex-col shadow-lg relative bg-muted
        h-[320px] min-h-[280px] rounded-2xl
        sm:h-auto sm:min-h-[calc(100vh-6rem)] sm:rounded-3xl"
    >
      <Image
        src={HERO_IMAGE}
        alt="Memorial Göztepe Hastanesi"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 80vw"
        priority
      />
      {/* Navy gradient overlay at bottom — matches cluster card images */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, hsl(217 92% 18% / 0.9), hsl(217 92% 18% / 0.6) 30%, transparent 60%)",
        }}
      />
      {/* Text at left side, top of gradient */}
      <div className="absolute left-6 sm:left-8 bottom-8 sm:bottom-10 text-white">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Memorial Göztepe Hastanesi
        </h1>
        <p className="text-lg sm:text-xl font-semibold mt-1">Randevu almak için arayın</p>
        <a
          href="tel:+905350574224"
          className="text-base sm:text-lg mt-2 font-medium block hover:underline focus:underline focus:outline-none"
        >
          05350574224
        </a>
        <a
          href="tel:+902165426666"
          className="text-base sm:text-lg font-medium block hover:underline focus:underline focus:outline-none"
        >
          (0216) 542 66 66
        </a>
        <p className="text-sm text-white/90 mt-2 hidden sm:block">Yol tarifi için aşağıdaki haritaya tıklayın</p>
      </div>
    </div>
  );
}
