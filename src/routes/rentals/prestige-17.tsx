import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import {
  Crown,
  Music,
  Wind,
  Waves,
  Utensils,
  Clock,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Sun,
} from "lucide-react";
import yachtImg from "@/assets/event-yacht.jpg";

export const Route = createFileRoute("/rentals/prestige-17")({
  component: Prestige17Page,
  head: () => ({
    meta: [
      { title: "Prestige 17 (8 Seater Yacht) — SK Events & Management" },
      {
        name: "description",
        content:
          "Rent the luxury Prestige 17 yacht in Goa. An intimate 8-seater luxury cruiser featuring AC lounge, bluetooth sound system and open deck sunbathing.",
      },
    ],
  }),
});

const amenities = [
  { icon: Users, label: "Up to 8 Guests Capacity" },
  { icon: Wind, label: "AC Cabin & Lounge" },
  { icon: Music, label: "Premium Bluetooth Sound" },
  { icon: Waves, label: "Open Sea Anchoring" },
  { icon: Utensils, label: "Carry Own Food & Drinks" },
];

const packages = [
  {
    id: "pkg-2hr",
    badge: "Best Experience",
    name: "2-Hour Package",
    duration: "2 Hours",
    breakdown: "1 hr Sailing + 1 hr Anchor",
    price: "₹16,000",
    features: [
      "1 hour open-sea sailing",
      "1 hour anchoring at open sea",
      "Complimentary soft drinks, water, ice & soda",
      "Complimentary chips and namkeen",
      "Premium Bluetooth sound system",
      "AC yacht & AC cabin lounge room",
      "Carry your own food & liquor",
    ],
  },
  {
    id: "pkg-1-5hr",
    badge: "Most Popular",
    name: "1.5-Hour Package",
    duration: "1.5 Hours",
    breakdown: "1 hr Sailing + 30 min Anchor",
    price: "₹13,000",
    features: [
      "1 hour open-sea sailing",
      "30 minutes anchoring at open sea",
      "Complimentary soft drinks, water, ice & soda",
      "Complimentary chips and namkeen",
      "Premium Bluetooth sound system",
      "AC yacht & AC cabin lounge room",
      "Carry your own food & liquor",
    ],
  },
  {
    id: "pkg-1hr",
    badge: "Quick Sail",
    name: "1-Hour Sailing",
    duration: "1 Hour",
    breakdown: "1 hr Pure Sailing",
    price: "₹10,000",
    features: [
      "1 hour open-sea sailing",
      "Complimentary soft drinks, water, ice & soda",
      "Complimentary chips and namkeen",
      "Premium Bluetooth sound system",
      "AC yacht & AC cabin lounge room",
      "Carry your own food & liquor",
    ],
  },
];

const galleryImages = [
  { src: yachtImg, alt: "Prestige 17 cruising" },
  { src: yachtImg, alt: "Prestige 17 deck sunbed" },
  { src: yachtImg, alt: "Prestige 17 seating lounge" },
  { src: yachtImg, alt: "Anchor time in the ocean" },
  { src: yachtImg, alt: "Cozy cabin spaces" },
  { src: yachtImg, alt: "Prestige 17 sunset view" },
];

function Prestige17Page() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="relative h-[80svh] min-h-[560px] w-full overflow-hidden vignette">
        <img
          src={yachtImg}
          alt="Prestige 17 Yacht"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          style={{ animation: "hero-zoom 12s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[110vh] w-[110vh] bg-radial-glow opacity-50 blur-3xl" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-black/40 backdrop-blur px-5 py-2 text-[11px] tracking-[0.45em] uppercase text-gold">
              <Crown className="h-3.5 w-3.5" />
              Prestige 17
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
              Intimate <span className="text-gradient-gold">Sophistication</span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p
              className="mt-6 max-w-2xl font-serif text-xl italic text-white/90"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
            >
              The ultimate choice for an intimate cruise. Designed specifically for smaller groups of up to 8 guests.
            </p>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="shimmer rounded-full bg-gradient-gold px-8 py-4 text-xs tracking-[0.35em] uppercase text-background shadow-gold"
              >
                Book Now
              </Link>
              <a
                href="#package"
                className="shimmer rounded-full border border-gold bg-black/40 backdrop-blur px-8 py-4 text-xs tracking-[0.35em] uppercase text-white"
              >
                View Package
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="h-10 w-px bg-gradient-to-b from-gold/0 to-gold/70 animate-pulse" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-white/70">
            scroll
          </span>
        </div>
      </section>

      {/* ── SLOT BANNER ── */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 px-8 py-5">
            <Users className="h-5 w-5 text-gold flex-shrink-0" />
            <p className="font-serif text-lg italic text-foreground/90">
              <span className="text-gold font-bold not-italic">Capacities & Spaces:</span>{" "}
              Best suited for up to <span className="text-gold font-semibold not-italic">8 guests</span> for absolute exclusivity and premium comfort.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── PACKAGE ── */}
      <section id="package" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="The Packages"
          title="Choose Your Voyage"
          subtitle="Three premium options customized for an intimate yacht experience in Goa."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 150}>
              <div
                id={pkg.id}
                className="relative flex flex-col h-full rounded-3xl border border-gold bg-gradient-to-br from-gold/10 via-gold/5 to-transparent shadow-gold p-8 hover-lift transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="inline-flex items-center rounded-full bg-gradient-gold px-4 py-1.5 text-[10px] tracking-[0.35em] uppercase font-bold text-background">
                    {pkg.badge}
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground border border-border rounded-full px-3 py-1">
                    8 Seater
                  </span>
                </div>

                <h2 className="font-display text-3xl text-foreground">{pkg.name}</h2>

                <div className="mt-2 flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                  <p className="font-serif italic text-foreground/70">
                    {pkg.breakdown}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-6 border-y border-gold/20 py-5">
                  <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-1">
                    Package Price
                  </p>
                  <p className="font-display text-4xl text-gradient-gold">
                    {pkg.price}
                  </p>
                  <p className="mt-1 font-serif italic text-xs text-muted-foreground">
                    Time slot: 7:00 AM – 3:30 PM
                  </p>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 font-serif text-[15px] text-foreground/85"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-gold flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="shimmer mt-8 w-full flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-6 py-3.5 text-xs tracking-[0.3em] uppercase font-bold text-background shadow-gold"
                >
                  Enquire Now <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="On Board"
          title="Designed for 8 Seater Class"
          subtitle="Everything curated to offer high levels of hospitality in an intimate space."
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-6">
          {amenities.map((a, i) => (
            <Reveal key={a.label} delay={i * 60}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center hover-lift hover:border-gold/50 transition-colors duration-500">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/15 to-gold/5 group-hover:from-gold/30 group-hover:border-gold/60 transition-all duration-500 shadow-md">
                  <a.icon className="h-6 w-6 text-gold" />
                </div>
                <p className="font-serif text-[14px] italic text-foreground/85 leading-snug">
                  {a.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── IMAGE GALLERY ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Prestige Diary"
          title="Intimate Moments"
          subtitle="Captured onboard the Prestige 17 yacht cruiser."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className={`group img-zoom overflow-hidden rounded-2xl shadow-soft relative ${
                  i === 0
                    ? "md:col-span-2 md:row-span-1 h-[320px]"
                    : "h-[220px] md:h-[240px]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-6 text-center font-serif italic text-muted-foreground text-sm">
            * Real yacht photos will be added soon — these are placeholders.
          </p>
        </Reveal>
      </section>

      {/* ── HIGHLIGHTS STRIP ── */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex w-max gap-16 animate-[marquee_30s_linear_infinite]">
            {[
              "8 Seater Yacht", "Premium Audio", "AC Cabin & Lounge", "Open Sea anchor",
              "Perfect for Proposals", "Complimentary Soda & Soft Drinks", "Sunbathing Deck", "Exclusive Crew",
              "8 Seater Yacht", "Premium Audio", "AC Cabin & Lounge", "Open Sea anchor",
              "Perfect for Proposals", "Complimentary Soda & Soft Drinks", "Sunbathing Deck", "Exclusive Crew",
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-4 flex-shrink-0">
                <Star className="h-3 w-3 text-gold fill-gold" />
                <span className="text-[11px] tracking-[0.4em] uppercase text-foreground/70 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative my-20 mx-6 overflow-hidden rounded-3xl">
        <div className="absolute inset-0">
          <img src={yachtImg} alt="" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative px-8 py-24 md:py-36 text-center text-white">
          <Reveal>
            <p className="text-[11px] tracking-[0.5em] uppercase text-white/80">
              elegant gatherings
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-5xl md:text-7xl">
              An Intimate <span className="text-gradient-gold">Voyage</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 font-serif text-xl italic text-white/85 max-w-xl mx-auto">
              Book Prestige 17 today. A luxury 8-seater AC yacht charter perfect for small families or close friends in Goa.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <Link
              to="/contact"
              className="shimmer mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-10 py-4 text-xs tracking-[0.35em] uppercase text-foreground shadow-gold"
            >
              Plan Prestige Cruise <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes hero-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.12); }
        }
      `}</style>
    </PageShell>
  );
}
