"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LuX as X, LuZoomIn as ZoomIn } from "react-icons/lu";
import type { PreciousGemProduct } from "@/data/preciousGemData";

interface PreciousGemModalProps {
  product: PreciousGemProduct | null;
  onClose: () => void;
}

export default function PreciousGemModal({ product, onClose }: PreciousGemModalProps) {
  const [activeZoomImage, setActiveZoomImage] = useState<string | null>(null);

  // Close on Escape key press and prevent background scroll
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeZoomImage) {
          setActiveZoomImage(null);
        } else {
          onClose();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, activeZoomImage, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[300] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-black/10 my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-black/8 flex items-center justify-between z-20">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A15B]" />
            <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-wider text-[#1F2A24]">
              {product.name}
            </h3>
            <span className="hidden sm:inline-block text-[11px] font-semibold text-[#6B7C73] bg-[#F7F4EB] px-2.5 py-0.5 rounded-full border border-black/6">
              {product.images.length} {product.images.length === 1 ? "Image" : "Images"}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F7F4EB] hover:bg-red-50 text-[#1F2A24] hover:text-red-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Gallery - Exactly 3 Images Per Row on Desktop */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {product.images.map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={() => setActiveZoomImage(imgSrc)}
                className="group relative bg-white rounded-2xl p-2.5 sm:p-3 border border-black/8 hover:border-[#C5A15B]/70 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#F7F4EB]">
                  <Image
                    src={imgSrc}
                    alt={`${product.name} View ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover scale-[1.01] group-hover:scale-106 transition-transform duration-500"
                    loading={idx < 6 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#123D32] text-[#C5A15B] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="pt-2.5 pb-0.5 px-1 flex items-center justify-between text-[11px] text-[#6B7C73]">
                  <span className="font-semibold text-[#1F2A24] truncate mr-2">{product.name}</span>
                  <span className="font-mono text-[11px] text-[#C5A15B] font-bold">#{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#F7F4EB] border-t border-black/8 flex items-center justify-between text-xs text-[#6B7C73]">
          <span className="font-medium text-[11px] uppercase tracking-wider text-[#123D32]">
            Precious Gem Surface Collection &bull; Dholpurestones
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-bold text-[#123D32] hover:text-[#C5A15B] transition-colors cursor-pointer"
          >
            Close &times;
          </button>
        </div>
      </div>

      {/* Full-screen Lightbox if single image clicked */}
      {activeZoomImage && (
        <div
          className="fixed inset-0 z-[350] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveZoomImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveZoomImage(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-colors z-10"
            aria-label="Close enlarged view"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeZoomImage}
              alt="Enlarged Gemstone View"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
