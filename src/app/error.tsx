"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-ivory px-4 text-center text-ink">
      <div>
        <h1 className="font-heading text-2xl font-bold uppercase tracking-wide sm:text-3xl">Something went wrong</h1>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-muted">Please try again. If it keeps happening, message us on WhatsApp and we will help right away.</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="min-h-[48px] rounded-full bg-forest px-6 py-3 text-[15px] font-bold text-white">Try again</button>
          <Link href="/" className="inline-flex min-h-[48px] items-center rounded-full border border-forest/25 px-6 py-3 text-[15px] font-bold text-forest">Homepage</Link>
        </div>
      </div>
    </main>
  );
}
