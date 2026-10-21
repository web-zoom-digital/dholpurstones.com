import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FarmHouseGardenSpecialist from "@/components/FarmHouseGardenSpecialist";
import LandscapingSolutions from "@/components/LandscapingSolutions";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuChevronRight as ChevronRight,
  LuHouse as HomeIcon,
  LuTreePine as TreePine,
  LuShieldCheck as ShieldCheck,
  LuAward as Award,
  LuSparkles as Sparkles,
  LuPhone as Phone,
  LuRuler as Ruler,
  LuCompass as Compass
} from "react-icons/lu";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Luxury Farm House & Garden Landscaping Stone Solutions | Dholpurestones",
  description:
    "Turnkey Natural Sandstone Solutions for Luxury Farm Houses, Private Country Estates, and Designer Garden Landscapes. Over 300+ front elevation designs in sandstone awarded by Govt. of India & nominated for International Award for Business Excellence. Cobblestone carriage driveways, monumental entrance gates, carved gazebos, tiered fountains, and poolside coping direct from Sarmathura quarries.",
  alternates: {
    canonical: "https://dholpurestones.com/farmhouse-gardens",
  },
  openGraph: {
    title: "Luxury Farm House & Garden Landscaping Stone Solutions | Dholpurestones",
    description:
      "Specialized in luxury farm houses & designer garden landscapes. Over 300+ front elevation designs awarded by Govt. of India & nominated for International Award for Business Excellence. Direct quarry extraction from Sarmathura and Sikandra.",
    url: "https://dholpurestones.com/farmhouse-gardens",
    siteName: "Dholpurestones",
    type: "website",
    images: [
      {
        url: "https://dholpurestones.com/assets/garg/hero_peacock_widescreen_2k.jpg",
        width: 1920,
        height: 1080,
        alt: "Luxury Farm House & Garden Landscaping Stone Solutions - Dholpurestones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Farm House & Garden Stone Solutions | Dholpurestones",
    description:
      "Turnkey natural sandstone solutions for country estates, 300+ front elevation designs, cobblestone driveways, and carved pavilions.",
    images: ["https://dholpurestones.com/assets/garg/hero_peacock_widescreen_2k.jpg"],
  },
};

export default function FarmHouseGardensPage() {
  return (
    <main style={{ overflow: "visible" }} className="min-h-screen bg-[#FAF7F2] text-[#141A17] selection:bg-[#C29B38] selection:text-black">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Hero Breadcrumb & Header Banner */}
      <section className="bg-[#0D1311] text-white py-12 sm:py-16 lg:py-20 border-b border-white/10 relative overflow-hidden">
        {/* Ambient Decorative Glows */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#C29B38]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#134e3f]/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C29B38] flex items-center gap-1.5 transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#C29B38] font-semibold">Farm House &amp; Gardens</span>
          </nav>

          {/* Honors & Government Award Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#134e3f]/40 border border-[#134e3f] text-[#25D366] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
              <TreePine className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Dedicated Specialty &bull; Farm Houses &amp; Gardens</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C29B38]/15 border border-[#C29B38]/40 text-[#E0BA55] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Awarded by Govt. of India &bull; 300+ Elevation Designs</span>
            </div>

            <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/80 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#C29B38]" />
              <span>Nominated for Intl. Award (Business Excellence)</span>
            </div>
          </div>

          {/* Main Page Title */}
          <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.12] max-w-4xl">
            Natural Sand Stone Solutions for Luxury Farm Houses &amp; Designer Gardens
          </h1>

          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-white/80 max-w-3xl mt-4 leading-relaxed font-light">
            We specialize in executing turnkey architectural and landscape stone masonry for sprawling country farm houses, private family estates, and luxury retreats. From heavy-duty axle load-bearing cobblestone carriage driveways and monumental entrance portals to hand-chiseled sandstone baradaris, tiered water cascades, and non-slip pool decks.
          </p>

          {/* Key Facts / Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-white/10 max-w-3xl">
            <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#C29B38] block">300+</span>
              <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-medium">Elevation Designs</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#25D366] block">8 Master</span>
              <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-medium">Estate Specialties</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#C29B38] block">70+ Yrs</span>
              <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-medium">Quarry Heritage</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-white block">100%</span>
              <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-medium">Sarmathura Stone</span>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="#farmhouse-gardens"
              className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full bg-[#134e3f] hover:bg-[#0c3329] text-white border border-[#C29B38]/50 shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <span>Explore All 8 Specialties</span>
              <ChevronRight className="w-4 h-4 text-[#C29B38]" />
            </a>

            <a
              href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20am%20inquiring%20about%20complete%20Farm%20House%20%26%20Garden%20stone%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full bg-[#C29B38] hover:bg-[#dfb54b] text-[#0D1311] transition-all shadow-md active:scale-95 border border-[#C29B38]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#0D1311]" size={16} />
              <span>Direct WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Luxury Farm House & Garden Masonry Specialist (All 8 Solutions Full Grid) */}
      <FarmHouseGardenSpecialist isHomePreview={false} />

      {/* 4. Complementary Calibrated Landscaping Solutions (Flagstones, Paving, Step Treads) */}
      <LandscapingSolutions />

      {/* 5. Bottom Architectural Tender & Quarry Direct Supply Banner */}
      <section className="bg-[#141A17] text-white py-14 border-t border-[#C29B38]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C29B38]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C29B38] text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#C29B38]" />
              <span>Direct Sarmathura Quarry Concessions &bull; Worldwide ISPM-15 Crating</span>
            </div>
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
              Planning a Luxury Farm House, Villa Estate, or Resort Landscape?
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/75 mt-2 max-w-2xl leading-relaxed">
              Our master stone carvers and CNC stonework engineers provide custom cutting lists, CAD drafting assistance, site delivery, and bespoke quarry pricing for landmark residential and hospitality estates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0 text-center">
            <Link
              href="/articles"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider transition-colors text-white text-center"
            >
              Stone Articles &amp; Sculptures
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-[#C29B38] hover:bg-[#dfb54b] text-[#0D1311] text-xs font-bold uppercase tracking-wider transition-all shadow-lg text-center"
            >
              Get Turnkey Quotation
            </Link>
          </div>
        </div>
      </section>

      {/* Farmhouse & Landscaping Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://dholpurestones.com/farmhouse-gardens#service",
                "name": "Luxury Farm House & Garden Sandstone Solutions",
                "serviceType": "Architectural Sandstone Landscaping & Front Elevation",
                "provider": {
                  "@id": "https://dholpurestones.com/#organization"
                },
                "areaServed": ["IN", "CA", "US", "DE", "AE", "GB"],
                "description": "Turnkey natural sandstone supply and artisanal carving for luxury farmhouses, cobblestone driveways, grand entrance portals, tiered fountains, and gazebo structures."
              },
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
                    "name": "Farm House & Gardens",
                    "item": "https://dholpurestones.com/farmhouse-gardens"
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How to Plan & Execute a Luxury Farm House Natural Sandstone Elevation & Landscape",
                "description": "Step-by-step architectural workflow for sourcing certified Dholpur sandstone, custom CNC fabrication, and installing monolithic farm house porticos and cobblestone driveways.",
                "totalTime": "P3W",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Architectural BOQ & 3D Elevation Review",
                    "text": "Submit your architectural elevations and site dimensions to our engineering desk for stone thickness calibration and quantity optimization.",
                    "url": "https://dholpurestones.com/farmhouse-gardens#elevation-review"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Sarmathura Quarry Strata Selection",
                    "text": "Direct monolithic block quarrying in Sarmathura matching your required color uniformity across Dholpur Beige, Red, or Chocolate tones.",
                    "url": "https://dholpurestones.com/farmhouse-gardens#quarry-selection"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "8-Axis CNC Cutting & Artisanal Chiseling",
                    "text": "Precision gangsaw slicing (+/-1mm calibration) followed by 8-axis CNC profiling for fluted pillars, jalis, and hand-carved decorative motifs.",
                    "url": "https://dholpurestones.com/farmhouse-gardens#fabrication"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "ISPM-15 Wooden Crate Packaging",
                    "text": "Heavy-duty seaworthy wooden crating with high-density foam cushioning to prevent any edge chipping during highway or ocean transit.",
                    "url": "https://dholpurestones.com/farmhouse-gardens#packaging"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Turnkey On-Site Installation Guidance",
                    "text": "Delivery directly to your farm house estate with interlocking layout plans and recommendations for non-staining adhesive mortars.",
                    "url": "https://dholpurestones.com/farmhouse-gardens#installation"
                  }
                ]
              }
            ]
          }),
        }}
      />

      {/* 6. Heritage Footer & Floating Direct WhatsApp */}
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
