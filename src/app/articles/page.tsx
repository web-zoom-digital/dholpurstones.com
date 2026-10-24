import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import FeatureStrip from "@/components/ui/FeatureStrip";
import SectionHeader from "@/components/ui/SectionHeader";
import PhotoGallery from "@/components/ui/PhotoGallery";
import ContactActions from "@/components/ui/ContactActions";
import CatalogGrid, { type CatalogItem } from "@/components/catalog/CatalogGrid";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { articleFaqs } from "@/data/faqs";
import { articleSubs, articleGallery } from "@/data/catalog";
import { breadcrumbLd, itemListLd, faqLd } from "@/lib/schema";
import {
  LuHammer as Hammer,
  LuShieldCheck as ShieldCheck,
  LuRuler as Ruler,
  LuGlobe as Globe,
  LuLandmark as Landmark,
  LuTrees as Trees,
  LuBuilding2 as Building,
  LuSparkles as Sparkles,
  LuHotel as Hotel,
  LuFlower2 as Flower,
} from "react-icons/lu";

/* ─── Stone article data ───────────────────────────────────────────────── */
const articles = [
  {
    id: "sandstone-temple-mandir",
    name: "Hand-Carved Sandstone Temple Mandir",
    subtitle: "Jali-Walled Natural Sandstone Shrine with Shikhara Spire",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.31 PM.jpeg",
    category: "TEMPLE & SACRED ARCHITECTURE",
    material: "Natural Dholpur Sandstone",
    desc: "Monumental outdoor temple mandir intricately hand-carved from dense Dholpur sandstone. Features delicate geometric jali lattice side screens, fluted lotus-capital pillars, floral arch spandrels, and a stepped shikhara spire crowned with an ornate kalash.",
    specs: [
      { label: "Stone Material", value: "A-Grade Dense Dholpur Beige Sandstone" },
      { label: "Carving Technique", value: "100% Traditional Hand Chisel & Mallet Sculpture" },
      { label: "Construction", value: "Interlocking Dry-Joint Architectural Modular Blocks" },
      { label: "Surface Finish", value: "Hand-Honed Satin with Intricate Jali Relief" },
      { label: "Weather Resistance", value: "100% All-Weather Exterior, Frostproof & Rainproof" },
    ],
    highlights: [
      "Pierced jali lattice walls allow natural light, incense dispersion and gentle breeze",
      "Monolithic lotus-capital columns and carved threshold plinth",
      "Pre-engineered in modular interlocking sections for easy site assembly",
      "Customizable dimensions, deity sanctum size, and stone tones",
    ],
    waMsg: "Hello Dholpurstones.com, I am inquiring about the Hand-Carved Sandstone Temple Mandir for my property.",
  },
  {
    id: "master-heritage-peacocks",
    name: "Master Heritage Filigree Peacock Pair",
    subtitle: "Sculpted Natural Sandstone Peacocks on Carved Pedestals",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.32 PM (2).jpeg",
    category: "ROYAL RAJASTHANI BIRD SCULPTURE",
    material: "Fine-Grained Dholpur Beige Sandstone",
    desc: "Exquisite museum-grade pair of sandstone peacock sculptures hand-chiseled from single stone monoliths. Showcases delicate openwork tail plumage, crested crowns, and authentic Indian royal motifs mounted on matching decorative pedestals.",
    specs: [
      { label: "Stone Origin", value: "Finest Sikandra Calibrated Sandstone" },
      { label: "Carving Detail", value: "Deep Relief Pierced Filigree & Micro-Chisel Feathering" },
      { label: "Height Variants", value: "2.5 Ft, 3.5 Ft, 5 Ft & Bespoke Life-Size" },
      { label: "Finish", value: "Smooth Hand-Honed with Natural Stone Grain" },
      { label: "Placement", value: "Gateways, Courtyard Centerpieces, Pool Margins" },
    ],
    highlights: [
      "Museum-grade plumage detailing hand-carved feather by feather",
      "Sculpted by hereditary master artisans from Sikandra ateliers",
      "Balanced center of gravity with integrated plinth for stability",
      "Protected with breathable stone impregnator for lifetime outdoor beauty",
    ],
    waMsg: "Hello Dholpurstones.com, I want to inquire about the Master Heritage Filigree Sandstone Peacock Pair.",
  },
  {
    id: "royal-guardian-lion",
    name: "Royal Guardian Lion Sculpture",
    subtitle: "Monolithic Hand-Chiseled Reclining Sandstone Lion",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.22 PM.jpeg",
    category: "HERITAGE GUARDIAN SCULPTURE",
    material: "Natural Dholpur Sandstone",
    desc: "Majestic monolithic sandstone guardian lion sculpted with regal resting posture, flowing mane whorls, and commanding physical presence. Masterfully chiseled from single quarry blocks for palatial entryways, grand porticos, and monumental estate gateways.",
    specs: [
      { label: "Stone Material", value: "Natural Dholpur Sandstone (Sarmathura Quarry)" },
      { label: "Carving Technique", value: "100% Traditional Hand Chisel & Mallet Sculpture" },
      { label: "Standard Lengths", value: "3.5 Ft, 5 Ft, 6.5 Ft & Custom Monumental Scales" },
      { label: "Surface Finish", value: "Hand-Honed Antique / Fine Chiseled Texture" },
      { label: "Durability", value: "High Compressive Strength (>68 MPa), 100% Weatherproof" },
    ],
    highlights: [
      "Carved from a single monolithic block with zero joints",
      "Immune to frost, intense summer heat, acid rain, and weathering",
      "Available in matched mirror-facing gateway pairs (left & right)",
      "Custom monolithic pedestals and inscribed plinths available",
    ],
    waMsg: "Hello Dholpurstones.com, I am interested in commissioning Royal Guardian Lion Sandstone Sculptures for my entrance gate.",
  },
  {
    id: "gateway-caparisoned-elephants",
    name: "Matched Gateway Caparisoned Elephants",
    subtitle: "Ornate Left & Right Facing Sandstone Elephants on Plinths",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.10.02 PM.jpeg",
    category: "AUSPICIOUS ENTRANCE MONUMENT",
    material: "High-Density Natural Sandstone",
    desc: "Monumental caparisoned elephant statues sculpted in traditional Shilpa Shastra proportions with raised greeting trunks, decorative hauda seating, braided flank girths, and heavy rectangular stone foundation bases.",
    specs: [
      { label: "Stone Selection", value: "Dense Fine-Grained Dholpur Sandstone" },
      { label: "Pairing", value: "Matched Mirror-Facing Pair (Left & Right Orientation)" },
      { label: "Standard Heights", value: "3.5 Ft, 5 Ft, 6 Ft & Monumental 8 Ft Base" },
      { label: "Carving Relief", value: "High-Relief Hauda, Floral Blanket & Bell Garlands" },
      { label: "Base Type", value: "Integrated Solid Sandstone Plinth" },
    ],
    highlights: [
      "Traditional symbol of royal welcome, prosperity, and auspicious fortune",
      "Solid monolithic carving engineered for multi-decade exterior durability",
      "Internal conduits available for fountain spout customization",
      "Delivered safely in heavy-duty ISPM-15 export wooden crates",
    ],
    waMsg: "Hello Dholpurstones.com, I am interested in commissioning the Matched Gateway Caparisoned Elephants for our estate.",
  },
  {
    id: "rajasthani-royal-guard",
    name: "Traditional Rajasthani Royal Guard Statue",
    subtitle: "Hand-Carved Sandstone Chokidar with Staff & Turban",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.40 PM.jpeg",
    category: "TRADITIONAL FIGURE SCULPTURE",
    material: "Natural Dholpur Sandstone",
    desc: "Traditional Rajasthani warrior guard statue carved from a single block of natural sandstone. Depicts ornate royal turban, ceremonial jewellery, pleated dhoti attire, and holding a heraldic staff. Built to flank heritage entrances and estate courtyards.",
    specs: [
      { label: "Stone Material", value: "Fine Natural Dholpur Sandstone" },
      { label: "Carving Technique", value: "Traditional Master Chisel and Mallet" },
      { label: "Height", value: "4.5 Ft, 5.5 Ft & Custom Life-Size (6 Ft)" },
      { label: "Surface Finish", value: "Hand-Chiseled and Silky Honed" },
      { label: "Ideal For", value: "Heritage Portals, Forts, Hotels, Farmhouse Gates" },
    ],
    highlights: [
      "Carved from a single monolithic block of natural sandstone",
      "Intricate facial features, moustache, turban, and pleated fabric folds",
      "Available in pairs holding lanterns or ceremonial staffs",
      "100% natural stone with no synthetic fillers or cast resins",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to inquire about the Hand-Carved Rajasthani Royal Guard Statue.",
  },
  {
    id: "fluted-garden-lantern-post",
    name: "Monumental Fluted Sandstone Lantern Posts",
    subtitle: "Reeded Pillar with Pierced Lotus Jali Lantern Cap",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.31 PM (1).jpeg",
    category: "ARCHITECTURAL LANDSCAPE LIGHTING",
    material: "Dholpur Beige Sandstone",
    desc: "Tall architectural sandstone lamp post with precision-fluted shaft, stepped pedestal base, and pierced floral jali lantern box topped with a classical stone finial. Pre-channeled for concealed electric wiring or warm evening LED illumination.",
    specs: [
      { label: "Stone Material", value: "Dholpur Beige & Teakwood Sandstone" },
      { label: "Assembly", value: "Modular Interlocking Stone Segments" },
      { label: "Height Options", value: "3 Ft, 4.5 Ft, 6 Ft & 7.5 Ft Custom Heights" },
      { label: "Electrical", value: "Concealed Core Chute for 220V/12V LED Fixtures" },
      { label: "Surface Finish", value: "Hand-Chiseled Base with Fine Honed Shaft" },
    ],
    highlights: [
      "Pierced floral jali panel casts warm geometric light patterns on lawns & pathways",
      "Natural sandstone develops a richer, noble antique patina year after year",
      "Engineered to withstand heavy monsoon rainfall, intense sun, and winds",
      "Matching pathway border stones and paving slabs available",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to order Monumental Fluted Sandstone Lantern Posts for our garden landscape.",
  },
  {
    id: "om-jali-pillar-lamp",
    name: "Sacred Om Jali Sandstone Lamp",
    subtitle: "Square Pierced Sandstone Beacon with Om Motif",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.32 PM (1).jpeg",
    category: "JALI LAMPS & LANTERNS",
    material: "Fine Honed Natural Sandstone",
    desc: "Square sandstone lantern box featuring pierced sacred Om symbols and vertical slotted light grilles. Casts warm geometric shadow plays across garden lawns, temple pathways, and farmhouse entry verandas.",
    specs: [
      { label: "Stone Material", value: "Natural Dholpur Sandstone" },
      { label: "Jali Carving", value: "Micro-Chiseled Om Symbol & Slotted Louvers" },
      { label: "Dimensions", value: "10x10x24”, 12x12x30” & 14x14x36” Formats" },
      { label: "Wiring Chute", value: "Standard Base Cable Port for Concealed Conduits" },
      { label: "Finish", value: "Fine Honed Natural Sandstone" },
    ],
    highlights: [
      "Sacred Om motif produces spiritual evening ambiance when lit",
      "Heavy weighted stone base prevents tipping or wind displacement",
      "All-weather durability with zero maintenance requirements",
      "Custom inscriptions, swastik, and floral motifs available",
    ],
    waMsg: "Hello Dholpurstones.com, I want to inquire about the Sacred Om Jali Sandstone Lamp.",
  },
  {
    id: "pink-jali-urn-lamp",
    name: "Pink Sandstone Jali Urn Lamp",
    subtitle: "Pierced Basketweave Urn with Finial Domed Lid",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.38 PM.jpeg",
    category: "JALI LAMPS & URNS",
    material: "Natural Dholpur Pink Sandstone",
    desc: "Hand-carved pink sandstone vessel with an intricate woven lattice pattern and domed finial cover. Functions as an ambient glowing garden lantern or decorative lawn urn that naturally resists heat, frost, and monsoon weathering.",
    specs: [
      { label: "Stone Material", value: "Natural Dholpur Pink Sandstone" },
      { label: "Carving Pattern", value: "Interlaced Basketweave Pierced Jali" },
      { label: "Lid Type", value: "Detachable Domed Lid with Turned Finial" },
      { label: "Height", value: "24”, 32” & 42” Heights Available" },
      { label: "Base", value: "Circular Fluted Pedestal Footing" },
    ],
    highlights: [
      "Delicate lattice openwork creates captivating ambient garden lighting",
      "Warm pink natural stone hue harmonizes with flowering landscaping",
      "Detachable lid allows quick LED lamp bulb replacement",
      "Custom sizes crafted to order in our Sikandra workshops",
    ],
    waMsg: "Hello Dholpurstones.com, I am interested in ordering Pink Sandstone Jali Urn Lamps.",
  },
  {
    id: "acanthus-marble-cascade-fountain",
    name: "Grand Acanthus Leaf White Marble Cascade Fountain",
    subtitle: "3-Tier Hand-Carved Monumental Marble Centerpiece",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.09.57 PM.jpeg",
    category: "PALATIAL WATER FEATURES",
    material: "Pure White Makrana / Statuario Marble",
    desc: "Extraordinary 3-tiered classical cascade water fountain sculpted entirely from dense natural white marble. Adorned with deep relief acanthus leaves, scalloped spillway rims, fluted pedestal shafts, and a pinecone water finial.",
    specs: [
      { label: "Material", value: "100% Solid Natural White Marble" },
      { label: "Tier Configuration", value: "3 Concentric Basins with Acanthus Relief" },
      { label: "Height", value: "8.5 Ft Height (Custom Scale Options Available)" },
      { label: "Plumbing Conduits", value: "Pre-drilled Concealed Core for Recirculation Pumps" },
      { label: "Finish", value: "Satin Honed Waterways with Deep Chiseled Reliefs" },
    ],
    highlights: [
      "Precision-carved acanthus leaf fronds with crisp 3D undercuts",
      "Calibrated spill rims create uniform 360-degree curtain waterfalls",
      "Monolithic base pedestal engineered for extreme stability and load bearing",
      "Shipped in customized shock-absorbing wooden export crates",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to get a quotation for the Grand Acanthus Leaf White Marble Cascade Fountain.",
  },
  {
    id: "pegasus-horse-estate-fountain",
    name: "Grand Pegasus Winged Horse Estate Fountain",
    subtitle: "Multi-Tiered Cascade Fountain with Stallions in Pool Basin",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.09.53 PM.jpeg",
    category: "MONUMENTAL ESTATE FOUNTAINS",
    material: "Pristine White Marble & Sandstone",
    desc: "Palatial centerpiece fountain featuring hand-sculpted winged horses with arched water spouts, concentric tiered spillways, and a circular stone pool surround decorated with urn planters.",
    specs: [
      { label: "Structure", value: "Multi-Tier Central Tower & Pool Surround" },
      { label: "Sculptures", value: "Hand-Carved Winged Horses with Internal Nozzles" },
      { label: "Basin Diameter", value: "14 Ft to 25 Ft Diameter Stone Surrounds" },
      { label: "Water Features", value: "Multi-Directional Arched Jets & Spillway Sheeting" },
      { label: "Ideal For", value: "Estate Driveway Rotundas, Palatial Forecourts, Resorts" },
    ],
    highlights: [
      "Majestic winged stallions sculpted with lifelike muscular anatomy",
      "Concealed internal manifold handles high-flow multi-jet water choreography",
      "Integrated planter urns on perimeter pool coping for blooming flora",
      "Turnkey quarry-to-site supply with complete installation layout drawings",
    ],
    waMsg: "Hello Dholpurstones.com, I want specifications and pricing for the Grand Pegasus Winged Horse Estate Fountain.",
  },
  {
    id: "sandstone-garden-dining-set",
    name: "Hand-Carved Sandstone Garden Dining Table & Benches",
    subtitle: "Monolithic Round Stone Patio Table with Fluted Benches",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.09.50 PM (1).jpeg",
    category: "EXTERIOR STONE FURNITURE",
    material: "Natural Dholpur Sandstone",
    desc: "Generational outdoor dining suite hand-crafted from solid Dholpur sandstone. Features a heavy round table with scalloped under-edge and pedestal pedestal support, accompanied by curved ergonomic benches with carved relief scrollwork.",
    specs: [
      { label: "Material", value: "Natural Dholpur Fine-Grain Sandstone" },
      { label: "Set Components", value: "1 Round Center Table + 3 Curved Benches + 2 Stools" },
      { label: "Table Diameter", value: "48” & 60” Tabletop Diameter" },
      { label: "Surface Finish", value: "Silky Smooth Honed Tabletop (Zero Spill Staining)" },
      { label: "Durability", value: "100% Outdoor Weatherproof (Century+ Lifespan)" },
    ],
    highlights: [
      "Stays pleasantly cool under summer sun and will not rot, rust, or warp like wood/metal",
      "Monolithic heavy stone components eliminate wind displacement and wobbling",
      "Carved acanthus and scroll brackets on bench supports for regal aesthetic",
      "Stain-resistant protective breathable sealer pre-applied in atelier",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to inquire about the Hand-Carved Sandstone Garden Dining Table and Benches set.",
  },
  {
    id: "sandstone-chhatri-pavilion",
    name: "Hand-Carved Sandstone Chhatri Garden Pavilion",
    subtitle: "6-Pillar Heritage Gazebo with Cusped Mughal Arches",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.37 PM.jpeg",
    category: "MONUMENTAL GARDEN PAVILIONS",
    material: "Dholpur Beige & Pink Sandstone",
    desc: "Full-scale architectural royal sandstone chhatri pavilion designed for luxury country estates and resort gardens. Crafted with monolithic fluted columns, cusped arches with floral relief, heavy cantilevered eaves, and a stepped roof.",
    specs: [
      { label: "Stone Material", value: "Uniform Dense Dholpur Beige Sandstone" },
      { label: "Columns", value: "6 Solid Fluted Stone Pillars with Lotus Capitals" },
      { label: "Footprint", value: "10x12 Ft, 12x15 Ft & Custom Site Sizing" },
      { label: "Roofing", value: "Interlocking Sandstone Slabs with Drip Eaves (Chhajja)" },
      { label: "Engineering", value: "Pre-assembled and numbered for rapid on-site erection" },
    ],
    highlights: [
      "Traditional Indian royal chhatri architecture adapted for luxury outdoor seating",
      "Provides shade and rain protection while creating a monumental garden landmark",
      "Precision CNC gangsaw-sliced with artisanal hand-chiseled decorative friezes",
      "Complete CAD elevation drawings and foundation guidance provided",
    ],
    waMsg: "Hello Dholpurstones.com, I want to discuss commissioning a Sandstone Chhatri Garden Pavilion for our estate.",
  },
  {
    id: "radha-krishna-divine-mural",
    name: "Radha Krishna Divine High-Relief Stone Mural",
    subtitle: "Museum-Grade White Stone Bas-Relief Wall Panel",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.10.01 PM.jpeg",
    category: "DEVOTIONAL WALL RELIEF & ART",
    material: "Fine Crystalline White Stone",
    desc: "Intricate deep-relief stone wall mural depicting the divine couple Radha and Krishna with sacred flute, floral ornaments, and flowing halo details. Ideal for temple sanctums, entrance atriums, and prayer courtyards.",
    specs: [
      { label: "Stone Material", value: "Dense Fine Crystalline White Stone" },
      { label: "Carving Type", value: "High-Relief Deep Undercut Sculpture" },
      { label: "Dimensions", value: "4 Ft x 2.5 Ft, 6 Ft x 3.5 Ft & Custom Paneling" },
      { label: "Finish", value: "Satin Honed with Detailed Bas-Relief Texture" },
      { label: "Installation", value: "Flush Wall Cladding or Inset Niche Mounting" },
    ],
    highlights: [
      "Exquisite sculptural detail on jewelry, flowing tresses, and sacred flute",
      "Framed with carved stone border compatible with indirect architectural backlighting",
      "Permanent stone art that never fades, discolors, or degrades over time",
      "Custom religious and heritage themes carved to your reference drawings",
    ],
    waMsg: "Hello Dholpurstones.com, I am interested in the Radha Krishna Divine High-Relief Stone Mural for our home/temple.",
  },
  {
    id: "sacred-gada-trishul-mural",
    name: "Sacred Gada & Trishul Chaupai Stone Mural",
    subtitle: "Hand-Carved Devotional Panel with Sacred Verse",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.10.01 PM (1).jpeg",
    category: "DEVOTIONAL WALL RELIEF & ART",
    material: "Natural Fine Sandstone",
    desc: "Monumental stone wall panel sculpted in high relief with Lord Hanuman's Gada, Lord Shiva's Trishul & Damru, beaded garlands, rope border, and hand-chiseled Chaupai verses ('सब सुख लहै तुम्हारी सरना, तुम रक्षक काहू को डरना').",
    specs: [
      { label: "Stone Material", value: "Uniform Dense White / Beige Sandstone" },
      { label: "Carving Technique", value: "Deep Bas-Relief with Precision Calligraphy Inscription" },
      { label: "Dimensions", value: "5 Ft H x 2.5 Ft W (Custom Scales on Request)" },
      { label: "Border", value: "Intertwined Rope & Floral Molding Frame" },
      { label: "Usage", value: "Mandir Forecourts, Gateway Panels, Main Entrance Atriums" },
    ],
    highlights: [
      "Authentic Devanagari holy chaupai inscription chiseled with absolute clarity",
      "Symbolic protective iconography of Gada, Trishul, and sacred Damru",
      "Dual-piece jointed stone slab for secure vertical wall mounting",
      "Treated with protective sealer for weather resistance and zero dust retention",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to order the Sacred Gada & Trishul Chaupai Stone Mural.",
  },
  {
    id: "blooming-lotus-urn-pillar",
    name: "Blooming Lotus Marble Urn & Fluted Pedestal",
    subtitle: "Multi-Tiered Reeded Pillar with Scalloped Lotus Bowl",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.42 PM.jpeg",
    category: "ARCHITECTURAL URNS & PLANTERS",
    material: "Pure White Polished Marble",
    desc: "Artisanal landscape accent piece sculpted from pure white marble. Features a high-relief blooming lotus petal basin mounted upon a reeded concentric round pedestal pillar with fluted base rings.",
    specs: [
      { label: "Stone Material", value: "Premium Fine White Marble" },
      { label: "Design", value: "Blooming Lotus Flower Basin + Stepped Fluted Column" },
      { label: "Height", value: "48” Total Height (Bespoke Heights on Order)" },
      { label: "Finish", value: "Hand-Buffed Satin Luster" },
      { label: "Drainage", value: "Pre-drilled Concealed Bottom Drainage Hole" },
    ],
    highlights: [
      "Sculpted lotus petals create an elegant natural basin for water flowers or floating candles",
      "Architectural fluting on stepped circular bases reflects classical Roman and Indian motifs",
      "Stands proud in driveway centerpieces, verandah entries, and swimming pool decks",
      "Dense, zero-porosity marble cleans easily with plain water",
    ],
    waMsg: "Hello Dholpurstones.com, I want to inquire about the Blooming Lotus Marble Urn and Fluted Pedestal.",
  },
  {
    id: "modern-stone-abstract-sculptures",
    name: "Contemporary Stone Vortex Ring & Organic Sculptures",
    subtitle: "Modern Minimalist Hand-Polished White Stone Art",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.10.03 PM.jpeg",
    category: "CONTEMPORARY LANDSCAPE SCULPTURE",
    material: "Dense White Marble & Sandstone",
    desc: "Striking modern geometric stone sculptures showcasing fluid vortex rings, perforated concentric bands, and organic biomorphic forms hand-chiseled and satin-honed for contemporary farmhouse lawns, hotel foyers, and modern villa courtyards.",
    specs: [
      { label: "Art Movement", value: "Contemporary Organic & Parametric Stone Sculpture" },
      { label: "Material", value: "Dense White Marble with Bush-Hammered & Honed Textures" },
      { label: "Heights", value: "4.5 Ft to 7.5 Ft Monumental Focal Pieces" },
      { label: "Base", value: "Integrated Solid Rectangular Plinth" },
      { label: "Placement", value: "Modern Villa Lawns, Civic Plazas, Corporate Foyers" },
    ],
    highlights: [
      "Hand-chiseled concentric vortex ring with tactile dimpled texture",
      "Companion biomorphic perforated infinity loop sculpture",
      "Signature high-art landmark for architectural exterior landscapes",
      "Engineered for hurricane-grade outdoor wind stability",
    ],
    waMsg: "Hello Dholpurstones.com, I am interested in commissioning Contemporary Stone Abstract Sculptures for my modern estate.",
  },
  {
    id: "slate-cascade-waterfall-wall",
    name: "Stepped Bowl Slate Cascade Waterfall Wall",
    subtitle: "Architectural Dark Stone Water Feature with 7 Spillway Bowls",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.10.04 PM.jpeg",
    category: "PALATIAL WATER FEATURES",
    material: "Natural Black Slate & Granite",
    desc: "Self-contained modern architectural waterfall wall unit crafted with textured split-face stone back panel, 7 tiered stepped pouring bowls, and monolithic lower catch reservoir for soothing acoustic garden ambiance.",
    specs: [
      { label: "Stone Material", value: "Dense Black Slate & Honed Granite" },
      { label: "Configuration", value: "Vertical Acoustic Ripple Wall + 7 Stepped Pouring Bowls" },
      { label: "Basin", value: "Monolithic Watertight Bottom Catch Tank" },
      { label: "Circulation", value: "Concealed Plumbing for Submersible Recirculating Pump" },
      { label: "Sound Level", value: "Gentle Melodic Multistage Water Trickle" },
    ],
    highlights: [
      "7 staggered cascading bowls create a dynamic water journey across stone tiers",
      "Textured split-face stone backboard produces shimmering water sheeting",
      "Completely self-contained with no external excavation or pond required",
      "Pre-wired channels for underwater and top spotlight integration",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to inquire about the Stepped Bowl Slate Cascade Waterfall Wall.",
  },
  {
    id: "fluted-pillar-finial-lamp",
    name: "Fluted Gate Pillar Finial Stone Lamp",
    subtitle: "Ribbed Melon Finial Lamp with Slotted Vents",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.39 PM.jpeg",
    category: "JALI LAMPS & LANTERNS",
    material: "Fine Dholpur Sandstone",
    desc: "Monumental sandstone gate pillar finial lamp with ribbed melon contouring, slotted light chambers, and stepped pedestal base. Engineered for boundary wall pillars and grand estate gateway columns.",
    specs: [
      { label: "Stone Material", value: "Natural Fine-Grained Dholpur Sandstone" },
      { label: "Finial Form", value: "Ribbed Melon Gourd with Stepped Kalash Top" },
      { label: "Dimensions", value: "18” Diameter x 32” Height (Custom Sizing Available)" },
      { label: "Illumination", value: "Slotted Windows for Internal Electric LED Bulb" },
      { label: "Mounting", value: "Flat Anchor Base for Boundary & Gate Pillar Tops" },
    ],
    highlights: [
      "Classic royal gate pillar crown that adds monumental height and prestige",
      "Slotted vertical openings emit welcoming ambient light after dusk",
      "Hand-chiseled fluted contours create rich shadow textures under sunlight",
      "Matched sets crafted for perimeter estate walls and carriage gates",
    ],
    waMsg: "Hello Dholpurstones.com, I would like pricing and order details for the Fluted Gate Pillar Finial Stone Lamps.",
  },
  {
    id: "trio-peacock-statuettes",
    name: "Artisan Peacock Statuette Trio",
    subtitle: "Hand-Carved Decorative Natural Sandstone Peacocks",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.23 PM.jpeg",
    category: "ROYAL RAJASTHANI BIRD SCULPTURE",
    material: "Natural Dholpur Sandstone",
    desc: "A charming trio of hand-chiseled sandstone peacocks posed gracefully on integral plinths. Perfect for console tables, verandah low walls, garden ledge accents, and niche decor.",
    specs: [
      { label: "Stone Material", value: "A-Grade Natural Dholpur Sandstone" },
      { label: "Carving Detail", value: "Hand-Chiseled Feather Crest & Tail Feathers" },
      { label: "Height Variants", value: "12” to 24” Tabletop & Landscape Scales" },
      { label: "Finish", value: "Natural Sandstone Texture with Honed Smooth Accents" },
      { label: "Usage", value: "Indoor Console, Garden Niches, Verandahs" },
    ],
    highlights: [
      "Set of 3 complementary poses capturing life-like avian grace",
      "Carved by hereditary craftsmen in Sikandra with traditional tools",
      "Stable weighted base resists wind when displayed outdoors",
      "Can be customized in beige, pink, or red Dholpur sandstone",
    ],
    waMsg: "Hello Dholpurstones.com, I am inquiring about the Artisan Peacock Statuette Trio.",
  },
  {
    id: "hexagonal-geometric-jali-screen",
    name: "Hexagonal Geometric Sandstone Jali Screen",
    subtitle: "Precision Pierced Red Sandstone Lattice Architectural Screen",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.24 PM (1).jpeg",
    category: "ARCHITECTURAL JALI SCREENS",
    material: "Dholpur Red Sandstone",
    desc: "Intricately perforated red sandstone jali screen featuring a continuous interlocking hexagonal star fretwork. Ideal for privacy partitions, balcony railings, facade shading, and temple sanctums.",
    specs: [
      { label: "Stone Type", value: "Dholpur Red Sandstone" },
      { label: "Pattern", value: "Sacred Hexagonal Lattice Star Perforation" },
      { label: "Thickness", value: "35mm – 50mm Structural Solid Stone Slab" },
      { label: "Finish", value: "Calibrated Hand-Finished Crisp Edges" },
      { label: "Application", value: "Window Screens, Partitions, Courtyard Dividers" },
    ],
    highlights: [
      "Filters harsh direct sun into gentle, patterned natural light",
      "Promotes continuous natural air ventilation (Jaali effect)",
      "High density red stone naturally resistant to moisture and weathering",
      "Custom framed modular panels ready for direct architectural installation",
    ],
    waMsg: "Hello Dholpurstones.com, I am interested in the Hexagonal Geometric Sandstone Jali Screen for our building project.",
  },
  {
    id: "floral-relief-sandstone-panel",
    name: "Imperial Floral Relief Sandstone Panel",
    subtitle: "High-Relief Chiseled Botanical Lattice Wall Art",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.24 PM.jpeg",
    category: "RELIEF MURALS & SCULPTURES",
    material: "Natural Dholpur Sandstone",
    desc: "Masterful stone relief mural depicting flowing Mughal-inspired vine creepers, blooming rosettes, and scrolling tendrils deeply sculpted into natural Dholpur sandstone.",
    specs: [
      { label: "Stone Type", value: "Fine-Grained Dholpur Beige Sandstone" },
      { label: "Relief Depth", value: "Deep 25mm 3D Sculptural Undercut Relief" },
      { label: "Standard Sizes", value: "2x2 Ft, 2x4 Ft, 3x6 Ft or Continuous Wall Panels" },
      { label: "Finish", value: "Smooth Chiseled Antique Matte" },
      { label: "Installation", value: "Mechanical Anchors or Wet Cladding on Walls" },
    ],
    highlights: [
      "Deep relief undercutting produces dramatic shadow play under natural light",
      "Inspired by classical Rajasthani and Mughal architectural heritage",
      "Ideal for entrance foyer feature walls, pooja rooms, and facade friezes",
      "Handmade by master artisans with authentic chisel techniques",
    ],
    waMsg: "Hello Dholpurstones.com, I want to inquire about custom sizes for the Imperial Floral Relief Sandstone Panel.",
  },
  {
    id: "monumental-pagoda-lantern-posts",
    name: "Monumental Pagoda Sandstone Lantern Post Quartet",
    subtitle: "Tall Fluted Avenue Pillar Lamps with Pagoda Roof Caps",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.25 PM.jpeg",
    category: "HERITAGE GARDEN LIGHTING",
    material: "Dense Dholpur Sandstone",
    desc: "Grand four-piece avenue lighting ensemble carved with fluted monolithic shafts, lotus transition neckings, and flared pagoda-style tiered roof finials. Built for estate driveways and grand resorts.",
    specs: [
      { label: "Stone Material", value: "Dense Dholpur Sandstone (Sarmathura)" },
      { label: "Height Range", value: "6 Ft, 7.5 Ft & 9 Ft Avenue Scale" },
      { label: "Wiring Path", value: "Pre-Drilled Concealed Core for Electric Wiring" },
      { label: "Components", value: "Modular Plinth Base, Fluted Shaft, Lantern Chamber, Tiered Roof" },
      { label: "Weather Resistance", value: "100% Frostproof, Windproof & All-Weather" },
    ],
    highlights: [
      "Complete set of monumental avenue lamps for formal driveway entrances",
      "Integrated electrical conduits for easy hidden cable installation",
      "Heavy weighted base ensures stable, secure freestanding anchorage",
      "Flared pagoda canopy shields the internal lamp chamber from heavy downpours",
    ],
    waMsg: "Hello Dholpurstones.com, I am interested in the Monumental Pagoda Sandstone Lantern Post Quartet for my estate driveway.",
  },
  {
    id: "promenade-jali-lantern-posts",
    name: "Promenade Red Sandstone Jali Lantern Posts",
    subtitle: "Architectural Pathway Pillar Lights with Pierced Lattice Windows",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.32 PM.jpeg",
    category: "HERITAGE GARDEN LIGHTING",
    material: "Dholpur Red Sandstone",
    desc: "Stately red sandstone garden bollard lanterns installed along paved walkways. Features multi-windowed lattice jali lamp chambers topped with domical finials to create magical nighttime pathway illumination.",
    specs: [
      { label: "Stone Origin", value: "Vibrant Dholpur Red Sandstone" },
      { label: "Height", value: "3.5 Ft to 5 Ft Walkway Height" },
      { label: "Lattice Window", value: "Geometric Jali Screen on all 4 Faces" },
      { label: "Electrical", value: "Central Hollow Core for Weatherproof LED Bulbs" },
      { label: "Maintenance", value: "Zero Maintenance Natural Stone" },
    ],
    highlights: [
      "Casts stunning lattice shadows across paved walkways and garden lawns",
      "Warm earthen red stone pairs beautifully with lush garden flora and turf",
      "Stands up to harsh weather without fading, rusting, or peeling",
      "Supplied with anchor points for paved plazas, patios, and garden borders",
    ],
    waMsg: "Hello Dholpurstones.com, I would like a quotation for Promenade Red Sandstone Jali Lantern Posts.",
  },
  {
    id: "circular-sandstone-garden-dining-set",
    name: "Heritage Circular Sandstone Dining Table Set",
    subtitle: "Polished Round Table Top with Curved Monolithic Benches",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.36 PM (1).jpeg",
    category: "GARDEN & PATIO FURNITURE",
    material: "Natural Dholpur Sandstone",
    desc: "Authentic circular outdoor dining suite comprising a massive round sandstone table on an ornate baluster pedestal, complemented by matching curved monolithic stone benches.",
    specs: [
      { label: "Material", value: "Natural Solid Dholpur Beige Sandstone" },
      { label: "Table Diameter", value: "48” to 60” Round Table Surface" },
      { label: "Seating Capacity", value: "Comfortable Seating for 6 to 8 Adults" },
      { label: "Finish", value: "Smooth Honed Eating Surface with Chiseled Pedestal" },
      { label: "Weight", value: "High Monolithic Mass (Theft-Proof & Windproof)" },
    ],
    highlights: [
      "Can remain outdoors in rain, snow, and scorching sun indefinitely",
      "Smooth honed surface is easy to clean and naturally food-safe",
      "Substantial weight ensures total stability on lawns, patios, or poolside decks",
      "Handcrafted with authentic heritage profiling and chiseled edges",
    ],
    waMsg: "Hello Dholpurstones.com, please share details and pricing for the Heritage Circular Sandstone Dining Table Set.",
  },
  {
    id: "monumental-workshop-elephant-statue",
    name: "Colossal Ceremonial Gateway Elephant Statue",
    subtitle: "Monolithic Deep-Chiseled Indian Royal Elephant with Raised Trunk",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.36 PM.jpeg",
    category: "HERITAGE GUARDIAN SCULPTURE",
    material: "Dholpur Sandstone Monolith",
    desc: "Monumental ceremonial elephant sculpture hand-carved at our Sikandra ateliers. Depicts an auspicious royal tusker with trunk raised in greeting, decorated with ornate headgear, bell tassels, and royal saddlecloth.",
    specs: [
      { label: "Stone Source", value: "Sarmathura Monolithic Block Sandstone" },
      { label: "Scale", value: "4 Ft, 6 Ft & Monumental 8 Ft Life-Size Heights" },
      { label: "Carving Depth", value: "Full 3D Sculptural Anatomical Carving" },
      { label: "Weight", value: "Approx. 1,200 kg – 3,500 kg per statue" },
      { label: "Symbolism", value: "Gaja Lakshmi Prosperity, Royal Welcome & Protection" },
    ],
    highlights: [
      "Sculpted from a single gigantic quarry block without glued seams",
      "Carved with authentic royal regalia including embroidered jhul and jeweled mukut",
      "Provides unmatched prestige and grandeur for palatial estate entrances",
      "Can be commissioned as matched pairs with custom plinth carvings",
    ],
    waMsg: "Hello Dholpurstones.com, I am inquiring about commissioning the Colossal Ceremonial Gateway Elephant Statue.",
  },
  {
    id: "fluid-ribbon-abstract-marble-sculpture",
    name: "Fluid Ribbon Contemporary Marble Sculpture",
    subtitle: "Hand-Sculpted Biomorphic Modern White Marble Art Piece",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.09.50 PM.jpeg",
    category: "CONTEMPORARY SCULPTURE",
    material: "Pure White Sculptural Marble",
    desc: "A breathtaking contemporary sculpture celebrating continuous organic movement. Sculpted with infinite ribbon twists, hollow negative voids, and a silky satin polish that reflects light softly.",
    specs: [
      { label: "Stone Type", value: "Fine Crystalline White Sculptural Marble" },
      { label: "Art Style", value: "Contemporary Biomorphic Infinite Loop" },
      { label: "Height", value: "3.5 Ft to 6 Ft on Dark Plinth Base" },
      { label: "Finish", value: "Ultra-Smooth Hand-Polished Matte Satin" },
      { label: "Setting", value: "Luxury Villa Atriums, Corporate Lobbies, Modern Gardens" },
    ],
    highlights: [
      "Seamless fluid curves chiseled and polished entirely by hand",
      "Striking contrast between solid stone mass and airy interior voids",
      "Mountable on contrasting black granite or sandstone pedestals",
      "A rare statement piece uniting classical craftsmanship with ultra-modern design",
    ],
    waMsg: "Hello Dholpurstones.com, I want to inquire about the Fluid Ribbon Contemporary Marble Sculpture.",
  },
  {
    id: "scalloped-tier-fountain-sandstone-wall",
    name: "Scalloped 3-Tier Marble Cascade Fountain",
    subtitle: "Lotus Tiered Water Cascade Against Textured Sandstone Feature Wall",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.09.51 PM (1).jpeg",
    category: "FOUNTAINS & WATER ARCHITECTURE",
    material: "Pure White Marble & Sandstone",
    desc: "Elegant three-tiered marble water fountain with scalloped petal rims, ornate acanthus leaf pedestal supports, and gentle tier-to-tier overflow creating soothing acoustic water sounds.",
    specs: [
      { label: "Stone Material", value: "Select White Marble with Hand-Honed Finish" },
      { label: "Tiers", value: "3-Tier Graduated Scalloped Water Bowls" },
      { label: "Plumbing", value: "Pre-Plumbed Concealed Brass Water Tube" },
      { label: "Dimensions", value: "4.5 Ft Height x 38” Base Bowl Diameter" },
      { label: "Circulation", value: "Self-Recirculating Pump Compatible" },
    ],
    highlights: [
      "Even water sheet spillways calibrated across all scallop flutes",
      "Compact footprint fits courtyards, patio niches, and indoor wintergardens",
      "Durable marble naturally resists algae and mineral scale buildup",
      "Produces tranquil soothing water sounds that mask ambient city noise",
    ],
    waMsg: "Hello Dholpurstones.com, I am inquiring about the Scalloped 3-Tier Marble Cascade Fountain.",
  },
  {
    id: "quatrefoil-basin-tiered-marble-fountain",
    name: "Quatrefoil Basin 4-Tier Classical Marble Fountain",
    subtitle: "Stepped Scalloped Bowls in Deep Architectural Curb Pool",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.09.51 PM.jpeg",
    category: "FOUNTAINS & WATER ARCHITECTURE",
    material: "Natural White Marble",
    desc: "Monumental classical Italianate fountain featuring four graduated scalloped basins crowned with a pineapple finial, seated inside an architectural quatrefoil coping curb pool.",
    specs: [
      { label: "Stone Material", value: "High-Density Natural White Marble" },
      { label: "Configuration", value: "4-Tier Central Spire + Quatrefoil Pool Curb" },
      { label: "Pool Diameter", value: "8 Ft, 10 Ft, 12 Ft & 15 Ft Outer Basin Curb" },
      { label: "Total Height", value: "7.5 Ft to 9 Ft Centerpiece" },
      { label: "Hydraulics", value: "Central Spurt + Perimeter Arching Nozzles" },
    ],
    highlights: [
      "Classical European architectural profile hand-chiseled from pure white marble",
      "Quatrefoil coping basin provides elegant seating rim around the pool",
      "Complete modular package including tiered fountain, pool walls, and floor pavers",
      "Transforms estate roundabouts, courtyard plazas, and hotel forecourts",
    ],
    waMsg: "Hello Dholpurstones.com, please send specifications and pricing for the Quatrefoil Basin 4-Tier Classical Marble Fountain.",
  },
  {
    id: "estate-lawn-scalloped-cascade-fountain",
    name: "Imperial 4-Tier Scalloped Garden Fountain",
    subtitle: "Lawn Centerpiece Multi-Tier Waterbody with Continuous Flow",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.09.54 PM.jpeg",
    category: "FOUNTAINS & WATER ARCHITECTURE",
    material: "High-Density White Stone",
    desc: "Impressive free-standing 4-tier water feature with deeply fluted scalloped water bowls and ornate bulbous pedestal columns. Designed to stand prominently in the center of an expansive emerald lawn.",
    specs: [
      { label: "Material", value: "Calibrated Dense White Stone / Marble" },
      { label: "Tier Count", value: "4 Concentric Cascade Basins" },
      { label: "Height", value: "6.5 Ft to 8 Ft Height" },
      { label: "Flow Rate", value: "3,500 – 6,000 Litres/Hour Recirculating" },
      { label: "Maintenance", value: "Algae Resistant Smooth Honed Stone" },
    ],
    highlights: [
      "Stunning 360-degree viewing angle makes it the premier lawn centerpiece",
      "Multi-level cascading sheets create mesmerizing water reflections",
      "Precision-leveled spillway lips ensure uniform water curtain on all sides",
      "Engineered with internal channels for seamless plumbing and submersible lighting",
    ],
    waMsg: "Hello Dholpurstones.com, I am interested in the Imperial 4-Tier Scalloped Garden Fountain for our lawn.",
  },
  {
    id: "palatial-resort-tiered-water-fountain",
    name: "Palatial Multi-Tier Resort Water Fountain",
    subtitle: "Monumental Tiered Fountain with Fluted Pedestals and Circular Basin",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.09.55 PM.jpeg",
    category: "FOUNTAINS & WATER ARCHITECTURE",
    material: "Natural Marble / Hard Sandstone",
    desc: "Spectacular multi-tiered resort fountain featuring broad lotus bowls, fluted classical balusters, and a wide perimeter retention pool. Engineered for luxury heritage hotels and private palace residences.",
    specs: [
      { label: "Stone Source", value: "Select White Marble / Fine Dholpur Sandstone" },
      { label: "Dimensions", value: "8.5 Ft Height x 14 Ft Outer Retention Basin" },
      { label: "Carving Detail", value: "Deep Acanthus Foliage & Scalloped Water Channels" },
      { label: "Delivery & Setup", value: "Supplied in Numbered Modular Crates with Installation Guide" },
      { label: "Durability", value: "Built to Endure Decades of Continuous Commercial Operation" },
    ],
    highlights: [
      "Commercial-grade water cascade engineered for high footfall luxury spaces",
      "Wide basin prevents water overspray on adjacent stone walkways",
      "Hand-finished by hereditary masters with crisp architectural detailing",
      "Provides an indelible impression of timeless royal luxury",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to inquire about the Palatial Multi-Tier Resort Water Fountain.",
  },
  {
    id: "arching-jet-classical-cascade-fountain",
    name: "Royal Arching-Jet Tiered Marble Fountain",
    subtitle: "Multi-Spout Cascade with Decorative Coping Basin Rim",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.09.56 PM.jpeg",
    category: "FOUNTAINS & WATER ARCHITECTURE",
    material: "White Architectural Stone",
    desc: "Magnificent fountain pairing a multi-tier central water column with perimeter arching jet nozzles in a massive coping basin. Produces a symphony of choreographed water arcs and cascading sheets.",
    specs: [
      { label: "Stone Type", value: "High-Strength White Architectural Stone" },
      { label: "Hydraulic Features", value: "Multi-Tier Overflow + Ring of Peripheral Inward Arching Jets" },
      { label: "Diameter", value: "10 Ft to 16 Ft Outer Basin Options" },
      { label: "Lighting", value: "Pre-Routed Niches for Submersible RGB Underwater LED Lights" },
      { label: "Finish", value: "Fine Honed Velvet Touch" },
    ],
    highlights: [
      "Dynamic water choreography with both bubbling crown spout and perimeter jet streams",
      "Deep retention basin keeps water clean and allows optional aquatic flora",
      "Architectural curb edge crafted with comfortable radius profile",
      "Turnkey stone supply with precision-cut interlocking rim segments",
    ],
    waMsg: "Hello Dholpurstones.com, please share details and quote for the Royal Arching-Jet Tiered Marble Fountain.",
  },
  {
    id: "ribbed-pedestal-two-tier-fountain",
    name: "Classic 2-Tier Fluted Stone Garden Fountain",
    subtitle: "Scalloped Basin with Ribbed Column Pedestal & Integrated Basin",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.09.59 PM.jpeg",
    category: "FOUNTAINS & WATER ARCHITECTURE",
    material: "Natural White Sandstone / Marble",
    desc: "Timeless two-tier garden fountain with ribbed urn pedestal and deeply scalloped catchment bowls. Sized ideally for residential courtyard atriums, patio corners, and private garden sanctuaries.",
    specs: [
      { label: "Stone Material", value: "Natural Dense White Sandstone / Marble" },
      { label: "Height", value: "4.5 Ft Total Height" },
      { label: "Diameter", value: "32” Lower Tier Bowl" },
      { label: "Installation", value: "Freestanding Base, Plugs into Standard 220V Outlet Pump" },
      { label: "Sound Profile", value: "Gentle Babbling Brook Water Sound" },
    ],
    highlights: [
      "Compact footprint brings the luxury of water architecture to boutique gardens",
      "Delicate fluting creates beautiful chiaroscuro shadows even when dry",
      "Fast, effortless setup with no heavy excavation required",
      "Resistant to outdoor weathering, fading, and algae stains",
    ],
    waMsg: "Hello Dholpurstones.com, I am inquiring about the Classic 2-Tier Fluted Stone Garden Fountain.",
  },
  {
    id: "ceremonial-gateway-elephant-left",
    name: "Ceremonial Gateway Elephant Statue (Left-Facing)",
    subtitle: "Matched Royal Portico Guardian Elephant with Intricate Hauda & Bell Trappings",
    image: "/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.10.02 PM (1).jpeg",
    category: "HERITAGE GUARDIAN SCULPTURE",
    material: "Natural Dholpur Sandstone",
    desc: "Matched mirror-pair left-facing royal ceremonial elephant statue. Chiseled from a solid block of Dholpur sandstone with authentic floral hauda, beaded trunk ribbons, and raised salute trunk.",
    specs: [
      { label: "Stone Origin", value: "Dense Dholpur Pink/Beige Sandstone" },
      { label: "Facing Orientation", value: "Left-Facing (Matched with Right-Facing Elephant)" },
      { label: "Height Options", value: "3.5 Ft, 5 Ft, 6.5 Ft & Custom Large Scales" },
      { label: "Carving Detail", value: "Deep Chisel Relief Bells, Tassels & Carved Saddle" },
      { label: "Plinth Base", value: "Integrated Solid Sandstone Pedestal Base" },
    ],
    highlights: [
      "Specially carved as an exact mirror companion to create balanced entrance symmetry",
      "Raised trunk posture symbolizes blessing, wealth, and warm traditional hospitality",
      "Solid monolithic mass stays firmly anchored in all wind and storm conditions",
      "Carved with generational mastery at our Sikandra stone ateliers",
    ],
    waMsg: "Hello Dholpurstones.com, I am inquiring about the Ceremonial Gateway Elephant Statue (Left-Facing).",
  },
];


const items: CatalogItem[] = articles.map((a) => ({
  id: a.id,
  name: a.name,
  badge: a.category,
  meta: a.material,
  subtitle: a.subtitle,
  image: a.image,
  desc: a.desc,
  specs: a.specs,
  highlights: a.highlights,
  waMsg: a.waMsg,
}));

const useCases = [
  { icon: Landmark, title: "Gates & Entrances", desc: "Matched guardian lions, elephants and figures that give an estate a grand arrival." },
  { icon: Flower, title: "Courtyards & Lawns", desc: "Peacocks, fountains and urns that become the garden's focal point." },
  { icon: Building, title: "Temples & Mandirs", desc: "Carved mandirs, jali lamps and pillars for homes and sacred spaces." },
  { icon: Trees, title: "Gardens & Pathways", desc: "Lantern posts and lamps that light paths, patios and pool edges." },
  { icon: Hotel, title: "Hotels & Resorts", desc: "Statement sculptures and fountains for lobbies, lawns and entrances." },
  { icon: Sparkles, title: "Gifting & Interiors", desc: "Smaller carved pieces for homes, offices and corporate gifting." },
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />
      <PageHero
        eyebrow="Hand Crafted In Sikandra"
        title="Hand-Carved"
        accent="Stone Articles"
        description="Peacocks, elephants, statues, mandirs, lamps and fountains hand-carved by hereditary master artisans — made to your size and design."
        image="/stone-article-manmade/WhatsApp Image 2026-10-24 at 12.06.32 PM (2).jpeg"
        crumbs={[{ label: "Products", href: "/products" }, { label: "Stone Articles" }]}
      >
        <ContactActions cta="Articles hero" topic="a hand-carved stone article" size="lg" layout="row" className="sm:justify-start" />
      </PageHero>

      <FeatureStrip
        items={[
          { icon: Hammer, title: "100% Hand Carved", text: "By hereditary Sikandra artisans" },
          { icon: ShieldCheck, title: "Natural Stone", text: "Dholpur sandstone, no fillers" },
          { icon: Ruler, title: "Made To Order", text: "Your size, design and colour" },
          { icon: Globe, title: "Ships Worldwide", text: "Protective wooden crating" },
        ]}
      />

      <section id="articles-collection" className="section-y relative overflow-hidden bg-ivory pattern-dots">
        <div className="container-x relative">
          <SectionHeader
            eyebrow="The Collection"
            title="Sculptures & Articles"
            subtitle="Tap any piece to see details — then enquire, WhatsApp or call us. Custom designs are welcome."
          />
          <CatalogGrid items={items} ctaPrefix="Articles" />
        </div>
      </section>

      <section className="section-y relative overflow-hidden bg-forest bg-stone-grain pattern-jali">
        <div className="container-x relative">
          <SectionHeader
            tone="dark"
            eyebrow="Where They Belong"
            title="Ideas For Every Space"
            subtitle="Hand-carved stone fits homes, farm houses, temples and hotels alike."
          />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => {
              const Icon = u.icon;
              return (
                <StaggerItem key={u.title}>
                  <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition-colors hover:border-gold/50 sm:p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-forest">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-heading text-[15px] font-bold uppercase tracking-wide text-white">{u.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-white/70">{u.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section id="articles-gallery" className="section-y relative overflow-hidden bg-ivory pattern-dots">
        <div className="container-x relative">
          <SectionHeader
            eyebrow="Our Work"
            title="Hand-Carved Stone Gallery"
            subtitle="Peacocks, elephants, statues, mandirs, jali lamps and lantern posts — tap any photo to view it full size."
          />
          <PhotoGallery photos={articleGallery} />
        </div>
      </section>

      <FaqSection faqs={articleFaqs} title="Stone Article Questions" tone="white" />
      <CtaBand title="Commission Your Own Sculpture" text="Share a photo, size and location — our artisans will advise and quote." topic="a hand-carved stone article" cta="Articles bottom band" />
      <JsonLd data={[breadcrumbLd([{ name: "Products", path: "/products" }, { name: "Stone Articles", path: "/articles" }]), itemListLd("Hand-carved sandstone articles", articleSubs.map((s) => ({ name: s.name, description: s.note, image: s.image }))), faqLd(articleFaqs)]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
