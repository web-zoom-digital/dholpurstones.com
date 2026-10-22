"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PreciousGemModal from "@/components/PreciousGemModal";
import {
  preciousGemProducts,
  type PreciousGemProduct,
} from "@/data/preciousGemData";
import {
  LuEye as Eye,
  LuHouse as HomeIcon,
  LuChevronRight as ChevronRight,
  LuGem as Gem,
} from "react-icons/lu";

export default function PreciousGemSurfacePage() {
  const [selectedProduct, setSelectedProduct] = useState<PreciousGemProduct | null>(null);

  return (
    <main className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION (Matching Semi-Precious Stone Style)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Hero background image from /precious-gem-surface */}
        <div className="absolute inset-0">
          <Image
            src="/precious-gem-surface/page_062_BLACK_OBSIDIAN_image_02.jpeg"
            alt="Precious Gem Surface Collection – Dholpurestones"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Multi-layer overlay for text legibility */}
        </div>

        {/* Floating ambient particles */}
        <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-[#C5A15B]/40 animate-pulse" />
        <div
          className="absolute top-40 right-32 w-2 h-2 rounded-full bg-[#C5A15B]/30 animate-pulse"
          style={{ animationDelay: "0.8s" }}
        />
        <div
          className="absolute bottom-48 right-16 w-4 h-4 rounded-full bg-[#C5A15B]/20 animate-pulse"
          style={{ animationDelay: "1.4s" }}
        />

        {/* Hero content - Centered */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">

          {/* Category pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A15B]/20 border border-[#C5A15B]/40 backdrop-blur-sm mb-5">
            <Gem className="w-3.5 h-3.5 text-[#C5A15B]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C5A15B] tracking-[0.22em] uppercase">
              EXCLUSIVE LAPIDARY GEMSTONE COLLECTION
            </span>
          </div>

          <h1 className="font-['Cinzel',serif] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white mb-5 leading-[1.1] text-center">
            Precious Gem<br />
            <span className="text-[#C5A15B]">Surface Gallery</span>
          </h1>

          <p className="font-['EB_Garamond',serif] text-lg sm:text-2xl text-white/85 max-w-2xl leading-relaxed mb-8 font-medium text-center mx-auto">
            Rare hand-assembled agate, lapis lazuli, obsidian, malachite and quartz gemstone slabs for extraordinary backlit feature walls, luxury counters, and bespoke architectural installations.
          </p>

          {/* Hero stat pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            {[
              { val: `${preciousGemProducts.length}`, label: "Gemstone Varieties" },
              { val: "400+", label: "Collection Photos" },
              { val: "100%", label: "Natural Origin" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2"
              >
                <span className="font-['Cinzel',serif] text-base font-bold text-[#C5A15B]">
                  {stat.val}
                </span>
                <span className="text-[11px] text-white/70 font-semibold uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom curve separator */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#F7F4EB]"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          GALLERY GRID: EXACTLY 3 PRODUCT CARDS PER ROW ON DESKTOP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-16 max-w-[1040px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {preciousGemProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-black/8 shadow-2xs hover:shadow-xl hover:border-[#C5A15B]/70 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* Product Cover Image Container with Inset Margin & Decreased Size */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl bg-[#F7F4EB]">
                <Image
                  src={product.coverImage}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover scale-[1.01] group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle Hover Darkening Overlay */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Centered "View" Button (Desktop Hover + Touch Accessible) */}
                <div className="absolute inset-0 flex items-center justify-center p-3 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform sm:scale-90 sm:group-hover:scale-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#123D32]/95 hover:bg-[#123D32] text-[#C5A15B] hover:text-white border border-[#C5A15B]/60 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-md active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C5A15B]" />
                    <span>View</span>
                  </button>
                </div>

                {/* Related Images Counter Badge */}
                <span className="absolute bottom-2 right-2 bg-[#123D32]/90 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md backdrop-blur-xs border border-white/10">
                  {product.images.length} Photos
                </span>
              </div>

              {/* Product Name as Heading */}
              <div className="pt-2.5 pb-0.5 px-1 text-center">
                <h3 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#1F2A24] uppercase tracking-wide group-hover:text-[#123D32] transition-colors line-clamp-1">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shared Popup Modal */}
      <PreciousGemModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
