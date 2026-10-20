"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, MapPin, Calendar, Layers, ArrowUpRight, X, Building, CheckCircle2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  category: "government" | "sacred" | "commercial" | "international";
  categoryLabel: string;
  image: string;
  stoneSupplied: string[];
  volume: string;
  overview: string;
  keyFeature: string;
}

export default function LandmarkProjects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "parliament",
      title: "Parliament House of India",
      subtitle: "New Delhi Monolithic Sandstone Colonnades",
      location: "New Delhi, India",
      year: "Institutional Heritage",
      category: "government",
      categoryLabel: "GOVERNMENT MONUMENT",
      image: "/assets/project-parliament.jpg",
      stoneSupplied: ["Dholpur Red Sandstone", "Dholpur Beige Ashlar Blocks", "Precision Carved Balustrades"],
      volume: "650,000+ Sq.Ft. Finished Stone",
      overview:
        "Supplied and fabricated monolithic sandstone blocks, fluted colonnade pillars, ornamental jali screens, and perimeter boundary balustrades for India’s sovereign legislative apex. Every block was quarry-inspected for uniform mineral density and zero fissures.",
      keyFeature: "Over 800 monolithic chiseled pillars and calibrated ashlar masonry maintaining strict seismic and thermal parameters.",
    },
    {
      id: "akshardham",
      title: "Akshardham Temple Monument",
      subtitle: "Intricate Sacred Rajasthani Temple Architecture",
      location: "New Delhi / Gandhinagar",
      year: "Sacred Landmark",
      category: "sacred",
      categoryLabel: "SACRED MONUMENT",
      image: "/assets/project-akshardham.jpg",
      stoneSupplied: ["Rajasthani Pink Sandstone", "Makrana Pure White Marble", "Hand-Chiseled Stone Domes"],
      volume: "850,000+ Cu.Ft. Hand-Carved Stone",
      overview:
        "Over 250 master chisel sculptors from our Rajasthan guild spent multi-year cycles executing ancient Shilpa Shastra stone architectural carving—interlocking mortise-and-tenon joints without structural steel reinforcement.",
      keyFeature: "Intricately hand-sculpted mandap ceiling domes, elephant friezes, and sanctum sanctorum Makrana marble floors.",
    },
    {
      id: "berlin-embassy",
      title: "Embassy of India, Berlin",
      subtitle: "International Diplomatic Facade Architecture",
      location: "Berlin, Germany",
      year: "Global Export",
      category: "international",
      categoryLabel: "DIPLOMATIC MISSION",
      image: "/assets/project-embassy-berlin.jpg",
      stoneSupplied: ["Calibrated Dholpur Sandstone", "Honed Teakwood Sandstone", "Custom Ventilated Cladding Panels"],
      volume: "120 Seaworthy Containers (Mundra to Hamburg)",
      overview:
        "Engineered, fabricated, and exported custom-dimensioned facade panels compliant with German DIN 18516 ventilated curtain wall standards. Endured severe European freeze-thaw cycles without surface spalling.",
      keyFeature: "High-precision chamfered joint panels fabricated on 5-axis CNC machines and packed in ISPM-15 treated pine crates.",
    },
    {
      id: "aiims-bhopal",
      title: "AIIMS Medical University Campus",
      subtitle: "Premier National Institutional Healthcare Campus",
      location: "Bhopal, Madhya Pradesh",
      year: "National Institution",
      category: "government",
      categoryLabel: "NATIONAL INSTITUTION",
      image: "/assets/project-aiims.jpg",
      stoneSupplied: ["Dholpur Beige Exterior Cladding", "Thermal Flamed Granite Pavers", "Perimeter Kerbstones"],
      volume: "450,000+ Sq.Ft. Calibrated Cladding",
      overview:
        "Delivered massive exterior natural stone envelope for multiple hospital blocks, administrative wings, and monumental central plaza pedestrian paving designed for high pedestrian traffic.",
      keyFeature: "Complete dry-clad mechanical anchoring system engineered to withstand monsoonal humidity and seismic movements.",
    },
    {
      id: "adani-hq",
      title: "Adani Corporate Headquarters",
      subtitle: "Ultra-Luxury Corporate Tower Plazas",
      location: "Ahmedabad, Gujarat",
      year: "Commercial Apex",
      category: "commercial",
      categoryLabel: "CORPORATE APEX",
      image: "/assets/project-adani.jpg",
      stoneSupplied: ["Imperial Black & Grey Granite", "Bookmatched Italian & Makrana Marble", "Heavy Load Flamed Plazas"],
      volume: "300,000+ Sq.Ft. Luxury Flooring & Facades",
      overview:
        "Furnished high-traffic vehicular drop-offs, internal grand atriums, and executive boardrooms with mirror-polished granite and rare semi-precious lapidary accent inlays.",
      keyFeature: "Laser-aligned bookmatched granite slabs with mirror gloss finish exceeding 95 GU reflectivity.",
    },
  ];

  const filterTabs = [
    { key: "all", label: "ALL LANDMARK WORKS" },
    { key: "government", label: "GOVERNMENT & EMBASSIES" },
    { key: "sacred", label: "SACRED TEMPLES" },
    { key: "commercial", label: "CORPORATE & LUXURY" },
    { key: "international", label: "INTERNATIONAL EXPORTS" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#121212] relative overflow-hidden border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#c29b38] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            LANDMARK PORTFOLIO • MONUMENTS OF NATIONAL PRIDE
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="font-['Aboreto',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.1em] text-white uppercase leading-tight">
            STONES THAT SHAPED NATIONS
          </h2>
          <p className="font-['EB_Garamond',serif] italic text-lg sm:text-2xl text-[#a8a8a8] mt-4 leading-relaxed">
            For seven continuous decades, India’s top ministries, international embassies, and landmark religious foundations have entrusted their monumental facades to Dholpur Stones.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`font-['Aboreto',serif] text-[11px] sm:text-xs tracking-[0.16em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 border ${
                activeFilter === tab.key
                  ? "bg-[#c29b38] text-black font-bold border-[#c29b38] shadow-[0_0_20px_rgba(194,155,56,0.3)]"
                  : "bg-white/5 text-white/70 border-white/10 hover:border-[#c29b38] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#c29b38] transition-all duration-500 shadow-xl flex flex-col justify-between cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-[0.18em] uppercase font-bold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#c29b38] border border-[#c29b38]/40">
                    {project.categoryLabel}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-[#c29b38] text-black flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-white/50 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#c29b38]" />
                      {project.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#c29b38]" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-['Aboreto',serif] text-xl font-bold text-white uppercase tracking-wider group-hover:text-[#c29b38] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-['EB_Garamond',serif] italic text-sm text-[#f4efe6]/80 mt-1">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-[#a8a8a8] mt-3 line-clamp-3 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#c29b38] font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Inspect Architectural Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setActiveProject(null)}
          />

          <div className="relative z-10 w-full max-w-4xl bg-[#18181b] border border-[#c29b38]/40 rounded-2xl shadow-2xl overflow-hidden my-8">
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-[#18181b]/50 to-transparent" />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-[0.2em] text-[#c29b38] font-bold">
                  {activeProject.categoryLabel} • {activeProject.location}
                </span>
                <h3 className="font-['Aboreto',serif] text-2xl sm:text-4xl font-bold tracking-wider uppercase mt-1">
                  {activeProject.title}
                </h3>
                <p className="font-['EB_Garamond',serif] italic text-base sm:text-lg text-[#f4efe6]">
                  {activeProject.subtitle}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#c29b38] mb-2">
                  ARCHITECTURAL SCOPE & DELIVERABLES:
                </h4>
                <p className="text-sm text-[#d4d4d4] leading-relaxed">
                  {activeProject.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <div>
                  <span className="text-[10px] text-white/50 uppercase block">Supplied Stone Materials</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {activeProject.stoneSupplied.map((s, i) => (
                      <span key={i} className="text-xs font-semibold text-[#c29b38]">
                        • {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-white/50 uppercase block">Project Volume / Scale</span>
                  <span className="text-sm font-semibold text-white mt-1 block">
                    {activeProject.volume}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#c29b38] mb-2">
                  KEY ENGINEERING & ARTISANAL HIGHLIGHT:
                </h4>
                <p className="text-xs sm:text-sm text-[#f4efe6] bg-[#5a1224]/20 border border-[#5a1224]/50 p-4 rounded-xl">
                  {activeProject.keyFeature}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <a
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="font-['Aboreto',serif] text-xs uppercase tracking-widest px-8 py-3.5 rounded-full bg-[#c29b38] text-black font-bold hover:bg-[#dfb54b] transition-all"
                >
                  CONSULT ON SIMILAR PROJECT
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
