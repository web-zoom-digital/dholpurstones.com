import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exclusive White Marble – 37 White Marble Varieties",
  description:
    "Browse 37 white marble varieties — Statuario, Carrara, Arabescato, Calacatta Viola, Bianco Lucca, Ice White and more — from Dholpurstones.com. Message us for slab photos and a quote.",
  keywords: ["white marble", "Statuario marble", "Carrara white marble", "white marble varieties India", "Dholpur marble"],
  alternates: { canonical: "/exclusive-imported/white-marble" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
