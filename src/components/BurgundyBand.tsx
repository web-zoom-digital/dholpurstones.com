"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function BurgundyBand() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#470c1b] via-[#5a1224] to-[#470c1b] py-16 sm:py-20 text-white overflow-hidden border-y border-[#c29b38]/40 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)]">
      {/* Decorative Gold Filigree & Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-[radial-gradient(ellipse_at_center,rgba(194,155,56,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-8 text-center">
        {/* Subtle Insignia Badge */}
        <div className="inline-flex items-center gap-2 text-[#c29b38] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          <Sparkles className="w-4 h-4" />
          ESTABLISHED IN 1953 • 7 DECADES OF MONUMENTAL CRAFT
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Statement Heading in Aboreto font */}
        <h2 className="font-['Aboreto',serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.08em] sm:tracking-[0.14em] uppercase text-white leading-tight max-w-4xl mx-auto drop-shadow-md">
          KNOWN AS INDIA’S PREMIER NATURAL STONE CRAFTSMEN & EXPORTERS
        </h2>

        {/* Serif Statement in EB Garamond */}
        <p className="font-['EB_Garamond',serif] italic text-lg sm:text-2xl text-[#f4efe6] max-w-3xl mx-auto mt-6 leading-relaxed">
          “From the monumental colonnades of India’s Parliament House to sacred temple sanctuaries across Europe and North America, our quarries and master artisans breathe eternal grandeur into natural stone.”
        </p>

        {/* Trust Points Row */}
        <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs tracking-wider uppercase text-white/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c29b38]" />
            <span>100% Captive Leasehold Quarries</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c29b38]" />
            <span>Zero Color Variation Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c29b38]" />
            <span>ISPM-15 Fumigated Seaworthy Packaging</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c29b38]" />
            <span>ISO 9001:2015 & CE Certified Quality</span>
          </div>
        </div>
      </div>
    </section>
  );
}
