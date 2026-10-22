import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ImageCard from "../ui/ImageCard";
import Button from "../ui/Button";
import EnquiryButton from "../ui/EnquiryButton";
import Carousel from "../ui/Carousel";
import { Reveal } from "../ui/Reveal";
import { articleSubs } from "@/data/catalog";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

/** Only hand-crafted items — sculptures, lanterns, fountains, reliefs. */
export default function ArticlesSection() {
  return (
    <section id="stone-articles" className="section-y relative overflow-hidden bg-ivory pattern-dots">
      <div className="container-x">
        <SectionHeader
          eyebrow="Hand Crafted In Sikandra"
          title="Sandstone Articles"
          subtitle="Sculptures and garden pieces carved by hereditary master artisans — made to your size and design."
        />
        <Reveal>
          <Carousel cols="md:grid-cols-3">
            {articleSubs.map((a) => (
              <ImageCard
                key={a.id}
                href={a.href}
                image={a.image}
                title={a.name}
                note={a.note}
                aspect="aspect-[4/5]"
                noteOnMobile
                sizes="(max-width: 768px) 72vw, 33vw"
              />
            ))}
          </Carousel>
        </Reveal>
        <Reveal className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/articles" variant="forest" size="lg">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Button>
          <EnquiryButton variant="outline" size="lg" product="Hand-carved stone article" cta="Home articles">Get a Quote</EnquiryButton>
        </Reveal>
      </div>
    </section>
  );
}
