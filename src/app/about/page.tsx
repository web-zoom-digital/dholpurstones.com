import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
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
  title: "About Us | Dholpurestones (Estd. 1953) - Sandstone Quarry & Heritage",
  description:
    "Discover Dholpurestones (Estd. 1953). Over 70+ years of continuous natural stone quarrying, mining concessions in Dholpur, automated CNC hubs, and global contracting under Garg Corporation Ltd. and Saroj Stone Industries.",
  alternates: {
    canonical: "https://dholpurestones.com/about",
  },
  openGraph: {
    title: "About Us | Dholpurestones - 70+ Years Quarry Heritage",
    description:
      "Direct quarry concessions in Dholpur, Rajasthan. Founded in 1953, supplying authentic sandstone to iconic national landmarks and global capitals.",
    url: "https://dholpurestones.com/about",
    siteName: "Dholpurestones.com",
    images: [
      {
        url: "https://dholpurestones.com/assets/crest-1953.jpg",
        width: 1200,
        height: 630,
        alt: "Dholpurestones Established 1953 Quarry Lineage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Dholpurestones (Estd. 1953)",
    description: "70+ Years of authentic natural sandstone quarrying in Dholpur, Rajasthan.",
    images: ["https://dholpurestones.com/assets/crest-1953.jpg"],
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
      <section className="bg-forest-deep text-white py-12 border-t border-[#C5A15B]/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C5A15B] text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Quarry Extraction &bull; Factory Quotation</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              Looking for Authentic Dholpur Sandstone Supply?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
              Inspect live quarry benches in Dholpur or request complimentary physical architectural sample boxes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0 text-center">
            <Link
              href="/products"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold uppercase tracking-wider transition-colors text-white text-center"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#C5A15B] hover:bg-[#C5A15B] text-black text-xs font-bold uppercase tracking-wider transition-colors text-center"
            >
              Contact Quarry
            </Link>
          </div>
        </div>
      </section>

      {/* AboutPage & BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AboutPage",
                "@id": "https://dholpurestones.com/about#webpage",
                "url": "https://dholpurestones.com/about",
                "name": "About Dholpurestones (B P Garg & Sons / Garg Corporation Ltd.)",
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
                      "name": "About Us",
                      "item": "https://dholpurestones.com/about"
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
