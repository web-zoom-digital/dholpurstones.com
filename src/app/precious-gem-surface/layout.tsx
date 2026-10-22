import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precious Gem Surfaces – Backlit Gemstone Slabs, Tabletops & Décor",
  description:
    "Exclusive precious gem surfaces — backlit gemstone slabs, tabletops, basins and décor, made to order by Dholpurstones.com.",
  alternates: { canonical: "/precious-gem-surface" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
