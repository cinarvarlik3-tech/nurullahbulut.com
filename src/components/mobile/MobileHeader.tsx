"use client";

import { Button } from "@/components/ui/button";
import { PILLAR_SECTIONS } from "@/lib/constants";
import { ChevronDown, ChevronRight, Eye, Menu, MoveRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileHeader() {
  const [isOpen, setOpen] = useState(false);
  const [openPillarSlug, setOpenPillarSlug] = useState<string | null>(null);

  const togglePillar = (slug: string) => {
    setOpenPillarSlug((prev) => (prev === slug ? null : slug));
  };

  const closeDrawer = () => setOpen(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-secondary border-b border-secondary-foreground/20 shadow-sm">
      <div className="max-w-6xl relative mx-auto px-4 min-h-16 flex flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex min-w-0">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-white/90 transition-colors"
            aria-label="Ana Sayfa"
          >
            <Eye size={28} strokeWidth={1.5} className="shrink-0 text-white" />
            <span className="font-semibold text-white text-sm leading-tight flex flex-col">
              <span>Doç. Dr. Nurullah</span>
              <span>Bulut</span>
            </span>
          </Link>
        </div>

        {/* Right: Randevu Al + Burger */}
        <div className="flex items-center gap-1 shrink-0">
          <Link href="/randevu-al">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
              Randevu Al
            </Button>
          </Link>
          <Button
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </Button>
        </div>
      </div>

      {/* Drawer: always in DOM for crawlability; visibility via class */}
      <nav
        id="mobile-nav"
        aria-label="Mobil gezinme"
        aria-hidden={!isOpen}
        className={
          isOpen
            ? "border-t border-border flex flex-col w-full bg-white shadow-lg py-4 px-4 gap-1"
            : "border-t border-border flex flex-col w-full bg-white shadow-lg py-4 px-4 gap-1 hidden"
        }
      >
        <Link
          href="/"
          className="flex justify-between items-center py-3 px-2 rounded-lg hover:bg-muted/50 text-card-foreground font-medium"
          onClick={closeDrawer}
        >
          Ana Sayfa
          <MoveRight className="w-4 h-4 text-muted-foreground" />
        </Link>

        {PILLAR_SECTIONS.map((section) => {
          const isExpanded = openPillarSlug === section.pillarSlug;
          return (
            <div key={section.pillarSlug} className="flex flex-col gap-0">
              <button
                type="button"
                onClick={() => togglePillar(section.pillarSlug)}
                className="flex justify-between items-center w-full py-3 px-2 rounded-lg hover:bg-muted/50 text-left text-card-foreground font-medium"
                aria-expanded={isExpanded}
                aria-controls={`mobile-pillar-${section.pillarSlug}`}
              >
                <span>{section.pillarTitle}</span>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </button>
              <div
                id={`mobile-pillar-${section.pillarSlug}`}
                role="region"
                aria-label={section.pillarTitle}
                className={isExpanded ? "flex flex-col pb-2" : "hidden"}
              >
                <Link
                  href={section.pillarHref}
                  className="flex justify-between items-center py-2 pl-6 pr-2 rounded-lg hover:bg-muted/50 text-sm text-muted-foreground hover:text-foreground"
                  onClick={closeDrawer}
                >
                  Tümü
                  <MoveRight className="w-4 h-4" />
                </Link>
                {section.clusters.map((cluster) => (
                  <Link
                    key={cluster.slug}
                    href={`${section.pillarHref}/${cluster.slug}`}
                    className="flex justify-between items-center py-2 pl-6 pr-2 rounded-lg hover:bg-muted/50 text-sm text-muted-foreground hover:text-foreground"
                    onClick={closeDrawer}
                  >
                    {cluster.title}
                    <MoveRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <Link
          href="/doktor-profili"
          className="flex justify-between items-center py-3 px-2 rounded-lg hover:bg-muted/50 text-card-foreground font-medium"
          onClick={closeDrawer}
        >
          Doktor Profili
          <MoveRight className="w-4 h-4 text-muted-foreground" />
        </Link>
        <Link
          href="/online-danisma"
          className="flex justify-between items-center py-3 px-2 rounded-lg hover:bg-muted/50 text-card-foreground font-medium"
          onClick={closeDrawer}
        >
          Online Danışma
          <MoveRight className="w-4 h-4 text-muted-foreground" />
        </Link>

        <Link
          href="/randevu-al"
          className="block w-full text-center px-4 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors mt-4"
          onClick={closeDrawer}
        >
          Randevu Al
        </Link>
      </nav>
    </header>
  );
}
