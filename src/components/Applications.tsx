"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

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

const apps = [
  {
    id: "temples",
    title: "Temples & Spiritual Places",
    desc: "Intricate sandstone pillars, shikhara carvings, and sanctum flooring.",
    image: "/assets/garg/temple_sanctum_pillars.jpg",
  },
  {
    id: "residential",
    title: "Residential Villas & Estates",
    desc: "Luxury marble cladding, stone lanterns, fireplaces & ornamental carvings.",
    image: "/assets/garg/stone_lantern.jpg",
  },
  {
    id: "commercial",
    title: "Commercial Buildings & Plazas",
    desc: "High-durability granite facades, monolithic steps and lobby interiors.",
    image: "/assets/garg/black_granite.jpg",
  },
  {
    id: "landscapes",
    title: "Landscapes & Royal Gardens",
    desc: "Sculptural sandstone lions, stone benches, fountains and pathways.",
    image: "/assets/garg/lion_sculpture.jpg",
  },
  {
    id: "public",
    title: "Public Spaces & Institutions",
    desc: "Calibrated architectural stone for universities, hospitals & airports.",
    image: "/assets/garg/botticino_marble.jpg",
  },
  {
    id: "monuments",
    title: "Monuments & Heritage Restorations",
    desc: "Authentic quarry extraction & historical preservation stone masonry.",
    image: "/assets/garg/semi_precious.jpg",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="bg-[#FAF7F2] py-14 sm:py-20 border-b border-black/6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Label */}
        <AnimDiv className="flex items-center justify-between pb-3 border-b border-black/8 mb-8 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C29B38]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.16em] text-[#141A17] uppercase">
              DHOLPURESTONES.COM
            </span>
          </div>
          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C29B38] tracking-widest">
            06
          </span>
        </AnimDiv>

        {/* Section Title */}
        <AnimDiv delay={0} className="mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold text-[#C29B38] uppercase tracking-[0.18em] block mb-2">
            Versatile Typologies
          </span>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141A17] uppercase tracking-wide mb-3">
            Applications
          </h2>
          <div className="w-12 h-1 bg-[#C29B38] rounded-full mb-3" />
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#68726E] max-w-2xl">
            Natural stone brings lasting character, dignity and endurance to architecture, landscapes and landmark spaces across generations.
          </p>
        </AnimDiv>

        {/* 6 Application Cards (3x2 grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 sm:mb-12">
          {apps.map((a, i) => (
            <AnimDiv key={a.id} delay={i * 70}>
              <div className="bg-white rounded-2xl overflow-hidden border border-black/8 hover:border-[#C29B38]/60 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                {/* Image */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-[#F5F2EC] shrink-0">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#141A17] uppercase tracking-wider group-hover:text-[#134e3f] transition-colors mb-1.5">
                      {a.title}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#68726E] leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center gap-1.5 text-[10px] font-bold text-[#C29B38] uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-[#C29B38]" />
                    <span>Architectural Specification</span>
                  </div>
                </div>
              </div>
            </AnimDiv>
          ))}
        </div>

        {/* Emerald Landmark Banner */}
        <AnimDiv delay={200}>
          <div className="bg-[#134e3f] rounded-2xl p-6 sm:p-10 text-center text-white shadow-xl relative overflow-hidden border border-[#C29B38]/30">
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, #C29B38 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="font-['Cinzel',serif] text-[10px] font-bold text-[#C29B38] tracking-[0.25em] uppercase block mb-2">
                Enduring Architectural Philosophy
              </span>
              <h3 className="font-['Cinzel',serif] text-lg sm:text-2xl lg:text-3xl font-bold tracking-[0.08em] text-white uppercase leading-tight mb-2 sm:mb-3">
                From Nature to Iconic Landmarks
              </h3>
              <p className="font-['EB_Garamond',serif] italic text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                &ldquo;Stone designed to endure. Craftsmanship designed to be remembered.&rdquo;
              </p>
            </div>
          </div>
        </AnimDiv>

        {/* Section Footer Bar */}
        <div className="mt-10 sm:mt-12 pt-4 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-semibold text-[#68726E] uppercase tracking-wider text-center sm:text-left">
          <span>Natural Stone &bull; Mines &bull; Manufacturing &bull; Export &bull; Contracting</span>
          <span className="font-['Cinzel',serif] text-[#141A17]">DHOLPURESTONES.COM</span>
        </div>
      </div>
    </section>
  );
}
