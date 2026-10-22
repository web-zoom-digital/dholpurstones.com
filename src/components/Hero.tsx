"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuMapPin as MapPin,
  LuGlobe as Globe,
  LuTreePine as TreePine
} from "react-icons/lu";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex flex-col justify-between bg-[#123D32]">
      {/* Background Hero Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Mobile image — shown below sm */}
        <Image
          src="/assets/garg/dholpur-stones-mobile-hero.jpg"
          alt="Dholpurestones.com – Sandstone Front Elevation & Farm House Landscaping Since 1953"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center block sm:hidden"
        />
        {/* Desktop image — shown sm and above */}
        <Image
          src="/assets/garg/dholpur-stones-hero-preview.jpg"
          alt="Dholpurestones.com – Luxurious Architectural Marble, Sandstone Front Elevation & Farm House Landscaping Since 1953"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center hidden sm:block"
          style={{ objectPosition: "center center" }}
        />
      </div>

      {/* Overlay — top fade only, no bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent sm:from-[#123D32]/45 sm:via-black/30 sm:to-transparent pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col
        items-center justify-end pb-6 px-4
        sm:items-start sm:justify-start sm:px-6 sm:pt-18 sm:pb-10
        lg:px-10 lg:pt-20 lg:pb-14
        w-full">

        {/* Mobile layout — centered, bottom-anchored */}
        <div className="flex flex-col items-center text-center w-full max-w-[320px]
          sm:items-start sm:text-left sm:max-w-[520px] lg:max-w-[580px]">

          {/* Sub-Tagline */}
          <p
            className="text-[8.5px] sm:text-[10px] font-bold text-[#C5A15B] uppercase tracking-[0.13em] sm:tracking-[0.18em] mb-1 sm:mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            style={{ animation: "gcl-fadeup 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Luxury Farm Houses &bull; Garden Landscaping &bull; Heritage Facades
          </p>

          {/* Headline */}
          <h1
            className="font-['Cinzel',serif] font-bold text-white uppercase leading-[1.18] text-[15px] sm:text-2xl lg:text-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
            style={{ animation: "gcl-fadeup 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Dholpur Sandstone Quarry Manufacturer &amp; Front Elevation Specialist
          </h1>

          {/* Year Callout */}
          <div
            className="mt-0.5 sm:mt-2"
            style={{ animation: "gcl-fadeup 0.8s 0.2s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <span className="font-['Cinzel',serif] font-extrabold text-[#C5A15B] tracking-[0.12em] sm:tracking-[0.16em] uppercase text-sm sm:text-xl lg:text-2xl drop-shadow-[0_0_25px_rgba(194,155,56,0.7)]">
              SINCE 1953
            </span>
          </div>

          {/* Industry Capabilities — hidden on mobile to keep it tight */}
          <p
            className="hidden sm:block font-['Plus_Jakarta_Sans',sans-serif] text-white/90 font-medium text-xs lg:text-sm mt-2.5 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-relaxed"
            style={{ animation: "gcl-fadeup 0.8s 0.3s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Specialized in Sandstone Front Elevation, Luxury Farm House Estates &amp; Designer Garden Landscaping
          </p>

          {/* CTAs */}
          <div
            className="mt-2.5 sm:mt-5 flex flex-row sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-2.5 w-full"
            style={{ animation: "gcl-fadeup 0.8s 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <a
              href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20inquire%20about%20your%20300%2B%20Front%20Elevation%20sandstone%20designs%20and%20Farm%20House%20landscaping"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif] text-[9.5px] sm:text-xs font-bold uppercase tracking-wider px-3 py-2 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 active:scale-95 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-3 h-3 sm:w-4 sm:h-4 fill-white shrink-0" size={14} />
              <span>WhatsApp</span>
            </a>

            <a
              href="/farmhouse-gardens"
              className="flex items-center justify-center gap-1 font-['Plus_Jakarta_Sans',sans-serif] text-[9.5px] sm:text-xs font-bold uppercase tracking-wider px-3 py-2 sm:py-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/25 hover:border-[#C5A15B]/60 transition-all duration-300 active:scale-95 shadow-lg whitespace-nowrap"
            >
              <TreePine className="w-3 h-3 text-[#C5A15B] shrink-0" />
              <span>Farm &amp; Gardens</span>
            </a>

            <Link
              href="/#elevation"
              className="flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] text-[9.5px] sm:text-xs font-bold uppercase tracking-wider px-3 py-2 sm:py-3 rounded-full bg-black/30 hover:bg-black/50 text-white/95 backdrop-blur-md border border-white/15 hover:border-[#C5A15B]/60 transition-all duration-300 active:scale-95 shadow-lg whitespace-nowrap"
            >
              300+ Elevations
            </Link>
          </div>
        </div>
      </div>

      {/* Location Ticker */}
      <div className="relative z-10 bg-[#123D32]/95 backdrop-blur-md border-t border-white/10 py-2.5 sm:py-3 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 gap-y-1 text-[10px] sm:text-xs text-white/75 font-medium tracking-wider">
          <span className="flex items-center gap-1.5 text-[#C5A15B] font-semibold">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            Sarmathura (Mines)
          </span>
          <span className="text-white/25">&bull;</span>
          <span>Sikandra (Crafting)</span>
          <span className="text-white/25">&bull;</span>
          <span>Kishangarh (Trading)</span>
          <span className="text-white/25">&bull;</span>
          <span className="flex items-center gap-1.5 text-[#C5A15B] font-semibold">
            <Globe className="w-3.5 h-3.5 shrink-0" />
            Canada (Overseas)
          </span>
        </div>
      </div>
    </section>
  );
}
