import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import OurProducts from "@/components/OurProducts";
import StoneCollection from "@/components/StoneCollection";
import Applications from "@/components/Applications";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ChevronRight, Home as HomeIcon, Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Dholpur Sandstone Products, Tiles, Slabs & Collections | Dholpurestones",
  description:
    "Manufacturer, supplier & exporter of authentic Dholpur Red, Beige & Chocolate Sandstone, calibrated tiles, CNC grooved panels, raw blocks, luxury marble, granite and ISPM-15 crated export bundles.",
  alternates: {
    canonical: "https://dholpurestones.com/products",
  },
  openGraph: {
    title: "Dholpur Sandstone Products & Natural Stone Collections",
    description:
      "Direct quarry extraction from Sarmathura and Sikandra. Calibrated tiles, CNC architectural panels, monolithic blocks, and containerized export supplies.",
    url: "https://dholpurestones.com/products",
  },
};

export default function ProductsPage() {
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
            <span className="text-[#C29B38] font-semibold">Products</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C29B38]/15 border border-[#C29B38]/30 mb-3">
            <Layers className="w-3 h-3 text-[#C29B38]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C29B38] tracking-[0.2em] uppercase">
              MINE TO EXPORT &bull; DIRECT SOURCING
            </span>
          </div>

          <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white">
            Sandstone Products &amp; Natural Collections
          </h1>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/70 max-w-2xl mt-3 leading-relaxed">
            Your trusted manufacturer, supplier and global exporter of certified Dholpur sandstone,
            calibrated tiles, CNC wall panels, architectural blocks, and imported luxury marble collections.
          </p>
        </div>
      </section>

      {/* Core Product Components */}
      <OurProducts />
      <StoneCollection />
      <Applications />

      {/* Bottom CTA Bar */}
      <section className="bg-[#141A17] text-white py-12 border-t border-[#C29B38]/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C29B38] text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Free Architectural Sample Boxes Available</span>
            </div>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold">
              Require Custom Thickness, Calibration, or CNC Profiling?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
              Our 8-axis CNC facilities and multi-gangsaw hubs fulfill custom architectural BOQs and overseas container orders.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0 text-center">
            <Link
              href="/landscaping"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider transition-colors text-white text-center"
            >
              Landscaping Stones
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#C29B38] hover:bg-[#d4ab44] text-black text-xs font-bold uppercase tracking-wider transition-colors text-center"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
