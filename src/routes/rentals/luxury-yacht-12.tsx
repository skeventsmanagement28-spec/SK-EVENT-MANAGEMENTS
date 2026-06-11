import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import {
  Anchor,
  Music,
  Wind,
  Waves,
  Utensils,
  Clock,
  ArrowRight,
  CheckCircle2,
  Star,
  Coffee,
  Sun,
  ShieldCheck,
} from "lucide-react";
import yachtImg from "@/assets/event-yacht.jpg";

export const Route = createFileRoute("/rentals/luxury-yacht-12")({
  component: LuxuryYacht12Page,
  head: () => ({
    meta: [
      { title: "Luxury Yacht 12 — SK Events & Management" },
      {
        name: "description",
        content:
          "Charter the Luxury Yacht 12 in Goa. Premium 2-hour sailing packages, air-conditioned lounges, bluetooth music system, and open-sea anchor.",
      },
    ],
  }),
});

const amenities = [
  { icon: Wind, label: "AC Lounges & Suite" },
  { icon: Music, label: "Premium Audio System" },
  { icon: Waves, label: "Anchor in Middle of Water" },
  { icon: Utensils, label: "BYO Food & Alcohol" },
  { icon: Coffee, label: "Complimentary Soft Drinks" },
  { icon: ShieldCheck, label: "5-Star Safety & Crew" },
];

const galleryImages = [
  { src: yachtImg, alt: "Luxury Yacht 12 sailing" },
  { src: yachtImg, alt: "Luxury Yacht 12 interior lounge" },
  { src: yachtImg, alt: "Open deck view" },
  { src: yachtImg, alt: "Anchored at open sea" },
  { src: yachtImg, alt: "Celebration onboard" },
  { src: yachtImg, alt: "Sunset view from yacht" },
];

function LuxuryYacht12Page() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="relative h-[80svh] min-h-[560px] w-full overflow-hidden vignette">
        <img
          src={yachtImg}
          alt="Luxury Yacht 12"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          style={{ animation: "hero-zoom 12s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[110vh] w-[110vh] bg-radial-glow opacity-50 blur-3xl" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-black/40 backdrop-blur px-5 py-2 text-[11px] tracking-[0.45em] uppercase text-gold">
              <Anchor className="h-3.5 w-3.5" />
              Luxury Yacht 12 — 15 Seater
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
              Pure Elegance <span className="text-gradient-gold">At Sea</span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p
              className="mt-6 max-w-2xl font-serif text-xl italic text-white/90"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
            >
              Set sail on the magnificent 15-seater Luxury Yacht 12. Spanning premium comfort,
              exquisite dining layouts, and beautiful sunset ocean views.
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
                Explore Package
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
            <Sun className="h-5 w-5 text-gold flex-shrink-0" />
            <p className="font-serif text-lg italic text-foreground/90">
              <span className="text-gold font-bold not-italic">Available Timing:</span>{" "}
              Daily from <span className="text-gold font-semibold not-italic">4:00 PM onwards</span> (Ideal for evening & sunset sails)
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── PACKAGE ── */}
      <section id="package" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="The Charter"
          title="Luxury Yacht 12 Package"
          subtitle="A minimum 2-hour voyage offering premium sailing and anchoring comfort in the evening."
        />

        <div className="mt-16 max-w-2xl mx-auto">
          <Reveal>
            <div className="relative flex flex-col h-full rounded-3xl border border-gold bg-gradient-to-br from-gold/10 via-gold/5 to-transparent shadow-gold p-8 hover-lift transition-all duration-500">
              <div className="flex items-start justify-between gap-4 mb-6">
                <span className="inline-flex items-center rounded-full bg-gradient-gold px-4 py-1.5 text-[10px] tracking-[0.35em] uppercase font-bold text-background">
                  Elite Class
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground border border-border rounded-full px-3 py-1">
                  15 Seater Yacht
                </span>
              </div>

              <h2 className="font-display text-3xl text-foreground">
                2-Hour Minimum Package
              </h2>

              <div className="mt-2 flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                <p className="font-serif italic text-foreground/70">
                  1 hr Sailing + 1 hr Anchor (Evening Slot)
                </p>
              </div>

              {/* Price */}
              <div className="mt-6 border-y border-gold/20 py-5">
                <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-1">
                  Charter Price
                </p>
                <p className="font-display text-5xl text-gradient-gold">
                  ₹25,000
                </p>
                <p className="mt-1 font-serif italic text-sm text-muted-foreground">
                  Time Slot: 4:00 PM onwards · Minimum 2 hours
                </p>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Luxury air-conditioned cabin and dining lounge",
                  "1 hour sailing into the deep sea, 1 hour anchor time",
                  "Complimentary soft drinks, premium water, ice & soda",
                  "Complimentary chips and namkeen snack items",
                  "Surround sound Bluetooth speaker system",
                  "Bring your own liquor and food (no corkage fee)",
                  "Safe and secure with professional captain & crew",
                ].map((f) => (
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
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="On Board"
          title="Amenities & Features"
          subtitle="Everything carefully designed for your absolute relaxation and luxury."
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
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
          eyebrow="Luxury Gallery"
          title="Inside the Experience"
          subtitle="A peek into what awaits you aboard the Luxury Yacht 12."
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
              "Luxury AC Cabins", "Sound System", "Deep Sea Cruising", "Bespoke Yacht Crew",
              "Bring Food & Liquor", "Refreshments Complimentary", "Elite Standards", "Scenic Anchor spots",
              "Luxury AC Cabins", "Sound System", "Deep Sea Cruising", "Bespoke Yacht Crew",
              "Bring Food & Liquor", "Refreshments Complimentary", "Elite Standards", "Scenic Anchor spots",
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
              uncompromised luxury
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-5xl md:text-7xl">
              Set Sail in <span className="text-gradient-gold">Style</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 font-serif text-xl italic text-white/85 max-w-xl mx-auto">
              Book Luxury Yacht 12 today. Perfect for birthdays, proposals, anniversaries and premium gatherings in Goa.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <Link
              to="/contact"
              className="shimmer mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-10 py-4 text-xs tracking-[0.35em] uppercase text-foreground shadow-gold"
            >
              Plan Yacht Charter <ArrowRight className="h-4 w-4" />
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
