import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import {
  Anchor,
  ShieldCheck,
  Clock,
  Music,
  Waves,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Wind,
  Sun,
  ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Zap,
  MapPin,
  Phone,
  Utensils,
  Camera,
} from "lucide-react";

import img1  from "@/assets/funliner-1.PNG";
import img2  from "@/assets/funliner-2.png";
import img3  from "@/assets/funliner-3.png";
import img4  from "@/assets/funliner-4.png";
import img5  from "@/assets/funliner-5.png";
import img6  from "@/assets/funliner-6.png";
import img7  from "@/assets/funliner-7.png";
import img8  from "@/assets/funliner-8.png";
import img9  from "@/assets/funliner-9.png";
import img10 from "@/assets/funliner-10.png";
import img11 from "@/assets/funliner-11.png";
import heroImg from "@/assets/luxury-1.png";
import boatVideo from "@/assets/fun.mp4";
import sun1 from "@/assets/sunset-1.png";
import sun2 from "@/assets/sunset-2.png";
import sun3 from "@/assets/sunset-3.png";
import sun4 from "@/assets/sunset-4.png";
import sun5 from "@/assets/sunset-5.png";
import lux1 from "@/assets/luxury-1.png";
import lux2 from "@/assets/luxury-2.PNG";
import lux3 from "@/assets/luxury-3.PNG";
import lux4 from "@/assets/luxury-4.PNG";
import lux5 from "@/assets/luxury-5.PNG";
import pre1 from "@/assets/prest-1.PNG";
import pre2 from "@/assets/prest-2.PNG";
import pre3 from "@/assets/prest-3.PNG";
import pre4 from "@/assets/prest-4.PNG";
import pre5 from "@/assets/prest-5.PNG";
import aqua1 from "@/assets/aqua-1.PNG";
import aqua2 from "@/assets/aqua-2.PNG";
import aqua3 from "@/assets/aqua-3.PNG";
import aqua4 from "@/assets/aqua-4.PNG";
import aqua5 from "@/assets/aqua-5.PNG";
import sea1 from "@/assets/sea-1.PNG";
import sea2 from "@/assets/sea-2.PNG";
import sea3 from "@/assets/sea-3.PNG";
import sea4 from "@/assets/sea-4.PNG";
import maj1 from "@/assets/maj-1.PNG";
import maj2 from "@/assets/maj-2.PNG";
import maj3 from "@/assets/maj-3.PNG";
import maj4 from "@/assets/maj-4.PNG";
import cat1 from "@/assets/cat-1.PNG";
import cat2 from "@/assets/cat-2.PNG";
import cat3 from "@/assets/cat-3.PNG";
import cat4 from "@/assets/cat-4.PNG";
import cat5 from "@/assets/cat-5.PNG";



export const Route = createFileRoute("/rentals/yacht")({
  component: YachtRentalsPage,
  head: () => ({
    meta: [
      { title: "Luxury Yacht Charters Goa — SK Events & Management" },
      {
        name: "description",
        content:
          "Rent luxury yachts in Goa. Explore our fleet of 8 premium yachts — Funliner, Sunset 42, Luxury Yacht 12, Prestige 17, Aquamarine, Sea Ray, Majestic Bay's & Catamaran AC Deck.",
      },
    ],
  }),
});

/* ─── Page-level amenities ─────────────────────────────────────── */
const features = [
  { icon: ShieldCheck, label: "Professional Captain & Crew" },
  { icon: Music,       label: "Bluetooth Music System" },
  { icon: Waves,       label: "Open-Sea Anchor Experience" },
  { icon: Wind,        label: "AC & Non-AC Options" },
  { icon: Users,       label: "Upto 25 Guests Capacity" },
  { icon: Clock,       label: "Flexible Slots — Dawn to Dusk" },
];

/* ─── Yacht data ────────────────────────────────────────────────── */
type Pkg  = { label: string; price: string; note: string };
type Yacht = {
  id: string;
  name: string;
  type: string;
  tag: string;
  capacity: string;
  timing: string;
  images: string[];
  packages: Pkg[];
  specs: string[];
  inclusions: string[];
  extras: string[] | null;
  link: string;
};

const yachts: Yacht[] = [
  /* 1 ── Funliner ──────────────────────────────────────────────── */
  {
    id: "funliner",
    name: "Funliner Yacht",
    type: "AC Luxury Yacht",
    tag: "Most Popular",
    capacity: "15 Guests",
    timing: "7:00 AM – 3:30 PM  (Discounted Morning Slot)",
    images: [img1, img2, img3, img4, img5, img6],
    packages: [
      { label: "1.5 Hour Package",  price: "₹12,500", note: "1 hr sailing + 30 min anchor" },
      { label: "1 Hour Sailing",    price: "₹10,000", note: "1 hr open-sea sailing only"  },
    ],
    specs: [
      "AC yacht with AC room & lounge",
      "Bluetooth music system",
      "Anchor in the middle of the water",
      "Carry your own food & liquor",
    ],
    inclusions: ["Soft drinks", "Water", "Ice", "Soda"],
    extras: null,
    link: "/rentals/funliner-yacht",
  },

  /* 2 ── Sunset 42 ────────────────────────────────────────────── */
  {
    id: "sunset-42",
    name: "Sunset 42",
    type: "AC Yacht",
    tag: "Sunset Cruiser",
    capacity: "12 Guests",
    timing: "3:30 PM onwards",
    images: [sun1, sun2, sun3, sun4, sun5],
    packages: [
      { label: "2 Hour Package", price: "₹15,000", note: "1 hr sailing + 1 hr anchor" },
    ],
    specs: [
      "AC yacht with Bluetooth music system",
      "Anchoring in the middle of the water",
      "Carry your own food & liquor",
    ],
    inclusions: ["Soft drinks", "Water", "Ice", "Soda"],
    extras: null,
    link: "/rentals/sunset-42",
  },

  /* 3 ── Luxury Yacht 12 ──────────────────────────────────────── */
  {
    id: "luxury-yacht-12",
    name: "Luxury Yacht 12",
    type: "AC Luxury Yacht",
    tag: "15 Seater",
    capacity: "15 Guests",
    timing: "4:00 PM onwards",
    images: [
      lux1,
      lux2,
      lux3,
      lux4,
      lux5
    ],
    packages: [
      { label: "2 Hour Package (Minimum)", price: "₹25,000", note: "1 hr sailing + 1 hr anchor in the evening" },
    ],
    specs: [
      "15-seater luxury yacht",
      "Evening cruise & anchor experience",
      "Chips & namkeen complimentary",
    ],
    inclusions: ["Soft drinks", "Water", "Ice", "Soda", "Chips", "Namkeen"],
    extras: null,
    link: "/rentals/luxury-yacht-12",
  },

  /* 4 ── Prestige 17 ──────────────────────────────────────────── */
  {
    id: "prestige-17",
    name: "Prestige 17",
    type: "AC Yacht",
    tag: "8 Seater",
    capacity: "8 Guests",
    timing: "7:00 AM – 3:30 PM",
    images: [
      pre1,pre2,pre3,pre4,pre5
    ],
    packages: [
      { label: "2 Hour Package",   price: "₹16,000", note: "1 hr sailing + 1 hr anchor" },
      { label: "1.5 Hour Package", price: "₹13,000", note: "1 hr sailing + 30 min anchor" },
      { label: "1 Hour Sailing",   price: "₹10,000", note: "1 hr open-sea sailing only" },
    ],
    specs: [
      "8-seater intimate luxury yacht",
      "Chips & namkeen complimentary for all rides",
    ],
    inclusions: ["Soft drinks", "Water", "Ice", "Soda", "Chips & Namkeen"],
    extras: null,
    link: "/rentals/prestige-17",
  },

  /* 5 ── Aquamarine ───────────────────────────────────────────── */
  {
    id: "aquamarine",
    name: "Aquamarine",
    type: "Non-AC Yacht",
    tag: "1 Bedroom · 9 Pax",
    capacity: "9 Guests",
    timing: "Flexible · Sunset 4:00 PM – 8:00 PM",
    images: [
      aqua1, aqua2, aqua3, aqua4, aqua5
    ],
    packages: [
      { label: "1 Hour Cruising",              price: "₹15,000", note: "Open-sea cruising" },
      { label: "2 Hour Package (Sunset Slot)", price: "₹25,000", note: "Sailing & anchoring experience · 4 PM–8 PM" },
    ],
    specs: [
      "1 bedroom non-AC cozy yacht",
      "Capacity: Upto 9 guests max",
    ],
    inclusions: ["Ice", "Water", "Soft drinks"],
    extras: ["Deco", "Cake", "Champagne", "Hard drinks", "Drone / Photoshoot"],
    link: "/rentals/aquamarine",
  },

  /* 6 ── Sea Ray ──────────────────────────────────────────────── */
  {
    id: "sea-ray",
    name: "Sea Ray",
    type: "Non-AC Yacht",
    tag: "1 Bedroom · 10 Pax",
    capacity: "10 Guests",
    timing: "Flexible · Sunset 4:00 PM – 8:00 PM",
    images: [
      sea1, sea2, sea3, sea4
    ],
    packages: [
      { label: "1 Hour Cruising",              price: "₹18,000", note: "Active open-sea cruising" },
      { label: "1 Hour Anchoring",             price: "₹7,000",  note: "Anchored on the water" },
      { label: "2 Hour Package (Sunset Slot)", price: "₹22,000", note: "Sailing & anchoring · 4 PM–8 PM" },
    ],
    specs: [
      "1 bedroom sleek non-AC yacht",
      "Capacity: Upto 10 guests max",
    ],
    inclusions: ["Ice", "Water", "Soft drinks"],
    extras: ["Deco", "Cake", "Champagne", "Hard drinks"],
    link: "/rentals/sea-ray",
  },

  /* 7 ── Majestic Bay's ───────────────────────────────────────── */
  {
    id: "majestic-bays",
    name: "Majestic Bay's",
    type: "Ultra Luxury AC Yacht",
    tag: "Ultra Luxury",
    capacity: "25 Guests",
    timing: "4:00 PM – 8:00 PM",
    images: [
      maj1, maj2, maj3, maj4
    ],
    packages: [
      { label: "1 Hour Cruising",  price: "₹30,000", note: "Premium open-sea cruise" },
      { label: "1 Hour Anchoring", price: "₹15,000", note: "Anchored on the open water" },
      { label: "2 Hour Package",   price: "₹70,000", note: "1 hr cruise (₹40,000) + 1 hr anchor (₹15,000)" },
    ],
    specs: [
      "1 bedroom air-conditioned ultra luxury yacht",
      "Capacity: Upto 25 guests max",
      "Massive front deck & top deck panoramic views",
    ],
    inclusions: ["Ice", "Water", "Soft drinks"],
    extras: ["Deco", "Cake", "Champagne", "Hard drinks", "Drone / Photoshoot"],
    link: "/rentals/majestic-bays",
  },

  /* 8 ── Catamaran AC Deck ────────────────────────────────────── */
  {
    id: "catamaran-ac",
    name: "Catamaran AC Deck",
    type: "Double-Deck Catamaran",
    tag: "AC · 25 Guests",
    capacity: "25 Guests",
    timing: "Morning 7:00 AM–12:00 PM  &  Sunset 4:00 PM–8:00 PM",
    images: [
      cat1, cat2, cat3, cat4, cat5
    ],
    packages: [
      { label: "2 Hour Flat Package",                 price: "₹60,000", note: "2 hours on-water experience" },
      { label: "1 Hr Cruise + 1 Hr Anchor (Morning)", price: "₹60,000", note: "45,000 cruise + 15,000 anchor · 7 AM–12 PM" },
      { label: "1 Hr Cruise + 1 Hr Anchor (Sunset)",  price: "₹65,000", note: "50,000 cruise + 15,000 anchor · 4 PM–8 PM" },
    ],
    specs: [
      "Spacious double-deck catamaran with AC interiors",
      "Capacity: 25 guests",
      "Perfect for parties, corporate events & family gatherings",
    ],
    inclusions: ["Ice", "Water", "Soft drinks"],
    extras: ["Deco", "Cake", "Champagne", "Hard drinks", "Drone / Photoshoot"],
    link: "/rentals/catamaran-ac",
  },
];

/* ─── Page component ────────────────────────────────────────────── */
function YachtRentalsPage() {
  const [gallery, setGallery] = useState<{
    name: string;
    images: string[];
    idx: number;
  } | null>(null);

  const prev = () =>
    setGallery((g) =>
      g ? { ...g, idx: (g.idx - 1 + g.images.length) % g.images.length } : g
    );

  const next = () =>
    setGallery((g) =>
      g ? { ...g, idx: (g.idx + 1) % g.images.length } : g
    );

  return (
    <PageShell>
      {/* ── LIGHTBOX ─────────────────────────────────────────── */}
      {gallery && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/92 backdrop-blur-sm p-4"
          onClick={() => setGallery(null)}
          style={{ animation: "fade-in 0.2s ease" }}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-gold border border-gold/30 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main photo */}
            <div className="relative w-full h-[55vh] md:h-[70vh] flex items-center justify-center bg-black">
              <img
                src={gallery.images[gallery.idx]}
                alt={gallery.name}
                className="max-w-full max-h-full object-contain"
              />

              {/* Prev */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-gold hover:text-black transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Next */}
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-gold hover:text-black transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gold/20 bg-black/95">
              <div>
                <p className="font-display text-xl text-white">{gallery.name}</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mt-0.5">
                  {gallery.idx + 1} / {gallery.images.length}
                </p>
              </div>
              <button
                onClick={() => setGallery(null)}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 px-6 pb-5 overflow-x-auto">
              {gallery.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setGallery({ ...gallery, idx: i })}
                  className={`flex-shrink-0 h-14 w-20 rounded-lg overflow-hidden border-2 transition-all ${
                    i === gallery.idx ? "border-gold" : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[80svh] min-h-[560px] w-full overflow-hidden vignette">
        <img
          src={heroImg}
          alt="Luxury Yacht Charters Goa"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          style={{ animation: "hero-zoom 12s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[110vh] w-[110vh] bg-radial-glow opacity-50 blur-3xl" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-black/40 backdrop-blur px-5 py-2 text-[11px] tracking-[0.45em] uppercase text-gold">
              <Anchor className="h-3.5 w-3.5" />
              SK Yacht Charters · Goa
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
              Sail Goa <span className="text-gradient-gold">in Style</span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p
              className="mt-6 max-w-2xl font-serif text-xl italic text-white/90"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
            >
              Choose from our premium fleet of 8 luxury yachts — AC cabins, open-sea anchoring, music systems, and complimentary refreshments.
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
                href="#fleet"
                className="shimmer rounded-full border border-gold bg-black/40 backdrop-blur px-8 py-4 text-xs tracking-[0.35em] uppercase text-white"
              >
                View Fleet
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="h-10 w-px bg-gradient-to-b from-gold/0 to-gold/70 animate-pulse" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-white/70">scroll</span>
        </div>
      </section>

      {/* ── INFO BANNER ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 px-8 py-5">
            <Sun className="h-5 w-5 text-gold flex-shrink-0" />
            <p className="font-serif text-lg italic text-foreground/90">
              <span className="text-gold font-bold not-italic">Complimentary on all rides:</span>{" "}
              Soft drinks, water, ice & soda included in every package. Enjoy the open sea!
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── FLEET ────────────────────────────────────────────── */}
      <section id="fleet" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="8-Yacht Fleet"
          title="Choose Your Charter"
          subtitle="Curated yachts matching every celebration — from intimate sunsets to grand parties at sea."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {yachts.map((yacht, i) => (
            <Reveal key={yacht.id} delay={i * 80}>
              <div className="relative flex flex-col h-full rounded-3xl border border-border bg-card overflow-hidden hover-lift transition-all duration-500 hover:border-gold/50">

                {/* ── Image thumbnail ── */}
                <div className="relative h-52 overflow-hidden group">
                  <img
                    src={yacht.images[0]}
                    alt={yacht.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full border border-gold/40 text-gold px-3 py-1 text-[9px] tracking-[0.35em] uppercase font-bold bg-black/50 backdrop-blur-sm">
                    {yacht.type}
                  </span>
                  <span className="absolute top-3 right-3 text-[9px] tracking-[0.22em] uppercase text-white border border-white/20 rounded-full px-3 py-1 bg-black/50 backdrop-blur-sm whitespace-nowrap">
                    {yacht.tag}
                  </span>
                </div>

                {/* ── Card body ── */}
                <div className="flex flex-col flex-1 p-6">

                  {/* Name */}
                  <h2 className="font-display text-xl md:text-2xl text-foreground font-bold leading-tight">
                    {yacht.name}
                  </h2>

                  {/* Capacity & timing */}
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                    <span className="flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-gold font-bold">
                      <Users className="h-3.5 w-3.5" /> {yacht.capacity}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-semibold">
                      <Clock className="h-3.5 w-3.5" /> {yacht.timing}
                    </span>
                  </div>

                  {/* View Photos button */}
                  <button
                    onClick={() => setGallery({ name: yacht.name, images: yacht.images, idx: 0 })}
                    className="mt-4 self-start inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase font-bold text-gold hover:text-yellow-300 border border-gold/30 hover:border-gold/70 rounded-full px-4 py-1.5 transition-all duration-300 hover:bg-gold/10"
                  >
                    <ImageIcon className="h-3.5 w-3.5" />
                    View Photos
                  </button>

                  {/* Pricing table */}
                  <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/5 divide-y divide-gold/10 overflow-hidden">
                    <div className="px-5 py-2 bg-gold/10">
                      <span className="text-[9px] tracking-[0.35em] uppercase font-bold text-gold">Pricing Packages</span>
                    </div>
                    {yacht.packages.map((pkg) => (
                      <div key={pkg.label} className="flex items-center justify-between gap-4 px-5 py-3">
                        <div>
                          <p className="text-[11px] tracking-[0.15em] uppercase text-foreground/90 font-bold">
                            {pkg.label}
                          </p>
                          <p className="text-[10px] font-serif italic text-muted-foreground mt-0.5">
                            {pkg.note}
                          </p>
                        </div>
                        <span className="font-display text-lg text-gradient-gold font-bold whitespace-nowrap">
                          {pkg.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Specs */}
                  <ul className="mt-5 space-y-2">
                    {yacht.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-3 font-serif text-[14px] text-foreground/80"
                      >
                        <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  {/* Inclusions */}
                  <div className="mt-5">
                    <p className="text-[9px] tracking-[0.3em] uppercase font-bold text-gold mb-2">
                      Complimentary Inclusions
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {yacht.inclusions.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-[10px] text-gold font-bold font-serif"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Chargeable extras */}
                  {yacht.extras && (
                    <div className="mt-4">
                      <p className="text-[9px] tracking-[0.3em] uppercase font-bold text-red-400 mb-2">
                        On Chargeable Basis
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {yacht.extras.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-red-500/30 bg-red-950/40 px-3 py-1 text-[10px] text-red-400 font-serif italic"
                          >
                            + {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="shimmer mt-6 w-full flex items-center justify-center gap-3 rounded-full border border-gold text-foreground hover:bg-gold/10 px-6 py-3 text-xs tracking-[0.3em] uppercase font-bold"
                  >
                    Reserve Yacht <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center font-serif italic text-sm text-muted-foreground">
            * Rates may vary during peak holidays & long weekends. Please contact us for corporate & bulk bookings.
          </p>
        </Reveal>
      </section>

      {/* ── ADVENTURE BOAT PARTY ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/60 bg-blue-950/40 backdrop-blur px-5 py-2 text-[11px] tracking-[0.4em] uppercase text-blue-300 mb-6">
              <Waves className="h-3.5 w-3.5" />
              Combo AC Cruise
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight">
              🛥️ Adventure <span className="text-gradient-gold">Boat Party</span>
            </h2>
            <p className="mt-4 font-serif text-lg italic text-muted-foreground max-w-2xl">
              The ultimate Goa water experience — DJ, rain dance, water sports and sunset views all in one epic cruise!
            </p>

            {/* Time Slots */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-gold/40 bg-gold/10 px-6 py-3">
                <Clock className="h-4 w-4 text-gold" />
                <div className="text-left">
                  <p className="text-[9px] tracking-[0.35em] uppercase text-gold font-bold">Morning Slot</p>
                  <p className="text-sm font-bold text-foreground">09:30 AM – 01:30 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-gold/40 bg-gold/10 px-6 py-3">
                <Sun className="h-4 w-4 text-gold" />
                <div className="text-left">
                  <p className="text-[9px] tracking-[0.35em] uppercase text-gold font-bold">Evening Slot</p>
                  <p className="text-sm font-bold text-foreground">01:30 PM – 06:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Video */}
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-gold bg-black">
              <video
                src={boatVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-[10px] tracking-[0.35em] uppercase font-bold text-background shadow-gold">
                  <Zap className="h-3 w-3" />
                  Adventure Awaits
                </span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Details */}
          <div className="space-y-6">

            {/* Water Sports */}
            <Reveal delay={60}>
              <div className="rounded-2xl border border-blue-500/30 bg-blue-950/20 p-6">
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-blue-400 mb-4">🌊 Water Sports Included</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Jetski Ride", "Banana Ride", "Bumper Ride", "Speed Boat", "Kayaking", "Swimming (with Life Jackets)"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Star className="h-2.5 w-2.5 text-blue-400 fill-blue-400 flex-shrink-0" />
                      <span className="text-[12px] font-serif text-foreground/85">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Complimentary */}
            <Reveal delay={120}>
              <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-gold mb-4">✨ Complimentary</p>
                <div className="flex flex-wrap gap-2">
                  {["2 Beers per person 🍻", "Soft Drinks 💧", "Mineral Water 💧", "Rain Dance + Music 💃"].map((item) => (
                    <span key={item} className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-[11px] font-bold text-gold">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Photo Spots */}
            <Reveal delay={180}>
              <div className="rounded-2xl border border-purple-500/30 bg-purple-950/20 p-6">
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-purple-400 mb-4">📸 Photo Spots &amp; Views</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Mandovi River Cruise 🌉", "Panjim Bridge Lights ✨", "Sunset &amp; River Views 🌅", "Group Selfies 📸"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Camera className="h-3 w-3 text-purple-400 flex-shrink-0" />
                      <span className="text-[12px] font-serif text-foreground/85" dangerouslySetInnerHTML={{ __html: item }} />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Row — Services & Pickup */}
        <div className="mt-8 grid sm:grid-cols-2 gap-6">

          {/* Services */}
          <Reveal delay={240}>
            <div className="rounded-2xl border border-green-500/30 bg-green-950/20 p-6 h-full">
              <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-green-400 mb-4">🛎️ Add-On Services</p>
              <div className="space-y-2">
                {[
                  { icon: "🚗", label: "Pick-up & Drop Service" },
                  { icon: "🍽️", label: "Lunch (Veg / Non-Veg)" },
                  { icon: "🪑", label: "Proper Seating Arrangement" },
                  { icon: "🚿", label: "Changing Room / Washroom" },
                  { icon: "🌞", label: "Sunbathing Deck" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className="text-base">{s.icon}</span>
                    <span className="text-[13px] font-serif text-foreground/85">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Pickup Locations + CTA */}
          <Reveal delay={300}>
            <div className="flex flex-col gap-5 h-full">
              <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6 flex-1">
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-amber-400 mb-4">📍 Pickup Locations</p>
                <div className="flex flex-wrap gap-2">
                  {["BAGA", "ARPORA", "CANDOLIM", "CALANGUTE"].map((loc) => (
                    <span key={loc} className="flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-950/40 px-4 py-1.5 text-[11px] tracking-[0.25em] uppercase font-bold text-amber-300">
                      <MapPin className="h-2.5 w-2.5" />
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Book CTA */}
              <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-gold/5 p-6">
                <p className="text-[9px] tracking-[0.4em] uppercase font-bold text-gold mb-3">📲 Call or WhatsApp to Book</p>
                <div className="space-y-2">
                  <a href="tel:7904315874" className="flex items-center gap-3 group">
                    <Phone className="h-4 w-4 text-gold" />
                    <span className="font-display text-xl text-foreground group-hover:text-gold transition-colors">7904315874</span>
                  </a>
                  <a href="tel:9566464258" className="flex items-center gap-3 group">
                    <Phone className="h-4 w-4 text-gold" />
                    <span className="font-display text-xl text-foreground group-hover:text-gold transition-colors">95664 64258</span>
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="shimmer mt-5 w-full flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-xs tracking-[0.3em] uppercase font-bold text-background shadow-gold"
                >
                  Book Now <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICE FEATURES ────────────────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="The Service"
          title="What We Guarantee"
          subtitle="Flawless operations so you can focus entirely on enjoying Goa from the water."
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 60}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center hover-lift hover:border-gold/50 transition-colors duration-500">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/15 to-gold/5 group-hover:from-gold/30 group-hover:border-gold/60 transition-all duration-500 shadow-md">
                  <f.icon className="h-6 w-6 text-gold" />
                </div>
                <p className="font-serif text-[14px] italic text-foreground/85 leading-snug">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── MARQUEE STRIP ────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex w-max gap-16 animate-[marquee_30s_linear_infinite]">
            {[
              "Funliner Yacht", "Sunset 42", "Luxury Yacht 12", "Prestige 17",
              "Aquamarine", "Sea Ray", "Majestic Bay's", "Catamaran AC Deck",
              "Funliner Yacht", "Sunset 42", "Luxury Yacht 12", "Prestige 17",
              "Aquamarine", "Sea Ray", "Majestic Bay's", "Catamaran AC Deck",
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative my-20 mx-6 overflow-hidden rounded-3xl">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative px-8 py-24 md:py-36 text-center text-white">
          <Reveal>
            <p className="text-[11px] tracking-[0.5em] uppercase text-white/80">your next escape awaits</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-5xl md:text-7xl">
              Sail the <span className="text-gradient-gold">Goa Coast</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 font-serif text-xl italic text-white/85 max-w-xl mx-auto">
              Book your luxury yacht charter today — complimentary refreshments, professional crew, and memories that last a lifetime.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <Link
              to="/contact"
              className="shimmer mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-10 py-4 text-xs tracking-[0.35em] uppercase text-foreground shadow-gold"
            >
              Reserve Your Charter <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes hero-zoom {
          0%   { transform: scale(1.05); }
          100% { transform: scale(1.12); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </PageShell>
  );
}
