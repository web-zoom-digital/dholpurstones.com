import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
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
            <span className="text-[#C29B38] font-semibold">Signature Projects</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C29B38]/15 border border-[#C29B38]/30 mb-3">
            <Award className="w-3 h-3 text-[#C29B38]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C29B38] tracking-[0.2em] uppercase">
              TURNKEY EXECUTION &bull; ESTD. 1953
            </span>
          </div>

          <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white">
            Signature Projects Portfolio
          </h1>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/70 max-w-2xl mt-3 leading-relaxed">
            Demonstrating our stone manufacturing excellence through historical parliamentary landmarks,
            magnificent pilgrimage temples, and luxury private estates across the globe.
          </p>
        </div>
      </section>

      {/* Core Component */}
      <OurSignatureProjects />

      {/* Bottom CTA Bar */}
      <section className="bg-[#141A17] text-white py-12 border-t border-[#C29B38]/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C29B38] text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Institutional &amp; Global Contractor</span>
            </div>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold">
              Planning a Landmark Architectural Project?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
              Consult directly with Director Mr. Arvind Garg (Awarded by Govt. of India) for turnkey stone supply and engineering.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-[#C29B38] hover:bg-[#d4ab44] text-black text-xs font-bold uppercase tracking-wider transition-colors"
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
