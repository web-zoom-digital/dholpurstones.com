"use client";

import React from "react";
import Link from "next/link";
import {
  LuSparkles as Sparkles,
  LuAward as Award,
  LuShieldCheck as ShieldCheck,
  LuTreePine as TreePine,
  LuArrowRight as ArrowRight,
  LuTrophy as Trophy
} from "react-icons/lu";
import WhatsAppIcon from "./WhatsAppIcon";

export default function BurgundyBand() {
  return (
    <section
      id="elevation"
      className="relative w-full scroll-mt-20 sm:scroll-mt-24 bg-gradient-to-r from-[#123D32] via-[#1E5A46] to-[#123D32] py-9 sm:py-16 text-white overflow-hidden border-y border-[#C5A15B]/40 shadow-[inset_0_0_90px_rgba(0,0,0,0.7)]"
    >
      {/* Decorative Gold Filigree & Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-3/4 h-full bg-[radial-gradient(ellipse_at_center,rgba(194,155,56,0.14)_0%,transparent_70%)] pointer-events-none" />

      {/* Ambient Forest & Gold Glows */}
      <div className="absolute -top-10 left-10 w-48 h-48 bg-[#C5A15B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-64 h-64 bg-[#123D32]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* National & International Accolades Ribbon Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#C5A15B]/15 border border-[#C5A15B]/45 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[#C5A15B] text-[9.5px] sm:text-xs font-bold tracking-[0.1em] sm:tracking-[0.14em] uppercase mb-3 sm:mb-4 shadow-md backdrop-blur-xs flex-wrap justify-center leading-tight">
          <Award className="w-3.5 h-3.5 text-[#C5A15B] shrink-0" />
          <span>AWARDED BY GOVT. OF INDIA &bull; NOMINATED FOR INTERNATIONAL AWARD FOR BUSINESS EXCELLENCE</span>
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A15B] shrink-0" />
        </div>

        {/* Primary Statement — Exact User Requirement */}
        <h2 className="font-['Cinzel',serif] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.03em] uppercase text-white leading-snug sm:leading-tight max-w-5xl mx-auto drop-shadow-md">
          We Have Made More Than{" "}
          <span className="text-[#C5A15B] underline decoration-[#C5A15B]/60 decoration-2 underline-offset-4 sm:underline-offset-8">
            300+ Designs
          </span>{" "}
          for Front Elevation in Sandstone — Awarded by Govt. of India
        </h2>

        {/* International Nomination & Strong Focus on Farm Houses & Gardens */}
        <div className="mt-3.5 sm:mt-5 max-w-3xl mx-auto">
          <p className="font-['Cinzel',serif] text-xs sm:text-base md:text-lg font-semibold text-[#C5A15B] tracking-wide uppercase">
            Nominated for International Award for Business Excellence &bull; Specialized in Luxury Farm Houses &amp; Garden Landscapes
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/80 mt-2 sm:mt-2.5 leading-relaxed">
            From regal farm house entrance gates, poolside bullnose coping, and cobblestone driveways to
            hand-carved garden water fountains and multi-tiered stone landscaping — we transform vast outdoor
            properties into timeless heritage retreats using authentic Dholpur sandstone.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 max-w-lg mx-auto">
          <a
            href={`https://wa.me/919414945457?text=${encodeURIComponent(
              "Hello Dholpurestones.com, I want to explore your 300+ Front Elevation sandstone designs and luxury Farm House / Garden landscaping solutions."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-[#123D32] font-bold text-xs uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded-full shadow-lg transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-[#123D32]" size={16} />
            <span>Explore 300+ Elevation Designs</span>
          </a>

          <Link
            href="/farmhouse-gardens"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C5A15B] hover:bg-[#C5A15B] text-[#123D32] font-bold text-xs uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all active:scale-95 shadow-md"
          >
            <TreePine className="w-4 h-4 text-[#123D32]" />
            <span>Farm House &amp; Garden Solutions</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#123D32]" />
          </Link>
        </div>

        {/* 4 Trust Points Row */}
        <div className="mt-8 pt-5 sm:pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5 text-xs tracking-wider uppercase text-white/90">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#123D32]/50 hover:bg-[#123D32]/80 p-2.5 sm:p-3 rounded-xl border border-white/8 hover:border-[#C5A15B]/40 transition-colors">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A15B] shrink-0" />
            <span className="font-semibold text-center sm:text-left text-[10.5px] sm:text-xs">
              300+ Elevation Designs
            </span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#123D32]/50 hover:bg-[#123D32]/80 p-2.5 sm:p-3 rounded-xl border border-white/8 hover:border-[#C5A15B]/40 transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A15B] shrink-0" />
            <span className="font-semibold text-center sm:text-left text-[10.5px] sm:text-xs">
              Govt. of India Awarded
            </span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#123D32]/50 hover:bg-[#123D32]/80 p-2.5 sm:p-3 rounded-xl border border-white/8 hover:border-[#C5A15B]/40 transition-colors">
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A15B] shrink-0" />
            <span className="font-semibold text-center sm:text-left text-[10.5px] sm:text-xs">
              Intl. Award Nominee
            </span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#123D32]/50 hover:bg-[#123D32]/80 p-2.5 sm:p-3 rounded-xl border border-white/8 hover:border-[#C5A15B]/40 transition-colors">
            <TreePine className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A15B] shrink-0" />
            <span className="font-semibold text-center sm:text-left text-[10.5px] sm:text-xs">
              Farm House &amp; Gardens
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
