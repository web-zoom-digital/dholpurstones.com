import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ImageCard from "../ui/ImageCard";
import Button from "../ui/Button";
import WhatsAppIcon from "../WhatsAppIcon";
import { Stagger, StaggerItem, Reveal } from "../ui/Reveal";
import { gardenSubs, waLink } from "@/data/catalog";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

/** Dark feature section — our speciality. Only farm house & garden photography. */
export default function GardenSection() {
  return (
    <section
      id="farmhouse-gardens"
      className="relative mx-2 overflow-hidden rounded-[2rem] bg-forest section-y sm:mx-4 sm:rounded-[3rem] bg-stone-grain"
    >
      <div className="container-x relative">
        <SectionHeader
          tone="dark"
          eyebrow="Our Speciality"
          title="Farm House & Garden Stonework"
          subtitle="Everything outdoors, in natural sandstone — from the front gate to the pool deck."
        />
        <Stagger className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {gardenSubs.map((g) => (
            <StaggerItem key={g.id}>
              <ImageCard
                href={g.href}
                image={g.image}
                title={g.name}
                note={g.note}
                aspect="aspect-[4/5] sm:aspect-[4/3]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/farmhouse-gardens" variant="gold" size="lg">
            Explore Farm House &amp; Gardens
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            href={waLink("Hello Dholpurestones.com, I am planning a farm house / garden and need stone options.")}
            variant="outline-light"
            size="lg"
          >
            <WhatsAppIcon className="h-4 w-4 fill-current" size={16} />
            Discuss My Project
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
