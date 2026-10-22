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
import { semiPreciousFaqs } from "@/data/faqs";
import { semiPreciousSubs } from "@/data/catalog";
import { breadcrumbLd, itemListLd, faqLd } from "@/lib/schema";
import {
  LuGem as Gem,
  LuShieldCheck as ShieldCheck,
  LuLightbulb as Light,
  LuScissors as Cut,
  LuSofa as Sofa,
  LuWine as Bar,
  LuBath as Bath,
  LuStore as Store,
  LuBuilding2 as Building,
  LuFrame as Frame,
} from "react-icons/lu";

/* ─── Semi-precious stone data ─────────────────────────────────────────── */
const stones = [
  {
    id: "blue-agate",
    name: "Royal Blue Agate",
    subtitle: "Translucent Backlit Feature Slabs",
    image: "/semi-precious/blue-agate.jpeg",
    category: "AGATE GEMSTONE",
    color: "Deep Celestial Blue",
    desc: "Rare hand-assembled natural agate gemstone slabs radiating brilliant oceanic blue hues. When illuminated from behind, concentric mineral bands create an ethereal glow — ideal for luxury backlit bar counters, statement reception walls, and premium hospitality installations.",
    specs: [
      { label: "Stone Type", value: "Natural Blue Agate (Chalcedony)" },
      { label: "Finish", value: "Mirror Polished, Epoxy-Fused Gemstone Matrix" },
      { label: "Thickness", value: "15mm–20mm Translucent Slabs" },
      { label: "Applications", value: "Backlit Walls, Bar Counters, VIP Lounges" },
      { label: "Luminosity", value: "High Translucency for Ambient Backlighting" },
    ],
    highlights: [
      "Natural mineral banding — no two slabs identical",
      "Crystal-clear epoxy matrix for seamless presentation",
      "Superior luminosity under warm LED backlighting",
      "Suitable for vertical feature installations",
    ],
    waMsg: "Hello Dholpurstones.com, I am interested in Royal Blue Agate backlit slabs for my luxury project.",
  },
  {
    id: "black-agate",
    name: "Black Agate",
    subtitle: "Bold Monolithic Gemstone Statement Pieces",
    image: "/semi-precious/black-agate.jpeg",
    category: "AGATE GEMSTONE",
    color: "Obsidian Black",
    desc: "Striking deep black agate with dramatic white banding and natural mineral inclusions. An architectural marvel for premium reception desk fronts, executive boardroom feature walls, luxury bathroom vanities, and high-end retail interiors.",
    specs: [
      { label: "Stone Type", value: "Natural Black Agate (Banded Chalcedony)" },
      { label: "Finish", value: "High Mirror Polish, Epoxy Resin Stabilized" },
      { label: "Thickness", value: "15mm–20mm Custom Slabs" },
      { label: "Applications", value: "Reception Desks, Feature Walls, Vanity Tops" },
      { label: "Pattern", value: "Natural White Banding on Jet Black Matrix" },
    ],
    highlights: [
      "Dramatic contrast of pure black with natural white veining",
      "High compression strength for structural installations",
      "Unique mineral inclusions in every slab — exclusive origin",
      "Polished to a flawless gemstone mirror surface",
    ],
    waMsg: "Hello Dholpurstones.com, I would like pricing for Black Agate gemstone slabs.",
  },
  {
    id: "fire-agate",
    name: "Fire Agate",
    subtitle: "Iridescent Flame-Patterned Gemstone Slabs",
    image: "/semi-precious/fire-agate.jpeg",
    category: "AGATE GEMSTONE",
    color: "Crimson, Amber & Saffron",
    desc: "Dramatic fire-patterned natural agate with iridescent amber, crimson and saffron flame-like striations. Exceptionally rare gemstone material for luxury fireplace surrounds, statement kitchen islands, VIP hospitality feature walls, and collectible luxury installations.",
    specs: [
      { label: "Stone Type", value: "Natural Fire Agate (Iridescent Chalcedony)" },
      { label: "Finish", value: "Gemstone Mirror Polish, High-Clarity Epoxy" },
      { label: "Thickness", value: "15mm–20mm Bespoke Slabs" },
      { label: "Applications", value: "Fireplace Surrounds, Kitchen Islands, Art Walls" },
      { label: "Color Range", value: "Crimson, Amber, Saffron, Deep Orange Striations" },
    ],
    highlights: [
      "Exceptionally rare iridescent flame striations",
      "No two slabs share the same fire pattern",
      "Creates a natural warmth — perfect near fireplaces",
      "Mineral-rich gemstone core stabilized in crystal resin",
    ],
    waMsg: "Hello Dholpurstones.com, I am inquiring about Fire Agate gemstone slabs for a luxury project.",
  },
  {
    id: "green-agate",
    name: "Green Agate",
    subtitle: "Lush Botanical Gemstone Surface Panels",
    image: "/semi-precious/green-agate.jpeg",
    category: "AGATE GEMSTONE",
    color: "Forest & Jade Green",
    desc: "Lush jade-toned natural green agate with translucent leaf-like banding. Brings organic serenity to wellness spas, luxury residential bathrooms, meditation rooms, corporate reception walls, and biophilic hospitality design installations.",
    specs: [
      { label: "Stone Type", value: "Natural Green Agate (Forest Chalcedony)" },
      { label: "Finish", value: "Polished Mirror, Epoxy Gemstone Matrix" },
      { label: "Thickness", value: "15mm–20mm Translucent Slabs" },
      { label: "Applications", value: "Spa Walls, Wellness Rooms, Lobby Feature Panels" },
      { label: "Tone Variation", value: "Pale Sage to Deep Forest Green Banding" },
    ],
    highlights: [
      "Promotes biophilic serenity in wellness environments",
      "Translucent structure ideal for green-hued backlighting",
      "Natural jade-like mineral texture — zero artificial coloring",
      "Available in sequential matched slabs for seamless book-match",
    ],
    waMsg: "Hello Dholpurstones.com, I need Green Agate panels for a wellness spa installation.",
  },
  {
    id: "lapis-lazuli",
    name: "Lapis Lazuli",
    subtitle: "Royal Celestial Blue Pietra Dura Stone",
    image: "/semi-precious/lapis-lazuli.jpeg",
    category: "LAPIS LAZULI",
    color: "Celestial Royal Blue with Gold Pyrite",
    desc: "Authentic deep celestial-blue lapis lazuli with natural gold pyrite flecks — the gemstone of pharaohs and Mughal emperors. Used in Pietra Dura inlay art, royal jewellery, luxury interior accents, decorative mosaic panels, and prestigious architectural commissions.",
    specs: [
      { label: "Stone Type", value: "Natural Lapis Lazuli (Metamorphic Gem)" },
      { label: "Finish", value: "High Mirror Polish, Raw Sculptural Surface" },
      { label: "Thickness", value: "10mm–25mm Tiles, Medallions & Slabs" },
      { label: "Applications", value: "Pietra Dura Inlay, Decorative Panels, Jewelry" },
      { label: "Origin", value: "Royal Blue Matrix with Natural Gold Pyrite Veins" },
    ],
    highlights: [
      "Natural gold pyrite constellation — impossible to replicate artificially",
      "Used historically in Mughal Taj Mahal Pietra Dura art",
      "Intense royal blue hue from lazurite mineral composition",
      "Cut and supplied as tiles, medallions, slabs and custom shapes",
    ],
    waMsg: "Hello Dholpurstones.com, I would like to know more about Lapis Lazuli for Pietra Dura or architectural panels.",
  },
  {
    id: "line-agate",
    name: "Line Agate",
    subtitle: "Geometric Banded Mineral Mosaic Slabs",
    image: "/semi-precious/line-agate.jpeg",
    category: "AGATE GEMSTONE",
    color: "Beige, Ivory & Earth Tones",
    desc: "Elegant naturally-banded line agate with precise parallel mineral striations in warm beige, ivory, and earthy tones. Ideal for neutral luxury interiors, contemporary hospitality spaces, understated premium walls, and sophisticated product display plinths.",
    specs: [
      { label: "Stone Type", value: "Natural Banded Line Agate (Striped Chalcedony)" },
      { label: "Finish", value: "Polished Mirror, Epoxy Gemstone Fusion" },
      { label: "Thickness", value: "15mm–20mm Slabs" },
      { label: "Applications", value: "Neutral Feature Walls, Luxury Counters, Plinths" },
      { label: "Pattern Style", value: "Precise Parallel Striations in Earth Tones" },
    ],
    highlights: [
      "Precisely parallel banding for a clean, architectural aesthetic",
      "Warm neutral palette suits contemporary and classic interiors",
      "Excellent book-match capability for symmetrical installations",
      "Beautifully translucent under warm ambient lighting",
    ],
    waMsg: "Hello Dholpurstones.com, I am interested in Line Agate gemstone slabs for interior design.",
  },
  {
    id: "natural-agate",
    name: "Natural Agate",
    subtitle: "Organic Multi-Tone Crystal Formation Slabs",
    image: "/semi-precious/natural-agate.jpeg",
    category: "AGATE GEMSTONE",
    color: "Multi-Tone Natural Earth",
    desc: "Genuine natural agate with organic multi-tonal crystalline concentric formations capturing earth's geological palette of whites, creams, greys and ambers. Perfect for exclusive art wall installations, geological interior collections, luxury stone galleries, and bespoke collectors' commissions.",
    specs: [
      { label: "Stone Type", value: "Natural Agate (Multi-Tone Chalcedony Geode)" },
      { label: "Finish", value: "Mirror Polished with Preserved Natural Edges" },
      { label: "Thickness", value: "15mm–25mm Natural Form & Cut Slabs" },
      { label: "Applications", value: "Art Walls, Collector Displays, Luxury Interiors" },
      { label: "Pattern", value: "Organic Concentric Multi-Tone Crystal Rings" },
    ],
    highlights: [
      "Authentic geological specimen — each piece a natural work of art",
      "Concentric crystal rings capture geological time",
      "Available with natural geode edges preserved for art display",
      "Unique collector-grade pieces with certification of origin",
    ],
    waMsg: "Hello Dholpurstones.com, I am looking for Natural Agate slabs for a luxury interior art installation.",
  },
  {
    id: "red-jasper",
    name: "Red Jasper",
    subtitle: "Warm Terracotta Gemstone Surface Stone",
    image: "/semi-precious/red-jasper.jpeg",
    category: "JASPER GEMSTONE",
    color: "Deep Terracotta Red",
    desc: "Rich opaque deep terracotta-red natural jasper with subtle mineral grain patterning. A powerful stone for accent cladding panels, decorative countertops, wellness spaces, luxury retail environments, and bold architectural feature applications.",
    specs: [
      { label: "Stone Type", value: "Natural Red Jasper (Opaque Microcrystalline Quartz)" },
      { label: "Finish", value: "Gloss Mirror Polish, Smooth Honed" },
      { label: "Thickness", value: "15mm–25mm Calibrated Slabs & Tiles" },
      { label: "Applications", value: "Feature Cladding, Countertops, Retail Interiors" },
      { label: "Colour", value: "Deep Terracotta to Brick Red, Uniform Density" },
    ],
    highlights: [
      "Uniform opaque red tone — no translucency required",
      "Excellent hardness (6.5–7 Mohs) for durable surface applications",
      "Works beautifully as a strong accent beside neutral marbles",
      "Available polished, honed or raw textured finishes",
    ],
    waMsg: "Hello Dholpurstones.com, I need Red Jasper gemstone tiles or slabs for a commercial project.",
  },
  {
    id: "tiger-eyes",
    name: "Tiger's Eye",
    subtitle: "Chatoyant Golden Silk-Flash Gemstone Panels",
    image: "/semi-precious/tiger-eyes.jpeg",
    category: "TIGER'S EYE",
    color: "Golden Brown with Silk Chatoyancy",
    desc: "Mesmerizing natural tiger's eye gemstone with captivating golden-brown chatoyant silk-flash — a living light phenomenon that shifts with movement. Extraordinary for luxury elevator interiors, high-end hotel lobby walls, VIP private jet cabins, and prestige retail brand flagship stores.",
    specs: [
      { label: "Stone Type", value: "Natural Tiger's Eye (Chatoyant Quartz Fibre)" },
      { label: "Finish", value: "Gemstone Mirror Polish for Maximum Chatoyancy" },
      { label: "Thickness", value: "15mm–20mm Polished Slabs" },
      { label: "Applications", value: "Elevator Interiors, Hotel Lobbies, VIP Cabins" },
      { label: "Effect", value: "Golden Silk-Flash Chatoyancy under Moving Light" },
    ],
    highlights: [
      "Rare natural chatoyancy — golden light shifts with viewer angle",
      "High polishing essential to reveal full silky optical effect",
      "Available in directional orientation for maximum impact",
      "Exceptional for luxury brand flagship store interiors",
    ],
    waMsg: "Hello Dholpurstones.com, I want to inquire about Tiger's Eye gemstone panels for a luxury space.",
  },
];


const items: CatalogItem[] = stones.map((s) => ({
  id: s.id,
  name: s.name,
  badge: s.category,
  meta: s.color,
  subtitle: s.subtitle,
  image: s.image,
  desc: s.desc,
  specs: s.specs,
  highlights: s.highlights,
  waMsg: s.waMsg,
}));

const useCases = [
  { icon: Sofa, title: "Feature Walls", desc: "A glowing backdrop behind a sofa, bed or reception." },
  { icon: Bar, title: "Bars & Counters", desc: "Backlit bar fronts and counter tops that stop conversations." },
  { icon: Frame, title: "Tabletops & Décor", desc: "Dining, console and coffee tables made from a single slab." },
  { icon: Bath, title: "Wash Basins & Vanities", desc: "Statement basins and vanity tops for luxury bathrooms." },
  { icon: Store, title: "Retail & Showrooms", desc: "Eye-catching display walls and counters for brands." },
  { icon: Building, title: "Hotels & Lounges", desc: "VIP lounge and lobby installations with ambient lighting." },
];

export default function SemiPreciousPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />
      <PageHero
        eyebrow="Natural Gemstone Slabs"
        title="Semi-Precious"
        accent="Stones"
        description="Agate, lapis lazuli, jasper and tiger's eye — translucent slabs and feature panels that glow when backlit."
        image="/semi-precious/blue-agate.jpeg"
        crumbs={[{ label: "Products", href: "/products" }, { label: "Semi-Precious Stones" }]}
      >
        <ContactActions cta="Semi-precious hero" topic="semi-precious stone slabs" size="lg" layout="row" className="sm:justify-start" />
      </PageHero>

      <FeatureStrip
        items={[
          { icon: Gem, title: "9 Gemstones", text: "Agate, lapis, jasper, tiger's eye" },
          { icon: ShieldCheck, title: "100% Natural", text: "No synthetic or dyed stones" },
          { icon: Light, title: "Backlit Ready", text: "High translucency for LED" },
          { icon: Cut, title: "Cut To Size", text: "Custom panels and finishes" },
        ]}
      />

      <section id="collection" className="section-y relative overflow-hidden bg-ivory pattern-dots">
        <div className="container-x relative">
          <SectionHeader
            eyebrow="The Collection"
            title="Gemstone Slabs"
            subtitle="Tap a stone for details — then enquire, WhatsApp or call us for slab photos and pricing."
          />
          <CatalogGrid items={items} ctaPrefix="Semi-precious" />
        </div>
      </section>

      <section className="section-y relative overflow-hidden bg-forest bg-stone-grain pattern-jali">
        <div className="container-x relative">
          <SectionHeader tone="dark" eyebrow="Design Ideas" title="Where Gemstones Shine" subtitle="Small areas, big impact." />
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

      <FaqSection faqs={semiPreciousFaqs} title="Semi-Precious Questions" tone="white" />
      <CtaBand title="Add Gemstone Glamour To Your Space" text="Share your size and stone choice for a quote." topic="semi-precious stone slabs" cta="Semi-precious bottom band" />
      <JsonLd data={[breadcrumbLd([{ name: "Products", path: "/products" }, { name: "Semi-Precious Stones", path: "/semi-precious" }]), itemListLd("Semi-precious stone slabs", semiPreciousSubs.map((s) => ({ name: s.name, description: s.note, image: s.image }))), faqLd(semiPreciousFaqs)]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
