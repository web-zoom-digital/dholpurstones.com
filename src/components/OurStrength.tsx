"use client";

import React, { useEffect, useRef } from "react";
import {
  LuMountain as Mountain,
  LuFactory as Factory,
  LuLayers as Layers,
  LuGlobe as Globe2,
  LuTrophy as Trophy,
  LuBuilding as Building,
  LuMapPin as MapPin
} from "react-icons/lu";

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

const strengths = [
  {
    num: "01",
    title: "OWN MINES",
    desc: "Direct source of premium natural sandstone & stone from our own quarries in Dholpur, Rajasthan.",
    icon: Mountain,
  },
  {
    num: "02",
    title: "MANUFACTURING",
    desc: "In-house stone cutting, calibration, polishing and architectural article production facilities.",
    icon: Factory,
  },
  {
    num: "03",
    title: "WIDE PRODUCT RANGE",
    desc: "Sandstone, luxury marble, granite, translucent semi-precious slabs & custom hand carvings.",
    icon: Layers,
  },
  {
    num: "04",
    title: "GLOBAL SUPPLY",
    desc: "Experienced worldwide export capability with an established overseas corporate office in Canada.",
    icon: Globe2,
  },
  {
    num: "05",
    title: "PROJECT EXPERIENCE",
    desc: "Trusted contractor for landmark institutional, spiritual, embassy and private estate projects.",
    icon: Trophy,
  },
  {
    num: "06",
    title: "VERSATILE APPLICATION",
    desc: "Bespoke stone solutions for temples, monuments, villas, hotels, plazas and gardens.",
    icon: Building,
  },
];

export default function OurStrength() {
  return (
    <section id="strength" className="bg-[#FAF7F2] py-10 sm:py-20 border-b border-black/6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Label */}
        <AnimDiv className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-black/8 mb-6 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C29B38]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.16em] text-[#141A17] uppercase">
              DHOLPURESTONES.COM
            </span>
          </div>
          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C29B38] tracking-widest">
            03
          </span>
        </AnimDiv>

        {/* Section Title */}
        <AnimDiv delay={0} className="mb-6 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold text-[#C29B38] uppercase tracking-[0.18em] block mb-1.5 sm:mb-2">
            Core Competencies
          </span>
          <h2 className="font-['Cinzel',serif] text-xl sm:text-3xl lg:text-4xl font-bold text-[#141A17] uppercase tracking-wide mb-2 sm:mb-3">
            Our Strength
          </h2>
          <div className="w-10 sm:w-12 h-1 bg-[#C29B38] rounded-full" />
        </AnimDiv>

        {/* 6 Strength Cards (2-col compact on mobile, 3-col on lg) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 mb-8 sm:mb-12">
          {strengths.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimDiv key={s.num} delay={i * 70}>
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-black/8 hover:border-[#C29B38]/60 hover:shadow-lg transition-all duration-300 group h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <span className="font-['Cinzel',serif] text-sm sm:text-xl font-bold text-[#C29B38]">
                        {s.num}
                      </span>
                      <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FAF7F2] border border-black/6 flex items-center justify-center text-[#134e3f] shadow-xs group-hover:bg-[#134e3f] group-hover:text-white transition-all duration-300">
                        <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                    <h3 className="font-['Cinzel',serif] text-[11px] sm:text-sm font-bold text-[#141A17] uppercase tracking-wider mb-1 sm:mb-2 group-hover:text-[#134e3f] transition-colors leading-tight">
                      {s.title}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] sm:text-xs text-[#68726E] leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-black/5 flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold text-[#C29B38] uppercase tracking-widest">
                    <span>GCL Verified</span>
                  </div>
                </div>
              </AnimDiv>
            );
          })}
        </div>

        {/* Offices & Business Presence Banner */}
        <AnimDiv delay={200}>
          <div className="bg-[#0D1311] rounded-2xl p-4 sm:p-8 text-white border border-[#C29B38]/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C29B38]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 relative z-10">
              <div className="flex-1">
                <span className="font-['Cinzel',serif] text-[9.5px] sm:text-[10px] font-bold text-[#C29B38] tracking-[0.2em] uppercase block mb-1">
                  Strategic Hubs
                </span>
                <h3 className="font-['Cinzel',serif] text-sm sm:text-lg font-bold tracking-[0.1em] text-white uppercase mb-3 sm:mb-4">
                  Offices &amp; Business Presence
                </h3>

                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {[
                    { name: "Sarmathura", role: "Mines, Dholpur" },
                    { name: "Sikandra", role: "Carving Works" },
                    { name: "Kishangarh", role: "Trading Hub" },
                    { name: "Canada", role: "Overseas Office", gold: true },
                  ].map((loc) => (
                    <div
                      key={loc.name}
                      className="flex items-start gap-1.5 sm:gap-2.5 p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/5"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#C29B38] shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <span
                          className={`text-[11px] sm:text-sm font-bold block truncate ${
                            loc.gold ? "text-[#C29B38]" : "text-white"
                          }`}
                        >
                          {loc.name}
                        </span>
                        <span className="text-[9px] sm:text-xs text-white/50 block truncate">{loc.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:border-l lg:border-white/10 lg:pl-8 flex flex-col items-start lg:items-center justify-center shrink-0 pt-2 lg:pt-0">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#C29B38]/15 border border-[#C29B38]/40">
                  <span className="font-['Cinzel',serif] text-[10.5px] sm:text-xs font-bold text-[#C29B38] tracking-[0.16em] uppercase">
                    India &bull; Global Reach
                  </span>
                </div>
              </div>
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
