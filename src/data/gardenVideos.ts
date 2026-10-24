export interface GardenVideo {
  id: string;
  title: string;
  category: "all" | "fountain" | "waterfall" | "illuminated" | "sculpture";
  categoryLabel: string;
  stoneType: string;
  videoSrc: string;
  posterSrc: string;
  duration: string;
  orientation: "portrait" | "landscape";
  aspectRatio: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  waMsg: string;
}

export const gardenVideos: GardenVideo[] = [
  {
    id: "pegasus-horse-estate-fountain",
    title: "Grand Pegasus Winged Horse Estate Fountain",
    category: "fountain",
    categoryLabel: "Monumental Fountains",
    stoneType: "Carved White Marble & Sandstone",
    videoSrc: "/stone-video/WhatsApp Video 2026-10-24 at 12.09.52 PM.mp4",
    posterSrc: "/stone-video/posters/poster_02.jpg",
    duration: "0:28",
    orientation: "portrait",
    aspectRatio: "9/16",
    description: "Bespoke palatial centerpiece featuring hand-sculpted winged stallions with arched water spouts, central multi-tier finial, and a massive custom curved stone pool surround.",
    highlights: [
      "Hand-chiseled Shilpa Shastra anatomical stallion reliefs",
      "Concentric multi-tiered water jets & spillway cascades",
      "Turnkey plumbing conduits for poolside or courtyard placement"
    ],
    specs: [
      { label: "Material", value: "Pristine White Marble & Dense Sandstone" },
      { label: "Crafting", value: "100% Hand-Sculpted by Master Ateliers" },
      { label: "Ideal For", value: "Estate Courtyards, Farm House Lawns, Resort Pools" },
      { label: "Plumbing", value: "Pre-channeled for Heavy-Duty Submersible Pumps" }
    ],
    waMsg: "Hello Dholpurstones.com, I watched the live video of the Grand Pegasus Winged Horse Estate Fountain and would like dimensions, pricing, and installation details."
  },
  {
    id: "panoramic-fluted-sandstone-waterfall",
    title: "Panoramic Fluted Sandstone Dual-Spout Waterfall",
    category: "waterfall",
    categoryLabel: "Waterfall Walls",
    stoneType: "Natural Teakwood Sandstone",
    videoSrc: "/stone-video/WhatsApp Video 2026-10-24 at 12.10.00 PM (2).mp4",
    posterSrc: "/stone-video/posters/poster_09.jpg",
    duration: "0:11",
    orientation: "landscape",
    aspectRatio: "16/9",
    description: "Expansive outdoor architectural sandstone wall feature with vertical fluted stone slats, twin cantilevered water spillways, and integrated warm night illumination.",
    highlights: [
      "Panoramic estate proportion with vertical ribbed fluting",
      "Dual stainless-lined smooth water spillway chutes",
      "Warm ambient perimeter LED lighting with fluted catch basin"
    ],
    specs: [
      { label: "Stone", value: "A-Grade Uniform Fine Teakwood Sandstone" },
      { label: "Lighting", value: "Embedded IP68 Warm 3000K LED Perimeter Strip" },
      { label: "Flow Type", value: "Laminar Sheet Cascades into Ribbed Basin" },
      { label: "Installation", value: "Freestanding or Integrated Boundary Wall" }
    ],
    waMsg: "Hello Dholpurstones.com, please share pricing and custom dimensions for the Panoramic Fluted Sandstone Dual-Spout Waterfall seen in your live video."
  },
  {
    id: "sandstone-brick-waterfall-wall",
    title: "Triple-Chute Sandstone Brick Waterfall Wall",
    category: "waterfall",
    categoryLabel: "Waterfall Walls",
    stoneType: "Natural Dholpur Sandstone",
    videoSrc: "/stone-video/WhatsApp Video 2026-10-24 at 12.09.54 PM.mp4",
    posterSrc: "/stone-video/posters/poster_03.jpg",
    duration: "0:19",
    orientation: "portrait",
    aspectRatio: "9/16",
    description: "Artisanal sandstone masonry back panel with three staggered spillway chutes creating crystal-clear water curtains falling into a matching stone basin.",
    highlights: [
      "Natural warm sandstone brick-relief texture",
      "3 staggered cantilever spillway chutes",
      "Acoustic splash-free water circulation system"
    ],
    specs: [
      { label: "Stone Finish", value: "Honed Face with Beveled Brick Ashlar Grooves" },
      { label: "Water Veil", value: "3 Staggered Precision Sheets" },
      { label: "Basin", value: "Self-Contained Watertight Stone Reservoir" },
      { label: "Origin", value: "Direct from Dholpur Quarries & Sikandra Workshop" }
    ],
    waMsg: "Hello Dholpurstones.com, I want to inquire about the Triple-Chute Sandstone Brick Waterfall Wall shown in your live video."
  },
  {
    id: "backlit-fluted-sandstone-waterfall",
    title: "Backlit Fluted Sandstone Acoustic Waterfall",
    category: "illuminated",
    categoryLabel: "Illuminated Water Features",
    stoneType: "Dholpur Beige Sandstone",
    videoSrc: "/stone-video/WhatsApp Video 2026-10-24 at 12.10.00 PM (1).mp4",
    posterSrc: "/stone-video/posters/poster_08.jpg",
    duration: "0:11",
    orientation: "portrait",
    aspectRatio: "9/16",
    description: "Vertical grooved sandstone waterfall panel framed with concealed warm golden perimeter LED glow, creating a shimmering evening ambiance.",
    highlights: [
      "Precision CNC grooved ripple textures for acoustic water shimmer",
      "Concealed 3000K warm gold architectural perimeter lighting",
      "Zero-splash laminar sheet designed for patios and courtyards"
    ],
    specs: [
      { label: "Texture", value: "High-Relief Vertical Fluting" },
      { label: "Illumination", value: "Recessed High-Lumen Architectural Strip" },
      { label: "Application", value: "Indoor Courtyards, Verandahs & Garden Patios" },
      { label: "Power", value: "Low-Voltage 12V Waterproof Driver Included" }
    ],
    waMsg: "Hello Dholpurstones.com, I would like an estimate for the Backlit Fluted Sandstone Acoustic Waterfall featured in your live demonstration."
  },
  {
    id: "sandstone-rain-curtain-archway",
    title: "Architectural Sandstone Rain Curtain Archway",
    category: "waterfall",
    categoryLabel: "Waterfall Walls",
    stoneType: "Monolithic Dholpur Sandstone",
    videoSrc: "/stone-video/WhatsApp Video 2026-10-24 at 12.10.00 PM.mp4",
    posterSrc: "/stone-video/posters/poster_10.jpg",
    duration: "0:16",
    orientation: "portrait",
    aspectRatio: "9/16",
    description: "Monumental sandstone portal featuring an overhead micro-nozzle array that generates a mesmerizing vertical rainfall curtain illuminated by warm spotlights.",
    highlights: [
      "Monolithic heavy-gauge stone portal jambs and lintel",
      "Multi-strand vertical rain curtain water discharge",
      "Integrated warm downlighting for dramatic night visuals"
    ],
    specs: [
      { label: "Structure", value: "Solid Sandstone Post-and-Beam Portal" },
      { label: "Rain System", value: "Precision Laser-Cut Brass Rain Nozzle Rail" },
      { label: "Lighting", value: "Warm Downward Recessed Spotlights" },
      { label: "Dimensions", value: "Custom Heights up to 12 ft Available" }
    ],
    waMsg: "Hello Dholpurstones.com, I am interested in custom dimensions for the Architectural Sandstone Rain Curtain Archway."
  },
  {
    id: "marble-sphere-fountain",
    title: "Multi-Tier Marble & Sandstone Sphere Fountain",
    category: "fountain",
    categoryLabel: "Tiered Fountains",
    stoneType: "Pure White Marble & Sandstone",
    videoSrc: "/stone-video/WhatsApp Video 2026-10-24 at 12.06.42 PM.mp4",
    posterSrc: "/stone-video/posters/poster_01.jpg",
    duration: "0:21",
    orientation: "portrait",
    aspectRatio: "9/16",
    description: "Live water flow test of our hand-sculpted tiered fountain with rotating central orb, perimeter spillway bowls, and circular pedestal basin.",
    highlights: [
      "Concentric tiered water spillways with overflow scuppers",
      "Turned floating polished central stone sphere",
      "Traditional fluted baluster pedestal base"
    ],
    specs: [
      { label: "Stone", value: "Fine Makrana White & Dholpur Natural Strata" },
      { label: "Tiers", value: "3-Tier Concentric Basin Geometry" },
      { label: "Movement", value: "Water-Pressure Floating Sphere Action" },
      { label: "Durability", value: "All-Weather Exterior Frost & Heat Resistant" }
    ],
    waMsg: "Hello Dholpurstones.com, I saw the live video of the Multi-Tier Marble & Sandstone Sphere Fountain and want to order one for my farmhouse."
  },
  {
    id: "royal-black-marble-sphere-fountain",
    title: "Royal Black Marble & Cannon Spout Fountain",
    category: "fountain",
    categoryLabel: "Tiered Fountains",
    stoneType: "Mirror-Polished Black Marble",
    videoSrc: "/stone-video/WhatsApp Video 2026-10-24 at 12.09.56 PM.mp4",
    posterSrc: "/stone-video/posters/poster_05.jpg",
    duration: "0:15",
    orientation: "portrait",
    aspectRatio: "9/16",
    description: "High-contrast mirror-polished black marble tiered fountain with sculpted white marble cannon spouts and floating polished central orb.",
    highlights: [
      "Mirror-buffed dense black marble bowls with gold brass accent rim",
      "Carved white marble cannon water jets arching into central basin",
      "High-pressure hydraulic floating sphere centerpiece"
    ],
    specs: [
      { label: "Finish", value: "Zero-Pore Mirror Buff Polish" },
      { label: "Spouts", value: "Sculpted White Marble Cannon Nozzles" },
      { label: "Base", value: "Heavy Monolithic Fluted Pedestal" },
      { label: "Maintenance", value: "Self-Cleaning Recirculation" }
    ],
    waMsg: "Hello Dholpurstones.com, please share price and dispatch details for the Royal Black Marble & Cannon Spout Fountain."
  },
  {
    id: "modern-stepped-slate-waterfall",
    title: "Multi-Bowl Stepped Slate Waterfall Wall",
    category: "waterfall",
    categoryLabel: "Waterfall Walls",
    stoneType: "Natural Black Slate & Granite",
    videoSrc: "/stone-video/WhatsApp Video 2026-10-24 at 12.09.57 PM.mp4",
    posterSrc: "/stone-video/posters/poster_06.jpg",
    duration: "0:12",
    orientation: "landscape",
    aspectRatio: "16/9",
    description: "Modern architectural stone water wall featuring 7-stage cascading bowls and a textured split-face slate acoustic backdrop.",
    highlights: [
      "7 progressive cascading spillway bowls",
      "Textured split-face natural slate acoustic wall",
      "Deep black monolithic base catch tank"
    ],
    specs: [
      { label: "Style", value: "Contemporary Minimalist Landscape Architecture" },
      { label: "Sound Profile", value: "Deep Melodic Water Trickle" },
      { label: "Orientation", value: "Wide Landscape Format (Horizontal)" },
      { label: "Weight", value: "Solid Natural Stone Modular Assembly" }
    ],
    waMsg: "Hello Dholpurstones.com, I would like to order or get details for the Multi-Bowl Stepped Slate Waterfall Wall."
  },
  {
    id: "multi-level-sandstone-urn-cascade",
    title: "Artisanal Multi-Level Sandstone Urn Cascade",
    category: "fountain",
    categoryLabel: "Tiered Fountains",
    stoneType: "Fine Woodgrain Sandstone",
    videoSrc: "/stone-video/WhatsApp Video 2026-10-24 at 12.09.58 PM.mp4",
    posterSrc: "/stone-video/posters/poster_07.jpg",
    duration: "0:17",
    orientation: "portrait",
    aspectRatio: "9/16",
    description: "Warm-veined natural sandstone fountain with cantilevered tiers, hand-carved stone vessels, and internal reservoir lighting.",
    highlights: [
      "Natural warm woodgrain striations in monolithic sandstone",
      "3-tier cantilevered spillway steps with carved pouring vessels",
      "Pre-fitted underwater LED ring in base urn"
    ],
    specs: [
      { label: "Form", value: "Architectural Stepped Cantilever Stand" },
      { label: "Vessels", value: "Solid Hand-Turned Sandstone Pots & Urns" },
      { label: "Lighting", value: "Submersible Warm White Ring LED" },
      { label: "Pump", value: "Whisper-Quiet 220V Submersible Pump" }
    ],
    waMsg: "Hello Dholpurstones.com, I am interested in the Artisanal Multi-Level Sandstone Urn Cascade seen in your video gallery."
  },
  {
    id: "illuminated-lotus-fountain",
    title: "Night-Illuminated Scalloped Lotus Fountain",
    category: "illuminated",
    categoryLabel: "Illuminated Water Features",
    stoneType: "Fine Grain White Marble",
    videoSrc: "/stone-video/WhatsApp Video 2026-10-24 at 12.09.55 PM.mp4",
    posterSrc: "/stone-video/posters/poster_04.jpg",
    duration: "0:14",
    orientation: "portrait",
    aspectRatio: "9/16",
    description: "Nighttime water cascade showcasing precision-carved scalloped lotus tiers and glowing blue submersible LED illumination.",
    highlights: [
      "Delicate hand-chiseled scalloped lotus petal perimeter",
      "Integrated blue/warm submersible LED lighting",
      "Graceful 360-degree curtain water overflow"
    ],
    specs: [
      { label: "Motif", value: "Traditional Indian Lotus (Padma) Relief" },
      { label: "Lighting", value: "Multi-Color Submersible IP68 LED Array" },
      { label: "Diameter", value: "Available in 3ft, 4.5ft & 6ft Formats" },
      { label: "Assembly", value: "Interlocking Center Shaft with Concealed Core" }
    ],
    waMsg: "Hello Dholpurstones.com, I am enquiring about the Night-Illuminated Scalloped Lotus Fountain from your live video."
  },
  {
    id: "monolithic-courtyard-sandstone-cascade",
    title: "Monolithic Fluted Sandstone Courtyard Cascade",
    category: "waterfall",
    categoryLabel: "Waterfall Walls",
    stoneType: "Dholpur Beige Sandstone",
    videoSrc: "/stone-video/WhatsApp Video 2026-10-24 at 12.10.02 PM.mp4",
    posterSrc: "/stone-video/posters/poster_11.jpg",
    duration: "0:06",
    orientation: "portrait",
    aspectRatio: "9/16",
    description: "Full-scale estate boundary wall water cascade carved from natural beige sandstone with deep vertical relief fluting and high-volume spillway chute.",
    highlights: [
      "Deep relief vertical fluted architectural stone cladding",
      "High-volume wide laminar waterfall spout",
      "Built for estate boundary walls, pool backdrops & patios"
    ],
    specs: [
      { label: "Height", value: "Standard 8 ft to 14 ft Monolithic Slices" },
      { label: "Thickness", value: "50mm Calibrated Heavy Stone Slabs" },
      { label: "Flow Volume", value: "High-Volume Calibrated Sheet Weir" },
      { label: "Durability", value: "Century-Grade Weatherproof Sandstone" }
    ],
    waMsg: "Hello Dholpurstones.com, I would like to get a quote and CAD layout for the Monolithic Fluted Sandstone Courtyard Cascade."
  },
  {
    id: "black-marble-flame-sculpture",
    title: "Hand-Carved Black Marble Eternal Flame Sculpture",
    category: "sculpture",
    categoryLabel: "Monumental Sculptures",
    stoneType: "Monolithic Indian Black Marble",
    videoSrc: "/stone-video/WhatsApp Video 2026-10-24 at 12.10.03 PM.mp4",
    posterSrc: "/stone-video/posters/poster_12.jpg",
    duration: "0:06",
    orientation: "portrait",
    aspectRatio: "9/16",
    description: "Masterpiece contemporary organic sculpture chiseled from single dense black marble monolith for landmark farmhouse lawns and courtyards.",
    highlights: [
      "100% monolithic single-block hand carving",
      "Contrasting satin mirror-polished curves and rock-chiseled plinth",
      "Signature art focal point for luxury landscape rotundas"
    ],
    specs: [
      { label: "Art Style", value: "Contemporary Fluid Organic Abstract" },
      { label: "Weight", value: "Approx. 850–1,200 kg Monolithic Stone" },
      { label: "Height", value: "6.5 ft Total Height on Pedestal Plinth" },
      { label: "Finish", value: "Dual Satin Polished & Bush-Hammered Rock" }
    ],
    waMsg: "Hello Dholpurstones.com, I am inquiring about the Hand-Carved Black Marble Eternal Flame Sculpture shown in your live video."
  }
];

export const videoCategories = [
  { id: "all", label: "All Live Videos", count: 12 },
  { id: "fountain", label: "Tiered & Sphere Fountains", count: 4 },
  { id: "waterfall", label: "Waterfall Walls & Rain Curtains", count: 5 },
  { id: "illuminated", label: "Illuminated Night Features", count: 2 },
  { id: "sculpture", label: "Monumental Sculptures", count: 1 },
];
