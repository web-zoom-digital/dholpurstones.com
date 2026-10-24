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
import ContactActions from "@/components/ui/ContactActions";
import CatalogGrid, { type CatalogItem } from "@/components/catalog/CatalogGrid";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { sandstoneFaqs } from "@/data/faqs";
import { sandstoneSubs } from "@/data/catalog";
import { breadcrumbLd, itemListLd, faqLd } from "@/lib/schema";
import {
  LuMountain as Mountain,
  LuPalette as Palette,
  LuAward as Award,
  LuPackage as Package,
  LuRuler as Ruler,
  LuShieldCheck as ShieldCheck,
} from "react-icons/lu";

/* ─── Sandstone data ───────────────────────────────────────────────────── */
const sandstoneList = [
  {
    id: "agra-red",
    name: "Agra Red Sandstone",
    categoryLabel: "HERITAGE MUGHAL STONE",
    provenance: "Agra & Dholpur Quarry Basin",
    image: "/sandstone/agra-red-sandstone.jpeg",
    images: [
      "/sandstone/agra-red-sandstone.jpeg",
      "/sandstone/dholpur-red-sandstone-2.jpeg",
      "/sandstone/dholpur-red-sandstone-3.jpeg",
      "/sandstone/dholpur-red-sandstone-4.jpeg",
    ],
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
      "Hello Dholpurstones.com, I am inquiring about Agra Red Sandstone for my project.",
  },
  {
    id: "dholpur-pink",
    name: "Dholpur Pink Sandstone",
    categoryLabel: "SACRED TEMPLE STONE",
    provenance: "Bansi Paharpur & Dholpur Mines",
    image: "/sandstone/dholpur-pink-sandstone.jpeg",
    images: [
      "/sandstone/dholpur-pink-sandstone.jpeg",
      "/sandstone/dholpur-pink-sandstone-2.jpeg",
      "/sandstone/dholpur-pink-sandstone-3.jpeg",
      "/sandstone/dholpur-pink-sandstone-4.jpeg",
      "/sandstone/dholpur-pink-sandstone-5.jpeg",
    ],
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
      "Hello Dholpurstones.com, I am inquiring about Dholpur Pink Sandstone for a temple / luxury elevation project.",
  },
  {
    id: "dholpur-beige",
    name: "Dholpur Beige Sandstone",
    categoryLabel: "BUFF CREAM ARCHITECTURAL",
    provenance: "Dholpur Quarry Headquarters",
    image: "/sandstone/dolpur-beige-sandstone.jpeg",
    images: [
      "/sandstone/dolpur-beige-sandstone.jpeg",
      "/sandstone/dolpur-beige-sandstone-2.jpeg",
      "/sandstone/dolpur-beige-sandstone-3.jpeg",
    ],
    color: "Buff Cream & Warm Beige",
    shortDesc:
      "Siliceous buff cream and beige sandstone with subtle natural vein accents. The gold-standard stone for luxury villa elevations, farmhouses, and colonnades.",
    longDesc:
      "Dholpur Beige is the hallmark stone that built the legacy of Dholpurstones.com. Mined from our core quarries in Dholpur, this siliceous buff-cream sandstone embodies understated regal elegance. Its neutral color palette complements both classical neoclassical columns and sleek contemporary minimalist residences. Known for its smooth sawn surface and superior thermal insulation properties, keeping interiors cool during summer.",
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
      "Hello Dholpurstones.com, I am inquiring about Dholpur Beige Sandstone slabs and tiles.",
  },
  {
    id: "dholpur-chocolate",
    name: "Dholpur Chocolate Sandstone",
    categoryLabel: "RICH EARTHY BROWN",
    provenance: "Dholpur Quarry Basin",
    image: "/assets/products/dholpur_chocolate_teakwood.jpeg",
    images: [
      "/assets/products/dholpur_chocolate_teakwood.jpeg",
      "/assets/products/dholpur_chocolate_slabs.jpeg",
      "/assets/products/dholpur_chocolate_tile.jpeg",
    ],
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
      "Hello Dholpurstones.com, I am inquiring about Dholpur Chocolate Sandstone for my project.",
  },
  {
    id: "dholpur-mint",
    name: "Dholpur Mint Sandstone",
    categoryLabel: "LUMINOUS WHITE-MINT QUARTZ",
    provenance: "Dholpur White-Mint Quarry Seam",
    image: "/sandstone/dholpur-mint-sandstone.jpeg",
    images: [
      "/sandstone/dholpur-mint-sandstone.jpeg",
      "/sandstone/dholpur-mint-sandstone-2.jpeg",
      "/sandstone/dholpur-mint-sandstone-3.jpeg",
      "/sandstone/dholpur-mint-sandstone-4.jpeg",
      "/sandstone/mint-sandstone.jpeg",
    ],
    color: "Luminous Mint White & Pale Cream",
    shortDesc:
      "Pristine white-mint quartzitic sandstone with subtle greenish-cream undertones. Renowned for reflective architectural elevations, luxury pool decks, and sun-lit courtyards.",
    longDesc:
      "Dholpur Mint Sandstone is prized for its naturally bright, luminous off-white and delicate mint-cream tones. Mined from specialized fine-grained siliceous beds in Dholpur, it features an exceptionally high Solar Reflectance Index (SRI), keeping exterior wall cladding and outdoor paving pleasantly cool even under peak summer sunlight. Highly dense, uniform in texture, and naturally resistant to fungal staining, it is an international favorite for neoclassical facades, luxury farm house patios, pool coping, and modern stone jalis.",
    specs: [
      { label: "Stone Type", value: "Siliceous Quartzitic Sandstone" },
      { label: "Compressive Strength", value: "96.0 MPa (Dry) / 88.0 MPa (Wet)" },
      { label: "Water Absorption", value: "< 1.10% by weight" },
      { label: "Density", value: "2.60 g/cm³" },
      { label: "Standard Finishes", value: "Natural Split, Sawn, Honed, Shot-Blasted, Bush-Hammered" },
      { label: "Thickness Range", value: "20mm, 25mm, 30mm, 40mm, 50mm, Raw Gangsaw Slabs & Blocks" },
      { label: "Recommended Uses", value: "Front Elevations, Pool Decks, Patios, Jali Screens, Column Cladding" },
    ],
    highlights: [
      "Distinctive luminous white-mint tone with high solar reflectance (SRI)",
      "Extremely low water absorption prevents efflorescence and mildew",
      "Available in honed, sawn, shot-blasted, and natural cleft finishes",
      "Gangsaw calibrated slabs, project tiles, and custom CNC work direct from mines",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Dholpur Mint Sandstone for my project.",
  },
  {
    id: "sandstone-finishes",
    name: "Sandstone Finishes",
    categoryLabel: "FACTORY SURFACE TREATMENTS",
    provenance: "Dholpur Processing & Finishing Unit",
    image: "/sandstone/sandstone-finish.jpeg",
    images: [
      "/sandstone/sandstone-finish.jpeg",
      "/sandstone/sandstone-finish-2.jpeg",
      "/sandstone/sandstone-finish-3.jpeg",
    ],
    color: "Honed, Polished, Fluted, Blasted & Chiseled",
    shortDesc:
      "Comprehensive factory finishes — Honed Matte, Sparkling Polished, Shot-Blasted, Bush-Hammered, Fluted Reeded, Chiseled and Antique Tumbled for bespoke architectural specifications.",
    longDesc:
      "Every architectural design demands an exacting stone surface tactile finish. At Dholpurstones.com, we process all five signature sandstone colours through advanced finishing lines: diamond honing for satin-smooth interior floors, shot-blasting and thermal flame treatments for slip-resistant pool decks, multi-groove CNC fluting for dramatic vertical wall elevations, chiseled rockface for palatial boundary pillars, and antique tumbling for rustic heritage courtyards. Custom sample boards available for architects and specifiers.",
    specs: [
      { label: "Surface Finishes", value: "Honed, Polished, Shot-Blasted, Bush-Hammered, Fluted Reeded, Chiseled, Tumbled" },
      { label: "Slip Resistance", value: "R10 to R13 (Engineered for wet pool surrounds & walkways)" },
      { label: "Processing Technology", value: "Multi-Head Calibrators, Thermal Line, CNC Routers & Shot-Blaster" },
      { label: "Applicable Stones", value: "Agra Red, Dholpur Beige, Dholpur Pink, Dholpur Mint & Chocolate" },
      { label: "Thickness Range", value: "18mm, 20mm, 25mm, 30mm, 40mm, 50mm & Custom Blocks" },
      { label: "Standard Sizes", value: "300x300mm, 600x300mm, 600x600mm, 900x600mm, 1200x600mm" },
      { label: "Recommended Uses", value: "Interior Flooring, Exterior Facades, Pool Decks, Steps, Colonnades" },
    ],
    highlights: [
      "Custom finish sample display boards available for architects & builders",
      "Anti-skid bush-hammered and shot-blasted textures for wet areas",
      "Precision multi-axis CNC linear fluting and grooved elevation finishes",
      "Automated calibration guarantees uniform thickness across all tiles",
    ],
    waMsg:
      "Hello Dholpurstones.com, I am inquiring about Sandstone Finishes and sample boards for my project.",
  },
];


const items: CatalogItem[] = sandstoneList.map((s) => ({
  id: s.id,
  name: s.name,
  badge: s.categoryLabel,
  meta: s.provenance,
  subtitle: s.color,
  image: s.image,
  images: (s as any).images || [s.image],
  desc: s.longDesc,
  specs: s.specs,
  highlights: s.highlights,
  waMsg: s.waMsg,
}));

const advantages = [
  { icon: Mountain, title: "Direct Quarry Control", desc: "Our own quarries in Dholpur mean consistent colour and no trader margin." },
  { icon: Ruler, title: "Cut To Your Size", desc: "Slabs, tiles, blocks, CNC profiles and carved work — calibrated in-house." },
  { icon: Package, title: "Safe Packing & Export", desc: "Protective wooden crating for road and sea shipments worldwide." },
];

export default function SandstonePage() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />
      <PageHero
        eyebrow="Mine To Site"
        title="Dholpur"
        accent="Sandstone"
        description="Five signature colours — Agra Red, Dholpur Beige, Dholpur Pink, Dholpur Chocolate and Dholpur Mint — plus specialized architectural finishes, quarried from our own mines in Dholpur, Rajasthan."
        image="/sandstone/agra-red-sandstone.jpeg"
        crumbs={[{ label: "Products", href: "/products" }, { label: "Sandstone" }]}
      >
        <ContactActions cta="Sandstone hero" topic="Dholpur sandstone" size="lg" layout="row" className="sm:justify-start" />
      </PageHero>

      <FeatureStrip
        items={[
          { icon: Palette, title: "5 Colours", text: "Red, beige, pink, chocolate & mint" },
          { icon: Award, title: "300+ Designs", text: "Govt. of India awarded" },
          { icon: Mountain, title: "Own Mines", text: "Quarried at source since 1953" },
          { icon: ShieldCheck, title: "100% Natural", text: "Dense, durable, weather resistant" },
        ]}
      />

      <section id="varieties" className="section-y relative overflow-hidden bg-ivory pattern-dots">
        <div className="container-x relative">
          <SectionHeader
            eyebrow="Quarry-Direct Inventory"
            title="Our Sandstone Colours & Finishes"
            subtitle="Tap any colour or finish for specifications — then explore high-resolution photos in the full-screen slider, or message us on WhatsApp for samples and factory pricing."
          />
          <CatalogGrid items={items} ctaPrefix="Sandstone" cols="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </section>

      <section className="section-y relative overflow-hidden bg-forest bg-stone-grain pattern-jali">
        <div className="container-x relative">
          <SectionHeader
            tone="dark"
            eyebrow="The Advantage"
            title="Mining, Cutting & Export — One Roof"
            subtitle="We control extraction, sawing, calibration, carving and crating end-to-end."
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
                    <h3 className="mt-4 font-heading text-[15px] font-bold uppercase tracking-wide text-white">{a.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-white/70">{a.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <FaqSection faqs={sandstoneFaqs} title="Sandstone Questions" tone="white" />
      <CtaBand title="Get Dholpur Sandstone For Your Project" text="Tell us the colour, size and quantity — we quote directly from the mine." topic="Dholpur sandstone" cta="Sandstone bottom band" />
      <JsonLd data={[breadcrumbLd([{ name: "Products", path: "/products" }, { name: "Sandstone", path: "/sandstone" }]), itemListLd("Dholpur sandstone colours", sandstoneSubs.map((s) => ({ name: `${s.name} Sandstone`, description: s.note, image: s.image, path: s.href }))), faqLd(sandstoneFaqs)]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
