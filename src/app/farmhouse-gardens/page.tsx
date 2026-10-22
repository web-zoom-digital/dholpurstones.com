import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
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
    "Turnkey Natural Sandstone Solutions for Luxury Farm Houses, Private Country Estates, and Designer Garden Landscapes. Over 300+ front elevation designs in sandstone awarded by Govt. of India & nominated for International Award for Business Excellence. Cobblestone carriage driveways, monumental entrance gates, carved gazebos, and poolside coping direct from Dholpur quarries.",
  alternates: {
    canonical: "https://dholpurestones.com/farmhouse-gardens",
  },
  openGraph: {
    title: "Luxury Farm House & Garden Landscaping Stone Solutions | Dholpurestones",
    description:
      "Specialized in luxury farm houses & designer garden landscapes. Over 300+ front elevation designs awarded by Govt. of India & nominated for International Award for Business Excellence. Direct quarry extraction from Dholpur and Sikandra.",
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
    <main style={{ overflow: "visible" }} className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      <PageHero
        eyebrow="Our Speciality"
        title="Farm House &"
        accent="Garden Stonework"
        description="Turnkey natural-stone work for farm houses, estates and gardens — driveways, patios, pool decks, gazebos, steps, retaining walls and fountains."
        image="/assets/landscaping/landscape_pool_coping.jpg"
        crumbs={[{ label: "Farm House & Gardens" }]}
        stats={[
          { value: "6", label: "Specialities" },
          { value: "70+", label: "Years of craft" },
          { value: "100%", label: "Natural stone" },
        ]}
      >
        <Button href="#landscaping" variant="gold" size="lg">Explore Specialities</Button>
        <Button href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20am%20inquiring%20about%20Farm%20House%20%26%20Garden%20stone%20solutions." variant="outline-light" size="lg">Discuss My Project</Button>
      </PageHero>

      {/* Garden & farm house work — landscape photography only */}
      <LandscapingSolutions />

      {/* 5. Bottom Architectural Tender & Quarry Direct Supply Banner */}
      <section className="bg-forest-deep text-white py-14 border-t border-[#C5A15B]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A15B]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C5A15B] text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A15B]" />
              <span>Direct Dholpur Quarry Concessions &bull; Worldwide ISPM-15 Crating</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
              Planning a Luxury Farm House, Villa Estate, or Resort Landscape?
            </h2>
            <p className="font-body text-xs sm:text-sm text-white/75 mt-2 max-w-2xl leading-relaxed">
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
              className="px-7 py-3.5 rounded-full bg-[#C5A15B] hover:bg-[#C5A15B] text-[#123D32] text-xs font-bold uppercase tracking-wider transition-all shadow-lg text-center"
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
                "description": "Turnkey natural sandstone supply and artisanal carving for luxury farmhouses, cobblestone driveways, grand entrance portals, and gazebo structures."
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
                    "name": "Dholpur Quarry Strata Selection",
                    "text": "Direct monolithic block quarrying in Dholpur matching your required color uniformity across Dholpur Beige, Red, or Chocolate tones.",
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
