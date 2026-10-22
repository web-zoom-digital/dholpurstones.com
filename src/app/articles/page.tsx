import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SandstoneArticles from "@/components/SandstoneArticles";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuChevronRight as ChevronRight,
  LuHouse as HomeIcon,
  LuSparkles as Sparkles,
  LuShieldCheck as ShieldCheck
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Hand-Carved Sandstone Sculptures & Architectural Articles | Dholpurestones",
  description:
    "Exquisite hand-carved natural sandstone peacock sculptures, regal stone lanterns, lions, jali screens, and temple pillars chiseled by hereditary Shilpa Shastra master artisans in Sikandra & Sarmathura.",
  alternates: {
    canonical: "https://dholpurestones.com/articles",
  },
  openGraph: {
    title: "Hand-Carved Sandstone Sculptures & Heritage Articles | Dholpurestones",
    description:
      "Handcrafted master stone carvings from authentic Rajasthan quarries. Monolithic peacock sculptures, garden lanterns, and ornamental temple art.",
    url: "https://dholpurestones.com/articles",
    siteName: "Dholpurestones.com",
    images: [
      {
        url: "https://dholpurestones.com/assets/master_stone_artisans.jpg",
        width: 1200,
        height: 630,
        alt: "Hand-Carved Sandstone Sculptures & Artisans at Sikandra Ateliers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hand-Carved Sandstone Sculptures | Dholpurestones",
    description: "Monolithic peacocks, regal lanterns, and sacred temple carvings from Rajasthan quarries.",
    images: ["https://dholpurestones.com/assets/master_stone_artisans.jpg"],
  },
};

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
      <Navbar />

      {/* Breadcrumb Header */}
      <section className="bg-[#123D32] text-white py-10 sm:py-14 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A15B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C5A15B] flex items-center gap-1 transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#C5A15B] font-semibold">Stone Articles</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A15B]/15 border border-[#C5A15B]/30 mb-3">
            <Sparkles className="w-3 h-3 text-[#C5A15B]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C5A15B] tracking-[0.2em] uppercase">
              MASTER ATELIERS &bull; SIKANDRA
            </span>
          </div>

          <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white">
            Hand-Carved Sculptures &amp; Articles
          </h1>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/70 max-w-2xl mt-3 leading-relaxed">
            Preserving classical Indian stone craftsmanship through monolithic hand-carved peacocks,
            regal stone lanterns, temple shikharas, and intricate lattice jalis.
          </p>
        </div>
      </section>

      {/* Core Component */}
      <SandstoneArticles />

      {/* Bottom CTA Bar */}
      <section className="bg-[#1F2A24] text-white py-12 border-t border-[#C5A15B]/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C5A15B] text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Bespoke Architectural Commissions</span>
            </div>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold">
              Commission a Custom Sculpture or Temple Pillar?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
              Our hereditary master artisans carve custom sandstone sculptures according to your exact CAD sketches or references.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0 text-center">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider transition-colors text-white text-center"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#C5A15B] hover:bg-[#C5A15B] text-black text-xs font-bold uppercase tracking-wider transition-colors text-center"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb & CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": "https://dholpurestones.com/articles#webpage",
                "url": "https://dholpurestones.com/articles",
                "name": "Hand-Carved Sandstone Sculptures & Architectural Articles",
                "isPartOf": {
                  "@id": "https://dholpurestones.com/#website"
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://dholpurestones.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Stone Articles & Sculptures",
                      "item": "https://dholpurestones.com/articles"
                    }
                  ]
                }
              }
            ]
          }),
        }}
      />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
