"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StoneTechnicalSpecsTable from "@/components/StoneTechnicalSpecsTable";
import {
  ChevronRight,
  Home as HomeIcon,
  BookOpen,
  ShieldCheck,
  Cpu,
  ArrowRight,
} from "lucide-react";

export default function ResourcesClient() {
  const [activeTab, setActiveTab] = useState<"blog" | "quality" | "exhibition" | "packaging">("quality");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "") as "blog" | "quality" | "exhibition" | "packaging";
      if (["blog", "quality", "exhibition", "packaging"].includes(hash)) {
        setActiveTab(hash);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const blogPosts = [
    {
      title: "Why Authentic Dholpur Sandstone Outlasts Modern Engineered Cladding",
      tag: "Architectural Insights",
      date: "October 2026",
      readTime: "5 min read",
      desc: "Siliceous bonding, compressive strength exceeding 68 MPa, and how natural thermal inertia keeps sandstone facades intact over centuries.",
    },
    {
      title: "How to Specify Natural Sandstone Flagstones for High-Footfall Commercial Patios",
      tag: "Landscape Engineering",
      date: "September 2026",
      readTime: "7 min read",
      desc: "Comprehensive guide to thickness calibration (+/-1mm), R11 wet slip resistance ratings, and sub-base preparation for heavy vehicular driveways.",
    },
    {
      title: "The Art of Shilpa Shastra: Hand-Carving Monolithic Heritage Sculptures",
      tag: "Artisanal Lineage",
      date: "August 2026",
      readTime: "6 min read",
      desc: "Inside our Sikandra ateliers where hereditary stone masons transform solid quarry blocks into sacred temple shikharas, jali screens, and peacock art.",
    },
  ];

  const qualityPoints = [
    { label: "IS:3620 Indian Standard", desc: "Exceeds all statutory physical criteria for natural building stone." },
    { label: "Compressive Strength", desc: "Tested between 68.4 MPa to 72.8 MPa, ensuring heavy structural load bearing." },
    { label: "Water Absorption", desc: "Under 1.15%, preventing moisture penetration, efflorescence and moss degradation." },
    { label: "Specific Density", desc: "2.42 to 2.52 g/cm³ mineral density featuring ultra-fine quartz strata grains." },
    { label: "Frost Resistance", desc: "Zero spalling, flaking, or thermal shock damage through sub-zero freeze-thaw cycles." },
    { label: "Acid & Saline Immunity", desc: "Resistant to atmospheric acid rain, saline swimming pool salts and environmental corrosion." },
  ];

  const exhibitions = [
    {
      name: "STONA International Stone Fair",
      location: "Bengaluru, India",
      role: "Exhibitor & Natural Sandstone Concessionaire",
      highlight: "Showcasing raw Sarmathura monolithic blocks, 8-axis CNC sculpted panels, and architectural calibrated flagstones.",
    },
    {
      name: "Marmomac World Stone Fair",
      location: "Verona, Italy",
      role: "Global Export House Delegate",
      highlight: "Presenting calibrated Dholpur Beige & Red tiles, honed teakwood finishes, and European containerized crate shipments.",
    },
    {
      name: "Middle East Stone & The Big 5",
      location: "Dubai, UAE",
      role: "Gulf Architectural Contractor",
      highlight: "Supply tenders for luxury palace courtyards, ornamental jharokhas, and high-temperature thermal reflective paving.",
    },
  ];

  const machineryItems = [
    {
      title: "Automated Diamond Multi-Wire Saws",
      spec: "High-Speed Block Squaring & Gangsaw Slicing",
      desc: "Allows precision cutting of monolithic 30-tonne quarry blocks with millimeter-level surface planar tolerances.",
    },
    {
      title: "8-Axis CNC 3D Profiling Centers",
      spec: "Laser-Guided Architectural Carving",
      desc: "Engineers complex geometric fluted pillars, radial pool copings, 3D grooved wall cladding, and curved cornice mouldings.",
    },
    {
      title: "Automatic Continuous Calibration Line",
      spec: "Gauge Precision (+/-1mm)",
      desc: "Ensures uniform tile thickness across 50,000+ sq ft container shipments for zero-lippage site installation.",
    },
    {
      title: "ISPM-15 Heat-Treated Seaworthy Crating",
      spec: "International Ocean Logistics Protocol",
      desc: "Heavy-duty timber crates lined with waterproof plastic membrane, polystyrene foam shock absorbers, and steel strapping.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141A17] selection:bg-[#852233] selection:text-white">
      <Navbar />

      {/* Breadcrumb Header */}
      <section className="bg-[#0D1311] text-white py-10 sm:py-14 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#852233]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C29B38] flex items-center gap-1 transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#C29B38] font-semibold">Resources</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#852233]/25 border border-[#C29B38]/40 mb-3">
            <BookOpen className="w-3 h-3 text-[#E0BA55]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#E0BA55] tracking-[0.2em] uppercase">
              KNOWLEDGE &bull; TESTING &bull; MACHINERY
            </span>
          </div>

          <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white">
            Resources &amp; Technical Specifications
          </h1>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/70 max-w-2xl mt-3 leading-relaxed">
            In-depth engineering documentation, laboratory test certifications, machinery protocols, and architectural stone insights.
          </p>
        </div>
      </section>

      {/* Navigation Pills — horizontal scroll on mobile */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12">
        <div className="flex items-center sm:justify-center gap-2 sm:gap-3 pb-4 sm:pb-8 border-b border-black/8 overflow-x-auto scrollbar-none w-full">
          <button
            type="button"
            onClick={() => setActiveTab("quality")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
              activeTab === "quality"
                ? "bg-[#852233] text-white shadow-md border border-[#852233]"
                : "bg-white text-[#4A5550] border border-black/8 hover:border-[#852233]/40"
            }`}
          >
            Quality Process
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("packaging")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
              activeTab === "packaging"
                ? "bg-[#852233] text-white shadow-md border border-[#852233]"
                : "bg-white text-[#4A5550] border border-black/8 hover:border-[#852233]/40"
            }`}
          >
            Packaging &amp; Machinery
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("exhibition")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
              activeTab === "exhibition"
                ? "bg-[#852233] text-white shadow-md border border-[#852233]"
                : "bg-white text-[#4A5550] border border-black/8 hover:border-[#852233]/40"
            }`}
          >
            Exhibitions
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("blog")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
              activeTab === "blog"
                ? "bg-[#852233] text-white shadow-md border border-[#852233]"
                : "bg-white text-[#4A5550] border border-black/8 hover:border-[#852233]/40"
            }`}
          >
            Blog &amp; Insights
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Quality Process */}
        {activeTab === "quality" && (
          <div id="quality" className="space-y-8 animate-fade-in scroll-mt-20 sm:scroll-mt-24">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold text-[#852233] uppercase tracking-[0.2em] block mb-1">
                IS:3620 LABORATORY ASSURANCE
              </span>
              <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-[#141A17] uppercase">
                Geotechnical &amp; Quality Control Protocols
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5550] mt-2 leading-relaxed">
                Every extracted quarry bench undergoes systematic ultrasonic velocity tests, compressive load analysis,
                and water absorption calibration prior to factory profiling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {qualityPoints.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-black/8 shadow-2xs hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 mb-3 text-[#134e3f]">
                    <ShieldCheck className="w-5 h-5 text-[#852233]" />
                    <span className="font-['Cinzel',serif] text-sm font-bold text-[#141A17]">{item.label}</span>
                  </div>
                  <p className="text-xs text-[#4A5550] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Comprehensive Technical ASTM / IS Comparison Table */}
            <div className="mt-8">
              <StoneTechnicalSpecsTable />
            </div>
          </div>
        )}

        {/* Packaging and Machinery */}
        {activeTab === "packaging" && (
          <div id="packaging" className="space-y-8 animate-fade-in scroll-mt-20 sm:scroll-mt-24">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold text-[#852233] uppercase tracking-[0.2em] block mb-1">
                STATE-OF-THE-ART FABRICATION
              </span>
              <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-[#141A17] uppercase">
                Packaging Protocol &amp; Automated Machinery
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5550] mt-2 leading-relaxed">
                Operating high-speed wire saws, continuous calibration tables, and certified seaworthy timber crating
                to fulfill global architectural orders without breakage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {machineryItems.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-black/8 shadow-2xs hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-['Cinzel',serif] text-base font-bold text-[#141A17]">{item.title}</h3>
                    <Cpu className="w-4 h-4 text-[#852233]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#852233] bg-[#FAF7F2] px-2.5 py-1 rounded-md mb-3 inline-block">
                    {item.spec}
                  </span>
                  <p className="text-xs text-[#4A5550] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exhibitions */}
        {activeTab === "exhibition" && (
          <div id="exhibition" className="space-y-8 animate-fade-in scroll-mt-20 sm:scroll-mt-24">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold text-[#852233] uppercase tracking-[0.2em] block mb-1">
                GLOBAL NATURAL STONE CONVENTIONS
              </span>
              <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-[#141A17] uppercase">
                International Stone Trade Exhibitions
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5550] mt-2 leading-relaxed">
                Regularly exhibiting certified Dholpur sandstone, hand-carved architectural articles, and calibrated
                stone pavers at premier global natural stone fairs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {exhibitions.map((expo, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-black/8 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C29B38] block mb-1">
                      {expo.location}
                    </span>
                    <h3 className="font-['Cinzel',serif] text-base font-bold text-[#141A17] mb-2">{expo.name}</h3>
                    <span className="text-[11px] font-semibold text-[#852233] block mb-3">{expo.role}</span>
                    <p className="text-xs text-[#4A5550] leading-relaxed">{expo.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blog & Insights */}
        {activeTab === "blog" && (
          <div id="blog" className="space-y-8 animate-fade-in scroll-mt-20 sm:scroll-mt-24">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold text-[#852233] uppercase tracking-[0.2em] block mb-1">
                INDUSTRY KNOWLEDGE &amp; ARTICLES
              </span>
              <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-[#141A17] uppercase">
                Architectural Sandstone Blog
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5550] mt-2 leading-relaxed">
                Expert insights on natural sandstone quarrying, mineral properties, installation best practices, and heritage restoration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-black/8 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-[#68726E] mb-3">
                      <span className="bg-[#FAF7F2] text-[#852233] font-bold px-2 py-0.5 rounded-md border border-black/5">
                        {post.tag}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#141A17] group-hover:text-[#852233] transition-colors mb-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#4A5550] leading-relaxed mb-4">{post.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-black/6 flex items-center justify-between text-xs text-[#852233] font-bold">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Bottom CTA Bar */}
      <section className="bg-[#141A17] text-white py-12 border-t border-[#C29B38]/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold">
              Require Certified Laboratory Test Certificates or BOQ Support?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
              Connect directly with our engineering team for IS:3620 test reports and technical consultation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#852233] hover:bg-[#a1283d] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Contact Engineering
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
