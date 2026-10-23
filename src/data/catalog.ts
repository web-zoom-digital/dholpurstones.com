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
    href: "/exclusive-imported#beige-marble",
    varieties: [
      { name: "Botticino", image: "/assets/garg/botticino_marble.jpg" },
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
    href: "/exclusive-imported#white-marble",
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
    href: "/exclusive-imported#grey-marble",
    varieties: [
      { name: "Coastal White", image: "/white-series-dolphur-color/coastal-white.png" },
      { name: "Blue Wave", image: "/white-series-dolphur-color/blue-wave.png" },
      { name: "Brown Statuario", image: "/white-series-dolphur-color/brown-statuario.png" },
      { name: "Bianco Acropolis", image: "/white-series-dolphur-color/bianco-acropolis.png" },
      { name: "Pearl White", image: "/white-series-dolphur-color/pearl-white.png" },
      { name: "Venatino", image: "/white-series-dolphur-color/venatino-white.png" },
      { name: "Astrix Grey", image: "/grey-marble/astrix-grey.jpg" },
      { name: "Aurex Gold Vein", image: "/grey-marble/aurex-gold-vein.jpg" },
      { name: "Brexion Luxe", image: "/grey-marble/brexion-luxe.jpg" },
      { name: "Brilliant Grey", image: "/grey-marble/brilliant-grey.jpg" },
      { name: "Camouflage", image: "/grey-marble/camouflage.jpg" },
      { name: "Cryon Mist", image: "/grey-marble/cryon-mist.jpg" },
      { name: "Dekart Grey", image: "/grey-marble/dekart-grey.jpg" },
      { name: "Fendi Grey", image: "/grey-marble/fendi-grey.jpg" },
      { name: "Grey Cappuccino", image: "/grey-marble/grey-cappuccino.jpg" },
      { name: "Grey Dragon", image: "/grey-marble/grey-dragon.jpg" },
      { name: "Grey Picasso", image: "/grey-marble/grey-picasso.jpg" },
      { name: "Grigio Silver", image: "/grey-marble/grigio-silver.jpg" },
      { name: "Ice Grey", image: "/grey-marble/ice-grey.jpg" },
      { name: "Lunera Soft", image: "/grey-marble/lunera-soft.jpg" },
      { name: "Mac Grey", image: "/grey-marble/mac-grey.jpg" },
      { name: "Opera Fantastic", image: "/grey-marble/opera-fantastic.jpg" },
      { name: "Oracle Grey", image: "/grey-marble/oracle-grey.jpg" },
      { name: "Sarrancolin", image: "/grey-marble/sarrancolin.jpg" },
      { name: "Silvara Mist", image: "/grey-marble/silvara-mist.jpg" },
      { name: "Sonata Grey", image: "/grey-marble/sonata-grey.jpg" },
      { name: "Tundra Grey", image: "/grey-marble/tundra-grey.jpg" },
      { name: "Velmora Taupe", image: "/grey-marble/velmora-taupe.jpg" },
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
    name: "Chhatris & Gazebos",
    note: "Hand-carved sandstone chhatris and pavilions for the lawn.",
    image: "/garden-stonework/carved-sandstone-chhatri-pavilion.jpg",
    href: "/farmhouse-gardens",
  },
  {
    id: "lanterns",
    name: "Garden Lanterns & Lamp Posts",
    note: "Carved jali lamp posts that light paths, lawns and entrances.",
    image: "/garden-stonework/sandstone-lantern-lamp-post-lawn.jpg",
    href: "/farmhouse-gardens",
  },
  {
    id: "fountains",
    name: "Water Fountains",
    note: "Carved bowl and pot fountains that anchor courtyards and gardens.",
    image: "/garden-stonework/sandstone-bowl-water-fountains.jpg",
    href: "/farmhouse-gardens",
  },
];

/** Every farm house & garden photo, used by the gallery on /farmhouse-gardens. */
export const gardenGallery: { src: string; alt: string }[] = [
  { src: "/garden-stonework/carved-sandstone-chhatri-pavilion.jpg", alt: "Hand-carved sandstone chhatri pavilion with arched brackets and fluted columns" },
  { src: "/garden-stonework/sandstone-bowl-water-fountains.jpg", alt: "Sandstone bowl water fountains in a lawn garden" },
  { src: "/garden-stonework/sandstone-pot-water-fountain.jpg", alt: "Sandstone pot and pillar water fountain in a garden" },
  { src: "/garden-stonework/sandstone-lantern-lamp-post-lawn.jpg", alt: "Carved sandstone lantern lamp post on a garden lawn" },
  { src: "/garden-stonework/lotus-sandstone-lantern-post.jpg", alt: "Lotus-carved sandstone lantern post with jali panel" },
  { src: "/garden-stonework/red-sandstone-lantern-posts-pathway.jpg", alt: "Red sandstone jali lantern posts along a garden pathway" },
  { src: "/garden-stonework/marble-lantern-lamp-post.jpg", alt: "White stone lantern lamp post beside a garden planter" },
  { src: "/garden-stonework/fluted-sandstone-column.jpg", alt: "Fluted sandstone column with carved capital" },
  { src: "/assets/landscaping/landscape_pool_coping.jpg", alt: "Sandstone pool coping and deck beside a farm house pool" },
  { src: "/assets/landscaping/landscape_cobblestone_driveway.jpg", alt: "Cobblestone sandstone driveway and portico of a farm house" },
  { src: "/assets/landscaping/landscape_patio_paving.jpg", alt: "Sandstone patio paving and lawn terrace" },
  { src: "/assets/landscaping/landscape_steps_walling.jpg", alt: "Terraced garden with sandstone steps and retaining walls" },
];

/* ───────────────────────── Stone Articles (hand-crafted) ───────────────────────── */
export const articleSubs: SubCategory[] = [
  {
    id: "peacock",
    name: "Peacock Sculptures",
    note: "Hand-carved peacock pairs for gardens, gates and entrances.",
    image: "/stone-articles/carved-sandstone-peacock-pair.jpg",
    href: "/articles",
  },
  {
    id: "elephant",
    name: "Elephant Statues",
    note: "Caparisoned elephants carved from a single sandstone block.",
    image: "/stone-articles/carved-sandstone-elephant.jpg",
    href: "/articles",
  },
  {
    id: "statues",
    name: "Figure Statues",
    note: "Traditional Rajasthani figures carved in sandstone.",
    image: "/stone-articles/sandstone-soldier-statue.jpg",
    href: "/articles",
  },
  {
    id: "mandir",
    name: "Temple Mandirs",
    note: "Carved jali mandirs and shrines in natural stone.",
    image: "/stone-articles/carved-sandstone-temple-mandir.jpg",
    href: "/articles",
  },
  {
    id: "jali-lamps",
    name: "Jali Lamps & Urns",
    note: "Pierced-jali lamps and urns, including Om and floral patterns.",
    image: "/stone-articles/om-jali-sandstone-lamp.jpg",
    href: "/articles",
  },
  {
    id: "lion",
    name: "Guardian Lions",
    note: "Regal lion statues on carved plinths for gates and portals.",
    image: "/stone-articles/user_lion_clean.jpg",
    href: "/articles",
  },
];

/** Every hand-carved article photo, used by the gallery on /articles. */
export const articleGallery: { src: string; alt: string }[] = [
  { src: "/stone-articles/carved-sandstone-peacock-pair.jpg", alt: "Pair of hand-carved sandstone peacock sculptures on carved plinths" },
  { src: "/stone-articles/carved-sandstone-elephant.jpg", alt: "Hand-carved sandstone elephant with decorated headpiece" },
  { src: "/stone-articles/sandstone-soldier-statue.jpg", alt: "Sandstone statue of a Rajasthani guard holding a staff" },
  { src: "/stone-articles/carved-sandstone-temple-mandir.jpg", alt: "Carved sandstone temple mandir with jali walls and lotus columns" },
  { src: "/stone-articles/om-jali-sandstone-lamp.jpg", alt: "Sandstone jali lamp with Om symbol cut-outs" },
  { src: "/stone-articles/pink-sandstone-jali-urn-lamp.jpg", alt: "Pink sandstone jali urn lamp with lid" },
  { src: "/stone-articles/user_lion_clean.jpg", alt: "Sandstone guardian lion sculpture on carved plinth" },
  { src: "/garden-stonework/sandstone-lantern-lamp-post-lawn.jpg", alt: "Carved sandstone lantern lamp post" },
  { src: "/garden-stonework/lotus-sandstone-lantern-post.jpg", alt: "Lotus-carved sandstone lantern post" },
  { src: "/garden-stonework/red-sandstone-lantern-posts-pathway.jpg", alt: "Red sandstone jali lantern posts" },
  { src: "/garden-stonework/sandstone-pot-water-fountain.jpg", alt: "Sandstone pot water fountain" },
  { src: "/garden-stonework/fluted-sandstone-column.jpg", alt: "Fluted sandstone column with carved capital" },
  { src: "/stone-articles/horse_marble_image.jpeg", alt: "Galloping horses relief panel carved in stone" },
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
  ...marbleSubs.map(({ varieties, ...sub }) => {
    void varieties;
    return sub;
  }),
  {
    id: "exotic-marble",
    name: "Imported Exotic Marble",
    note: "Calacatta Viola, Bianco Fire, Golden Michael and rare Italian-style slabs.",
    image: "/white-series-dolphur-color/calacatta-viola.png",
    href: "/exclusive-imported#imported-marble",
  },
  {
    id: "semi-precious",
    name: "Semi-Precious Stones",
    note: "Agate, lapis lazuli, jasper and tiger's eye slabs and feature panels.",
    image: "/semi-precious/blue-agate.jpeg",
    href: "/semi-precious",
  },
];

export const exoticMarbleVarieties: MarbleVariety[] = [
  { name: "Calacatta Viola", image: "/white-series-dolphur-color/calacatta-viola.png" },
  { name: "Bianco Fire", image: "/white-series-dolphur-color/bianco-fire.png" },
  { name: "Golden Michael", image: "/white-series-dolphur-color/golden-michael.png" },
  { name: "Golden Spider", image: "/white-series-dolphur-color/golden-spider.png" },
  { name: "Lilac White", image: "/white-series-dolphur-color/lilac-white.png" },
  { name: "Golden Macaubus", image: "/white-series-dolphur-color/golden-macaubus.png" },
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
    blurb: "All our marble — beige, white and grey — plus imported exotic slabs and semi-precious stones.",
    image: "/white-series-dolphur-color/statuario.png",
    badge: "Marble & Imports",
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
