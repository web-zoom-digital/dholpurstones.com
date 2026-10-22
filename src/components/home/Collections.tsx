import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ImageCard from "../ui/ImageCard";
import { Stagger, StaggerItem } from "../ui/Reveal";
import { categories } from "@/data/catalog";

/** Top-level categories — the map of the whole business. */
export default function Collections() {
  return (
    <section id="collections" className="section-y relative overflow-hidden bg-ivory pattern-dots">
      <div className="container-x">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Stone Collections"
          subtitle="From our own Dholpur mines to imported marble and hand-carved art — pick a collection to explore."
        />
        <Stagger className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <StaggerItem
              key={cat.id}
              className={`${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${
                i === categories.length - 1 && categories.length % 2 === 1 ? "col-span-2" : ""
              }`}
            >
              <ImageCard
                href={cat.href}
                image={cat.image}
                title={cat.name}
                note={cat.blurb}
                badge={cat.badge}
                aspect="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/3]"
                priority={i < 2}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
