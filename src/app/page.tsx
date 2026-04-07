import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import HikingGuide from "@/components/HikingGuide";
import ListingDetailSection from "@/components/ListingDetailSection";
import SleepSection from "@/components/SleepSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GrevenmacherSection from "@/components/GrevenmacherSection";
import CtaReserveSection from "@/components/CtaReserveSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { absoluteUrl, seoRoutes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wandelen in Luxemburg | Verblijf voor Nederlandse wandelaars",
  description:
    "Voor Nederlanders die zoeken op 'wanderen in Luxembourg' of 'wandelen in Luxemburg': ontdek routes en boek een comfortabele uitvalsbasis in Grevenmacher.",
  keywords: [
    "wanderen in Luxembourg",
    "wandelen in Luxemburg",
    "wandelen in Luxembourg",
    "wandelroutes Luxemburg",
    "wandelvakantie Luxemburg",
    "overnachten in Grevenmacher",
    "hiking in Luxembourg",
  ],
  alternates: {
    canonical: seoRoutes.home,
    languages: {
      "en": seoRoutes.enHub,
      "nl-NL": seoRoutes.nlHub,
      "x-default": seoRoutes.home,
    },
  },
  openGraph: {
    title: "Wandelen in Luxemburg | Verblijf voor Nederlandse wandelaars",
    description:
      "Routes, planning en verblijf voor toeristen uit Nederland die willen wandelen in Luxemburg.",
    url: absoluteUrl(seoRoutes.home),
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wandelen in Luxemburg | Voor Nederlandse toeristen",
    description:
      "Complete gids met wandelroutes en verblijf in Grevenmacher voor jouw trip naar Luxemburg.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="overflow-hidden">
        <HeroSection />
        <ListingDetailSection />
        <SleepSection />
        <AmenitiesSection />
        <HikingGuide />

        <section className="py-24 bg-gradient-to-b from-slate-50/80 via-background to-slate-50/60 border-y border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-4 py-1.5 text-xs font-semibold tracking-wide">
                Multilingual Hiking Guides
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-3">
                Choose Your Preferred Guide Language
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Use dedicated Dutch and English pages for route planning,
                practical travel tips, and booking guidance. Dive into the
                bilingual blog for deeper route strategy.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <article className="rounded-2xl border border-border/70 bg-card/90 backdrop-blur p-7 shadow-soft hover:shadow-medium transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  For Dutch tourists: Wandelen in Luxemburg
                </h3>
                <p className="text-muted-foreground mb-4">
                  Planning from Holland? Explore Dutch-language route ideas,
                  practical travel tips, and trail-friendly accommodation.
                </p>
                <Link
                  href={seoRoutes.nlHub}
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-hover"
                >
                  Visit the Dutch hiking guide
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
              <article className="rounded-2xl border border-border/70 bg-card/90 backdrop-blur p-7 shadow-soft hover:shadow-medium transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Full English Hiking Hub
                </h3>
                <p className="text-muted-foreground mb-4">
                  Read our complete English guide to the best hikes in
                  Luxembourg, route logistics, and where to stay in Grevenmacher.
                </p>
                <Link
                  href={seoRoutes.enHub}
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-hover"
                >
                  Visit the English hiking guide
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
              <article className="rounded-2xl border border-border/70 bg-card/90 backdrop-blur p-7 shadow-soft hover:shadow-medium transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Bilingual Hiking Blog
                </h3>
                <p className="text-muted-foreground mb-4">
                  Read Dutch and English articles targeting search terms like
                  "wanderen in Luxembourg" with practical route and travel
                  logistics.
                </p>
                <Link
                  href={seoRoutes.blog}
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-hover"
                >
                  Explore the blog
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <GrevenmacherSection />
        <CtaReserveSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
