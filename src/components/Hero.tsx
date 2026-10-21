"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Globe, Award, TreePine } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex flex-col justify-between bg-[#0D1311]">
      {/* Background Hero Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/assets/garg/hero_peacock_widescreen_2k.jpg"
          alt="Dholpurestones.com – Authentic Dholpur Sandstone Quarry Manufacturer and Front Elevation Specialist Since 1953"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
          style={{ objectPosition: "center top" }}
        />
      </div>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1311]/15 via-transparent to-[#0D1311]/70 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end text-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-6 sm:pb-10 lg:pb-14 w-full">
        <div className="w-full flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* National & International Accolades Ribbon Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/60 border border-[#C29B38]/70 text-[#E0BA55] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 backdrop-blur-md shadow-xl flex-wrap justify-center text-center max-w-full"
            style={{ animation: "gcl-fadeup 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <Award className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
            <span>Awarded by Govt. of India &bull; Nominated for International Award for Business Excellence</span>
          </div>

          {/* Sub-Tagline */}
          <p
            className="text-[10px] sm:text-xs font-bold text-[#C29B38] uppercase tracking-[0.14em] sm:tracking-[0.22em] mb-2 sm:mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            style={{ animation: "gcl-fadeup 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Luxury Farm Houses &bull; Garden Landscaping &bull; Heritage Facades
          </p>

          {/* Headline */}
          <h1
            className="font-['Cinzel',serif] font-bold text-white uppercase leading-[1.1] text-2xl sm:text-4xl lg:text-5xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
            style={{ animation: "gcl-fadeup 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Dholpur Sandstone Quarry Manufacturer &amp; Front Elevation Specialist
          </h1>

          {/* Year Callout */}
          <div
            className="mt-2 sm:mt-3"
            style={{ animation: "gcl-fadeup 0.8s 0.2s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <span className="font-['Cinzel',serif] font-extrabold text-[#C29B38] tracking-[0.12em] sm:tracking-[0.16em] uppercase text-2xl sm:text-4xl lg:text-5xl drop-shadow-[0_0_25px_rgba(194,155,56,0.7)]">
              SINCE 1953
            </span>
          </div>

          {/* Industry Capabilities with Farmhouse & Garden Focus */}
          <p
            className="font-['Plus_Jakarta_Sans',sans-serif] text-white/95 font-medium text-xs sm:text-sm lg:text-base mt-3 sm:mt-4 tracking-wide max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            style={{ animation: "gcl-fadeup 0.8s 0.3s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Specialized in Sandstone Front Elevation, Luxury Farm House Estates &amp; Designer Garden Landscaping
          </p>

          {/* CTAs — stacked on mobile, row on sm+ */}
          <div
            className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-[320px] sm:max-w-none mx-auto"
            style={{ animation: "gcl-fadeup 0.8s 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <a
              href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20inquire%20about%20your%20300%2B%20Front%20Elevation%20sandstone%20designs%20and%20Farm%20House%20landscaping"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" size={20} />
              <span>Connect on WhatsApp</span>
            </a>

            <a
              href="/farmhouse-gardens"
              className="flex items-center justify-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/25 hover:border-[#C29B38]/60 transition-all duration-300 active:scale-95 shadow-lg"
            >
              <TreePine className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
              <span>Farm House &amp; Gardens</span>
            </a>

            <a
              href="/#elevation"
              className="flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3.5 rounded-full bg-black/30 hover:bg-black/50 text-white/95 backdrop-blur-md border border-white/15 transition-all duration-300 active:scale-95 shadow-lg"
            >
              300+ Elevations
            </a>
          </div>
        </div>
      </div>

      {/* Location Ticker */}
      <div className="relative z-10 bg-[#0D1311]/95 backdrop-blur-md border-t border-white/10 py-2.5 sm:py-3 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 gap-y-1 text-[10px] sm:text-xs text-white/75 font-medium tracking-wider">
          <span className="flex items-center gap-1.5 text-[#C29B38] font-semibold">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            Sarmathura (Mines)
          </span>
          <span className="text-white/25">&bull;</span>
          <span>Sikandra (Crafting)</span>
          <span className="text-white/25">&bull;</span>
          <span>Kishangarh (Trading)</span>
          <span className="text-white/25">&bull;</span>
          <span className="flex items-center gap-1.5 text-[#C29B38] font-semibold">
            <Globe className="w-3.5 h-3.5 shrink-0" />
            Canada (Overseas)
          </span>
        </div>
      </div>
    </section>
  );
}
