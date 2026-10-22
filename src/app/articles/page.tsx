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
    waMsg: "Hello Dholpurstones.com, I am interested in commissioning Royal Guardian Lion Sandstone Sculptures for my project.",
  },
  {
    id: "rajasthani-guard-statue",
    name: "Rajasthani Guard Statue",
    subtitle: "Hand-Carved Sandstone Figure with Staff",
    image: "/stone-articles/sandstone-soldier-statue.jpg",
    category: "TRADITIONAL FIGURE SCULPTURE",
    material: "Natural Dholpur Sandstone",
    desc: "Traditional Rajasthani figure carved in sandstone with detailed turban, jewellery and pleated attire — made for gateways, courtyards and heritage-style gardens.",
    specs: [
      { label: "Stone Material", value: "Natural Dholpur Sandstone" },
      { label: "Carving Technique", value: "Traditional hand chisel and mallet" },
      { label: "Sizes", value: "Made to order — share your requirement" },
      { label: "Surface Finish", value: "Hand-chiselled and honed" },
    ],
    highlights: [
      "Carved from a single block of sandstone",
      "Detailed facial and costume carving",
      "Custom size and pose on request",
      "Suits gateways, courtyards and gardens",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to inquire about a hand-carved Rajasthani statue.",
  },
  {
    id: "carved-temple-mandir",
    name: "Carved Temple Mandir",
    subtitle: "Jali-Walled Sandstone Shrine with Lotus Columns",
    image: "/stone-articles/carved-sandstone-temple-mandir.jpg",
    category: "TEMPLE & SHRINE ARTICLES",
    material: "Natural Dholpur Sandstone",
    desc: "Hand-carved mandir with jali lattice walls, lotus-capital columns, a stepped shikhara roof and floral base carving — made for homes, farm houses and gardens.",
    specs: [
      { label: "Stone Material", value: "Natural Dholpur Sandstone" },
      { label: "Carving Technique", value: "Traditional hand chisel and mallet" },
      { label: "Sizes", value: "Made to order — share your requirement" },
      { label: "Surface Finish", value: "Hand-chiselled and honed" },
    ],
    highlights: [
      "Jali lattice for light and air",
      "Lotus columns and carved plinth",
      "Made in modular pieces for easy installation",
      "Custom size, design and stone colour",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to inquire about a carved sandstone temple mandir.",
  },
  {
    id: "om-jali-lamp",
    name: "Om Jali Lamp",
    subtitle: "Pierced Sandstone Lamp with Om Symbol",
    image: "/stone-articles/om-jali-sandstone-lamp.jpg",
    category: "JALI LAMPS & LANTERNS",
    material: "Natural Dholpur Sandstone",
    desc: "Square sandstone lamp with Om symbol cut-outs and slotted sides that glow softly when lit — for gardens, temple courtyards and entrances.",
    specs: [
      { label: "Stone Material", value: "Natural Dholpur Sandstone" },
      { label: "Carving Technique", value: "Traditional hand chisel and mallet" },
      { label: "Sizes", value: "Made to order — share your requirement" },
      { label: "Surface Finish", value: "Hand-chiselled and honed" },
    ],
    highlights: [
      "Om and floral jali patterns available",
      "Cut-out design glows with an LED lamp",
      "Several stone colours",
      "Custom heights on request",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to inquire about Om jali sandstone lamps.",
  },
  {
    id: "pink-jali-urn-lamp",
    name: "Pink Jali Urn Lamp",
    subtitle: "Pierced Sandstone Urn with Lid",
    image: "/stone-articles/pink-sandstone-jali-urn-lamp.jpg",
    category: "JALI LAMPS & URNS",
    material: "Natural Dholpur Sandstone",
    desc: "Pink sandstone urn with a woven jali pattern and domed lid — made as a decorative lamp or planter piece for lawns and patios.",
    specs: [
      { label: "Stone Material", value: "Natural Dholpur Sandstone" },
      { label: "Carving Technique", value: "Traditional hand chisel and mallet" },
      { label: "Sizes", value: "Made to order — share your requirement" },
      { label: "Surface Finish", value: "Hand-chiselled and honed" },
    ],
    highlights: [
      "Woven jali pattern",
      "Domed lid with finial",
      "Pink sandstone colour",
      "Made to order in different sizes",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to inquire about pink sandstone jali urn lamps.",
  },
  {
    id: "caparisoned-elephant",
    name: "Caparisoned Elephant Statue",
    subtitle: "Ornately Carved Sandstone Elephant on Plinth",
    image: "/stone-articles/carved-sandstone-elephant.jpg",
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
    waMsg: "Hello Dholpurstones.com, I am interested in commissioning Sandstone Elephant Statues for my project.",
  },
  {
    id: "master-heritage-peacock",
    name: "Heritage Filigree Peacock Sculpture",
    subtitle: "Intricate Plumage Filigree in Solid Sandstone",
    image: "/stone-articles/carved-sandstone-peacock-pair.jpg",
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
    waMsg: "Hello Dholpurstones.com, I would like to inquire about the Heritage Filigree Peacock Sandstone Sculpture.",
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
    waMsg: "Hello Dholpurstones.com, I want pricing and production lead time for the Imperial Stone Horse Sculpture.",
  },
  {
    id: "traditional-stone-lantern",
    name: "Traditional Pagoda Garden Lantern",
    subtitle: "Multi-Tiered Ambient Architectural Stone Lantern",
    image: "/garden-stonework/sandstone-lantern-lamp-post-lawn.jpg",
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
    waMsg: "Hello Dholpurstones.com, I would like to order Traditional Pagoda Garden Stone Lanterns.",
  },
  {
    id: "carved-water-fountain",
    name: "Multi-Tier Acanthus Leaf Water Fountain",
    subtitle: "Classical Cascade Fountain with Lotus Basins",
    image: "/garden-stonework/sandstone-bowl-water-fountains.jpg",
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
    waMsg: "Hello Dholpurstones.com, I am inquiring about the Multi-Tier Acanthus Leaf Sandstone Water Fountain.",
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
        image="/assets/garg/hero_peacock_widescreen.jpg"
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
