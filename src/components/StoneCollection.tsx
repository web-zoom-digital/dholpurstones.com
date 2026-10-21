"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ArrowUpRight, CheckCircle, Sparkles } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

function AnimDiv({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("gcl-visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`gcl-animate ${className}`}>
      {children}
    </div>
  );
}

const stones = [
  {
    id: "botticino",
    name: "BOTTICINO MARBLE",
    category: "IMPORTED & LUXURY MARBLE",
    desc: "Premium Italian/imported marble with subtle golden-beige hues and elegant natural veining, ideal for palatial flooring and luxury interiors.",
    image: "/assets/garg/botticino_marble.jpg",
    specs: {
      origin: "Imported Block Processing & Sawn Slabs",
      finish: "Mirror Polish, Silky Honed, Antique Brushed",
      application: "Grand Lobbies, Luxury Living Rooms, Internal Flooring, Feature Cladding",
      thickness: "18mm, 20mm, 30mm Calibrated Slabs",
    },
  },
  {
    id: "black-granite",
    name: "BLACK GRANITE",
    category: "STRUCTURAL ARCHITECTURAL GRANITE",
    desc: "Deep crystalline natural granite tone with distinctive mineral density engineered for high-traffic public spaces and exterior cladding.",
    image: "/assets/garg/black_granite.jpg",
    specs: {
      origin: "Rajasthan & South Indian Igneous Formations",
      finish: "High Gloss Polish, Thermal Flamed, Bush Hammered, Leathered",
      application: "Commercial Plazas, Countertops, Monoliths, Monumental Steps",
      thickness: "20mm, 30mm, 40mm, Custom Cut-to-Size",
    },
  },
  {
    id: "semi-precious",
    name: "SEMI-PRECIOUS STONE",
    category: "EXCLUSIVE LAPIDARY GEMSTONE",
    desc: "Rare hand-assembled translucent blue agate and quartz gemstone slabs for breathtaking backlit statement walls and royal Pietra Dura inlays.",
    image: "/assets/garg/semi_precious.jpg",
    specs: {
      origin: "Royal Blue Agate, Lapis Lazuli & Quartz Matrix",
      finish: "Backlit Mirror Polished, Epoxy Gemstone Fusion",
      application: "Backlit Feature Walls, Luxury Bar Counters, Pietra Dura Inlay Art",
      thickness: "15mm–20mm Translucent Slabs",
    },
  },
  {
    id: "elmali-beige",
    name: "ELMALI BEIGE",
    category: "WARM ARCHITECTURAL MARBLE",
    desc: "Warm Mediterranean beige marble renowned for consistent tone, subtle fossilization, and timeless warmth in corporate and hospitality spaces.",
    image: "/assets/garg/elmali_beige.jpg",
    specs: {
      origin: "Mediterranean Beige Quarry Formations",
      finish: "Gloss Polished, Brushed Antique, Satin Honed",
      application: "Executive Boardrooms, Luxury Hotels, Wall Cladding, Bathrooms",
      thickness: "18mm, 20mm Slabs & Cut-to-Size Tiles",
    },
  },
];

export default function StoneCollection() {
  const [selected, setSelected] = useState<(typeof stones)[0] | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="collection" className="bg-white py-10 sm:py-20 border-b border-black/6">
      <div className="max-w-[1280px] mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header Label */}
        <AnimDiv className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-black/8 mb-6 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C29B38]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.16em] text-[#141A17] uppercase">
              DHOLPURESTONES.COM
            </span>
          </div>
          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C29B38] tracking-widest">
            05
          </span>
        </AnimDiv>

        {/* Section Title */}
        <AnimDiv delay={0} className="mb-6 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold text-[#C29B38] uppercase tracking-[0.18em] block mb-1.5 sm:mb-2">
            Materials &amp; Finishes
          </span>
          <h2 className="font-['Cinzel',serif] text-xl sm:text-3xl lg:text-4xl font-bold text-[#141A17] uppercase tracking-wide mb-2 sm:mb-3">
            Natural Stone Collection
          </h2>
          <div className="w-10 sm:w-12 h-1 bg-[#C29B38] rounded-full mb-2.5 sm:mb-3" />
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#68726E] max-w-2xl">
            Selected product references from our inventory. Click any stone to inspect technical specifications, finish variants, and request supply.
          </p>
        </AnimDiv>

        {/* 2x2 Grid for Stones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {stones.map((s, i) => (
            <AnimDiv key={s.id} delay={i * 90}>
              <button
                type="button"
                onClick={() => setSelected(s)}
                className="w-full text-left bg-[#FAF7F2] rounded-xl sm:rounded-2xl overflow-hidden border border-black/8 hover:border-[#C29B38]/60 hover:shadow-xl transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C29B38]/50"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-[#EAE6DE]">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(max-width:640px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#134e3f] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#0D1311]/85 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/10">
                    <span className="text-[9px] font-bold text-[#C29B38] uppercase tracking-wider">
                      {s.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#141A17] uppercase tracking-wider mb-1.5 sm:mb-2 group-hover:text-[#134e3f] transition-colors">
                    {s.name}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] sm:text-xs text-[#68726E] leading-relaxed line-clamp-2">
                    {s.desc}
                  </p>
                  <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#C29B38] group-hover:text-[#134e3f] transition-colors">
                    <span>Inspect Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </button>
            </AnimDiv>
          ))}
        </div>

        {/* Section Footer Bar */}
        <div className="mt-10 sm:mt-12 pt-4 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-semibold text-[#68726E] uppercase tracking-wider text-center sm:text-left">
          <span>Natural Stone &bull; Mines &bull; Manufacturing &bull; Export &bull; Contracting</span>
          <span className="font-['Cinzel',serif] text-[#141A17]">DHOLPURESTONES.COM</span>
        </div>
      </div>

      {/* Specifications Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setSelected(null)}
          />

          <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-[#C29B38]/30">
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-56 w-full shrink-0">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                sizes="500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] font-bold text-[#C29B38] uppercase tracking-wider block mb-1">
                  {selected.category}
                </span>
                <h3 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold uppercase tracking-wide">
                  {selected.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#141A17]/85 leading-relaxed">
                {selected.desc}
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { label: "Quarry / Sourcing", value: selected.specs.origin },
                  { label: "Finishes Available", value: selected.specs.finish },
                  { label: "Best Applications", value: selected.specs.application },
                  { label: "Thickness & Formats", value: selected.specs.thickness },
                ].map((spec) => (
                  <div key={spec.label} className="bg-[#FAF7F2] p-3 rounded-xl border border-black/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#68726E] block mb-1">
                      {spec.label}
                    </span>
                    <span className="text-xs font-semibold text-[#141A17]">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Quote Button */}
              <a
                href={`https://wa.me/919414945457?text=${encodeURIComponent(
                  `Hello Dholpurestones.com, I am interested in inquiring about supply, pricing and delivery for ${selected.name} (${selected.category}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-colors mt-4"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                <span>Request Quotation on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
