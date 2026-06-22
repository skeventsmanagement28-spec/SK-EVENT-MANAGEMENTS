import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import {
  Ship,
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
  Users,
} from "lucide-react";
import yachtImg from "@/assets/event-yacht.jpg";

export const Route = createFileRoute("/rentals/catamaran-ac")({
  component: CatamaranAcPage,
  head: () => ({
    meta: [
      { title: "Catamaran AC Deck — SK Events & Management" },
      {
        name: "description",
        content:
          "Rent the premium Catamaran with AC Deck in Goa. Double-hull stability, capacity up to 25 guests, AC interior deck, and customized party packages.",
      },
    ],
  }),
});

const amenities = [
  { icon: Users, label: "Up to 25 Guests Capacity" },
  { icon: Wind, label: "Spacious AC Interior Deck" },
  { icon: Music, label: "High-End Sound & DJ Space" },
  { icon: Waves, label: "Dual-Hull Stable Sailing" },
  { icon: Utensils, label: "Optional Catering Services" },
  { icon: Coffee, label: "Complimentary Soft Drinks" },
];

const packages = [
  {
    id: "pkg-1hr-morning",
    badge: "1-Hour Cruising",
    name: "1-Hour Cruising Package",
    duration: "1 Hour",
    breakdown: "Cruising (₹45k) + Anchoring (₹15k)",
    price: "₹45,000",
    features: [
      "1 hour open-sea cruising",
      "Complimentary ice, water & soft drinks",
      "Double-hull catamaran design for high stability",
      "Spacious AC interior deck & front netting",
      "Timing: 7:00 AM to 12:00 PM",
      "Capacity: Up to 25 guests max",
    ],
  },
  {
    id: "pkg-2hr-standard",
    badge: "General Charter",
    name: "2-Hour Standard Charter",
    duration: "2 Hours",
    breakdown: "2 hr Cruise & Anchor",
    price: "₹60,000",
    features: [
      "2 hours open-sea cruising & anchoring combo",
      "Complimentary ice, water & soft drinks",
      "Double-hull catamaran design for high stability",
      "Ideal for group parties & corporate events",
      "Capacity: Up to 25 guests max",
    ],
  },
  {
    id: "pkg-2hr-sunset",
    badge: "Sunset Voyage",
    name: "2-Hour Sunset Package",
    duration: "2 Hours",
    breakdown: "1 hr Cruise (₹50k) + 1 hr Anchor (₹15k)",
    price: "₹65,000",
    features: [
      "Premium sunset slot booking (4 PM – 8 PM)",
      "1 hour sailing + 1 hour anchoring combo",
      "Complimentary ice, water & soft drinks",
      "Double-hull catamaran design for high stability",
      "Capacity: Up to 25 guests max",
    ],
  },
];

const galleryImages = [
  { src: yachtImg, alt: "Catamaran cruising at sea" },
  { src: yachtImg, alt: "AC inside lounge deck" },
  { src: yachtImg, alt: "Spacious front netting deck" },
  { src: yachtImg, alt: "Perfect group parties" },
  { src: yachtImg, alt: "Sunset view from flybridge" },
  { src: yachtImg, alt: "Catering setup on board" },
];

function CatamaranAcPage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="relative h-[80svh] min-h-[560px] w-full overflow-hidden vignette">
        <img
          src={yachtImg}
          alt="Catamaran AC Deck"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          style={{ animation: "hero-zoom 12s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[110vh] w-[110vh] bg-radial-glow opacity-50 blur-3xl" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-black/40 backdrop-blur px-5 py-2 text-[11px] tracking-[0.45em] uppercase text-gold">
              <Ship className="h-3.5 w-3.5" />
              Catamaran AC Deck
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
              Spacious <span className="text-gradient-gold">Stability</span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p
              className="mt-6 max-w-2xl font-serif text-xl italic text-white/90"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
            >
              The ultimate choice for large group celebrations. Dual-hull stability, spacious open decks, and a fully air-conditioned lounge.
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
                View Packages
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
              <span className="text-gold font-bold not-italic">Group Events Special:</span>{" "}
              Accommodates up to <span className="text-gold font-semibold not-italic">20 - 25 guests</span> comfortably, making it ideal for large birthdays, family cruises or corporate sails.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── PACKAGE ── */}
      <section id="package" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="The Packages"
          title="Catamaran Voyage Packages"
          subtitle="Choose between premium cruising, standard charter, or our sunset package."
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
                    25 Guests
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
                  <p className="mt-1 font-serif italic text-sm text-muted-foreground">
                    Includes full stable sailing & AC cabin deck
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
                  className="shimmer mt-8 w-full flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-6 py-3.5 text-xs tracking-[0.35em] uppercase font-bold text-background shadow-gold"
                >
                  Enquire Now <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Chargeable Add-ons */}
        <Reveal delay={200}>
          <div className="mt-12 max-w-2xl mx-auto rounded-2xl border border-gold/30 bg-black/40 backdrop-blur p-6 text-center">
            <h3 className="text-[11px] tracking-[0.4em] uppercase font-bold text-gold mb-3">
              Optional Add-Ons (Chargeable Basis)
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {["Decoration", "Custom Cake", "Champagne Service", "Hard Drinks", "Drone / Photoshoot"].map((addon) => (
                <div key={addon} className="flex items-center gap-2 font-serif text-white/95 text-[15px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {addon}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── AMENITIES ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="On Board"
          title="Catamaran Amenities"
          subtitle="Stable cruising, large group capability and full air conditioning."
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
          eyebrow="Catamaran Gallery"
          title="Moments & Celebration"
          subtitle="Explore the massive spaces and layouts of our AC deck Catamaran."
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
              "Catamaran AC Deck", "Dual-Hull Stability", "25 Pax Capacity", "Music & DJ Space",
              "Group Surprises", "Complimentary Soda & Soft Drinks", "Optional Catering Support", "Corporate Yacht Goa",
              "Catamaran AC Deck", "Dual-Hull Stability", "25 Pax Capacity", "Music & DJ Space",
              "Group Surprises", "Complimentary Soda & Soft Drinks", "Optional Catering Support", "Corporate Yacht Goa",
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
              Goa's finest group charters
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-5xl md:text-7xl">
              Host Your Next <span className="text-gradient-gold">Celebration</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 font-serif text-xl italic text-white/85 max-w-xl mx-auto">
              Book Catamaran AC Deck today. Invite up to 25 guests and enjoy a high-stability party at sea with complete air-conditioned comfort.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <Link
              to="/contact"
              className="shimmer mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-10 py-4 text-xs tracking-[0.35em] uppercase text-foreground shadow-gold"
            >
              Reserve Catamaran <ArrowRight className="h-4 w-4" />
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
