import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import OurProducts from "@/components/OurProducts";
import StoneCollection from "@/components/StoneCollection";
import Applications from "@/components/Applications";
import StoneTechnicalSpecsTable from "@/components/StoneTechnicalSpecsTable";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuChevronRight as ChevronRight,
  LuHouse as HomeIcon,
  LuLayers as Layers,
  LuShieldCheck as ShieldCheck
} from "react-icons/lu";

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
      "Direct quarry extraction from Dholpur and Sikandra. Calibrated tiles, CNC architectural panels, monolithic blocks, and containerized export supplies.",
    url: "https://dholpurestones.com/products",
    siteName: "Dholpurestones.com",
    images: [
      {
        url: "https://dholpurestones.com/assets/material-sandstone.jpg",
        width: 1200,
        height: 630,
        alt: "Dholpur Sandstone Calibrated Tiles and Monolithic Blocks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dholpur Sandstone Products & Slabs | Dholpurestones",
    description: "Quarry-direct calibrated tiles, CNC grooved panels, and monolithic architectural blocks.",
    images: ["https://dholpurestones.com/assets/material-sandstone.jpg"],
  },
};

export default function ProductsPage() {
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
            <span className="text-[#C5A15B] font-semibold">Products</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A15B]/15 border border-[#C5A15B]/30 mb-3">
            <Layers className="w-3 h-3 text-[#C5A15B]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C5A15B] tracking-[0.2em] uppercase">
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
      <OurProducts isHome={false} />

      {/* Precious Gem Surface Collection Entry */}
      <section className="bg-[#F7F4EB] py-8 sm:py-12 border-b border-black/8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between pb-3 border-b border-black/8 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A15B]" />
              <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#1F2A24] uppercase">
                EXQUISITE COLLECTION ENTRY
              </span>
            </div>
            <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C5A15B] tracking-widest">
              EXCLUSIVE
            </span>
          </div>

          <Link
            href="/precious-gem-surface"
            className="group block rounded-2xl overflow-hidden border border-black/8 hover:border-[#C5A15B]/70 bg-white transition-all duration-300 hover:shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="relative h-64 md:h-72 md:col-span-7 overflow-hidden bg-[#123D32]">
                <Image
                  src="/precious-gem-surface/page_062_BLACK_OBSIDIAN_image_02.jpeg"
                  alt="Precious Gem Surface"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/30" />
              </div>

              <div className="p-6 md:p-10 md:col-span-5 flex flex-col justify-between">
                <div>
                  <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#1F2A24] group-hover:text-[#123D32] transition-colors mb-4">
                    Precious Gem Surface
                  </h2>
                </div>

                <div className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full bg-[#123D32] text-[#C5A15B] group-hover:bg-[#C5A15B] group-hover:text-[#123D32] text-xs font-bold uppercase tracking-wider transition-all duration-300">
                  <span>View Gallery</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <StoneCollection />
      <StoneTechnicalSpecsTable />
      <Applications />

      {/* Bottom CTA Bar */}
      <section className="bg-[#1F2A24] text-white py-12 border-t border-[#C5A15B]/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C5A15B] text-xs font-bold uppercase tracking-wider mb-1">
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
              href="/farmhouse-gardens"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider transition-colors text-white text-center"
            >
              Farm House &amp; Gardens
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#C5A15B] hover:bg-[#C5A15B] text-black text-xs font-bold uppercase tracking-wider transition-colors text-center"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Product & Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
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
                    "name": "Products",
                    "item": "https://dholpurestones.com/products"
                  }
                ]
              },
              {
                "@type": "Product",
                "@id": "https://dholpurestones.com/products#sandstone",
                "name": "Authentic Dholpur Sandstone Tiles, Slabs & Monolithic Blocks",
                "description": "Quarry-direct calibrated natural Dholpur sandstone in Red, Beige, and Chocolate varieties. Compressive strength >68 MPa, ASTM tested for luxury architectural cladding and flooring.",
                "brand": {
                  "@type": "Brand",
                  "name": "Dholpurestones"
                },
                "category": "Building Materials > Natural Stone > Sandstone",
                "offers": {
                  "@type": "AggregateOffer",
                  "priceCurrency": "INR",
                  "lowPrice": "45",
                  "highPrice": "450",
                  "offerCount": "24",
                  "priceValidUntil": "2027-12-31",
                  "availability": "https://schema.org/InStock"
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
