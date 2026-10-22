"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuSparkles as Sparkles,
  LuEye as Eye,
  LuX as X,
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
      { threshold: 0.06 }
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

const whiteSeriesImages = [
  { id: "affilento-white", name: "Affilento White", src: "/white-series-dolphur-color/affilento-white.png" },
  { id: "angelo-white", name: "Angelo White", src: "/white-series-dolphur-color/angelo-white.png" },
  { id: "arabescato", name: "Arabescato", src: "/white-series-dolphur-color/arabescato.png" },
  { id: "ariston-white", name: "Ariston White", src: "/white-series-dolphur-color/ariston-white.png" },
  { id: "bianco-acropolis", name: "Bianco Acropolis", src: "/white-series-dolphur-color/bianco-acropolis.png" },
  { id: "bianco-fire", name: "Bianco Fire", src: "/white-series-dolphur-color/bianco-fire.png" },
  { id: "bianco-lucca", name: "Bianco Lucca", src: "/white-series-dolphur-color/bianco-lucca.png" },
  { id: "bianco-omni", name: "Bianco Omni", src: "/white-series-dolphur-color/bianco-omni.png" },
  { id: "bianco-vock", name: "Bianco Vock", src: "/white-series-dolphur-color/bianco-vock.png" },
  { id: "blue-wave", name: "Blue Wave", src: "/white-series-dolphur-color/blue-wave.png" },
  { id: "brown-statuario", name: "Brown Statuario", src: "/white-series-dolphur-color/brown-statuario.png" },
  { id: "calacatta-viola", name: "Calacatta Viola", src: "/white-series-dolphur-color/calacatta-viola.png" },
  { id: "carrara-white", name: "Carrara White", src: "/white-series-dolphur-color/carrara-white.png" },
  { id: "casablanca", name: "Casablanca", src: "/white-series-dolphur-color/casablanca.png" },
  { id: "coastal-white", name: "Coastal White", src: "/white-series-dolphur-color/coastal-white.png" },
  { id: "dover-white", name: "Dover White", src: "/white-series-dolphur-color/dover-white.png" },
  { id: "golden-macaubus", name: "Golden Macaubus", src: "/white-series-dolphur-color/golden-macaubus.png" },
  { id: "golden-michael", name: "Golden Michael", src: "/white-series-dolphur-color/golden-michael.png" },
  { id: "golden-spider", name: "Golden Spider", src: "/white-series-dolphur-color/golden-spider.png" },
  { id: "guangxi-white", name: "Guangxi White", src: "/white-series-dolphur-color/guangxi-white.png" },
  { id: "ice-white", name: "Ice White", src: "/white-series-dolphur-color/ice-white.png" },
  { id: "jasmine-white", name: "Jasmine White", src: "/white-series-dolphur-color/jasmine-white.png" },
  { id: "lasa-white", name: "Lasa White", src: "/white-series-dolphur-color/lasa-white.png" },
  { id: "lilac-white", name: "Lilac White", src: "/white-series-dolphur-color/lilac-white.png" },
  { id: "michael-angelo", name: "Michael Angelo", src: "/white-series-dolphur-color/michael-angelo.png" },
  { id: "monte-picasso", name: "Monte Picasso", src: "/white-series-dolphur-color/monte-picasso.png" },
  { id: "new-york-white", name: "New York White", src: "/white-series-dolphur-color/new-york-white.png" },
  { id: "oriental-white", name: "Oriental White", src: "/white-series-dolphur-color/oriental-white.png" },
  { id: "oyster-white", name: "Oyster White", src: "/white-series-dolphur-color/oyster-white.png" },
  { id: "pearl-white", name: "Pearl White", src: "/white-series-dolphur-color/pearl-white.png" },
  { id: "portugal-white", name: "Portugal White", src: "/white-series-dolphur-color/portugal-white.png" },
  { id: "royal-white", name: "Royal White", src: "/white-series-dolphur-color/royal-white.png" },
  { id: "sapphire-white", name: "Sapphire White", src: "/white-series-dolphur-color/sapphire-white.png" },
  { id: "statuario", name: "Statuario", src: "/white-series-dolphur-color/statuario.png" },
  { id: "venatino-white", name: "Venatino White", src: "/white-series-dolphur-color/venatino-white.png" },
  { id: "volakas-haemus", name: "Volakas Haemus", src: "/white-series-dolphur-color/volakas-haemus.png" },
  { id: "white-zade", name: "White Zade", src: "/white-series-dolphur-color/white-zade.png" },
];

export default function WhiteSeriesProductPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof whiteSeriesImages)[0] | null>(null);

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
    <main className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION (Matching Semi-Precious Stone Style)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image from /white-series-dolphur-color */}
        <div className="absolute inset-0">
          <Image
            src="/white-series-dolphur-color/royal-white.png"
            alt="White Series – Dholpur Color"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Multi-layer overlay for text legibility */}
          <div className="absolute inset-0 bg-black/45 bg-gradient-to-t from-[#0D1A14]/90 via-[#0D1A14]/40 to-[#0D1A14]/30" />
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
            <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C5A15B] tracking-[0.22em] uppercase">
              EXCLUSIVE WHITE SERIES COLLECTION
            </span>
          </div>

          <h1 className="font-['Cinzel',serif] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white mb-5 leading-[1.1] text-center">
            White Series<br />
            <span className="text-[#C5A15B]">Dholpur Color</span>
          </h1>

          <p className="font-['EB_Garamond',serif] text-lg sm:text-2xl text-white/85 max-w-2xl leading-relaxed mb-8 font-medium text-center mx-auto">
            Luminous natural white marble, statuario, and crystalline quartz slabs for palatial interiors, bookmatched feature walls, and luxury architectural statements.
          </p>

          {/* Hero stat pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            {[
              { val: "37", label: "White Varieties" },
              { val: "Bookmatch", label: "Vein Symmetry" },
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
          PRODUCT PAGE IMAGE GALLERY
          - All available images from /white-series-dolphur-color
          - Responsive clean grid
          - No descriptions, specifications, pricing, or extra written content
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {whiteSeriesImages.map((img, i) => (
            <AnimDiv key={img.id} delay={(i % 8) * 50}>
              <div
                onClick={() => setSelectedImage(img)}
                className="bg-white rounded-2xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl hover:border-[#C5A15B]/70 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F4EB]">
                  <Image
                    src={img.src}
                    alt={img.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-500"
                    loading={i < 8 ? "eager" : "lazy"}
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
                      className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 rounded-full bg-[#123D32]/95 hover:bg-[#123D32] text-[#C5A15B] hover:text-white border border-[#C5A15B]/60 text-[10.5px] sm:text-xs font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-md active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C5A15B]" />
                      <span>View Image</span>
                    </button>
                  </div>
                </div>
              </div>
            </AnimDiv>
          ))}
        </div>
      </section>

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
                alt={selectedImage.name}
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

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
