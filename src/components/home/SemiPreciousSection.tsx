import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ImageCard from "../ui/ImageCard";
import Button from "../ui/Button";
import EnquiryButton from "../ui/EnquiryButton";
import Carousel from "../ui/Carousel";
import { Reveal } from "../ui/Reveal";
import { semiPreciousSubs } from "@/data/catalog";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

export default function SemiPreciousSection() {
  return (
    <section id="semi-precious" className="section-y bg-white">
      <div className="container-x">
        <SectionHeader
          eyebrow="Natural Gemstone Slabs"
          title="Semi-Precious Stones"
          subtitle="Agate, lapis, jasper and tiger's eye — translucent slabs that glow when backlit."
        />
        <Reveal>
          <Carousel cols="md:grid-cols-3">
            {semiPreciousSubs.map((s) => (
              <ImageCard
                key={s.id}
                href={s.href}
                image={s.image}
                title={s.name}
                note={s.note}
                aspect="aspect-[4/5] md:aspect-[4/3]"
                noteOnMobile
                sizes="(max-width: 768px) 72vw, 33vw"
              />
            ))}
          </Carousel>
        </Reveal>
        <Reveal className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/semi-precious" variant="forest" size="lg">
            View All Semi-Precious
            <ArrowRight className="h-4 w-4" />
          </Button>
          <EnquiryButton variant="outline" size="lg" product="Semi-precious stones" cta="Home semi-precious">Get a Quote</EnquiryButton>
        </Reveal>
      </div>
    </section>
  );
}
