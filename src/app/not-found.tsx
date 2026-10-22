import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { categories } from "@/data/catalog";

export const metadata = { title: "Page Not Found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <section className="section-y">
        <div className="container-x text-center">
          <p className="font-heading text-6xl font-bold text-gold sm:text-8xl">404</p>
          <h1 className="mt-4 font-heading text-2xl font-bold uppercase tracking-wide sm:text-4xl">This page has moved or does not exist</h1>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-muted sm:text-base">
            Try one of our collections below, or contact us and we will help you find what you need.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" variant="forest" size="lg">Go to Homepage</Button>
            <Button href="/contact" variant="outline" size="lg">Contact Us</Button>
          </div>
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {categories.map((c) => (
              <li key={c.id}>
                <Link href={c.href} className="inline-block rounded-full border border-forest/15 bg-white px-4 py-2 text-[13px] font-semibold text-forest transition-colors hover:border-gold hover:bg-gold/20">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
