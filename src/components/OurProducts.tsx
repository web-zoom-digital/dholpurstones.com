"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import {
  LuX as X,
  LuMaximize2 as Maximize2,
  LuSparkles as Sparkles,
  LuArrowUpRight as ArrowUpRight,
  LuChevronLeft as ChevronLeft,
  LuChevronRight as ChevronRight,
  LuLayoutGrid as LayoutGrid,
  LuCompass as Compass,
  LuEye as Eye,
  LuShieldCheck as ShieldCheck,
  LuCircleCheck as CheckCircle2,
  LuFlame as Flame
} from "react-icons/lu";
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

export interface ProductItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "all" | "cladding" | "blocks" | "paving" | "exotic" | "export";
  categoryLabel: string;
  provenance: string;
  image: string;
  shortDesc: string;
  longDetails: string;
  shades: string;
  finishes: string[];
  dimensions: string;
  applications: string[];
  compressiveStrength: string;
  waterAbsorption: string;
  density: string;
  modulusOfRupture: string;
  highlights: string[];
  waMsg: string;
}

const products: ProductItem[] = [
  {
    id: "cnc-grooved-panels",
    number: "01",
    title: "CNC Grooved & 3D Carved Sandstone Panels",
    subtitle: "Precision Diamond Fluted Cladding & Dynamic Geometric Relief",
    category: "cladding",
    categoryLabel: "3D ELEVATION CLADDING",
    provenance: "Sikandra 8-Axis CNC Facility",
    image: "/assets/products/cnc_grooved_sandstone_panel.jpg",
    shortDesc:
      "Precision-machined geometric fluted and diamond groove sandstone panels for luxury exterior elevation facades, porticos, and accent walls.",
    longDetails:
      "Engineered from dense natural Dholpur sandstone using state-of-the-art computer-controlled diamond routing and wire profiling. The interlocking geometric relief creates a dynamic play of natural sunlight and evening architectural illumination, widely specified by leading architects for grand private villa elevations, corporate headquarters, and luxury hotel portals.",
    shades: "Dholpur Beige / Warm Cream Natural Grain / Mint",
    finishes: [
      "Precision Diamond Fluted",
      "Linear Acoustic Ribbed",
      "Antique Matte Honed",
      "Chamfered Sawn Border",
    ],
    dimensions: "600x600mm, 600x1200mm & Bespoke Modules (25mm - 50mm Thickness)",
    applications: [
      "Exterior Elevation Facades",
      "Grand Entry Portals & Porticos",
      "Double-Height Foyer Feature Walls",
      "Boundary Wall Architectural Panels",
    ],
    compressiveStrength: "68.5 MPa (Dry) / 62.1 MPa (Wet)",
    waterAbsorption: "< 1.15% by weight",
    density: "2.42 - 2.46 g/cm³",
    modulusOfRupture: "11.8 N/mm²",
    highlights: [
      "±0.5mm computer-calibrated interlocking joint tolerances",
      "Continuous geometric relief patterns across multi-story facades",
      "Naturally thermally insulating, weather & UV resistant",
      "Pre-drilled stainless steel mechanical anchoring channels",
    ],
    waMsg:
      "Hello Dholpurestones.com, I would like to inquire about CNC Grooved & 3D Carved Sandstone Panels.",
  },
  {
    id: "dholpur-red-blocks",
    number: "02",
    title: "Dholpur Red Sandstone Blocks & Gangsaw Slabs",
    subtitle: "Quarry Monoliths, Structural Columns & Heavy Calibrated Slabs",
    category: "blocks",
    categoryLabel: "QUARRY MONOLITHS & SLABS",
    provenance: "Direct Sarmathura Mines, Rajasthan",
    image: "/assets/products/dholpur_red_quarry_blocks.jpg",
    shortDesc:
      "Direct quarry-extracted monolithic Dholpur Red sandstone blocks cut with precision diamond wire saws, offering centuries of structural longevity.",
    longDetails:
      "Extracted directly from our proprietary quarry concessions in Sarmathura, Rajasthan. These massive monolithic red blocks feature ultra-fine quartz grains bound by siliceous cement. Demonstrates zero weathering, flaking, or efflorescence even after decades of exposure to extreme frost, desert heat, and torrential monsoon cycles.",
    shades: "Rich Royal Terracotta Red / Agra Crimson",
    finishes: [
      "Quarry Dressed Rough Block",
      "Diamond Wire-Sawn Calibrated",
      "Gangsaw Cut Smooth Slabs",
      "Hand-Chiseled Ashlar Masonry",
    ],
    dimensions: "Monolithic Blocks up to 3000x1500x1200mm; Slabs 20mm to 150mm+",
    applications: [
      "Monumental Temple Sanctums & Shikharas",
      "Palace Foundations & Massive Plinths",
      "Heritage Fort Restoration Projects",
      "Structural Load-Bearing Colonnades",
    ],
    compressiveStrength: "72.0 MPa (Dry) / 65.4 MPa (Wet)",
    waterAbsorption: "< 0.98% by weight",
    density: "2.48 - 2.52 g/cm³",
    modulusOfRupture: "13.2 N/mm²",
    highlights: [
      "100% mine-direct extraction with zero broker markups",
      "Contiguous geological strata ensuring flawless color uniformity",
      "Exceeds IS:3620 Indian Standard for structural natural stones",
      "Heavy gangsaw calibration for dry-joint monumental stonework",
    ],
    waMsg:
      "Hello Dholpurestones.com, I would like to inquire about Dholpur Red Sandstone Blocks & Gangsaw Slabs.",
  },
  {
    id: "dholpur-beige-tiles",
    number: "03",
    title: "Dholpur Beige & White Calibrated Tiles",
    subtitle: "Precision Sawn Paving, Pool Decks & Courtyard Flooring Tiles",
    category: "paving",
    categoryLabel: "CALIBRATED PAVING & TILES",
    provenance: "Sikandra Calibrated Plant",
    image: "/assets/products/real_dholpur_beige_tiles_quarry_yard.jpg",
    shortDesc:
      "Even-toned Dholpur Beige and Ivory White sandstone tiles with sharp chamfered calibration, naturally staying cool under intense sun.",
    longDetails:
      "Processed with rigorous ±0.5mm thickness tolerances for seamless zero-lippage paving installations. Naturally thermally insulating with high reflectance, staying pleasantly cool under barefoot traffic even in peak summer heat. Highly favored for luxury resort pool surrounds, palatial courtyards, estate walkways, and facade cladding.",
    shades: "Warm Cream Beige, Mint & Ivory White",
    finishes: [
      "Natural Cleft Split Textured",
      "Fine Diamond Sawn",
      "Velvet Satin Honed",
      "Shot-Blasted Anti-Slip (R11)",
    ],
    dimensions: "300x300, 600x300, 600x600, 900x600mm (20mm - 40mm Thickness)",
    applications: [
      "Palatial Courtyards & Atriums",
      "Resort Swimming Pool Decks",
      "Estate Garden Walkways & Patios",
      "Exterior Verandas & Cladding",
    ],
    compressiveStrength: "66.8 MPa (Dry) / 61.0 MPa (Wet)",
    waterAbsorption: "< 1.10% by weight",
    density: "2.44 - 2.48 g/cm³",
    modulusOfRupture: "11.5 N/mm²",
    highlights: [
      "High solar reflectance index — stays comfortably cool underfoot",
      "Non-slip wet traction rating ideal for poolside paving",
      "Strict sorting by color tones — zero unsightly batch variation",
      "Precision chamfered edges for razor-sharp modern joint lines",
    ],
    waMsg:
      "Hello Dholpurestones.com, I would like to inquire about Dholpur Beige & White Calibrated Tiles.",
  },
  {
    id: "dholpur-red-slabs",
    number: "04",
    title: "Calibrated Red Sandstone Architectural Paving",
    subtitle: "Heavy-Duty Civic Plazas, Temple Mandapams & Driveway Copings",
    category: "paving",
    categoryLabel: "HIGH-TRAFFIC CIVIC PAVING",
    provenance: "Sarmathura & Sikandra Yards",
    image: "/assets/products/dholpur_red_sandstone_slabs.jpg",
    shortDesc:
      "Heavy-duty precision-cut Red Sandstone paving slabs built to endure harsh climate cycles and continuous heavy footfall without degradation.",
    longDetails:
      "Engineered from homogeneous Dholpur Red sandstone strata. Demonstrates exceptional compressive strength, minimal water absorption, and a slip-resistant natural matte surface. Extensively used in civic plazas, temple mandapams, and luxury estate driveways.",
    shades: "Deep Royal Dholpur Red with Uniform Hue",
    finishes: [
      "Smooth Diamond Sawn",
      "Fine Antique Honed",
      "Thermal Flamed Anti-Skid",
      "Antique Tumbled & Brushed",
    ],
    dimensions: "600x600, 600x900, 1200x600mm (25mm to 60mm Thickness)",
    applications: [
      "Civic Public Plazas & Pedestrian Boulevards",
      "Temple Mandapas & Parikrama Pathways",
      "High-Traffic Estate Driveways & Ramps",
      "Massive Boundary Copings & Bullnosed Steps",
    ],
    compressiveStrength: "70.4 MPa (Dry) / 63.8 MPa (Wet)",
    waterAbsorption: "< 1.05% by weight",
    density: "2.47 - 2.51 g/cm³",
    modulusOfRupture: "12.6 N/mm²",
    highlights: [
      "Heavy load-bearing capacity suitable for vehicular driveways",
      "High silica quartz density naturally resisting oil & stain absorption",
      "Slip-resistant R12 textured surface for all-weather public safety",
      "Precision calibrated thickness for uniform sand or mortar bed laying",
    ],
    waMsg:
      "Hello Dholpurestones.com, I would like to inquire about Calibrated Red Sandstone Architectural Paving Slabs.",
  },
  {
    id: "dholpur-chocolate-teakwood",
    number: "05",
    title: "Dholpur Chocolate & Teakwood Sandstone",
    subtitle: "Organic Woodgrain Ripples & Rich Earthy Tones for Statement Surfaces",
    category: "exotic",
    categoryLabel: "EXOTIC VEINED QUARTZITE",
    provenance: "Special Quarry Vein Concession",
    image: "/assets/products/dholpur_chocolate_teakwood.jpg",
    shortDesc:
      "Exquisite natural sandstone featuring flowing organic woodgrain ripple veining and rich chocolate earth tones for statement surfaces.",
    longDetails:
      "A prized geological anomaly mined from select quarry strata. The natural undulating swirls mimic rich teak timber grain while delivering the indestructible durability of dense silica quartz. An architect's favorite for luxury fireplace surrounds, master bathroom feature walls, and interior portals.",
    shades: "Natural Teakwood Grain, Warm Chocolate & Earth Brown",
    finishes: [
      "Velvet Satin Honed",
      "Precision Smooth Sawn",
      "Brushed Antique Leathered",
      "Bookmatched Polished Pair",
    ],
    dimensions: "Calibrated Tiles & Gangsaw Slabs (20mm - 30mm), Custom Modules",
    applications: [
      "Luxury Accent Walls & Feature Panels",
      "Palatial Fireplace Mantels & Surrounds",
      "Master Bathroom & Spa Stone Cladding",
      "Custom Vanities & Hospitality Countertops",
    ],
    compressiveStrength: "67.5 MPa (Dry) / 61.2 MPa (Wet)",
    waterAbsorption: "< 1.12% by weight",
    density: "2.45 - 2.49 g/cm³",
    modulusOfRupture: "11.7 N/mm²",
    highlights: [
      "Authentic natural woodgrain veining — no two slabs are ever identical",
      "Velvety tactile finish that resists staining and moisture penetration",
      "High flexural strength suitable for large-format vertical installations",
      "Bespoke bookmatched pairs available upon request",
    ],
    waMsg:
      "Hello Dholpurestones.com, I would like to inquire about Dholpur Chocolate & Teakwood Sandstone.",
  },
  {
    id: "sandstone-bulk-exports",
    number: "06",
    title: "Industrial Crated Bundles & Containerized Exports",
    subtitle: "Global Sea-Worthy ISPM-15 Timber Packaging for Wholesale Supply",
    category: "export",
    categoryLabel: "ISPM-15 EXPORT CRATING",
    provenance: "Central Export Logistics Hub & Mundra Port",
    image: "/assets/products/real_sandstone_export_crating_yard.jpg",
    shortDesc:
      "Industrial-scale inventory of project-calibrated sandstone bundles packed into heavy-duty ISPM-15 fumigated timber crates for global transit.",
    longDetails:
      "Maintained under certified storage and processing yards. Each container load is inspected for squareness, uniform thickness, and surface consistency before being packed into ISPM-15 certified seaworthy fumigated wooden crates with moisture-barrier wrapping and corner guards for worldwide shipping.",
    shades: "Full Quarry Assortment (Red, Beige, White, Chocolate, Teakwood)",
    finishes: [
      "Customized to Project Specifications",
      "Sawn, Honed, Flamed, Shot-Blasted",
      "Barcoded & Pallet-Sorted",
      "Moisture-Sealed Timber Crated",
    ],
    dimensions: "Standard Bundles, 20ft Container Loads, Custom Project Pallets",
    applications: [
      "International Natural Stone Wholesalers",
      "Turnkey Monumental Overseas Consignments",
      "Large-Scale Commercial Infrastructure",
      "Architectural Specification Projects",
    ],
    compressiveStrength: "IS:3620 Certified Prior to Dispatch",
    waterAbsorption: "Lab Tested Quality Documentation",
    density: "Heavy Quartz Structural Grade",
    modulusOfRupture: "Strict Batch Quality Clearance",
    highlights: [
      "ISPM-15 heat-treated, fumigated timber crates with steel strapping",
      "Foam cushion spacers and corner edge protectors on all pieces",
      "Barcode tagging with itemized digital packing lists per container",
      "Direct logistics network to Mundra & Kandla seaports and door delivery",
    ],
    waMsg:
      "Hello Dholpurestones.com, I would like to inquire about Industrial Crated Bundles & Bulk Container Exports.",
  },
];

const categoryTabs = [
  { id: "all", label: "All Products" },
  { id: "cladding", label: "3D CNC & Elevation" },
  { id: "blocks", label: "Quarry Blocks & Slabs" },
  { id: "paving", label: "Paving & Tiles" },
  { id: "exotic", label: "Exotic Teakwood" },
  { id: "export", label: "Global Export Crates" },
];

const tickerHighlights = [
  "500,000+ SQ.FT MONTHLY QUARRY SAWN CAPACITY",
  "IS:3620 CERTIFIED COMPRESSIVE STRENGTH >68 MPA",
  "100% DIRECT QUARRY EXTRACTION FROM SARMATHURA & SIKANDRA",
  "8-AXIS HIGH PRECISION CNC FLUTING & 3D RELIEF (±0.5MM)",
  "20+ NATURAL STONE COLOURS & WEATHERPROOF FINISHES",
  "ISPM-15 EXPORT CERTIFIED CRATING TO 40+ PORTS GLOBALLY",
  "DIRECT MINE OWNER WHOLESALE PRICING & ZERO INTERMEDIARIES",
];

// Interactive Spotlight Card with Mouse-Move Glow & Multi-Spec Tabs
function SpotlightProductCard({
  product,
  idx,
  onOpenModal,
}: {
  product: ProductItem;
  idx: number;
  onOpenModal: (p: ProductItem) => void;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCardTab, setActiveCardTab] = useState<"specs" | "finishes" | "applications">("specs");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <AnimDiv delay={idx * 60}>
      <div
        onMouseMove={handleMouseMove}
        onClick={() => onOpenModal(product)}
        className="group relative rounded-2xl overflow-hidden border border-black/8 hover:border-[#C5A15B]/70 bg-[#F7F4EB] transition-all duration-400 hover:shadow-2xl cursor-pointer flex flex-col h-full gcl-card-glow"
      >
        {/* Dynamic 3D Cursor Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(194, 155, 56, 0.16), transparent 60%)`,
          }}
        />

        {/* Shimmer Light Beam on Hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A15B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

        {/* Architectural Precision Crosshair Markers */}
        <span className="absolute top-2 left-2 text-[10px] text-[#C5A15B] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
          +
        </span>
        <span className="absolute top-2 right-2 text-[10px] text-[#C5A15B] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
          +
        </span>
        <span className="absolute bottom-2 left-2 text-[10px] text-[#C5A15B] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
          +
        </span>
        <span className="absolute bottom-2 right-2 text-[10px] text-[#C5A15B] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
          +
        </span>

        {/* Image Container with Ken Burns Zoom & Live Provenance Beacon */}
        <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-[#F7F4EB] shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Category Tag with Gilded Sparkle */}
          <div className="absolute top-3 left-3 bg-[#123D32]/85 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/15 z-20 shadow-md">
            <span className="text-[9px] font-bold text-[#C5A15B] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#C5A15B]" />
              {product.categoryLabel}
            </span>
          </div>

          {/* Giant Watermark Product Index */}
          <div className="absolute top-1 right-3 font-['Cinzel',serif] text-4xl sm:text-5xl font-black text-white/30 select-none pointer-events-none z-10 group-hover:text-[#C5A15B]/50 transition-colors">
            {product.number}
          </div>

          {/* Expand Image Button */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm p-1.5 sm:p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:bg-[#C5A15B] hover:text-[#123D32] shadow-lg">
            <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>

          {/* Pulsing Location / Provenance Radar Beacon */}
          <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-white/95 bg-[#123D32]/80 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-white/10 z-20 shadow-md">
            <span className="relative flex h-2 w-2 mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A15B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A15B]" />
            </span>
            <span className="truncate max-w-[200px] sm:max-w-[220px]">{product.provenance}</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between relative z-20">
          <div>
            <h3 className="font-['Cinzel',serif] text-sm sm:text-lg font-bold text-[#1F2A24] uppercase tracking-wider mb-1 sm:mb-1.5 group-hover:text-[#123D32] transition-colors leading-snug">
              {product.title}
            </h3>

            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#C5A15B] font-semibold mb-3">
              {product.subtitle}
            </p>

            {/* Interactive Mini-Tab Selector for Quick Spec Inspection */}
            <div
              className="flex items-center gap-1 p-1 bg-white rounded-lg border border-black/6 mb-3 shadow-2xs"
              onClick={(e) => e.stopPropagation()}
            >
              {[
                { id: "specs", label: "Specs" },
                { id: "finishes", label: "Finishes" },
                { id: "applications", label: "Applications" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCardTab(tab.id as "specs" | "finishes" | "applications")}
                  className={`flex-1 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    activeCardTab === tab.id
                      ? "bg-[#123D32] text-white shadow-xs"
                      : "text-[#6B7C73] hover:text-[#1F2A24]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Card Tab Content */}
            <div className="min-h-[76px]">
              {activeCardTab === "specs" && (
                <div className="space-y-1.5 text-[11px] p-2.5 rounded-lg bg-white border border-black/6 shadow-2xs">
                  <div className="flex items-start justify-between gap-1">
                    <span className="text-[#6B7C73] font-medium shrink-0">Strength:</span>
                    <span className="text-[#123D32] font-bold font-mono text-right truncate">
                      {product.compressiveStrength}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-1">
                    <span className="text-[#6B7C73] font-medium shrink-0">Absorption:</span>
                    <span className="text-[#1F2A24] font-semibold font-mono text-right">
                      {product.waterAbsorption}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-1">
                    <span className="text-[#6B7C73] font-medium shrink-0">Sizes:</span>
                    <span className="text-[#1F2A24] font-semibold text-right truncate">
                      {product.dimensions}
                    </span>
                  </div>
                </div>
              )}

              {activeCardTab === "finishes" && (
                <ul className="space-y-1 text-[11px] text-[#6B7C73]">
                  {product.finishes.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5 truncate">
                      <CheckCircle2 className="w-3 h-3 text-[#123D32] shrink-0" />
                      <span className="truncate">{f}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeCardTab === "applications" && (
                <ul className="space-y-1 text-[11px] text-[#6B7C73]">
                  {product.applications.slice(0, 3).map((app, i) => (
                    <li key={i} className="flex items-center gap-1.5 truncate">
                      <CheckCircle2 className="w-3 h-3 text-[#C5A15B] shrink-0" />
                      <span className="truncate">{app}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Bottom Action Row */}
          <div className="pt-4 mt-2 border-t border-black/8 flex items-center justify-between">
            <span className="text-xs font-bold text-[#123D32] group-hover:text-[#C5A15B] flex items-center gap-1 transition-colors">
              <span>Inspect Dossier</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#123D32] group-hover:text-[#C5A15B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>

            <a
              href={`https://wa.me/919414945457?text=${encodeURIComponent(product.waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123D32] hover:text-[#25D366] transition-colors p-1.5 rounded-lg hover:bg-black/5"
              title="Inquire about this product on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </AnimDiv>
  );
}

export default function OurProducts() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeModal, setActiveModal] = useState<ProductItem | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "spotlight">("grid");
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProducts = useMemo(() => {
    if (activeTab === "all") return products;
    return products.filter((p) => p.category === activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  };

  const activeSlideProduct = filteredProducts[currentSlide] || filteredProducts[0];

  return (
    <section
      id="products"
      className="bg-[#F7F4EB] py-10 sm:py-20 border-b border-black/6 relative overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* =========================================================================
          MOTION GRAPHIC BACKGROUND: Geometric Blueprint Grid & Rotating Sacred Yantras
          ========================================================================= */}
      {/* Subtle Dotted Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A15B_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      {/* Floating Animated Ambient Glow Orbs */}
      <div className="absolute -top-24 right-10 w-[550px] h-[550px] bg-[#C5A15B]/6 rounded-full blur-[140px] pointer-events-none animate-ambient-float-1" />
      <div className="absolute -bottom-24 left-10 w-[500px] h-[500px] bg-[#123D32]/6 rounded-full blur-[130px] pointer-events-none animate-ambient-float-2" />

      {/* Rotating Sacred Geometry Mandalas / Yantras in Background */}
      <div className="absolute -top-32 -left-32 w-[460px] h-[460px] opacity-[0.04] pointer-events-none animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-[#C5A15B]" strokeWidth="0.8">
          <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="60" strokeDasharray="6 4" />
          <polygon points="100,10 190,150 10,150" />
          <polygon points="100,190 10,50 190,50" />
          <rect x="35" y="35" width="130" height="130" transform="rotate(45 100 100)" />
        </svg>
      </div>

      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] opacity-[0.035] pointer-events-none animate-spin-reverse">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-[#123D32]" strokeWidth="0.8">
          <circle cx="100" cy="100" r="95" />
          <circle cx="100" cy="100" r="75" strokeDasharray="4 4" />
          <polygon points="100,5 180,175 20,175" />
          <polygon points="100,195 20,25 180,25" />
          <circle cx="100" cy="100" r="45" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Label */}
        <AnimDiv className="flex items-center justify-between pb-3 border-b border-black/8 mb-8 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A15B] animate-pulse" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#1F2A24] uppercase">
              DHOLPURESTONES.COM &bull; CORE PRODUCTION &bull; ESTD. 1953
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle: Grid vs Spotlight */}
            <div className="hidden sm:flex items-center p-1 bg-[#F7F4EB] rounded-lg border border-black/8 text-xs font-semibold text-[#1F2A24]">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#123D32] text-white shadow-xs"
                    : "text-[#6B7C73] hover:text-[#1F2A24]"
                }`}
                title="Grid View (3x2)"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold">Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("spotlight")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === "spotlight"
                    ? "bg-[#123D32] text-white shadow-xs"
                    : "text-[#6B7C73] hover:text-[#1F2A24]"
                }`}
                title="Cinematic Spotlight View"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold">Spotlight</span>
              </button>
            </div>

            <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C5A15B] tracking-widest">
              05
            </span>
          </div>
        </AnimDiv>

        {/* Section Title & Description from User */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <AnimDiv delay={0} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A15B]/10 border border-[#C5A15B]/25 text-[#C5A15B] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Direct Mine Extraction &amp; Factory Processing</span>
            </div>
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-5xl font-bold text-[#1F2A24] uppercase tracking-wide mb-3">
              Our Products
            </h2>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl lg:text-3xl font-bold text-[#C5A15B] uppercase tracking-wider mb-3">
              Your Trusted Sandstone Manufacturer, Supplier &amp; Exporter
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C5A15B] via-[#C5A15B] to-transparent rounded-full mb-4" />
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#6B7C73] leading-relaxed">
              We are one of the leading manufacturers and supplier of optimum quality Natural Sandstones. These products are renowned in the market for their elegant design and color combination. Our products are available in a wide range of attractive color, shade and dimension.
            </p>
          </AnimDiv>

          {/* Key Metric Highlights with Gilded Accents */}
          <AnimDiv delay={100} className="grid grid-cols-3 gap-2 sm:gap-4 shrink-0 w-full lg:w-auto">
            <div className="bg-[#F7F4EB] border border-black/8 rounded-xl sm:rounded-2xl px-2.5 sm:px-5 py-2.5 sm:py-3 shadow-xs hover:border-[#C5A15B]/60 transition-colors text-center sm:text-left">
              <span className="block font-['Cinzel',serif] text-base sm:text-2xl font-bold text-[#1F2A24]">
                70+ Years
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#6B7C73] font-semibold uppercase tracking-wider block">
                Since 1953
              </span>
            </div>
            <div className="bg-[#F7F4EB] border border-black/8 rounded-xl sm:rounded-2xl px-2.5 sm:px-5 py-2.5 sm:py-3 shadow-xs hover:border-[#C5A15B]/60 transition-colors text-center sm:text-left">
              <span className="block font-['Cinzel',serif] text-base sm:text-2xl font-bold text-[#1F2A24]">
                500k+
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#6B7C73] font-semibold uppercase tracking-wider block">
                Sq.Ft / Mo
              </span>
            </div>
            <div className="bg-[#F7F4EB] border border-black/8 rounded-xl sm:rounded-2xl px-2.5 sm:px-5 py-2.5 sm:py-3 shadow-xs hover:border-[#C5A15B]/60 transition-colors text-center sm:text-left">
              <span className="block font-['Cinzel',serif] text-base sm:text-2xl font-bold text-[#1F2A24]">
                IS:3620
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#6B7C73] font-semibold uppercase tracking-wider block">
                Certified
              </span>
            </div>
          </AnimDiv>
        </div>

        {/* =========================================================================
            MOTION GRAPHIC INFINITE MARQUEE TICKER (Live Architectural Strata Ribbon)
            ========================================================================= */}
        <AnimDiv delay={120} className="mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-[#F7F4EB] via-white to-[#F7F4EB] border border-black/8 py-2.5 shadow-xs">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
            {[...tickerHighlights, ...tickerHighlights].map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 text-[11px] font-bold text-[#1F2A24] uppercase tracking-wider shrink-0">
                <span className="text-[#C5A15B] text-xs">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </AnimDiv>

        {/* Filter Navigation Tabs — horizontal scroll on mobile */}
        <AnimDiv delay={150} className="mb-8 sm:mb-10">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none flex-nowrap -mx-1 px-1">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setCurrentSlide(0);
                  }}
                  className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 border cursor-pointer whitespace-nowrap shrink-0 ${
                    activeTab === tab.id
                      ? "bg-[#123D32] text-white border-[#123D32] shadow-md shadow-[#123D32]/25"
                      : "bg-[#F7F4EB] text-[#6B7C73] border-black/8 hover:border-[#C5A15B] hover:text-[#1F2A24] hover:bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <span className="text-xs text-[#6B7C73] font-semibold hidden md:inline shrink-0">
              Showing {filteredProducts.length} Factory &amp; Quarry Products
            </span>
          </div>
        </AnimDiv>

        {/* =========================================================================
            VIEW MODE 1: 6-CARD BALANCED SPOTLIGHT GRID (3x2 Architecture)
            ========================================================================= */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
            {filteredProducts.map((product, idx) => (
              <SpotlightProductCard
                key={product.id}
                product={product}
                idx={idx}
                onOpenModal={(p) => setActiveModal(p)}
              />
            ))}
          </div>
        )}

        {/* =========================================================================
            VIEW MODE 2: CINEMATIC SPOTLIGHT HERO SLIDER
            ========================================================================= */}
        {viewMode === "spotlight" && activeSlideProduct && (
          <AnimDiv delay={180} className="mb-12 sm:mb-16">
            <div className="bg-[#F7F4EB] rounded-3xl overflow-hidden border border-black/8 shadow-2xl p-4 sm:p-8 relative">
              {/* Giant Watermark Background Number */}
              <div className="absolute top-2 right-6 font-['Cinzel',serif] text-8xl font-black text-black/[0.04] select-none pointer-events-none">
                {activeSlideProduct.number}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left: Cinematic Full-Res Display */}
                <div
                  onClick={() => setActiveModal(activeSlideProduct)}
                  className="lg:col-span-7 relative h-80 sm:h-[460px] rounded-2xl overflow-hidden bg-[#123D32] cursor-pointer group shadow-xl"
                >
                  <Image
                    src={activeSlideProduct.image}
                    alt={activeSlideProduct.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 bg-[#123D32]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    <span className="text-[10px] font-bold text-[#C5A15B] uppercase tracking-widest flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
                      {activeSlideProduct.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#123D32]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white text-xs font-medium">
                    <span className="relative flex h-2 w-2 mr-0.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A15B] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A15B]" />
                    </span>
                    <span>{activeSlideProduct.provenance}</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white group-hover:bg-[#C5A15B] group-hover:text-[#123D32] transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Right: Technical Product Dossier Details */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#C5A15B] uppercase tracking-[0.2em]">
                        Product Dossier &bull; {activeSlideProduct.number} of 06
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={prevSlide}
                          className="w-8 h-8 rounded-full border border-black/10 bg-white hover:bg-[#123D32] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
                          aria-label="Previous Product"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={nextSlide}
                          className="w-8 h-8 rounded-full border border-black/10 bg-white hover:bg-[#123D32] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
                          aria-label="Next Product"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#1F2A24] uppercase tracking-wider mb-2">
                      {activeSlideProduct.title}
                    </h3>

                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-semibold text-[#C5A15B] mb-4">
                      {activeSlideProduct.subtitle}
                    </p>

                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#6B7C73] leading-relaxed mb-5">
                      {activeSlideProduct.longDetails}
                    </p>

                    {/* Laboratory Test Specifications */}
                    <div className="p-3.5 rounded-xl bg-white border border-black/8 mb-5 shadow-2xs">
                      <span className="text-[10px] font-bold text-[#123D32] uppercase tracking-widest block mb-1">
                        Laboratory Tested Physical Specifications
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono font-medium text-[#1F2A24] mt-1">
                        <div>
                          <span className="text-[#6B7C73] text-[10px] block">Compressive:</span>
                          <span className="font-bold text-[#123D32]">{activeSlideProduct.compressiveStrength}</span>
                        </div>
                        <div>
                          <span className="text-[#6B7C73] text-[10px] block">Water Absorption:</span>
                          <span className="font-bold">{activeSlideProduct.waterAbsorption}</span>
                        </div>
                        <div>
                          <span className="text-[#6B7C73] text-[10px] block">Density:</span>
                          <span>{activeSlideProduct.density}</span>
                        </div>
                        <div>
                          <span className="text-[#6B7C73] text-[10px] block">Modulus of Rupture:</span>
                          <span>{activeSlideProduct.modulusOfRupture}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {activeSlideProduct.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-[#1F2A24] p-2 rounded-lg bg-white border border-black/5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#123D32] shrink-0 mt-0.5" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-black/8 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveModal(activeSlideProduct)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#123D32] hover:bg-[#123D32] uppercase px-5 py-3 rounded-full transition-all shadow-md cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Full Technical Blueprint</span>
                    </button>

                    <a
                      href={`https://wa.me/919414945457?text=${encodeURIComponent(activeSlideProduct.waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#123D32] bg-[#25D366] hover:bg-[#20ba59] hover:text-white uppercase px-5 py-3 rounded-full transition-all shadow-md"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" size={16} />
                      <span>WhatsApp Quote</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Thumbnails Navigation Strip */}
              <div className="mt-6 pt-4 border-t border-black/8 flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                {filteredProducts.map((prod, i) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => setCurrentSlide(i)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      currentSlide === i
                        ? "border-[#123D32] scale-105 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute bottom-1 right-1 text-[9px] font-bold text-white bg-black/70 px-1 rounded">
                      {prod.number}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </AnimDiv>
        )}

        {/* =========================================================================
            ADVANCED MOTION GRAPHIC CALLOUT: Custom Quarry Slabs & Sample Kit
            ========================================================================= */}
        <AnimDiv delay={300}>
          <div className="bg-gradient-to-br from-[#123D32] via-[#123D32] to-[#0A261F] rounded-3xl p-6 sm:p-10 border border-[#C5A15B]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden text-white group">
            {/* Ambient Background Gold Beam Sweep */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-[#C5A15B]/15 to-transparent animate-beam-sweep pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#C5A15B]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl text-center lg:text-left relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#C5A15B]/20 border border-[#C5A15B]/40 px-3.5 py-1 rounded-full text-[10px] font-bold text-[#F7F4EB] uppercase tracking-widest mb-3 shadow-xs">
                <Flame className="w-3.5 h-3.5 text-[#C5A15B]" />
                <span>Custom Fabrication &bull; Free Swatch Box Box</span>
              </div>
              <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wider mb-2">
                Need Custom Sawn Slabs, Architectural Cladding, or Bulk Container Loads?
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/80 leading-relaxed">
                Direct quarry extraction from our Sarmathura mines and cutting-edge 8-axis CNC processing allow us to fulfill any custom color, thickness calibration, or surface finish requirement for landmark projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 relative z-10">
              <a
                href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20discuss%20custom%20sandstone%20orders%20and%20request%20samples."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-[#123D32] hover:bg-white font-bold text-xs uppercase px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#123D32]" size={16} />
                <span>Request Custom Quote &amp; Samples</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 active:scale-95 shadow-md"
              >
                <span>Consult Arvind Garg</span>
              </a>
            </div>
          </div>
        </AnimDiv>

        {/* Running Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-semibold text-[#6B7C73] uppercase tracking-wider text-center sm:text-left">
          <span>Natural Sandstones &bull; Mines &bull; Manufacturing &bull; Export &bull; Contracting</span>
          <span className="font-['Cinzel',serif] text-[#1F2A24]">DHOLPURESTONES.COM</span>
        </div>
      </div>

      {/* =========================================================================
          HIGH-RESOLUTION MODAL LIGHTBOX / TECHNICAL SPEC SHEET
          ========================================================================= */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[#1E5A46] border border-white/10 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto text-white shadow-2xl relative scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-[#C5A15B] text-white flex items-center justify-center transition-colors"
              aria-label="Close Product Details"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-56 sm:h-80 w-full bg-[#123D32]">
              <Image
                src={activeModal.image}
                alt={activeModal.title}
                fill
                sizes="(max-width:768px) 100vw, 768px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E5A46] via-transparent to-black/30" />

              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
                <span className="text-[9.5px] sm:text-[10px] font-bold text-[#C5A15B] uppercase tracking-[0.2em] bg-black/60 px-2.5 py-0.5 rounded-md backdrop-blur-sm border border-white/10 inline-block mb-1">
                  {activeModal.categoryLabel} &bull; {activeModal.number}
                </span>
                <h3 className="font-['Cinzel',serif] text-base sm:text-2xl font-bold text-white uppercase tracking-wider leading-snug">
                  {activeModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Details Content */}
            <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {activeModal.longDetails}
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5">
                  <span className="text-[#C5A15B] font-bold text-[10px] uppercase tracking-wider block mb-1">
                    Color &amp; Natural Tones:
                  </span>
                  <span className="text-white font-medium">{activeModal.shades}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5">
                  <span className="text-[#C5A15B] font-bold text-[10px] uppercase tracking-wider block mb-1">
                    Surface Finishes Available:
                  </span>
                  <span className="text-white font-medium">{activeModal.finishes.join(", ")}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5">
                  <span className="text-[#C5A15B] font-bold text-[10px] uppercase tracking-wider block mb-1">
                    Standard &amp; Custom Sizes:
                  </span>
                  <span className="text-white font-mono">{activeModal.dimensions}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5">
                  <span className="text-[#C5A15B] font-bold text-[10px] uppercase tracking-wider block mb-1">
                    Compressive Strength &amp; Density:
                  </span>
                  <span className="text-white font-mono">
                    {activeModal.compressiveStrength} &bull; {activeModal.density}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 sm:col-span-2">
                  <span className="text-[#C5A15B] font-bold text-[10px] uppercase tracking-wider block mb-1">
                    Recommended Architectural Typologies:
                  </span>
                  <span className="text-white font-medium">{activeModal.applications.join(" • ")}</span>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <span className="text-[10px] font-bold text-[#C5A15B] uppercase tracking-widest block mb-2">
                  Key Technical Advantages:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModal.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A15B] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="text-left w-full sm:w-auto">
                  <span className="text-[11px] text-white/60 block">
                    Direct Mine Provenance &bull; Arvind Garg
                  </span>
                  <span className="text-xs font-bold text-[#C5A15B]">
                    +91 94149 45457 &bull; Wholesale Factory Quotation
                  </span>
                </div>
                <a
                  href={`https://wa.me/919414945457?text=${encodeURIComponent(activeModal.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-[#123D32] font-bold text-xs uppercase px-6 py-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#123D32]" size={16} />
                  <span>Request Product Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
