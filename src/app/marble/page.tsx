import React from "react";
import type { Metadata } from "next";
import CtaBand from "@/components/ui/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, itemListLd, faqLd } from "@/lib/schema";
import FaqSection from "@/components/FaqSection";
import { marbleFaqs } from "@/data/faqs";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageHero from "@/components/ui/PageHero";
import SubNav from "@/components/ui/SubNav";
import SectionHeader from "@/components/ui/SectionHeader";
import VarietyGrid from "@/components/ui/VarietyGrid";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { marbleSubs, waLink } from "@/data/catalog";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Marble – Beige, White & Grey Marble Slabs and Tiles",
  description:
    "Beige marble, white marble and grey marble in slabs and tiles — Botticino, Elmali Beige, Statuario, Carrara, Pearl White and more, supplied by Dholpurestones.com (Estd. 1953).",
  alternates: { canonical: "/marble" },
  openGraph: {
    title: "Beige, White & Grey Marble",
    description: "Marble slabs and tiles in three colour families, direct from Dholpurestones.com.",
    url: "/marble",
    siteName: "Dholpurestones.com",
  },
};

const surfaces = ["bg-ivory", "bg-white", "bg-ivory"];

export default function MarblePage() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />
      <PageHero
        eyebrow="Interiors & Flooring"
        title="Marble"
        accent="Collection"
        description="Three colour families — Beige, White and Grey — in slabs and tiles for floors, walls, kitchens and feature spaces."
        image="/assets/garg/luxurious_marble_lobby_vignettes.jpg"
        crumbs={[{ label: "Products", href: "/products" }, { label: "Marble" }]}
        stats={[
          { value: "3", label: "Collections" },
          { value: "24", label: "Varieties shown" },
          { value: "Custom", label: "Cut to size" },
        ]}
      >
        <Button href="#beige-marble" variant="gold" size="lg">
          Explore Marble
        </Button>
        <Button
          href={waLink("Hello Dholpurestones.com, I would like a quote for marble.")}
          variant="outline-light"
          size="lg"
        >
          Get a Quote
        </Button>
      </PageHero>

      <SubNav items={marbleSubs.map((m) => ({ id: m.id, label: m.name }))} />

      {marbleSubs.map((m, i) => (
        <section key={m.id} id={m.id} className={`section-y scroll-mt-28 ${surfaces[i % surfaces.length]}`}>
          <div className="container-x">
            <SectionHeader eyebrow={`Collection 0${i + 1}`} title={m.name} subtitle={m.note} />
            <VarietyGrid items={m.varieties} kind="marble" />
            {m.id === "white-marble" && (
              <Reveal className="mt-9 flex justify-center">
                <Button href="/products/white-series-dolphur-color" variant="forest" size="lg">
                  See All 37 White Varieties
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            )}
          </div>
        </section>
      ))}

      <FaqSection faqs={marbleFaqs} title="Marble Questions" tone="white" />
      <CtaBand title="Get Marble Slab Photos & A Quote" text="Tell us the variety or colour you like — we will send slab photos and pricing." topic="marble" cta="Marble bottom band" />
      <JsonLd data={[breadcrumbLd([{ name: "Products", path: "/products" }, { name: "Marble", path: "/marble" }]), itemListLd("Marble collections", marbleSubs.flatMap((m) => m.varieties.map((v) => ({ name: `${v.name} marble`, image: v.image })))), faqLd(marbleFaqs)]} />


      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
