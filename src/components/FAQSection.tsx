"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import AnimDiv from "@/components/ui/AnimDiv";
import {
  LuChevronDown as ChevronDown,
  LuSparkles as Sparkles,
  LuCircleHelp as HelpCircle,
  LuSearch as Search,
  LuX as X,
  LuCompass as Compass,
  LuCircleCheck as CheckCircle2,
  LuArrowUpRight as ArrowUpRight,
  LuShieldCheck as ShieldCheck,
  LuFlame as Flame
} from "react-icons/lu";
import WhatsAppIcon from "./WhatsAppIcon";


export interface FAQItem {
  id: string;
  number: string;
  q: string;
  a: string;
  category: "all" | "quarries" | "materials" | "landmarks" | "export";
  categoryLabel: string;
  highlights: string[];
}

const faqs: FAQItem[] = [
  {
    id: "legacy",
    number: "01",
    q: "What is the historical origin and founding legacy of Dholpurestones.com?",
    a: "Dholpurestones.com traces its natural stone lineage back to 1953, incorporating Garg Corporation Ltd. and Saroj Stone Industries. Over more than 70 years of continuous family leadership across three generations, we operate as proprietary quarry leaseholders, modern CNC processors, direct global exporters, and turnkey monumental stone contractors.",
    category: "quarries",
    categoryLabel: "MINING & HERITAGE",
    highlights: ["Established 1953", "3 Generations of Leadership", "Awarded by Govt. of India"],
  },
  {
    id: "materials",
    number: "02",
    q: "What varieties of natural stone and carved architectural elements do you supply?",
    a: "We quarry and process authentic Dholpur Sandstone (Beige, Pink, Red, White, and Chocolate Teakwood), premium Italian Botticino and Turkish Elmali Beige marble, high-density Black Granite, rare semi-precious quartz slabs (Blue Agate, Lapis Lazuli), and bespoke hand-carved heritage articles including majestic guardian lions, monumental temple pillars, and perforated stone lanterns.",
    category: "materials",
    categoryLabel: "MATERIALS & FINISHES",
    highlights: ["12+ Sandstone Shades", "Italian Botticino & Marble", "Hand-Carved Sculptures"],
  },
  {
    id: "quarries",
    number: "03",
    q: "Where are your quarry leases, manufacturing plants, and overseas offices situated?",
    a: "Our primary sandstone quarries operate over contiguous strata concessions in Dholpur (Rajasthan). We run automated gangsaw and CNC processing facilities in Sikandra and Kishangarh (Rajasthan), and maintain a North American liaison office in Canada to seamlessly coordinate direct container shipments for global architects.",
    category: "quarries",
    categoryLabel: "QUARRIES & INFRASTRUCTURE",
    highlights: ["Dholpur Quarry Concessions", "Sikandra 8-Axis CNC Hub", "Canadian Corporate Office"],
  },
  {
    id: "landmarks",
    number: "04",
    q: "What iconic national landmarks and international diplomatic missions have you executed?",
    a: "Our credentials include the New Delhi Parliament House, Akshardham Temple (New Delhi), Adani House (Ahmedabad), AIIMS (Bhopal), the Indian Embassy in Berlin (Germany), Indian Embassy in Kathmandu (Nepal), over 50 ISKCON temples worldwide, Kashiram Garden (Lucknow), and luxury private palatial estates across the Lutyens Bungalow Zone and Dubai.",
    category: "landmarks",
    categoryLabel: "LANDMARK EXECUTIONS",
    highlights: ["Indian Parliament House", "Akshardham Temple", "50+ Global ISKCON Temples"],
  },
  {
    id: "standards",
    number: "05",
    q: "Do your natural stones comply with IS:3620 and international physical standards?",
    a: "Yes. All sandstone mined from our Dholpur strata undergoes physical laboratory testing and exceeds IS:3620 standards. We guarantee compressive strength above 68 MPa (up to 72 MPa for Dholpur Red), ultra-low water absorption under 1.15%, density between 2.42–2.52 g/cm³, and complete frost and thermal shock resistance across centuries.",
    category: "materials",
    categoryLabel: "LAB TESTED DENSITY",
    highlights: ["Compressive Strength >68 MPa", "Water Absorption <1.15%", "Zero Efflorescence Guarantee"],
  },
  {
    id: "custom-carving",
    number: "06",
    q: "Do you undertake bespoke architectural stone carving and temple shikhara engineering?",
    a: "Yes. Our Sikandra and Dholpur ateliers house hereditary Shilpa Shastra stone sculptors working alongside 8-axis CNC profiling saws. We engineer monolithic fluted columns, ornate floral jali screens, cantilevered Jharokhas, multi-tiered Nagara shikharas, and mortarless dry-joint interlocking stone assemblies.",
    category: "landmarks",
    categoryLabel: "SHILPA SHASTRA MASONRY",
    highlights: ["Hereditary Temple Guild", "±0.5mm Precision Tolerances", "Mortarless Dry-Joint Carving"],
  },
  {
    id: "export-packaging",
    number: "07",
    q: "What is your seaworthy crating and international export logistics process?",
    a: "Every export consignment is packed inside heavy-duty ISPM-15 heat-treated, fumigated timber crates. Slabs and tiles are separated by high-density foam sheets and corner edge protectors, secured with steel strapping and barcoded digital packing lists. We service 40+ international seaports via Mundra and Kandla ports with complete CIF and FOB export documentation.",
    category: "export",
    categoryLabel: "GLOBAL ISPM-15 EXPORTS",
    highlights: ["ISPM-15 Heat-Treated Crating", "Foam Spacing & Corner Guards", "Direct Shipping via Mundra Port"],
  },
  {
    id: "consultation",
    number: "08",
    q: "How can architects, developers, or overseas importers request tenders, swatches, and quotes?",
    a: "You can consult directly with our managing director, Mr. Arvind Garg (Awarded by Govt. of India & Nominated for International Award for Business Excellence), via WhatsApp at +91 94149 45457, call at +91 90573 55232, or email CAD drawings and BOQs to gargcorporationltd@gmail.com. We provide complimentary architectural stone sample boxes and expedited quarry-direct factory quotations.",
    category: "export",
    categoryLabel: "DIRECT QUOTATION",
    highlights: ["Direct Consultation with Arvind Garg", "Free Architectural Sample Box", "CAD & BOQ Drawing Support"],
  },
  {
    id: "farmhouse-elevation",
    number: "09",
    q: "Do you specialize in luxury farm houses, designer gardens, and front elevation in sandstone?",
    a: "Yes, this is our foremost specialty. We have made more than 300+ designs for front elevation in natural sandstone, for which we were awarded by the Government of India, and our enterprise is nominated for the International Award for Business Excellence. Our dedicated outdoor architectural team executes turnkey stone projects for sprawling luxury farm houses, private country retreats, and designer gardens. This includes grand carved entrance gates, boundary wall copings, heavy-duty cobblestone driveways, natural cleft garden walkways, anti-slip pool decks, and monumental multi-tier stone fountains.",
    category: "landmarks",
    categoryLabel: "FARM HOUSE & FRONT ELEVATION",
    highlights: ["300+ Front Elevation Designs", "Awarded by Govt. of India", "Nominated for Intl. Award (Business Excellence)"],
  },
];

const categoryTabs = [
  { id: "all", label: "All Questions", count: 9 },
  { id: "quarries", label: "Quarries & Mining", count: 2 },
  { id: "materials", label: "Materials & Specs", count: 2 },
  { id: "landmarks", label: "Landmarks, Farm Houses & Elevation", count: 3 },
  { id: "export", label: "Global Exports", count: 2 },
];

const tickerHighlights = [
  "WE HAVE MADE MORE THAN 300+ DESIGNS FOR FRONT ELEVATION IN SANDSTONE (AWARDED BY GOVT. OF INDIA)",
  "NOMINATED FOR INTERNATIONAL AWARD FOR BUSINESS EXCELLENCE",
  "SPECIALIZED IN LUXURY FARM HOUSES & DESIGNER GARDEN LANDSCAPING",
  "100% OWN QUARRY CONCESSIONS IN DHOLPUR & SIKANDRA",
  "HISTORIC DIRECT SUPPLIER TO NEW DELHI PARLIAMENT HOUSE",
  "OVER 50+ ISKCON & MONUMENTAL TEMPLES BUILT WORLDWIDE",
  "IS:3620 LABORATORY TESTED COMPRESSIVE STRENGTH >68 MPA",
  "ISPM-15 CERTIFIED TIMBER PACKAGING FOR 40+ GLOBAL PORTS",
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesTab = activeTab === "all" || faq.category === activeTab;
      const matchesSearch =
        searchQuery.trim() === "" ||
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const leftFaqs = useMemo(
    () => filteredFaqs.filter((_, idx) => idx % 2 === 0),
    [filteredFaqs]
  );
  const rightFaqs = useMemo(
    () => filteredFaqs.filter((_, idx) => idx % 2 === 1),
    [filteredFaqs]
  );

  const renderCard = (faq: FAQItem, delayIdx: number) => {
    const isOpen = openId === faq.id;
    return (
      <AnimDiv key={faq.id} delay={delayIdx * 40}>
        <div
          className={`rounded-3xl border transition-all duration-300 overflow-hidden relative group gcl-card-glow ${isOpen
              ? "bg-[#F7F4EB] border-[#C5A15B] shadow-xl"
              : "bg-white border-black/8 hover:border-[#C5A15B]/50 hover:bg-[#F7F4EB]/40 hover:shadow-md"
            }`}
        >
          {/* Architectural Corner Crosshairs */}
          <span className="absolute top-2 left-2 text-[10px] text-[#C5A15B] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            +
          </span>
          <span className="absolute top-2 right-2 text-[10px] text-[#C5A15B] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            +
          </span>

          <button
            type="button"
            onClick={() => toggle(faq.id)}
            className="w-full p-3.5 sm:p-5 md:p-6 flex items-start justify-between gap-2.5 sm:gap-4 text-left focus:outline-none cursor-pointer"
            aria-expanded={isOpen}
          >
            <div className="flex items-start gap-2.5 sm:gap-3.5">
              {/* Number Index */}
              <div
                className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center font-heading text-[10px] sm:text-xs font-bold shrink-0 transition-colors shadow-2xs ${isOpen
                    ? "bg-[#123D32] text-white"
                    : "bg-[#F7F4EB] text-[#C5A15B] group-hover:bg-[#123D32] group-hover:text-white"
                  }`}
              >
                {faq.number}
              </div>

              <div>
                <div className="inline-flex items-center gap-1 text-[8.5px] sm:text-[9px] font-bold text-[#C5A15B] uppercase tracking-widest bg-white px-2 sm:px-2.5 py-0.5 rounded-full border border-black/6 mb-1">
                  <Sparkles className="w-2.5 h-2.5 text-[#C5A15B]" />
                  <span>{faq.categoryLabel}</span>
                </div>
                <h4 className="font-heading text-xs sm:text-base font-bold text-[#1F2A24] uppercase tracking-wide leading-snug group-hover:text-[#123D32] transition-colors">
                  {faq.q}
                </h4>
              </div>
            </div>

            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                  ? "bg-[#123D32] text-white rotate-180"
                  : "bg-[#F7F4EB] text-[#1F2A24] group-hover:bg-[#C5A15B] group-hover:text-black"
                }`}
            >
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </button>

          {/* Expandable Accordion Body */}
          {isOpen && (
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 border-t border-black/6 animate-fadeIn">
              <p className="font-body text-xs sm:text-sm text-[#6B7C73] leading-relaxed mb-3 sm:mb-4">
                {faq.a}
              </p>

              {/* Verified Highlights Pills */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {faq.highlights.map((h, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 bg-white text-[#123D32] text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg border border-black/6 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#123D32]" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>

              {/* Direct Verification Footer & WhatsApp Trigger */}
              <div className="pt-3 border-t border-black/6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#123D32]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A15B]" />
                  <span>Verified from Dholpurestones.com technical archives (1953–Present)</span>
                </div>

                <a
                  href={`https://wa.me/919414945457?text=${encodeURIComponent(
                    `Hello Dholpurestones.com, I have a query regarding: "${faq.q}"`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#123D32] hover:text-[#25D366] transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" size={14} />
                  <span>Ask on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>
      </AnimDiv>
    );
  };

  return (
    <section
      id="faq"
      className="bg-[#E5ECE4] py-10 sm:py-20 border-b border-black/6 relative overflow-hidden"
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
        <AnimDiv className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-black/8 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#C5A15B] animate-pulse" />
            <span className="font-heading text-[9.5px] sm:text-xs font-bold tracking-[0.16em] sm:tracking-[0.18em] text-[#1F2A24] uppercase">
              DHOLPURESTONES.COM &bull; KNOWLEDGE BASE &bull; ESTD. 1953
            </span>
          </div>
          <span className="font-heading text-xs sm:text-sm font-bold text-[#C5A15B] tracking-widest">
            AEO / 09
          </span>
        </AnimDiv>

        {/* Section Title & Description */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 mb-6 sm:mb-9">
          <AnimDiv delay={0} className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C5A15B]/10 border border-[#C5A15B]/25 text-[#C5A15B] text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.18em] mb-2 sm:mb-3">
              <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-spin-slow" />
              <span>Verified Corporate Knowledge &amp; AEO Architecture</span>
            </div>
            <h2 className="font-heading text-xl sm:text-3xl lg:text-5xl font-bold text-[#1F2A24] uppercase tracking-wide mb-1.5 sm:mb-2 leading-snug">
              Frequently Asked Questions
            </h2>
            <h3 className="font-heading text-base sm:text-2xl lg:text-3xl font-bold text-[#C5A15B] uppercase tracking-wider mb-2.5 sm:mb-3">
              Company Knowledge &amp; Inquiries
            </h3>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#C5A15B] via-[#C5A15B] to-transparent rounded-full mb-3 sm:mb-4" />
            <p className="font-body text-xs sm:text-sm text-[#6B7C73] leading-relaxed">
              Transparent, verified insights into our quarry concessions, geotechnical lab certifications, monumental landmark executions, and turnkey export logistics.
            </p>
          </AnimDiv>

          {/* Key Metric Highlights with Gilded Accents */}
          <AnimDiv delay={100} className="grid grid-cols-3 gap-2 sm:gap-4 shrink-0 w-full lg:w-auto">
            <div className="bg-[#F7F4EB] border border-black/8 rounded-xl sm:rounded-2xl px-2.5 sm:px-5 py-2 sm:py-3 shadow-xs hover:border-[#C5A15B]/60 transition-colors text-center sm:text-left">
              <span className="block font-heading text-xs sm:text-2xl font-bold text-[#1F2A24]">
                70+ Years
              </span>
              <span className="text-[8.5px] sm:text-[10px] text-[#6B7C73] font-semibold uppercase tracking-wider block">
                Legacy
              </span>
            </div>
            <div className="bg-[#F7F4EB] border border-black/8 rounded-xl sm:rounded-2xl px-2.5 sm:px-5 py-2 sm:py-3 shadow-xs hover:border-[#C5A15B]/60 transition-colors text-center sm:text-left">
              <span className="block font-heading text-xs sm:text-2xl font-bold text-[#1F2A24]">
                100% Direct
              </span>
              <span className="text-[8.5px] sm:text-[10px] text-[#6B7C73] font-semibold uppercase tracking-wider block">
                Dholpur
              </span>
            </div>
            <div className="bg-[#F7F4EB] border border-black/8 rounded-xl sm:rounded-2xl px-2.5 sm:px-5 py-2 sm:py-3 shadow-xs hover:border-[#C5A15B]/60 transition-colors text-center sm:text-left">
              <span className="block font-heading text-xs sm:text-2xl font-bold text-[#1F2A24]">
                50+ Temples
              </span>
              <span className="text-[8.5px] sm:text-[10px] text-[#6B7C73] font-semibold uppercase tracking-wider block">
                Monumental
              </span>
            </div>
          </AnimDiv>
        </div>

        {/* =========================================================================
            MOTION GRAPHIC INFINITE MARQUEE TICKER (Verified Corporate Ledger)
            ========================================================================= */}
        <AnimDiv delay={120} className="mb-6 sm:mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-[#F7F4EB] via-white to-[#F7F4EB] border border-black/8 py-2 sm:py-2.5 shadow-xs">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-6 sm:gap-8">
            {[...tickerHighlights, ...tickerHighlights].map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-bold text-[#1F2A24] uppercase tracking-wider shrink-0">
                <span className="text-[#C5A15B] text-xs">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </AnimDiv>

        {/* =========================================================================
            INTERACTIVE CONTROLS BAR: Category Filter Tabs + Search Input
            ========================================================================= */}
        <AnimDiv delay={150} className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-9 pb-3 sm:pb-4 border-b border-black/8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto w-full md:w-auto pb-1.5 md:pb-0 scrollbar-none">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${isActive
                      ? "bg-[#123D32] text-white shadow-md scale-102"
                      : "bg-[#F7F4EB] text-[#1F2A24]/80 hover:text-[#C5A15B] hover:bg-white border border-black/8"
                    }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[9.5px] sm:text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-black/5 text-[#6B7C73]"
                      }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Real-Time Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#C5A15B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or specs..."
              className="w-full bg-[#F7F4EB] hover:bg-white focus:bg-white border border-black/10 focus:border-[#C5A15B] text-base sm:text-xs font-medium text-[#1F2A24] pl-10 pr-9 py-2 sm:py-2.5 rounded-full transition-all duration-200 outline-none shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7C73] hover:text-[#1F2A24]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </AnimDiv>

        {/* =========================================================================
            ADVANCED ACCORDION GRID (2-Column Architecture with Spotlight & Micro-Tabs)
            ========================================================================= */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-[#F7F4EB] rounded-3xl border border-black/8 p-8 mb-12">
            <HelpCircle className="w-10 h-10 text-[#C5A15B] mx-auto mb-3" />
            <h4 className="font-heading text-base font-bold text-[#1F2A24] uppercase mb-1">
              No matching inquiries found
            </h4>
            <p className="text-xs text-[#6B7C73]">
              Try searching with another keyword or reset the filter tabs.
            </p>
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-bold text-[#123D32] underline uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            {/* Desktop 2-Column Masonry: Independent flex columns prevent empty row stretching */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-6 items-start mb-16">
              <div className="flex flex-col gap-6">
                {leftFaqs.map((faq, i) => renderCard(faq, i * 2))}
              </div>
              <div className="flex flex-col gap-6">
                {rightFaqs.map((faq, i) => renderCard(faq, i * 2 + 1))}
              </div>
            </div>

            {/* Mobile & Tablet 1-Column Sequential Layout */}
            <div className="flex flex-col gap-4 lg:hidden mb-12">
              {filteredFaqs.map((faq, i) => renderCard(faq, i))}
            </div>
          </>
        )}

        {/* =========================================================================
            ADVANCED MOTION GRAPHIC CALLOUT: Direct Architectural Consultation
            ========================================================================= */}
        <AnimDiv delay={250}>
          <div className="bg-gradient-to-br from-[#123D32] via-[#123D32] to-[#0B2A22] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-[#C5A15B]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 relative overflow-hidden text-white group">
            {/* Ambient Background Gold Beam Sweep */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-[#C5A15B]/15 to-transparent animate-beam-sweep pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#C5A15B]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl text-center lg:text-left relative z-10">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#C5A15B]/20 border border-[#C5A15B]/40 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold text-[#F7F4EB] uppercase tracking-widest mb-2.5 sm:mb-3 shadow-xs">
                <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A15B]" />
                <span>Architectural Tenders &bull; BOQ Engineering</span>
              </div>
              <h3 className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wider mb-2">
                Have a Custom Architectural Specification or Tender?
              </h3>
              <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed">
                Connect directly with director Arvind Garg (Awarded by Govt. of India &bull; Nominated for International Award for Business Excellence). We provide custom CAD drafting, IS:3620 laboratory certificates, and quarry-direct wholesale pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0 relative z-10">
              <a
                href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20have%20an%20architectural%20tender%20and%20specification%20inquiry%20regarding%20natural%20stone."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-[#123D32] hover:bg-white font-bold text-xs uppercase px-5 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-xl active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#123D32]" size={16} />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center font-body text-xs font-bold uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 active:scale-95 shadow-md"
              >
                <span>View Contact Details</span>
              </a>
            </div>
          </div>
        </AnimDiv>

        {/* Running Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-semibold text-[#6B7C73] uppercase tracking-wider text-center sm:text-left">
          <span>Natural Sandstones &bull; Mines &bull; Manufacturing &bull; Export &bull; Contracting</span>
          <span className="font-heading text-[#1F2A24]">DHOLPURESTONES.COM</span>
        </div>
      </div>

      {/* Comprehensive Dynamic FAQPage Schema for AEO (Answer Engines & Google Rich Results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://dholpurestones.com/#faq-detailed",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
