"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Award, ShieldCheck, TreePine, ArrowRight, Trophy } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function BurgundyBand() {
  return (
    <section
      id="elevation"
      className="relative w-full scroll-mt-20 sm:scroll-mt-24 bg-gradient-to-r from-[#0A110E] via-[#13352A] to-[#0A110E] py-14 sm:py-18 text-white overflow-hidden border-y border-[#C29B38]/40 shadow-[inset_0_0_90px_rgba(0,0,0,0.7)]"
    >
      {/* Decorative Gold Filigree & Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-3/4 h-full bg-[radial-gradient(ellipse_at_center,rgba(194,155,56,0.14)_0%,transparent_70%)] pointer-events-none" />

      {/* Ambient Forest & Gold Glows */}
      <div className="absolute -top-10 left-10 w-48 h-48 bg-[#C29B38]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-64 h-64 bg-[#134e3f]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* National & International Accolades Ribbon Badge */}
        <div className="inline-flex items-center gap-2 bg-[#C29B38]/15 border border-[#C29B38]/45 px-4 py-1.5 rounded-full text-[#E0BA55] text-[10px] sm:text-xs font-bold tracking-[0.14em] uppercase mb-4 shadow-md backdrop-blur-xs flex-wrap justify-center">
          <Award className="w-4 h-4 text-[#C29B38] shrink-0" />
          <span>AWARDED BY GOVT. OF INDIA &bull; NOMINATED FOR INTERNATIONAL AWARD FOR BUSINESS EXCELLENCE</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
        </div>

        {/* Primary Statement — Exact User Requirement */}
        <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.03em] uppercase text-white leading-tight max-w-5xl mx-auto drop-shadow-md">
          We Have Made More Than{" "}
          <span className="text-[#E0BA55] underline decoration-[#C29B38]/60 decoration-2 underline-offset-8">
            300+ Designs
          </span>{" "}
          for Front Elevation in Sandstone — Awarded by Govt. of India
        </h2>

        {/* International Nomination & Strong Focus on Farm Houses & Gardens */}
        <div className="mt-4 sm:mt-5 max-w-3xl mx-auto">
          <p className="font-['Cinzel',serif] text-sm sm:text-base md:text-lg font-semibold text-[#F5E6BE] tracking-wide uppercase">
            Nominated for International Award for Business Excellence &bull; Specialized in Luxury Farm Houses &amp; Garden Landscapes
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/80 mt-2.5 leading-relaxed">
            From regal farm house entrance gates, poolside bullnose coping, and cobblestone driveways to 
            hand-carved garden water fountains and multi-tiered stone landscaping — we transform vast outdoor 
            properties into timeless heritage retreats using authentic Sarmathura sandstone.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
          <a
            href={`https://wa.me/919414945457?text=${encodeURIComponent(
              "Hello Dholpurestones.com, I want to explore your 300+ Front Elevation sandstone designs and luxury Farm House / Garden landscaping solutions."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-[#0D1311] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-[#0D1311]" size={16} />
            <span>Explore 300+ Elevation Designs</span>
          </a>

          <Link
            href="/#farmhouse-gardens"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C29B38] hover:bg-[#d4aa3d] text-[#0D1311] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all active:scale-95 shadow-md"
          >
            <TreePine className="w-4 h-4 text-[#0D1311]" />
            <span>Farm House &amp; Garden Solutions</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0D1311]" />
          </Link>
        </div>

        {/* 4 Trust Points Row */}
        <div className="mt-10 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 text-xs tracking-wider uppercase text-white/90">
          <div className="flex items-center justify-center gap-2 bg-[#0D1311]/50 hover:bg-[#0D1311]/80 p-3 rounded-xl border border-white/8 hover:border-[#C29B38]/40 transition-colors">
            <Award className="w-4 h-4 text-[#C29B38] shrink-0" />
            <span className="font-semibold text-center sm:text-left text-[11px] sm:text-xs">
              300+ Elevation Designs
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#0D1311]/50 hover:bg-[#0D1311]/80 p-3 rounded-xl border border-white/8 hover:border-[#C29B38]/40 transition-colors">
            <ShieldCheck className="w-4 h-4 text-[#C29B38] shrink-0" />
            <span className="font-semibold text-center sm:text-left text-[11px] sm:text-xs">
              Govt. of India Awarded
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#0D1311]/50 hover:bg-[#0D1311]/80 p-3 rounded-xl border border-white/8 hover:border-[#C29B38]/40 transition-colors">
            <Trophy className="w-4 h-4 text-[#C29B38] shrink-0" />
            <span className="font-semibold text-center sm:text-left text-[11px] sm:text-xs">
              Intl. Award Nominee
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#0D1311]/50 hover:bg-[#0D1311]/80 p-3 rounded-xl border border-white/8 hover:border-[#C29B38]/40 transition-colors">
            <TreePine className="w-4 h-4 text-[#C29B38] shrink-0" />
            <span className="font-semibold text-center sm:text-left text-[11px] sm:text-xs">
              Farm House &amp; Gardens
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
