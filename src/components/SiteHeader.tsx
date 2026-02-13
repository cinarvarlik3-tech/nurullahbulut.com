"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary border-b border-secondary-foreground/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-secondary-foreground hover:opacity-90 transition-colors" aria-label="Ana Sayfa">
          <Eye size={32} strokeWidth={1.5} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-secondary-foreground/90 hover:text-secondary-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/randevu-al"
            className="ml-2 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90 transition-colors"
          >
            Randevu Al
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-secondary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menüyü aç/kapat"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm text-card-foreground hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/randevu-al"
            className="mt-3 block w-full text-center px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg"
            onClick={() => setOpen(false)}
          >
            Randevu Al
          </Link>
        </div>
      )}
    </header>
  );
}
