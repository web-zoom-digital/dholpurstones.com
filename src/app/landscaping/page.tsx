import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import LandscapingSolutions from "@/components/LandscapingSolutions";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ChevronRight, Home as HomeIcon, TreePine, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Farm House & Garden Landscaping Solutions in Sandstone | Dholpurestones",
  description:
    "High-Quality Natural Stone for Luxury Farm Houses, Private Gardens, Builders & Landscapers. Over 300+ front elevation designs in sandstone awarded by the Govt. of India. Patios, pool coping, steps, retaining walls, and hand-carved water fountains from Sarmathura quarries.",
  alternates: {
    canonical: "https://dholpurestones.com/landscaping",
  },
  openGraph: {
    title: "Luxury Farm House & Garden Landscaping Solutions | Dholpurestones",
    description:
      "Direct quarry extraction from Sarmathura and Sikandra. Specializing in luxury farm houses, designer gardens, and 300+ front elevation designs awarded by Govt. of India.",
    url: "https://dholpurestones.com/landscaping",
  },
};

export default function LandscapingPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141A17] selection:bg-[#C29B38] selection:text-black">
      <Navbar />

      {/* Breadcrumb Header */}
      <section className="bg-[#0D1311] text-white py-10 sm:py-14 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C29B38]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C29B38] flex items-center gap-1 transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#C29B38] font-semibold">Farm House &amp; Gardens</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#134e3f]/25 border border-[#C29B38]/40 mb-3">
            <TreePine className="w-3 h-3 text-[#C29B38]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#E0BA55] tracking-[0.2em] uppercase">
              LUXURY FARM HOUSES &bull; GARDENS &bull; 300+ ELEVATION DESIGNS
            </span>
          </div>

          <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white">
            Natural Sand Stone Solutions for Luxury Farm Houses &amp; Garden Landscaping
          </h1>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/70 max-w-2xl mt-3 leading-relaxed">
            High-Quality Natural Stone for Luxury Farm Houses, Private Gardens &amp; Estate Builders. 
            We have made more than 300+ front elevation designs in sandstone, for which we were awarded by the Government of India.
          </p>
        </div>
      </section>

      {/* Main Landscaping Solutions Component */}
      <LandscapingSolutions />

      {/* Bottom CTA Bar */}
      <section className="bg-[#141A17] text-white py-12 border-t border-[#C29B38]/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C29B38] text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Factory Supply &bull; ISPM-15 Crating</span>
            </div>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold">
              Submitting an Architectural Landscape Tender?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
              We provide custom cutting lists, CAD drafting support, and express quarry pricing for landmark landscape contracts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0 text-center">
            <Link
              href="/articles"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider transition-colors text-white text-center"
            >
              Stone Articles
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#C29B38] hover:bg-[#d4ab44] text-black text-xs font-bold uppercase tracking-wider transition-colors text-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
