import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dholpur Sandstone – Agra Red, Beige, Pink & Chocolate",
  description:
    "Mine-direct Dholpur sandstone in four signature colours — Agra Red, Dholpur Beige, Dholpur Pink and Dholpur Chocolate — as slabs, tiles, blocks and carved elevations from Dholpurstones.com (Estd. 1953).",
  alternates: { canonical: "/sandstone" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
