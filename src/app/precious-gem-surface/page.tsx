"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, itemListLd, faqLd } from "@/lib/schema";

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
      <PageHero
        eyebrow="Exclusive Collection"
        title="Precious Gem"
        accent="Surfaces"
        description="Backlit gemstone slabs, tabletops, basins and décor — each piece crafted to order."
        image="/precious-gem-surface/page_062_BLACK_OBSIDIAN_image_02.jpeg"
        crumbs={[{ label: "Products", href: "/products" }, { label: "Exclusive & Imported", href: "/exclusive-imported" }, { label: "Precious Gem Surfaces" }]}
      >
        <Button href="https://wa.me/919414945457?text=Hello%20Dholpurstones.com,%20I%20would%20like%20a%20quote%20for%20precious%20gem%20surfaces." variant="gold" size="lg">Get a Quote</Button>
      </PageHero>

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
                    className="inline-flex min-h-[44px] items-center gap-2 px-5 py-2 rounded-full bg-[#123D32]/95 hover:bg-[#123D32] text-[#C5A15B] hover:text-white border border-[#C5A15B]/60 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-md active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C5A15B]" />
                    <span>View</span>
                  </button>
                </div>

                {/* Related Images Counter Badge */}
                <span className="absolute bottom-2 right-2 bg-[#123D32]/90 text-white text-[11px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md shadow-md backdrop-blur-xs border border-white/10">
                  {product.images.length} Photos
                </span>
              </div>

              {/* Product Name as Heading */}
              <div className="pt-2.5 pb-0.5 px-1 text-center">
                <h3 className="font-heading text-xs sm:text-sm font-bold text-[#1F2A24] uppercase tracking-wide group-hover:text-[#123D32] transition-colors line-clamp-1">
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

      <CtaBand title="Create A One-Of-A-Kind Surface" text="Tell us the piece and stone — we will share photos and a quote." topic="precious gem surfaces" cta="Gem surface bottom band" />
      <JsonLd data={breadcrumbLd([{ name: "Exclusive & Imported", path: "/exclusive-imported" }, { name: "Precious Gem Surfaces", path: "/precious-gem-surface" }])} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
