import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Marble Series – 37 White Marble Varieties",
  description:
    "Browse 37 white marble varieties — Statuario, Carrara, Arabescato, Calacatta Viola, Bianco Lucca, Ice White and more — from Dholpurestones.com. Message us for slab photos and a quote.",
  keywords: ["white marble", "Statuario marble", "Carrara white marble", "white marble varieties India", "Dholpur marble"],
  alternates: { canonical: "/products/white-series-dolphur-color" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
