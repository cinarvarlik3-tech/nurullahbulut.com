"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Types ---
export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data: Hasta Yorumları (patient reviews) ---
const testimonials: Testimonial[] = [
  {
    text: "Lazer ameliyatı öncesi çok endişeliydim. Operasyon çok kısa sürdü, ağrı hissetmedim. Artık gözlüksüz yaşıyorum, herkese tavsiye ederim.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Lazer ameliyatı hastası",
  },
  {
    text: "Katarakt ameliyatı sonrası hem uzağı hem yakını net görüyorum. Doktor ve ekibi çok ilgiliydi, süreç sorunsuz geçti.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "Katarakt ameliyatı hastası",
  },
  {
    text: "Randevu ve ameliyat sürecinde destek ekibi hep yanımdaydı. Tüm sorularıma sabırla cevap verdiler, kendimi güvende hissettim.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Akıllı lens hastası",
  },
  {
    text: "Yıllardır gözlük kullandıktan sonra lazer ile hayatım değişti. Kliniğin hijyeni ve profesyonelliği çok etkileyici.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "LASIK hastası",
  },
  {
    text: "Katarakt nedeniyle renkleri soluk görüyordum. Ameliyat sonrası dünya yeniden canlandı. Teşekkürler.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Katarakt ameliyatı hastası",
  },
  {
    text: "Ameliyat öncesi bilgilendirme çok iyiydi. Ne ile karşılaşacağımı biliyordum, bu da korkularımı azalttı. Memnunum.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Lazer ameliyatı hastası",
  },
  {
    text: "Göz kuruluğu ve ekran yorgunluğu için tedavi gördüm. Önerilen egzersiz ve damlalarla şikayetlerim azaldı.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Göz sağlığı hastası",
  },
  {
    text: "Beklentilerimin üzerinde bir hizmet aldım. Doktor bey ihtiyaçlarımı anladı ve tedaviyi buna göre planladı.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Akıllı lens hastası",
  },
  {
    text: "Online randevu sistemi çok pratik. Ameliyat sonrası kontroller de düzenli yapıldı, sonuçlardan çok memnunum.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "Lazer ameliyatı hastası",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  className="p-10 rounded-3xl border border-border dark:border-neutral-800 shadow-lg shadow-black/5 max-w-xs w-full bg-card text-card-foreground transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30 flex flex-col"
                >
                  <blockquote className="m-0 p-0 flex-1">
                    <p className="text-muted-foreground dark:text-neutral-400 leading-relaxed font-normal m-0">
                      {text}
                    </p>
                  </blockquote>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    — {name}
                  </p>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

// --- Section Component (exported for use on homepage) ---
export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-muted-foreground bg-muted transition-colors">
              Hasta Yorumları
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-foreground transition-colors"
          >
            Hastalarımız ne diyor?
          </h2>
          <p className="text-center mt-5 text-muted-foreground text-lg leading-relaxed max-w-sm transition-colors">
            Göz tedavilerimizden memnun kalan hastalarımızın deneyimlerini
            keşfedin.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Kaydırmalı hasta yorumları"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  );
}
