import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ContactActions from "@/components/ui/ContactActions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import SubNav from "@/components/ui/SubNav";
import SectionHeader from "@/components/ui/SectionHeader";
import VarietyGrid from "@/components/ui/VarietyGrid";
import Button from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { exoticMarbleVarieties, marbleSubs, semiPreciousSubs, waLink } from "@/data/catalog";
import { marbleFaqs, exportFaqs } from "@/data/faqs";
import { breadcrumbLd, faqLd, itemListLd } from "@/lib/schema";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Exclusive & Imported Marble – Beige, White, Grey, Exotic Marble & Semi-Precious Stones",
  description:
    "All our marble in one place: exclusive beige, white and grey marble, imported exotic marble (Calacatta Viola, Bianco Fire, Golden Michael) and semi-precious stones. — from Dholpurstones.com.",
  keywords: ["exclusive marble", "imported marble India", "white marble", "beige marble", "grey marble", "Statuario marble", "Botticino marble", "semi-precious stones"],
  alternates: { canonical: "/exclusive-imported" },
  openGraph: {
    title: "Exclusive & Imported Marble | Dholpurstones.com",
    description: "Beige, white and grey marble, imported exotic slabs and semi-precious stones.",
    url: "/exclusive-imported",
    images: [{ url: "/assets/garg/luxurious_marble_lobby_vignettes.jpg", width: 1024, height: 576, alt: "Exclusive marble lobby" }],
  },
};

const surfaces = ["bg-ivory", "bg-white", "bg-ivory"];

export default function ExclusiveImportedPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />
      <PageHero
        eyebrow="Marble & Imports"
        title="Exclusive &"
        accent="Imported"
        description="All our marble in one place — beige, white and grey — plus imported exotic slabs and semi-precious stones., sourced and made to order."
        image="/assets/garg/luxurious_marble_lobby_vignettes.jpg"
        crumbs={[{ label: "Products", href: "/products" }, { label: "Exclusive & Imported" }]}
        stats={[
          { value: "3", label: "Marble colours" },
          { value: "37+", label: "White varieties" },
          { value: "Custom", label: "Cut to size" },
        ]}
      >
        <ContactActions cta="Exclusive hero" topic="exclusive / imported marble" size="lg" layout="row" className="sm:justify-start" />
      </PageHero>

      <SubNav
        items={[
          ...marbleSubs.map((m) => ({ id: m.id, label: m.name })),
          { id: "imported-marble", label: "Imported Exotic" },
          { id: "semi-precious", label: "Semi-Precious" },
        ]}
      />

      {marbleSubs.map((m, i) => (
        <section key={m.id} id={m.id} className={`section-y scroll-mt-28 ${surfaces[i % surfaces.length]}`}>
          <div className="container-x">
            <SectionHeader eyebrow={`Exclusive Marble 0${i + 1}`} title={m.name} subtitle={m.note} />
            <VarietyGrid items={m.varieties} kind="marble" />
            {m.id === "white-marble" && (
              <Reveal className="mt-9 flex justify-center">
                <Button href="/exclusive-imported/white-marble" variant="forest" size="lg">
                  See All 37 Exclusive White Marbles
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            )}
          </div>
        </section>
      ))}

      <section id="imported-marble" className="section-y scroll-mt-28 bg-white">
        <div className="container-x">
          <SectionHeader
            eyebrow="Imported"
            title="Exotic Marble"
            subtitle="Dramatic veining and rare colours — Calacatta Viola, Bianco Fire, Golden Michael and more."
          />
          <VarietyGrid items={exoticMarbleVarieties} kind="imported marble" />
        </div>
      </section>

      <section id="semi-precious" className="section-y scroll-mt-28 bg-ivory">
        <div className="container-x">
          <SectionHeader
            eyebrow="Natural Gemstones"
            title="Semi-Precious Stones"
            subtitle="Agate, lapis lazuli, jasper and tiger's eye — slabs and feature panels that glow when backlit."
          />
          <Stagger className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
            {semiPreciousSubs.map((g) => (
              <StaggerItem key={g.id}>
                <Link
                  href="/semi-precious"
                  className="group block overflow-hidden rounded-[1.25rem] border border-black/[0.06] bg-white shadow-[0_8px_26px_-16px_rgba(18,61,50,0.3)] transition-all hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_22px_44px_-18px_rgba(18,61,50,0.35)]"
                >
                  <div className="relative aspect-[10/7] overflow-hidden bg-forest">
                    <Image src={g.image} alt={`${g.name} semi-precious stone`} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
                  </div>
                  <h3 className="px-3.5 py-3 font-heading text-[12.5px] font-bold uppercase tracking-wide text-ink sm:text-[13.5px]">{g.name}</h3>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-9 flex justify-center">
            <Button href="/semi-precious" variant="forest" size="lg">
              View All Semi-Precious Stones
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <FaqSection faqs={[...marbleFaqs, ...exportFaqs]} title="Marble & Ordering Questions" tone="white" />
      <CtaBand title="Get Slab Photos & A Quote" text="Tell us the variety or colour you like — we will share slab photos, availability and pricing." topic="exclusive / imported marble" cta="Exclusive & imported bottom band" />
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Products", path: "/products" }, { name: "Exclusive & Imported", path: "/exclusive-imported" }]),
          itemListLd("Exclusive and imported marble", [...marbleSubs.flatMap((m) => m.varieties), ...exoticMarbleVarieties].map((v) => ({ name: `${v.name} marble`, image: v.image }))),
          faqLd([...marbleFaqs, ...exportFaqs]),
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
