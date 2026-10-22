"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/ui/CtaBand";

import ContactActions from "@/components/ui/ContactActions";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import PhotoGallery from "@/components/ui/PhotoGallery";
import { semiPreciousSlabPhotos, gemstoneInteriorPhotos } from "@/data/gemGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuChevronRight as ChevronRight,
  LuHouse as HomeIcon,
  LuCamera as Camera,
  LuExternalLink as ExternalLink,
  LuX as X,
  LuPlay as Play
} from "react-icons/lu";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface GalleryItem {
  id: string;
  category: "photo" | "media" | "video";
  title: string;
  tag: string;
  image: string;
  desc: string;
}

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState<"all" | "photo" | "media" | "video">("photo");
  const [activePreview, setActivePreview] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleHash = () => {
      let hash = window.location.hash.replace("#", "").toLowerCase();
      if (hash === "photos") hash = "photo";
      if (hash === "videos") hash = "video";
      if (["all", "photo", "media", "video"].includes(hash)) {
        setActiveTab(hash as "all" | "photo" | "media" | "video");
        setTimeout(() => {
          const el = document.getElementById("gallery-grid");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const galleryItems: GalleryItem[] = [
    // --- Sandstone Collection (/sandstone) ---
    {
      id: "sandstone-pink",
      category: "photo",
      title: "Dholpur Pink Sandstone",
      tag: "Sandstone Collection",
      image: "/sandstone/dholpur-pink-sandstone.jpeg",
      desc: "Authentic quarry-extracted Dholpur Pink Sandstone with fine-grained texture, high load-bearing capacity, and timeless natural aesthetics for grand facades and paving.",
    },
    {
      id: "sandstone-beige",
      category: "photo",
      title: "Dholpur Beige Sandstone",
      tag: "Sandstone Collection",
      image: "/sandstone/dolpur-beige-sandstone.jpeg",
      desc: "Even-toned Dholpur Beige Sandstone, celebrated for uniform coloration and exceptional thermal insulation, ideal for palatial flooring, courtyards, and wall cladding.",
    },
    {
      id: "sandstone-agra-red",
      category: "photo",
      title: "Agra Red Sandstone",
      tag: "Sandstone Collection",
      image: "/sandstone/agra-red-sandstone.jpeg",
      desc: "Historic royal crimson-red natural sandstone mined from Rajasthan strata, renowned for monumental strength, zero weathering, and landmark architectural applications.",
    },
    {
      id: "sandstone-chocolate",
      category: "photo",
      title: "Dholpur Chocolate Sandstone",
      tag: "Sandstone Collection",
      image: "/assets/products/dholpur_chocolate_teakwood.jpg",
      desc: "Rich chocolate-brown Dholpur sandstone with natural teak-wood graining, ideal for feature walls, cladding, pool surrounds and garden accents.",
    },

    // --- Semi-Precious Gemstones (/semi-precious) ---
    {
      id: "semi-blue-agate",
      category: "photo",
      title: "Blue Agate Translucent Slab",
      tag: "Semi-Precious Collection",
      image: "/semi-precious/blue-agate.jpeg",
      desc: "Rare hand-assembled royal blue agate gemstone matrix with natural concentric banding, ideal for breathtaking backlit luxury feature walls and bar counters.",
    },
    {
      id: "semi-black-agate",
      category: "photo",
      title: "Black Agate Translucent Slab",
      tag: "Semi-Precious Collection",
      image: "/semi-precious/black-agate.jpeg",
      desc: "Deep crystalline black agate gemstone slab exhibiting striking mineral contrast and mirror-polished finish for dramatic architectural focal points.",
    },
    {
      id: "semi-green-agate",
      category: "photo",
      title: "Green Agate Translucent Slab",
      tag: "Semi-Precious Collection",
      image: "/semi-precious/green-agate.jpeg",
      desc: "Lush emerald green agate gemstone composition with translucent crystalline depth, engineered for ambient backlighting and exclusive vanity surfaces.",
    },
    {
      id: "semi-fire-agate",
      category: "photo",
      title: "Fire Agate Translucent Slab",
      tag: "Semi-Precious Collection",
      image: "/semi-precious/fire-agate.jpeg",
      desc: "Fiery amber and warm ochre tones in hand-assembled natural fire agate crystals, radiating a rich golden glow when illuminated from behind.",
    },
    {
      id: "semi-lapis-lazuli",
      category: "photo",
      title: "Lapis Lazuli Gemstone Slab",
      tag: "Semi-Precious Collection",
      image: "/semi-precious/lapis-lazuli.jpeg",
      desc: "Authentic deep ultramarine lapis lazuli flecked with golden pyrite minerals, celebrated since antiquity for royal palace inlays and luxury statement panels.",
    },
    {
      id: "semi-tiger-eyes",
      category: "photo",
      title: "Tiger Eye Gemstone Slab",
      tag: "Semi-Precious Collection",
      image: "/semi-precious/tiger-eyes.jpeg",
      desc: "Chatoyant golden-brown and bronze tiger eye mineral matrix displaying silky optical luster and exceptional surface hardness.",
    },
    {
      id: "semi-red-jasper",
      category: "photo",
      title: "Red Jasper Gemstone Slab",
      tag: "Semi-Precious Collection",
      image: "/semi-precious/red-jasper.jpeg",
      desc: "Opaque crimson and terracotta red jasper gemstone slab with rich microcrystalline quartz formation, engineered for bespoke lapidary surfaces.",
    },
    {
      id: "semi-natural-agate",
      category: "photo",
      title: "Natural Agate Gemstone Slab",
      tag: "Semi-Precious Collection",
      image: "/semi-precious/natural-agate.jpeg",
      desc: "Organic multi-tonal neutral agate geode slices fused in clear resin matrix for natural earthy luxury and sophisticated backlighting.",
    },
    {
      id: "semi-line-agate",
      category: "photo",
      title: "Line Agate Gemstone Slab",
      tag: "Semi-Precious Collection",
      image: "/semi-precious/line-agate.jpeg",
      desc: "Parallel linear banded agate gemstone slab with exquisite geological strata lines, perfect for contemporary luxury backdrops.",
    },

    // --- White Series / Dolpur Color (/white-series-dolphur-color) ---
    {
      id: "white-statuario",
      category: "photo",
      title: "Statuario White Stone Slab",
      tag: "White Series Collection",
      image: "/white-series-dolphur-color/statuario.png",
      desc: "Iconic Statuario white stone surface featuring bold, dramatic grey veins against a luminous pure white background, ideal for luxury bookmatched walls.",
    },
    {
      id: "white-royal",
      category: "photo",
      title: "Royal White Marble Slab",
      tag: "White Series Collection",
      image: "/white-series-dolphur-color/royal-white.png",
      desc: "Pristine royal white surface with subtle natural crystallization and high gloss mirror polish, engineered for palatial interior flooring.",
    },
    {
      id: "white-carrara",
      category: "photo",
      title: "Carrara White Stone Slab",
      tag: "White Series Collection",
      image: "/white-series-dolphur-color/carrara-white.png",
      desc: "Classic Carrara white stone surface with soft feathery grey veining, delivering timeless elegance for luxury bathroom cladding and vanity tops.",
    },
    {
      id: "white-arabescato",
      category: "photo",
      title: "Arabescato White Stone Slab",
      tag: "White Series Collection",
      image: "/white-series-dolphur-color/arabescato.png",
      desc: "Dynamic brecciated dark grey veining flowing across an ivory-white field, creating striking visual movement for statement architectural elevations.",
    },
    {
      id: "white-calacatta-viola",
      category: "photo",
      title: "Calacatta Viola Stone Slab",
      tag: "White Series Collection",
      image: "/white-series-dolphur-color/calacatta-viola.png",
      desc: "Distinctive rich burgundy and violet veining over a pure white stone matrix, widely specified by top interior designers for luxury accent counters.",
    },
    {
      id: "white-pearl",
      category: "photo",
      title: "Pearl White Stone Slab",
      tag: "White Series Collection",
      image: "/white-series-dolphur-color/pearl-white.png",
      desc: "Lustrous pearl white tone with uniform grain and high thermal resistance, perfect for extensive commercial lobby and residential flooring.",
    },
    {
      id: "white-ice",
      category: "photo",
      title: "Ice White Stone Slab",
      tag: "White Series Collection",
      image: "/white-series-dolphur-color/ice-white.png",
      desc: "Ultra-clean crystalline ice white stone with uniform density, staying permanently white without staining or discoloration across decades.",
    },
    {
      id: "white-blue-wave",
      category: "photo",
      title: "Blue Wave Exotic White Slab",
      tag: "White Series Collection",
      image: "/white-series-dolphur-color/blue-wave.png",
      desc: "Spectacular flowing ocean-blue and grey wave patterns across a white quartz foundation, tailored for dramatic backlit feature walls.",
    },
    {
      id: "white-golden-spider",
      category: "photo",
      title: "Golden Spider White Slab",
      tag: "White Series Collection",
      image: "/white-series-dolphur-color/golden-spider.png",
      desc: "Fine golden-amber spiderweb veins traversing a creamy white field, delivering warmth and royal sophistication to private estate interiors.",
    },
    {
      id: "white-zade",
      category: "photo",
      title: "White Zade Stone Slab",
      tag: "White Series Collection",
      image: "/white-series-dolphur-color/white-zade.png",
      desc: "Soft jade-tinted white crystalline matrix with high translucency, providing an ethereal ambient presence in luxury spaces.",
    },
    {
      id: "m1",
      category: "media",
      title: "Government of India National Award Recognition",
      tag: "Presidential Honors",
      image: "/assets/garg/card_gcl.jpg",
      desc: "Official statutory recognition honoring Mr. Arvind Garg for distinguished contributions and excellence in the Indian Natural Stone Industry.",
    },
    {
      id: "m2",
      category: "media",
      title: "Saroj Stone Industries — Estd. 1953 Heritage Deed",
      tag: "Statutory Registry",
      image: "/assets/garg/card_saroj.jpg",
      desc: "Pioneer founding entity credential establishing over 70+ years of continuous natural stone quarry concessions in Dholpur.",
    },
    {
      id: "v1",
      category: "video",
      title: "Dholpur Quarry Mining & Block Extraction Tour",
      tag: "Video Showcase",
      image: "/sandstone/agra-red-sandstone.jpeg",
      desc: "High-definition video overview of wire-saw extraction, diamond cutting, and block transport from our active mine lease.",
    },
    {
      id: "v2",
      category: "video",
      title: "8-Axis CNC Profiling & Fluted Pillar Fabrication",
      tag: "Video Showcase",
      image: "/assets/products/cnc_grooved_sandstone_panel.jpg",
      desc: "Precision CNC machinery profiling ornate sandstone panels and custom architectural mouldings in Sikandra hub.",
    },
  ];

  const filteredItems =
    activeTab === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeTab);

  return (
    <main className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
      <Navbar />

      <PageHero
        eyebrow="Mines • Craft • Projects"
        title="Photo & Video"
        accent="Gallery"
        description="Quarry benches, factory yards, master carvers, finished projects and gemstone surfaces — tap any photo to see it larger."
        image="/assets/quarry_mining_operations.jpg"
        crumbs={[{ label: "Gallery" }]}
      />

      {/* Category Tabs — horizontal scroll on mobile */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12">
        <div className="flex items-center sm:justify-center gap-2 sm:gap-3 pb-4 sm:pb-8 border-b border-black/8 overflow-x-auto scrollbar-none w-full">
          <button
            type="button"
            onClick={() => setActiveTab("photo")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
              activeTab === "photo"
                ? "bg-[#123D32] text-white shadow-md border border-[#123D32]"
                : "bg-white text-[#6B7C73] border border-black/8 hover:border-[#123D32]/40"
            }`}
          >
            Photo Gallery
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("media")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
              activeTab === "media"
                ? "bg-[#123D32] text-white shadow-md border border-[#123D32]"
                : "bg-white text-[#6B7C73] border border-black/8 hover:border-[#123D32]/40"
            }`}
          >
            Media &amp; Press
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("video")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
              activeTab === "video"
                ? "bg-[#123D32] text-white shadow-md border border-[#123D32]"
                : "bg-white text-[#6B7C73] border border-black/8 hover:border-[#123D32]/40"
            }`}
          >
            Video Gallery
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
              activeTab === "all"
                ? "bg-[#123D32] text-white shadow-md border border-[#123D32]"
                : "bg-white text-[#6B7C73] border border-black/8 hover:border-[#123D32]/40"
            }`}
          >
            All Archives
          </button>
        </div>
      </div>

      {/* Grid */}
      <section id="gallery-grid" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 scroll-mt-20 sm:scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePreview(item)}
              className="bg-white rounded-2xl border border-black/8 overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#123D32]/50 transition-all duration-300 flex flex-col cursor-pointer group"
            >
              <div className="relative aspect-[16/10] w-full bg-forest-deep overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <span className="absolute top-3 left-3 bg-[#123D32]/80 backdrop-blur-xs text-[#C5A15B] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                  {item.tag}
                </span>

                {item.category === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#123D32]/95 border border-[#C5A15B]/50 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-3 right-3 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#1F2A24] group-hover:text-[#123D32] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7C73] mt-2 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/6 flex items-center justify-between text-xs font-semibold text-[#123D32]">
                  <span>Click to Inspect Full Artifact</span>
                  <span className="text-[11px] uppercase tracking-wider text-black/40 font-mono">
                    #{item.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePreview && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePreview(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={activePreview.image}
                alt={activePreview.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#123D32] bg-[#F7F4EB] px-2.5 py-1 rounded-md inline-block mb-2">
                  {activePreview.tag}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#1F2A24]">
                  {activePreview.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#6B7C73] leading-relaxed">
                {activePreview.desc}
              </p>

              <div className="border-t border-black/8 pt-4">
                <ContactActions tone="light" size="md" layout="row" cta="Gallery preview" product={activePreview.title} className="sm:justify-start" />
                <button
                  type="button"
                  onClick={() => setActivePreview(null)}
                  className="mt-3 min-h-[46px] w-full rounded-full border border-black/10 bg-ivory px-6 text-[14px] font-bold text-ink transition-colors hover:bg-black/5"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="semi-precious-gallery" className="section-y relative overflow-hidden bg-white pattern-dots">
        <div className="container-x relative">
          <SectionHeader
            eyebrow="Natural Gemstones"
            title="Semi-Precious Stone Slabs"
            subtitle="Clear, full-resolution photos of our semi-precious slabs — agate, lapis lazuli, jasper and tiger's eye."
          />
          <PhotoGallery photos={semiPreciousSlabPhotos} />
        </div>
      </section>

      <section id="gemstone-interiors" className="section-y relative overflow-hidden bg-ivory pattern-dots">
        <div className="container-x relative">
          <SectionHeader
            eyebrow="Design Inspiration"
            title="Gemstone Surfaces In Interiors"
            subtitle="Feature walls, bars, tabletops and vanities in agate, quartz, malachite, jasper and more."
          />
          <PhotoGallery photos={gemstoneInteriorPhotos} />
        </div>
      </section>

      {/* Bottom CTA Bar */}
      <CtaBand title="Like What You See?" text="Tell us about your project — we reply with options, samples and a quote." topic="natural stone for my project" cta="Gallery bottom band" />


      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
