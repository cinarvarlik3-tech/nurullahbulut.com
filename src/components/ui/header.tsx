"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Eye, Menu, MoveRight, X } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MENU_LEAVE_DELAY_MS = 120;

function Header1() {
  const navigationItems = [
    {
      title: "Ana Sayfa",
      href: "/",
      description: "",
    },
    {
      title: "Tedaviler",
      description: "Göz cerrahisi ve tedavi seçeneklerimiz hakkında bilgi edinin.",
      items: [
        {
          title: "Lazer Göz Tedavileri",
          href: "/lazer-goz-tedavileri",
        },
        {
          title: "Katarakt ve Akıllı Lens",
          href: "/katarakt-akilli-lens",
        },
      ],
    },
    {
      title: "Bilgi Merkezi",
      description: "Göz sağlığınız hakkında kapsamlı rehberler ve bilgiler.",
      items: [
        {
          title: "Göz Hastalıkları",
          href: "/goz-hastaliklari-ve-belirtileri",
        },
        {
          title: "Göz Sağlığı ve Koruma",
          href: "/goz-sagligi-ve-koruma",
        },
      ],
    },
    {
      title: "Hakkımızda",
      description: "Doktor profilimiz ve hasta deneyimleri hakkında bilgi alın.",
      items: [
        {
          title: "Doktor Profili",
          href: "/doktor-profili",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [openMenuValue, setOpenMenuValue] = useState("");
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  const handleMenuEnter = (value: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setOpenMenuValue(value);
  };

  const handleMenuLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => setOpenMenuValue(""), MENU_LEAVE_DELAY_MS);
  };

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-secondary border-b border-secondary-foreground/20 shadow-sm">
      <div className="max-w-6xl relative mx-auto px-4 min-h-16 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">

        {/* Logo — left column */}
        <div className="flex lg:justify-start">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-white/90 transition-colors"
            aria-label="Ana Sayfa"
          >
            <Eye size={28} strokeWidth={1.5} />
            <span className="font-semibold text-white text-base hidden sm:inline">Doç. Dr. Nurullah Bulut</span>
          </Link>
        </div>

        {/* Desktop navigation — center column */}
        <div className="justify-center items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu
            value={openMenuValue}
            onValueChange={(v) => {
              if (v !== "") setOpenMenuValue(v);
            }}
            className="flex justify-center items-start"
          >
            <NavigationMenuList className="flex justify-center gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem
                  key={item.title}
                  value={item.items ? item.title : undefined}
                  className="relative"
                >
                  {item.href ? (
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>
                        <Button variant="ghost" className="bg-secondary text-secondary-foreground hover:!bg-white hover:!text-black">
                          {item.title}
                        </Button>
                      </Link>
                    </NavigationMenuLink>
                  ) : (
                    <div
                      onMouseEnter={() => handleMenuEnter(item.title)}
                      onMouseLeave={handleMenuLeave}
                      className="flex flex-col"
                    >
                      <NavigationMenuTrigger className="font-medium text-sm bg-secondary text-secondary-foreground hover:!bg-white hover:!text-black data-[state=open]:!bg-white data-[state=open]:!text-black">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent forceMount className="!w-[400px] p-4 bg-card border border-border text-black">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base font-medium text-black">{item.title}</p>
                              <p className="text-black/80 text-sm mt-1">
                                {item.description}
                              </p>
                            </div>
                            <Link href="/randevu-al">
                              <Button size="sm" className="mt-8 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                Randevu Al
                              </Button>
                            </Link>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink asChild key={subItem.title}>
                                <Link
                                  href={subItem.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push(subItem.href);
                                  }}
                                  className="flex flex-row justify-between items-center hover:bg-accent/10 hover:text-accent py-2 px-4 rounded transition-colors text-black cursor-pointer no-underline"
                                >
                                  <span>{subItem.title}</span>
                                  <MoveRight className="w-4 h-4 text-black/70" />
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </div>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA buttons — right column */}
        <div className="flex justify-end w-full gap-3">
          <Link href="/online-danisma" className="hidden md:inline-flex">
            <Button variant="ghost" className="bg-accent text-white hover:bg-accent/90 hover:text-white">
              Online Danışma
            </Button>
          </Link>
          <div className="border-r border-white/20 hidden md:inline-block self-stretch my-2"></div>
          <Link href="/randevu-al">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Randevu Al
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
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

      {/*
        Mobile drawer — always in the DOM so all <a href> links are present in
        the initial SSR HTML and crawlable. Visibility is toggled with a CSS
        class only (no conditional mounting). aria-hidden tells screen readers
        to skip it when closed; display:none removes it from the tab order.
      */}
      <nav
        id="mobile-nav"
        aria-label="Mobil gezinme"
        aria-hidden={!isOpen}
        className={
          isOpen
            ? "lg:hidden border-t border-border flex flex-col w-full bg-white shadow-lg py-4 px-4 gap-6"
            : "lg:hidden border-t border-border flex flex-col w-full bg-white shadow-lg py-4 px-4 gap-6 hidden"
        }
      >
        {navigationItems.map((item) => (
          <div key={item.title}>
            <div className="flex flex-col gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex justify-between items-center"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-base font-medium text-card-foreground">{item.title}</span>
                  <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                </Link>
              ) : (
                <p className="text-base font-medium text-card-foreground">{item.title}</p>
              )}
              {item.items &&
                item.items.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className="flex justify-between items-center py-1"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-sm text-white/70 hover:text-white transition-colors">
                      {subItem.title}
                    </span>
                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                  </Link>
                ))}
            </div>
          </div>
        ))}
        <Link
          href="/randevu-al"
          className="block w-full text-center px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors mt-2"
          onClick={() => setOpen(false)}
        >
          Randevu Al
        </Link>
      </nav>
    </header>
  );
}

export { Header1 };
