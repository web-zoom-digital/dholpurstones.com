"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  LuShieldCheck as ShieldCheck,
  LuMountain as Mountain,
  LuHammer as Hammer,
  LuTruck as Truck,
  LuLayers as Layers,
  LuSparkles as Sparkles,
  LuBadgeCheck as BadgeCheck,
  LuFlame as Flame,
  LuAward as Award,
  LuCircleCheck as CheckCircle2,
  LuFileText as FileText,
  LuCompass as Compass,
  LuArrowRight as ArrowRight
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
      { threshold: 0.05 }
    );
    obs.observe(el);

    const timer = setTimeout(() => {
      if (el && !el.classList.contains("gcl-visible")) {
        el.classList.add("gcl-visible");
      }
    }, 400 + delay);

    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`gcl-animate ${className}`}>
      {children}
    </div>
  );
}

const reasons = [
  {
    id: "elevation-award",
    icon: Award,
    badge: "GOVT. AWARDED & INTL. NOMINEE",
    title: "300+ Front Elevation Designs (Farm Houses & Estates)",
    desc: "Awarded by the Government of India and nominated for the prestigious International Award for Business Excellence. We have made more than 300+ bespoke front elevation designs in sandstone, transforming private farm houses, sprawling gardens, and grand villa estates into royal architectural landmarks.",
    stat: "300+",
    statLabel: "Front Elevation Designs",
    highlight: true,
    tag: "National & Intl. Honors",
  },
  {
    id: "quarry-direct",
    icon: Mountain,
    badge: "100% OWN MINES",
    title: "Direct Mine Ownership & Zero Middlemen",
    desc: "Direct extraction from our proprietary quarry concessions in Sarmathura, Rajasthan. We control the complete custody chain from deep underground strata blasting to wire-cut block extraction, delivering genuine quarry-direct wholesale rates with zero middleman markups.",
    stat: "100%",
    statLabel: "Mine Direct Provenance",
    highlight: false,
    tag: "Zero Middleman Markups",
  },
  {
    id: "geological-purity",
    icon: ShieldCheck,
    badge: "LAB TESTED DENSITY",
    title: "Superior Geological Density & Weather Endurance",
    desc: "High compressive strength (>68 MPa) with ultra-low water absorption (<1.15%). Dholpur sandstone quartz grains are bound by siliceous cement, naturally resisting acid rain, saline climates, harsh monsoon showers, and intense 45°C desert heat without chipping or fading.",
    stat: ">68 MPa",
    statLabel: "Compressive Strength",
    highlight: false,
    tag: "High Quartz Density",
  },
  {
    id: "artisan-cnc",
    icon: Hammer,
    badge: "3RD GEN CRAFTSMEN",
    title: "Generational Artisans & 8-Axis CNC Precision",
    desc: "A harmonious synthesis of ancestral Shilpa Shastra temple masons and modern multi-axis CNC wire-saws. Whether you require laser-precise calibrated flooring (±0.5mm) or intricate hand-carved floral capitals and jharokha filigree, we deliver millimeter tolerances.",
    stat: "±0.5mm",
    statLabel: "Calibration Tolerance",
    highlight: false,
    tag: "Shilpa Shastra Guild",
  },
  {
    id: "color-uniformity",
    icon: Layers,
    badge: "HOMOGENEOUS STRATA",
    title: "Homogeneous Strata & Consistent Color Tones",
    desc: "Strict sorting by color tones — Dholpur Red, Beige, White, and Chocolate. Because we operate extensive contiguous rock faces, we harvest contiguous geological benches, guaranteeing flawless visual color continuity across massive hundreds of thousands of square feet projects.",
    stat: "500k+",
    statLabel: "Sq.Ft Quarry Capacity/Mo",
    highlight: false,
    tag: "Contiguous Geological Benches",
  },
  {
    id: "turnkey-export",
    icon: Truck,
    badge: "GLOBAL EXPORT",
    title: "ISPM-15 Certified Crating & Doorstep Delivery",
    desc: "Every slab and architectural article is foam-separated, corner-guarded, and secured in heavy-duty fumigated timber packaging built to withstand rough ocean transit and crane handling. Supported by our corporate presence in Canada, exports are seamless and fully insured.",
    stat: "40+ Countries",
    statLabel: "Global Supply Footprint",
    highlight: false,
    tag: "Worldwide ISPM-15 Crating",
  },
];

const technicalSpecs = [
  { label: "Compressive Strength", value: "68.5 MPa (Dry) / 62.1 MPa (Wet)", status: "Exceeds IS:3620" },
  { label: "Water Absorption", value: "< 1.15% by weight", status: "Ultra Low Porosity" },
  { label: "Specific Gravity / Density", value: "2.42 - 2.50 g/cm³", status: "High Quartz Density" },
  { label: "Modulus of Rupture", value: "11.2 - 13.5 N/mm²", status: "Structural Grade" },
  { label: "Thermal Insulation", value: "Naturally insulating, cool in 45°C sun", status: "Barefoot Comfort" },
  { label: "Weathering Resistance", value: "Zero efflorescence & UV stable", status: "Centuries Longevity" },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose"
      className="bg-[#FAF7F2] py-10 sm:py-20 border-b border-black/8 relative overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background Subtle Architectural Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C29B38_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

      {/* Floating Animated Radiant Glow Orbs */}
      <div className="absolute -top-20 left-1/3 w-[550px] h-[550px] bg-[#C29B38]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#134e3f]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Label */}
        <AnimDiv className="flex items-center justify-between pb-2.5 sm:pb-3.5 border-b border-black/8 mb-6 sm:mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#134e3f] animate-pulse" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#141A17] uppercase">
              DHOLPURESTONES.COM &bull; DIRECT MINE OWNER ADVANTAGE
            </span>
          </div>
          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C29B38] tracking-widest">
            ESTD. 1953
          </span>
        </AnimDiv>

        {/* Section Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-16">
          <AnimDiv delay={0}>
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#134e3f]/10 border border-[#134e3f]/25 text-[#134e3f] text-[9.5px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Direct Mine Owner Advantage Since 1953</span>
            </div>

            <h2 className="font-['Cinzel',serif] text-xl sm:text-3xl lg:text-5xl font-extrabold text-[#141A17] uppercase tracking-wide leading-snug sm:leading-tight mb-2 sm:mb-3">
              Why Choose Authentic Sandstone, Mined Straight from Our Quarries
            </h2>

            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#505D57] max-w-3xl mx-auto leading-relaxed mt-2 sm:mt-3">
              We own and operate proprietary sandstone quarry concessions in Sarmathura, Rajasthan. By eliminating all commercial middlemen, we guarantee homogeneous mineral strata, certified geotechnical strength, and direct quarry pricing for world-class architectural and landscape projects.
            </p>
          </AnimDiv>

          {/* Key Metric Trust Strip */}
          <AnimDiv delay={60} className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-6 sm:mt-8 max-w-4xl mx-auto">
            <div className="bg-white border border-black/8 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-xs hover:border-[#C29B38]/60 transition-colors text-center">
              <span className="block font-['Cinzel',serif] text-base sm:text-2xl font-bold text-[#141A17]">
                Zero Middlemen
              </span>
              <span className="text-[9.5px] sm:text-[10px] text-[#68726E] font-semibold uppercase tracking-wider block mt-0.5">
                Direct Quarry Pricing
              </span>
            </div>

            <div className="bg-white border border-black/8 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-xs hover:border-[#C29B38]/60 transition-colors text-center">
              <span className="block font-['Cinzel',serif] text-base sm:text-2xl font-bold text-[#141A17]">
                100% Homogeneous
              </span>
              <span className="text-[9.5px] sm:text-[10px] text-[#68726E] font-semibold uppercase tracking-wider block mt-0.5">
                Certified Rock Strata
              </span>
            </div>

            <div className="bg-white border border-[#C29B38]/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-xs hover:border-[#C29B38] transition-colors text-center bg-gradient-to-b from-[#C29B38]/10 to-white">
              <span className="block font-['Cinzel',serif] text-base sm:text-2xl font-bold text-[#134e3f]">
                300+ Designs
              </span>
              <span className="text-[9.5px] sm:text-[10px] text-[#C29B38] font-bold uppercase tracking-wider block mt-0.5">
                Govt. Awarded Elevation
              </span>
            </div>

            <div className="bg-white border border-black/8 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-xs hover:border-[#C29B38]/60 transition-colors text-center">
              <span className="block font-['Cinzel',serif] text-base sm:text-2xl font-bold text-[#141A17]">
                IS:3620 Tested
              </span>
              <span className="text-[9.5px] sm:text-[10px] text-[#68726E] font-semibold uppercase tracking-wider block mt-0.5">
                Lab Certified Strength
              </span>
            </div>
          </AnimDiv>
        </div>

        {/* =========================================================================
            STAGE 1: 6 CORE ADVANTAGE PILLARS IN A BALANCED 3x2 LUXURY CARD GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-20">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <AnimDiv key={reason.id} delay={idx * 50}>
                <div
                  className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 border transition-all duration-300 h-full flex flex-col justify-between group hover:-translate-y-1.5 ${
                    reason.highlight
                      ? "bg-gradient-to-b from-white via-white to-[#FAF7F2] border-[#C29B38] shadow-lg hover:shadow-2xl ring-1 ring-[#C29B38]/40"
                      : "bg-white border-black/8 hover:border-[#C29B38]/70 shadow-sm hover:shadow-xl"
                  }`}
                >
                  {/* Top Header Row of Card */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-xs ${
                          reason.highlight
                            ? "bg-[#134e3f] text-white"
                            : "bg-[#FAF7F2] text-[#134e3f] group-hover:bg-[#134e3f] group-hover:text-white"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Stat Display */}
                      <div className="text-right">
                        <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-extrabold text-[#141A17] block leading-none">
                          {reason.stat}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-[#68726E] uppercase tracking-wider font-semibold block mt-1">
                          {reason.statLabel}
                        </span>
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                          reason.highlight
                            ? "bg-[#134e3f]/10 text-[#134e3f] border-[#134e3f]/30"
                            : "bg-[#FAF7F2] text-[#C29B38] border-black/6"
                        }`}
                      >
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>{reason.badge}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-[#141A17] uppercase tracking-wide mb-3 group-hover:text-[#134e3f] transition-colors leading-snug">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#505D57] leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>

                  {/* Card Bottom Tag */}
                  <div className="pt-4 mt-5 border-t border-black/6 flex items-center justify-between text-[11px]">
                    <span className="text-[#C29B38] font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>{reason.tag}</span>
                    </span>
                    <a
                      href={`https://wa.me/919414945457?text=${encodeURIComponent(
                        `Hello Dholpurestones.com, I am inquiring regarding ${reason.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#68726E] hover:text-[#134e3f] font-bold uppercase text-[10px] tracking-wider transition-colors inline-flex items-center gap-1"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3 text-[#C29B38]" />
                    </a>
                  </div>
                </div>
              </AnimDiv>
            );
          })}
        </div>

        {/* =========================================================================
            STAGE 2: DIRECT QUARRY INFRASTRUCTURE & CERTIFIED GEOTECHNICAL LAB DATA
            Balanced 2-Column Showcase (Left: Quarry & Artisans / Right: Lab Certificate)
            ========================================================================= */}
        <div className="mb-14 sm:mb-18">
          <AnimDiv className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C29B38] tracking-[0.2em] uppercase block mb-1">
              TANGIBLE EVIDENCE &bull; MINE OPERATIONS &amp; LAB DATA
            </span>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wide text-[#141A17]">
              Verified Quarry Infrastructure &amp; Technical Specifications
            </h3>
            <p className="text-xs sm:text-sm text-[#68726E] mt-2">
              Inspect our live quarry concessions in Sarmathura and certified laboratory test reports adhering strictly to IS:3620 and ASTM C616 standards.
            </p>
          </AnimDiv>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column (6 Cols): Live Quarry Operations & Master Artisans Workshop */}
            <AnimDiv delay={100} className="lg:col-span-6 flex flex-col gap-6 justify-between">
              {/* Main Quarry Mining Operations Image */}
              <div className="relative rounded-3xl overflow-hidden bg-[#0D1311] border border-black/8 shadow-xl group flex-1 min-h-[280px]">
                <div className="relative h-full min-h-[280px] w-full overflow-hidden">
                  <Image
                    src="/assets/quarry_mining_operations.jpg"
                    alt="Sarmathura Sandstone Quarry Operations"
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                  {/* Live Quarry Status Badge */}
                  <div className="absolute top-4 left-4 bg-[#0D1311]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
                    </span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                      Active Mine Lease &bull; Sarmathura
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold text-[#C29B38] uppercase tracking-wider block mb-1">
                      Direct Geological Strata Concessions
                    </span>
                    <h4 className="font-['Cinzel',serif] text-base sm:text-xl font-bold leading-snug">
                      Over 500,000 Sq.Ft Sawn Quarry Capacity
                    </h4>
                    <p className="text-xs text-white/80 mt-1 line-clamp-2">
                      Modern diamond wire-saws and non-explosive block splitters operating continuously to fulfill large landmark orders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-Card: Master Artisans Stonecarving Workshop */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-black/8 p-5 shadow-md flex items-center gap-4 group hover:border-[#C29B38]/60 transition-colors">
                <div className="relative w-28 h-24 rounded-2xl overflow-hidden shrink-0 bg-black/10">
                  <Image
                    src="/assets/master_stone_artisans.jpg"
                    alt="Generational Master Sandstone Artisans"
                    fill
                    sizes="120px"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 text-[9px] font-bold text-[#134e3f] bg-[#134e3f]/10 px-2.5 py-0.5 rounded-md border border-[#134e3f]/20 uppercase tracking-wider mb-1.5">
                    <Hammer className="w-3 h-3 text-[#C29B38]" />
                    <span>Generational Carvers</span>
                  </div>
                  <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#141A17] uppercase tracking-wide truncate">
                    Shilpa Shastra Guild
                  </h4>
                  <p className="text-[11.5px] text-[#505D57] leading-relaxed line-clamp-2 mt-1">
                    Master artisans hand-sculpting monumental pillars, boundary wall copings, jali filigree, and floral capitals with traditional mallets.
                  </p>
                </div>
              </div>
            </AnimDiv>

            {/* Right Column (6 Cols): Geotechnical Quality Certificate & Mine Owner Guarantee */}
            <AnimDiv delay={150} className="lg:col-span-6 flex flex-col justify-between">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 shadow-xl flex flex-col justify-between h-full">
                <div>
                  {/* Certificate Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-black/8 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#134e3f]/10 text-[#134e3f] flex items-center justify-center">
                        <BadgeCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#141A17] uppercase tracking-wider">
                          Geotechnical Quality Certificate
                        </h4>
                        <span className="text-[10px] text-[#68726E]">Laboratory Test Report &bull; Bureau of Indian Standards</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#C29B38] uppercase tracking-widest bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#C29B38]/30">
                      IS:3620 &amp; ASTM C616
                    </span>
                  </div>

                  {/* 6 Full Laboratory Test Specs Table */}
                  <div className="space-y-2.5">
                    {technicalSpecs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#FAF7F2] border border-black/5 hover:border-[#C29B38]/40 transition-colors"
                      >
                        <div className="flex items-center gap-2 min-w-0 pr-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                          <span className="text-[#141A17] font-semibold text-[11.5px] truncate">
                            {spec.label}
                          </span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-[#141A17] font-bold text-[11.5px] font-mono block">
                            {spec.value}
                          </span>
                          <span className="text-[9.5px] text-[#C29B38] font-bold uppercase tracking-wider">
                            {spec.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Provenance Assurance Seal */}
                <div className="mt-5 pt-4 border-t border-black/8 flex items-center justify-between bg-[#FAF7F2] p-3.5 rounded-2xl">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#C29B38] shrink-0" />
                    <div>
                      <span className="text-[10.5px] font-bold text-[#141A17] uppercase tracking-wider block">
                        Official Quarry Provenance Guarantee
                      </span>
                      <span className="text-[9.5px] text-[#68726E]">
                        Sarmathura Leases &bull; Garg Corporation Ltd. (Estd. 1953)
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20please%20share%20official%20Geotechnical%20Lab%20Test%20Reports%20for%20Dholpur%20Sandstone."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-[#134e3f] bg-white border border-black/10 px-3 py-1.5 rounded-full hover:bg-[#134e3f] hover:text-white transition-colors shrink-0"
                  >
                    Request Lab PDF
                  </a>
                </div>
              </div>
            </AnimDiv>
          </div>
        </div>

        {/* =========================================================================
            STAGE 3: BOTTOM CALLOUT: Schedule Quarry Visit & WhatsApp Consultation
            ========================================================================= */}
        <AnimDiv delay={200}>
          <div id="mines" className="scroll-mt-20 sm:scroll-mt-24 bg-gradient-to-br from-[#134e3f] via-[#0e3b30] to-[#0A261F] rounded-3xl p-6 sm:p-10 border border-[#C29B38]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden text-white">
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-[#C29B38]/15 to-transparent animate-beam-sweep pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#C29B38]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl text-center lg:text-left relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#C29B38]/20 border border-[#C29B38]/40 px-3.5 py-1 rounded-full text-[10px] font-bold text-[#FAF7F2] uppercase tracking-widest mb-3 shadow-xs">
                <Flame className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>Visit Our Mines &amp; Processing Yards</span>
              </div>
              <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wider mb-2">
                Inspect Raw Strata Directly At Our Mines
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/80 leading-relaxed">
                Architects, developers, and estate owners are warmly invited to inspect live quarry benches in Sarmathura and select custom monolithic blocks for their landmark projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 relative z-10">
              <a
                href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20inquire%20about%20authentic%20sandstone%20directly%20mined%20from%20your%20Sarmathura%20quarries."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C29B38] hover:bg-[#dfb54b] text-[#0D1311] font-bold text-xs uppercase px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl active:scale-95 border border-[#C29B38]"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#0D1311]" size={16} />
                <span>Direct Quarry Consultation</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 active:scale-95 shadow-md"
              >
                <span>Schedule Quarry Tour</span>
              </a>
            </div>
          </div>
        </AnimDiv>
      </div>
    </section>
  );
}
