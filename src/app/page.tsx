import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Hiking in Luxembourg | Apartment Stay for Trail Travelers",
  description:
    "Discover top hikes in Luxembourg and stay in Grevenmacher. Plan trail days, local visits, and a comfortable apartment base from one place.",
  alternates: {
    canonical: seoRoutes.home,
    languages: {
      "en": seoRoutes.enHub,
      "nl-NL": seoRoutes.nlHub,
      "x-default": seoRoutes.home,
    },
  },
  openGraph: {
    title: "Hiking in Luxembourg | Apartment Stay for Trail Travelers",
    description:
      "Trail guides, route planning, and accommodation in Grevenmacher for your hiking trip in Luxembourg.",
    url: absoluteUrl(seoRoutes.home),
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSection />
        <section className="py-16">
          <ListingDetailSection />
        </section>
        <section className="py-16 bg-white">
          <SleepSection />
        </section>
        <section className="py-16">
          <AmenitiesSection />
        </section>
        <section className="py-16 bg-gray-100">
          <HikingGuide />
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  For Dutch tourists: Wandelen in Luxemburg
                </h2>
                <p className="text-muted-foreground mb-4">
                  Planning from Holland? Explore Dutch-language route ideas,
                  practical travel tips, and trail-friendly accommodation.
                </p>
                <Link
                  href={seoRoutes.nlHub}
                  className="font-semibold text-primary hover:text-primary-hover"
                >
                  Visit the Dutch hiking guide
                </Link>
              </article>
              <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Full English Hiking Hub
                </h2>
                <p className="text-muted-foreground mb-4">
                  Read our complete English guide to the best hikes in
                  Luxembourg, route logistics, and where to stay in Grevenmacher.
                </p>
                <Link
                  href={seoRoutes.enHub}
                  className="font-semibold text-primary hover:text-primary-hover"
                >
                  Visit the English hiking guide
                </Link>
              </article>
            </div>
          </div>
        </section>
        <section className="py-16">
          <GrevenmacherSection />
        </section>
        <section className="py-16 bg-primary text-primary-foreground">
          <CtaReserveSection />
        </section>
        <section className="py-16">
          <AboutSection />
        </section>
        <section className="py-16 bg-gray-100">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
