"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import {
  X,
  Maximize2,
  Sparkles,
  MapPin,
  Award,
  CheckCircle2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Compass,
  Eye,
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

export interface SignatureProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "all" | "resorts" | "spiritual" | "estates" | "commercial";
  categoryLabel: string;
  location: string;
  stoneType: string;
  scope: string;
  details: string;
  highlights: string[];
  image: string;
  waMsg: string;
}

const signatureProjects: SignatureProject[] = [
  {
    id: "imperial-staircase",
    number: "01",
    title: "Imperial Grand Staircase & Waterjet Marble Inlay",
    subtitle: "Turnkey Palatial Stairway with Concealed Warm LED & Floral Medallion",
    category: "estates",
    categoryLabel: "LUXURY PRIVATE PALACE",
    location: "South Delhi / DLF Golf Links Estate",
    stoneType: "Italian Botticino Marble, Composite Inlays & Semi-Precious Accents",
    scope:
      "Curved dual imperial staircase with concealed warm LED under-step illumination, custom hand-forged brass filigree balustrade, and intricate floral Pietra Dura waterjet marble medallion floor carpet.",
    details:
      "A masterpiece of high-precision residential stonework. Every marble riser and tread was CNC-milled with integrated light channels for floating ambient radiance. The grand hall floor features a custom 8-axis waterjet floral medallion carpet in Italian Botticino marble accented with imported dark stone and semi-precious stone inlays.",
    highlights: [
      "Concealed warm LED under-tread illumination",
      "Hand-crafted forged brass filigree balustrade",
      "Bespoke Pietra Dura waterjet floral medallion carpet",
      "Mirror-polished Italian Botticino marble flooring",
    ],
    image: "/assets/projects/signature_staircase_inlay.jpg",
    waMsg:
      "Hello Dholpurestones.com, I would like to inquire about the Imperial Grand Staircase & Waterjet Marble Inlay project.",
  },
  {
    id: "palace-resort",
    number: "02",
    title: "Royal Sandstone Palace Resort & Jali Pavilions",
    subtitle: "Monolithic Dholpur Columns, Geometric Jali Balconies & Water Pool",
    category: "resorts",
    categoryLabel: "HERITAGE RESORT & PALACE",
    location: "Jaipur - Udaipur Heritage Corridor, Rajasthan",
    stoneType: "Natural Dholpur Beige Sandstone, Hand-Carved Jali, Sawn Cornices",
    scope:
      "Monumental palace facade spanning over 40,000 sq.ft of hand-carved Dholpur Beige sandstone, monolithic pillars with elephant friezes, ornamental chhatri pavilions, and mirror water reflection pool.",
    details:
      "Engineered from our own Sarmathura quarries, this luxury royal resort blends Rajputana architectural grandeur with contemporary structural engineering. Handcrafted jali lattice screens filter desert sunlight into intricate lace-like shadows across palatial corridors.",
    highlights: [
      "Monolithic elephant-carved sandstone columns",
      "Perforated floral and geometric jali screens",
      "Traditional ornamental chhatri pavilions",
      "Over 40,000 sq.ft sawn sandstone facade cladding",
    ],
    image: "/assets/projects/signature_palace_resort.jpg",
    waMsg:
      "Hello Dholpurestones.com, I would like to inquire about the Royal Sandstone Palace Resort project.",
  },
  {
    id: "temple-mandapam",
    number: "03",
    title: "Monumental Temple Sanctum & Monolithic Mandapam",
    subtitle: "Millennial Interlocking Sandstone Masonry Following Nagara Shastras",
    category: "spiritual",
    categoryLabel: "SPIRITUAL MONUMENT & MANDAPAM",
    location: "Ayodhya - Mathura Spiritual Corridor",
    stoneType: "Dholpur Red Sandstone, Bansi Paharpur Pink Strata, Carved Blocks",
    scope:
      "Multi-tiered stone shikhara, vaulted stone parikrama walkway, monumental pillars with Vedic mythological reliefs, and open-air courtyard paving with thermal non-slip finish.",
    details:
      "Constructed entirely with monolithic stone block interlocking without structural steel reinforcement for timeless millennial durability. Crafted by generations of master stone masons following traditional Vastu and Shilpa Shastra proportions.",
    highlights: [
      "Monolithic dry-joint interlocking sandstone blocks",
      "Elaborate hand-carved lotus capitals & deity friezes",
      "Multi-tiered sculpted Nagara style stone shikhara",
      "Thermal-resistant textured stone courtyard paving",
    ],
    image: "/assets/projects/signature_temple_mandapam.jpg",
    waMsg:
      "Hello Dholpurestones.com, I would like to inquire about the Monumental Temple Sanctum & Mandapam project.",
  },
  {
    id: "monumental-facade",
    number: "04",
    title: "Neoclassical Heritage Facade & Fluted Colonnade",
    subtitle: "Monolithic Dholpur Sandstone Columns, Carved Pediment & Royal Portico",
    category: "estates",
    categoryLabel: "PALATIAL ESTATE FACADE",
    location: "Golf Course Road / Diplomatic Enclave",
    stoneType: "Dholpur Beige & Royal Red Sandstone, Hand-Carved Capital Blocks",
    scope:
      "Monumental neoclassical palace exterior featuring 8 fluted monolithic sandstone columns, deep relief pediment crest carving, arched ceremonial portico with cantilevered Jharokha balcony, and cobblestone sandstone courtyard.",
    details:
      "A grand palatial estate exterior combining European neoclassical symmetry with intricate Indian stone carving traditions. The 8 colossal fluted Corinthian pillars were precision turned from single-quarry monolithic blocks. Above the arched portico, a hand-sculpted royal pediment and traditional Jharokha serve as iconic architectural centerpieces.",
    highlights: [
      "8 monolithic fluted Corinthian sandstone columns",
      "Hand-chiseled high-relief mythological pediment crest",
      "Cantilevered stone Jharokha balcony with latticework",
      "Calibrated sandstone driveway with carved stone bollards",
    ],
    image: "/assets/projects/signature_monumental_facade.jpg",
    waMsg:
      "Hello Dholpurestones.com, I would like to inquire about the Neoclassical Heritage Facade & Colonnade project.",
  },
  {
    id: "estate-fountain",
    number: "05",
    title: "Estate Landscape Courtyard & Tiered Sandstone Fountain",
    subtitle: "Multi-Tier Lotus Water Cascade with Illuminated Sandstone Lanterns",
    category: "estates",
    categoryLabel: "LANDSCAPE & ROYAL COURTYARD",
    location: "Lutyens Bungalow Zone / Royal Garden Estate",
    scope:
      "Central multi-tiered lotus fountain carved from monolithic Dholpur sandstone, surrounded by calibrated flagstone patio tiles, carved balustrades, and integrated ambient sandstone lanterns.",
    details:
      "An idyllic European-meets-Indian neoclassical garden courtyard. Features a recirculating water cascade over hand-carved acanthus stone tiers. The surrounding grounds are paved with calibrated, thermal-resistant Dholpur sandstone pavers with antique-brushed borders.",
    stoneType: "Calibrated Dholpur Beige Sawn Paving, Monolithic Carved Fountain",
    highlights: [
      "3-tier hand-carved lotus water cascade",
      "Precision-calibrated non-slip sandstone patio paving",
      "Ambient warm-lit sandstone garden lantern posts",
      "Monolithic stone balustrades with floral piers",
    ],
    image: "/assets/projects/signature_estate_fountain.jpg",
    waMsg:
      "Hello Dholpurestones.com, I would like to inquire about the Estate Landscape Courtyard & Tiered Fountain project.",
  },
  {
    id: "atrium-cladding",
    number: "06",
    title: "5-Star Hotel Grand Atrium & Bookmatched Stone Cladding",
    subtitle: "Triple-Height Botticino Marble Panels & CNC Grooved Sandstone Walls",
    category: "commercial",
    categoryLabel: "5-STAR LUXURY HOSPITALITY",
    location: "Mumbai BKC / New Delhi Aerocity",
    stoneType: "Bookmatched Italian Botticino Marble, CNC Grooved Beige Sandstone",
    scope:
      "Triple-height lobby atrium cladded with continuous bookmatched Italian Botticino marble panels seamlessly paired with precision CNC-grooved beige sandstone acoustic feature walls and monolithic stone reception.",
    details:
      "The pinnacle of contemporary luxury hospitality design. Large-format bookmatched marble panels create continuous butterfly natural veins up to 9 meters high, counterbalanced by tactile geometric grooved sandstone textures and warm architectural backlighting.",
    highlights: [
      "Triple-height bookmatched Italian marble wall cladding",
      "Precision CNC linear grooved acoustic sandstone textures",
      "Monolithic stone reception desk with halo LED plinth",
      "Mirror-polished floor reflection under crystal chandeliers",
    ],
    image: "/assets/projects/signature_atrium_cladding.jpg",
    waMsg:
      "Hello Dholpurestones.com, I would like to inquire about the 5-Star Hotel Grand Atrium project.",
  },
];

const categoryTabs = [
  { id: "all", label: "All Projects" },
  { id: "resorts", label: "Palaces & Resorts" },
  { id: "spiritual", label: "Spiritual & Temples" },
  { id: "estates", label: "Luxury Estates" },
  { id: "commercial", label: "Commercial Atriums" },
];

const tickerHighlights = [
  "NOMINATED FOR INTERNATIONAL AWARD FOR BUSINESS EXCELLENCE",
  "AWARDED BY GOVT. OF INDIA FOR 300+ FRONT ELEVATION DESIGNS",
  "SPECIALIZED IN LUXURY FARM HOUSES & DESIGNER GARDENS",
  "500+ MONUMENTAL LANDMARKS EXECUTED GLOBALLY",
  "100% DIRECT QUARRY SOURCING FROM SARMATHURA & SIKANDRA",
  "8-AXIS HIGH PRECISION CNC WATERJET CUTTING (±0.1MM)",
  "TIMELESS MONOLITHIC DRY-JOINT INTERLOCKING STONE",
  "3RD GENERATION MASTER ARTISANS & STONEMASONS",
  "ISPM-15 EXPORT CERTIFIED CRATING FOR GLOBAL ARCHITECTS",
];

// Interactive Spotlight Card with Mouse-Move Glow & Multi-Spec Tabs
function SpotlightProjectCard({
  project,
  idx,
  onOpenModal,
}: {
  project: SignatureProject;
  idx: number;
  onOpenModal: (p: SignatureProject) => void;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCardTab, setActiveCardTab] = useState<"scope" | "materials" | "highlights">("scope");

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
        onClick={() => onOpenModal(project)}
        className="group relative rounded-2xl overflow-hidden border border-black/8 hover:border-[#C29B38]/70 bg-[#FAF7F2] transition-all duration-400 hover:shadow-2xl cursor-pointer flex flex-col h-full gcl-card-glow"
      >
        {/* Dynamic 3D Cursor Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(194, 155, 56, 0.16), transparent 60%)`,
          }}
        />

        {/* Shimmer Light Beam on Hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C29B38] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

        {/* Architectural Precision Crosshair Markers */}
        <span className="absolute top-2 left-2 text-[10px] text-[#C29B38] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
          +
        </span>
        <span className="absolute top-2 right-2 text-[10px] text-[#C29B38] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
          +
        </span>
        <span className="absolute bottom-2 left-2 text-[10px] text-[#C29B38] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
          +
        </span>
        <span className="absolute bottom-2 right-2 text-[10px] text-[#C29B38] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
          +
        </span>

        {/* Image Container with Ken Burns Zoom & Live Location Beacon */}
        <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#EAE6DE] shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Category Tag with Gilded Sparkle */}
          <div className="absolute top-3 left-3 bg-[#0D1311]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 z-20 shadow-md">
            <span className="text-[9px] font-bold text-[#C29B38] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#C29B38]" />
              {project.categoryLabel}
            </span>
          </div>

          {/* Giant Watermark Project Index */}
          <div className="absolute top-1 right-3 font-['Cinzel',serif] text-5xl font-black text-white/30 select-none pointer-events-none z-10 group-hover:text-[#C29B38]/50 transition-colors">
            {project.number}
          </div>

          {/* Expand Image Button */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:bg-[#C29B38] hover:text-[#0D1311] shadow-lg">
            <Maximize2 className="w-4 h-4" />
          </div>

          {/* Pulsing Location Radar Beacon */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] font-medium text-white/95 bg-[#0D1311]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 z-20 shadow-md">
            <span className="relative flex h-2 w-2 mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C29B38] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C29B38]" />
            </span>
            <span className="truncate max-w-[220px]">{project.location}</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between relative z-20">
          <div>
            <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-[#141A17] uppercase tracking-wider mb-1.5 group-hover:text-[#134e3f] transition-colors leading-snug">
              {project.title}
            </h3>

            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#C29B38] font-semibold mb-3">
              {project.subtitle}
            </p>

            {/* Interactive Mini-Tab Selector for Quick Spec Inspection */}
            <div
              className="flex items-center gap-1 p-1 bg-white rounded-lg border border-black/6 mb-3 shadow-2xs"
              onClick={(e) => e.stopPropagation()}
            >
              {[
                { id: "scope", label: "Scope" },
                { id: "materials", label: "Materials" },
                { id: "highlights", label: "Highlights" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCardTab(tab.id as "scope" | "materials" | "highlights")}
                  className={`flex-1 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    activeCardTab === tab.id
                      ? "bg-[#134e3f] text-white shadow-xs"
                      : "text-[#68726E] hover:text-[#141A17]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Card Tab Content */}
            <div className="min-h-[72px]">
              {activeCardTab === "scope" && (
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#68726E] leading-relaxed line-clamp-3">
                  {project.scope}
                </p>
              )}

              {activeCardTab === "materials" && (
                <div className="p-2.5 rounded-lg bg-white border border-black/6 text-[11px] shadow-2xs">
                  <span className="text-[#134e3f] font-bold block text-[10px] uppercase tracking-wider mb-0.5">
                    Quarry Strata:
                  </span>
                  <span className="text-[#4A5550] line-clamp-2">
                    {project.stoneType}
                  </span>
                </div>
              )}

              {activeCardTab === "highlights" && (
                <ul className="space-y-1 text-[11px] text-[#4A5550]">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5 truncate">
                      <CheckCircle2 className="w-3 h-3 text-[#134e3f] shrink-0" />
                      <span className="truncate">{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Bottom Action Row */}
          <div className="pt-4 mt-2 border-t border-black/8 flex items-center justify-between">
            <span className="text-xs font-bold text-[#134e3f] group-hover:text-[#C29B38] flex items-center gap-1 transition-colors">
              <span>Inspect Dossier</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#134e3f] group-hover:text-[#C29B38] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>

            <a
              href={`https://wa.me/919414945457?text=${encodeURIComponent(project.waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#134e3f] hover:text-[#25D366] transition-colors p-1.5 rounded-lg hover:bg-black/5"
              title="Inquire about this project on WhatsApp"
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

export default function OurSignatureProjects() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeModal, setActiveModal] = useState<SignatureProject | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "spotlight">("grid");
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return signatureProjects;
    return signatureProjects.filter((p) => p.category === activeTab);
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
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const activeSlideProject = filteredProjects[currentSlide] || filteredProjects[0];

  return (
    <section
      id="signature-projects"
      className="bg-white py-14 sm:py-24 border-b border-black/6 relative overflow-hidden"
    >
      {/* =========================================================================
          MOTION GRAPHIC BACKGROUND: Geometric Blueprint Grid & Rotating Sacred Yantras
          ========================================================================= */}
      {/* Subtle Dotted Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C29B38_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      {/* Floating Animated Ambient Glow Orbs */}
      <div className="absolute -top-24 right-10 w-[550px] h-[550px] bg-[#C29B38]/6 rounded-full blur-[140px] pointer-events-none animate-ambient-float-1" />
      <div className="absolute -bottom-24 left-10 w-[500px] h-[500px] bg-[#134e3f]/6 rounded-full blur-[130px] pointer-events-none animate-ambient-float-2" />

      {/* Rotating Sacred Geometry Mandalas / Yantras in Background */}
      <div className="absolute -top-32 -left-32 w-[460px] h-[460px] opacity-[0.04] pointer-events-none animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-[#C29B38]" strokeWidth="0.8">
          <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="60" strokeDasharray="6 4" />
          <polygon points="100,10 190,150 10,150" />
          <polygon points="100,190 10,50 190,50" />
          <rect x="35" y="35" width="130" height="130" transform="rotate(45 100 100)" />
        </svg>
      </div>

      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] opacity-[0.035] pointer-events-none animate-spin-reverse">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-[#134e3f]" strokeWidth="0.8">
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
            <span className="w-2.5 h-2.5 rounded-full bg-[#C29B38] animate-pulse" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#141A17] uppercase">
              DHOLPURESTONES.COM &bull; ARCHITECTURAL SHOWCASE
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle: Grid vs Spotlight */}
            <div className="hidden sm:flex items-center p-1 bg-[#FAF7F2] rounded-lg border border-black/8 text-xs font-semibold text-[#141A17]">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#134e3f] text-white shadow-xs"
                    : "text-[#68726E] hover:text-[#141A17]"
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
                    ? "bg-[#134e3f] text-white shadow-xs"
                    : "text-[#68726E] hover:text-[#141A17]"
                }`}
                title="Cinematic Spotlight View"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold">Spotlight</span>
              </button>
            </div>

            <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C29B38] tracking-widest">
              08
            </span>
          </div>
        </AnimDiv>

        {/* Section Title & Metrics */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <AnimDiv delay={0} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29B38]/10 border border-[#C29B38]/25 text-[#C29B38] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Featured Projects: Demonstrating Our Expertise</span>
            </div>
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-5xl font-bold text-[#141A17] uppercase tracking-wide mb-3">
              Our Signature Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C29B38] via-[#E0BA55] to-transparent rounded-full mb-4" />
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#68726E] leading-relaxed">
              From palatial private estates and monumental temples to royal heritage resorts and triple-height hotel atriums. Explore landmark architectural stone installations engineered with our own quarry strata and master carving craftsmanship.
            </p>
          </AnimDiv>

          {/* Key Metric Highlights with Gilded Accents */}
          <AnimDiv delay={100} className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 shrink-0 w-full lg:w-auto">
            <div className="bg-[#FAF7F2] border border-black/8 rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-2 sm:py-2.5 shadow-xs hover:border-[#C29B38]/60 transition-colors text-center sm:text-left">
              <span className="block font-['Cinzel',serif] text-sm sm:text-xl font-bold text-[#141A17]">
                70+ Years
              </span>
              <span className="text-[9px] text-[#68726E] font-semibold uppercase tracking-wider block">
                Since 1953
              </span>
            </div>
            <div className="bg-[#FAF7F2] border border-black/8 rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-2 sm:py-2.5 shadow-xs hover:border-[#C29B38]/60 transition-colors text-center sm:text-left">
              <span className="block font-['Cinzel',serif] text-sm sm:text-xl font-bold text-[#C29B38]">
                300+ Designs
              </span>
              <span className="text-[9px] text-[#68726E] font-semibold uppercase tracking-wider block">
                Govt. Awarded
              </span>
            </div>
            <div className="bg-[#FAF7F2] border border-black/8 rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-2 sm:py-2.5 shadow-xs hover:border-[#C29B38]/60 transition-colors text-center sm:text-left">
              <span className="block font-['Cinzel',serif] text-sm sm:text-xl font-bold text-[#134e3f]">
                Intl. Nominee
              </span>
              <span className="text-[9px] text-[#68726E] font-semibold uppercase tracking-wider block">
                Business Excellence
              </span>
            </div>
            <div className="bg-[#FAF7F2] border border-black/8 rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-2 sm:py-2.5 shadow-xs hover:border-[#C29B38]/60 transition-colors text-center sm:text-left">
              <span className="block font-['Cinzel',serif] text-sm sm:text-xl font-bold text-[#141A17]">
                500+
              </span>
              <span className="text-[9px] text-[#68726E] font-semibold uppercase tracking-wider block">
                Landmarks Worldwide
              </span>
            </div>
          </AnimDiv>
        </div>

        {/* =========================================================================
            MOTION GRAPHIC INFINITE MARQUEE TICKER (Live Architectural Strata Ribbon)
            ========================================================================= */}
        <AnimDiv delay={120} className="mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-[#FAF7F2] via-white to-[#FAF7F2] border border-black/8 py-2.5 shadow-xs">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
            {[...tickerHighlights, ...tickerHighlights].map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 text-[11px] font-bold text-[#141A17] uppercase tracking-wider shrink-0">
                <span className="text-[#C29B38] text-xs">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </AnimDiv>

        {/* Filter Navigation Tabs */}
        <AnimDiv delay={150} className="mb-8 sm:mb-10 overflow-x-auto pb-2 scrollbar-none flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentSlide(0);
                }}
                className={`text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 border cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#134e3f] text-white border-[#134e3f] shadow-md shadow-[#134e3f]/25 scale-102"
                    : "bg-[#FAF7F2] text-[#4A5550] border-black/8 hover:border-[#C29B38] hover:text-[#141A17] hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-[#68726E] font-semibold hidden md:inline shrink-0">
            Showing {filteredProjects.length} Architectural Landmarks
          </span>
        </AnimDiv>

        {/* =========================================================================
            VIEW MODE 1: 6-CARD BALANCED SPOTLIGHT GRID (3x2 Architecture)
            ========================================================================= */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
            {filteredProjects.map((project, idx) => (
              <SpotlightProjectCard
                key={project.id}
                project={project}
                idx={idx}
                onOpenModal={(p) => setActiveModal(p)}
              />
            ))}
          </div>
        )}

        {/* =========================================================================
            VIEW MODE 2: CINEMATIC SPOTLIGHT HERO SLIDER
            ========================================================================= */}
        {viewMode === "spotlight" && activeSlideProject && (
          <AnimDiv delay={180} className="mb-12 sm:mb-16">
            <div className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-black/8 shadow-2xl p-4 sm:p-8 relative">
              {/* Giant Watermark Background Number */}
              <div className="absolute top-2 right-6 font-['Cinzel',serif] text-8xl font-black text-black/[0.04] select-none pointer-events-none">
                {activeSlideProject.number}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left: Cinematic Full-Res Display */}
                <div
                  onClick={() => setActiveModal(activeSlideProject)}
                  className="lg:col-span-7 relative h-80 sm:h-[460px] rounded-2xl overflow-hidden bg-[#0D1311] cursor-pointer group shadow-xl"
                >
                  <Image
                    src={activeSlideProject.image}
                    alt={activeSlideProject.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 bg-[#0D1311]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    <span className="text-[10px] font-bold text-[#C29B38] uppercase tracking-widest flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                      {activeSlideProject.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#0D1311]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white text-xs font-medium">
                    <MapPin className="w-4 h-4 text-[#C29B38]" />
                    <span>{activeSlideProject.location}</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white group-hover:bg-[#C29B38] group-hover:text-[#0D1311] transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Right: Technical Project Dossier Details */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#C29B38] uppercase tracking-[0.2em]">
                        Project Dossier &bull; {activeSlideProject.number} of 06
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={prevSlide}
                          className="w-8 h-8 rounded-full border border-black/10 bg-white hover:bg-[#134e3f] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
                          aria-label="Previous Project"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={nextSlide}
                          className="w-8 h-8 rounded-full border border-black/10 bg-white hover:bg-[#134e3f] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
                          aria-label="Next Project"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#141A17] uppercase tracking-wider mb-2">
                      {activeSlideProject.title}
                    </h3>

                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-semibold text-[#C29B38] mb-4">
                      {activeSlideProject.subtitle}
                    </p>

                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#4A5550] leading-relaxed mb-5">
                      {activeSlideProject.details}
                    </p>

                    {/* Sourced Quarry Stratum */}
                    <div className="p-3.5 rounded-xl bg-white border border-black/8 mb-5 shadow-2xs">
                      <span className="text-[10px] font-bold text-[#134e3f] uppercase tracking-widest block mb-1">
                        Architectural Materials &amp; Stratum
                      </span>
                      <p className="text-xs font-semibold text-[#141A17]">
                        {activeSlideProject.stoneType}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {activeSlideProject.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-[#141A17] p-2 rounded-lg bg-white border border-black/5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#134e3f] shrink-0 mt-0.5" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-black/8 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveModal(activeSlideProject)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#134e3f] hover:bg-[#0e3b30] uppercase px-5 py-3 rounded-full transition-all shadow-md cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Full Spec Blueprint</span>
                    </button>

                    <a
                      href={`https://wa.me/919414945457?text=${encodeURIComponent(activeSlideProject.waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#0D1311] bg-[#25D366] hover:bg-[#20ba59] hover:text-white uppercase px-5 py-3 rounded-full transition-all shadow-md"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" size={16} />
                      <span>WhatsApp Quote</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Thumbnails Navigation Strip */}
              <div className="mt-6 pt-4 border-t border-black/8 flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                {filteredProjects.map((proj, i) => (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => setCurrentSlide(i)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      currentSlide === i
                        ? "border-[#134e3f] scale-105 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute bottom-1 right-1 text-[9px] font-bold text-white bg-black/70 px-1 rounded">
                      {proj.number}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </AnimDiv>
        )}

        {/* =========================================================================
            ADVANCED MOTION GRAPHIC CALLOUT: Turnkey Landmark Project Partnership
            ========================================================================= */}
        <AnimDiv delay={300}>
          <div className="bg-gradient-to-br from-[#134e3f] via-[#0e3b30] to-[#0A261F] rounded-3xl p-6 sm:p-10 border border-[#C29B38]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden text-white group">
            {/* Ambient Background Gold Beam Sweep */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-[#C29B38]/15 to-transparent animate-beam-sweep pointer-events-none" />

            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#C29B38]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl text-center lg:text-left relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#C29B38]/20 border border-[#C29B38]/40 px-3.5 py-1 rounded-full text-[10px] font-bold text-[#FAF7F2] uppercase tracking-widest mb-3 shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>Turnkey Architectural Execution</span>
              </div>
              <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wider mb-2">
                Have An Ambitious Landmark Project?
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/80 leading-relaxed">
                We collaborate directly with leading architects, royal developers, and institutions for end-to-end stone quarrying, CNC bespoke carving, dry-joint engineering, and global on-site installation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 relative z-10">
              <a
                href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20have%20an%20architectural%20project%20and%20would%20like%20to%20discuss%20turnkey%20stone%20supply%20and%20execution."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-[#0A0F0D] hover:bg-white font-bold text-xs uppercase px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#0A0F0D]" size={16} />
                <span>Consult On WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 active:scale-95 shadow-md"
              >
                <span>Request Project Proposal</span>
              </a>
            </div>
          </div>
        </AnimDiv>
      </div>

      {/* =========================================================================
          HIGH-RESOLUTION BLUEPRINT & SPECIFICATION CINEMATIC MODAL
          ========================================================================= */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white border border-black/10 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto text-[#141A17] shadow-2xl relative scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-[#141A17] text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-72 sm:h-96 md:h-[460px] w-full bg-[#0D1311]">
              <Image
                src={activeModal.image}
                alt={activeModal.title}
                fill
                sizes="(max-width:1024px) 100vw, 896px"
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 sm:left-6 flex flex-wrap items-center gap-2">
                <span className="bg-[#0D1311]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#C29B38] border border-white/15 uppercase tracking-widest">
                  {activeModal.categoryLabel}
                </span>
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white flex items-center gap-1.5 border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#C29B38]" />
                  {activeModal.location}
                </span>
                <span className="bg-[#C29B38] text-[#0D1311] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-mono">
                  ARCHIVE #{activeModal.number}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl lg:text-3xl font-bold text-[#141A17] uppercase tracking-wider mb-1.5">
                {activeModal.title}
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#C29B38] font-semibold tracking-wide mb-4">
                {activeModal.subtitle}
              </p>

              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#4A5550] leading-relaxed mb-6">
                {activeModal.details}
              </p>

              {/* Material & Execution Spec Box */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-black/8 mb-6">
                <span className="text-[10px] font-bold text-[#134e3f] uppercase tracking-widest block mb-1">
                  Architectural Materials &amp; Stratum
                </span>
                <p className="text-xs sm:text-sm text-[#141A17] font-semibold">
                  {activeModal.stoneType}
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="mb-6">
                <span className="text-[10px] font-bold text-[#C29B38] uppercase tracking-widest block mb-3">
                  Key Architectural &amp; Engineering Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModal.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-[#141A17] p-2.5 rounded-xl bg-[#FAF7F2] border border-black/5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#134e3f] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-5 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-[11px] text-[#68726E] block font-medium">
                    Direct Master Consultation &bull; Arvind Garg
                  </span>
                  <span className="text-xs font-bold text-[#134e3f]">
                    +91 94149 45457 &bull; DholpureStones.com
                  </span>
                </div>

                <a
                  href={`https://wa.me/919414945457?text=${encodeURIComponent(activeModal.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase px-7 py-3.5 rounded-full transition-all shadow-md active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                  <span>Inquire About This Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
