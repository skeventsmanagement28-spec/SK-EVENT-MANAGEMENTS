import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Logo } from "./Logo";
import { Menu, X, ChevronDown, Anchor, Car, Building2 } from "lucide-react";
// Fallback: some icons may be aliased

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

const rentalItems = [
  { to: "/rentals/yacht",         label: "Yacht Rentals",       icon: Anchor,    tag: "All Fleet", desc: "Explore our entire 8-yacht fleet" },
  { to: "/rentals/car-rental-goa", label: "Car Rental Goa",     icon: Car,       tag: null,        desc: "14-car premium fleet" },
  { to: "/rentals/villa-goa",     label: "Villa Rentals Goa",   icon: Building2, tag: "New",       desc: "Private pool villas · Goa" },
];

const darkStyle = {
  background: "var(--gradient-navbar)",
  backdropFilter: "blur(16px)",
  border: "1px solid oklch(0.78 0.13 85 / 0.5)",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [rentalsOpen, setRentalsOpen] = useState(false);
  const [mobileRentalsOpen, setMobileRentalsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useRouterState({ select: (s) => s.location.pathname });
  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setRentalsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setRentalsOpen(false);
    setOpen(false);
    setMobileRentalsOpen(false);
  }, [location]);

  const isDark = scrolled || !isHome;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setRentalsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setRentalsOpen(false), 200);
  };

  const linkClass = `relative text-[12px] font-bold tracking-[0.3em] uppercase transition-colors ${
    isDark
      ? "text-gold hover:text-yellow-300"
      : "text-white hover:text-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
  }`;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isDark ? "py-2" : "py-5"}`}>
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${isDark ? "rounded-full shadow-gold" : ""}`}
        style={isDark ? darkStyle : {}}
      >
        <nav className="flex items-center justify-between py-2">
          <Link to="/" className="flex items-center"><Logo size={42} /></Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={linkClass}
                activeProps={{ className: "text-yellow-300 font-bold underline underline-offset-4" }}
              >
                {l.label}
              </Link>
            ))}

            {/* Rentals dropdown trigger */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setRentalsOpen(!rentalsOpen)}
                className={`${linkClass} inline-flex items-center gap-1.5`}
              >
                Rentals
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-300 ${rentalsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown panel */}
              {rentalsOpen && (
                <div
                  className="absolute top-full right-0 mt-5 w-[420px] origin-top-right"
                  style={{
                    animation: "dropdown-in 0.3s cubic-bezier(.2,.8,.2,1) both",
                  }}
                >
                  <div
                    className="rounded-2xl p-4 shadow-gold border border-gold/40"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.15 0.04 50 / 0.97), oklch(0.12 0.03 40 / 0.97))",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    {/* Header */}
                    <div className="px-3 pb-3 mb-2 border-b border-gold/20">
                      <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 font-bold">
                        Yacht · Car · Villa Rentals
                      </p>
                    </div>

                    {/* Items */}
                    <div className="grid grid-cols-1 gap-1 max-h-[400px] overflow-y-auto rental-scroll">
                      {rentalItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 hover:bg-gold/10"
                          onClick={() => setRentalsOpen(false)}
                        >
                          <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/5 group-hover:bg-gold/20 group-hover:border-gold/60 transition-all duration-300">
                            <item.icon className="h-4 w-4 text-gold" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-white/90 group-hover:text-gold transition-colors">
                                {item.label}
                              </span>
                              {item.tag && (
                                <span className="text-[8px] tracking-[0.2em] uppercase font-bold px-1.5 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/30">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-white/50 mt-0.5 truncate">{item.desc}</p>
                          </div>
                          <span className="text-gold/0 group-hover:text-gold/70 transition-all duration-300 text-xs">→</span>
                        </Link>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-2 pt-3 border-t border-gold/20 px-3">
                      <Link
                        to="/contact"
                        onClick={() => setRentalsOpen(false)}
                        className="shimmer flex items-center justify-center gap-2 w-full rounded-full bg-gradient-gold px-4 py-2.5 text-[10px] tracking-[0.3em] uppercase text-background font-bold shadow-gold"
                      >
                        Enquire Custom Rental
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="shimmer rounded-full bg-gradient-gold px-5 py-2.5 text-[11px] tracking-[0.3em] uppercase text-background shadow-gold font-bold">
              Plan Event
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 font-bold ${isDark ? "text-gold" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden mt-2 mx-4 rounded-2xl p-6 shadow-gold animate-fade-up" style={darkStyle}>
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm font-bold tracking-[0.25em] uppercase text-gold hover:text-yellow-300">
                {l.label}
              </Link>
            ))}

            {/* Mobile Rentals collapsible */}
            <button
              onClick={() => setMobileRentalsOpen(!mobileRentalsOpen)}
              className="flex items-center justify-between text-sm font-bold tracking-[0.25em] uppercase text-gold hover:text-yellow-300"
            >
              Rentals
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileRentalsOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileRentalsOpen && (
              <div className="flex flex-col gap-2 pl-4 border-l-2 border-gold/30 ml-2">
                {rentalItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => { setOpen(false); setMobileRentalsOpen(false); }}
                    className="flex items-center gap-2.5 py-1.5 text-[12px] font-bold tracking-[0.2em] uppercase text-white/80 hover:text-gold transition-colors"
                  >
                    <item.icon className="h-3.5 w-3.5 text-gold/70" />
                    {item.label}
                    {item.tag && (
                      <span className="text-[7px] tracking-[0.15em] uppercase font-bold px-1.5 py-0.5 rounded-full bg-gold/20 text-gold">
                        {item.tag}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes dropdown-in {
          from { opacity: 0; transform: translateY(-8px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .rental-scroll::-webkit-scrollbar { width: 4px; }
        .rental-scroll::-webkit-scrollbar-track { background: transparent; }
        .rental-scroll::-webkit-scrollbar-thumb { background: oklch(0.78 0.13 85 / 0.3); border-radius: 10px; }
      `}</style>
    </header>
  );
}
