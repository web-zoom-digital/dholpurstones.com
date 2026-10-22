"use client";

import React from "react";
import {
  LuCompass as Compass,
  LuHardHat as HardHat,
  LuSun as Sun,
  LuCircleCheck as Check,
} from "react-icons/lu";
import SectionHeader from "./ui/SectionHeader";
import CatalogGrid, { type CatalogItem } from "./catalog/CatalogGrid";
import { Stagger, StaggerItem } from "./ui/Reveal";

interface LandscapeItem {
  id: string;
  category: string;
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
    title: "Cobblestone Carriage Driveways & Portico Courtyards",
    tag: "Heavy-Duty Vehicle Paving",
    subtitle: "Hand-Split Sandstone Cobbles for Axle-Load Entrance Roads",
    image: "/assets/landscaping/landscape_cobblestone_driveway.jpg",
    provenance: "Direct Dholpur Sandstone Strata",
    desc: "Engineered specifically for heavy vehicular traffic — from luxury SUVs to estate service vehicles. Hand-dressed natural sandstone cobblestones laid in fan, herringbone, or linear patterns, creating an aristocratic European manor or royal haveli arrival experience.",
    idealFor: "Estate Driveways, Farm House Porticos, Luxury Hotel Forecourts, Valet Courtyards",
    specs: [
      { label: "Standard Formats", value: "100x100x50mm, 140x140x60mm & 100x200mm" },
      { label: "Crushing Strength", value: "68–72 MPa (Extreme Axle Load Bearing)" },
      { label: "Jointing Type", value: "Permeable Eco-Grout or Traditional Sand" },
      { label: "Quarry Source", value: "Direct from Dholpur Heavy Strata" },
    ],
    features: [
      "Extreme compressive resistance handles heavy vehicle traffic without sinking or cracking",
      "Naturally textured split finish ensures optimal tire traction during torrential monsoon rains",
      "Permeable joints support natural rainwater drainage and eco-friendly groundwater recharge",
      "Rich natural mineral patina that looks more regal with every passing decade",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to inquire about Sandstone Cobblestones & Driveway Paving for an estate project.",
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
    waMsg: "Hello Dholpurstones.com, I would like to inquire about Calibrated Sandstone Flagstones & Paving for a landscaping project.",
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
    waMsg: "Hello Dholpurstones.com, I would like to inquire about Sandstone Pool Copings & Non-Slip Decks.",
  },
  {
    id: "steps-walling",
    category: "steps",
    title: "Monolithic Garden Steps & Dry Stone Walling",
    tag: "Structural Grade & Rustic Heritage",
    subtitle: "Solid Block Treads & Rustic Terracing Walling",
    image: "/assets/landscaping/landscape_steps_walling.jpg",
    provenance: "Dholpur Heavy Bed Quarries",
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
    waMsg: "Hello Dholpurstones.com, I would like to inquire about Monolithic Steps & Dry Stone Walling for landscape terracing.",
  },
  {
    id: "water-fountains",
    category: "fountains",
    title: "Hand-Carved Stone Fountains & Cascades",
    tag: "Master Artisan Craftsmanship",
    subtitle: "Regal Tiered Water Features & Lotus Stone Basins",
    image: "/garden-stonework/sandstone-bowl-water-fountains.jpg",
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
    waMsg: "Hello Dholpurstones.com, I would like to inquire about Hand-Carved Sandstone Water Fountains & Garden Basins.",
  },
  {
    id: "sandstone-gazebos",
    category: "gazebos",
    title: "Hand-Carved Gazebos, Pergolas & Garden Baradaris",
    tag: "Royal Heritage Pavilions & Chhatris",
    subtitle: "Fluted Sandstone Columns, Stone Canopies & Baradaris",
    image: "/garden-stonework/carved-sandstone-chhatri-pavilion.jpg",
    provenance: "Sikandra Ateliers & Dholpur",
    desc: "Bespoke hand-carved natural sandstone gazebos, garden baradaris, and open-air pergolas crafted for luxury farm house lawns, meditation courtyards, and palatial garden estates. Features hand-chiseled fluted columns, ornate brackets, carved domed chhatri canopies, and integrated perimeter stone bench seating.",
    idealFor: "Luxury Farm Houses, Expansive Estate Lawns, Central Courtyards, Heritage Resort Gardens",
    specs: [
      { label: "Architectural Styles", value: "Baradari, Chhatri, Tuscan & Pergola" },
      { label: "Pillar Formats", value: "Solid Carved Columns (8ft to 14ft height)" },
      { label: "Stone Quality", value: "A-Grade Uniform Fine Dholpur Pink & Beige" },
      { label: "Longevity", value: "100% Weatherproof, Multi-Generational Life" },
    ],
    features: [
      "Traditional Shilpa Shastra stone artisans hand-sculpting each column, arch & dome canopy",
      "Precision interlocking modular stone joints engineered for seismic stability and easy estate assembly",
      "Concealed internal electrical channels for evening ambient LED chandelier and pillar downlighting",
      "Available from compact 10ft x 10ft garden gazebos to grand 32ft monumental octagonal baradaris",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to inquire about Hand-Carved Sandstone Gazebos, Pergolas & Garden Baradaris for a Farm House project.",
  },
  {
    id: "garden-lanterns",
    category: "lanterns",
    title: "Carved Garden Lanterns & Lamp Posts",
    tag: "Pathway & Lawn Lighting",
    subtitle: "Jali Lantern Posts in Beige, Red and Pink Sandstone",
    image: "/garden-stonework/sandstone-lantern-lamp-post-lawn.jpg",
    provenance: "Sikandra Ateliers & Dholpur",
    desc: "Hand-carved sandstone lantern posts with pierced jali panels, lotus-carved shafts and finial tops, made to line driveways, pathways, lawns and entrances. Each post is cut to your height and fitted for an LED lamp.",
    idealFor: "Farm House Pathways, Driveway Edges, Lawn Borders, Entrance Gates, Resort Gardens",
    specs: [
      { label: "Stone Options", value: "Dholpur Beige, Agra Red, Dholpur Pink" },
      { label: "Heights", value: "Made to order — share your requirement" },
      { label: "Design", value: "Floral and geometric jali, lotus shaft, finial top" },
      { label: "Finish", value: "Hand-chiselled and honed" },
    ],
    features: [
      "Carved by hand in matching sets for a uniform pathway",
      "Pierced jali panel lets lamp light glow softly after dusk",
      "Natural sandstone weathers gracefully outdoors",
      "Custom heights, patterns and colours available",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to inquire about Carved Garden Lanterns & Lamp Posts for my farm house / garden.",
  },
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


const items: CatalogItem[] = landscapeSolutions.map((l) => ({
  id: l.id,
  name: l.title,
  badge: l.tag,
  meta: l.subtitle,
  image: l.image,
  desc: `${l.desc} Ideal for: ${l.idealFor}.`,
  specs: l.specs,
  highlights: l.features,
  waMsg: l.waMsg,
}));

export default function LandscapingSolutions() {
  return (
    <>
      <section id="landscaping" className="section-y relative overflow-hidden bg-ivory pattern-dots">
        <div className="container-x relative">
          <SectionHeader
            eyebrow="Our Speciality"
            title="Farm House & Garden Stonework"
            subtitle="Driveways, patios, pool decks, steps, chhatris, lantern posts and fountains — tap any item for details, then enquire, WhatsApp or call us."
          />
          <CatalogGrid items={items} ctaPrefix="Farm house & garden" />
        </div>
      </section>

      <section className="section-y relative overflow-hidden bg-forest bg-stone-grain pattern-jali">
        <div className="container-x relative">
          <SectionHeader
            tone="dark"
            eyebrow="Who We Work With"
            title="Built Around Your Project"
            subtitle="Architects, builders and estate owners all get the same direct-from-mine support."
          />
          <Stagger className="grid gap-4 lg:grid-cols-3">
            {stakeholderPillars.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.title}>
                  <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition-colors hover:border-gold/50 sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-forest">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-gold">{p.badge}</p>
                        <h3 className="font-heading text-[15px] font-bold uppercase tracking-wide text-white">{p.title}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-white/70">{p.desc}</p>
                    <ul className="mt-3 space-y-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5 text-[13.5px] leading-snug text-white/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
    </>
  );
}
