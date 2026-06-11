import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import {
  Home,
  BedDouble,
  Users,
  Coffee,
  Droplets,
  Waves,
  Heart,
  Shield,
  ArrowRight,
  Star,
  MapPin,
  X,
  ImageIcon,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
//villa 1
import villaImg from "@/assets/event-villa.jpg";
import villaImg2 from "@/assets/hero-luxury.jpg";
import villa1 from "@/assets/vill1-1.jpeg";
import villa2 from "@/assets/vill1-2.jpeg";
import villa3 from "@/assets/vill1-3.jpeg";
import villa4 from "@/assets/vill1-4.jpeg";
import villa5 from "@/assets/vill1-5.jpeg";
import villa6 from "@/assets/vill1-6.jpeg";
import villa7 from "@/assets/vill1-7.jpeg";
import villa8 from "@/assets/vill1-8.jpeg";
import villa9 from "@/assets/vill1-9.jpeg";
import villa10 from "@/assets/vill1-10.jpeg";
import villa11 from "@/assets/vill1-11.jpeg";
import villa12 from "@/assets/vill1-12.jpeg";
import villa13 from "@/assets/vill1-13.jpeg";
import villa14 from "@/assets/vill1-14.jpeg";
import villa15 from "@/assets/vill1-15.jpeg";

//villa 2
import villa21 from "@/assets/vill2-1.png";
import villa22 from "@/assets/vill2-2.png";
import villa23 from "@/assets/vill2-3.png";
import villa24 from "@/assets/vill2-4.png";
import villa25 from "@/assets/vill2-5.png";
import villa26 from "@/assets/vill2-6.png";
import villa27 from "@/assets/vill2-7.png";
import villa28 from "@/assets/vill2-8.png";
import villa29 from "@/assets/vill2-9.png";
import villa210 from "@/assets/vill2-10.png";
import villa211 from "@/assets/vill2-11.png";
import villa212 from "@/assets/vill2-12.png";

//villa 3
import villa31 from "@/assets/vill3-1.png";
import villa32 from "@/assets/vill3-2.png";
import villa33 from "@/assets/vill3-3.png";
import villa34 from "@/assets/vill3-4.png";
import villa35 from "@/assets/vill3-5.png";
import villa36 from "@/assets/vill3-6.png";
import villa37 from "@/assets/vill3-7.png";
import villa38 from "@/assets/vill3-8.png";
import villa39 from "@/assets/vill3-9.png";
import villa310 from "@/assets/vill3-10.png";
import villa311 from "@/assets/vill3-11.png";

//villa 4
import villa41 from "@/assets/vill4-1.png";
import villa42 from "@/assets/vill4-2.png";
import villa43 from "@/assets/vill4-3.png";
import villa44 from "@/assets/vill4-4.png";
import villa45 from "@/assets/vill4-5.png";
import villa46 from "@/assets/vill4-6.png";
import villa47 from "@/assets/vill4-7.png";

//villa 5
import villa51 from "@/assets/vill5-1.png";
import villa52 from "@/assets/vill5-2.png";
import villa53 from "@/assets/vill5-3.png";
import villa54 from "@/assets/vill5-4.png";
import villa55 from "@/assets/vill5-5.png";
import villa56 from "@/assets/vill5-6.png";
import villa57 from "@/assets/vill5-7.png";
import villa58 from "@/assets/vill5-8.png";
import villa59 from "@/assets/vill5-9.png";

//villa 6
import villa61 from "@/assets/vill6-1.png";
import villa62 from "@/assets/vill6-2.png";
import villa63 from "@/assets/vill6-3.png";
import villa64 from "@/assets/vill6-4.png";
import villa65 from "@/assets/vill6-5.png";
import villa66 from "@/assets/vill6-6.png";
import villa67 from "@/assets/vill6-7.png";
import villa68 from "@/assets/vill6-8.png";
import villa69 from "@/assets/vill6-9.png";
import villa610 from "@/assets/vill6-10.png";


export const Route = createFileRoute("/rentals/villa-goa")({
  component: VillaGoaPage,
  head: () => ({
    meta: [
      { title: "Luxury Villa Rentals Goa — SK Events & Management" },
      {
        name: "description",
        content:
          "Book premium luxury villas in Goa — Candolim, Nerul, Vagator & Porvorim. Private pools, sea views, pet-friendly options. Ideal for groups, families & celebrations.",
      },
    ],
  }),
});

const amenityIcons: Record<string, React.ElementType> = {
  "Extra Beds Available": BedDouble,
  "Helper Available": Users,
  "Kettle": Coffee,
  "Hot Water": Droplets,
  "Swimming Pool": Waves,
  "Pet Friendly": Heart,
  "Sea View": Sparkles,
  "Infinity Pool": Waves,
};

const villas = [
  {
    id: "villa-1",
    name: "4BHK Villa — Candolim",
    location: "Candolim, North Goa",
    bedrooms: 4,
    rentPerDay: "₹25,000",
    securityDeposit: "₹15,000",
    maxGuests: 10,
    img: villa1,
    images: [villa1, villa2, villa3, villa4, villa5, villa6, villa7, villa8, villa9, villa10, villa11, villa12, villa13, villa14, villa15],
    tag: "Most Booked",
    petFriendly: false,
    amenities: [
      "Extra Beds Available",
      "Helper Available",
      "Kettle",
      "Hot Water",
      "Swimming Pool",
    ],
    highlight: "Spacious villa in the heart of Candolim with private pool.",
  },
  {
    id: "villa-2",
    name: "5BHK Villa — Nerul",
    location: "Nerul, North Goa",
    bedrooms: 5,
    rentPerDay: "₹30,000",
    securityDeposit: "₹15,000",
    maxGuests: 10,
    img: villa21,
    images: [villa21, villa22, villa23, villa24, villa25, villa26, villa27, villa28, villa29, villa210, villa211, villa212],
    tag: "Pet Friendly",
    petFriendly: true,
    amenities: [
      "Extra Beds Available",
      "Helper Available",
      "Kettle",
      "Hot Water",
      "Swimming Pool",
      "Pet Friendly",
    ],
    highlight: "Lush villa at serene Nerul — perfect for families and group getaways.",
  },
  {
    id: "villa-3",
    name: "4BHK Villa — Vagator",
    location: "Vagator, North Goa",
    bedrooms: 4,
    rentPerDay: "₹23,000",
    securityDeposit: "₹10,000",
    maxGuests: 8,
    img: villa31,
    images: [villa31, villa32, villa33, villa34, villa35, villa36, villa37, villa38, villa39, villa310, villa311],
    tag: "Pet Friendly",
    petFriendly: true,
    amenities: [
      "Extra Beds Available",
      "Helper Available",
      "Kettle",
      "Hot Water",
      "Swimming Pool",
      "Pet Friendly",
    ],
    highlight: "Stylish villa near Vagator beach — the ultimate party & relaxation hub.",
  },
  {
    id: "villa-4",
    name: "5BHK Infinity Pool Villa — Sea View",
    location: "Candolim, North Goa",
    bedrooms: 5,
    rentPerDay: "₹23,000",
    securityDeposit: "₹10,000",
    maxGuests: 15,
    img: villa41,
    images: [villa41, villa42, villa43, villa44, villa45, villa46, villa47],
    tag: "Sea View",
    petFriendly: true,
    amenities: [
      "Extra Beds Available",
      "Helper Available",
      "Kettle",
      "Hot Water",
      "Swimming Pool",
      "Sea View",
      "Infinity Pool",
      "Pet Friendly",
    ],
    highlight: "Breathtaking sea views with a stunning infinity pool — sleeps up to 15 guests.",
  },
  {
    id: "villa-5",
    name: "Penthouse by Signature Stays",
    location: "Porvorim, North Goa",
    bedrooms: 0,
    rentPerDay: "₹25,000",
    securityDeposit: "₹10,000",
    maxGuests: 8,
    img: villa51,
    images: [villa51, villa52, villa53, villa54, villa55, villa56, villa57, villa58, villa59],
    tag: "Penthouse",
    petFriendly: true,
    amenities: [
      "Extra Beds Available",
      "Helper Available",
      "Kettle",
      "Hot Water",
      "Swimming Pool",
      "Pet Friendly",
    ],
    highlight: "Luxurious penthouse with premium interiors and modern amenities in Porvorim.",
  },
  {
    id: "villa-6",
    name: "3BHK Apartment — Sunset Theory",
    location: "North Goa",
    bedrooms: 3,
    rentPerDay: "₹19,000",
    securityDeposit: "₹10,000",
    maxGuests: 6,
    img: villa61,
    images: [villa61, villa62, villa63, villa64, villa65, villa66, villa67, villa68, villa69, villa610],
    tag: "Modern Comfort",
    petFriendly: true,
    amenities: [
      "Extra Beds Available",
      "Helper Available",
      "Kettle",
      "Hot Water",
      "Swimming Pool",
      "Pet Friendly",
    ],
    highlight: "Cozy 3BHK apartment perfect for small groups with modern amenities and comfortable living.",
  },
];

function VillaGoaPage() {
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
                  className={`flex-shrink-0 h-14 w-20 rounded-lg overflow-hidden border-2 transition-all ${
                    i === lightbox.idx ? "border-gold" : "border-white/10 opacity-60 hover:opacity-100"
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
          src={villa1}
          alt="Luxury Villa Rentals Goa"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          style={{ animation: "hero-zoom 12s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[110vh] w-[110vh] bg-radial-glow opacity-50 blur-3xl" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-black/40 backdrop-blur px-5 py-2 text-[11px] tracking-[0.45em] uppercase text-gold">
              <Home className="h-3.5 w-3.5" />
              Luxury Villa Rentals Goa
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
              Stay in{" "}
              <span className="text-gradient-gold">Absolute Luxury</span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p
              className="mt-6 max-w-2xl font-serif text-xl italic text-white/90"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
            >
              Private pool villas, sea-view penthouses & curated stays across Goa's most sought-after locations.
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
                href="#villas"
                className="shimmer rounded-full border border-gold bg-black/40 backdrop-blur px-8 py-4 text-xs tracking-[0.35em] uppercase text-white"
              >
                Explore Villas
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="h-10 w-px bg-gradient-to-b from-gold/0 to-gold/70 animate-pulse" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-white/70">scroll</span>
        </div>
      </section>

      {/* ── BANNER ── */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 px-8 py-5">
            <Shield className="h-5 w-5 text-gold flex-shrink-0" />
            <p className="font-serif text-lg italic text-foreground/90">
              <span className="text-gold font-bold not-italic">Fully Managed Stays:</span>{" "}
              All villas come with helpers, housekeeping, and 24/7 SK Events support for a seamless experience.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── VILLAS ── */}
      <section id="villas" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="5 Curated Properties"
          title="Choose Your Villa"
          subtitle="Handpicked luxury villas across Candolim, Nerul, Vagator and Porvorim."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {villas.map((villa, i) => (
            <Reveal key={villa.id} delay={i * 100}>
              <div
                id={villa.id}
                className="group relative flex flex-col h-full rounded-3xl border border-border bg-card overflow-hidden hover-lift transition-all duration-500 hover:border-gold/50"
              >
                {/* Villa Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={villa.img}
                    alt={villa.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Overlays */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-black/50 backdrop-blur-sm text-gold px-3 py-1.5 text-[9px] tracking-[0.3em] uppercase font-bold">
                    <Star className="h-3 w-3 fill-gold" />
                    {villa.tag}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h2 className="font-display text-2xl text-white leading-tight drop-shadow-lg">
                        {villa.name}
                      </h2>
                      <p className="flex items-center gap-1.5 mt-1 font-serif text-sm italic text-white/80">
                        <MapPin className="h-3.5 w-3.5 text-gold" />
                        {villa.location}
                      </p>
                    </div>
                    <button
                      onClick={() => setLightbox({ name: villa.name, images: villa.images, idx: 0 })}
                      className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-black/50 backdrop-blur border border-gold/40 text-gold px-3 py-2 text-[9px] tracking-[0.25em] uppercase font-bold hover:bg-gold/20 transition-all"
                    >
                      <ImageIcon className="h-3.5 w-3.5" />
                      View Photos
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Highlight */}
                  <p className="font-serif italic text-foreground/70 text-[15px] leading-relaxed">
                    {villa.highlight}
                  </p>

                  {/* Stats row */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    {villa.bedrooms > 0 && (
                      <span className="flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 text-[11px] font-bold text-foreground/80">
                        <BedDouble className="h-3.5 w-3.5 text-gold" />
                        {villa.bedrooms} BHK
                      </span>
                    )}
                    {villa.bedrooms === 0 && (
                      <span className="flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 text-[11px] font-bold text-foreground/80">
                        <Home className="h-3.5 w-3.5 text-gold" />
                        Penthouse
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 text-[11px] font-bold text-foreground/80">
                      <Users className="h-3.5 w-3.5 text-gold" />
                      Up to {villa.maxGuests} guests
                    </span>
                    {villa.petFriendly && (
                      <span className="flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/30 px-3 py-1.5 text-[11px] font-bold text-gold">
                        <Heart className="h-3.5 w-3.5" />
                        Pet Friendly
                      </span>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/5 divide-y divide-gold/10 overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-3">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                        Per Day Rent
                      </span>
                      <span className="font-display text-2xl text-gradient-gold font-bold">
                        {villa.rentPerDay}
                      </span>
                    </div>
                    <div className="flex items-center justify-between px-5 py-3">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                        Security Deposit
                      </span>
                      <span className="font-serif text-sm text-foreground/85 font-semibold">
                        {villa.securityDeposit}
                      </span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mt-5">
                    <p className="text-[10px] tracking-[0.35em] uppercase font-bold text-muted-foreground mb-3">
                      Amenities
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {villa.amenities.map((amenity) => {
                        const Icon = amenityIcons[amenity] ?? CheckCircle2;
                        return (
                          <span
                            key={amenity}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/80 px-3 py-1.5 text-[11px] font-medium text-foreground/80"
                          >
                            <Icon className="h-3 w-3 text-gold" />
                            {amenity}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="shimmer mt-6 w-full flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-6 py-3.5 text-xs tracking-[0.3em] uppercase font-bold text-background shadow-gold"
                  >
                    Enquire & Book <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center font-serif italic text-sm text-muted-foreground">
            * Security deposit is fully refundable. Rates may vary during peak season & long weekends.
          </p>
        </Reveal>
      </section>

      {/* ── HIGHLIGHTS STRIP ── */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex w-max gap-16 animate-[marquee_30s_linear_infinite]">
            {[
              "Luxury Villa Goa", "Private Pool Villas", "Sea View Properties", "Pet Friendly Stays",
              "Candolim | Nerul | Vagator", "Helper & Housekeeping", "Infinity Pool Villa", "Porvorim Penthouse",
              "Luxury Villa Goa", "Private Pool Villas", "Sea View Properties", "Pet Friendly Stays",
              "Candolim | Nerul | Vagator", "Helper & Housekeeping", "Infinity Pool Villa", "Porvorim Penthouse",
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
          <img src={villaImg} alt="" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/65" />
        </div>
        <div className="relative px-8 py-24 md:py-36 text-center text-white">
          <Reveal>
            <p className="text-[11px] tracking-[0.5em] uppercase text-white/80">
              curated stays in paradise
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-5xl md:text-7xl">
              Your Private{" "}
              <span className="text-gradient-gold">Goa Retreat</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 font-serif text-xl italic text-white/85 max-w-xl mx-auto">
              Book your dream villa today. Premium properties, fully managed stays, and unforgettable Goa memories.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <Link
              to="/contact"
              className="shimmer mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-10 py-4 text-xs tracking-[0.35em] uppercase text-foreground shadow-gold"
            >
              Book Your Villa <ArrowRight className="h-4 w-4" />
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
