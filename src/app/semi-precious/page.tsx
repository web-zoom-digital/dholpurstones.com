"use client";

import React, { useState, useEffect, useRef } from "react";
import AnimDiv from "@/components/ui/AnimDiv";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, itemListLd, faqLd } from "@/lib/schema";
import FaqSection from "@/components/FaqSection";
import { semiPreciousFaqs } from "@/data/faqs";
import { semiPreciousSubs } from "@/data/catalog";

import EnquiryButton from "@/components/ui/EnquiryButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuHouse as HomeIcon,
  LuChevronRight as ChevronRight,
  LuGem as Gem,
  LuX as X,
  LuSparkles as Sparkles,
  LuShieldCheck as ShieldCheck,
  LuArrowRight as ArrowRight,
  LuZoomIn as ZoomIn,
  LuCircleCheck as CheckCircle,
  LuPhone as Phone,
} from "react-icons/lu";
import WhatsAppIcon from "@/components/WhatsAppIcon";

/* ─── Animation Helper ──────────────────────────────────────────────────── */

/* ─── Stone Data ─────────────────────────────────────────────────────────── */
const stones = [
  {
    id: "blue-agate",
    name: "Royal Blue Agate",
    subtitle: "Translucent Backlit Feature Slabs",
    image: "/semi-precious/blue-agate.jpeg",
    category: "AGATE GEMSTONE",
    color: "Deep Celestial Blue",
    desc: "Rare hand-assembled natural agate gemstone slabs radiating brilliant oceanic blue hues. When illuminated from behind, concentric mineral bands create an ethereal glow — ideal for luxury backlit bar counters, statement reception walls, and premium hospitality installations.",
    specs: [
      { label: "Stone Type", value: "Natural Blue Agate (Chalcedony)" },
      { label: "Finish", value: "Mirror Polished, Epoxy-Fused Gemstone Matrix" },
      { label: "Thickness", value: "15mm–20mm Translucent Slabs" },
      { label: "Applications", value: "Backlit Walls, Bar Counters, VIP Lounges" },
      { label: "Luminosity", value: "High Translucency for Ambient Backlighting" },
    ],
    highlights: [
      "Natural mineral banding — no two slabs identical",
      "Crystal-clear epoxy matrix for seamless presentation",
      "Superior luminosity under warm LED backlighting",
      "Suitable for vertical feature installations",
    ],
    waMsg: "Hello Dholpurestones.com, I am interested in Royal Blue Agate backlit slabs for my luxury project.",
  },
  {
    id: "black-agate",
    name: "Black Agate",
    subtitle: "Bold Monolithic Gemstone Statement Pieces",
    image: "/semi-precious/black-agate.jpeg",
    category: "AGATE GEMSTONE",
    color: "Obsidian Black",
    desc: "Striking deep black agate with dramatic white banding and natural mineral inclusions. An architectural marvel for premium reception desk fronts, executive boardroom feature walls, luxury bathroom vanities, and high-end retail interiors.",
    specs: [
      { label: "Stone Type", value: "Natural Black Agate (Banded Chalcedony)" },
      { label: "Finish", value: "High Mirror Polish, Epoxy Resin Stabilized" },
      { label: "Thickness", value: "15mm–20mm Custom Slabs" },
      { label: "Applications", value: "Reception Desks, Feature Walls, Vanity Tops" },
      { label: "Pattern", value: "Natural White Banding on Jet Black Matrix" },
    ],
    highlights: [
      "Dramatic contrast of pure black with natural white veining",
      "High compression strength for structural installations",
      "Unique mineral inclusions in every slab — exclusive origin",
      "Polished to a flawless gemstone mirror surface",
    ],
    waMsg: "Hello Dholpurestones.com, I would like pricing for Black Agate gemstone slabs.",
  },
  {
    id: "fire-agate",
    name: "Fire Agate",
    subtitle: "Iridescent Flame-Patterned Gemstone Slabs",
    image: "/semi-precious/fire-agate.jpeg",
    category: "AGATE GEMSTONE",
    color: "Crimson, Amber & Saffron",
    desc: "Dramatic fire-patterned natural agate with iridescent amber, crimson and saffron flame-like striations. Exceptionally rare gemstone material for luxury fireplace surrounds, statement kitchen islands, VIP hospitality feature walls, and collectible luxury installations.",
    specs: [
      { label: "Stone Type", value: "Natural Fire Agate (Iridescent Chalcedony)" },
      { label: "Finish", value: "Gemstone Mirror Polish, High-Clarity Epoxy" },
      { label: "Thickness", value: "15mm–20mm Bespoke Slabs" },
      { label: "Applications", value: "Fireplace Surrounds, Kitchen Islands, Art Walls" },
      { label: "Color Range", value: "Crimson, Amber, Saffron, Deep Orange Striations" },
    ],
    highlights: [
      "Exceptionally rare iridescent flame striations",
      "No two slabs share the same fire pattern",
      "Creates a natural warmth — perfect near fireplaces",
      "Mineral-rich gemstone core stabilized in crystal resin",
    ],
    waMsg: "Hello Dholpurestones.com, I am inquiring about Fire Agate gemstone slabs for a luxury project.",
  },
  {
    id: "green-agate",
    name: "Green Agate",
    subtitle: "Lush Botanical Gemstone Surface Panels",
    image: "/semi-precious/green-agate.jpeg",
    category: "AGATE GEMSTONE",
    color: "Forest & Jade Green",
    desc: "Lush jade-toned natural green agate with translucent leaf-like banding. Brings organic serenity to wellness spas, luxury residential bathrooms, meditation rooms, corporate reception walls, and biophilic hospitality design installations.",
    specs: [
      { label: "Stone Type", value: "Natural Green Agate (Forest Chalcedony)" },
      { label: "Finish", value: "Polished Mirror, Epoxy Gemstone Matrix" },
      { label: "Thickness", value: "15mm–20mm Translucent Slabs" },
      { label: "Applications", value: "Spa Walls, Wellness Rooms, Lobby Feature Panels" },
      { label: "Tone Variation", value: "Pale Sage to Deep Forest Green Banding" },
    ],
    highlights: [
      "Promotes biophilic serenity in wellness environments",
      "Translucent structure ideal for green-hued backlighting",
      "Natural jade-like mineral texture — zero artificial coloring",
      "Available in sequential matched slabs for seamless book-match",
    ],
    waMsg: "Hello Dholpurestones.com, I need Green Agate panels for a wellness spa installation.",
  },
  {
    id: "lapis-lazuli",
    name: "Lapis Lazuli",
    subtitle: "Royal Celestial Blue Pietra Dura Stone",
    image: "/semi-precious/lapis-lazuli.jpeg",
    category: "LAPIS LAZULI",
    color: "Celestial Royal Blue with Gold Pyrite",
    desc: "Authentic deep celestial-blue lapis lazuli with natural gold pyrite flecks — the gemstone of pharaohs and Mughal emperors. Used in Pietra Dura inlay art, royal jewellery, luxury interior accents, decorative mosaic panels, and prestigious architectural commissions.",
    specs: [
      { label: "Stone Type", value: "Natural Lapis Lazuli (Metamorphic Gem)" },
      { label: "Finish", value: "High Mirror Polish, Raw Sculptural Surface" },
      { label: "Thickness", value: "10mm–25mm Tiles, Medallions & Slabs" },
      { label: "Applications", value: "Pietra Dura Inlay, Decorative Panels, Jewelry" },
      { label: "Origin", value: "Royal Blue Matrix with Natural Gold Pyrite Veins" },
    ],
    highlights: [
      "Natural gold pyrite constellation — impossible to replicate artificially",
      "Used historically in Mughal Taj Mahal Pietra Dura art",
      "Intense royal blue hue from lazurite mineral composition",
      "Cut and supplied as tiles, medallions, slabs and custom shapes",
    ],
    waMsg: "Hello Dholpurestones.com, I would like to know more about Lapis Lazuli for Pietra Dura or architectural panels.",
  },
  {
    id: "line-agate",
    name: "Line Agate",
    subtitle: "Geometric Banded Mineral Mosaic Slabs",
    image: "/semi-precious/line-agate.jpeg",
    category: "AGATE GEMSTONE",
    color: "Beige, Ivory & Earth Tones",
    desc: "Elegant naturally-banded line agate with precise parallel mineral striations in warm beige, ivory, and earthy tones. Ideal for neutral luxury interiors, contemporary hospitality spaces, understated premium walls, and sophisticated product display plinths.",
    specs: [
      { label: "Stone Type", value: "Natural Banded Line Agate (Striped Chalcedony)" },
      { label: "Finish", value: "Polished Mirror, Epoxy Gemstone Fusion" },
      { label: "Thickness", value: "15mm–20mm Slabs" },
      { label: "Applications", value: "Neutral Feature Walls, Luxury Counters, Plinths" },
      { label: "Pattern Style", value: "Precise Parallel Striations in Earth Tones" },
    ],
    highlights: [
      "Precisely parallel banding for a clean, architectural aesthetic",
      "Warm neutral palette suits contemporary and classic interiors",
      "Excellent book-match capability for symmetrical installations",
      "Beautifully translucent under warm ambient lighting",
    ],
    waMsg: "Hello Dholpurestones.com, I am interested in Line Agate gemstone slabs for interior design.",
  },
  {
    id: "natural-agate",
    name: "Natural Agate",
    subtitle: "Organic Multi-Tone Crystal Formation Slabs",
    image: "/semi-precious/natural-agate.jpeg",
    category: "AGATE GEMSTONE",
    color: "Multi-Tone Natural Earth",
    desc: "Genuine natural agate with organic multi-tonal crystalline concentric formations capturing earth's geological palette of whites, creams, greys and ambers. Perfect for exclusive art wall installations, geological interior collections, luxury stone galleries, and bespoke collectors' commissions.",
    specs: [
      { label: "Stone Type", value: "Natural Agate (Multi-Tone Chalcedony Geode)" },
      { label: "Finish", value: "Mirror Polished with Preserved Natural Edges" },
      { label: "Thickness", value: "15mm–25mm Natural Form & Cut Slabs" },
      { label: "Applications", value: "Art Walls, Collector Displays, Luxury Interiors" },
      { label: "Pattern", value: "Organic Concentric Multi-Tone Crystal Rings" },
    ],
    highlights: [
      "Authentic geological specimen — each piece a natural work of art",
      "Concentric crystal rings capture geological time",
      "Available with natural geode edges preserved for art display",
      "Unique collector-grade pieces with certification of origin",
    ],
    waMsg: "Hello Dholpurestones.com, I am looking for Natural Agate slabs for a luxury interior art installation.",
  },
  {
    id: "red-jasper",
    name: "Red Jasper",
    subtitle: "Warm Terracotta Gemstone Surface Stone",
    image: "/semi-precious/red-jasper.jpeg",
    category: "JASPER GEMSTONE",
    color: "Deep Terracotta Red",
    desc: "Rich opaque deep terracotta-red natural jasper with subtle mineral grain patterning. A powerful stone for accent cladding panels, decorative countertops, wellness spaces, luxury retail environments, and bold architectural feature applications.",
    specs: [
      { label: "Stone Type", value: "Natural Red Jasper (Opaque Microcrystalline Quartz)" },
      { label: "Finish", value: "Gloss Mirror Polish, Smooth Honed" },
      { label: "Thickness", value: "15mm–25mm Calibrated Slabs & Tiles" },
      { label: "Applications", value: "Feature Cladding, Countertops, Retail Interiors" },
      { label: "Colour", value: "Deep Terracotta to Brick Red, Uniform Density" },
    ],
    highlights: [
      "Uniform opaque red tone — no translucency required",
      "Excellent hardness (6.5–7 Mohs) for durable surface applications",
      "Works beautifully as a strong accent beside neutral marbles",
      "Available polished, honed or raw textured finishes",
    ],
    waMsg: "Hello Dholpurestones.com, I need Red Jasper gemstone tiles or slabs for a commercial project.",
  },
  {
    id: "tiger-eyes",
    name: "Tiger's Eye",
    subtitle: "Chatoyant Golden Silk-Flash Gemstone Panels",
    image: "/semi-precious/tiger-eyes.jpeg",
    category: "TIGER'S EYE",
    color: "Golden Brown with Silk Chatoyancy",
    desc: "Mesmerizing natural tiger's eye gemstone with captivating golden-brown chatoyant silk-flash — a living light phenomenon that shifts with movement. Extraordinary for luxury elevator interiors, high-end hotel lobby walls, VIP private jet cabins, and prestige retail brand flagship stores.",
    specs: [
      { label: "Stone Type", value: "Natural Tiger's Eye (Chatoyant Quartz Fibre)" },
      { label: "Finish", value: "Gemstone Mirror Polish for Maximum Chatoyancy" },
      { label: "Thickness", value: "15mm–20mm Polished Slabs" },
      { label: "Applications", value: "Elevator Interiors, Hotel Lobbies, VIP Cabins" },
      { label: "Effect", value: "Golden Silk-Flash Chatoyancy under Moving Light" },
    ],
    highlights: [
      "Rare natural chatoyancy — golden light shifts with viewer angle",
      "High polishing essential to reveal full silky optical effect",
      "Available in directional orientation for maximum impact",
      "Exceptional for luxury brand flagship store interiors",
    ],
    waMsg: "Hello Dholpurestones.com, I want to inquire about Tiger's Eye gemstone panels for a luxury space.",
  },
];

const useCases = [
  {
    icon: "🏨",
    title: "Luxury Hotel Lobbies",
    desc: "Backlit agate reception walls and tiger's eye elevator interiors for 5-star hospitality environments.",
  },
  {
    icon: "🍸",
    title: "Premium Bar Counters",
    desc: "Translucent blue and fire agate bar tops that glow radiantly under LED backlighting.",
  },
  {
    icon: "🧘",
    title: "Wellness & Spa Centers",
    desc: "Green agate and natural agate panels for serene biophilic wellness room installations.",
  },
  {
    icon: "🏢",
    title: "Corporate Boardrooms",
    desc: "Black agate and lapis lazuli feature walls commanding authority and prestige.",
  },
  {
    icon: "🎨",
    title: "Pietra Dura Art Inlays",
    desc: "Lapis lazuli and jasper cut to custom shapes for Mughal-inspired architectural mosaic art.",
  },
  {
    icon: "🛍️",
    title: "Luxury Retail Flagships",
    desc: "Tiger's eye and line agate cladding for premier brand flagship store interiors.",
  },
];

/* ─── Main Page Component ────────────────────────────────────────────────── */
export default function SemiPreciousPage() {
  const [activeModal, setActiveModal] = useState<(typeof stones)[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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

  return (
    <main className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION (Full window size)
      ═══════════════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Natural Gemstone Slabs"
        title="Semi-Precious"
        accent="Stones"
        description="Agate, lapis lazuli, jasper and tiger's eye — translucent slabs and feature panels that glow when backlit."
        image="/semi-precious/blue-agate.jpeg"
        crumbs={[{ label: "Products", href: "/products" }, { label: "Semi-Precious Stones" }]}
        stats={[
          { value: "9", label: "Gemstones" },
          { value: "100%", label: "Natural" },
          { value: "Custom", label: "Sizes" },
        ]}
      >
        <Button href="#collection" variant="gold" size="lg">View Collection</Button>
        <Button href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20a%20quote%20for%20semi-precious%20stones." variant="outline-light" size="lg">Get a Quote</Button>
      </PageHero>

      {/* ═══════════════════════════════════════════════════════════════
          INTRO STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#123D32] py-8 sm:py-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            {[
              { icon: <Gem className="w-5 h-5" />, label: "9 Gemstone Types", sub: "Agate, Jasper, Tiger's Eye, Lapis" },
              { icon: <ShieldCheck className="w-5 h-5" />, label: "100% Natural Origin", sub: "No synthetic or dyed stones" },
              { icon: <Sparkles className="w-5 h-5" />, label: "Backlit Ready", sub: "High translucency for LED illumination" },
              { icon: <CheckCircle className="w-5 h-5" />, label: "Custom Sizing", sub: "Bespoke cut-to-size available" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-[#C5A15B]/15 border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B]">
                  {item.icon}
                </div>
                <span className="font-bold text-sm text-white">{item.label}</span>
                <span className="text-[11px] text-white/60 leading-tight">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STONE COLLECTION GRID
      ═══════════════════════════════════════════════════════════════ */}
      <section id="collection" className="py-14 sm:py-24 bg-[#F7F4EB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <AnimDiv className="flex items-center justify-between pb-3 border-b border-black/8 mb-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A15B]" />
              <span className="font-heading text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#1F2A24] uppercase">
                DHOLPURESTONES &bull; LAPIDARY COLLECTION
              </span>
            </div>
            <span className="font-heading text-xs sm:text-sm font-bold text-[#C5A15B] tracking-widest uppercase">
              Gemstones
            </span>
          </AnimDiv>

          <AnimDiv delay={40} className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[11px] sm:text-xs font-bold text-[#C5A15B] uppercase tracking-[0.2em] block mb-2">
              Exclusive Lapidary Gemstone Inventory
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F2A24] uppercase tracking-wide mb-3 leading-snug">
              Our Semi-Precious Stone Collection
            </h2>
            <div className="w-12 h-1 bg-[#C5A15B] rounded-full mx-auto mb-4" />
            <p className="font-body text-xs sm:text-sm text-[#6B7C73] leading-relaxed">
              Every slab is individually hand-assembled from authentic mineral specimens, stabilized in premium optical resin,
              and polished to a flawless mirror surface. Click any gemstone to inspect its technical specifications.
            </p>
          </AnimDiv>

          {/* 3-column stone grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {stones.map((stone, i) => (
              <AnimDiv key={stone.id} delay={i * 70}>
                <div
                  className="group bg-white rounded-2xl border border-black/8 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#C5A15B]/60 transition-all duration-400 cursor-pointer flex flex-col"
                  onMouseEnter={() => setHoveredId(stone.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveModal(stone)}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-deep">
                    <Image
                      src={stone.image}
                      alt={stone.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className={`object-cover transition-transform duration-700 ${hoveredId === stone.id ? "scale-110" : "scale-100"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />



                    {/* Hover inspect overlay */}
                    <div className={`absolute inset-0 bg-[#123D32]/50 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${hoveredId === stone.id ? "opacity-100" : "opacity-0"}`}>
                      <div className="bg-[#123D32] border border-[#C5A15B] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl">
                        <ZoomIn className="w-3.5 h-3.5 text-[#C5A15B]" />
                        Inspect Gemstone
                      </div>
                    </div>

                    {/* Bottom title overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#C5A15B] block mb-0.5">
                        {stone.subtitle}
                      </span>
                      <h3 className="font-heading text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                        {stone.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                     
                      <p className="text-xs sm:text-[13px] text-[#6B7C73] leading-relaxed line-clamp-3">
                        {stone.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-black/6 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#C5A15B] group-hover:text-[#123D32] transition-colors">
                        View Specifications
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#F7F4EB] border border-black/8 flex items-center justify-center group-hover:bg-[#123D32] group-hover:border-[#123D32] transition-all">
                        <ArrowRight className="w-3.5 h-3.5 text-[#6B7C73] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          USE CASES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-t border-b border-black/6">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv delay={0} className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] font-bold text-[#C5A15B] uppercase tracking-[0.22em] block mb-2">
              WHERE GEMSTONES BELONG
            </span>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#1F2A24] uppercase tracking-wider">
              Signature Applications
            </h2>
            <div className="w-10 h-1 bg-[#C5A15B] rounded-full mx-auto mt-3" />
          </AnimDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, i) => (
              <AnimDiv key={i} delay={i * 80}>
                <div className="bg-[#F7F4EB] rounded-2xl border border-black/6 p-6 hover:border-[#C5A15B]/50 hover:shadow-md transition-all duration-300">
                  <span className="text-3xl block mb-3">{uc.icon}</span>
                  <h3 className="font-heading text-sm font-bold text-[#1F2A24] uppercase tracking-wider mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-xs text-[#6B7C73] leading-relaxed">{uc.desc}</p>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F7F4EB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv delay={0}>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1F2A24] via-[#1E5A46] to-[#123D32] border border-[#C5A15B]/30 p-8 sm:p-12 lg:p-14 shadow-2xl text-white">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A15B]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A15B]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#C5A15B] text-[11px] font-bold uppercase tracking-wider mb-4">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Authentic Gemstone Sourcing &bull; Custom Bespoke Orders</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white mb-3">
                    Commission Your Gemstone Installation
                  </h2>
                  <p className="text-xs sm:text-sm text-white/75 max-w-xl leading-relaxed">
                    Our lapidary specialists handpick, cut and assemble every gemstone slab to your exact architectural requirements. Request a physical sample box or a custom quotation for your luxury project.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-white/90">
                    {[
                      "Free Physical Sample Box",
                      "Custom Cut-to-Size",
                      "Book-Match Sequential Slabs",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-[#C5A15B]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <a
                    href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com%2C%20I%20would%20like%20to%20request%20a%20Semi-Precious%20Gemstone%20sample%20box%20and%20quotation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#C5A15B] hover:bg-[#d4b574] text-[#123D32] font-bold text-xs uppercase tracking-wider shadow-lg transition-all active:scale-95"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-[#123D32]" size={16} />
                    <span>WhatsApp Us Now</span>
                  </a>
                  <a
                    href="tel:+919057355232"
                    className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C5A15B]" />
                    <span>Call: +91 90573 55232</span>
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-transparent hover:bg-white/10 border border-white/20 text-white/80 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Send Detailed Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimDiv>
        </div>
      </section>

      <FaqSection faqs={semiPreciousFaqs} title="Semi-Precious Questions" tone="white" />
      <CtaBand title="Add Gemstone Glamour To Your Space" text="Share your size and stone choice for a quote." topic="semi-precious stone slabs" cta="Semi-precious bottom band" />
      <JsonLd data={[breadcrumbLd([{ name: "Products", path: "/products" }, { name: "Semi-Precious Stones", path: "/semi-precious" }]), itemListLd("Semi-precious stone slabs", semiPreciousSubs.map((s) => ({ name: s.name, description: s.note, image: s.image }))), faqLd(semiPreciousFaqs)]} />
      <Footer />
      <FloatingWhatsApp />

      {/* ═══════════════════════════════════════════════════════════════
          STONE DETAIL MODAL
      ═══════════════════════════════════════════════════════════════ */}
      {activeModal && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-3 sm:p-5"
          onClick={() => setActiveModal(null)}
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" />
          <div
            className="relative z-10 w-full max-w-2xl bg-forest-deep rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-[#C5A15B]/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image header */}
            <div className="relative aspect-[16/9] w-full shrink-0 bg-[#123D32]">
              <Image
                src={activeModal.image}
                alt={activeModal.name}
                fill
                sizes="700px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A24]/90 via-[#1F2A24]/30 to-transparent" />

              {/* Close */}
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-4 left-5 right-14 text-white">
                <span className="text-[11px] uppercase font-bold text-[#C5A15B] tracking-widest block mb-1">
                  {activeModal.category} &bull; {activeModal.color}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold leading-tight">
                  {activeModal.name}
                </h3>
                <p className="text-xs text-white/70 mt-0.5">{activeModal.subtitle}</p>
              </div>
            </div>

            {/* Modal body */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-5 text-white">

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <EnquiryButton variant="gold" className="mb-2.5 w-full" product={activeModal.name} cta="Semi-precious detail modal">Get a Free Quote</EnquiryButton>
                <a
                  href={`https://wa.me/919414945457?text=${encodeURIComponent(activeModal.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#C5A15B] hover:bg-[#d4b574] text-[#123D32] font-bold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#123D32]" size={16} />
                  Enquire on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="sm:w-auto py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
