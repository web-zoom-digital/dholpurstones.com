"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuTreePine as TreePine,
  LuHouse as Home,
  LuSparkles as Sparkles,
  LuDroplets as Droplets,
  LuRuler as Ruler,
  LuLayers as Layers,
  LuSun as Sun,
  LuShieldCheck as ShieldCheck,
  LuCircleCheck as CheckCircle2,
  LuArrowRight as ArrowRight,
  LuCompass as Compass,
  LuPhone as Phone,
  LuMaximize2 as Maximize2,
  LuX as X,
  LuAward as Award,
  LuTrophy as Trophy
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

export interface FarmhouseItem {
  id: string;
  number: string;
  title: string;
  category: "all" | "elevation" | "entrance" | "lawns" | "water" | "pool";
  categoryLabel: string;
  subtitle: string;
  image: string;
  desc: string;
  specs: { label: string; value: string }[];
  features: string[];
  waMsg: string;
}

const farmhouseSolutions: FarmhouseItem[] = [
  {
    id: "elevation-facades",
    number: "01",
    category: "elevation",
    categoryLabel: "FRONT ELEVATION",
    title: "Farm House Front Elevation (300+ Designs)",
    subtitle: "Govt. of India Awarded Bespoke Sandstone Facades",
    image: "/assets/garg/crop_lion.jpg",
    desc: "Complete architectural sandstone front elevation engineering for palatial farm houses and countryside villas. Over 300+ bespoke designs awarded by the Government of India, featuring fluted monolithic pillars, carved jharokhas, ornate balconies, decorative stone brackets, and heritage cornice friezes.",
    specs: [
      { label: "Design Range", value: "300+ Classical, Colonial & Modern Elevation Blueprints" },
      { label: "Stone Types", value: "Sarmathura Dholpur Red, Beige, Chocolate & Pink Sandstone" },
      { label: "Carving Precision", value: "Hand-Crafted by 3rd Gen Artisans & 8-Axis CNC Cutting" },
      { label: "Recognition", value: "Awarded by Govt. of India for Design Excellence" },
    ],
    features: [
      "Custom elevation blueprints tailored to your architect's 2D drawings and 3D CAD files",
      "Monolithic interlocking dry-joint sandstone blocks engineered for structural longevity",
      "Natural stone thermal insulation keeps farm house interiors cooler during scorching summers",
      "End-to-end quarry-direct supply with numbered stone cladding layout schemes",
    ],
    waMsg: "Hello Director Arvind Garg, I would like to explore 300+ Front Elevation sandstone designs for my Farm House project.",
  },
  {
    id: "entrance-portals",
    number: "02",
    category: "entrance",
    categoryLabel: "GATES & BOUNDARY",
    title: "Grand Farm House Entrance Gates & Boundary Masonry",
    subtitle: "Heavy Monolithic Pillar Blocks, Copings & Lion Crests",
    image: "/assets/landscaping/landscape_steps_walling.jpg",
    desc: "Make an imposing first impression with majestic farm house entrance portals. Solid hand-carved stone gate pillars up to 18 feet in height, ornamental stone archways, decorative lion sculptures, lamp caps, and continuous sandstone boundary wall coping that protects and defines vast private acreage.",
    specs: [
      { label: "Gate Pillar Heights", value: "8ft to 18ft Monolithic & Segmental Stone Pillars" },
      { label: "Boundary Wall Coping", value: "Chamfered, Double Bullnose, Saddleback & Weathered" },
      { label: "Load Capacity", value: "Heavy-Duty Reinforced for Heavy Automated Iron Gates" },
      { label: "Protection", value: "Integrated Drip Grooves to Prevent Water Runoff Staining" },
    ],
    features: [
      "Massive structural gate pillars designed to anchor motorized wrought-iron or wooden gates",
      "Hand-chiseled stone lion statues and eagle emblems for royal estate entrances",
      "Interlocking boundary wall coping blocks with anti-weathering drip edges",
      "Pre-drilled conduit cores for seamless electrical wiring of gate security lights",
    ],
    waMsg: "Hello Dholpurestones.com, I am inquiring about Grand Entrance Gate Pillars and Boundary Wall Copings for a Farm House.",
  },
  {
    id: "garden-gazebos",
    number: "03",
    category: "lawns",
    categoryLabel: "GARDEN ARCHITECTURE",
    title: "Hand-Carved Garden Gazebos & Stone Baradaris",
    subtitle: "Octagonal & Circular Pavilions for Sprawling Lawns",
    image: "/assets/garg/temple_sanctum_pillars.jpg",
    desc: "Create a serene outdoor retreat with hand-sculpted sandstone garden baradaris, domed gazebos, and pillared pergolas. Crafted from uniform fine-grained Dholpur sandstone, these pavilions provide a shady oasis amidst manicured lawns and blooming gardens.",
    specs: [
      { label: "Structure Typology", value: "4-Pillar, 6-Pillar & 8-Pillar Octagonal Pavilions" },
      { label: "Roofing Options", value: "Solid Sandstone Carved Dome, Flat Ribbed, or Open Pergola" },
      { label: "Plinth Flooring", value: "Calibrated Sandstone Flagstones with Ornamental Border Inlay" },
      { label: "Assembly", value: "Pre-Engineered Mortise-and-Tenon Dry Interlocking Joints" },
    ],
    features: [
      "Intricately carved capital pillars, cusped Mughal arches, and ornamental chhatri domes",
      "Weather-resistant natural sandstone that never rots, rusts, or requires chemical painting",
      "Integrated perimeter stone bench seating with ergonomically curved backrests",
      "Factory dry-fitted and numbered before dispatch to ensure rapid on-site erection",
    ],
    waMsg: "Hello Dholpurestones.com, I want to inquire about a Hand-Carved Sandstone Garden Gazebo / Baradari for my Farm House lawn.",
  },
  {
    id: "fountains-cascades",
    number: "04",
    category: "water",
    categoryLabel: "WATER FEATURES",
    title: "Monumental Garden Water Fountains & Lotus Pools",
    subtitle: "Regal Multi-Tiered Acoustic Centerpieces for Driveway Rotundas",
    image: "/assets/projects/signature_estate_fountain.jpg",
    desc: "Nothing elevates a luxury farm house garden quite like the sound of cascading water over hand-chiseled natural stone. Multi-tiered fountains, blooming lotus flower basins, and pool centerpieces carved from single monolithic blocks of Sarmathura sandstone.",
    specs: [
      { label: "Diameter Range", value: "4 feet to 20 feet Tiered Basins & Custom Radial Pools" },
      { label: "Height Options", value: "3-Tier, 4-Tier, and 5-Tier Fountains up to 18ft Tall" },
      { label: "Internal Plumbing", value: "Precision Pre-Cored Copper/PVC Water Conduit Lines" },
      { label: "Acoustics", value: "Engineered Scalloped Edge Lips for Gentle Water Splash" },
    ],
    features: [
      "Traditional lion-mouth spouts, lotus petals, and ornate urn fountains",
      "Supplied with watertight modular pond surround copings with curved radius stones",
      "Dense siliceous stone naturally immune to constant algae erosion and mineral stains",
      "Perfect acoustic centerpiece for main driveway rotunda or central lawn plaza",
    ],
    waMsg: "Hello Dholpurestones.com, I am interested in a Multi-Tier Sandstone Water Fountain for my Farm House garden.",
  },
  {
    id: "patio-walkways",
    number: "05",
    category: "lawns",
    categoryLabel: "GARDEN WALKWAYS",
    title: "Natural Cleft Garden Walkways & Lawn Stepping Stones",
    subtitle: "Heat-Reflective, Barefoot-Friendly Anti-Slip Flagstones",
    image: "/assets/landscaping/landscape_patio_paving.jpg",
    desc: "Wind through lush lawn grasses with natural cleft sandstone stepping stones and expansive patio flaggings. High-tactile grip prevents slipping during morning dew or monsoon downpours, while natural thermal dissipation keeps the stones delightfully cool under bare feet.",
    specs: [
      { label: "Format Options", value: "Crazy Paving, Sawn Organic Steppers & Precision Tiles" },
      { label: "Standard Sizes", value: "600x400, 600x600, 900x600mm & Random Flagstone" },
      { label: "Slip Resistance", value: "Class R11–R12 Certified High Anti-Slip Texture" },
      { label: "Barefoot Comfort", value: "Low Thermal Conductivity (Never Burns Feet in Summer)" },
    ],
    features: [
      "Natural cleft split surface provides organic rustic charm that blends seamlessly into grass",
      "Calibrated back thickness (+/-1mm) ensures smooth, trip-free laying without uneven edges",
      "High silica mineral density prevents moss penetration and efflorescence discoloration",
      "Stays completely cool and pleasant under intense 45°C summer sunlight",
    ],
    waMsg: "Hello Dholpurestones.com, I would like to inquire about Sandstone Garden Walkways & Lawn Stepping Stones for my Farm House.",
  },
  {
    id: "cobblestone-driveways",
    number: "06",
    category: "entrance",
    categoryLabel: "DRIVEWAYS & COURTYARDS",
    title: "Cobblestone Carriage Driveways & Portico Courtyards",
    subtitle: "Heavy-Duty Axle Load-Bearing Hand-Split Sandstone Paving",
    image: "/assets/landscaping/landscape_cobblestone_driveway.jpg",
    desc: "Engineered specifically for heavy vehicle traffic — from luxury SUVs to estate service trucks. Hand-dressed sandstone cobblestones laid in fan, herringbone, or linear patterns, creating an aristocratic European manor or royal Rajasthani haveli arrival experience.",
    specs: [
      { label: "Standard Dimensions", value: "100x100x50mm, 140x140x60mm, 100x200x50mm" },
      { label: "Compressive Strength", value: "68–72 MPa (Extreme Wheel-Load Bearing Capacity)" },
      { label: "Surface Texture", value: "Hand-Split Natural Top with Sawn or Tumbled Edges" },
      { label: "Pattern Styles", value: "Herringbone, Stretcher Bond, Circular Fan & Basketweave" },
    ],
    features: [
      "Extreme crushing resistance handles heavy luxury vehicles without cracking or shifting",
      "Naturally non-skid surface provides maximum vehicle tire traction in torrential rains",
      "Permeable jointing allows rapid rainwater percolation and eco-friendly groundwater recharge",
      "Timeless heritage aesthetic that gets richer and more distinguished with every passing decade",
    ],
    waMsg: "Hello Dholpurestones.com, I need a quotation for Hand-Split Sandstone Cobblestones for a Farm House Driveway.",
  },
  {
    id: "poolside-surrounds",
    number: "07",
    category: "pool",
    categoryLabel: "POOL & SUN DECKS",
    title: "Farm House Poolside Copings & Sunken Lounge Decks",
    subtitle: "Smooth CNC Bullnosed Stones Resistant to Chlorine & Heat",
    image: "/assets/landscaping/landscape_pool_coping.jpg",
    desc: "Transform your farm house private swimming pool into a 5-star wellness sanctuary. Precision CNC machined full bullnose coping stones and drop-face rebated pavers that provide smooth, injury-free edges and safe footing for children and guests wet or dry.",
    specs: [
      { label: "Edge Finishes", value: "Full Bullnose, Half Bullnose, Pencil Round, Drop-Face" },
      { label: "Water Absorption", value: "< 1.15% (Ultra-Dense Siliceous Sandstone Stratum)" },
      { label: "Chemical Resilience", value: "100% Resistant to Chlorine, Bromine & Saltwater Systems" },
      { label: "Standard Dimensions", value: "600x300, 600x400, 900x450mm & Custom Radial Curved Steps" },
    ],
    features: [
      "Smooth rounded bullnose edge prevents scrapes and provides a comfortable handhold in water",
      "Satin honed non-slip surface stays completely secure under wet bare feet",
      "Unlike granite or porcelain tiles, sandstone remains naturally cool in direct afternoon sun",
      "Custom radius arc stones cut to millimeter precision for curved and freeform pool designs",
    ],
    waMsg: "Hello Dholpurestones.com, I am inquiring about Sandstone Pool Coping & Non-Slip Decks for a Farm House pool.",
  },
  {
    id: "stone-lanterns-planters",
    number: "08",
    category: "lawns",
    categoryLabel: "OUTDOOR DECOR",
    title: "Perforated Sandstone Lanterns, Lamp Posts & Planters",
    subtitle: "Hand-Chiseled Stone Garden Decor & Evening Ambient Lighting",
    image: "/assets/garg/crop_lantern.jpg",
    desc: "Complete your farm house garden with exquisite hand-carved sandstone lamp posts, perforated jali lanterns, and massive stone urn planters. When illuminated from within at dusk, the intricate lattice patterns cast mesmerizing golden shadows across your garden walkways and lawn lawns.",
    specs: [
      { label: "Lamp Post Heights", value: "3ft Bollards to 10ft Monumental Garden Light Posts" },
      { label: "Crafting Technique", value: "100% Pierced Jali Lattice Openwork Sculpted by Hand" },
      { label: "Integrated Wiring", value: "Pre-Cored Internal Conduit Shafts for Low-Voltage LED Lights" },
      { label: "Weatherproofing", value: "100% Stormproof, Rainproof, and Unaffected by Garden Sprinklers" },
    ],
    features: [
      "Perforated geometrical and floral jali patterns that transform gardens into magical evening settings",
      "Heavy weighted base blocks that withstand high storm winds without falling or swaying",
      "Massive hand-carved stone planters and urns that age gracefully alongside blooming plants",
      "Authentic artisanal masonry crafted in our Sikandra workshops using certified Dholpur stone",
    ],
    waMsg: "Hello Dholpurestones.com, I would like to explore Carved Sandstone Garden Lanterns and Lamp Posts for my Farm House.",
  },
];

const tabs = [
  { id: "all", label: "All Solutions (8)", icon: Layers },
  { id: "elevation", label: "Front Elevation", icon: Home },
  { id: "entrance", label: "Gates & Driveways", icon: Ruler },
  { id: "lawns", label: "Lawns & Gazebos", icon: TreePine },
  { id: "water", label: "Water Fountains", icon: Sparkles },
  { id: "pool", label: "Poolside Coping", icon: Droplets },
];

interface FarmHouseGardenSpecialistProps {
  isHomePreview?: boolean;
}

export default function FarmHouseGardenSpecialist({
  isHomePreview = false,
}: FarmHouseGardenSpecialistProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeModal, setActiveModal] = useState<FarmhouseItem | null>(null);

  const filteredItems =
    activeTab === "all"
      ? farmhouseSolutions
      : farmhouseSolutions.filter((item) => item.category === activeTab);

  const displayItems = isHomePreview ? filteredItems.slice(0, 4) : filteredItems;

  return (
    <section
      id="farmhouse-gardens"
      className="bg-[#FAF7F2] scroll-mt-20 sm:scroll-mt-24 py-10 sm:py-20 border-b border-black/8 relative overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#C29B38]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[#134e3f]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pre-Header Badge */}
        <AnimDiv className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-black/8 mb-6 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#134e3f] animate-pulse" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#141A17] uppercase">
              DHOLPURESTONES &bull; FARM HOUSE &amp; GARDEN SPECIALIST
            </span>
          </div>
          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C29B38] tracking-widest">
            ESTD. 1953
          </span>
        </AnimDiv>

        {/* Grand Headline Highlighting User Requirements */}
        <AnimDiv delay={40} className="text-center max-w-4xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#134e3f]/10 border border-[#134e3f]/25 mb-3 sm:mb-4 shadow-2xs">
            <TreePine className="w-3.5 h-3.5 text-[#134e3f]" />
            <span className="font-['Cinzel',serif] text-[9.5px] sm:text-xs font-bold text-[#134e3f] tracking-[0.16em] sm:tracking-[0.2em] uppercase">
              SPECIALIZED IN LUXURY FARM HOUSES &amp; DESIGNER GARDEN LANDSCAPING
            </span>
          </div>

          <h2 className="font-['Cinzel',serif] font-bold text-[#141A17] uppercase tracking-[0.03em] leading-snug sm:leading-[1.16] text-xl sm:text-4xl lg:text-5xl">
            Natural Sand Stone Solutions for Luxury Farm Houses &amp; Garden Landscapes
          </h2>

          <div className="mt-3 sm:mt-4 max-w-3xl mx-auto">
            <p className="font-['EB_Garamond',serif] text-base sm:text-xl text-[#141A17]/90 leading-relaxed font-semibold">
              Transforming vast private acreage, countryside retreats, and sprawling estate lawns into timeless royal sanctuaries with authentic Sarmathura natural sandstone.
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#505D57] mt-2 sm:mt-2.5 leading-relaxed">
              We have made more than{" "}
              <strong className="text-[#134e3f] font-bold underline decoration-[#C29B38]/60 underline-offset-4">
                300+ designs for front elevation in sandstone
              </strong>
              , for which we were awarded by the Government of India and nominated for the International Award for Business Excellence.
            </p>
          </div>
        </AnimDiv>

        {/* Filter Navigation Tabs */}
        <AnimDiv delay={80} className="flex items-center sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 mb-8 sm:mb-12 scrollbar-none w-full -mx-1 px-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#134e3f] text-white shadow-md shadow-[#134e3f]/30 border border-[#134e3f] scale-[1.02]"
                    : "bg-white text-[#4A5550] border border-black/8 hover:border-[#C29B38] hover:text-[#141A17]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#C29B38]" : "text-[#68726E]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </AnimDiv>

        {/* Farm House & Garden Masonry Solutions Grid (4 on Home Preview, 8 on Dedicated Page) */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${isHomePreview ? "mb-8 sm:mb-12" : "mb-12 sm:mb-20"}`}>
          {displayItems.map((item, idx) => (
            <AnimDiv key={item.id} delay={idx * 60}>
              <div
                onClick={() => setActiveModal(item)}
                className="bg-white rounded-2xl overflow-hidden border border-black/8 hover:border-[#C29B38]/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
              >
                <div>
                  {/* Image Container with Zoom & Badge */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE4D7]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Number Badge */}
                    <span className="absolute top-3 left-3 bg-[#134e3f] text-white font-['Cinzel',serif] text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
                      {item.number}
                    </span>

                    {/* Category Label */}
                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-[#E0BA55] text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#C29B38]/40">
                      {item.categoryLabel}
                    </span>

                    {/* Title overlay at bottom of image */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[10px] text-white/80 uppercase font-semibold tracking-wider block">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#141A17] uppercase tracking-wide group-hover:text-[#134e3f] transition-colors mb-1.5 sm:mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] sm:text-xs text-[#505D57] leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                      {item.desc}
                    </p>

                    {/* Quick Specs Snippet */}
                    <div className="space-y-1.5 pt-2.5 sm:pt-3 border-t border-black/6">
                      {item.specs.slice(0, 2).map((s, i) => (
                        <div key={i} className="flex items-center justify-between text-[10.5px] sm:text-[11px]">
                          <span className="text-[#68726E] font-medium">{s.label}:</span>
                          <span className="text-[#141A17] font-bold text-right truncate max-w-[55%]">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 sm:p-5 pt-0">
                  <div className="pt-2.5 sm:pt-3 border-t border-black/6 flex items-center justify-between">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#134e3f] group-hover:text-[#C29B38] uppercase tracking-wider transition-colors"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href={`https://wa.me/919414945457?text=${encodeURIComponent(item.waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                      aria-label="WhatsApp Inquiry"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimDiv>
          ))}
        </div>

        {/* View More Button for Homepage Preview */}
        {isHomePreview && (
          <AnimDiv delay={80} className="text-center mb-16 sm:mb-20">
            <div className="bg-gradient-to-b from-[#134e3f]/8 via-white to-[#FAF7F2] p-6 sm:p-9 rounded-3xl border border-[#134e3f]/20 shadow-md max-w-2xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#134e3f]/10 text-[#134e3f] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>Showing 4 of 8 Master Solutions</span>
              </div>
              <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#141A17] mb-2 uppercase tracking-wide">
                View All Farm House &amp; Garden Solutions
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#505D57] max-w-lg mb-6 leading-relaxed">
                Explore our full spectrum of specialized estate masonry — including Cobblestone Carriage Driveways, Natural Cleft Lawn Walkways, Anti-Slip Pool Copings, and Ambient Stone Lanterns.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                <Link
                  href="/farmhouse-gardens"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full bg-[#134e3f] hover:bg-[#0c3329] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-[#C29B38]/40 group"
                >
                  <span>View More (All 8 Designs)</span>
                  <ArrowRight className="w-4 h-4 text-[#C29B38] transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20explore%20all%208%20Farm%20House%20%26%20Garden%20stone%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-full bg-white hover:bg-[#FAF7F2] text-[#141A17] border border-black/10 transition-colors shadow-2xs active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" size={16} />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </AnimDiv>
        )}

        {/* 4 Pillars: Why Natural Sandstone Is Essential for Farm Houses & Gardens */}
        <AnimDiv delay={100} className="mb-14 sm:mb-18">
          <div className="bg-[#161D1A] rounded-3xl p-6 sm:p-10 text-white border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C29B38]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 relative z-10">
              <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C29B38] tracking-[0.2em] uppercase block mb-1">
                ESTATE OWNER ADVANTAGE
              </span>
              <h3 className="font-['Cinzel',serif] text-xl sm:text-3xl font-bold uppercase tracking-wider text-white">
                Why Sarmathura Sandstone is the Definitive Choice for Farm Houses
              </h3>
              <p className="text-xs sm:text-sm text-white/75 mt-2.5 leading-relaxed">
                Direct extraction from our proprietary quarries in Sarmathura, Rajasthan ensures your private estate receives uniform, high-density silica stone built to endure generations.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 relative z-10">
              <div className="bg-white/5 border border-white/8 rounded-xl sm:rounded-2xl p-3 sm:p-5 hover:border-[#C29B38]/50 transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#C29B38]/15 flex items-center justify-center text-[#C29B38] mb-2 sm:mb-3">
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1 sm:mb-2 leading-tight">
                  Barefoot Thermal Comfort
                </h4>
                <p className="text-[10px] sm:text-xs text-white/70 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Unlike granite or vitrified tiles that burn bare feet in summer, natural sandstone stays pleasantly cool even in 45°C midday sun.
                </p>
              </div>

              <div className="bg-white/5 border border-white/8 rounded-xl sm:rounded-2xl p-3 sm:p-5 hover:border-[#C29B38]/50 transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#C29B38]/15 flex items-center justify-center text-[#C29B38] mb-2 sm:mb-3">
                  <Droplets className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1 sm:mb-2 leading-tight">
                  Natural Anti-Slip Grip
                </h4>
                <p className="text-[10px] sm:text-xs text-white/70 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Natural cleft textures provide certified R11/R12 slip resistance, ensuring safety for children and elders during monsoon rains and near pool edges.
                </p>
              </div>

              <div className="bg-white/5 border border-white/8 rounded-xl sm:rounded-2xl p-3 sm:p-5 hover:border-[#C29B38]/50 transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#C29B38]/15 flex items-center justify-center text-[#C29B38] mb-2 sm:mb-3">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1 sm:mb-2 leading-tight">
                  300+ Front Elevations
                </h4>
                <p className="text-[10px] sm:text-xs text-white/70 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Awarded by Govt. of India for creating over 300 turnkey front elevation designs tailored for royal farm houses and country residences.
                </p>
              </div>

              <div className="bg-white/5 border border-white/8 rounded-xl sm:rounded-2xl p-3 sm:p-5 hover:border-[#C29B38]/50 transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#C29B38]/15 flex items-center justify-center text-[#C29B38] mb-2 sm:mb-3">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1 sm:mb-2 leading-tight">
                  Zero Middlemen Pricing
                </h4>
                <p className="text-[10px] sm:text-xs text-white/70 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Direct mine-to-site delivery from our own quarry leases in Sarmathura and Sikandra, saving estate owners substantial costs on large acreage.
                </p>
              </div>
            </div>
          </div>
        </AnimDiv>

        {/* Bottom Turnkey Consultation CTA Bar */}
        <AnimDiv delay={120} className="bg-gradient-to-r from-[#134e3f] via-[#1a5f4e] to-[#134e3f] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold text-[#E0BA55] uppercase tracking-[0.2em] block mb-1">
              TURNKEY ARCHITECTURAL STONE ESTIMATION
            </span>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold uppercase tracking-wide">
              Planning a Luxury Farm House or Garden Landscape?
            </h3>
            <p className="text-xs sm:text-sm text-white/85 mt-2 leading-relaxed">
              Consult directly with Director Arvind Garg (Awarded by Govt. of India &bull; Nominated for International Award for Business Excellence). Send your landscape layout or CAD drawings for expedited factory quotes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={`https://wa.me/919414945457?text=${encodeURIComponent(
                "Hello Director Arvind Garg, I am planning a Luxury Farm House / Garden Landscaping project and would like to consult on stone supply and 300+ front elevation designs."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-[#0D1311] font-bold text-xs uppercase px-6 py-3.5 rounded-full transition-all shadow-lg active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#0D1311]" size={16} />
              <span>WhatsApp Arvind Garg Directly</span>
            </a>

            <a
              href="tel:+919414945457"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-full transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#C29B38]" />
              <span>Call +91 94149 45457</span>
            </a>
          </div>
        </AnimDiv>
      </div>

      {/* Interactive Item Modal */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-black/10 p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-black/10 flex items-center justify-center text-[#141A17] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold text-[#134e3f] bg-[#134e3f]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {activeModal.categoryLabel}
              </span>
              <span className="text-xs text-[#68726E] font-mono">#{activeModal.number}</span>
            </div>

            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#141A17] uppercase tracking-wide mb-1">
              {activeModal.title}
            </h3>
            <p className="text-xs font-semibold text-[#C29B38] mb-4">{activeModal.subtitle}</p>

            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#FAF7F2] mb-5">
              <Image
                src={activeModal.image}
                alt={activeModal.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#4A5550] leading-relaxed mb-5 font-['Plus_Jakarta_Sans',sans-serif]">
              {activeModal.desc}
            </p>

            {/* Detailed Specs Table */}
            <div className="bg-[#FAF7F2] rounded-2xl p-4 sm:p-5 border border-black/6 mb-5 space-y-2">
              <span className="text-[10px] font-bold text-[#141A17] uppercase tracking-wider block mb-2">
                Technical Specifications &amp; Crafting
              </span>
              {activeModal.specs.map((s, i) => (
                <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-black/5 last:border-0">
                  <span className="text-[#68726E] font-medium">{s.label}:</span>
                  <span className="text-[#141A17] font-bold text-right">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Features Bullet List */}
            <div className="mb-6 space-y-2">
              <span className="text-[10px] font-bold text-[#141A17] uppercase tracking-wider block mb-1">
                Key Architectural Features:
              </span>
              {activeModal.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#4A5550]">
                  <CheckCircle2 className="w-4 h-4 text-[#134e3f] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-black/8 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/919414945457?text=${encodeURIComponent(activeModal.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase px-6 py-3.5 rounded-full transition-all shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                <span>Inquire on WhatsApp for Quotation</span>
              </a>

              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-black/15 text-xs font-bold text-[#4A5550] hover:bg-black/5 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
