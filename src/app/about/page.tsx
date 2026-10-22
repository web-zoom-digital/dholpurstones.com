import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";

import Navbar from "@/components/Navbar";
import WhyUs from "@/components/home/WhyUs";
import StrengthGrid from "@/components/about/StrengthGrid";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuChevronRight as ChevronRight,
  LuHouse as HomeIcon,
  LuAward as Award,
  LuShieldCheck as ShieldCheck
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "About Dholpurstones – Dholpur Sandstone Mine Owner Since 1953",
  description:
    "Discover Dholpurstones (Estd. 1953). Over 70+ years of continuous natural stone quarrying, mining concessions in Dholpur, automated CNC hubs, and global contracting under Garg Corporation Ltd. and Saroj Stone Industries.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Dholpurstones - 70+ Years Quarry Heritage",
    description:
      "Direct quarry concessions in Dholpur, Rajasthan. Founded in 1953, supplying authentic sandstone to iconic national landmarks and global capitals.",
    url: "/about",
    siteName: "Dholpurstones.com",
    images: [
      {
        url: "/assets/crest-1953.jpg",
        width: 1200,
        height: 630,
        alt: "Dholpurstones Established 1953 Quarry Lineage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Dholpurstones (Estd. 1953)",
    description: "70+ Years of authentic natural sandstone quarrying in Dholpur, Rajasthan.",
    images: ["/assets/crest-1953.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
      <Navbar />

      {/* Breadcrumb Header */}
      <PageHero
        eyebrow="Our Story"
        title="Heritage, Quarrying &"
        accent="Infrastructure"
        description="The pioneer name in natural stone since 1953 — awarded by the Government of India for 300+ front elevation designs and nominated for an International Award for Business Excellence."
        image="/assets/quarry_mining_operations.jpg"
        crumbs={[{ label: "About Us" }]}
      />

      {/* Core About Components */}
      <div id="why-choose">
        <WhyUs />
      </div>
      <StrengthGrid />

      {/* Bottom CTA Bar */}
      <CtaBand title="Looking For Authentic Dholpur Sandstone?" text="Inspect our works in Dholpur or request samples — we reply with options and a quote." topic="Dholpur sandstone supply" cta="About bottom band" />


      {/* AboutPage & BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AboutPage",
                "@id": "https://www.dholpurstones.com/about#webpage",
                "url": "https://www.dholpurstones.com/about",
                "name": "About Dholpurstones (B P Garg & Sons / Garg Corporation Ltd.)",
                "isPartOf": {
                  "@id": "https://www.dholpurstones.com/#website"
                },
                "breadcrumb": {
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
                      "name": "About Us",
                      "item": "https://www.dholpurstones.com/about"
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
