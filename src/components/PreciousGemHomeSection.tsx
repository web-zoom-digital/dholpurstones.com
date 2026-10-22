"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight as ArrowRight, LuEye as Eye } from "react-icons/lu";
import PreciousGemModal from "./PreciousGemModal";
import {
  preciousGemProducts,
  type PreciousGemProduct,
} from "@/data/preciousGemData";

// Exactly 6 distinct featured products for the Home Page
const homeFeaturedIds = [
  "malachite",
  "lapiz-lazuli",
  "black-obsidian",
  "labradorite",
  "tiger-eye-blue",
  "amehtyst",
];

export default function PreciousGemHomeSection() {
  const [selectedProduct, setSelectedProduct] = useState<PreciousGemProduct | null>(null);

  // Pick the 6 products from the data or fallback to first 6
  const featuredProducts = homeFeaturedIds
    .map((id) => preciousGemProducts.find((p) => p.id === id))
    .filter(Boolean) as PreciousGemProduct[];

  const displayList = featuredProducts.length === 6 ? featuredProducts : preciousGemProducts.slice(0, 6);

  return (
    <section
      id="precious-gem-surface"
      className="py-12 sm:py-20 bg-[#F7F4EB] border-b border-black/6 relative overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading with No Marketing Paragraph */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-[#1F2A24] leading-tight mb-3">
            Precious Gem Surface
          </h2>
          <div className="w-12 h-1 bg-[#C5A15B] rounded-full mx-auto" />
        </div>

        {/* Exactly 6 Product Cards in a Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 mb-10 sm:mb-14">
          {displayList.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-2xl p-3 sm:p-3.5 border border-black/8 shadow-sm hover:shadow-xl hover:border-[#C5A15B]/70 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* Product Cover Image Container with Inset Margin & Decreased Size */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#F7F4EB]">
                <Image
                  src={product.coverImage}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover scale-[1.01] group-hover:scale-106 transition-transform duration-500"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Centered "View" Button (Desktop Hover + Mobile Touch Accessible) */}
                <div className="absolute inset-0 flex items-center justify-center p-3 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform sm:scale-90 sm:group-hover:scale-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#123D32]/95 hover:bg-[#123D32] text-[#C5A15B] hover:text-white border border-[#C5A15B]/60 text-xs font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-md active:scale-95"
                  >
                    <Eye className="w-4 h-4 text-[#C5A15B]" />
                    <span>View</span>
                  </button>
                </div>

                {/* Related Images Counter Badge */}
                <span className="absolute bottom-2.5 right-2.5 bg-[#123D32]/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-md backdrop-blur-xs border border-white/10">
                  {product.images.length} Photos
                </span>
              </div>

              {/* Product Name as Heading */}
              <div className="pt-3.5 pb-1 px-2 text-center">
                <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#1F2A24] uppercase tracking-wide group-hover:text-[#123D32] transition-colors line-clamp-1">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Centered "View All" Button Navigating to /precious-gem-surface */}
        <div className="text-center">
          <Link
            href="/precious-gem-surface"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#123D32] hover:bg-[#1E5A46] text-[#C5A15B] hover:text-white font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Shared Popup Modal */}
      <PreciousGemModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
