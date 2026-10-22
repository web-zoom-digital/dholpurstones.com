import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ImageCard from "../ui/ImageCard";
import Button from "../ui/Button";
import { Stagger, StaggerItem, Reveal } from "../ui/Reveal";
import { marbleSubs } from "@/data/catalog";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

export default function MarbleSection() {
  return (
    <section id="marble" className="section-y bg-ivory">
      <div className="container-x">
        <SectionHeader
          eyebrow="Interiors & Flooring"
          title="Marble Collection"
          subtitle="Three colour families to choose from — Beige, White and Grey — in slabs and tiles."
        />
        <Stagger className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {marbleSubs.map((m) => (
            <StaggerItem key={m.id}>
              <ImageCard
                href={m.href}
                image={m.image}
                title={m.name}
                note={`${m.note}`}
                badge={`${m.varieties.length} varieties`}
                variant="below"
                aspect="aspect-[4/3]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-9 flex justify-center">
          <Button href="/marble" variant="forest" size="lg">
            View All Marble
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
