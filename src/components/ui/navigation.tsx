"use client";

import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { getAirbnbUrl } from "@/lib/links";
import Link from "next/link";
import { seoRoutes } from "@/lib/site";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const airbnbUrl = getAirbnbUrl("navigation-bar");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Lux Traveler
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2 xl:space-x-4 bg-card/60 border border-border/60 rounded-full px-3 py-2 shadow-sm">
              <Link href="/#listing">
                <button className="nav-link px-3 py-1.5 rounded-full hover:bg-muted/60 transition-colors">📸 Listing</button>
              </Link>
              <Link href="/#hiking">
                <button className="nav-link px-3 py-1.5 rounded-full hover:bg-muted/60 transition-colors">🥾 Hiking</button>
              </Link>
              <Link href="/#grevenmacher">
                <button className="nav-link px-3 py-1.5 rounded-full hover:bg-muted/60 transition-colors">🏛️ Grevenmacher</button>
              </Link>
              <Link href="/#about">
                <button className="nav-link px-3 py-1.5 rounded-full hover:bg-muted/60 transition-colors">ℹ️ About</button>
              </Link>
              <Link href="/#contact">
                <button className="nav-link px-3 py-1.5 rounded-full hover:bg-muted/60 transition-colors">✉️ Contact</button>
              </Link>
              <Link href={seoRoutes.nlHub}>
                <button className="text-foreground hover:text-primary transition-colors duration-200 font-semibold px-3 py-1.5 rounded-full hover:bg-muted/60">
                  NL Hiking
                </button>
              </Link>
              <Link href={seoRoutes.enHub}>
                <button className="text-foreground hover:text-primary transition-colors duration-200 font-semibold px-3 py-1.5 rounded-full hover:bg-muted/60">
                  EN Hiking
                </button>
              </Link>
              <Link href="/photo-tour">
                <button className="text-foreground hover:text-primary transition-colors duration-200 font-semibold px-3 py-1.5 rounded-full hover:bg-muted/60">
                  🖼️ Photos
                </button>
              </Link>
              <button
                onClick={() => window.open(airbnbUrl, "_blank")}
                className="ml-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-5 py-2 rounded-full hover:opacity-95 shadow-md hover:shadow-lg transition-all duration-200 font-semibold"
              >
                Reserve
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground rounded-full border border-border/60 bg-card/60 hover:bg-muted/60"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-5 space-y-2 bg-background/90 backdrop-blur-xl border-t border-border/60 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)] rounded-b-2xl">
              <Link href="/#listing">
                <button className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left rounded-xl hover:bg-muted/60">
                  📸 Listing
                </button>
              </Link>
              <Link href="/#hiking">
                <button className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left rounded-xl hover:bg-muted/60">
                  🥾 Hiking
                </button>
              </Link>
              <Link href="/#grevenmacher">
                <button className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left rounded-xl hover:bg-muted/60">
                  🏛️ Grevenmacher
                </button>
              </Link>
              <Link href="/#about">
                <button className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left rounded-xl hover:bg-muted/60">
                  ℹ️ About
                </button>
              </Link>
              <Link href="/#contact">
                <button className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left rounded-xl hover:bg-muted/60">
                  ✉️ Contact
                </button>
              </Link>
              <Link href={seoRoutes.nlHub}>
                <button className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left rounded-xl hover:bg-muted/60">
                  NL Hiking
                </button>
              </Link>
              <Link href={seoRoutes.enHub}>
                <button className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left rounded-xl hover:bg-muted/60">
                  EN Hiking
                </button>
              </Link>
              <Link href="/photo-tour">
                <button className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left rounded-xl hover:bg-muted/60">
                  🖼️ Photos
                </button>
              </Link>
              <button
                onClick={() => window.open(airbnbUrl, "_blank")}
                className="block px-4 py-3 text-base font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl hover:opacity-95 transition-all duration-200 w-full text-center mt-2 shadow-md"
              >
                Reserve
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
