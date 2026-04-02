"use client";

import type { ComponentType } from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  Globe2,
  Images,
  Info,
  Mail,
  MapPin,
  Menu,
  Mountain,
  X,
} from "lucide-react";

import { getAirbnbUrl } from "@/lib/links";
import { seoRoutes } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Button } from "./button";

type NavItem = {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  isSectionLink?: boolean;
};

const primaryNavItems: NavItem[] = [
  { href: "/#listing", label: "Listing", icon: Camera, isSectionLink: true },
  { href: "/#hiking", label: "Hiking", icon: Mountain, isSectionLink: true },
  {
    href: "/#grevenmacher",
    label: "Grevenmacher",
    icon: MapPin,
    isSectionLink: true,
  },
  { href: "/#about", label: "About", icon: Info, isSectionLink: true },
  { href: "/#contact", label: "Contact", icon: Mail, isSectionLink: true },
];

const seoNavItems: NavItem[] = [
  { href: seoRoutes.nlHub, label: "NL Hiking", icon: Globe2 },
  { href: seoRoutes.enHub, label: "EN Hiking", icon: Globe2 },
  { href: "/photo-tour", label: "Photos", icon: Images },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const airbnbUrl = getAirbnbUrl("navigation-bar");
  const pathname = usePathname();

  const isNavItemActive = (item: NavItem) => {
    if (item.isSectionLink) {
      return pathname === "/";
    }

    if (item.href === seoRoutes.nlHub) {
      return pathname.startsWith("/nl");
    }

    if (item.href === seoRoutes.enHub) {
      return pathname.startsWith("/en");
    }

    return pathname === item.href;
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const desktopLinkClass = (isActive: boolean) =>
    cn(
      "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2",
      "active:scale-[0.98]",
      isActive
        ? "bg-primary/12 text-primary shadow-soft"
        : "text-foreground/90 hover:bg-muted/70 hover:text-primary"
    );

  const mobileLinkClass = (isActive: boolean) =>
    cn(
      "group flex w-full items-center justify-between rounded-2xl border px-4 py-3.5 text-base font-semibold transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2",
      "active:scale-[0.99]",
      isActive
        ? "border-primary/30 bg-primary/10 text-primary shadow-soft"
        : "border-transparent bg-card/60 text-foreground hover:border-border/70 hover:bg-muted/70 hover:text-primary"
    );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-[0_12px_36px_-24px_rgba(0,0,0,0.4)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="group inline-flex items-center">
              <h1 className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-2xl font-extrabold tracking-tight text-transparent transition-opacity duration-200 group-hover:opacity-90">
                Lux Traveler
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-3">
            <div className="ml-6 flex items-center gap-1.5 rounded-full border border-border/70 bg-card/70 px-2.5 py-2 shadow-soft">
              {[...primaryNavItems, ...seoNavItems].map((item) => {
                const Icon = item.icon;
                const isActive = isNavItemActive(item);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={desktopLinkClass(isActive)}
                  >
                    <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-105" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <button
              onClick={() => window.open(airbnbUrl, "_blank")}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 text-sm font-semibold text-primary-foreground shadow-[0_12px_28px_-16px_hsl(var(--primary)/0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-16px_hsl(var(--primary)/0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
            >
              <CalendarDays className="h-4 w-4" />
              Reserve
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="h-11 w-11 rounded-2xl border border-border/70 bg-card/70 text-foreground hover:bg-muted/70 focus-visible:ring-primary/45 active:scale-[0.98]"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-background/95 p-3 backdrop-blur-xl shadow-[0_16px_36px_-24px_rgba(0,0,0,0.45)]">
              <div className="space-y-1.5">
                {[...primaryNavItems, ...seoNavItems].map((item) => {
                  const Icon = item.icon;
                  const isActive = isNavItemActive(item);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={mobileLinkClass(isActive)}
                      onClick={handleNavClick}
                    >
                      <span className="inline-flex items-center gap-3">
                        <span className="rounded-xl bg-muted/70 p-2 text-primary transition-colors duration-200 group-hover:bg-primary/12">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>{item.label}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </Link>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  handleNavClick();
                  window.open(airbnbUrl, "_blank");
                }}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-5 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_12px_30px_-16px_hsl(var(--primary)/0.85)] transition-all duration-300 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 active:scale-[0.99]"
              >
                <CalendarDays className="h-4 w-4" />
                Reserve Stay
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
