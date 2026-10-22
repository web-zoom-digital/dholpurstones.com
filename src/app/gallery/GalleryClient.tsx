"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
    {
      id: "p1",
      category: "photo",
      title: "Sarmathura Proprietary Quarry Benches",
      tag: "Live Quarry Strata",
      image: "/assets/quarry_mining_operations.jpg",
      desc: "Massive solid sandstone bedrock extraction at our proprietary mines in Sarmathura, Rajasthan. Producing uniform, crack-free raw monolithic blocks.",
    },
    {
      id: "p2",
      category: "photo",
      title: "Master Hereditary Stone Artisans",
      tag: "Sikandra Ateliers",
      image: "/assets/master_stone_artisans.jpg",
      desc: "Master generational stone sculptors hand-chiseling intricate architectural jali lattice and temple carvings.",
    },
    {
      id: "p3",
      category: "photo",
      title: "Hand-Carved Peacock Sandstone Sculpture",
      tag: "Regal Masterpiece",
      image: "/assets/garg/clean_peacock_hero.jpg",
      desc: "Award-winning hand-carved monolithic peacock sculpture with detailed feather relief and fine plumage.",
    },
    {
      id: "p4",
      category: "photo",
      title: "Calibrated Sandstone Flagstones Yard",
      tag: "Factory Yards",
      image: "/assets/products/real_dholpur_beige_tiles_quarry_yard.jpg",
      desc: "Extensive factory stacks of calibrated Dholpur beige tiles pre-inspected for thickness and grain consistency.",
    },
    {
      id: "p5",
      category: "photo",
      title: "ISPM-15 Export Crating & Logistics Yard",
      tag: "Export Packaging",
      image: "/assets/products/real_sandstone_export_crating_yard.jpg",
      desc: "Heavy-duty heat-treated export crates packed with foam separators and steel strapping ready for container loading at Mundra port.",
    },
    {
      id: "p6",
      category: "photo",
      title: "Natural Sandstone Landscape Patio",
      tag: "Executed Architecture",
      image: "/assets/landscaping/landscape_patio_paving.jpg",
      desc: "Luxury estate outdoor courtyard paved with non-slip Dholpur beige natural cleft flagstones and stone seat walls.",
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
      title: "Sarmathura Quarry Mining & Block Extraction Tour",
      tag: "Video Showcase",
      image: "/assets/quarry_mining_operations.jpg",
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

      {/* Breadcrumb Header */}
      <section className="bg-[#123D32] text-white py-10 sm:py-14 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E5A46]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C5A15B] flex items-center gap-1 transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#C5A15B] font-semibold">Gallery</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E5A46]/25 border border-[#C5A15B]/40 mb-3">
            <Camera className="w-3 h-3 text-[#C5A15B]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C5A15B] tracking-[0.2em] uppercase">
              VISUAL EVIDENCE &bull; MINES &bull; PROJECTS
            </span>
          </div>

          <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white">
            Media, Photo &amp; Video Gallery
          </h1>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/70 max-w-2xl mt-3 leading-relaxed">
            High-resolution visual archives of active Sarmathura quarry benches, factory fabrication yards, master sculptor ateliers, and national monumental projects.
          </p>
        </div>
      </section>

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
              <div className="relative aspect-[16/10] w-full bg-[#1F2A24] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <span className="absolute top-3 left-3 bg-[#123D32]/80 backdrop-blur-xs text-[#C5A15B] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
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
                  <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-[#1F2A24] group-hover:text-[#123D32] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7C73] mt-2 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/6 flex items-center justify-between text-xs font-semibold text-[#123D32]">
                  <span>Click to Inspect Full Artifact</span>
                  <span className="text-[10px] uppercase tracking-wider text-black/40 font-mono">
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
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#123D32] bg-[#F7F4EB] px-2.5 py-1 rounded-md inline-block mb-2">
                  {activePreview.tag}
                </span>
                <h3 className="font-['Cinzel',serif] text-xl font-bold text-[#1F2A24]">
                  {activePreview.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#6B7C73] leading-relaxed">
                {activePreview.desc}
              </p>

              <div className="pt-4 border-t border-black/8 flex items-center justify-between">
                <a
                  href={`https://wa.me/919414945457?text=${encodeURIComponent(
                    `Hello Dholpurestones.com, I am inquiring regarding gallery item: ${activePreview.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-transform active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                  <span>Inquire via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActivePreview(null)}
                  className="py-2.5 px-5 rounded-full bg-[#F7F4EB] hover:bg-black/5 text-[#1F2A24] text-xs font-bold uppercase tracking-wider border border-black/10 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Bar */}
      <section className="bg-[#1F2A24] text-white py-12 border-t border-[#C5A15B]/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold">
              Looking for High-Resolution Project Swatches &amp; CAD References?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
              We ship physical sample boxes directly to architectural firms and developer offices worldwide.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#123D32] hover:bg-[#1E5A46] text-white border border-[#C5A15B]/40 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Request Sample Box
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
