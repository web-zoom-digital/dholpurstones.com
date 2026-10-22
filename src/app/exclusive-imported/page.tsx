import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageHero from "@/components/ui/PageHero";
import SubNav from "@/components/ui/SubNav";
import SectionHeader from "@/components/ui/SectionHeader";
import VarietyGrid from "@/components/ui/VarietyGrid";
import Button from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { exoticMarbleVarieties, waLink } from "@/data/catalog";
import { preciousGemProducts } from "@/data/preciousGemData";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Exclusive & Imported Stones – Precious Gem Surfaces & Exotic Marble",
  description:
    "Exclusive imported exotic marbles and precious gem surfaces — Calacatta Viola, Bianco Fire, Golden Michael, backlit gemstone slabs and more, made to order by Dholpurestones.com.",
  alternates: { canonical: "https://dholpurestones.com/exclusive-imported" },
};

const gems = preciousGemProducts.slice(0, 8);

export default function ExclusiveImportedPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />
      <PageHero
        eyebrow="By Request"
        title="Exclusive &"
        accent="Imported"
        description="Rare imported marbles and precious gem surfaces for statement spaces — sourced and made to order."
        image="/white-series-dolphur-color/calacatta-viola.png"
        crumbs={[{ label: "Products", href: "/products" }, { label: "Exclusive & Imported" }]}
      >
        <Button href="#imported-marble" variant="gold" size="lg">
          Imported Marble
        </Button>
        <Button href="#gem-surfaces" variant="outline-light" size="lg">
          Gem Surfaces
        </Button>
      </PageHero>

      <SubNav
        items={[
          { id: "imported-marble", label: "Imported Exotic Marble" },
          { id: "gem-surfaces", label: "Precious Gem Surfaces" },
        ]}
      />

      <section id="imported-marble" className="section-y scroll-mt-28 bg-ivory">
        <div className="container-x">
          <SectionHeader
            eyebrow="Imported"
            title="Exotic Marble"
            subtitle="Dramatic veining and rare colours — Calacatta Viola, Bianco Fire, Golden Michael and more."
          />
          <VarietyGrid items={exoticMarbleVarieties} kind="imported marble" />
        </div>
      </section>

      <section id="gem-surfaces" className="section-y scroll-mt-28 bg-white">
        <div className="container-x">
          <SectionHeader
            eyebrow="Exclusive"
            title="Precious Gem Surfaces"
            subtitle="Backlit gemstone slabs, tabletops, basins and décor — each piece crafted to order."
          />
          <Stagger className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {gems.map((g) => (
              <StaggerItem key={g.id}>
                <Link
                  href="/precious-gem-surface"
                  className="group block overflow-hidden rounded-[1.25rem] border border-black/[0.06] bg-white shadow-[0_8px_26px_-16px_rgba(18,61,50,0.3)] transition-all hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_22px_44px_-18px_rgba(18,61,50,0.35)]"
                >
                  <div className="relative aspect-[10/7] overflow-hidden bg-forest">
                    <Image
                      src={g.coverImage}
                      alt={g.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <h3 className="px-3.5 py-3 font-heading text-[12.5px] font-bold uppercase tracking-wide text-ink sm:text-[13.5px]">
                    {g.name}
                  </h3>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-9 flex justify-center">
            <Button href="/precious-gem-surface" variant="forest" size="lg">
              View All {preciousGemProducts.length} Gem Surfaces
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="mx-2 mb-2 rounded-[2rem] bg-forest section-y bg-stone-grain sm:mx-4 sm:mb-4 sm:rounded-[3rem]">
        <div className="container-x text-center">
          <SectionHeader
            tone="dark"
            eyebrow="Made To Order"
            title="Tell Us What You Need"
            subtitle="Share your size, colour and finish — we will source it and send photos and a quote."
          />
          <Reveal className="flex justify-center">
            <Button
              href={waLink("Hello Dholpurestones.com, I would like to enquire about exclusive / imported stones.")}
              variant="whatsapp"
              size="lg"
            >
              Chat on WhatsApp
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
