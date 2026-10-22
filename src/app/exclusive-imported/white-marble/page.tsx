"use client";

import React, { useState, useEffect, useRef } from "react";
import AnimDiv from "@/components/ui/AnimDiv";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, itemListLd } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuSparkles as Sparkles,
  LuEye as Eye,
  LuX as X,
} from "react-icons/lu";


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
      <PageHero
        eyebrow="Exclusive & Imported"
        title="Exclusive White"
        accent="Marble"
        description="37 luminous white marbles — Statuario, Carrara, Arabescato, Calacatta Viola and more — for palatial interiors and bookmatched feature walls."
        image="/assets/garg/luxurious_marble_lobby_vignettes.jpg"
        crumbs={[{ label: "Products", href: "/products" }, { label: "Exclusive & Imported", href: "/exclusive-imported" }, { label: "Exclusive White Marble" }]}
        stats={[{ value: "37", label: "Varieties" }, { value: "100%", label: "Natural" }]}
      />


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
                      className="inline-flex min-h-[44px] items-center gap-2 px-5 py-2 rounded-full bg-[#123D32]/95 hover:bg-[#123D32] text-[#C5A15B] hover:text-white border border-[#C5A15B]/60 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-md active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C5A15B]" />
                      <span>View Image</span>
                    </button>
                  </div>
                </div>
                <h3 className="px-4 py-3 font-heading text-[13px] font-bold uppercase tracking-wide text-ink">{img.name}</h3>
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
                <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1F2A24]">
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
                alt={`${selectedImage.name} white marble`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain sm:object-cover"
              />
            </div>

            {/* Footer Row */}
            <div className="px-5 py-3 bg-[#F7F4EB] flex items-center justify-between text-xs text-[#6B7C73]">
              <span className="font-semibold text-[11px] uppercase tracking-wider text-[#123D32]">
                Exclusive White Marble &bull; Dholpurstones
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

      <CtaBand title="Want Slab Photos Of Your Favourite?" text="Tell us the variety and quantity — we share slab photos and a quote." topic="white marble" cta="Exclusive white marble bottom band" />
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Products", path: "/products" }, { name: "Exclusive & Imported", path: "/exclusive-imported" }, { name: "Exclusive White Marble", path: "/exclusive-imported/white-marble" }]),
          itemListLd("Exclusive white marble varieties", whiteSeriesImages.map((w) => ({ name: `${w.name} white marble`, image: w.src }))),
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
