"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  LuArrowUpRight as ArrowUpRight,
  LuSparkles as Sparkles,
  LuCircleCheck as CheckCircle2,
  LuX as X,
  LuDownload as Download,
  LuSlidersHorizontal as SlidersHorizontal
} from "react-icons/lu";

interface MaterialDetail {
  id: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  description: string;
  varieties: string[];
  finishes: string[];
  specs: {
    compressive: string;
    waterAbsorption: string;
    density: string;
    modulus: string;
  };
  applications: string[];
}

export default function MaterialShowcase() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialDetail | null>(null);

  const materials: MaterialDetail[] = [
    {
      id: "sandstone",
      name: "Dholpur Sandstone",
      category: "HERITAGE QUARRY PILLAR",
      tagline: "India’s Iconic Architectural Building Stone",
      image: "/sandstone/dholpur-pink-sandstone.jpeg",
      description:
        "Extracted directly from our captive quarries in Dholpur, Rajasthan. Characterized by uniform fine grain, high load-bearing capacity, and outstanding thermal insulation. Resistant to saline conditions and weathering across centuries.",
      varieties: ["Dholpur Beige / Cream", "Dholpur Red / Pink", "Teakwood Sandstone", "Rainbow Sandstone", "Chocolate Sandstone"],
      finishes: ["Natural Split / Riven", "Honed & Sawn Smooth", "Sandblasted / Flamed", "Bush Hammered", "Hand Chiseled Ashlar"],
      specs: {
        compressive: "680 - 750 kg/cm²",
        waterAbsorption: "1.2 - 1.5%",
        density: "2.35 - 2.40 g/cm³",
        modulus: "140 - 180 kg/cm²",
      },
      applications: ["Colonnades & Monumental Pillars", "Ventilated Facade Cladding", "Dry-Cladding for Embassies & Plazas", "Palace Cornices & Ashlar Masonry"],
    },
    {
      id: "marble",
      name: "Makrana Pristine Marble",
      category: "ROYAL HERITAGE MARBLE",
      tagline: "99% Pure Calcite Crystalline Splendor",
      image: "/white-series-dolpur-color/royal-white.png",
      description:
        "The identical historical quarry formation that sculpted the Taj Mahal, Victoria Memorial, and the Dilwara Temples. Impervious to water seepage, permanent white crystalline lustre that never yellows.",
      varieties: ["Makrana Pure White", "Makrana Albeta (Brown Veined)", "Makrana Dungri", "Makrana Kumari", "Makrana Pink"],
      finishes: ["High Mirror Gloss Polish", "Silky Satin Honed", "Leather Touch Antique", "Hand Scraped Heritage"],
      specs: {
        compressive: "1,100 - 1,250 kg/cm²",
        waterAbsorption: "0.05 - 0.10%",
        density: "2.71 - 2.73 g/cm³",
        modulus: "210 - 240 kg/cm²",
      },
      applications: ["Sanctum Sanctorum & Temple Domes", "Presidential Suite Marble Flooring", "Hand-Carved Mandap Pillars", "Sculptural Monumental Inlays"],
    },
    {
      id: "granite",
      name: "Imperial Indian Granite",
      category: "HIGH-TRAFFIC ARCHITECTURAL",
      tagline: "Monolithic Structural Strength",
      image: "/assets/material-granite.jpg",
      description:
        "Heavy-duty igneous granite blocks processed through 80-blade diamond gangsaws. Ideal for high-traffic institutional plazas, international airport terminals, corporate towers, and external landscape steps.",
      varieties: ["Imperial White / Kashmir White", "Black Galaxy / Absolute Black", "Tan Brown", "Jhansi Red", "Steel Grey"],
      finishes: ["Diamond Mirror Polish", "Thermal Flamed Non-Slip", "River Washed / Leathered", "Shot Blasted / Bush Hammered"],
      specs: {
        compressive: "1,850 - 2,200 kg/cm²",
        waterAbsorption: "0.15 - 0.25%",
        density: "2.68 - 2.85 g/cm³",
        modulus: "260 - 320 kg/cm²",
      },
      applications: ["Airport Terminal Concourse Flooring", "Government Secretariat Plazas", "Structural External Steps & Kerbs", "Heavy Load Pavers & Kerbstones"],
    },
    {
      id: "agate",
      name: "Semi-Precious Inlays",
      category: "BESPOKE LAPIDARY ART",
      tagline: "Backlit Gemstone Luxury Surfaces",
      image: "/semi-precious/blue-agate.jpeg",
      description:
        "Masterfully bound slices of authentic semi-precious quartz, agate, jasper, and tiger eye crafted by royal lapidary craftsmen. Translucent crystalline structures allow magnificent ambient LED backlighting.",
      varieties: ["Blue & Wild Agate", "Golden Jasper & Petrified Wood", "Green Onyx & Malachite", "Amethyst & Crystal Quartz"],
      finishes: ["Ultra Mirror Gem Polish", "Backlit Epoxy Matrix", "Beveled Edge Glass Fusion"],
      specs: {
        compressive: "Mohs Hardness 6.5 - 7.0",
        waterAbsorption: "0.01% (Impervious)",
        density: "2.65 g/cm³",
        modulus: "Ultra-High Tensile Matrix",
      },
      applications: ["Backlit VIP Feature Walls & Bar Counters", "Pietra Dura Royal Floor Medallions", "Presidential Conference Tabletops", "Luxury Yacht Bathroom Vanities"],
    },
    {
      id: "jali",
      name: "Hand-Carved Stone Jali",
      category: "HEREDITARY GUILD CRAFT",
      tagline: "Perforated Architectural Screens & Lattice",
      image: "/assets/material-jali.jpg",
      description:
        "Chiseled from single monolithic sandstone and marble blocks by our guild of 250+ hereditary stone carvers. Combines natural cross-ventilation, daylight diffusion, and iconic Indo-Islamic royal aesthetic.",
      varieties: ["Geometric Hexagonal Lattice", "Traditional Mughal Floral Jali", "Curved Temple Jalis", "Custom Architectural Parametric Patterns"],
      finishes: ["Chisel Hand-Carved Riven", "Fine Sanded Matte", "Antique Patina Washed"],
      specs: {
        compressive: "Custom Block Grade Monolith",
        waterAbsorption: "1.2 - 1.4%",
        density: "2.38 g/cm³",
        modulus: "Engineered Wind Load Certified",
      },
      applications: ["Sustainable Solar Shading Facades", "Temple Parikrama Decorative Screens", "Grand Villa Courtyard Enclosures", "Heritage Hotel Exterior Balconies"],
    },
  ];

  return (
    <section id="materials" className="py-20 sm:py-28 bg-[#18181b] relative overflow-hidden border-b border-white/10">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c29b38]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5a1224]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#c29b38] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              THE 5 MATERIAL PILLARS • DIRECT QUARRY TO PORT
            </div>
            <h2 className="font-['Aboreto',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.1em] text-white uppercase leading-tight">
              RAW NOBILITY OF THE EARTH
            </h2>
            <p className="font-['EB_Garamond',serif] italic text-lg sm:text-xl text-[#a8a8a8] max-w-2xl mt-3">
              From monumental sandstone blocks to gemological lapidary inlays, each specimen is mined, hand-graded, and precision-calibrated for international architectural excellence.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs tracking-wider text-white/50 uppercase">
              Click any material to inspect laboratory data & formats
            </span>
          </div>
        </div>

        {/* 5-Column Luxury Mosaic Grid (Directly adapted from reference site’s 5-column showcase) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {materials.map((mat) => (
            <div
              key={mat.id}
              onClick={() => setSelectedMaterial(mat)}
              className="group relative h-[460px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#c29b38] transition-all duration-500 shadow-xl bg-[#121212] flex flex-col justify-end p-6"
            >
              {/* Background Next.js Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={mat.image}
                  alt={mat.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/70 transition-colors" />
                <div className="absolute inset-0 bg-[#5a1224]/0 group-hover:bg-[#5a1224]/30 transition-colors duration-500" />
              </div>

              {/* Top Pill Category Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] tracking-[0.18em] uppercase font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#c29b38] border border-[#c29b38]/40">
                  {mat.category}
                </span>
              </div>

              {/* Floating Quick Inspect Icon */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 rounded-full bg-[#c29b38] text-black flex items-center justify-center shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="relative z-10">
                <h3 className="font-['Aboreto',serif] text-xl font-bold text-white uppercase tracking-wider group-hover:text-[#c29b38] transition-colors">
                  {mat.name}
                </h3>
                <p className="font-['EB_Garamond',serif] italic text-sm text-[#f4efe6] line-clamp-2 mt-1.5 opacity-90">
                  {mat.tagline}
                </p>

                {/* Varieties badge row */}
                <div className="mt-4 pt-4 border-t border-white/15 flex flex-wrap gap-1.5">
                  {mat.varieties.slice(0, 2).map((v, i) => (
                    <span
                      key={i}
                      className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/80"
                    >
                      {v}
                    </span>
                  ))}
                  {mat.varieties.length > 2 && (
                    <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#c29b38]/20 text-[#c29b38]">
                      +{mat.varieties.length - 2} More
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#c29b38] font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                  <span>View Specifications</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Material Specification Modal */}
      {selectedMaterial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedMaterial(null)}
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-4xl bg-[#1a1a1a] border border-[#c29b38]/40 rounded-2xl shadow-2xl overflow-hidden my-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column: Image with overlay */}
              <div className="relative min-h-[300px] md:min-h-full">
                <Image
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#c29b38] font-bold">
                    {selectedMaterial.category}
                  </span>
                  <h3 className="font-['Aboreto',serif] text-2xl sm:text-3xl font-bold tracking-wider uppercase mt-1">
                    {selectedMaterial.name}
                  </h3>
                  <p className="font-['EB_Garamond',serif] italic text-sm text-[#f4efe6] mt-1">
                    {selectedMaterial.tagline}
                  </p>
                </div>
              </div>

              {/* Right Column: Technical Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-semibold text-[#c29b38] uppercase tracking-wider flex items-center gap-1.5">
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      TECHNICAL DATA SHEET
                    </span>
                    <button
                      onClick={() => setSelectedMaterial(null)}
                      className="p-1 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed mt-4">
                    {selectedMaterial.description}
                  </p>

                  {/* Laboratory Physical Properties */}
                  <div className="mt-6">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-3">
                      LABORATORY PHYSICAL PROPERTIES:
                    </h4>
                    <div className="grid grid-cols-2 gap-3 bg-black/40 p-4 rounded-xl border border-white/5">
                      <div>
                        <span className="text-[10px] text-white/50 uppercase block">Compressive Strength</span>
                        <span className="text-xs font-semibold text-[#c29b38]">{selectedMaterial.specs.compressive}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-white/50 uppercase block">Water Absorption</span>
                        <span className="text-xs font-semibold text-[#c29b38]">{selectedMaterial.specs.waterAbsorption}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-white/50 uppercase block">Bulk Density</span>
                        <span className="text-xs font-semibold text-[#c29b38]">{selectedMaterial.specs.density}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-white/50 uppercase block">Modulus of Rupture</span>
                        <span className="text-xs font-semibold text-[#c29b38]">{selectedMaterial.specs.modulus}</span>
                      </div>
                    </div>
                  </div>

                  {/* Available Varieties */}
                  <div className="mt-5">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-2">
                      QUARRY COLOR VARIETIES:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedMaterial.varieties.map((v, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded bg-[#5a1224]/30 border border-[#5a1224] text-white/90"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Surface Finishes */}
                  <div className="mt-5">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-2">
                      AVAILABLE SURFACE FINISHES:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedMaterial.finishes.map((f, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <a
                    href="#contact"
                    onClick={() => setSelectedMaterial(null)}
                    className="flex-1 font-['Aboreto',serif] text-xs uppercase tracking-widest py-3 rounded-full bg-[#c29b38] text-black font-bold text-center hover:bg-[#dfb54b] transition-all"
                  >
                    REQUEST SAMPLES FOR THIS STONE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
