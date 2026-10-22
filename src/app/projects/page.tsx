import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CtaBand from "@/components/ui/CtaBand";
import EnquiryButton from "@/components/ui/EnquiryButton";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import CountUp from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/catalog";
import { breadcrumbLd, plainListLd, webPageLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Landmark Stone Projects – Parliament House, Akshardham, AIIMS & Embassies",
  description:
    "Natural stone supplied and crafted for Parliament House and Akshardham in New Delhi, Adani House, AIIMS Bhopal, Indian Embassies in Berlin and Kathmandu, and 50+ ISKCON temples — by Dholpurstones.com (Estd. 1953).",
  keywords: ["Dholpur stone projects", "sandstone contractor India", "Parliament House sandstone", "Akshardham stone supplier", "temple stone supplier India"],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Landmark Stone Projects | Dholpurstones.com",
    description: "Parliament House, Akshardham, AIIMS, Indian Embassies and 50+ ISKCON temples — stone by Dholpurstones.",
    url: "/projects",
    images: [{ url: "/assets/project-parliament.jpg", width: 1376, height: 768, alt: "Parliament House New Delhi — sandstone by Dholpurstones" }],
  },
};

const stats = [
  { value: 10, suffix: "", label: "Landmark projects" },
  { value: 50, suffix: "+", label: "ISKCON temples" },
  { value: 3, suffix: "", label: "Countries" },
  { value: 70, suffix: "+", label: "Years of trust" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />
      <PageHero
        eyebrow="Our Track Record"
        title="Landmark"
        accent="Projects"
        description="Parliament, temples, embassies, hospitals and estates — natural stone supplied and crafted by Dholpurstones for India's most visible buildings."
        image="/assets/project-parliament.jpg"
        crumbs={[{ label: "Projects" }]}
      >
        <EnquiryButton variant="gold" size="lg" cta="Projects hero" product="A landmark / institutional project">
          Discuss Your Project
        </EnquiryButton>
      </PageHero>

      <div className="container-x relative z-10 -mt-8">
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-gold/25 bg-gold/20 shadow-[0_24px_50px_-24px_rgba(11,42,34,0.5)] lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-4 py-5 text-center">
              <p className="font-heading text-3xl font-bold text-forest">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[13px] font-semibold text-muted">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>

      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            eyebrow="Portfolio"
            title="Where Our Stone Stands"
            subtitle="Filter by type to see government, spiritual, corporate, diplomatic and residential work."
          />
          <ProjectsGrid />
        </div>
      </section>

      <CtaBand
        title="Planning A Landmark Project?"
        text="Speak directly with Mr. Arvind Garg's team for turnkey stone supply, samples and engineering support."
        topic="a landmark / institutional stone project"
        cta="Projects bottom band"
      />

      <JsonLd
        data={[
          webPageLd({ name: "Landmark Stone Projects", description: "Portfolio of landmark natural stone projects by Dholpurstones.com", path: "/projects", type: "CollectionPage" }),
          breadcrumbLd([{ name: "Projects", path: "/projects" }]),
          plainListLd("Landmark projects executed by Dholpurstones.com", projects.map((p) => ({ name: `${p.name}, ${p.place}`, description: p.scope, image: p.image }))),
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
