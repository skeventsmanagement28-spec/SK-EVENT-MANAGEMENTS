import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import {
  Anchor,
  Music,
  Wind,
  Waves,
  Coffee,
  Utensils,
  Wifi,
  Clock,
  ArrowRight,
  CheckCircle2,
  Star,
  Sun,
} from "lucide-react";
import funliner1 from "@/assets/funliner-1.PNG";
import funliner2 from "@/assets/funliner-2.png";
import funliner3 from "@/assets/funliner-3.png";
import funliner4 from "@/assets/funliner-4.png";
import funliner5 from "@/assets/funliner-5.png";
import funliner6 from "@/assets/funliner-6.png";
import funliner7 from "@/assets/funliner-7.png";
import funliner8 from "@/assets/funliner-8.png";
import funliner9 from "@/assets/funliner-9.png";
import funliner10 from "@/assets/funliner-10.png";
import funliner11 from "@/assets/funliner-11.png";

export const Route = createFileRoute("/rentals/funliner-yacht")({
  component: FunlinerYachtPage,
  head: () => ({
    meta: [
      { title: "Funliner Yacht — SK Events & Management" },
      {
        name: "description",
        content:
          "Sail in style aboard the Funliner luxury AC yacht. Discounted morning slots, 1.5-hour packages with sailing & anchor time, complimentary soft drinks, music system, and more.",
      },
    ],
  }),
});

const packages = [
  {
    id: "pkg-premium",
    badge: "Most Popular",
    name: "Premier Sail Package",
    duration: "1.5 Hours",
    breakdown: "1 hr Sailing + 30 min Anchor",
    price: "₹12,500",
    slot: "7 AM – 3:30 PM",
    tag: "Discounted Morning Slot",
    highlight: true,
    features: [
      "1 hour open-sea sailing",
      "30 minutes anchor in the middle of the water",
      "Complimentary soft drinks, water, ice & soda",
      "Bluetooth music system",
      "AC yacht & AC lounge room",
      "Carry your own food & liquor",
    ],
  },
  {
    id: "pkg-sail",
    badge: "Quick Escape",
    name: "Sailing Only Package",
    duration: "1 Hour",
    breakdown: "1 hr Pure Sailing",
    price: "₹10,000",
    slot: "7 AM – 3:30 PM",
    tag: "Discounted Morning Slot",
    highlight: false,
    features: [
      "1 hour open-sea sailing",
      "Complimentary soft drinks, water, ice & soda",
      "Bluetooth music system",
      "AC yacht & AC lounge room",
      "Carry your own food & liquor",
    ],
  },
];

const amenities = [
  { icon: Wind, label: "Air Conditioned Yacht" },
  { icon: Coffee, label: "AC Lounge & Room" },
  { icon: Music, label: "Bluetooth Music System" },
  { icon: Waves, label: "Anchor at Open Sea" },
  { icon: Utensils, label: "Bring Your Own Food" },
  { icon: Wifi, label: "Soft Drinks Complimentary" },
  { icon: Sun, label: "Morning Discounted Slots" },
  { icon: Clock, label: "Flexible Duration Packages" },
];

const galleryImages = [
  { src: funliner1, alt: "Funliner yacht sailing at sea" },
  { src: funliner2, alt: "Luxury yacht deck view" },
  { src: funliner3, alt: "Yacht anchor spot in ocean" },
  { src: funliner4, alt: "Onboard lounge and AC room" },
  { src: funliner5, alt: "Sunset yacht experience" },
  { src: funliner6, alt: "Yacht party celebration" },
  { src: funliner7, alt: "Luxury yacht deck lounge" },
  { src: funliner8, alt: "Beautiful sea cruise view" },
  { src: funliner9, alt: "Spacious AC yacht interiors" },
  { src: funliner10, alt: "Funliner scenic cruise" },
  { src: funliner11, alt: "Relaxing sunset sail" },
];

function FunlinerYachtPage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="relative h-[80svh] min-h-[560px] w-full overflow-hidden vignette">
        <img
          src={funliner1}
          alt="Funliner luxury yacht"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          style={{ animation: "hero-zoom 12s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />

        {/* Gold radial glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[110vh] w-[110vh] bg-radial-glow opacity-50 blur-3xl" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          {/* Badge */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-black/40 backdrop-blur px-5 py-2 text-[11px] tracking-[0.45em] uppercase text-gold">
              <Anchor className="h-3.5 w-3.5" />
              Funliner Yacht Experience
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
              Sail Into the{" "}
              <span className="text-gradient-gold">Extraordinary</span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-6 max-w-2xl font-serif text-xl italic text-white/90" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
              Luxury AC yacht, open-sea anchoring, complimentary refreshments,
              and Bluetooth music — your perfect escape from 7 AM.
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
                href="#packages"
                className="shimmer rounded-full border border-gold bg-black/40 backdrop-blur px-8 py-4 text-xs tracking-[0.35em] uppercase text-white"
              >
                View Packages
              </a>
            </div>
          </Reveal>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="h-10 w-px bg-gradient-to-b from-gold/0 to-gold/70 animate-pulse" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-white/70">scroll</span>
        </div>
      </section>

      {/* ── SLOT BANNER ── */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 px-8 py-5">
            <Sun className="h-5 w-5 text-gold flex-shrink-0" />
            <p className="font-serif text-lg italic text-foreground/90">
              <span className="text-gold font-bold not-italic">Discounted Morning Slot:</span>{" "}
              Available daily from <span className="text-gold font-semibold not-italic">7:00 AM to 3:30 PM</span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="The Packages"
          title="Choose Your Voyage"
          subtitle="Two curated packages — both offering the Funliner's finest comforts at the sea."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 150}>
              <div
                id={pkg.id}
                className={`relative flex flex-col h-full rounded-3xl border p-8 hover-lift transition-all duration-500 ${pkg.highlight
                    ? "border-gold bg-gradient-to-br from-gold/10 via-gold/5 to-transparent shadow-gold"
                    : "border-border bg-card"
                  }`}
              >
                {/* Badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span
                    className={`inline-flex items-center rounded-full px-4 py-1.5 text-[10px] tracking-[0.35em] uppercase font-bold ${pkg.highlight
                        ? "bg-gradient-gold text-background"
                        : "border border-gold/40 text-gold"
                      }`}
                  >
                    {pkg.badge}
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground border border-border rounded-full px-3 py-1">
                    {pkg.tag}
                  </span>
                </div>

                <h2 className="font-display text-3xl text-foreground">{pkg.name}</h2>

                <div className="mt-2 flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                  <p className="font-serif italic text-foreground/70">{pkg.breakdown}</p>
                </div>

                {/* Price */}
                <div className="mt-6 border-y border-gold/20 py-5">
                  <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-1">Starting from</p>
                  <p className="font-display text-5xl text-gradient-gold">{pkg.price}</p>
                  <p className="mt-1 font-serif italic text-sm text-muted-foreground">
                    Slot: {pkg.slot}
                  </p>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-serif text-[15px] text-foreground/85">
                      <CheckCircle2 className="h-4.5 w-4.5 text-gold flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`shimmer mt-8 w-full flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-xs tracking-[0.3em] uppercase font-bold transition-all ${pkg.highlight
                      ? "bg-gradient-gold text-background shadow-gold"
                      : "border border-gold text-foreground hover:bg-gold/10"
                    }`}
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
          title="Every Comfort, At Sea"
          subtitle="The Funliner is designed for total indulgence — air-conditioned interiors, music, and the open ocean."
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {amenities.map((a, i) => (
            <Reveal key={a.label} delay={i * 60}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-7 text-center hover-lift hover:border-gold/50 transition-colors duration-500">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/15 to-gold/5 group-hover:from-gold/30 group-hover:border-gold/60 transition-all duration-500 shadow-md">
                  <a.icon className="h-6 w-6 text-gold" />
                </div>
                <p className="font-serif text-[15px] italic text-foreground/80 leading-snug">{a.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── IMAGE GALLERY ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Funliner Diary"
          title="Moments on the Water"
          subtitle="A glimpse into the golden experiences aboard our luxury yacht."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className={`group img-zoom overflow-hidden rounded-2xl shadow-soft relative ${i === 0 ? "md:col-span-2 md:row-span-1 h-[320px]" : "h-[220px] md:h-[240px]"
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
      </section>

      {/* ── HIGHLIGHTS STRIP ── */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex w-max gap-16 animate-[marquee_30s_linear_infinite]">
            {[
              "AC Yacht", "Open Sea Anchor", "Bluetooth Music", "Soft Drinks Included",
              "Bring Your Food & Drinks", "Morning Discounts", "AC Lounge", "Premium Experience",
              "AC Yacht", "Open Sea Anchor", "Bluetooth Music", "Soft Drinks Included",
              "Bring Your Food & Drinks", "Morning Discounts", "AC Lounge", "Premium Experience",
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
          <img src={funliner1} alt="" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative px-8 py-24 md:py-36 text-center text-white">
          <Reveal>
            <p className="text-[11px] tracking-[0.5em] uppercase text-white/80">
              Your next escape awaits
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-5xl md:text-7xl">
              Ready to <span className="text-gradient-gold">set sail?</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 font-serif text-xl italic text-white/85 max-w-xl mx-auto">
              Book your Funliner yacht slot today — mornings from 7 AM at special discounted rates.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <Link
              to="/contact"
              className="shimmer mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-10 py-4 text-xs tracking-[0.35em] uppercase text-foreground shadow-gold"
            >
              Plan Your Voyage <ArrowRight className="h-4 w-4" />
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
