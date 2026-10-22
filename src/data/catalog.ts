/**
 * Single source of truth for the product catalogue.
 * Navbar, mobile menu, homepage, footer and category pages all read from here
 * so names, images and links can never drift apart again.
 */

export const WHATSAPP_NUMBER = "919414945457";
export const PHONE_PRIMARY = "+91 94149 45457";
export const PHONE_SECONDARY = "+91 90573 55232";
export const EMAIL = "gargcorporationltd@gmail.com";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export interface SubCategory {
  id: string;
  name: string;
  note: string;
  image: string;
  href: string;
}

export type CategoryId =
  | "sandstone"
  | "marble"
  | "farmhouse-gardens"
  | "stone-articles"
  | "semi-precious"
  | "exclusive-imported";

export interface Category {
  id: CategoryId;
  name: string;
  href: string;
  blurb: string;
  image: string;
  badge: string;
  subs: SubCategory[];
}

/* ───────────────────────── Sandstone ───────────────────────── */
export const sandstoneSubs: SubCategory[] = [
  {
    id: "agra-red",
    name: "Agra Red",
    note: "Deep terracotta red — the stone of forts, palaces and Parliament.",
    image: "/sandstone/agra-red-sandstone.jpeg",
    href: "/sandstone#agra-red",
  },
  {
    id: "dholpur-beige",
    name: "Dholpur Beige",
    note: "Warm buff-cream stone behind our 300+ front elevation designs.",
    image: "/sandstone/dolpur-beige-sandstone.jpeg",
    href: "/sandstone#dholpur-beige",
  },
  {
    id: "dholpur-pink",
    name: "Dholpur Pink",
    note: "Blush-pink temple-grade stone, fine grained and carving friendly.",
    image: "/sandstone/dholpur-pink-sandstone.jpeg",
    href: "/sandstone#dholpur-pink",
  },
  {
    id: "dholpur-chocolate",
    name: "Dholpur Chocolate",
    note: "Rich brown stone with natural teak-wood graining.",
    image: "/assets/products/dholpur_chocolate_teakwood.jpg",
    href: "/sandstone#dholpur-chocolate",
  },
];

/* ───────────────────────── Marble ───────────────────────── */
export interface MarbleVariety {
  name: string;
  image: string;
}

export const marbleSubs: (SubCategory & { varieties: MarbleVariety[] })[] = [
  {
    id: "beige-marble",
    name: "Beige Marble",
    note: "Warm, creamy tones for flooring, wall cladding and interiors.",
    image: "/assets/garg/botticino_marble.jpg",
    href: "/marble#beige-marble",
    varieties: [
      { name: "Botticino Classico", image: "/assets/garg/botticino_marble.jpg" },
      { name: "Elmali Beige", image: "/assets/garg/elmali_beige.jpg" },
      { name: "Michael Angelo", image: "/white-series-dolphur-color/michael-angelo.png" },
      { name: "Monte Picasso", image: "/white-series-dolphur-color/monte-picasso.png" },
      { name: "Sapphire White", image: "/white-series-dolphur-color/sapphire-white.png" },
      { name: "Dover White", image: "/white-series-dolphur-color/dover-white.png" },
      { name: "Portugal White", image: "/white-series-dolphur-color/portugal-white.png" },
      { name: "Oyster White", image: "/white-series-dolphur-color/oyster-white.png" },
    ],
  },
  {
    id: "white-marble",
    name: "White Marble",
    note: "Classic whites with fine veining — Statuario, Carrara and more.",
    image: "/white-series-dolphur-color/statuario.png",
    href: "/marble#white-marble",
    varieties: [
      { name: "Statuario", image: "/white-series-dolphur-color/statuario.png" },
      { name: "Carrara White", image: "/white-series-dolphur-color/carrara-white.png" },
      { name: "Arabescato", image: "/white-series-dolphur-color/arabescato.png" },
      { name: "Ice White", image: "/white-series-dolphur-color/ice-white.png" },
      { name: "Jasmine White", image: "/white-series-dolphur-color/jasmine-white.png" },
      { name: "Royal White", image: "/white-series-dolphur-color/royal-white.png" },
      { name: "Bianco Lucca", image: "/white-series-dolphur-color/bianco-lucca.png" },
      { name: "Casablanca", image: "/white-series-dolphur-color/casablanca.png" },
    ],
  },
  {
    id: "grey-marble",
    name: "Grey Marble",
    note: "Cool grey and smoky veined marbles for modern, dramatic spaces.",
    image: "/white-series-dolphur-color/blue-wave.png",
    href: "/marble#grey-marble",
    varieties: [
      { name: "Pearl White", image: "/white-series-dolphur-color/pearl-white.png" },
      { name: "Blue Wave", image: "/white-series-dolphur-color/blue-wave.png" },
      { name: "Brown Statuario", image: "/white-series-dolphur-color/brown-statuario.png" },
      { name: "Bianco Acropolis", image: "/white-series-dolphur-color/bianco-acropolis.png" },
      { name: "Volakas Haemus", image: "/white-series-dolphur-color/volakas-haemus.png" },
      { name: "Venatino White", image: "/white-series-dolphur-color/venatino-white.png" },
      { name: "Lasa White", image: "/white-series-dolphur-color/lasa-white.png" },
      { name: "Guangxi White", image: "/white-series-dolphur-color/guangxi-white.png" },
    ],
  },
];

/* ───────────────────────── Farm House & Gardens ───────────────────────── */
export const gardenSubs: SubCategory[] = [
  {
    id: "driveways",
    name: "Portico & Driveways",
    note: "Hand-split cobble driveways and grand entrance courts.",
    image: "/assets/landscaping/landscape_cobblestone_driveway.jpg",
    href: "/farmhouse-gardens",
  },
  {
    id: "patios",
    name: "Patios & Lawn Paving",
    note: "Cool-underfoot sandstone terraces for farm house living.",
    image: "/assets/landscaping/landscape_patio_paving.jpg",
    href: "/farmhouse-gardens",
  },
  {
    id: "pool",
    name: "Pool Coping & Decks",
    note: "Non-slip, heat-reflective stone around the water.",
    image: "/assets/landscaping/landscape_pool_coping.jpg",
    href: "/farmhouse-gardens",
  },
  {
    id: "gazebo",
    name: "Garden Gazebos",
    note: "Carved sandstone chhatris and baradaris for the lawn.",
    image: "/assets/landscaping/landscape_sandstone_gazebo.jpg",
    href: "/farmhouse-gardens",
  },
  {
    id: "steps",
    name: "Steps & Retaining Walls",
    note: "Terraced steps and natural stone walling for sloped gardens.",
    image: "/assets/landscaping/landscape_steps_walling.jpg",
    href: "/farmhouse-gardens",
  },
  {
    id: "fountains",
    name: "Water Fountains",
    note: "Tiered carved fountains that anchor courtyards and gardens.",
    image: "/assets/landscaping/landscape_water_fountain.jpg",
    href: "/farmhouse-gardens",
  },
];

/* ───────────────────────── Stone Articles (hand-crafted) ───────────────────────── */
export const articleSubs: SubCategory[] = [
  {
    id: "peacock",
    name: "Peacock Sculptures",
    note: "Hand-carved filigree peacocks for gardens and entrances.",
    image: "/stone-articles/user_peacock_clean.jpg",
    href: "/articles",
  },
  {
    id: "lion",
    name: "Guardian Lions",
    note: "Regal lion statues on carved plinths for gates and portals.",
    image: "/stone-articles/user_lion_clean.jpg",
    href: "/articles",
  },
  {
    id: "lantern",
    name: "Stone Lanterns",
    note: "Pierced-jali lanterns that glow warmly after dusk.",
    image: "/stone-articles/stone_lantern.jpg",
    href: "/articles",
  },
  {
    id: "elephant",
    name: "Elephant Statues",
    note: "Caparisoned elephants carved from a single sandstone block.",
    image: "/stone-articles/elephant_image.jpeg",
    href: "/articles",
  },
  {
    id: "fountain",
    name: "Carved Fountains",
    note: "Multi-tier fountains hand-chiselled by Sikandra artisans.",
    image: "/stone-articles/fountain_image.jpeg",
    href: "/articles",
  },
  {
    id: "relief",
    name: "Relief Panels",
    note: "Galloping-horse and heritage relief wall panels.",
    image: "/stone-articles/horse_marble_image.jpeg",
    href: "/articles",
  },
];

/* ───────────────────────── Semi-Precious ───────────────────────── */
export const semiPreciousSubs: SubCategory[] = [
  { id: "blue-agate", name: "Blue Agate", note: "Backlit translucent slabs.", image: "/semi-precious/blue-agate.jpeg", href: "/semi-precious" },
  { id: "lapis-lazuli", name: "Lapis Lazuli", note: "Deep royal-blue feature panels.", image: "/semi-precious/lapis-lazuli.jpeg", href: "/semi-precious" },
  { id: "tiger-eye", name: "Tiger's Eye", note: "Golden chatoyant shimmer.", image: "/semi-precious/tiger-eyes.jpeg", href: "/semi-precious" },
  { id: "green-agate", name: "Green Agate", note: "Fresh green mosaic slabs.", image: "/semi-precious/green-agate.jpeg", href: "/semi-precious" },
  { id: "fire-agate", name: "Fire Agate", note: "Glowing amber and orange.", image: "/semi-precious/fire-agate.jpeg", href: "/semi-precious" },
  { id: "red-jasper", name: "Red Jasper", note: "Bold crimson statement slabs.", image: "/semi-precious/red-jasper.jpeg", href: "/semi-precious" },
];

/* ───────────────────────── Exclusive & Imported ───────────────────────── */
export const exclusiveSubs: SubCategory[] = [
  {
    id: "gem-surface",
    name: "Precious Gem Surfaces",
    note: "Backlit gemstone slabs, tabletops, basins and décor.",
    image: "/precious-gem-surface/page_062_BLACK_OBSIDIAN_image_02.jpeg",
    href: "/precious-gem-surface",
  },
  {
    id: "exotic-marble",
    name: "Imported Exotic Marble",
    note: "Calacatta Viola, Bianco Fire, Golden Michael and rare Italian-style slabs.",
    image: "/white-series-dolphur-color/calacatta-viola.png",
    href: "/exclusive-imported#imported-marble",
  },
];

export const exoticMarbleVarieties: MarbleVariety[] = [
  { name: "Calacatta Viola", image: "/white-series-dolphur-color/calacatta-viola.png" },
  { name: "Bianco Fire", image: "/white-series-dolphur-color/bianco-fire.png" },
  { name: "Golden Michael", image: "/white-series-dolphur-color/golden-michael.png" },
  { name: "Coastal White", image: "/white-series-dolphur-color/coastal-white.png" },
  { name: "Golden Spider", image: "/white-series-dolphur-color/golden-spider.png" },
  { name: "Lilac White", image: "/white-series-dolphur-color/lilac-white.png" },
  { name: "Golden Macaubus", image: "/white-series-dolphur-color/golden-macaubus.png" },
  { name: "Blue Wave", image: "/white-series-dolphur-color/blue-wave.png" },
];

/* ───────────────────────── Master category list ───────────────────────── */
export const categories: Category[] = [
  {
    id: "sandstone",
    name: "Sandstone",
    href: "/sandstone",
    blurb: "Mine-direct Dholpur sandstone in four signature colours.",
    image: "/sandstone/agra-red-sandstone.jpeg",
    badge: "Our Own Mines",
    subs: sandstoneSubs,
  },
  {
    id: "marble",
    name: "Marble",
    href: "/marble",
    blurb: "Beige, white and grey marble — slabs and tiles in 20+ varieties.",
    image: "/white-series-dolphur-color/statuario.png",
    badge: "3 Collections",
    subs: marbleSubs,
  },
  {
    id: "farmhouse-gardens",
    name: "Farm House & Gardens",
    href: "/farmhouse-gardens",
    blurb: "Driveways, patios, pool decks, gazebos and fountains in stone.",
    image: "/assets/landscaping/landscape_pool_coping.jpg",
    badge: "Our Speciality",
    subs: gardenSubs,
  },
  {
    id: "stone-articles",
    name: "Stone Articles",
    href: "/articles",
    blurb: "Hand-carved sculptures, lanterns and fountains by master artisans.",
    image: "/stone-articles/user_peacock_clean.jpg",
    badge: "Hand Crafted",
    subs: articleSubs,
  },
  {
    id: "semi-precious",
    name: "Semi-Precious Stones",
    href: "/semi-precious",
    blurb: "Agate, lapis, jasper and tiger's eye slabs and feature panels.",
    image: "/semi-precious/blue-agate.jpeg",
    badge: "9 Gemstones",
    subs: semiPreciousSubs,
  },
  {
    id: "exclusive-imported",
    name: "Exclusive & Imported",
    href: "/exclusive-imported",
    blurb: "Rare imported marbles and precious gem surfaces, made to order.",
    image: "/white-series-dolphur-color/calacatta-viola.png",
    badge: "By Request",
    subs: exclusiveSubs,
  },
];

export const getCategory = (id: CategoryId) =>
  categories.find((c) => c.id === id)!;

/* ───────────────────────── Landmark projects ───────────────────────── */
export const landmarkProjects = [
  { name: "Parliament House", place: "New Delhi", image: "/assets/project-parliament.jpg" },
  { name: "Akshardham Temple", place: "New Delhi", image: "/assets/project-akshardham.jpg" },
  { name: "Adani House", place: "Ahmedabad", image: "/assets/project-adani.jpg" },
  { name: "AIIMS", place: "Bhopal", image: "/assets/project-aiims.jpg" },
  { name: "Indian Embassy", place: "Berlin, Germany", image: "/assets/project-embassy-berlin.jpg" },
];

/* ───────────────────────── Full project portfolio ───────────────────────── */
export type ProjectType = "Government" | "Spiritual" | "Corporate" | "Diplomatic" | "Public & Residential";

export interface Project {
  id: string;
  name: string;
  place: string;
  type: ProjectType;
  scope: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "parliament-house",
    name: "Parliament House",
    place: "New Delhi, India",
    type: "Government",
    scope: "Monumental sandstone contractor and cladding supplier.",
    image: "/assets/project-parliament.jpg",
  },
  {
    id: "akshardham",
    name: "Akshardham Temple",
    place: "New Delhi, India",
    type: "Spiritual",
    scope: "Intricate spiritual stone carvings, temple pillars and artisanal masonry.",
    image: "/assets/project-akshardham.jpg",
  },
  {
    id: "adani-house",
    name: "Adani Corporate Headquarters",
    place: "Ahmedabad, India",
    type: "Corporate",
    scope: "High-specification monolithic architectural facade stone.",
    image: "/assets/project-adani.jpg",
  },
  {
    id: "aiims-bhopal",
    name: "AIIMS Medical Institute",
    place: "Bhopal, India",
    type: "Government",
    scope: "Institutional natural stone facade and paving.",
    image: "/assets/project-aiims.jpg",
  },
  {
    id: "embassy-berlin",
    name: "Indian Embassy",
    place: "Berlin, Germany",
    type: "Diplomatic",
    scope: "Diplomatic mission exterior natural sandstone supply.",
    image: "/assets/project-embassy-berlin.jpg",
  },
  {
    id: "embassy-kathmandu",
    name: "Indian Embassy",
    place: "Kathmandu, Nepal",
    type: "Diplomatic",
    scope: "Turnkey diplomatic mission architectural stone execution.",
  },
  {
    id: "iskcon-temples",
    name: "ISKCON Temples (50+ locations)",
    place: "India & worldwide",
    type: "Spiritual",
    scope: "Sacred stone shikharas, carved pillars and courtyard paving.",
  },
  {
    id: "kashiram-garden",
    name: "Kashiram Monumental Gardens",
    place: "Lucknow, India",
    type: "Public & Residential",
    scope: "Heritage civic stonework and monolithic boundary screens.",
  },
  {
    id: "nappa-velly",
    name: "Nappa Velly Residential Estates",
    place: "Bengaluru, India",
    type: "Public & Residential",
    scope: "Luxury private villa sandstone elevations.",
  },
  {
    id: "omega-bearing",
    name: "Omega Bearing Industrial Complex",
    place: "Bhopal, India",
    type: "Corporate",
    scope: "Monolithic structural stone facades.",
  },
];
