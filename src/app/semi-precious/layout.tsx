import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semi-Precious Stones – Agate, Lapis Lazuli, Jasper & Tiger's Eye Slabs",
  description:
    "Natural semi-precious stone slabs and feature panels — blue agate, lapis lazuli, tiger's eye, green agate, fire agate and red jasper — from Dholpurestones.com.",
  alternates: { canonical: "/semi-precious" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
