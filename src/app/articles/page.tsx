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
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  LuHouse as HomeIcon,
  LuChevronRight as ChevronRight,
  LuSparkles as Sparkles,
  LuShieldCheck as ShieldCheck,
  LuArrowRight as ArrowRight,
  LuZoomIn as ZoomIn,
  LuCircleCheck as CheckCircle,
  LuPhone as Phone,
  LuX as X,
  LuHammer as Hammer,
  LuLandmark as Landmark,
} from "react-icons/lu";

/* ─── Intersection Animation Helper ─────────────────────────────────────── */

/* ─── Stone Articles Data (Exclusively from /stone-articles) ────────────── */
const articles = [
  {
    id: "royal-guardian-lion",
    name: "Royal Guardian Lion Sculpture",
    subtitle: "Monolithic Hand-Chiseled Dholpur Sandstone Lion",
    image: "/stone-articles/user_lion_clean.jpg",
    category: "HERITAGE GUARDIAN SCULPTURE",
    material: "Authentic Dholpur Pink & Red Sandstone",
    desc: "Majestic monolithic sandstone guardian lion sculpted with regal posture, detailed mane whorls, and commanding physical presence. Masterfully chiseled from single quarry blocks for palatial entryways, grand porticos, and monumental estate gateways.",
    specs: [
      { label: "Stone Material", value: "Natural Dholpur Sandstone (Sarmathura Quarry)" },
      { label: "Carving Technique", value: "100% Traditional Hand Chisel & Mallet Sculpture" },
      { label: "Standard Heights", value: "3 Ft, 4.5 Ft, 6 Ft & Life-Size Bespoke" },
      { label: "Surface Finish", value: "Hand-Honed Antique / Fine Chiseled Texture" },
      { label: "Durability", value: "High Compressive Strength (>68 MPa), 100% Weatherproof" },
    ],
    highlights: [
      "Carved from single monolithic block with zero joints",
      "Immune to frost, intense sun, acid rain and weathering",
      "Available in matched mirror-facing gateway pairs",
      "Custom monolithic pedestals and inscribed plinths available",
    ],
    waMsg: "Hello Dholpurestones.com, I am interested in commissioning Royal Guardian Lion Sandstone Sculptures for my project.",
  },
  {
    id: "caparisoned-elephant",
    name: "Caparisoned Elephant Statue",
    subtitle: "Ornately Carved Sandstone Elephant on Plinth",
    image: "/stone-articles/elephant_image.jpeg",
    category: "AUSPICIOUS HERITAGE SCULPTURE",
    material: "Authentic Dholpur Pink & Red Sandstone",
    desc: "Richly caparisoned sandstone elephant with intricate floral blanket carving and a carved plinth, an auspicious symbol for gateways and gardens. Masterfully chiseled from single quarry blocks for palatial entryways, grand porticos, and monumental estate gateways.",
    specs: [
      { label: "Stone Material", value: "Natural Dholpur Sandstone (Sarmathura Quarry)" },
      { label: "Carving Technique", value: "100% Traditional Hand Chisel & Mallet Sculpture" },
      { label: "Standard Heights", value: "3 Ft, 4.5 Ft, 6 Ft & Life-Size Bespoke" },
      { label: "Surface Finish", value: "Hand-Honed Antique / Fine Chiseled Texture" },
      { label: "Durability", value: "High Compressive Strength (>68 MPa), 100% Weatherproof" },
    ],
    highlights: [
      "Carved from single monolithic block with zero joints",
      "Immune to frost, intense sun, acid rain and weathering",
      "Available in matched mirror-facing gateway pairs",
      "Custom monolithic pedestals and inscribed plinths available",
    ],
    waMsg: "Hello Dholpurestones.com, I am interested in commissioning Sandstone Elephant Statues for my project.",
  },
  {
    id: "master-heritage-peacock",
    name: "Heritage Filigree Peacock Sculpture",
    subtitle: "Intricate Plumage Filigree in Solid Sandstone",
    image: "/stone-articles/user_peacock_clean.jpg",
    category: "ROYAL RAJASTHANI BIRD SCULPTURE",
    material: "Fine-Grained Dholpur Beige Sandstone",
    desc: "Exquisite hand-carved natural sandstone peacock sculpture featuring delicate openwork feather plumage, arched crest, and realistic claw detailing. An embodiment of timeless Rajasthani royal heritage for luxury courtyards and villa atriums.",
    specs: [
      { label: "Stone Material", value: "Finest Sikandra Calibrated Sandstone" },
      { label: "Carving Technique", value: "Deep Relief Pierced Filigree & Micro-Chisel" },
      { label: "Dimensions", value: "36” H x 20” W x 14” D (Custom Scales Available)" },
      { label: "Surface Finish", value: "Natural Smooth Honed & Antique Dusting" },
      { label: "Placement", value: "Courtyard Centerpieces, Atrium Focal Points, Water Margins" },
    ],
    highlights: [
      "Museum-grade plumage detailing carved feather by feather",
      "Carved by hereditary master sculptors from Sikandra ateliers",
      "Balanced center of gravity for stable outdoor and indoor installation",
      "Protected with breathable stone impregnator for lifelong clarity",
    ],
    waMsg: "Hello Dholpurestones.com, I would like to inquire about the Heritage Filigree Peacock Sandstone Sculpture.",
  },
  {
    id: "imperial-stone-horse",
    name: "Imperial Stallion Horse Sculpture",
    subtitle: "Dynamic Monumental Equine Sculpture in Natural Stone",
    image: "/stone-articles/horse_marble_image.jpeg",
    category: "MONUMENTAL EQUINE SCULPTURE",
    material: "White Statuario Stone & Buff Sandstone",
    desc: "A breathtaking life-size stone equine sculpture capturing raw muscular energy, flared nostrils, and flowing mane. A symbol of aristocratic power, majesty, and prosperity tailored for luxury farmhouses, stud farms, and country club grounds.",
    specs: [
      { label: "Stone Material", value: "Dense Fine-Grained White Stone / Dholpur Buff" },
      { label: "Carving Technique", value: "Anatomical Proportioning & Classical Hand Sculpture" },
      { label: "Dimensions", value: "Life-Size (5.5 Ft H x 6.5 Ft L) & 4 Ft Scale Models" },
      { label: "Surface Finish", value: "Silky Satin Polish with Texturized Mane & Hooves" },
      { label: "Recommended Use", value: "Farmhouse Driveways, Club Entrances, Trophy Lawns" },
    ],
    highlights: [
      "Masterful anatomical realism and muscle striation accuracy",
      "Reinforced structural stone footing for hurricane-grade outdoor stability",
      "Customizable head tilt, stride posture, and pedestal carving",
      "Shipped worldwide in ISPM-15 cushioned structural export cradles",
    ],
    waMsg: "Hello Dholpurestones.com, I want pricing and production lead time for the Imperial Stone Horse Sculpture.",
  },
  {
    id: "traditional-stone-lantern",
    name: "Traditional Pagoda Garden Lantern",
    subtitle: "Multi-Tiered Ambient Architectural Stone Lantern",
    image: "/stone-articles/stone_lantern.jpg",
    category: "ARCHITECTURAL LANDSCAPE LIGHTING",
    material: "Weatherproof Dholpur Sandstone",
    desc: "Classic multi-tiered hand-carved stone lantern designed for peaceful Zen gardens, resort walkways, and luxury swimming pool perimeters. Features internal hollow light chamber engineered for concealed electric LED or traditional oil flame illumination.",
    specs: [
      { label: "Stone Material", value: "Dholpur Beige & Chocolate Sandstone" },
      { label: "Structure", value: "5 Interlocking Dry-Stack Components with Internal Wiring Chute" },
      { label: "Height Variants", value: "24”, 36”, 48” & 60” Total Height" },
      { label: "Surface Finish", value: "Natural Cleft Chiseled with Antique Weathering" },
      { label: "Weather Rating", value: "100% Outdoor Rainproof, Frostproof, Non-Fading" },
    ],
    highlights: [
      "Concealed center core for easy electrical cabling installation",
      "Interlocking components ensure easy on-site assembly without wet mortar",
      "Pierced lattice windows project soft geometric light patterns",
      "Naturally weathers with graceful patina over decades",
    ],
    waMsg: "Hello Dholpurestones.com, I would like to order Traditional Pagoda Garden Stone Lanterns.",
  },
  {
    id: "carved-water-fountain",
    name: "Multi-Tier Acanthus Leaf Water Fountain",
    subtitle: "Classical Cascade Fountain with Lotus Basins",
    image: "/stone-articles/fountain_image.jpeg",
    category: "PALATIAL WATER FEATURES",
    material: "High-Density Dholpur Beige Sandstone",
    desc: "Grand classical multi-tiered sandstone water fountain with hand-fluted acanthus leaf cascades, scolloped lotus basins, and a finial water jet. Engineered to create acoustic tranquility and evaporative micro-climate cooling in gardens and courtyards.",
    specs: [
      { label: "Stone Material", value: "Impermeable Fine Dholpur Sandstone" },
      { label: "Tier Configurations", value: "2-Tier, 3-Tier and Custom 4-Tier Assemblies" },
      { label: "Basin Diameter", value: "3.5 Ft to 12 Ft Diameter Pool Surrounds" },
      { label: "Plumbing Compatibility", value: "Standard Submersible Pump Recirculation Ready" },
      { label: "Finish", value: "Fine Diamond Honed Waterways, Chiseled Relief Accents" },
    ],
    highlights: [
      "Precision-leveled spill edges produce uniform 360° water sheeting",
      "Hydrophobic sealant applied to prevent algae and mineral staining",
      "Includes pool surround coping stones and central fountain column",
      "Disassembles into modular crated components for safe shipping",
    ],
    waMsg: "Hello Dholpurestones.com, I am inquiring about the Multi-Tier Acanthus Leaf Sandstone Water Fountain.",
  },
  {
    id: "crested-garden-peacock",
    name: "Rajasthani Crested Garden Peacock Statue",
    subtitle: "Graceful Pedestal Bird Sculpture with Lotus Base",
    image: "/stone-articles/peacock_image.jpeg",
    category: "FLORAL PLUMAGE SCULPTURE",
    material: "Warm Dholpur Beige Sandstone",
    desc: "Graceful stone peacock statue standing on an ornamental lotus pedestal, sculpted with arched neck, detailed feather texture, and serene presence. Ideal for garden pedestals, entryway niches, terrace balustrades, and poolside landscaping.",
    specs: [
      { label: "Stone Material", value: "Natural Dholpur Beige Sandstone" },
      { label: "Carving Finish", value: "Subtle Satin Hand-Rubbed Texture" },
      { label: "Dimensions", value: "28” H x 14” W x 10” Base Diameter" },
      { label: "Weight", value: "Approx. 45 kg (Solid Natural Stone)" },
      { label: "Installation", value: "Direct Placement on Plinth or Boundary Pillars" },
    ],
    highlights: [
      "Natural warm sandstone tone blends seamlessly into garden greenery",
      "Stable weighted base resists wind gusts and accidental nudging",
      "Zero maintenance required — naturally withstands external elements",
      "Supplied with protective foam casing inside export wooden crate",
    ],
    waMsg: "Hello Dholpurestones.com, I would like to purchase the Rajasthani Crested Garden Peacock Statue.",
  },
];

/* ─── Architectural Use Cases ───────────────────────────────────────────── */
const useCases = [
  {
    icon: "🏛️",
    title: "Palatial Entrances & Gateways",
    desc: "Matched pairs of monolithic guardian lions and imperial stallions commanding royal authority at grand estate gates.",
  },
  {
    icon: "🦚",
    title: "Luxury Courtyards & Atriums",
    desc: "Hand-carved filigree peacock sculptures and multi-tiered water fountains creating acoustic tranquility and visual majesty.",
  },
  {
    icon: "🛕",
    title: "Sacred Mandirs & Sanctuaries",
    desc: "Shilpa Shastra proportioned temple pillars, sanctum jalis, and kalash capitals carved from consecrated pink stone.",
  },
  {
    icon: "🏮",
    title: "Zen & Designer Gardens",
    desc: "Multi-tiered pagoda stone lanterns providing ambient concealed LED illumination along landscaped walkways and pools.",
  },
  {
    icon: "🏨",
    title: "5-Star Heritage Hospitality",
    desc: "Museum-grade stone sculptures, fountain centerpieces, and ornamental wall panels for luxury hotel lobbies and resorts.",
  },
  {
    icon: "🌐",
    title: "Diplomatic & Institutional Plazas",
    desc: "Monumental carved sandstone friezes, cornices, and pierced jalis for state embassies and government landmarks worldwide.",
  },
];

/* ─── Main Page Component ────────────────────────────────────────────────── */
export default function ArticlesPage() {
  const [activeModal, setActiveModal] = useState<(typeof articles)[0] | null>(null);
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
          HERO SECTION (Full window size matching Semi-Precious style)
      ═══════════════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Hand Crafted In Sikandra"
        title="Sandstone"
        accent="Articles"
        description="Sculptures, lanterns, fountains and relief panels hand-carved by hereditary master artisans — made to your size and design."
        image="/assets/garg/hero_peacock_widescreen.jpg"
        crumbs={[{ label: "Products", href: "/products" }, { label: "Stone Articles" }]}
        stats={[
          { value: "100%", label: "Hand carved" },
          { value: "Custom", label: "Sizes & designs" },
          { value: "Export", label: "Crated worldwide" },
        ]}
      >
        <Button href="#articles-collection" variant="gold" size="lg">View Articles</Button>
        <Button href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20commission%20a%20stone%20article." variant="outline-light" size="lg">Commission a Piece</Button>
      </PageHero>

      {/* ═══════════════════════════════════════════════════════════════
          INTRO STRIP (Matching Semi-Precious style)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#123D32] py-8 sm:py-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            {[
              { icon: <Hammer className="w-5 h-5" />, label: "Hereditary Artisans", sub: "Sikandra Shilpa Shastra stone lineages" },
              { icon: <ShieldCheck className="w-5 h-5" />, label: "100% Natural Stone", sub: "Dholpur, Bansi Paharpur & Mint stone" },
              { icon: <Landmark className="w-5 h-5" />, label: "Custom Scale & CAD", sub: "Bespoke 3D scale models & architects BOQs" },
              { icon: <CheckCircle className="w-5 h-5" />, label: "Worldwide Export", sub: "ISPM-15 fumigated cushioned crating" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-[#C5A15B]/15 border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B]">
                  {item.icon}
                </div>
                <span className="font-bold text-sm text-white">{item.label}</span>
                <span className="text-[10px] text-white/60 leading-tight">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ARTICLES COLLECTION GRID (Matching page-wide container margins)
      ═══════════════════════════════════════════════════════════════ */}
      <section id="articles-collection" className="py-14 sm:py-20 bg-[#F7F4EB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <AnimDiv className="flex items-center justify-between pb-3 border-b border-black/8 mb-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A15B]" />
              <span className="font-heading text-[10px] sm:text-xs font-bold tracking-[0.16em] text-[#1F2A24] uppercase">
                DHOLPURESTONES &bull; STONE ARTICLES INVENTORY
              </span>
            </div>
            <span className="font-heading text-xs sm:text-sm font-bold text-[#C5A15B] tracking-widest uppercase">
              Articles &bull; 04
            </span>
          </AnimDiv>

          <AnimDiv delay={40} className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
            <span className="text-[10px] sm:text-xs font-bold text-[#C5A15B] uppercase tracking-[0.2em] block mb-2">
              Master Craftsmanship &bull; Sikandra Hub
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F2A24] uppercase tracking-wide mb-3 leading-snug">
              Hand-Carved Stone Articles Collection
            </h2>
            <div className="w-12 h-1 bg-[#C5A15B] rounded-full mx-auto mb-4" />
            <p className="font-body text-xs sm:text-sm text-[#6B7C73] leading-relaxed">
              Every sculpture is individually hand-chiseled from authentic Rajasthan natural sandstone blocks by hereditary artisans. Click any article to inspect detailed specifications and dimensions.
            </p>
          </AnimDiv>

          {/* 3-Column Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {articles.map((item, i) => (
              <AnimDiv key={item.id} delay={i * 60}>
                <div
                  className="group bg-white rounded-2xl p-2.5 sm:p-3 border border-black/8 shadow-2xs hover:shadow-2xl hover:border-[#C5A15B]/70 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveModal(item)}
                >
                  {/* Image Container with Inset Margin & Increased Size (Square for Full Sculpture Visibility) */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#F7F4EB]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className={`object-cover object-center transition-transform duration-700 ${
                        hoveredId === item.id ? "scale-106" : "scale-100"
                      }`}
                      loading={i < 3 ? "eager" : "lazy"}
                    />

                    {/* Subtle Category Pill in Top-Left */}
                    <div className="absolute top-2.5 left-2.5 bg-[#123D32]/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15 z-10 shadow-sm">
                      <span className="text-[9px] font-bold text-[#C5A15B] uppercase tracking-wider block">
                        {item.category}
                      </span>
                    </div>

                    {/* Hover inspect overlay */}
                    <div
                      className={`absolute inset-0 bg-[#123D32]/50 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${
                        hoveredId === item.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="bg-[#123D32] border border-[#C5A15B] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl">
                        <ZoomIn className="w-3.5 h-3.5 text-[#C5A15B]" />
                        Inspect Article
                      </div>
                    </div>
                  </div>

                  {/* Card body below image */}
                  <div className="pt-3.5 pb-1 px-1 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-sm sm:text-base font-bold text-[#1F2A24] uppercase tracking-wide group-hover:text-[#123D32] transition-colors leading-snug mb-1.5">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#6B7C73] leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-3.5 pt-2.5 border-t border-black/6 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#C5A15B] group-hover:text-[#123D32] transition-colors">
                        View Specifications
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#F7F4EB] border border-black/8 flex items-center justify-center group-hover:bg-[#123D32] group-hover:border-[#123D32] transition-all">
                        <ArrowRight className="w-3 h-3 text-[#6B7C73] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
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
          SIGNATURE ARCHITECTURAL APPLICATIONS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-t border-b border-black/6">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv delay={0} className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] font-bold text-[#C5A15B] uppercase tracking-[0.22em] block mb-2">
              HERITAGE ARCHITECTURE
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
          CTA BANNER (Matching Semi-Precious style)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F7F4EB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv delay={0}>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1F2A24] via-[#1E5A46] to-[#123D32] border border-[#C5A15B]/30 p-8 sm:p-12 lg:p-14 shadow-2xl text-white">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A15B]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A15B]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#C5A15B] text-[10px] font-bold uppercase tracking-wider mb-4">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Direct Mine Extraction &bull; Custom Scale Sculptures</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white mb-3">
                    Commission a Custom Stone Sculpture
                  </h2>
                  <p className="text-xs sm:text-sm text-white/75 max-w-xl leading-relaxed">
                    Our master stone artisans in Sikandra carve bespoke sculptures, monolithic guardian animals, fountain cascades, and sacred temple columns from your CAD sketches or 3D models.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-white/90">
                    {[
                      "Custom 1:1 Scale Prototyping",
                      "Authentic Monolithic Blocks",
                      "Global ISPM-15 Export Crating",
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
                    href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com%2C%20I%20would%20like%20to%20commission%20a%20custom%20stone%20sculpture%20or%20architectural%20article."
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
                    <span>Send Detailed Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INTERACTIVE ARTICLE DETAIL MODAL (Matching Semi-Precious style)
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
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full shrink-0 bg-[#0B2A22]">
              <Image
                src={activeModal.image}
                alt={activeModal.name}
                fill
                sizes="700px"
                className="object-contain p-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A24]/90 via-[#1F2A24]/20 to-transparent pointer-events-none" />

              {/* Close Button */}
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
                <span className="text-[9px] uppercase font-bold text-[#C5A15B] tracking-widest block mb-1">
                  {activeModal.category} &bull; {activeModal.material}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold leading-tight">
                  {activeModal.name}
                </h3>
                <p className="text-xs text-white/70 mt-0.5">{activeModal.subtitle}</p>
              </div>
            </div>

            {/* Modal body */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-5 text-white">
              {/* Description */}
              <div>
                <h4 className="font-heading text-xs font-bold text-[#C5A15B] uppercase tracking-wider mb-2">
                  Artisan Overview
                </h4>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {activeModal.desc}
                </p>
              </div>

              {/* Specifications Table */}
              <div>
                <h4 className="font-heading text-xs font-bold text-[#C5A15B] uppercase tracking-wider mb-2">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeModal.specs.map((spec, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-2.5 border border-white/8">
                      <span className="text-[10px] text-white/50 uppercase font-semibold block mb-0.5">
                        {spec.label}
                      </span>
                      <span className="text-white font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-heading text-xs font-bold text-[#C5A15B] uppercase tracking-wider mb-2">
                  Craftsmanship Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-white/80">
                  {activeModal.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C5A15B] mt-0.5">&#10003;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/919414945457?text=${encodeURIComponent(activeModal.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#C5A15B] hover:bg-[#d4b574] text-[#123D32] font-bold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#123D32]" size={16} />
                  Inquire on WhatsApp
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

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
