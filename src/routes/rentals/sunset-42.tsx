import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import {
  Sunset,
  Music,
  Wind,
  Waves,
  Utensils,
  Clock,
  ArrowRight,
  CheckCircle2,
  Star,
  Anchor,
} from "lucide-react";
import yachtImg from "@/assets/event-yacht.jpg";

export const Route = createFileRoute("/rentals/sunset-42")({
  component: Sunset42Page,
  head: () => ({
    meta: [
      { title: "Sunset 42 — SK Events & Management" },
      {
        name: "description",
        content:
          "Experience the golden hour aboard Sunset 42. 2-hour premium yacht package with 1 hour sailing and 1 hour anchor. AC yacht with music system from 3:30 PM onwards.",
      },
    ],
  }),
});

const amenities = [
  { icon: Wind, label: "AC Yacht" },
  { icon: Music, label: "Music System" },
  { icon: Waves, label: "Open Sea Anchoring" },
  { icon: Utensils, label: "Bring Your Own Food & Liquor" },
];

const galleryImages = [
  { src: yachtImg, alt: "Sunset 42 yacht at golden hour" },
  { src: yachtImg, alt: "Sunset 42 deck view" },
  { src: yachtImg, alt: "Sunset 42 anchoring at sea" },
  { src: yachtImg, alt: "Sunset 42 interior lounge" },
  { src: yachtImg, alt: "Sunset 42 sailing experience" },
  { src: yachtImg, alt: "Sunset 42 evening cruise" },
];

function Sunset42Page() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="relative h-[80svh] min-h-[560px] w-full overflow-hidden vignette">
        <img
          src={yachtImg}
          alt="Sunset 42 yacht"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          style={{ animation: "hero-zoom 12s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[110vh] w-[110vh] bg-radial-glow opacity-50 blur-3xl" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-black/40 backdrop-blur px-5 py-2 text-[11px] tracking-[0.45em] uppercase text-gold">
              <Sunset className="h-3.5 w-3.5" />
              Sunset 42
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
              Chase the{" "}
              <span className="text-gradient-gold">Golden Hour</span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p
              className="mt-6 max-w-2xl font-serif text-xl italic text-white/90"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
            >
              A 2-hour premium voyage with AC comforts, open-sea anchoring, and
              complimentary refreshments — starting every evening from 3:30 PM.
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
            <Sunset className="h-5 w-5 text-gold flex-shrink-0" />
            <p className="font-serif text-lg italic text-foreground/90">
              <span className="text-gold font-bold not-italic">
                Evening Slot:
              </span>{" "}
              Available daily from{" "}
              <span className="text-gold font-semibold not-italic">
                3:30 PM onwards
              </span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── PACKAGE ── */}
      <section id="package" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="The Package"
          title="Sunset 42 Experience"
          subtitle="An unforgettable 2-hour voyage across the golden waters."
        />

        <div className="mt-16 max-w-2xl mx-auto">
          <Reveal>
            <div className="relative flex flex-col h-full rounded-3xl border border-gold bg-gradient-to-br from-gold/10 via-gold/5 to-transparent shadow-gold p-8 hover-lift transition-all duration-500">
              {/* Badge */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <span className="inline-flex items-center rounded-full bg-gradient-gold px-4 py-1.5 text-[10px] tracking-[0.35em] uppercase font-bold text-background">
                  Premium
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground border border-border rounded-full px-3 py-1">
                  Evening Slot
                </span>
              </div>

              <h2 className="font-display text-3xl text-foreground">
                Sunset Cruise Package
              </h2>

              <div className="mt-2 flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                <p className="font-serif italic text-foreground/70">
                  1 hr Sailing + 1 hr Anchor
                </p>
              </div>

              {/* Price */}
              <div className="mt-6 border-y border-gold/20 py-5">
                <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-1">
                  Package Price
                </p>
                <p className="font-display text-5xl text-gradient-gold">
                  ₹15,000
                </p>
                <p className="mt-1 font-serif italic text-sm text-muted-foreground">
                  2 Hours Total · From 3:30 PM onwards
                </p>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "1 hour open-sea sailing",
                  "1 hour anchoring in the middle of the water",
                  "Complimentary soft drinks, water, ice & soda",
                  "AC yacht with music system",
                  "Carry your own food & liquor",
                  "Perfect golden hour & sunset views",
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
          title="What's Included"
          subtitle="Everything you need for a perfect sunset experience at sea."
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {amenities.map((a, i) => (
            <Reveal key={a.label} delay={i * 60}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-7 text-center hover-lift hover:border-gold/50 transition-colors duration-500">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/15 to-gold/5 group-hover:from-gold/30 group-hover:border-gold/60 transition-all duration-500 shadow-md">
                  <a.icon className="h-6 w-6 text-gold" />
                </div>
                <p className="font-serif text-[15px] italic text-foreground/80 leading-snug">
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
          eyebrow="Sunset Diary"
          title="Golden Moments"
          subtitle="Captured aboard the Sunset 42 — where the sky meets the sea."
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
              "AC Yacht", "Sunset Views", "Open Sea Anchor", "Music System",
              "Soft Drinks Included", "Bring Your Own Food", "2 Hour Package", "Evening Slot",
              "AC Yacht", "Sunset Views", "Open Sea Anchor", "Music System",
              "Soft Drinks Included", "Bring Your Own Food", "2 Hour Package", "Evening Slot",
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
              The golden hour awaits
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-5xl md:text-7xl">
              Catch the <span className="text-gradient-gold">sunset</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 font-serif text-xl italic text-white/85 max-w-xl mx-auto">
              Book Sunset 42 today — evenings from 3:30 PM for the most breathtaking cruise in Goa.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <Link
              to="/contact"
              className="shimmer mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-10 py-4 text-xs tracking-[0.35em] uppercase text-foreground shadow-gold"
            >
              Reserve Your Sunset <ArrowRight className="h-4 w-4" />
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
