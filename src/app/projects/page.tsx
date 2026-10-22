import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Navbar from "@/components/Navbar";
import OurSignatureProjects from "@/components/OurSignatureProjects";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuChevronRight as ChevronRight,
  LuHouse as HomeIcon,
  LuAward as Award,
  LuShieldCheck as ShieldCheck
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Featured Landmark Projects & Execution Portfolio | Dholpurestones",
  description:
    "Explore our portfolio of monumental natural stone execution across India and global capitals: New Delhi Parliament House, Akshardham Temple, Adani House, AIIMS Bhopal, and Indian Embassies.",
  alternates: {
    canonical: "https://dholpurestones.com/projects",
  },
  openGraph: {
    title: "Signature Natural Stone Projects Across India & Global Capitals",
    description:
      "Selected landmark turnkey executions across government institutions, world-renowned spiritual temples, and luxury residential estates.",
    url: "https://dholpurestones.com/projects",
    siteName: "Dholpurestones",
    images: [
      {
        url: "https://dholpurestones.com/assets/projects/project-parliament.jpg",
        width: 1200,
        height: 630,
        alt: "New Delhi Parliament House Sandstone Supply by Dholpurestones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature Natural Stone Landmark Projects | Dholpurestones",
    description:
      "Turnkey executions across New Delhi Parliament House, Akshardham Temple, Adani House, and embassies worldwide.",
    images: ["https://dholpurestones.com/assets/projects/project-parliament.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
      <Navbar />

      {/* Breadcrumb Header */}
      <PageHero
        eyebrow="Our Track Record"
        title="Signature"
        accent="Projects"
        description="Parliamentary landmarks, pilgrimage temples, embassies and luxury private estates — stone supplied and crafted by Dholpurestones."
        image="/assets/project-parliament.jpg"
        crumbs={[{ label: "Projects" }]}
      />

      {/* Core Component */}
      <OurSignatureProjects />

      {/* Bottom CTA Bar */}
      <section className="bg-forest-deep text-white py-12 border-t border-[#C5A15B]/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C5A15B] text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Institutional &amp; Global Contractor</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              Planning a Landmark Architectural Project?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
              Consult directly with Director Mr. Arvind Garg (Awarded by Govt. of India) for turnkey stone supply and engineering.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-[#C5A15B] hover:bg-[#C5A15B] text-black text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Consult Director
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb & Projects Collection Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": "https://dholpurestones.com/projects#webpage",
                "url": "https://dholpurestones.com/projects",
                "name": "Landmark Turnkey Stone Projects Portfolio",
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
                      "name": "Signature Projects",
                      "item": "https://dholpurestones.com/projects"
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
