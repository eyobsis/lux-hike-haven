import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Heart,
  Home,
  Mountain,
  Users,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { getAirbnbUrl } from "@/lib/links";

const AboutSection = () => {
  const airbnbUrl = getAirbnbUrl("about-section", "host-story");

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-muted/45 via-background to-muted/35"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 animate-fade-in">
            <p className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary mb-4">
              About Your Hosts
            </p>
            <h2 className="section-title text-foreground mb-4">
              About Your Hosts & Our Story
            </h2>
            <p className="section-subtitle text-muted-foreground max-w-2xl mx-auto">
              Passionate about Luxembourg's natural beauty, we created this
              space for fellow adventurers and nature lovers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-start">
            {/* Story Content */}
            <div className="animate-slide-up space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-primary/35 bg-gradient-forest p-8 text-primary-foreground shadow-medium">
                <div className="absolute -top-14 -right-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-16 -left-8 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />
                <div className="relative">
                  <Heart className="h-8 w-8 mb-4 opacity-90" />
                  <h3 className="text-2xl font-semibold mb-4">
                    Our Passion for Luxembourg
                  </h3>
                  <p className="opacity-95 leading-relaxed mb-5">
                    "After living in Luxembourg for over 10 years, we've
                    explored trails, hidden viewpoints, and local gems across
                    the country. This home was created so guests can experience
                    that same adventure with comfort and confidence."
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 text-sm">
                    <div className="rounded-lg border border-white/25 bg-white/10 p-3">
                      <p className="font-semibold">Trail-tested planning</p>
                      <p className="opacity-80">Real local route insight</p>
                    </div>
                    <div className="rounded-lg border border-white/25 bg-white/10 p-3">
                      <p className="font-semibold">Guest-first hosting</p>
                      <p className="opacity-80">Fast and personal support</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-border/70 bg-card/80 backdrop-blur-sm shadow-soft">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Why guests choose this experience
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Our apartment is designed as a practical and comfortable
                    hiking base. You can quickly reach major trail areas while
                    still enjoying shops, restaurants, and city convenience.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <article className="rounded-lg border border-border/70 bg-background p-4">
                      <MapPin className="h-5 w-5 text-primary mb-2" />
                      <p className="text-sm font-semibold text-foreground">Central Access</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Great starting point for multiple regions.
                      </p>
                    </article>
                    <article className="rounded-lg border border-border/70 bg-background p-4">
                      <ShieldCheck className="h-5 w-5 text-primary mb-2" />
                      <p className="text-sm font-semibold text-foreground">Reliable Support</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Friendly help before and during your stay.
                      </p>
                    </article>
                    <article className="rounded-lg border border-border/70 bg-background p-4">
                      <Sparkles className="h-5 w-5 text-primary mb-2" />
                      <p className="text-sm font-semibold text-foreground">Thoughtful Comfort</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Space to recover after active days.
                      </p>
                    </article>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Cards */}
            <div
              className="grid grid-cols-1 gap-5 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Card className="hover:shadow-medium transition-all duration-300 border-border/70">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-xl p-3">
                      <Mountain className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Local Hiking Expertise
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Years on Luxembourg trails means practical guidance on
                        route choice, pacing, and must-see viewpoints.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300 border-border/70">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-xl p-3">
                      <Home className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Thoughtful Amenities
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Designed for active guests with practical comfort,
                        flexible space, and easy day-to-day logistics.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300 border-border/70">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-xl p-3">
                      <Users className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Personal Touch
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        We are available to help with itinerary ideas and local
                        recommendations tailored to your trip style.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/70 bg-gradient-to-br from-background to-muted/40">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Plan your stay with confidence
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ready to build your Luxembourg hiking itinerary? Start with
                    our accommodation details or contact us for local guidance.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="sm">
                      <a
                        href={airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book on Airbnb
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/#contact">Contact the Hosts</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Guest Testimonial */}
          {/* Removed testimonial block */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
