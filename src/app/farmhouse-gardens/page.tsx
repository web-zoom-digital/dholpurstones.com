import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
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
import GardenVideoShowcase from "@/components/GardenVideoShowcase";
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
  title: "Luxury Farm House & Garden Stonework – Driveways, Patios, Pool Decks, Gazebos",
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
        title={
          <>
            <span className="block">Luxury Farm House,</span>
            <span>Resort & Garden</span>
          </>
        }
        accent="Stonework"
        description="Turnkey natural-stone work for luxury farm houses, estates and gardens — driveways, patios, pool decks, chhatris, lantern posts, steps and fountains."
        image="/assets/landscaping/landscape_pool_coping.jpg"
        crumbs={[{ label: "Luxury Farm House & Gardens" }]}
      >
        <ContactActions cta="Farmhouse hero" topic="luxury farm house and garden stonework" size="lg" layout="row" className="sm:justify-start" />
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

      {/* Live Stone Fountains & Water Cascades in Motion - Video Showcase Section */}
      <GardenVideoShowcase />

      {/* Featured Masterpiece Section: The Grand Elephant & Sphere Water Fountain */}
      {/* <section className="section-y relative overflow-hidden bg-white border-y border-[#123D32]/10">
        <div className="container-x">
          <div className="overflow-hidden rounded-[2rem] border border-[#123D32]/15 bg-gradient-to-br from-[#FAF8F2] via-white to-[#F5EFE1] p-6 shadow-xl sm:p-10 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-stone-200/80 shadow-2xl">
                  <Image
                    src="/garden-stonework/WhatsApp Image 2026-10-23 at 6.01.43 PM.jpeg"
                    alt="Grand Hand-Carved Sandstone Sphere & Elephant Water Fountain in Farm House Lawn"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-[#123D32]/90 px-4 py-2.5 backdrop-blur sm:bottom-4 sm:left-4 sm:right-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A15B] sm:text-sm">
                      Masterpiece Quarry & Atelier Work
                    </p>
                    <span className="text-[11px] font-medium text-white/90 sm:text-xs">
                      Natural Dholpur Beige Sandstone
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-[#C5A15B] shadow-sm">
                    <Image
                      src="/garden-stonework/WhatsApp Image 2026-10-23 at 6.01.43 PM.jpeg"
                      alt="Multi-Tier Elephant Basin Fountain"
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 inset-x-1 rounded bg-black/60 px-1 py-0.5 text-center text-[10px] font-medium text-white">Tiered Basin</span>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-stone-200 shadow-sm transition hover:border-[#C5A15B]">
                    <Image
                      src="/garden-stonework/WhatsApp Image 2026-10-23 at 6.01.43 PM (1).jpeg"
                      alt="Pedestal Floating Sphere Fountain"
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 inset-x-1 rounded bg-black/60 px-1 py-0.5 text-center text-[10px] font-medium text-white">Pedestal Sphere</span>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-stone-200 shadow-sm transition hover:border-[#C5A15B]">
                    <Image
                      src="/garden-stonework/WhatsApp Image 2026-10-23 at 6.01.44 PM.jpeg"
                      alt="Radial Orb Fountain Jets"
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 inset-x-1 rounded bg-black/60 px-1 py-0.5 text-center text-[10px] font-medium text-white">Radial Orbs</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center lg:col-span-5">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#C5A15B]/40 bg-[#C5A15B]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#9E782F]">
                  <Sparkles className="h-3.5 w-3.5" /> Featured Estate Landmark
                </span>
                <h2 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-[#1F2A24] sm:text-3xl lg:text-4xl">
                  Grand Sphere & Elephant Water Fountain
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#1F2A24]/80 sm:text-base">
                  Artisanal centerpiece fountain sculpted from pure Dholpur sandstone. Combines a precision-turned polished floating sphere, concentric tiered spillway basins, and hand-sculpted royal elephant spouts that create a melodious water cascade.
                </p>

                <div className="mt-5 space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs text-[#1F2A24]/85 sm:text-sm">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A15B]" />
                    <span><strong>100% Hand-Chiseled Stone:</strong> Authentic Shilpa Shastra elephant sculptures with hauda relief</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#1F2A24]/85 sm:text-sm">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A15B]" />
                    <span><strong>Concealed Pre-Plumbing:</strong> Internal channels ready for brass water nozzles & pumps</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#1F2A24]/85 sm:text-sm">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A15B]" />
                    <span><strong>Bespoke Dimensions:</strong> Diameters from 10 ft to 25 ft tailored to your lawn layout</span>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <ContactActions
                    cta="Farmhouse fountain showcase"
                    topic="grand elephant sphere water fountain"
                    size="md"
                    layout="row"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="garden-gallery" className="section-y relative overflow-hidden bg-ivory pattern-dots">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our Work"
            title="Luxury Farm House & Garden Stone Gallery"
            subtitle="Chhatris, fountains, lantern posts, columns, driveways and pool decks — tap any photo to view it full size."
          />
          <PhotoGallery photos={gardenGallery} />
        </div>
      </section>

      <FaqSection faqs={gardenFaqs} title="Luxury Farm House & Garden Questions" tone="white" />
      <CtaBand title="Planning A Luxury Farm House Or Garden?" text="Share your layout and areas — we recommend stone, finishes and quantities, and quote the full job." topic="luxury farm house and garden stonework" cta="Farmhouse bottom band" />
      <JsonLd data={[breadcrumbLd([{ name: "Luxury Farm House & Gardens", path: "/farmhouse-gardens" }]), itemListLd("Luxury farm house & garden stonework", gardenSubs.map((g) => ({ name: g.name, description: g.note, image: g.image }))), faqLd(gardenFaqs)]} />

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
                    "name": "Luxury Farm House & Gardens",
                    "item": "https://www.dholpurstones.com/farmhouse-gardens"
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How to Plan & Execute a Luxury Farm House Natural Sandstone Elevation & Landscape",
                "description": "Step-by-step architectural workflow for sourcing certified Dholpur sandstone, custom CNC fabrication, and installing monolithic luxury farm house porticos and cobblestone driveways.",
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
                    "text": "Delivery directly to your luxury farm house estate with interlocking layout plans and recommendations for non-staining adhesive mortars.",
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
