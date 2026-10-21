"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  TreePine,
  Layers,
  Compass,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Ruler,
  Sun,
  Droplets,
  HardHat,
  X,
  Phone,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

function AnimDiv({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("gcl-visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`gcl-animate ${className}`}>
      {children}
    </div>
  );
}

interface LandscapeItem {
  id: string;
  category: "all" | "farmhouse" | "flagstones" | "pool" | "steps" | "fountains";
  title: string;
  tag: string;
  subtitle: string;
  image: string;
  provenance: string;
  desc: string;
  idealFor: string;
  specs: { label: string; value: string }[];
  features: string[];
  waMsg: string;
}

const landscapeSolutions: LandscapeItem[] = [
  {
    id: "farmhouse-landscaping",
    category: "farmhouse",
    title: "Luxury Farm House & Estate Landscaping",
    tag: "Exclusive Farm Houses & Lawns",
    subtitle: "Front Elevation, Grand Gates, Cobblestone Driveways & Courtyards",
    image: "/assets/landscaping/landscape_cobblestone_driveway.jpg",
    provenance: "Direct Sarmathura Sandstone Strata",
    desc: "Turnkey natural stone landscaping crafted specially for luxury farm houses, expansive private gardens, and countryside retreats. Features grand front elevation facades, hand-dressed boundary wall copings, heavy-duty cobblestone driveways, and serene garden seating gazebos.",
    idealFor: "Luxury Farm Houses, Sprawling Private Estates, Country Retreats, Eco-Resorts",
    specs: [
      { label: "Front Elevation Range", value: "Over 300+ Sandstone Designs (Govt. Awarded)" },
      { label: "Key Elements", value: "Grand Entrance Gates, Cobblestones, Patios & Steps" },
      { label: "Durability", value: "100% Weatherproof, Frost & Midday Sun Resistant" },
      { label: "Quarry Sourcing", value: "Direct from Sarmathura & Sikandra Facilities" },
    ],
    features: [
      "Custom catalogue of 300+ front elevation designs tailored for luxury farm houses",
      "Heavy load-bearing cobblestone pavers for royal farm house entrance driveways",
      "Non-slip natural cleft garden pathways that remain cool under intense summer heat",
      "Monumental hand-carved stone fountains, bird baths & planters for lush outdoor lawns",
    ],
    waMsg: "Hello Dholpurestones.com, I would like to inquire about stone solutions and 300+ front elevation designs for a Farm House project.",
  },
  {
    id: "patio-paving",
    category: "flagstones",
    title: "Calibrated Sandstone Flagstones & Paving",
    tag: "High Footfall & Anti-Slip",
    subtitle: "Natural Cleft & Flamed Finish Patio Pavers",
    image: "/assets/landscaping/landscape_patio_paving.jpg",
    provenance: "Direct Sarmathura Quarry Leases",
    desc: "Naturally slip-resistant sandstone flagstones with hand-dressed or machine-sawn edges, tailored for expansive villa patios, garden walkways, open-air courtyards, and palatial terraces. Retains a pleasant cool surface even under intense summer sunlight.",
    idealFor: "Luxury Villa Patios, Hotel Walkways, Heritage Courtyards, Terrace Gardens",
    specs: [
      { label: "Standard Thickness", value: "22mm, 30mm, 40mm & 50mm Calibrated" },
      { label: "Surface Finishes", value: "Natural Cleft, Flamed, Shotblasted, Tumbled" },
      { label: "Slip Rating", value: "Class R11 - R12 Wet Slip Resistance" },
      { label: "Flexural Strength", value: "14.2 MPa (Exceeds ASTM C616)" },
    ],
    features: [
      "Natural cleft anti-slip tactile texture safe for rain and dew",
      "Low thermal absorption keeps stones comfortable under bare feet",
      "Factory thickness calibration (+/-1mm) for rapid, zero-lippage laying",
      "Immune to efflorescence, moss erosion, and desert temperature swings",
    ],
    waMsg: "Hello Dholpurestones.com, I would like to inquire about Calibrated Sandstone Flagstones & Paving for a landscaping project.",
  },
  {
    id: "pool-coping",
    category: "pool",
    title: "Resort Pool Copings & Non-Slip Decks",
    tag: "Waterproof & Heat-Reflective",
    subtitle: "Bullnosed & Drop-Face Seamless Pool Surrounds",
    image: "/assets/landscaping/landscape_pool_coping.jpg",
    provenance: "Dholpur White & Sandstone Stratum",
    desc: "Engineered stone pool surrounds crafted with smoothly rounded bullnose or modern drop-face edges. Completely non-porous and resistant to chlorinated or saline swimming pool water, providing barefoot safety and royal aesthetics.",
    idealFor: "Resort Infinity Pools, Farmhouse Plunges, Spa Wellness Decks, Seaside Villas",
    specs: [
      { label: "Edge Profiles", value: "Full Bullnose, Half Bullnose, Drop-Face / Rebated" },
      { label: "Water Absorption", value: "< 1.15% (Ultra-Dense Siliceous Sandstone)" },
      { label: "Chemical Resistance", value: "100% Resistant to Chlorine & Saltwater Salts" },
      { label: "Sizes", value: "600x300, 600x400, 900x450mm & Custom Radial Arcs" },
    ],
    features: [
      "Satin honed non-slip surface feels luxurious and safe wet or dry",
      "Precision CNC bullnose profiling prevents rough cuts and injuries",
      "Will not heat up like granite or synthetic tiles under midday sun",
      "Custom curved pieces engineered for freeform and kidney swimming pools",
    ],
    waMsg: "Hello Dholpurestones.com, I would like to inquire about Sandstone Pool Copings & Non-Slip Decks.",
  },
  {
    id: "steps-walling",
    category: "steps",
    title: "Monolithic Garden Steps & Dry Stone Walling",
    tag: "Structural Grade & Rustic Heritage",
    subtitle: "Solid Block Treads & Rustic Terracing Walling",
    image: "/assets/landscaping/landscape_steps_walling.jpg",
    provenance: "Sarmathura Heavy Bed Quarries",
    desc: "Massive solid sandstone step treads with rock-faced front edges matched with dry-stacked retaining walling blocks. Engineered to absorb soil lateral pressure on terraced hill slopes while creating lush multi-level landscape architecture.",
    idealFor: "Terraced Estate Gardens, Hillside Villa Transitions, Botanical Parks, Amphitheaters",
    specs: [
      { label: "Step Riser Height", value: "150mm & 180mm Solid Monolithic Stone" },
      { label: "Walling Format", value: "Quarry-Faced Blocks, Random Ashlar, Sawn Beds" },
      { label: "Compressive Strength", value: "68–72 MPa (Crushing load tested)" },
      { label: "Longevity", value: "Multi-Generational (Century+ Weathering Life)" },
    ],
    features: [
      "Massive monolithic block treads with hand-chiseled textured tread faces",
      "Superior shear resistance prevents settling or dislocation over decades",
      "Permeable dry-stone retaining allows natural root breathing and drainage",
      "Harmonizes naturally with outdoor plants, creeping groundcovers & lighting",
    ],
    waMsg: "Hello Dholpurestones.com, I would like to inquire about Monolithic Steps & Dry Stone Walling for landscape terracing.",
  },
  {
    id: "water-fountains",
    category: "fountains",
    title: "Hand-Carved Stone Fountains & Cascades",
    tag: "Master Artisan Craftsmanship",
    subtitle: "Regal Tiered Water Features & Lotus Stone Basins",
    image: "/assets/landscaping/landscape_water_fountain.jpg",
    provenance: "Sikandra Heritage Sculpting Ateliers",
    desc: "Monumental tiered sandstone fountains, spillway bowls, and lotus flower water basins carved by generational master stone sculptors. Pre-drilled for concealed plumbing conduits, creating an acoustic water focal point for prestigious estates.",
    idealFor: "Palatial Courtyards, Estate Driveway Rotundas, Civic Plazas, Luxury Hotel Entrances",
    specs: [
      { label: "Crafting Technique", value: "100% Hand Sculpted & Chiseled Monoliths" },
      { label: "Dimensions", value: "Diameters from 3ft to 16ft; Heights up to 18ft" },
      { label: "Conduits", value: "Concealed Integrated Copper/PVC Core Plumbing" },
      { label: "Stone Quality", value: "A-Grade Uniform Fine-Grained Dholpur Pink & Beige" },
    ],
    features: [
      "Traditional Shilpa Shastra lotus flower basins & lion-spout water features",
      "Engineered water lip geometries create melodious cascading soundscapes",
      "Modular inter-locking ring construction for effortless on-site assembly",
      "Direct quarry master artisans can execute custom drawings or CAD 3D files",
    ],
    waMsg: "Hello Dholpurestones.com, I would like to inquire about Hand-Carved Sandstone Water Fountains & Garden Basins.",
  },
];

const categoryTabs = [
  { id: "all", label: "All Solutions", icon: Layers },
  { id: "farmhouse", label: "Farm House & Gardens", icon: TreePine },
  { id: "flagstones", label: "Patios & Paving", icon: Ruler },
  { id: "pool", label: "Pool Coping & Decks", icon: Droplets },
  { id: "steps", label: "Steps & Walling", icon: Layers },
  { id: "fountains", label: "Fountains & Features", icon: Sparkles },
];

const stakeholderPillars = [
  {
    title: "For Landscape Architects",
    icon: Compass,
    badge: "Design Precision",
    desc: "Exact CAD hatches, BIM 3D models, and certified mineral laboratory tests to meet stringent architectural specifications.",
    points: [
      "Bespoke radial curves & CNC curved bullnose profiles",
      "Tested compressive strength (68–72 MPa) & ASTM C616 reports",
      "Complimentary physical architectural swatch & sample boxes",
    ],
  },
  {
    title: "For Builders & Contractors",
    icon: HardHat,
    badge: "Site Efficiency",
    desc: "Factory gauge-calibrated tiles and pre-cut stepped blocks guarantee rapid laying with minimal site cutting or material wastage.",
    points: [
      "Calibrated thickness (+/-1mm) for zero-lippage paving",
      "Seaworthy ISPM-15 crating with crane-hoist lifting straps",
      "Direct mine supply for uninterrupted 50,000+ sq ft consistency",
    ],
  },
  {
    title: "For Estate Owners & Landscapers",
    icon: Sun,
    badge: "Lasting Luxury",
    desc: "Natural sandstone stays cool under summer heat, is non-slip during rains, and develops a richer antique patina year after year.",
    points: [
      "Comfortable barefoot thermal performance under midday sun",
      "Natural cleft non-slip grip (Class R11/R12) for kids & elders",
      "Zero efflorescence or salt degradation across generations",
    ],
  },
];

export default function LandscapingSolutions() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeModal, setActiveModal] = useState<LandscapeItem | null>(null);

  const filteredItems =
    activeTab === "all"
      ? landscapeSolutions
      : landscapeSolutions.filter((item) => item.category === activeTab);

  return (
    <section
      id="landscaping"
      className="bg-[#FAF7F2] py-14 sm:py-24 border-b border-black/8 relative overflow-hidden"
    >
      {/* Decorative Background Subtleties */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C29B38]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#134e3f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Index Marker */}
        <AnimDiv className="flex items-center justify-between pb-3 border-b border-black/8 mb-8 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C29B38]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.16em] text-[#141A17] uppercase">
              DHOLPURESTONES &bull; LANDSCAPE DIVISION
            </span>
          </div>
          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C29B38] tracking-widest">
            06
          </span>
        </AnimDiv>

        {/* Section Header */}
        <AnimDiv delay={40} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#134e3f]/10 border border-[#134e3f]/20 mb-3.5 shadow-2xs">
            <TreePine className="w-3.5 h-3.5 text-[#134e3f]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#134e3f] tracking-[0.2em] uppercase">
              SPECIALIZED IN LUXURY FARM HOUSES, GARDENS &amp; ESTATES
            </span>
          </div>

          <h2 className="font-['Cinzel',serif] font-bold text-[#141A17] uppercase tracking-[0.05em] leading-[1.18] text-2xl sm:text-3xl lg:text-4xl">
            Natural Sand Stone Solutions for Luxury Farm Houses &amp; Garden Landscaping
          </h2>

          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#4A5550] mt-3 sm:mt-4 leading-relaxed font-medium">
            High-Quality Natural Stone for Architects, Builders &amp; Farm House Owners. Specialized in expansive
            garden flagstones, pool surrounds, boundary retaining walls, grand entrance facades, and monumental fountains.
            We have created more than <strong className="text-[#141A17]">300+ front elevation designs in sandstone</strong>, for which we were awarded by the Government of India.
          </p>
        </AnimDiv>

        {/* Category Navigation Pills — horizontal scroll on mobile */}
        <AnimDiv delay={80} className="flex items-center sm:justify-center gap-2 overflow-x-auto pb-2 mb-8 sm:mb-12 scrollbar-none w-full">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#134e3f] text-white shadow-md border border-[#C29B38]"
                    : "bg-white text-[#4A5550] border border-black/8 hover:border-[#C29B38]/50 hover:bg-[#FAF7F2]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#C29B38]" : "text-[#68726E]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </AnimDiv>

        {/* Showcase Grid of 4 Core Landscaping Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {filteredItems.map((item, index) => (
            <AnimDiv
              key={item.id}
              delay={100 + index * 50}
              className="bg-white rounded-2xl border border-black/8 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C29B38]/60 transition-all duration-400 flex flex-col group"
            >
              {/* Media Card Preview */}
              <div
                onClick={() => setActiveModal(item)}
                className="relative aspect-[16/9.5] w-full overflow-hidden bg-[#141A17] cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-[#134e3f]/90 backdrop-blur-xs text-[#FAF7F2] border border-[#C29B38]/60 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#C29B38]" />
                    <span>{item.tag}</span>
                  </span>
                </div>

                {/* Provenance Pill */}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/60 backdrop-blur-xs text-white/90 px-2.5 py-1 rounded-md text-[10px] font-medium tracking-wide border border-white/10">
                    {item.provenance}
                  </span>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E0BA55] block mb-0.5">
                    {item.subtitle}
                  </span>
                  <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Inspect Indicator */}
                <div className="absolute inset-0 bg-[#0D1311]/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <div className="bg-[#134e3f] border border-[#C29B38] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                    <ExternalLink className="w-3.5 h-3.5 text-[#C29B38]" />
                    <span>Inspect Specs &amp; Gallery</span>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-[13px] text-[#4A5550] leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4 pt-3 border-t border-black/6">
                    {item.specs.slice(0, 2).map((s, idx) => (
                      <div key={idx} className="bg-[#FAF7F2] p-2.5 rounded-xl border border-black/5">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-[#68726E] block mb-0.5">
                          {s.label}
                        </span>
                        <span className="font-bold text-[#141A17] text-[11px] leading-tight block">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Feature Bullets */}
                  <ul className="space-y-1.5 mb-5">
                    {item.features.slice(0, 3).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#141A17]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#134e3f] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action Bar */}
                <div className="pt-4 border-t border-black/6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModal(item)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#134e3f] hover:text-white border border-black/10 text-xs font-bold text-[#141A17] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Full Technical Specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/919414945457?text=${encodeURIComponent(item.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs active:scale-95"
                    title="Inquire on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                    <span className="hidden sm:inline">Quotation</span>
                  </a>
                </div>
              </div>
            </AnimDiv>
          ))}
        </div>

        {/* =========================================================================
            PROFESSIONAL ARCHITECT & BUILDER SPECIFICATION PILLARS
            ========================================================================= */}
        <AnimDiv delay={150} className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[10px] font-bold text-[#C29B38] uppercase tracking-[0.22em] block mb-1">
              ENGINEERED FOR LANDSCAPE PROFESSIONALS
            </span>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#141A17] uppercase tracking-wider">
              Trusted by Architects, Builders &amp; Landscapers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stakeholderPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-black/8 shadow-2xs hover:shadow-md hover:border-[#C29B38]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#134e3f]/10 border border-[#134e3f]/20 flex items-center justify-center text-[#134e3f]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#C29B38] bg-[#FAF7F2] border border-black/5 px-2.5 py-1 rounded-full">
                        {pillar.badge}
                      </span>
                    </div>

                    <h4 className="font-['Cinzel',serif] text-base font-bold text-[#141A17] uppercase tracking-wider mb-2">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-[#4A5550] leading-relaxed mb-5">
                      {pillar.desc}
                    </p>

                    <ul className="space-y-2 pt-4 border-t border-black/6">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-[#141A17]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#134e3f] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimDiv>

        {/* =========================================================================
            CALL TO ACTION BANNER FOR LANDSCAPE TENDERS
            ========================================================================= */}
        <AnimDiv
          delay={200}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#141A17] via-[#161D1A] to-[#0D1311] border border-[#C29B38]/30 p-6 sm:p-10 lg:p-12 shadow-xl text-white"
        >
          {/* Subtle Golden Ambient Ring */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C29B38]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#C29B38] text-[10px] font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>Direct Quarry Concessionaire Leases &bull; Sarmathura</span>
              </div>
              <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wider text-white mb-3">
                Have a Commercial or Private Landscaping Project?
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
                Send your landscape architectural drawings, BOQ, or CAD files directly to our factory.
                We provide custom thickness calibration, bespoke radial coping stone, monolithic garden
                steps, and insured containerized shipments worldwide.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B38]" />
                  <span>Free Architectural Sample Boxes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B38]" />
                  <span>CAD &amp; 3D Profiling Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B38]" />
                  <span>Direct Factory Wholesale Pricing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20have%20a%20landscaping%20project%20and%20would%20like%20to%20request%20factory%20quotation%20and%20stone%20samples."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg transition-transform active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" size={18} />
                <span>WhatsApp Stone Inquiry</span>
              </a>

              <a
                href="tel:+919057355232"
                className="flex-1 py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C29B38]" />
                <span>Call: +91 90573 55232</span>
              </a>
            </div>
          </div>
        </AnimDiv>
      </div>

      {/* =========================================================================
          DETAILED SPECIFICATION MODAL
          ========================================================================= */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-[#C29B38]/40 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative aspect-[16/9] w-full bg-[#141A17]">
              <Image
                src={activeModal.image}
                alt={activeModal.title}
                fill
                sizes="700px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                title="Close Window"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] font-bold text-[#E0BA55] tracking-widest uppercase block mb-1">
                  {activeModal.subtitle} &bull; {activeModal.provenance}
                </span>
                <h3 className="font-['Cinzel',serif] text-lg sm:text-2xl font-bold leading-tight">
                  {activeModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 space-y-5">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#68726E] block mb-1">
                  ARCHITECTURAL SUMMARY
                </span>
                <p className="text-xs sm:text-sm text-[#4A5550] leading-relaxed">
                  {activeModal.desc}
                </p>
              </div>

              {/* Ideal Applications */}
              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-black/6">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#134e3f] block mb-1">
                  RECOMMENDED PROJECT TYPES
                </span>
                <p className="text-xs font-bold text-[#141A17]">
                  {activeModal.idealFor}
                </p>
              </div>

              {/* Technical Specifications */}
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#68726E] block mb-2.5">
                  FACTORY TECHNICAL SPECIFICATIONS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModal.specs.map((s, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-black/8 shadow-2xs">
                      <span className="text-[9px] uppercase font-bold text-[#68726E] block mb-0.5">
                        {s.label}
                      </span>
                      <span className="text-xs font-bold text-[#141A17]">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Architectural Advantages */}
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#68726E] block mb-2">
                  KEY ADVANTAGES FOR CONTRACTORS
                </span>
                <ul className="space-y-2">
                  {activeModal.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#141A17]">
                      <CheckCircle2 className="w-4 h-4 text-[#134e3f] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-black/8 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/919414945457?text=${encodeURIComponent(activeModal.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                  <span>Inquire on WhatsApp (+91 94149 45457)</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#FAF7F2] hover:bg-black/5 text-[#141A17] text-xs font-bold uppercase tracking-wider border border-black/10 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
