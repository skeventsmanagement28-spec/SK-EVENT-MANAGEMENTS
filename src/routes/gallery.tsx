import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getUploadedImages, UploadedImage } from "@/lib/db";
import { PageShell } from "@/components/PageShell";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import wedding from "@/assets/event-wedding.jpg";
import yacht from "@/assets/event-yacht.jpg";
import birthday from "@/assets/event-birthday.jpg";
import celeb from "@/assets/event-celebrity.jpg";
import corp from "@/assets/event-corporate.jpg";
import villa from "@/assets/event-villa.jpg";
import hero from "@/assets/hero-luxury.jpg";
import birth1 from "@/assets/birth-1.jpg";
import birth2 from "@/assets/birth-2.jpg";
import birth3 from "@/assets/birth-3.jpg";
import birth4 from "@/assets/birth-4.jpg";
import birth5 from "@/assets/birth-5.jpg";
import birth6 from "@/assets/birth-6.jpg";
import birth7 from "@/assets/birth-7.jpg";
import wed1 from "@/assets/wed-1.jpg";
import wed2 from "@/assets/wed-2.jpg";
import wed3 from "@/assets/wed-3.jpg";
import room1 from "@/assets/room-1.jpg";
import yacht1 from "@/assets/yacht-1.jpg";
import yacht2 from "@/assets/yacht-2.jpg";
import mod1 from "@/assets/mod-1.JPG";
import mod2 from "@/assets/mod-2.JPG";
import mod3 from "@/assets/mod-3.JPG";
import mod4 from "@/assets/mod-4.JPG";
import mod5 from "@/assets/mod-5.JPG";
import mod6 from "@/assets/mod-6.JPG";
import mod7 from "@/assets/mod-7.JPG";
import mod8 from "@/assets/mod-8.JPG";
import mod9 from "@/assets/mod-9.JPG";
import mod10 from "@/assets/mod-10.JPG";
import mod11 from "@/assets/mod-11.jpg";
import mod12 from "@/assets/mod-12.jpg";
import mod13 from "@/assets/mod-13.jpg";
import mod14 from "@/assets/mod-14.jpg";
import cel2 from "@/assets/cel-2.mp4";
import { X, Play } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — SK Events & Management" },
      { name: "description", content: "A masonry diary of SK celebrations: weddings, yacht parties, villa surprises and more." },
    ],
  }),
});

type GalleryItem = { src: string; cat: string; h: string; type?: "video" | "image" };

const items: GalleryItem[] = [
  { src: birth1, cat: "Birthday Surprise", h: "tall" },
  { src: birth2, cat: "Birthday Surprise", h: "med" },
  { src: birth3, cat: "Birthday Surprise", h: "short" },
  { src: birth4, cat: "Birthday Surprise", h: "tall" },
  { src: birth5, cat: "Birthday Surprise", h: "med" },
  { src: birth6, cat: "Birthday Surprise", h: "short" },
  { src: birth7, cat: "Birthday Surprise", h: "tall" },
  { src: wed1, cat: "Weddings", h: "tall" },
  { src: wed2, cat: "Weddings", h: "med" },
  { src: wed3, cat: "Weddings", h: "short" },
  { src: celeb, cat: "Celebrity Events", h: "tall" },
  { src: villa, cat: "Villa Surprise", h: "med" },
  { src: corp, cat: "Celebrity Events", h: "short" },
  { src: cel2, cat: "Celebrity Events", h: "med", type: "video" },
  { src: hero, cat: "Weddings", h: "tall" },
  { src: room1, cat: "Room Decor", h: "med" },
  { src: yacht1, cat: "Yacht Parties", h: "tall" },
  { src: yacht2, cat: "Yacht Parties", h: "short" },
  { src: villa, cat: "Villa Surprise", h: "tall" },
  { src: wedding, cat: "Weddings", h: "short" },
  { src: mod1, cat: "Model Shoots", h: "tall" },
  { src: mod2, cat: "Model Shoots", h: "med" },
  { src: mod3, cat: "Model Shoots", h: "short" },
  { src: mod4, cat: "Model Shoots", h: "tall" },
  { src: mod5, cat: "Model Shoots", h: "med" },
  { src: mod6, cat: "Model Shoots", h: "short" },
  { src: mod7, cat: "Model Shoots", h: "tall" },
  { src: mod8, cat: "Model Shoots", h: "med" },
  { src: mod9, cat: "Model Shoots", h: "short" },
  { src: mod10, cat: "Model Shoots", h: "tall" },
  { src: mod11, cat: "Model Shoots", h: "med" },
  { src: mod12, cat: "Model Shoots", h: "short" },
  { src: mod13, cat: "Model Shoots", h: "tall" },
  { src: mod14, cat: "Model Shoots", h: "med" },
];

const cats = ["All", "Weddings", "Yacht Parties", "Birthday Surprise", "Room Decor", "Villa Surprise", "Celebrity Events", "Model Shoots"];

const heightMap = { tall: "h-[460px]", med: "h-[340px]", short: "h-[260px]" } as const;

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [preview, setPreview] = useState<{ src: string; type?: string } | null>(null);
  const [uploadedItems, setUploadedItems] = useState<UploadedImage[]>([]);

  useEffect(() => {
    getUploadedImages().then(setUploadedItems).catch(console.error);
  }, []);

  const allItems = [...uploadedItems, ...items];
  const list = filter === "All" ? allItems : allItems.filter((i) => i.cat === filter);

  return (
    <PageShell>
      <section className="pt-40 pb-10 mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="The Diary" title="A gallery in candlelight" subtitle="Glimpses of nights composed with painstaking devotion." />
      </section>


      <section className="mx-auto max-w-7xl px-6 mb-10">
        <div className="flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-[10px] tracking-[0.3em] uppercase transition-all ${
                filter === c ? "bg-gradient-gold border-transparent text-background" : "border-border text-foreground/70 hover:border-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {list.map((it, i) => {
            const isVideo = "type" in it && it.type === "video";
            return (
            <Reveal key={i} delay={i * 30}>
              <button
                onClick={() => setPreview({ src: it.src, type: "type" in it ? it.type : "image" })}
                className={`mb-6 block w-full break-inside-avoid img-zoom relative overflow-hidden rounded-2xl shadow-soft hover:ring-gold-glow ${heightMap[it.h as keyof typeof heightMap]}`}
              >
                {isVideo ? (
                  <video
                    src={it.src}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="h-full w-full object-cover pointer-events-none"
                  />
                ) : (
                  <img src={it.src} alt={it.cat} loading="lazy" className="h-full w-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-foreground/40 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-background fill-background" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 text-background text-[10px] tracking-[0.35em] uppercase opacity-0 hover:opacity-100 transition-opacity">{it.cat}</div>
              </button>
            </Reveal>
            );
          })}
        </div>
      </section>

      {preview && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-foreground/85 backdrop-blur p-6 animate-fade-up" onClick={() => setPreview(null)}>
          <button className="absolute top-6 right-6 text-background"><X /></button>
          {preview.type === "video" ? (
            <video
              src={preview.src}
              controls
              autoPlay
              className="max-h-[90vh] max-w-full rounded-2xl shadow-gold"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img src={preview.src} alt="" className="max-h-[90vh] max-w-full rounded-2xl shadow-gold" />
          )}
        </div>
      )}
    </PageShell>
  );
}
