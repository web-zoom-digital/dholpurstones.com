import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuChevronRight as ChevronRight,
  LuHouse as HomeIcon,
  LuPhone as Phone
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Contact Us & Official Works | B P Garg & Sons | Dholpurestones",
  description:
    "Direct connect with Mr. Arvind Garg (Awarded by Govt. of India). WhatsApp: +91 94149 45457, Call: +91 90573 55232. Works: B P Garg & Sons, Near RAC line, Mothiyapura road, Dholpur 328026 Dholpur, Rajasthan, India.",
  alternates: {
    canonical: "https://dholpurestones.com/contact",
  },
  openGraph: {
    title: "Contact Garg Corporation Ltd. & B P Garg & Sons | Dholpurestones",
    description:
      "Direct quarry inquiries, factory quotations, architectural sample boxes, and international export tenders.",
    url: "https://dholpurestones.com/contact",
    siteName: "Dholpurestones",
    images: [
      {
        url: "https://dholpurestones.com/assets/quarry_mining_operations.jpg",
        width: 1200,
        height: 630,
        alt: "Dholpurestones Dholpur Works and Quarry Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Official Works | Dholpurestones (Estd. 1953)",
    description:
      "Direct coordination with Managing Director Mr. Arvind Garg (Awarded by Govt. of India) for quarry supply and architectural execution.",
    images: ["https://dholpurestones.com/assets/quarry_mining_operations.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
      <Navbar />

      {/* Breadcrumb Header */}
      <PageHero
        eyebrow="Get In Touch"
        title="Connect With"
        accent="Our Team"
        description="Speak directly with Mr. Arvind Garg's team — serving architects, builders, tender authorities and overseas importers."
        image="/assets/hero-quarry.jpg"
        crumbs={[{ label: "Contact" }]}
      />

      {/* Core Contact & FAQ Components */}
      <ContactSection />
      <FAQSection />

      {/* ContactPage & BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                "@id": "https://dholpurestones.com/contact#webpage",
                "url": "https://dholpurestones.com/contact",
                "name": "Contact Dholpurestones Leadership & Works",
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
                      "name": "Contact & Credentials",
                      "item": "https://dholpurestones.com/contact"
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
