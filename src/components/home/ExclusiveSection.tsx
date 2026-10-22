import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { exoticMarbleVarieties } from "@/data/catalog";
import { preciousGemProducts } from "@/data/preciousGemData";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

const gemThumbs = ["malachite", "lapiz-lazuli", "labradorite"]
  .map((id) => preciousGemProducts.find((p) => p.id === id))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const cards = [
  {
    id: "gem",
    href: "/precious-gem-surface",
    title: "Precious Gem Surfaces",
    note: "Backlit gemstone slabs, tabletops, basins and décor — each piece made to order.",
    image: "/precious-gem-surface/page_062_BLACK_OBSIDIAN_image_02.jpeg",
    thumbs: gemThumbs.map((g) => ({ name: g.name, image: g.coverImage })),
    cta: "Explore Gem Surfaces",
  },
  {
    id: "marble",
    href: "/exclusive-imported#imported-marble",
    title: "Imported Exotic Marble",
    note: "Rare imported slabs — Calacatta Viola, Bianco Fire, Golden Michael and more.",
    image: "/white-series-dolphur-color/calacatta-viola.png",
    thumbs: exoticMarbleVarieties.slice(1, 4),
    cta: "Explore Imported Marble",
  },
];

export default function ExclusiveSection() {
  return (
    <section
      id="exclusive-imported"
      className="relative mx-2 overflow-hidden rounded-[2rem] bg-forest-deep section-y sm:mx-4 sm:rounded-[3rem] bg-stone-grain"
    >
      <div className="container-x relative">
        <SectionHeader
          tone="dark"
          eyebrow="By Request"
          title="Exclusive & Imported"
          subtitle="One-of-a-kind surfaces sourced from around the world for statement spaces."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.1}>
              <Link
                href={c.href}
                className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05] backdrop-blur transition-colors hover:border-gold/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{c.note}</p>
                  <div className="mt-4 flex gap-2">
                    {c.thumbs.map((t) => (
                      <span
                        key={t.name}
                        className="relative h-14 flex-1 overflow-hidden rounded-xl border border-white/15"
                        title={t.name}
                      >
                        <Image src={t.image} alt={t.name} fill sizes="120px" className="object-cover" />
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">
                    {c.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
