"use client";

import React, { useEffect, useRef } from "react";
import { Mountain, Factory, Layers, Globe2, Trophy, Building, MapPin } from "lucide-react";

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
    <section id="strength" className="bg-white py-14 sm:py-20 border-b border-black/6">
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
            03
          </span>
        </AnimDiv>

        {/* Section Title */}
        <AnimDiv delay={0} className="mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold text-[#C29B38] uppercase tracking-[0.18em] block mb-2">
            Core Competencies
          </span>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141A17] uppercase tracking-wide mb-3">
            Our Strength
          </h2>
          <div className="w-12 h-1 bg-[#C29B38] rounded-full" />
        </AnimDiv>

        {/* 6 Strength Cards (Responsive: 1-col on mobile, 2-col on sm, 3-col on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {strengths.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimDiv key={s.num} delay={i * 70}>
                <div className="bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-black/8 hover:border-[#C29B38]/60 hover:shadow-lg transition-all duration-300 group h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-['Cinzel',serif] text-xl font-bold text-[#C29B38]">
                        {s.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-black/6 flex items-center justify-center text-[#134e3f] shadow-sm group-hover:bg-[#134e3f] group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#141A17] uppercase tracking-wider mb-2 group-hover:text-[#134e3f] transition-colors">
                      {s.title}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#68726E] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-black/5 flex items-center gap-1.5 text-[10px] font-bold text-[#C29B38] uppercase tracking-widest">
                    <span>GCL Verified</span>
                  </div>
                </div>
              </AnimDiv>
            );
          })}
        </div>

        {/* Offices & Business Presence Banner */}
        <AnimDiv delay={200}>
          <div className="bg-[#161D1A] rounded-2xl p-6 sm:p-8 text-white border border-white/8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C29B38]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="flex-1">
                <span className="font-['Cinzel',serif] text-[10px] font-bold text-[#C29B38] tracking-[0.2em] uppercase block mb-1">
                  Strategic Hubs
                </span>
                <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold tracking-[0.1em] text-white uppercase mb-4">
                  Offices &amp; Business Presence
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { name: "Sarmathura", role: "Mining & Quarry Hub, Dholpur" },
                    { name: "Sikandra", role: "Artisan Stone Carving Facility" },
                    { name: "Kishangarh", role: "Marble & Granite Trading Center" },
                    { name: "Canada", role: "Overseas Corporate Office", gold: true },
                  ].map((loc) => (
                    <div
                      key={loc.name}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5"
                    >
                      <MapPin className="w-4 h-4 text-[#C29B38] shrink-0 mt-0.5" />
                      <div>
                        <span
                          className={`text-xs sm:text-sm font-bold block ${
                            loc.gold ? "text-[#C29B38]" : "text-white"
                          }`}
                        >
                          {loc.name}
                        </span>
                        <span className="text-[10px] sm:text-xs text-white/50">{loc.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:border-l lg:border-white/10 lg:pl-8 flex flex-col items-start lg:items-center justify-center shrink-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C29B38]/15 border border-[#C29B38]/40">
                  <span className="font-['Cinzel',serif] text-xs font-bold text-[#C29B38] tracking-[0.16em] uppercase">
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
