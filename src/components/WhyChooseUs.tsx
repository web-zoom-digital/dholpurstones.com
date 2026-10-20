"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Mountain,
  Hammer,
  Truck,
  Layers,
  Sparkles,
  BadgeCheck,
  Flame,
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

const reasons = [
  {
    id: "quarry-direct",
    icon: Mountain,
    badge: "100% OWN MINES",
    title: "Direct Mine Ownership & Zero Middlemen",
    shortDesc:
      "Direct extraction from our proprietary quarry leases in Sarmathura, Rajasthan. No trading intermediaries or distributor markups.",
    fullDetails:
      "We control the entire chain of custody from deep underground strata blasting to wire-cut block extraction. You receive unadulterated natural stone at genuine factory-direct wholesale rates with complete legal documentation and mining royalty clearance.",
    stat: "100%",
    statLabel: "Mine Direct Provenance",
  },
  {
    id: "geological-purity",
    icon: ShieldCheck,
    badge: "LAB TESTED DENSITY",
    title: "Superior Geological Density & Weather Endurance",
    shortDesc:
      "High compressive strength (>68 MPa) with low water absorption (<1.15%), naturally resisting extreme frost, harsh monsoon, and desert heat.",
    fullDetails:
      "Dholpur sandstone from our quarries is geologically renowned for fine quartz grains bound by siliceous cement. Unlike porous alternatives, our stone does not chip, crack, or discolor when exposed to acid rain, saline climates, or decades of UV radiation.",
    stat: ">68 MPa",
    statLabel: "Compressive Strength",
  },
  {
    id: "artisan-cnc",
    icon: Hammer,
    badge: "3RD GEN CRAFTSMEN",
    title: "Generational Artisans & 8-Axis CNC Precision",
    shortDesc:
      "Harmonious blend of ancestral Shilpa Shastra stone carvers and modern CNC profiling machinery for bespoke architectural detailing.",
    fullDetails:
      "Our Sikandra and Sarmathura facilities house both generational master masons chiseled in temple sculpting and advanced automated wire-saws. Whether you require laser-precise calibrated flooring or hand-carved ornamental jharokhas, we deliver millimeter tolerances.",
    stat: "±0.5mm",
    statLabel: "Calibration Tolerance",
  },
  {
    id: "color-uniformity",
    icon: Layers,
    badge: "HOMOGENEOUS STRATA",
    title: "Homogeneous Strata & Consistent Color Tones",
    shortDesc:
      "Strict sorting by color tones — Dholpur Red, Beige, White, and Chocolate — ensuring zero banding or shade mismatches across large projects.",
    fullDetails:
      "One of the biggest risks in natural stone is irregular color variation between batches. Because we operate our own expansive rock faces, we harvest contiguous geological benches, guaranteeing flawless visual continuity across hundreds of thousands of square feet.",
    stat: "500k+",
    statLabel: "Sq.Ft Quarry Capacity/Mo",
  },
  {
    id: "turnkey-export",
    icon: Truck,
    badge: "GLOBAL EXPORT",
    title: "ISPM-15 Certified Crating & Doorstep Delivery",
    shortDesc:
      "Seaworthy fumigated wooden crates, barcode tagging, and established logistics networks reaching global seaports and domestic job sites.",
    fullDetails:
      "Every slab and article is foam-separated, corner-guarded, and secured in heavy-duty timber packaging built to withstand rough ocean transit and crane handling. Supported by our corporate presence in Canada, exports are seamless and fully insured.",
    stat: "40+ Countries",
    statLabel: "Global Supply Footprint",
  },
];

const technicalSpecs = [
  { label: "Compressive Strength", value: "68.5 MPa (Dry) / 62.1 MPa (Wet)", status: "Exceeds IS:3620" },
  { label: "Water Absorption", value: "< 1.15% by weight", status: "Ultra Low Porosity" },
  { label: "Specific Gravity / Density", value: "2.42 - 2.50 g/cm³", status: "High Quartz Density" },
  { label: "Modulus of Rupture", value: "11.2 - 13.5 N/mm²", status: "Structural Grade" },
  { label: "Thermal Conductivity", value: "Naturally thermally insulating", status: "Pleasantly Cool" },
  { label: "Weathering Resistance", value: "Zero efflorescence, UV stable", status: "Centuries Durability" },
];

export default function WhyChooseUs() {
  const [activeReason, setActiveReason] = useState(reasons[0].id);

  return (
    <section
      id="why-choose"
      className="bg-white py-14 sm:py-24 border-b border-black/6 relative overflow-hidden"
    >
      {/* Background Subtle Architectural Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C29B38_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      {/* Floating Animated Radiant Glow Orbs */}
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#C29B38]/6 rounded-full blur-[140px] pointer-events-none animate-ambient-float-1" />
      <div className="absolute bottom-10 right-10 w-[480px] h-[480px] bg-[#134e3f]/6 rounded-full blur-[130px] pointer-events-none animate-ambient-float-2" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Label */}
        <AnimDiv className="flex items-center justify-between pb-3 border-b border-black/8 mb-8 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C29B38] animate-pulse" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#141A17] uppercase">
              DHOLPURESTONES.COM &bull; WHY CHOOSE US
            </span>
          </div>
          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C29B38] tracking-widest">
            04
          </span>
        </AnimDiv>

        {/* Section Title & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <AnimDiv delay={0} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29B38]/10 border border-[#C29B38]/25 text-[#C29B38] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Mine Owner Advantage Since 1953</span>
            </div>
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-5xl font-bold text-[#141A17] uppercase tracking-wide mb-3">
              Why Choose
            </h2>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl lg:text-3xl font-bold text-[#C29B38] uppercase tracking-wider mb-3">
              Authentic Sandstone, Mined Straight from Our Quarries
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C29B38] via-[#E0BA55] to-transparent rounded-full mb-4" />
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#68726E] leading-relaxed">
              We own and operate proprietary sandstone quarry concessions in Sarmathura, Rajasthan. By eliminating all commercial middlemen, we guarantee homogeneous mineral strata, certified geotechnical strength, and direct quarry pricing for world-class architectural projects.
            </p>
          </AnimDiv>

          {/* Key Metric Badges */}
          <AnimDiv delay={100} className="grid grid-cols-2 gap-3 sm:flex shrink-0 w-full lg:w-auto">
            <div className="bg-[#FAF7F2] border border-black/8 rounded-2xl px-3.5 sm:px-5 py-3 sm:py-3.5 shadow-xs hover:border-[#C29B38]/60 transition-colors text-center sm:text-left">
              <span className="block font-['Cinzel',serif] text-base sm:text-2xl font-bold text-[#141A17]">
                Zero Middlemen
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#68726E] font-semibold uppercase tracking-wider block">
                Direct Quarry Pricing
              </span>
            </div>
            <div className="bg-[#FAF7F2] border border-black/8 rounded-2xl px-3.5 sm:px-5 py-3 sm:py-3.5 shadow-xs hover:border-[#C29B38]/60 transition-colors text-center sm:text-left">
              <span className="block font-['Cinzel',serif] text-base sm:text-2xl font-bold text-[#141A17]">
                100% Homogeneous
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#68726E] font-semibold uppercase tracking-wider block">
                Certified Rock Strata
              </span>
            </div>
          </AnimDiv>
        </div>

        {/* =========================================================================
            SPLIT SHOWCASE: Left Visual Quarry Documentary + Right Interactive Pillars
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 sm:mb-16">
          {/* Left Column (5 Cols): Live Quarry Operations & Craftsmen Feature */}
          <AnimDiv delay={150} className="lg:col-span-5 flex flex-col gap-6">
            {/* Main Quarry Mining Operations Image */}
            <div className="relative rounded-3xl overflow-hidden bg-[#0D1311] border border-black/8 shadow-xl group">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <Image
                  src="/assets/quarry_mining_operations.jpg"
                  alt="Sarmathura Sandstone Quarry Operations"
                  fill
                  sizes="(max-width:1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* Live Quarry Status Badge */}
                <div className="absolute top-3 left-3 bg-[#0D1311]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
                  </span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Active Mine Lease &bull; Sarmathura
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold text-[#C29B38] uppercase tracking-wider block mb-1">
                    Direct Geological Strata
                  </span>
                  <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold leading-snug">
                    Over 500,000 Sq.Ft Sawn Quarry Capacity
                  </h4>
                </div>
              </div>
            </div>

            {/* Sub-Card: Master Artisans Stonecarving Workshop */}
            <div className="relative rounded-3xl overflow-hidden bg-[#FAF7F2] border border-black/8 p-5 shadow-md flex items-center gap-4 group hover:border-[#C29B38]/60 transition-colors">
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
                <div className="inline-flex items-center gap-1.5 text-[9px] font-bold text-[#134e3f] bg-white px-2 py-0.5 rounded-md border border-black/5 uppercase tracking-wider mb-1">
                  <Hammer className="w-3 h-3 text-[#C29B38]" />
                  <span>Generational Carvers</span>
                </div>
                <h5 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#141A17] uppercase tracking-wide truncate">
                  Shilpa Shastra Guild
                </h5>
                <p className="text-[11px] text-[#68726E] leading-relaxed line-clamp-2">
                  Master artisans hand-sculpting monumental pillars, jali filigree, and floral capitals with traditional mallets.
                </p>
              </div>
            </div>

            {/* Geotechnical Lab Test Table Accordion */}
            <div className="bg-[#FAF7F2] rounded-3xl p-5 border border-black/8 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-black/8 mb-3">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#134e3f]" />
                  <span className="text-xs font-bold text-[#141A17] uppercase tracking-wider">
                    Geotechnical Quality Certificate
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#C29B38] uppercase tracking-widest bg-white px-2 py-0.5 rounded border border-black/5">
                  IS:3620 Compliant
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {technicalSpecs.slice(0, 4).map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 rounded-xl bg-white border border-black/5"
                  >
                    <span className="text-[#68726E] font-medium text-[11px]">
                      {spec.label}
                    </span>
                    <span className="text-[#141A17] font-bold text-[11px] font-mono">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimDiv>

          {/* Right Column (7 Cols): Interactive Advantage Pillars */}
          <AnimDiv delay={200} className="lg:col-span-7 flex flex-col gap-4">
            {reasons.map((reason) => {
              const isSelected = activeReason === reason.id;
              const IconComponent = reason.icon;
              return (
                <div
                  key={reason.id}
                  onClick={() => setActiveReason(reason.id)}
                  className={`group relative rounded-2xl p-5 sm:p-6 border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#FAF7F2] border-[#C29B38] shadow-xl scale-[1.01]"
                      : "bg-white border-black/8 hover:border-[#C29B38]/50 hover:bg-[#FAF7F2]/50 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Box */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                        isSelected
                          ? "bg-[#134e3f] text-white"
                          : "bg-[#FAF7F2] text-[#C29B38] group-hover:bg-[#134e3f] group-hover:text-white"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-bold text-[#C29B38] uppercase tracking-widest bg-white px-2.5 py-0.5 rounded-full border border-black/6">
                          {reason.badge}
                        </span>
                        <div className="text-right">
                          <span className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#141A17] block">
                            {reason.stat}
                          </span>
                          <span className="text-[9px] text-[#68726E] uppercase tracking-wider block">
                            {reason.statLabel}
                          </span>
                        </div>
                      </div>

                      <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-[#141A17] uppercase tracking-wide mb-1.5 group-hover:text-[#134e3f] transition-colors">
                        {reason.title}
                      </h4>

                      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#68726E] leading-relaxed mb-3">
                        {reason.shortDesc}
                      </p>

                      {/* Expandable details when selected */}
                      {isSelected && (
                        <div className="mt-3 pt-3 border-t border-black/8 text-xs text-[#4A5550] leading-relaxed bg-white/70 p-3 rounded-xl animate-fadeIn">
                          {reason.fullDetails}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </AnimDiv>
        </div>

        {/* =========================================================================
            BOTTOM CALLOUT: Schedule Quarry Visit & WhatsApp Direct Mine Consultation
            ========================================================================= */}
        <AnimDiv delay={250}>
          <div className="bg-gradient-to-br from-[#134e3f] via-[#0e3b30] to-[#0A261F] rounded-3xl p-6 sm:p-10 border border-[#C29B38]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden text-white">
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
                Architects, developers, and temple committees are warmly invited to inspect live quarry benches in Sarmathura and select custom monolithic blocks for their landmark projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 relative z-10">
              <a
                href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20inquire%20about%20authentic%20sandstone%20directly%20mined%20from%20your%20Sarmathura%20quarries."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-[#0A0F0D] hover:bg-white font-bold text-xs uppercase px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#0A0F0D]" size={16} />
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
