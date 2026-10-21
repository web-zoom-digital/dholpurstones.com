"use client";

import React from "react";
import Link from "next/link";
import {
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
      className="relative w-full scroll-mt-20 sm:scroll-mt-24 bg-gradient-to-br from-[#134e3f] via-[#0e3b30] to-[#0A261F] py-10 sm:py-16 text-white overflow-hidden border-y border-[#C29B38]/40 shadow-2xl"
    >
      {/* Decorative Shimmering Gold & Light Beams matching Quarry Callout */}
      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-[#C29B38]/12 to-transparent animate-beam-sweep pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-3/4 h-full bg-[radial-gradient(ellipse_at_center,rgba(194,155,56,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Ambient Emerald & Gold Radiant Orbs */}
      <div className="absolute -left-10 -top-10 w-72 h-72 bg-[#134e3f]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#C29B38]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* National & International Accolades Ribbon Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#C29B38]/20 border border-[#C29B38]/40 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[#FAF7F2] text-[9.5px] sm:text-xs font-bold tracking-[0.1em] sm:tracking-[0.14em] uppercase mb-3 sm:mb-4 shadow-xs flex-wrap justify-center leading-tight">
          <Award className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
          <span>AWARDED BY GOVT. OF INDIA &bull; NOMINATED FOR INTERNATIONAL AWARD FOR BUSINESS EXCELLENCE</span>
        </div>

        {/* Primary Statement — Exact User Requirement */}
        <h2 className="font-['Cinzel',serif] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.03em] uppercase text-white leading-snug sm:leading-tight max-w-5xl mx-auto drop-shadow-md">
          We Have Made More Than{" "}
          <span className="text-[#E0BA55] underline decoration-[#C29B38]/60 decoration-2 underline-offset-4 sm:underline-offset-8">
            300+ Designs
          </span>{" "}
          for Front Elevation in Sandstone — Awarded by Govt. of India
        </h2>

        {/* International Nomination & Strong Focus on Farm Houses & Gardens */}
        <div className="mt-3.5 sm:mt-5 max-w-3xl mx-auto">
          <p className="font-['Cinzel',serif] text-xs sm:text-base md:text-lg font-semibold text-[#F5E6BE] tracking-wide uppercase">
            Nominated for International Award for Business Excellence &bull; Specialized in Luxury Farm Houses &amp; Garden Landscapes
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/85 mt-2 sm:mt-2.5 leading-relaxed">
            From regal farm house entrance gates, poolside bullnose coping, and cobblestone driveways to 
            hand-carved garden water fountains and multi-tiered stone landscaping — we transform vast outdoor 
            properties into timeless heritage retreats using authentic Sarmathura sandstone.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
          <a
            href={`https://wa.me/919414945457?text=${encodeURIComponent(
              "Hello Dholpurestones.com, I want to explore your 300+ Front Elevation sandstone designs and luxury Farm House / Garden landscaping solutions."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C29B38] hover:bg-[#dfb54b] text-[#0D1311] font-bold text-xs uppercase tracking-wider px-6 sm:px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl active:scale-95 border border-[#C29B38]"
          >
            <WhatsAppIcon className="w-4 h-4 fill-[#0D1311]" size={16} />
            <span>Explore 300+ Elevation Designs</span>
          </a>

          <Link
            href="/farmhouse-gardens"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 active:scale-95 shadow-md"
          >
            <TreePine className="w-4 h-4 text-white" />
            <span>Farm House &amp; Garden Solutions</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </Link>
        </div>

        {/* 4 Trust Points Row */}
        <div className="mt-8 pt-5 sm:pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5 text-xs tracking-wider uppercase text-white/95">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/15 p-2.5 sm:p-3 rounded-xl border border-white/15 hover:border-[#C29B38]/50 transition-colors backdrop-blur-xs">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C29B38] shrink-0" />
            <span className="font-semibold text-center sm:text-left text-[10.5px] sm:text-xs">
              300+ Elevation Designs
            </span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/15 p-2.5 sm:p-3 rounded-xl border border-white/15 hover:border-[#C29B38]/50 transition-colors backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C29B38] shrink-0" />
            <span className="font-semibold text-center sm:text-left text-[10.5px] sm:text-xs">
              Govt. of India Awarded
            </span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/15 p-2.5 sm:p-3 rounded-xl border border-white/15 hover:border-[#C29B38]/50 transition-colors backdrop-blur-xs">
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C29B38] shrink-0" />
            <span className="font-semibold text-center sm:text-left text-[10.5px] sm:text-xs">
              Intl. Award Nominee
            </span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/15 p-2.5 sm:p-3 rounded-xl border border-white/15 hover:border-[#C29B38]/50 transition-colors backdrop-blur-xs">
            <TreePine className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C29B38] shrink-0" />
            <span className="font-semibold text-center sm:text-left text-[10.5px] sm:text-xs">
              Farm House &amp; Gardens
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
