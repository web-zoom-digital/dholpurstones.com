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
    id: "farmhouse",
    title: "Luxury Farm Houses & Country Estates",
    desc: "Grand stone entrance gateways, boundary wall cladding, cobblestone driveways, gazebo plinths, and poolside retreats.",
    image: "/assets/landscaping/landscape_patio_paving.jpg",
    badge: "Farm House Specialist",
  },
  {
    id: "gardens",
    title: "Designer Gardens & Outdoor Landscapes",
    desc: "Tiered sandstone fountains, lotus stone basins, Japanese stone lanterns, lion sculptures, and anti-slip flagstone pathways.",
    image: "/assets/landscaping/landscape_water_fountain.jpg",
    badge: "Garden Landscaping",
  },
  {
    id: "elevation",
    title: "Sandstone Front Elevation (300+ Designs)",
    desc: "Awarded by Govt. of India for creating 300+ bespoke front elevation designs — carved jharokhas, fluted pillars, and cornice relief.",
    image: "/assets/garg/crop_lion.jpg",
    badge: "Govt. of India Awarded",
  },
  {
    id: "temples",
    title: "Temples & Spiritual Sanctuaries",
    desc: "Intricate sandstone pillars, shikhara carvings, and sanctum flooring chiseled by generational master stone artisans.",
    image: "/assets/garg/temple_sanctum_pillars.jpg",
    badge: "Sacred Masonry",
  },
  {
    id: "villas",
    title: "Palatial Villas & Private Havelis",
    desc: "Luxury sandstone wall cladding, ornamental jali lattice screens, fireplace mantels, and classical colonnades.",
    image: "/assets/garg/crop_lantern.jpg",
    badge: "Estate Architecture",
  },
  {
    id: "monuments",
    title: "Monuments & Landmark Projects",
    desc: "Direct quarry extraction and turnkey contracting for parliamentary assemblies, 5-star hotel atriums, and embassies.",
    image: "/assets/projects/signature_atrium_cladding.jpg",
    badge: "Monumental Contracting",
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
              DHOLPURESTONES.COM &bull; ARCHITECTURAL TYPOLOGIES
            </span>
          </div>
          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C29B38] tracking-widest">
            06
          </span>
        </AnimDiv>

        {/* Section Title */}
        <AnimDiv delay={0} className="mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold text-[#C29B38] uppercase tracking-[0.18em] block mb-2">
            FARM HOUSES &bull; GARDENS &bull; FRONT ELEVATION
          </span>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141A17] uppercase tracking-wide mb-3">
            Architectural Applications
          </h2>
          <div className="w-12 h-1 bg-[#C29B38] rounded-full mb-3" />
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#68726E] max-w-2xl">
            Specialized natural stone execution for luxury farm houses, expansive private gardens, and award-winning front elevations — alongside temples and heritage monuments across India &amp; worldwide.
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
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#0D1311]/85 backdrop-blur-xs px-3 py-1 rounded-full border border-white/15">
                    <span className="text-[9px] font-bold text-[#E0BA55] uppercase tracking-wider">
                      {a.badge}
                    </span>
                  </div>
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
                  <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-[10px] font-bold text-[#C29B38] uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#C29B38]" />
                      <span>Quarry Direct Supply</span>
                    </div>
                    <span className="text-[#134e3f]">Custom CAD</span>
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
