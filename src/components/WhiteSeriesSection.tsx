"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuArrowRight as ArrowRight,
  LuEye as Eye,
  LuX as X,
  LuZoomIn as ZoomIn,
} from "react-icons/lu";

function AnimDiv({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("gcl-visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`gcl-animate ${className}`}>
      {children}
    </div>
  );
}

const homeImages = [
  {
    id: "royal-white",
    name: "Royal White",
    alt: "White Series – Royal White",
    src: "/white-series-dolphur-color/royal-white.png",
  },
  {
    id: "statuario",
    name: "Statuario",
    alt: "White Series – Statuario",
    src: "/white-series-dolphur-color/statuario.png",
  },
  {
    id: "carrara-white",
    name: "Carrara White",
    alt: "White Series – Carrara White",
    src: "/white-series-dolphur-color/carrara-white.png",
  },
  {
    id: "calacatta-viola",
    name: "Calacatta Viola",
    alt: "White Series – Calacatta Viola",
    src: "/white-series-dolphur-color/calacatta-viola.png",
  },
  {
    id: "golden-spider",
    name: "Golden Spider",
    alt: "White Series – Golden Spider",
    src: "/white-series-dolphur-color/golden-spider.png",
  },
  {
    id: "blue-wave",
    name: "Blue Wave",
    alt: "White Series – Blue Wave",
    src: "/white-series-dolphur-color/blue-wave.png",
  },
];

export default function WhiteSeriesSection() {
  const [selectedImage, setSelectedImage] = useState<(typeof homeImages)[0] | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section
      id="white-series"
      className="py-12 sm:py-20 bg-[#F7F4EB] border-b border-black/6 relative overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading with No Descriptive Paragraph */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <AnimDiv delay={0}>
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-[#1F2A24] leading-tight mb-3">
              White Series – Dholpur Color
            </h2>
            <div className="w-12 h-1 bg-[#C5A15B] rounded-full mx-auto" />
          </AnimDiv>
        </div>

        {/* Images Grid with Centered View Image Button */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-12">
          {homeImages.map((img, i) => (
            <AnimDiv key={img.id} delay={i * 90}>
              <div
                onClick={() => setSelectedImage(img)}
                className="bg-white rounded-2xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl hover:border-[#C5A15B]/70 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F4EB]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover scale-[1.02] group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Centered "View Image" Button */}
                  <div className="absolute inset-0 flex items-center justify-center p-2 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform sm:scale-90 sm:group-hover:scale-100">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(img);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#123D32]/95 hover:bg-[#123D32] text-[#C5A15B] hover:text-white border border-[#C5A15B]/60 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-md active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A15B]" />
                      <span>View Image</span>
                    </button>
                  </div>
                </div>
              </div>
            </AnimDiv>
          ))}
        </div>

        {/* Centered "Read More" Button */}
        <AnimDiv delay={200} className="text-center">
          <Link
            href="/products/white-series-dolphur-color"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#123D32] hover:bg-[#1E5A46] text-[#C5A15B] hover:text-white font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimDiv>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          POPUP MODAL (Full size image in half-screen view)
      ═══════════════════════════════════════════════════════════════ */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[250] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-2xl md:w-[50vw] bg-white rounded-3xl overflow-hidden shadow-2xl border border-black/10 my-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title and Close Button */}
            <div className="bg-white/95 px-5 py-3.5 border-b border-black/8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C5A15B]" />
                <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1F2A24]">
                  {selectedImage.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 rounded-full bg-[#F7F4EB] hover:bg-red-50 text-[#1F2A24] hover:text-red-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close image popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* High Resolution Image Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#F7F4EB]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain sm:object-cover"
              />
            </div>

            {/* Footer Row */}
            <div className="px-5 py-3 bg-[#F7F4EB] flex items-center justify-between text-xs text-[#6B7C73]">
              <span className="font-semibold text-[11px] uppercase tracking-wider text-[#123D32]">
                White Series &bull; Dholpurestones
              </span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="text-xs font-bold text-[#123D32] hover:text-[#C5A15B] transition-colors cursor-pointer"
              >
                Close View &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
