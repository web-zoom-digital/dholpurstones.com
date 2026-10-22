import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ImageCard from "../ui/ImageCard";
import Button from "../ui/Button";
import EnquiryButton from "../ui/EnquiryButton";
import { Stagger, StaggerItem, Reveal } from "../ui/Reveal";
import { sandstoneSubs } from "@/data/catalog";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

export default function SandstoneSection() {
  return (
    <section id="sandstone" className="section-y bg-white">
      <div className="container-x">
        <SectionHeader
          eyebrow="Direct From Our Mines"
          title="Dholpur Sandstone"
          subtitle="Four signature colours, quarried and cut in-house — slabs, tiles, blocks and carved elevations."
        />
        <Stagger className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {sandstoneSubs.map((s) => (
            <StaggerItem key={s.id}>
              <ImageCard
                href={s.href}
                image={s.image}
                title={s.name}
                note={s.note}
                variant="below"
                aspect="aspect-[4/5]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/sandstone" variant="forest" size="lg">
            View Sandstone Range
            <ArrowRight className="h-4 w-4" />
          </Button>
          <EnquiryButton variant="outline" size="lg" product="Dholpur sandstone" cta="Home sandstone">Get a Quote</EnquiryButton>
        </Reveal>
      </div>
    </section>
  );
}
