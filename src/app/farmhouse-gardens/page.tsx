import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/ui/CtaBand";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import { gardenFaqs } from "@/data/faqs";
import { gardenSubs, gardenGallery } from "@/data/catalog";
import { breadcrumbLd, itemListLd, faqLd } from "@/lib/schema";
import PhotoGallery from "@/components/ui/PhotoGallery";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactActions from "@/components/ui/ContactActions";
import FeatureStrip from "@/components/ui/FeatureStrip";
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
  LuCompass as Compass,
  LuHammer as Hammer
} from "react-icons/lu";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Farm House & Garden Stonework – Driveways, Patios, Pool Decks, Gazebos",
  description:
    "Turnkey Natural Sandstone Solutions for Luxury Farm Houses, Private Country Estates, and Designer Garden Landscapes. Over 300+ front elevation designs in sandstone awarded by Govt. of India & nominated for International Award for Business Excellence. Cobblestone carriage driveways, monumental entrance gates, carved gazebos, and poolside coping direct from Dholpur quarries.",
  alternates: {
    canonical: "/farmhouse-gardens",
  },
  openGraph: {
    title: "Luxury Farm House & Garden Landscaping Stone Solutions | Dholpurstones",
    description:
      "Specialized in luxury farm houses & designer garden landscapes. Over 300+ front elevation designs awarded by Govt. of India & nominated for International Award for Business Excellence. Direct quarry extraction from Dholpur and Sikandra.",
    url: "/farmhouse-gardens",
    siteName: "Dholpurstones",
    type: "website",
    images: [
      {
        url: "/assets/garg/hero_peacock_widescreen_2k.jpg",
        width: 1920,
        height: 1080,
        alt: "Luxury Farm House & Garden Landscaping Stone Solutions - Dholpurstones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Farm House & Garden Stone Solutions | Dholpurstones",
    description:
      "Turnkey natural sandstone solutions for country estates, 300+ front elevation designs, cobblestone driveways, and carved pavilions.",
    images: ["/assets/garg/hero_peacock_widescreen_2k.jpg"],
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
        description="Turnkey natural-stone work for farm houses, estates and gardens — driveways, patios, pool decks, chhatris, lantern posts, steps and fountains."
        image="/assets/landscaping/landscape_pool_coping.jpg"
        crumbs={[{ label: "Farm House & Gardens" }]}
      >
        <ContactActions cta="Farmhouse hero" topic="farm house and garden stonework" size="lg" layout="row" className="sm:justify-start" />
      </PageHero>

      <FeatureStrip
        items={[
          { icon: TreePine, title: "6+ Specialities", text: "Driveways to fountains" },
          { icon: Award, title: "300+ Designs", text: "Govt. of India awarded" },
          { icon: Hammer, title: "Hand Carved", text: "Chhatris, lanterns, columns" },
          { icon: ShieldCheck, title: "Supply & Install", text: "Direct from our mines" },
        ]}
      />

      {/* Garden & farm house work — landscape photography only */}
      <LandscapingSolutions />

      <section id="garden-gallery" className="section-y relative overflow-hidden bg-ivory pattern-dots">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our Work"
            title="Farm House & Garden Stone Gallery"
            subtitle="Chhatris, fountains, lantern posts, columns, driveways and pool decks — tap any photo to view it full size."
          />
          <PhotoGallery photos={gardenGallery} />
        </div>
      </section>

      <FaqSection faqs={gardenFaqs} title="Farm House & Garden Questions" tone="white" />
      <CtaBand title="Planning A Farm House Or Garden?" text="Share your layout and areas — we recommend stone, finishes and quantities, and quote the full job." topic="farm house and garden stonework" cta="Farmhouse bottom band" />
      <JsonLd data={[breadcrumbLd([{ name: "Farm House & Gardens", path: "/farmhouse-gardens" }]), itemListLd("Farm house & garden stonework", gardenSubs.map((g) => ({ name: g.name, description: g.note, image: g.image }))), faqLd(gardenFaqs)]} />

      {/* Farmhouse & Landscaping Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.dholpurstones.com/farmhouse-gardens#service",
                "name": "Luxury Farm House & Garden Sandstone Solutions",
                "serviceType": "Architectural Sandstone Landscaping & Front Elevation",
                "provider": {
                  "@id": "https://www.dholpurstones.com/#organization"
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
                    "item": "https://www.dholpurstones.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Farm House & Gardens",
                    "item": "https://www.dholpurstones.com/farmhouse-gardens"
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
                    "url": "https://www.dholpurstones.com/farmhouse-gardens#elevation-review"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Dholpur Quarry Strata Selection",
                    "text": "Direct monolithic block quarrying in Dholpur matching your required color uniformity across Dholpur Beige, Red, or Chocolate tones.",
                    "url": "https://www.dholpurstones.com/farmhouse-gardens#quarry-selection"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "8-Axis CNC Cutting & Artisanal Chiseling",
                    "text": "Precision gangsaw slicing (+/-1mm calibration) followed by 8-axis CNC profiling for fluted pillars, jalis, and hand-carved decorative motifs.",
                    "url": "https://www.dholpurstones.com/farmhouse-gardens#fabrication"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "ISPM-15 Wooden Crate Packaging",
                    "text": "Heavy-duty seaworthy wooden crating with high-density foam cushioning to prevent any edge chipping during highway or ocean transit.",
                    "url": "https://www.dholpurstones.com/farmhouse-gardens#packaging"
                  },
                  {
                    "@type": "HowToStep",
                    "position": 5,
                    "name": "Turnkey On-Site Installation Guidance",
                    "text": "Delivery directly to your farm house estate with interlocking layout plans and recommendations for non-staining adhesive mortars.",
                    "url": "https://www.dholpurstones.com/farmhouse-gardens#installation"
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
