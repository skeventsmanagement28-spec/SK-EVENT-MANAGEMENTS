import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import {
  Car,
  ShieldCheck,
  Clock,
  MapPin,
  Compass,
  ArrowRight,
  CheckCircle2,
  Star,
  KeyRound,
  Sliders,
  Sun,
  ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import carImg from "@/assets/thar-1.PNG";
import carImg2 from "@/assets/thar-2.PNG";

import bmw1 from "@/assets/bmw-1.PNG";

import bmw2 from "@/assets/bmw-2.PNG";
import bmw3 from "@/assets/bmw-3.PNG";



// Removed incorrect prestige imports
import blue3 from "@/assets/blue-3.JPG";
import blue4 from "@/assets/blue-4.JPG";

import mini1 from "@/assets/mini-1.jpg";
import mini2 from "@/assets/mini-2.jpg";
import mini3 from "@/assets/mini-3.jpg";
import mini4 from "@/assets/mini-4.jpg";

import sea1 from "@/assets/sea-1.PNG";
import sea2 from "@/assets/sea-2.PNG";
import sea3 from "@/assets/sea-3.PNG";
import sea4 from "@/assets/sea-4.PNG";

import x51 from "@/assets/x5-1.jpg";
import x52 from "@/assets/x5-2.jpg";
import x53 from "@/assets/x5-3.jpg";

import mah1 from "@/assets/mah-1.jpg";
import mah2 from "@/assets/mah-2.jpg";
import mah3 from "@/assets/mah-3.jpg";
import mah4 from "@/assets/mah-4.jpg";

import def1 from "@/assets/def-1.jpg";
import def2 from "@/assets/def-2.JPG";

import ford1 from "@/assets/ford-1.JPG";
import ford2 from "@/assets/ford-2.JPG";

import yel1 from "@/assets/yel-1.JPG";
import yel2 from "@/assets/yel-2.JPG";

import bmw5 from "@/assets/bmw5-1.jpg";
import bmw6 from "@/assets/bmw5-2.jpg";
import bwm7 from "@/assets/bmw5-3.jpg";

import benc1 from "@/assets/benc-1.jpg";
import benc2 from "@/assets/benc-2.jpg";
import benc3 from "@/assets/benc-3.jpg";

import min1 from "@/assets/min-1.jpg";
import min2 from "@/assets/min-2.jpg";
import min3 from "@/assets/min-3.jpg";

import a31 from "@/assets/A3-1.jpeg"
import a32 from "@/assets/A3-2.jpeg"

export const Route = createFileRoute("/rentals/car-rental-goa")({
  component: CarRentalGoaPage,
  head: () => ({
    meta: [
      { title: "Premium Car Rentals Goa — SK Events & Management" },
      {
        name: "description",
        content:
          "Rent luxury self-drive or chauffeur-driven cars in Goa. Choose from Thar Rox, BMW Z4, Rolls Royce, Range Rover, Defender and more. Doorstep delivery & premium maintenance.",
      },
    ],
  }),
});

const features = [
  { icon: KeyRound, label: "Self-Drive or Chauffeur Options" },
  { icon: ShieldCheck, label: "Fully Insured & Maintained Cars" },
  { icon: MapPin, label: "Doorstep Delivery & Airport Pickup" },
  { icon: Sliders, label: "Flexible Daily / Weekly Packages" },
  { icon: Compass, label: "Unlimited Kilometers Available" },
  { icon: Clock, label: "24/7 Roadside Assistance" },
];

const fleet = [
  {
    name: "Thar Rox",
    type: "Adventure SUV",
    tag: "Most Popular",
    rentPerDay: "₹3,500",
    pickupDrop: "Free",
    securityDeposit: "--",
    img: carImg,
    images: [carImg, carImg2],
    specs: ["4-seater", "Automatic / Manual", "Convertible / Hard Top", "Diesel / Petrol"],
  },
  {
    name: "BMW Z4",
    type: "Luxury Convertible",
    tag: "Premium Sports",
    rentPerDay: "₹28,000",
    pickupDrop: "₹2,000",
    securityDeposit: "₹20,000",
    img: bmw1,
    images: [bmw1, bmw2, bmw3],
    specs: ["2-seater", "Automatic transmission", "Convertible soft top", "Perfect for couples & shoots"],
  },
  {
    name: "Thar Automatic",
    type: "Luxury Off-Road SUV",
    tag: "Iconic Explorer",
    rentPerDay: "₹3,000",
    pickupDrop: "Free",
    securityDeposit: "₹5,000",
    img: rox1,
    images: [rox1, rox2, rox3],
    specs: ["5-seater", "Automatic", "Off-road capability", "High road presence"],
  },
  {
    name: "Audi A3 convertible",
    type: "Luxury sedan",
    tag: "VIP Class",
    rentPerDay: "₹22,000",
    pickupDrop: "₹2,000",
    securityDeposit: "₹20,000",
    img: a31,
    images: [a31, a32],
    specs: ["5–7 seater", "Automatic", "Panoramic sunroof", "Chauffeur preferred"],
  },
  {
    name: "Blue  Mercedes-Benz C-Class Cabriolet",
    type: "Ultra Luxury sedan",
    tag: "Exclusive Arrival",
    rentPerDay: "₹25,000",
    pickupDrop: "₹4,000",
    securityDeposit: "₹20,000",
    img: blue1,
    images: [blue1, blue2, blue3, blue4],
    specs: ["4-seater", "Chauffeur-driven only", "Starlight headliner", "For weddings & elite events"],
  },
  {
    name: "Mini Cooper S convertible",
    type: "Flagship SUV",
    tag: "Royal Comfort",
    rentPerDay: "₹18,000",
    pickupDrop: "₹3,000",
    securityDeposit: "₹10,000",
    img: mini1,
    images: [mini1, mini2, mini3, mini4],
    specs: ["5-seater", "Automatic", "Air suspension", "Massage seats available"],
  },
  {
    name: "Thar Rox 2025",
    type: "Premium SUV",
    tag: "Family Touring",
    rentPerDay: "₹4,000",
    pickupDrop: "₹2,000",
    securityDeposit: "₹5,000",
    img: mah1,
    images: [mah1, mah2, mah3, mah4],
    specs: ["7-seater", "Automatic", "4x4 capability", "High ground clearance"],
  },
  {
    name: "BMW X5",
    type: "Adventure SUV",
    tag: "Beach Favourite",
    rentPerDay: "₹25,000",
    pickupDrop: "₹4,000",
    securityDeposit: "₹25,000",
    img: x51,
    images: [x51, x52, x53],
    specs: ["4-seater", "Manual / Automatic", "Diesel / Petrol", "Best for Goa roads"],
  },
  {
    name: "Defender",
    type: "Luxury SUV",
    tag: "Executive Ride",
    rentPerDay: "₹50,000",
    pickupDrop: "₹6,000",
    securityDeposit: "₹35,000",
    img: def1,
    images: [def1, def2],
    specs: ["7-seater", "Automatic", "Quattro AWD", "Premium interior"],
  },
  {
    name: "Ford Mustang Shelby GT500",
    type: "Luxury Sedan",
    tag: "Business Class",
    rentPerDay: "₹55,000",
    pickupDrop: "₹7,000",
    securityDeposit: "₹40,000",
    img: ford1,
    images: [ford1, ford2],
    specs: ["5-seater", "Automatic", "Dual-zone AC", "Chauffeur option available"],
  },
  {
    name: "Audi A3 convertible ",
    type: "Off-Road SUV",
    tag: "Trail Blazer",
    rentPerDay: "₹15,000",
    pickupDrop: "₹2,000",
    securityDeposit: "₹10,000",
    img: yel1,
    images: [yel1, yel2],
    specs: ["4-seater", "Automatic", "Open sky / Soft top", "4x4 adventure ready"],
  },
  {
    name: "BMW 5 series ",
    type: "Stylish Convertible",
    tag: "Instagram Worthy",
    rentPerDay: "₹20,000",
    pickupDrop: "₹3,000",
    securityDeposit: "₹15,000",
    img: bmw5,
    images: [bmw5, bmw6, bwm7],
    specs: ["4-seater", "Automatic", "Retractable soft top", "Iconic British style"],
  },
  {
    name: "Mini Cooper convertible",
    type: "Executive Sedan",
    tag: "Corporate Choice",
    rentPerDay: "₹18,000",
    pickupDrop: "₹2,000",
    securityDeposit: "₹15,000",
    img: min1,
    images: [min1, min2, min3],
    specs: ["5-seater", "Automatic", "Virtual cockpit", "Refined comfort"],
  },
  {
    name: "blue Mercedes-Benz C-Class Cabriolet",
    type: "Executive Sedan",
    tag: "Safe & Stylish",
    rentPerDay: "₹30,000",
    pickupDrop: "₹5,000",
    securityDeposit: "₹15,000",
    img: benc1,
    images: [benc1, benc2, benc3],
    specs: ["7-seater", "Automatic", "Panoramic roof", "Advanced safety tech"],
  },
];

function CarRentalGoaPage() {
  const [lightbox, setLightbox] = useState<{ name: string; images: string[]; idx: number } | null>(null);

  const prev = () =>
    setLightbox((g) =>
      g ? { ...g, idx: (g.idx - 1 + g.images.length) % g.images.length } : g
    );

  const next = () =>
    setLightbox((g) =>
      g ? { ...g, idx: (g.idx + 1) % g.images.length } : g
    );

  return (
    <PageShell>
      {/* ── LIGHTBOX MODAL ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/92 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          style={{ animation: "fade-in 0.2s ease" }}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-gold border border-gold/30 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main photo */}
            <div className="relative w-full h-[55vh] md:h-[70vh] flex items-center justify-center bg-black">
              <img
                src={lightbox.images[lightbox.idx]}
                alt={lightbox.name}
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
                <p className="font-display text-xl text-white">{lightbox.name}</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mt-0.5">
                  {lightbox.idx + 1} / {lightbox.images.length}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 px-6 pb-5 overflow-x-auto">
              {lightbox.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox({ ...lightbox, idx: i })}
                  className={`flex-shrink-0 h-14 w-20 rounded-lg overflow-hidden border-2 transition-all ${i === lightbox.idx ? "border-gold" : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative h-[80svh] min-h-[560px] w-full overflow-hidden vignette">
        <img
          src={blue3}
          alt="Premium Luxury Car Rental Goa"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          style={{ animation: "hero-zoom 12s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[110vh] w-[110vh] bg-radial-glow opacity-50 blur-3xl" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-black/40 backdrop-blur px-5 py-2 text-[11px] tracking-[0.45em] uppercase text-gold">
              <Car className="h-3.5 w-3.5" />
              Luxury Car Rentals Goa
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
              Explore Goa <span className="text-gradient-gold">in Luxury</span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p
              className="mt-6 max-w-2xl font-serif text-xl italic text-white/90"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
            >
              Premium self-drive and chauffeur-driven cars. Choose from a curated fleet of 14 SUVs, luxury sedans, and stylish convertibles.
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

      {/* ── SLOT BANNER ── */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 px-8 py-5">
            <Sun className="h-5 w-5 text-gold flex-shrink-0" />
            <p className="font-serif text-lg italic text-foreground/90">
              <span className="text-gold font-bold not-italic">Premium Doorstep Delivery:</span>{" "}
              Get your car delivered directly to the Airport, your Villa, or Hotel anywhere in Goa.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── FLEET ── */}
      <section id="fleet" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="14-Car Fleet"
          title="Choose Your Drive"
          subtitle="Refined vehicles matching your standard of luxury and aesthetics. All rates are per day."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((car, i) => (
            <Reveal key={car.name} delay={i * 80}>
              <div className="relative flex flex-col h-full rounded-3xl border border-border bg-card overflow-hidden hover-lift transition-all duration-500 hover:border-gold/50">

                {/* Car Image Thumbnail */}
                <div className="relative h-44 overflow-hidden group">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Type badge on image */}
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full border border-gold/40 text-gold px-3 py-1 text-[9px] tracking-[0.35em] uppercase font-bold bg-black/50 backdrop-blur-sm">
                    {car.type}
                  </span>
                  <span className="absolute top-3 right-3 text-[9px] tracking-[0.22em] uppercase text-white border border-white/20 rounded-full px-3 py-1 bg-black/50 backdrop-blur-sm whitespace-nowrap">
                    {car.tag}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  {/* Car Name */}
                  <h2 className="font-display text-xl md:text-2xl text-foreground font-bold leading-tight">
                    {car.name}
                  </h2>

                  {/* View Photo button */}
                  <button
                    onClick={() => setLightbox({ name: car.name, images: car.images, idx: 0 })}
                    className="mt-3 self-start inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase font-bold text-gold hover:text-yellow-300 border border-gold/30 hover:border-gold/70 rounded-full px-4 py-1.5 transition-all duration-300 hover:bg-gold/10"
                  >
                    <ImageIcon className="h-3.5 w-3.5" />
                    View Photos
                  </button>

                  {/* Pricing Table */}
                  <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/5 divide-y divide-gold/10 overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-3">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                        Rent / Day
                      </span>
                      <span className="font-display text-xl text-gradient-gold font-bold">
                        {car.rentPerDay}
                      </span>
                    </div>
                    <div className="flex items-center justify-between px-5 py-3">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                        Pickup / Drop
                      </span>
                      <span className="font-serif text-sm text-foreground/85 font-semibold">
                        {car.pickupDrop}
                      </span>
                    </div>
                    <div className="flex items-center justify-between px-5 py-3">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                        Security Deposit
                      </span>
                      <span className="font-serif text-sm text-foreground/85 font-semibold">
                        {car.securityDeposit}
                      </span>
                    </div>
                  </div>

                  {/* Specs */}
                  <ul className="mt-5 space-y-2 flex-1">
                    {car.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-3 font-serif text-[14px] text-foreground/80"
                      >
                        <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="shimmer mt-6 w-full flex items-center justify-center gap-3 rounded-full border border-gold text-foreground hover:bg-gold/10 px-6 py-3 text-xs tracking-[0.3em] uppercase font-bold"
                  >
                    Reserve Car <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Note */}
        <Reveal>
          <p className="mt-10 text-center font-serif italic text-sm text-muted-foreground">
            * Rates may vary during peak holidays & long weekends. Security deposit is fully refundable upon safe return.
          </p>
        </Reveal>
      </section>

      {/* ── SERVICE FEATURES ── */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="The Service"
          title="What We Guarantee"
          subtitle="Flawless operations so you can focus entirely on enjoying your Goan holiday."
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 60}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center hover-lift hover:border-gold/50 transition-colors duration-500">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/15 to-gold/5 group-hover:from-gold/30 group-hover:border-gold/60 transition-all duration-500 shadow-md">
                  <f.icon className="h-6 w-6 text-gold" />
                </div>
                <p className="font-serif text-[14px] italic text-foreground/85 leading-snug">
                  {f.label}
                </p>
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
              "Luxury Car Rental Goa", "Thar Rox | BMW Z4", "Rolls Royce Ghost", "Self-Drive Independence",
              "Chauffeur Services Available", "Doorstep Delivery Goa", "14-Car Premium Fleet", "24/7 Support Desk",
              "Luxury Car Rental Goa", "Thar Rox | BMW Z4", "Rolls Royce Ghost", "Self-Drive Independence",
              "Chauffeur Services Available", "Doorstep Delivery Goa", "14-Car Premium Fleet", "24/7 Support Desk",
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
          <img src={bmw1} alt="" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative px-8 py-24 md:py-36 text-center text-white">
          <Reveal>
            <p className="text-[11px] tracking-[0.5em] uppercase text-white/80">drive in elegance</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-5xl md:text-7xl">
              Cruise the <span className="text-gradient-gold">Goa Coast</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 font-serif text-xl italic text-white/85 max-w-xl mx-auto">
              Book your premium car rental today. Experience absolute flexibility with our well-maintained luxury self-drive or chauffeur services.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <Link
              to="/contact"
              className="shimmer mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-10 py-4 text-xs tracking-[0.35em] uppercase text-foreground shadow-gold"
            >
              Reserve Premium Car <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes hero-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.12); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </PageShell>
  );
}
