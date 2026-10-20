"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

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

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#FAF7F2] py-14 sm:py-20 border-b border-black/6 scroll-mt-20 sm:scroll-mt-24">
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
            02
          </span>
        </AnimDiv>

        {/* Two-Column Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          {/* Left Text (7 Cols) */}
          <AnimDiv delay={0} className="lg:col-span-7">
            <span className="text-[10px] sm:text-xs font-bold text-[#C29B38] uppercase tracking-[0.18em] block mb-2">
              Legacy &amp; Expertise
            </span>
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141A17] uppercase tracking-wide leading-tight mb-3">
              About Us
            </h2>
            <div className="w-12 h-1 bg-[#C29B38] rounded-full mb-5" />
            <p className="font-['EB_Garamond',serif] text-base sm:text-lg lg:text-xl text-[#141A17]/85 leading-relaxed">
              Dholpurestones.com is an established natural-stone business with a legacy dating back to 1953 (incorporating Garg Corporation Ltd. and Saroj Stone Industries). Awarded by the Government of India for creating 300+ front elevation designs in sandstone and nominated for the prestigious International Award for Business Excellence, the company deals in sandstone, marble, granite and semi-precious stones, with capabilities across mining, manufacturing, exporting and contracting.
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#68726E] leading-relaxed mt-3.5">
              The profile combines natural stone sourcing and manufacturing with finished architectural and decorative stone work for luxury farm houses, designer gardens, residential estates, commercial facades, and monumental sacred architecture.
            </p>
          </AnimDiv>

          {/* Right Callout Card (5 Cols) */}
          <AnimDiv
            delay={120}
            className="lg:col-span-5 bg-[#161D1A] rounded-2xl p-6 sm:p-7 text-white shadow-xl border border-white/8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C29B38]/10 rounded-full blur-2xl pointer-events-none" />
            <span className="font-['Cinzel',serif] text-4xl sm:text-5xl font-extrabold text-[#C29B38] tracking-wider block mb-2">
              1953
            </span>
            <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold tracking-[0.12em] text-white uppercase mb-1.5">
              A Long-Standing Natural Stone Legacy
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-white/60 tracking-wider uppercase mb-5">
              Govt. of India Awarded &bull; Intl. Award Nominee &bull; Estd. 1953
            </p>
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2.5 text-xs">
              {[
                "Govt. of India Awarded",
                "Intl. Award Nominee",
                "300+ Elevation Designs",
                "Farm House Specialist",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-white/85 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimDiv>
        </div>

        {/* Architectural Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {[
            {
              src: "/assets/garg/crop_lion.jpg",
              alt: "Sandstone Sculptural Articles – Lion Sculpture",
              title: "Sandstone Sculptural Articles",
              sub: "Hand-carved lion sculpture & monumental masonry",
            },
            {
              src: "/assets/garg/crop_lantern.jpg",
              alt: "Architectural & Landscape Elements – Stone Lantern",
              title: "Architectural & Landscape Elements",
              sub: "Intricate perforated sandstone lighting & outdoor decor",
            },
          ].map((item, i) => (
            <AnimDiv key={item.title} delay={i * 120}>
              <div className="bg-white rounded-2xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl hover:border-[#C29B38]/50 transition-all duration-300 group">
                <div className="w-full bg-[#F0EBE1] rounded-t-2xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#141A17] uppercase tracking-wider group-hover:text-[#134e3f] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#68726E] mt-1 font-['Plus_Jakarta_Sans',sans-serif]">
                    {item.sub}
                  </p>
                </div>
              </div>
            </AnimDiv>
          ))}
        </div>

        {/* Section Footer Bar (Wrap Safe on Mobile) */}
        <div className="mt-10 sm:mt-12 pt-4 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-semibold text-[#68726E] uppercase tracking-wider text-center sm:text-left">
          <span>Natural Stone &bull; Mines &bull; Manufacturing &bull; Export &bull; Contracting</span>
          <span className="font-['Cinzel',serif] text-[#141A17]">DHOLPURESTONES.COM</span>
        </div>
      </div>
    </section>
  );
}
