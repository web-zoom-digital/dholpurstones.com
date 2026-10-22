"use client";

import React, { useState, useEffect, useRef } from "react";
import AnimDiv from "@/components/ui/AnimDiv";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuHouse as HomeIcon,
  LuChevronRight as ChevronRight,
  LuLayers as Layers,
  LuX as X,
  LuSparkles as Sparkles,
  LuShieldCheck as ShieldCheck,
  LuArrowRight as ArrowRight,
  LuZoomIn as ZoomIn,
  LuCircleCheck as CheckCircle,
  LuPhone as Phone,
  LuMountain as Mountain,
  LuCompass as Compass,
  LuFileText as FileText,
} from "react-icons/lu";
import WhatsAppIcon from "@/components/WhatsAppIcon";

/* ─── Animation Helper ──────────────────────────────────────────────────── */

/* ─── Sandstone Data (Images from /public/sandstone) ─────────────────────── */
const sandstoneList = [
  {
    id: "agra-red",
    name: "Agra Red Sandstone",
    categoryLabel: "HERITAGE MUGHAL STONE",
    provenance: "Agra & Dholpur Quarry Basin",
    image: "/sandstone/agra-red-sandstone.jpeg",
    color: "Terracotta Crimson Red",
    shortDesc:
      "Iconic iron-rich ferric quartz sandstone renowned for historic fort monuments, monumental elevation facades, and extreme weather resilience.",
    longDesc:
      "Agra Red Sandstone is an internationally renowned quartzitic stone celebrated for its rich terracotta and crimson tones. Directly extracted from certified beds in the historic Agra-Dholpur belt, it features dense, crystalline graining capable of enduring centuries of extreme weathering without color fading. Widely specified for majestic palace front elevations, temple facades, fort restorations, and heavy pedestrian paving.",
    specs: [
      { label: "Stone Type", value: "Quartzitic Ferruginous Sandstone" },
      { label: "Compressive Strength", value: "98.5 MPa (Dry) / 89.2 MPa (Wet)" },
      { label: "Water Absorption", value: "< 1.15% by weight" },
      { label: "Density", value: "2.62 g/cm³" },
      { label: "Standard Finishes", value: "Natural Split, Sawn, Honed, Shot-Blasted, Rock-Face" },
      { label: "Thickness Range", value: "20mm, 30mm, 40mm, 50mm, Raw Gangsaw Slabs & Blocks" },
      { label: "Recommended Uses", value: "Exterior Facades, Boundary Walls, Colonnades, Steps, Patios" },
    ],
    highlights: [
      "Quarry-direct certified blocks from the Agra-Dholpur seam",
      "Immune to extreme UV, frost, salt spray, and monsoon rains",
      "High compressive strength suitable for load-bearing pillars",
      "Available in raw monolithic blocks, calibrated tiles & cut-to-size slabs",
    ],
    waMsg:
      "Hello Dholpurestones.com, I am inquiring about Agra Red Sandstone for my project.",
  },
  {
    id: "dholpur-pink",
    name: "Dholpur Pink Sandstone",
    categoryLabel: "SACRED TEMPLE STONE",
    provenance: "Bansi Paharpur & Dholpur Mines",
    image: "/sandstone/dholpur-pink-sandstone.jpeg",
    color: "Soft Blush Pink & Coral",
    shortDesc:
      "Sacred blush-pink siliceous stone with fine uniform graining, celebrated worldwide for iconic temple architecture, carved jalis, and palatial villas.",
    longDesc:
      "Dholpur Pink Sandstone (often quarried alongside the sacred Bansi Paharpur belt) is India's most revered temple-grade sandstone. Characterized by a warm, uniform blush pink hue and siliceous matrix, it is exceptionally workable for master stone sculptors while retaining supreme durability once cured. Extensively utilized in historic temples, grand palace archways, intricately hand-carved perforated jalis, and luxury country estates.",
    specs: [
      { label: "Stone Type", value: "Siliceous Quartz Sandstone" },
      { label: "Compressive Strength", value: "88.0 MPa (Dry) / 81.0 MPa (Wet)" },
      { label: "Water Absorption", value: "< 1.25% by weight" },
      { label: "Density", value: "2.55 g/cm³" },
      { label: "Standard Finishes", value: "Mirror Honed, Natural Cleft, Bush-Hammered, Flamed" },
      { label: "Thickness Range", value: "20mm, 25mm, 30mm, 40mm, 50mm & Custom Blocks" },
      { label: "Recommended Uses", value: "Temple Mandirs, Decorative Jalis, Elevation Cladding, Cornices" },
    ],
    highlights: [
      "Authentic sacred blush-pink origin from direct quarry pits",
      "Ultra-fine grain structure ideal for 3D CNC carving & hand sculpting",
      "Uniform color consistency across large commercial orders",
      "Does not attract efflorescence or fungal staining over time",
    ],
    waMsg:
      "Hello Dholpurestones.com, I am inquiring about Dholpur Pink Sandstone for a temple / luxury elevation project.",
  },
  {
    id: "dholpur-beige",
    name: "Dholpur Beige Sandstone",
    categoryLabel: "BUFF CREAM ARCHITECTURAL",
    provenance: "Dholpur Quarry Headquarters",
    image: "/sandstone/dolpur-beige-sandstone.jpeg",
    color: "Buff Cream & Warm Beige",
    shortDesc:
      "Siliceous buff cream and beige sandstone with subtle natural vein accents. The gold-standard stone for luxury villa elevations, farmhouses, and colonnades.",
    longDesc:
      "Dholpur Beige is the hallmark stone that built the legacy of Dholpurestones.com. Mined from our core quarries in Dholpur, this siliceous buff-cream sandstone embodies understated regal elegance. Its neutral color palette complements both classical neoclassical columns and sleek contemporary minimalist residences. Known for its smooth sawn surface and superior thermal insulation properties, keeping interiors cool during summer.",
    specs: [
      { label: "Stone Type", value: "Siliceous Arenaceous Sandstone" },
      { label: "Compressive Strength", value: "94.0 MPa (Dry) / 86.5 MPa (Wet)" },
      { label: "Water Absorption", value: "< 1.20% by weight" },
      { label: "Density", value: "2.58 g/cm³" },
      { label: "Standard Finishes", value: "Gangsaw Sawn, Fine Honed, Sandblasted, Antique Tumbled" },
      { label: "Thickness Range", value: "18mm, 20mm, 30mm, 40mm, 50mm, Architectural Profiles" },
      { label: "Recommended Uses", value: "Front Elevations, Farmhouse Patios, Balustrades, Designer Cornices" },
    ],
    highlights: [
      "Signature Dholpur buff-cream tone with timeless aesthetic appeal",
      "Government-awarded legacy with 300+ front elevation designs",
      "Available with custom factory CNC beveling and profile molding",
      "Thermal insulative qualities reduce facade heat absorption",
    ],
    waMsg:
      "Hello Dholpurestones.com, I am inquiring about Dholpur Beige Sandstone slabs and tiles.",
  },
  {
    id: "dholpur-chocolate",
    name: "Dholpur Chocolate Sandstone",
    categoryLabel: "RICH EARTHY BROWN",
    provenance: "Dholpur Quarry Basin",
    image: "/assets/products/dholpur_chocolate_teakwood.jpg",
    color: "Deep Chocolate Brown with Teak-Wood Graining",
    shortDesc:
      "Dense chocolate-brown sandstone with natural teak-wood graining. A bold, warm choice for feature walls, cladding, paving and landscape accents.",
    longDesc:
      "Dholpur Chocolate Sandstone is prized for its deep brown tone and flowing wood-like banding, which gives every slab a unique character. Quarried in the Dholpur belt, it is dense, hard-wearing and naturally weather resistant. It pairs beautifully with Dholpur Beige and Agra Red in elevations and is a favourite for accent walls, pool surrounds and garden pathways.",
    specs: [
      { label: "Stone Type", value: "Siliceous Sandstone" },
      { label: "Compressive Strength", value: "90.0 MPa (Dry) / 83.0 MPa (Wet)" },
      { label: "Water Absorption", value: "< 1.20% by weight" },
      { label: "Density", value: "2.58 g/cm³" },
      { label: "Standard Finishes", value: "Sawn, Honed, Natural Split, Brushed" },
      { label: "Thickness Range", value: "20mm, 30mm, 40mm, 50mm & Custom Blocks" },
      { label: "Recommended Uses", value: "Feature Walls, Cladding, Paving, Pool Surrounds, Accents" },
    ],
    highlights: [
      "Distinctive teak-wood graining — no two slabs look alike",
      "Dense, hard-wearing and weather resistant",
      "Pairs well with Dholpur Beige and Agra Red",
      "Available as tiles, slabs, blocks and cut-to-size pieces",
    ],
    waMsg:
      "Hello Dholpurestones.com, I am inquiring about Dholpur Chocolate Sandstone for my project.",
  },
];

/* ─── Sandstone Page Component ─────────────────────────────────────────── */
export default function SandstonePage() {
  const [activeModal, setActiveModal] = useState<(typeof sandstoneList)[0] | null>(null);

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
          HERO SECTION (Centered & Full Window Size)
      ═══════════════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Mine To Site"
        title="Dholpur"
        accent="Sandstone"
        description="Four signature colours — Agra Red, Dholpur Beige, Dholpur Pink and Dholpur Chocolate — quarried from our own mines in Dholpur, Rajasthan."
        image="/sandstone/agra-red-sandstone.jpeg"
        crumbs={[{ label: "Products", href: "/products" }, { label: "Sandstone" }]}
        stats={[
          { value: "4", label: "Colours" },
          { value: "300+", label: "Elevation designs" },
          { value: "1953", label: "Since" },
        ]}
      >
        <Button href="#varieties" variant="gold" size="lg">Explore Colours</Button>
        <Button href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20a%20quote%20for%20sandstone." variant="outline-light" size="lg">Get a Quote</Button>
      </PageHero>

      {/* ═══════════════════════════════════════════════════════════════
          SANDSTONE VARIETIES GRID SECTION
          Images from /public/sandstone with stone name as heading
      ═══════════════════════════════════════════════════════════════ */}
      <section id="varieties" className="py-14 sm:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <AnimDiv delay={0}>
            <span className="text-[10px] sm:text-xs font-bold text-[#C5A15B] uppercase tracking-[0.2em] block mb-2">
              QUARRY-DIRECT INVENTORY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-[#1F2A24] leading-tight mb-3">
              Our Natural Sandstone Varieties
            </h2>
            <div className="w-12 h-1 bg-[#C5A15B] rounded-full mx-auto mb-4" />
            <p className="font-body text-xs sm:text-sm text-[#6B7C73] leading-relaxed max-w-2xl mx-auto">
              Each stone is sourced directly from certified quarries, precision-calibrated in our factories, and shipped worldwide in seaworthy packaging. Click any stone for full technical specifications.
            </p>
          </AnimDiv>
        </div>

        {/* 4 Images with Name as Heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sandstoneList.map((stone, i) => (
            <AnimDiv key={stone.id} delay={i * 80}>
              <div
                id={stone.id}
                onClick={() => setActiveModal(stone)}
                className="group bg-white rounded-2xl overflow-hidden border border-black/8 hover:border-[#C5A15B]/70 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full cursor-pointer scroll-mt-32"
              >
                <div>
                  {/* Image Container with Zoom & Provenance Badge */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F4EB]">
                    <Image
                      src={stone.image}
                      alt={stone.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />

                    {/* Category Label Pill */}
                    <span className="absolute top-3 left-3 bg-[#123D32] text-white font-heading text-[9.5px] font-bold tracking-wider px-2.5 py-1 rounded-md shadow-md">
                      {stone.categoryLabel}
                    </span>

                    {/* Hover Zoom Indicator */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <ZoomIn className="w-4 h-4 text-[#123D32]" />
                    </div>
                  </div>

                  {/* Heading With Name (as requested) */}
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A15B] block mb-1">
                      {stone.provenance}
                    </span>

                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#1F2A24] uppercase tracking-wide group-hover:text-[#123D32] transition-colors leading-snug mb-2">
                      {stone.name}
                    </h3>

                    <p className="text-xs text-[#6B7C73] leading-relaxed line-clamp-3 font-body">
                      {stone.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-black/6 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#123D32] group-hover:text-[#C5A15B] uppercase tracking-wider transition-colors flex items-center gap-1">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#C5A15B]" />
                  </div>
                </div>
              </div>
            </AnimDiv>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY CHOOSE OUR SANDSTONE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20 border-y border-black/6">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] sm:text-xs font-bold text-[#C5A15B] uppercase tracking-[0.2em] block mb-2">
              THE DHOLPURESTONES ADVANTAGE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#1F2A24]">
              Direct Mining &amp; Export Grade Standards
            </h2>
            <div className="w-12 h-1 bg-[#C5A15B] rounded-full mx-auto my-3" />
            <p className="font-body text-xs sm:text-sm text-[#6B7C73]">
              Unlike middlemen, we control extraction, sawing, calibrating, hand-chiseling and crating end-to-end.
            </p>
          </AnimDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Mountain,
                title: "Direct Quarry Control",
                desc: "Captive quarry leases across Dholpur and Bansi Paharpur ensure authentic material with unbroken color uniformity.",
              },
              {
                icon: Compass,
                title: "Precision Calibration",
                desc: "State-of-the-art multi-blade gang saws and bridge cutting machines guarantee ±1mm thickness tolerances.",
              },
              {
                icon: ShieldCheck,
                title: "Global ISPM-15 Packaging",
                desc: "Every export bundle is packed in fumigated, steel-strapped timber crates with moisture-barrier wrapping.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <AnimDiv key={idx} delay={idx * 100}>
                  <div className="bg-[#F7F4EB] rounded-2xl p-6 border border-black/6 hover:border-[#C5A15B]/60 transition-all duration-300 h-full">
                    <div className="w-11 h-11 rounded-xl bg-[#123D32] text-[#C5A15B] flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#1F2A24] uppercase tracking-wider mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#6B7C73] leading-relaxed font-body">
                      {feature.desc}
                    </p>
                  </div>
                </AnimDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM CTA SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#123D32] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A15B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-2xl">
          <AnimDiv>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
              <span className="font-heading text-[10px] sm:text-xs font-bold text-[#C5A15B] tracking-widest uppercase">
                ARCHITECTURAL SPECIFICATIONS &amp; BOQ
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-white mb-4">
              Need Slabs, Calibrated Tiles, or Hand-Carved Articles?
            </h2>
            <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed mb-8">
              Share your project drawings, bill of quantities (BOQ), or target stone shades directly with our quarry management desk. Sample boxes dispatched via air courier.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20am%20inquiring%20about%20Natural%20Sandstone%20varieties."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C5A15B] hover:bg-[#d4b574] text-[#123D32] font-bold text-xs uppercase tracking-wider shadow-lg transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#123D32]" size={16} />
                <span>WhatsApp Quarry Desk</span>
              </a>
              <a
                href="tel:+919057355232"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-[#C5A15B]" />
                <span>Call +91 90573 55232</span>
              </a>
            </div>
          </AnimDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INTERACTIVE SPECIFICATION MODAL
      ═══════════════════════════════════════════════════════════════ */}
      {activeModal && (
        <div
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-black/10 my-auto text-[#1F2A24]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-5 sm:px-8 py-4 border-b border-black/8 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C5A15B]" />
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-[#123D32]">
                  {activeModal.categoryLabel} &bull; DHOLPURESTONES
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-9 h-9 rounded-full bg-[#F7F4EB] hover:bg-red-50 text-[#1F2A24] hover:text-red-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Left Column: Image Preview */}
              <div className="md:col-span-5">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-black/8 bg-[#F7F4EB] shadow-md">
                  <Image
                    src={activeModal.image}
                    alt={activeModal.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#123D32] text-white text-[9.5px] font-bold px-2.5 py-1 rounded-md">
                    {activeModal.color}
                  </span>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-[#F7F4EB] border border-black/6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7C73] block mb-1">
                    Provenance / Source
                  </span>
                  <p className="font-heading text-xs font-bold text-[#1F2A24]">
                    {activeModal.provenance}
                  </p>
                </div>
              </div>

              {/* Right Column: Specs & Highlights */}
              <div className="md:col-span-7">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#1F2A24] mb-2">
                  {activeModal.name}
                </h2>

                <p className="font-body text-xs sm:text-sm text-[#6B7C73] leading-relaxed mb-6">
                  {activeModal.longDesc}
                </p>

                {/* Technical Specifications Table */}
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#123D32] mb-3 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#C5A15B]" />
                  <span>Technical Data &amp; BOQ Parameters</span>
                </h4>
                <div className="space-y-1.5 mb-6 text-xs bg-[#F7F4EB] p-3.5 rounded-xl border border-black/6">
                  {activeModal.specs.map((s, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-2 py-0.5 border-b border-black/4 last:border-none">
                      <span className="text-[#6B7C73] font-medium shrink-0">{s.label}:</span>
                      <span className="font-bold text-[#1F2A24] text-right">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Key Highlights */}
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#123D32] mb-3">
                  Quarry Highlights
                </h4>
                <ul className="space-y-1.5 mb-6 text-xs text-[#1F2A24]/80">
                  {activeModal.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct Action */}
                <a
                  href={`https://wa.me/919414945457?text=${encodeURIComponent(activeModal.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#123D32] hover:bg-[#1E5A46] text-[#C5A15B] hover:text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" size={16} />
                  <span>Request Quote &amp; Samples on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
