"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

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

const fourStones = [
  {
    id: "blue-agate",
    name: "Royal Blue Agate",
    desc: "Backlit Feature Walls & Luxury Panels",
    image: "/semi-precious/blue-agate.jpeg",
  },
  {
    id: "tiger-eyes",
    name: "Tiger's Eye",
    desc: "Golden Chatoyant Slabs & Bar Counters",
    image: "/semi-precious/tiger-eyes.jpeg",
  },
  {
    id: "green-agate",
    name: "Green Agate",
    desc: "Translucent Wellness & Spa Wall Cladding",
    image: "/semi-precious/green-agate.jpeg",
  },
  {
    id: "lapis-lazuli",
    name: "Lapis Lazuli",
    desc: "Deep Celestial Indigo Inlay & Accent Slabs",
    image: "/semi-precious/lapis-lazuli.jpeg",
  },
];

export default function SemiPreciousPreview() {
  return (
    <section
      id="semi-precious"
      className="py-12 sm:py-20 bg-[#F7F4EB] border-b border-black/6 relative overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simple Centered Heading and Content */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <AnimDiv delay={0}>
            <span className="text-[10px] sm:text-xs font-bold text-[#C5A15B] uppercase tracking-[0.2em] block mb-2 sm:mb-3">
              Lapidary Collection
            </span>
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-[#1F2A24] leading-tight mb-3">
              Semi-Precious Gemstone
              <br />
              <span className="text-[#C5A15B]">Slabs &amp; Feature Panels</span>
            </h2>
            <div className="w-12 h-1 bg-[#C5A15B] rounded-full mx-auto mb-4" />
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#6B7C73] leading-relaxed max-w-2xl mx-auto">
              Rare natural agate, lapis lazuli, jasper and tiger&apos;s eye slabs individually hand-assembled by master lapidary artisans. Every gemstone panel is a unique geological masterpiece crafted for backlit feature walls, luxury counters, and signature architectural interiors.
            </p>
          </AnimDiv>
        </div>

        {/* Four Images with their Name as Heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {fourStones.map((stone, i) => (
            <AnimDiv key={stone.id} delay={i * 80}>
              <Link
                href="/semi-precious"
                className="group block bg-white rounded-2xl overflow-hidden border border-black/8 hover:border-[#C5A15B]/70 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F4EB]">
                  <Image
                    src={stone.image}
                    alt={stone.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                </div>
                <div className="p-4 sm:p-5 text-center">
                  <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-[#1F2A24] uppercase tracking-wider group-hover:text-[#123D32] transition-colors">
                    {stone.name}
                  </h3>
                  <p className="text-xs text-[#6B7C73] mt-1 font-['Plus_Jakarta_Sans',sans-serif]">
                    {stone.desc}
                  </p>
                </div>
              </Link>
            </AnimDiv>
          ))}
        </div>

        {/* Centered Action Link */}
        <AnimDiv delay={200} className="text-center mt-10 sm:mt-12">
          <Link
            href="/semi-precious"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#123D32] hover:bg-[#1E5A46] text-[#C5A15B] hover:text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            <span>Explore All Gemstone Varieties</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimDiv>
      </div>
    </section>
  );
}
