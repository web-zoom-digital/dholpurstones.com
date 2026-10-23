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
import { semiPreciousStones } from "@/data/semiPreciousData";
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

/* ─── Semi-precious stone collection (50+ varieties) ─────────────────── */
const items: CatalogItem[] = semiPreciousStones.map((s) => ({
  id: s.id,
  name: s.name,
  badge: s.category,
  categoryGroup: s.filterCategory,
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
          { icon: Gem, title: "50+ Gemstones", text: "Agate, quartz, lapis, jasper, MOP" },
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
          <CatalogGrid items={items} ctaPrefix="Semi-precious" filterCategories={["Agate", "Quartz & Crystals", "Exotic Stones", "Tiger's Eye & Jasper", "Mother of Pearl"]} />
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
      <JsonLd data={[breadcrumbLd([{ name: "Products", path: "/products" }, { name: "Semi-Precious Stones", path: "/semi-precious" }]), itemListLd("Semi-precious stone slabs", semiPreciousStones.map((s) => ({ name: s.name, description: s.subtitle, image: s.image }))), faqLd(semiPreciousFaqs)]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
