import React from "react";
import type { Metadata } from "next";
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
import { wallCladdingFaqs } from "@/data/faqs";
import { wallCladdingSubs, wallCladdingGallery } from "@/data/catalog";
import { breadcrumbLd, itemListLd, faqLd } from "@/lib/schema";
import {
  LuLayers as Layers,
  LuMountain as Mountain,
  LuRuler as Ruler,
  LuShieldCheck as ShieldCheck,
  LuAward as Award,
  LuSparkles as Sparkles,
  LuLayoutGrid as LayoutGrid,
  LuHammer as Hammer,
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Natural Stone Wall Cladding – Dholpur Sandstone Elevations & Facade Panels",
  description:
    "Direct mine owner and manufacturer of natural stone wall cladding: Dholpur beige rockface split brick, precision CNC fluted panels, stepped ledgestone strips, dual-tone stone mosaics, and calibrated honed tiles.",
  alternates: {
    canonical: "/wall-cladding",
  },
  openGraph: {
    title: "Natural Stone Wall Cladding & Architectural Elevations | Dholpurstones.com",
    description:
      "Mine-direct natural sandstone wall cladding for exterior villa elevations, compound walls, luxury feature walls and entrance foyers.",
    url: "/wall-cladding",
    siteName: "Dholpurstones.com",
    images: [
      {
        url: "/wall-cladding/dholpur-beige-rockface-brick.jpeg",
        width: 1200,
        height: 630,
        alt: "Dholpur natural stone wall cladding",
      },
    ],
  },
};

/* ─── Wall Cladding Products Data (Single Image per Style) ────────────────── */
const wallCladdingList = [
  {
    id: "dholpur-beige-rockface",
    name: "Dholpur Beige Rockface Brick Cladding",
    categoryLabel: "QUARRY CHISELED SPLIT BRICK",
    provenance: "Dholpur Sandstone Quarry Basin",
    image: "/wall-cladding/dholpur-beige-rockface-brick.jpeg",
    color: "Buff Cream & Warm Earthy Sandstone",
    shortDesc:
      "Hand-chiseled split rockface bricks with beveled margins. The gold-standard natural stone cladding for luxury villa elevations, boundary walls, and pillars.",
    longDesc:
      "Dholpur Beige Rockface Brick Cladding is crafted by traditional artisans chisel-splitting dense buff-cream sandstone blocks. Featuring a rugged, protruding natural relief face with calibrated smooth edges, each brick casts dramatic shadow lines under natural daylight. Highly durable and immune to efflorescence, rain leaching, and UV sun-fading, making it the premier choice for exterior front elevations, boundary compounds, and estate gateway pillars.",
    specs: [
      { label: "Stone Type", value: "Siliceous Arenaceous Sandstone" },
      { label: "Face Texture", value: "Hand-Chiseled Rockface / Quarry Split with Sawn Edges" },
      { label: "Compressive Strength", value: "94.0 MPa (Dry) / 86.5 MPa (Wet)" },
      { label: "Standard Sizes", value: "300x100mm, 300x150mm, 400x150mm, 600x150mm, 600x200mm" },
      { label: "Thickness Range", value: "18mm – 30mm Calibrated Back" },
      { label: "Water Absorption", value: "< 1.20% by weight" },
      { label: "Recommended Uses", value: "Exterior Facades, Compound Walls, Gate Pillars, Retaining Walls" },
    ],
    highlights: [
      "Quarry-direct certified Dholpur beige sandstone with timeless elegance",
      "Protruding rock-face texture generates rich architectural shadows",
      "Calibrated sawn backs for rapid, secure adhesive fixing",
      "Non-fading mineral composition built to outlast masonry mortars",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Dholpur Beige Rockface Brick Cladding for my project.",
  },
  {
    id: "fluted-cnc-panels",
    name: "CNC Grooved & Fluted Sandstone Panels",
    categoryLabel: "PRECISION ARCHITECTURAL FLUTING",
    provenance: "Sikandra Atelier & Dholpur CNC Unit",
    image: "/wall-cladding/fluted-cnc-sandstone-panel.jpeg",
    color: "Golden Teakwood & Buff Sandstone",
    shortDesc:
      "Precision multi-axis CNC machined linear flutes, stepped chamfers, and geometric grid reliefs for modern luxury interior feature walls and exterior facade accents.",
    longDesc:
      "Our CNC Fluted & Grooved Sandstone Panels represent the pinnacle of modern stonework engineering. Carved with multi-axis diamond cutters on dense golden teakwood and Dholpur beige sandstone slabs, these panels introduce rhythmic vertical line work and geometric shadows. Ideal for double-height foyer accent walls, luxury living room TV backdrops, elevator lobby portals, and high-end exterior architectural elevation bands.",
    specs: [
      { label: "Stone Type", value: "Fine Grain Siliceous Quartz Sandstone" },
      { label: "Machining", value: "Multi-Axis CNC Diamond Grooved & Profile Milled" },
      { label: "Pattern Profile", value: "Linear Flutes, Stepped Grid, Wave & Reeded Chamfers" },
      { label: "Standard Sizes", value: "600x300mm, 600x600mm, 1200x600mm, Custom CAD Slabs" },
      { label: "Thickness Range", value: "20mm, 25mm, 30mm, 40mm Deep Relief" },
      { label: "Surface Finish", value: "Honed Sawn Grooves with Matt Satin Face" },
      { label: "Recommended Uses", value: "Foyer Walls, TV Unit Backdrops, Villa Elevation Bands, Luxury Porticos" },
    ],
    highlights: [
      "Precision CNC tolerance of +/- 0.5mm for seamless alignment",
      "Golden woodgrain veins accentuate geometric fluting grooves",
      "Custom groove widths, depths, and reeded profiles available to order",
      "Suitable for both dramatic interior feature walls and exterior facades",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about CNC Fluted & Grooved Sandstone Panels for a luxury feature wall.",
  },
  {
    id: "dual-tone-mosaic",
    name: "Dual-Tone Checkered & Mosaic Stone Cladding",
    categoryLabel: "MESH-BACKED MODULAR MOSAIC",
    provenance: "Dholpur & Agra Master Workshops",
    image: "/wall-cladding/dual-tone-checkered-mosaic.jpeg",
    color: "Agra Red & Dholpur Beige Contrast",
    shortDesc:
      "Precision-cut natural sandstone mosaic tiles combining Agra Red and Dholpur Beige in alternating checkered and modular 3D relief patterns on heavy-duty mesh.",
    longDesc:
      "Dual-Tone Checkered & Mosaic Stone Cladding merges two royal stones into a cohesive artistic surface: iconic Agra Red and warm Dholpur Beige. Mounted on reinforced fiberglass mesh backing for rapid installation, these modular interlocking sheets offer high visual contrast and dimensional relief. Popular for courtyard accent walls, pool splashbacks, spa features, stairwell risers, and garden perimeter highlights.",
    specs: [
      { label: "Stone Type", value: "Agra Red & Dholpur Beige Sandstone Hybrid" },
      { label: "Mounting", value: "High-Tensile Fiberglass Mesh Backing Sheet" },
      { label: "Sheet Dimensions", value: "300x300mm (12x12 in) Interlocking Grid" },
      { label: "Chip Sizes", value: "50x50mm, 75x75mm, 100x100mm Modular Tesserae" },
      { label: "Thickness", value: "15mm – 22mm Variable 3D Relief" },
      { label: "Surface Texture", value: "Natural Cleft Split Face & Antique Honed" },
      { label: "Recommended Uses", value: "Courtyard Feature Walls, Pool Water Features, Column Wraps, Spa Walls" },
    ],
    highlights: [
      "Pre-assembled on industrial mesh for quick and effortless tiling",
      "Striking natural contrast between terracotta red and warm buff cream",
      "Immune to algae, chlorine, pool water splashes, and thermal shock",
      "3D depth variation adds tactile dimension to flat masonry",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Dual-Tone Checkered & Mosaic Stone Cladding sheets.",
  },
  {
    id: "dholpur-white-ashlar",
    name: "Dholpur White & Mint Ashlar Cladding",
    categoryLabel: "PALATIAL MINT WHITE STONE",
    provenance: "Dholpur White Seam Quarry Beds",
    image: "/wall-cladding/dholpur-white-mint-ashlar.jpeg",
    color: "Pristine Chalk White & Subtle Mint Green Undertones",
    shortDesc:
      "Calibrated ashlar cladding blocks with soft natural split faces and sawn margins, delivering luminous white palace-grade facades for contemporary mansions.",
    longDesc:
      "Quarried from the select white-seam deposits of Dholpur, this white mint ashlar stone features an exceptionally bright, reflective face with subtle cream and mint undertones. Each ashlar block is sawn square on all four sides with a gentle natural cleft or rock-face front. When installed in running bond, it creates a stately, neoclassical aesthetic that reflects radiant sunlight and keeps building envelopes remarkably cool.",
    specs: [
      { label: "Stone Type", value: "Fine Silica White Quartzitic Sandstone" },
      { label: "Color Grading", value: "95%+ White / Off-White Uniform Base" },
      { label: "Finish", value: "Natural Split Rockface with Clean Sawn Perimeter Margins" },
      { label: "Standard Sizes", value: "300x150mm, 450x150mm, 600x200mm, 600x300mm" },
      { label: "Thickness Range", value: "20mm, 25mm, 30mm Calibrated" },
      { label: "Solar Reflectance", value: "High SRI (Keeps structural walls cooler)" },
      { label: "Recommended Uses", value: "Neoclassical Villa Elevations, Resort Facades, Boundary Portals" },
    ],
    highlights: [
      "Luminous white hue provides unparalleled palatial grandeur",
      "High solar reflectance reduces interior heat load naturally",
      "Clean sawn edges allow paper-thin grout lines or dry-stacked looks",
      "High density prevents soot accumulation and weathering marks",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Dholpur White & Mint Ashlar Cladding.",
  },
  {
    id: "teakwood-stepped-ledgestone",
    name: "Teakwood Stepped Strip Ledgestone Cladding",
    categoryLabel: "RUSTIC Z-PANEL LEDGESTONE",
    provenance: "Dholpur Teakwood Basin",
    image: "/wall-cladding/teakwood-stepped-ledgestone.jpeg",
    color: "Warm Golden Teak & Amber Woodgrain",
    shortDesc:
      "Interlocking Z-profile stepped ledgestone strips with varying depths and projections, showcasing natural woodgrain banding and deep rustic shadow lines.",
    longDesc:
      "Teakwood Stepped Strip Ledgestone brings the warmth and organic motion of natural timber into everlasting natural stone. Cut into slender horizontal strips of staggered thicknesses and lengths, the stones interlock seamlessly in a staggered Z-joint format that completely conceals vertical grout seams. Widely specified for resort exterior walls, luxury fireplace surrounds, terrace waterfalls, and architectural boundary pillars.",
    specs: [
      { label: "Stone Type", value: "Natural Teakwood Sandstone" },
      { label: "Format", value: "Interlocking Z-Shaped Modular Panel / Loose Strips" },
      { label: "Strip Thickness", value: "15mm to 35mm Stepped Multi-Tier Depth" },
      { label: "Panel Size", value: "600x150mm, 600x200mm Modular Interlocking" },
      { label: "Grain Profile", value: "Natural Flowing Woodgrain Bands (No Artificial Pigment)" },
      { label: "Compressive Strength", value: "90.0 MPa (Dry)" },
      { label: "Recommended Uses", value: "Resort Walls, Terrace Cascades, Fireplaces, Boundary Features" },
    ],
    highlights: [
      "Interlocking Z-shape hides panel joints for a seamless dry-stack appearance",
      "Varying depths create dramatic day-to-night light and shadow dynamics",
      "Natural wood-like banding will never rot, warp, or require polishing",
      "Ideal for both modern organic interiors and robust exterior facades",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Teakwood Stepped Strip Ledgestone Cladding.",
  },
  {
    id: "calibrated-honed-tiles",
    name: "Calibrated Honed Sandstone Wall Tiles",
    categoryLabel: "SLEEK MINIMALIST CLADDING",
    provenance: "Dholpur Automated Sawing & Honing Line",
    image: "/wall-cladding/honed-calibrated-wall-tiles.jpeg",
    color: "Soft Dholpur Pink & Cashmere Beige",
    shortDesc:
      "Ultra-smooth sawn and diamond-honed calibrated wall tiles with chamfered margins. Delivers a clean, contemporary architectural facade with zero surface roughness.",
    longDesc:
      "For contemporary architectural projects demanding clean lines, velvety tactile surfaces, and geometric precision, our Calibrated Honed Sandstone Wall Tiles offer perfection. Processed through Italian multi-head calibrators and water-cooled hone polishers, each tile possesses exact thickness tolerances. Perfect for modern commercial headquarters, hospital facades, university auditoriums, and sleek minimalist residential villas.",
    specs: [
      { label: "Stone Type", value: "Calibrated Dholpur Pink & Beige Sandstone" },
      { label: "Surface Finish", value: "Fine Sawn & Diamond Honed (Matt Satin, Smooth to Touch)" },
      { label: "Tolerance", value: "+/- 1.0mm Calibrated Thickness & Square Cut" },
      { label: "Standard Sizes", value: "600x300mm, 600x600mm, 900x600mm, 1200x600mm Big Format" },
      { label: "Thickness Range", value: "18mm, 20mm, 25mm, 30mm" },
      { label: "Water Absorption", value: "< 1.18% by weight" },
      { label: "Recommended Uses", value: "Commercial Facades, Minimalist Villa Walls, Interior Lobbies, Cladding Bands" },
    ],
    highlights: [
      "Precision calibration enables crisp, ultra-narrow joint installations",
      "Velvety honed finish reflects light smoothly without harsh glare",
      "High stain resistance and simple maintenance for high-traffic buildings",
      "Custom groove details, shadow beadings, and bullnose trims available",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Calibrated Honed Sandstone Wall Tiles.",
  },
  {
    id: "linear-grooved-facade",
    name: "Linear Grooved Architectural Elevation Panels",
    categoryLabel: "HORIZONTAL BANDING & PROFILES",
    provenance: "Dholpur Precision Sawing Line",
    image: "/wall-cladding/linear-grooved-facade-cladding.jpeg",
    color: "Warm Sandstone with Architectural Shadow Grooves",
    shortDesc:
      "Precision-sawn sandstone panels with continuous horizontal relief grooves and stepped key accents, creating strong architectural horizontal lines for modern villas and commercial facades.",
    longDesc:
      "Our Linear Grooved Facade Cladding brings defined geometric structure and rhythmic depth to exterior elevation designs. Cut from dense Dholpur sandstone with specialized multi-blade gang saws, each panel features crisp horizontal rebate channels and stepped alignment keys. These intentional shadow lines visually elongate building facades, break up monolithic concrete expanses, and deliver a clean, international architectural look.",
    specs: [
      { label: "Stone Type", value: "Fine-Grained Siliceous Sandstone" },
      { label: "Groove Profile", value: "12mm x 10mm Precision Rectangular Shadow Grooves" },
      { label: "Thickness Range", value: "25mm to 35mm Heavy Calibrated" },
      { label: "Standard Sizes", value: "600x300mm, 900x300mm, 1200x300mm" },
      { label: "Installation", value: "Dry Cladding (Clamp Supported) or Wet Adhesive Fix" },
      { label: "Water Absorption", value: "< 1.15% by weight" },
      { label: "Recommended Uses", value: "Modern Villa Elevations, Commercial Headquarters, Stepped Portals" },
    ],
    highlights: [
      "Continuous horizontal grooves visually elongate architectural building widths",
      "Precision-calibrated thickness ensures uniform groove alignment across seams",
      "Withstands high wind-load pressures and heavy monsoon storms",
      "Custom groove spacing, depths, and multi-line patterns engineered to order",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Linear Grooved Architectural Elevation Panels.",
  },
  {
    id: "fine-strip-rockface",
    name: "Fine Strip Natural Rockface Cladding",
    categoryLabel: "SLENDER SPLIT-FACE LEDGESTONE",
    provenance: "Dholpur Cleft Seams",
    image: "/wall-cladding/fine-strip-rockface-cladding.jpeg",
    color: "Earthy Beige, Buff Cream & Subtle Mineral Flecks",
    shortDesc:
      "Slender horizontally aligned natural split rockface sandstone strips with undulating cleft textures, creating a dramatic tactile stone wall for luxury entrance lobbies, boundary elevations, and resort facades.",
    longDesc:
      "Fine Strip Natural Rockface Cladding uses slender, hand-split sandstone strips laid in tight linear courses to create an intensely textured, rustic stone surface. Every piece is split along natural bedding planes by our skilled masons, highlighting the organic geological character of Rajasthan stone. Perfect for creating dramatic light-and-shadow accent walls, luxury estate boundary pillars, foyer backdrops, and courtyard features.",
    specs: [
      { label: "Stone Type", value: "Natural Siliceous Sandstone" },
      { label: "Strip Heights", value: "40mm, 50mm, 60mm Random or Uniform Courses" },
      { label: "Lengths", value: "150mm to 450mm Random Lengths" },
      { label: "Thickness", value: "15mm – 25mm Calibrated Sawn Back" },
      { label: "Finish", value: "Natural Split Rock-Cleft Face with Sawn Margins" },
      { label: "Compressive Strength", value: "92.5 MPa" },
      { label: "Recommended Uses", value: "Feature Walls, Entrance Lobbies, Fireplace Surrounds, Boundary Pillars" },
    ],
    highlights: [
      "Dense linear texture creates striking play of light and shadow under accent illumination",
      "Natural non-porous face resists algae, fungus, and weathering",
      "Suitable for both seamless dry-stacked jointing and mortared installations",
      "Available in calibrated back-thickness for rapid and true vertical adhesion",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Fine Strip Natural Rockface Ledgestone Cladding.",
  },
  {
    id: "cnc-textured-grid-panel",
    name: "CNC Textured Geometric Relief Wall Panels",
    categoryLabel: "3D RELIEF CNC TEXTURING",
    provenance: "Dholpur Multi-Axis CNC Atelier",
    image: "/wall-cladding/cnc-textured-grid-panel.jpeg",
    color: "Natural Buff Beige & Teakwood Sandstone",
    shortDesc:
      "High-precision diamond-milled geometric relief panels with tactile basketweave, faceted pyramid, or textured grid motifs that transform flat walls into sculptural stone art.",
    longDesc:
      "CNC Textured Geometric Relief Panels blend contemporary computational design with centuries of stonecraft. Using high-precision diamond milling heads, intricate multi-dimensional patterns—such as diagonal basketweave, faceted micro-pyramids, and textured wave grids—are sculpted into solid Dholpur sandstone slabs. Designed for luxury penthouses, boutique hotel lobbies, high-end commercial boardrooms, and statement entrance porticos.",
    specs: [
      { label: "Stone Type", value: "Premium Density Dholpur Sandstone" },
      { label: "Milling Technology", value: "Computer-Controlled 4-Axis Diamond Profiling" },
      { label: "Relief Depth", value: "5mm to 18mm 3D Dimensional Depth" },
      { label: "Panel Sizes", value: "600x600mm, 1200x600mm, Custom Parametric Modules" },
      { label: "Thickness", value: "30mm to 45mm Structural Panel" },
      { label: "Surface Texture", value: "Satin Honed Recesses with Natural Stone Peaks" },
      { label: "Recommended Uses", value: "Signature Feature Walls, Living Room TV Portals, Corporate Reception Lobbies" },
    ],
    highlights: [
      "Transforms structural walls into sculptural three-dimensional architectural art",
      "Exact CNC edge tolerances allow seamless continuation of complex patterns",
      "Available in custom architectural patterns and bespoke designer CAD drawings",
      "Natural sandstone provides thermal insulation and acoustic sound dampening",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about CNC Textured Geometric Relief Wall Panels.",
  },
  {
    id: "dual-tone-split-brick",
    name: "Dual-Tone Natural Split Brick Cladding",
    categoryLabel: "CONTRAST ELEVATION BRICKS",
    provenance: "Dholpur & Agra Red Quarry Beds",
    image: "/wall-cladding/dual-tone-split-brick.jpeg",
    color: "Agra Terracotta Red & Dholpur Buff Beige Contrast",
    shortDesc:
      "Hand-split natural sandstone wall bricks combining deep Agra Red and soft Dholpur Beige courses, delivering a vibrant heritage or contemporary multi-color stone facade.",
    longDesc:
      "Dual-Tone Natural Split Brick Cladding celebrates the legendary architectural dialogue between iconic Mughal red sandstone and Rajasthani buff cream sandstone. Prepared in calibrated brick dimensions with protruding chiseled faces, these bricks are laid in alternating or banded courses. The result is a vibrant, organic elevation that pays homage to royal heritage architecture while adding warmth and gravitas to modern residential bungalows.",
    specs: [
      { label: "Stone Type", value: "100% Natural Agra Red & Dholpur Beige Sandstone" },
      { label: "Format", value: "Calibrated Individual Split-Face Walling Bricks" },
      { label: "Standard Sizes", value: "230x75mm, 300x100mm, 300x150mm" },
      { label: "Thickness", value: "20mm to 30mm Calibrated Sawn Back" },
      { label: "Color Fastness", value: "100% Natural Minerals — Zero Artificial Pigments" },
      { label: "Durability", value: "Frost Resistant, Acid Resistant, UV Stable" },
      { label: "Recommended Uses", value: "Bungalow Facades, Boundary Compounds, Patio Pillars, Accent Columns" },
    ],
    highlights: [
      "Distinctive color contrast creates a dignified, high-status architectural elevation",
      "Natural rockface clefts capture evening garden and landscape lighting beautifully",
      "Permanent earth-mineral hues never fade or discolor under sun exposure",
      "Sawn backs guarantee fast, secure bonding using standard stone adhesives",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Dual-Tone Natural Split Brick Cladding.",
  },
  {
    id: "hand-chiseled-elevation-facade",
    name: "Hand-Chiseled Heritage Elevation Facade Stone",
    categoryLabel: "ARTISAN CHISELED STONE COURSE",
    provenance: "Dholpur Traditional Stone Carver Guild",
    image: "/wall-cladding/hand-chiseled-elevation-facade.jpeg",
    color: "Regal Dholpur Beige & Cashmere Sandstone",
    shortDesc:
      "Traditional master-chiseled sandstone block facade with defined perimeter border margins and hand-punched textured faces, ideal for palace-inspired residences and estate boundary walls.",
    longDesc:
      "Hand-Chiseled Heritage Elevation Stone represents the authentic masonry tradition of Rajasthan. Each block is hand-dressed with a chisel and mallet, creating a finely drafted border margin around a raised, pointed-face center. This classical ashlar dressing style has graced India's most celebrated palaces, forts, and monumental temples, providing structural elegance that stands undiminished across centuries.",
    specs: [
      { label: "Stone Type", value: "Dense Cream Dholpur Siliceous Sandstone" },
      { label: "Workmanship", value: "Hand-Chiseled Center with Sawn Drafted Margins" },
      { label: "Compressive Strength", value: "95.0 MPa (Dry)" },
      { label: "Standard Sizes", value: "300x200mm, 450x225mm, 600x300mm, Custom Courses" },
      { label: "Thickness Range", value: "25mm, 30mm, 40mm, 50mm Structural Ashlar" },
      { label: "Weatherability", value: "Immune to Thermal Shock and Monsoon Salt Leaching" },
      { label: "Recommended Uses", value: "Heritage Bungalows, Temple Portals, Resort Compounds, Retaining Walls" },
    ],
    highlights: [
      "Drafted margin detailing provides crisp structural definition to each individual block",
      "Traditional hand-dressing creates authentic historic palace facade charm",
      "Thick natural stone blocks offer exceptional thermal and acoustic mass",
      "Can be dry-stacked or pointed with lime/cement mortars",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Hand-Chiseled Heritage Elevation Facade Stone.",
  },
  {
    id: "multicolor-strip-cladding",
    name: "Multicolor Rustic Sandstone Strip Cladding",
    categoryLabel: "ORGANIC RUSTIC STRIP LEDGESTONE",
    provenance: "Rajasthan Rainbow & Desert Mineral Bands",
    image: "/wall-cladding/multicolor-strip-cladding.jpeg",
    color: "Rainbow Veined, Desert Gold & Terracotta Earth",
    shortDesc:
      "Richly varied natural strip stone cladding featuring organic mineral veining, terracotta undertones, and rustic rock-face projections for outdoor water features, landscape walls, and rustic elevations.",
    longDesc:
      "Multicolor Rustic Sandstone Strip Cladding brings the raw, untamed beauty of desert mineral formations into luxury architecture. Featuring natural bands of ochre, terracotta, chocolate, and golden buff, each strip possesses unique natural veining that is completely one-of-a-kind. Ideal for exterior landscape walls, garden waterfalls, terrace pavilions, swimming pool surrounds, and cozy rustic feature fireplaces.",
    specs: [
      { label: "Stone Type", value: "Natural Veined Rajasthan Sandstone" },
      { label: "Format", value: "Modular Z-Interlocking or Loose Linear Strips" },
      { label: "Strip Dimensions", value: "50mm to 100mm Mixed Height x Random Lengths" },
      { label: "Thickness Range", value: "18mm – 30mm Variable Stepped Relief" },
      { label: "Face Finish", value: "Natural Cleft Rockface with Sawn Edges" },
      { label: "Porosity", value: "Extremely Low (< 1.25%)" },
      { label: "Recommended Uses", value: "Garden Waterfalls, Landscape Retaining Walls, Pool Decks, Fireplaces" },
    ],
    highlights: [
      "Spectacular organic color spectrum ensures no two square feet look identical",
      "Natural cleft surface provides high traction and anti-slip water-splash safety",
      "Withstands direct contact with outdoor swimming pool and fountain water",
      "Seamless interlocking or running bond installation hides joint lines",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Multicolor Rustic Sandstone Strip Cladding.",
  },
  {
    id: "natural-split-strip-tiles",
    name: "Calibrated Natural Split Sandstone Strip Tiles",
    categoryLabel: "CALIBRATED SPLIT STRIP TILES",
    provenance: "Dholpur Thin-Bed Calibration Works",
    image: "/wall-cladding/natural-split-strip-tiles.jpeg",
    color: "Uniform Dholpur Beige & Soft Buff Gold",
    shortDesc:
      "Precision-calibrated natural split sandstone strip tiles designed for fast thin-bed adhesive installation on residential exterior walls, balconies, and boundary facades.",
    longDesc:
      "For projects requiring the rugged organic appeal of natural split stone combined with the installation speed and weight efficiency of modern tiling, our Calibrated Natural Split Sandstone Strip Tiles are ideal. Uniformly sliced to a calibrated 15mm-20mm thickness, these strip tiles can be fixed using standard polymer tile adhesives directly onto plastered brick or RCC walls without requiring heavy steel anchors or angle supports.",
    specs: [
      { label: "Stone Type", value: "Dense Buff Beige Dholpur Sandstone" },
      { label: "Format", value: "Thin-Bed Sawn-Edge Natural Split Strips" },
      { label: "Standard Sizes", value: "300x50mm, 300x75mm, 600x75mm, 600x100mm" },
      { label: "Thickness", value: "15mm – 20mm Calibrated Thin-Bed" },
      { label: "Surface", value: "Natural Cleavage Split Face with Diamond Sawn Edges" },
      { label: "Weight", value: "Lightweight (~40 kg/sqm) suitable for high elevations" },
      { label: "Recommended Uses", value: "High-Rise Balconies, Residential Facades, Boundary Compounds, Stairwells" },
    ],
    highlights: [
      "Lightweight calibrated thickness eliminates the need for expensive structural anchor brackets",
      "Sawn edges ensure razor-sharp horizontal joint lines",
      "Naturally resistant to UV fading, efflorescence, and harsh monsoon exposure",
      "Fast, clean installation using standard stone tile adhesives",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Calibrated Natural Split Sandstone Strip Tiles.",
  },
];

const items: CatalogItem[] = wallCladdingList.map((s) => ({
  id: s.id,
  name: s.name,
  badge: s.categoryLabel,
  meta: s.provenance,
  subtitle: s.color,
  image: s.image,
  images: [s.image],
  desc: s.longDesc,
  specs: s.specs,
  highlights: s.highlights,
  waMsg: s.waMsg,
}));

const advantages = [
  {
    icon: Mountain,
    title: "Direct Quarry Mine Ownership",
    desc: "Mined and processed directly at our Dholpur facilities, ensuring color consistency, block selection, and no middleman markup.",
  },
  {
    icon: LayoutGrid,
    title: "Precision CNC & Calibration",
    desc: "Multi-axis CNC milling, diamond gangsaw slicing, and automated calibrators ensure exact tolerances for seamless architectural fit.",
  },
  {
    icon: ShieldCheck,
    title: "All-Weather Durability",
    desc: "Naturally weather-proof, UV-resistant, and non-fading — immune to monsoon efflorescence, extreme summer heat, and winter frost.",
  },
];

export default function WallCladdingPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />

      <PageHero
        eyebrow="Architectural Facades & Elevations"
        title="Natural Stone"
        accent="Wall Cladding"
        description="Handcrafted rockface split bricks, precision CNC fluted panels, stepped ledgestone strips and mesh-backed mosaics — quarried and manufactured from our own mines in Dholpur, Rajasthan."
        image="/wall-cladding/dholpur-beige-rockface-brick.jpeg"
        crumbs={[{ label: "Products", href: "/products" }, { label: "Wall Cladding" }]}
      >
        <ContactActions
          cta="Wall Cladding hero"
          topic="Natural stone wall cladding"
          size="lg"
          layout="row"
          className="sm:justify-start"
        />
      </PageHero>

      <FeatureStrip
        items={[
          { icon: Layers, title: "13 Cladding Styles", text: "Rockface, fluted, mosaic & strips" },
          { icon: ShieldCheck, title: "100% Natural Stone", text: "Dense, durable & non-fading" },
          { icon: Mountain, title: "Mine Direct", text: "Quarried at source in Dholpur" },
          { icon: Ruler, title: "Custom CNC Sizing", text: "Calibrated 15mm – 40mm thickness" },
        ]}
      />

      {/* Cladding Collections Grid (Single Image per Style) */}
      <section id="varieties" className="section-y relative overflow-hidden bg-ivory pattern-dots">
        <div className="container-x relative">
          <SectionHeader
            eyebrow="Mine-To-Facade Inventory"
            title="Our Wall Cladding Styles"
            subtitle="Explore our signature natural stone wall cladding styles — tap any style for detailed technical specifications or enquire directly on WhatsApp for samples and factory pricing."
          />
          <CatalogGrid items={items} ctaPrefix="Wall Cladding" cols="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </section>

      {/* Architectural Advantage Band */}
      <section className="section-y relative overflow-hidden bg-forest bg-stone-grain pattern-jali">
        <div className="container-x relative">
          <SectionHeader
            tone="dark"
            eyebrow="The Manufacturing Advantage"
            title="Quarrying, CNC Milling & Export — One Roof"
            subtitle="We manage extraction, gangsaw calibration, surface chisel work, CNC profiling and export crating end-to-end."
          />
          <Stagger className="grid gap-4 md:grid-cols-3">
            {advantages.map((a) => {
              const Icon = a.icon;
              return (
                <StaggerItem key={a.title}>
                  <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition-colors hover:border-gold/50 sm:p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-forest">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-heading text-[15px] font-bold uppercase tracking-wide text-white">
                      {a.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-white/70">{a.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Natural Stone Wall Cladding Photo Gallery */}
      <section id="cladding-gallery" className="section-y relative overflow-hidden bg-ivory pattern-dots">
        <div className="container-x relative">
          <SectionHeader
            eyebrow="Our Installations & Textures"
            title="Natural Stone Wall Cladding Gallery"
            subtitle="Rockface split bricks, precision CNC fluted panels, stepped ledgestone strips and mosaic sheets — tap any photo to view it full size."
          />
          <PhotoGallery photos={wallCladdingGallery} />
        </div>
      </section>

      <FaqSection faqs={wallCladdingFaqs} title="Wall Cladding Questions" tone="white" />

      <CtaBand
        title="Specify Natural Stone Wall Cladding For Your Project"
        text="Tell us your elevation dimensions, required texture and estimated square feet — we quote directly from our Dholpur manufacturing unit."
        topic="Natural stone wall cladding"
        cta="Wall Cladding bottom band"
      />

      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Products", path: "/products" },
            { name: "Wall Cladding", path: "/wall-cladding" },
          ]),
          itemListLd(
            "Natural stone wall cladding collections",
            wallCladdingSubs.map((s) => ({
              name: `${s.name} Wall Cladding`,
              description: s.note,
              image: s.image,
              path: s.href,
            }))
          ),
          faqLd(wallCladdingFaqs),
        ]}
      />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
