import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/ui/CtaBand";
import Button from "@/components/ui/Button";
import EnquiryButton from "@/components/ui/EnquiryButton";
import { Reveal } from "@/components/ui/Reveal";
import { ALL_BLOG_POSTS, getBlogPostBySlug } from "@/data/blogData";
import { waLink } from "@/data/catalog";
import { breadcrumbLd, faqLd } from "@/lib/schema";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import {
  LuCalendar as Calendar,
  LuClock as Clock,
  LuCircleCheck as Check,
  LuLightbulb as Lightbulb,
  LuChevronRight as ChevronRight,
  LuHouse as HomeIcon,
} from "react-icons/lu";

export function generateStaticParams() {
  return ALL_BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  const iso = new Date(post.publishedDate).toISOString();
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: iso,
      modifiedTime: new Date(post.lastUpdated).toISOString(),
      authors: [post.author.name],
      images: [{ url: post.featuredImage, width: 1200, height: 675, alt: post.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.featuredImage] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = ALL_BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.featuredImage),
    datePublished: new Date(post.publishedDate).toISOString(),
    dateModified: new Date(post.lastUpdated).toISOString(),
    inLanguage: "en-IN",
    keywords: post.tags.join(", "),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { "@type": "Person", name: post.author.name, jobTitle: post.author.role, worksFor: { "@id": `${SITE_URL}/#organization` } },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const topic = post.tags[0] || "natural stone";

  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />

      <header className="rounded-b-[2rem] bg-forest-deep bg-stone-grain sm:rounded-b-[3rem]">
        <div className="container-x py-10 sm:py-16">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/65">
            <Link href="/" className="flex items-center gap-1 hover:text-gold"><HomeIcon className="h-3.5 w-3.5" />Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/35" />
            <Link href="/blog" className="hover:text-gold">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/35" />
            <span className="font-semibold text-gold">{post.category}</span>
          </nav>
          <h1 className="mt-5 max-w-4xl font-heading text-[1.6rem] font-bold leading-[1.25] tracking-[0.02em] text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-white/75 sm:text-lg">{post.excerpt}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/70">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-gold" />{post.publishedDate}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold" />{post.readTime}</span>
            <span>By <strong className="text-white">{post.author.name}</strong>, {post.author.role}</span>
          </div>
        </div>
      </header>

      <div className="container-x grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:gap-14">
        <article className="min-w-0 lg:col-span-8">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] shadow-xl">
              <Image src={post.featuredImage} alt={post.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
            </div>
          </Reveal>

          <Reveal className="mt-8 rounded-[1.5rem] border border-gold/40 bg-white p-5 sm:p-6">
            <h2 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-ink">
              <Lightbulb className="h-4 w-4 text-gold-deep" /> Key Takeaways
            </h2>
            <ul className="mt-3 space-y-2.5">
              {post.keyTakeaways.map((t) => (
                <li key={t} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold-deep" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <p className="mt-8 text-[16px] leading-[1.8] text-ink/85">{post.content.intro}</p>

          {post.content.sections.map((s, idx) => (
            <React.Fragment key={s.id}>
              <section id={s.id} className="mt-10 scroll-mt-28">
                <h2 className="font-heading text-xl font-bold leading-snug tracking-wide text-ink sm:text-2xl">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3.5 text-[16px] leading-[1.8] text-ink/85">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-[15.5px] leading-relaxed text-ink/85">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {s.table && (
                  <div className="mt-5 overflow-x-auto rounded-2xl border border-black/[0.08] bg-white">
                    <table className="w-full min-w-[480px] text-left text-[14px]">
                      <caption className="bg-ivory p-3 text-left font-heading text-[13px] font-bold tracking-wide text-ink">{s.table.caption}</caption>
                      <thead>
                        <tr className="bg-forest text-white">
                          {s.table.headers.map((h) => (
                            <th key={h} className="p-3 text-[12px] font-bold uppercase tracking-wider">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((r, ri) => (
                          <tr key={ri} className={ri % 2 ? "bg-ivory/60" : "bg-white"}>
                            {r.map((c, ci) => (
                              <td key={ci} className={`p-3 align-top ${ci === 0 ? "font-bold text-ink" : "text-muted"}`}>{c}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {s.callout && (
                  <div className={`mt-5 rounded-2xl border p-4 sm:p-5 ${s.callout.type === "quote" ? "border-gold/40 bg-forest text-white" : "border-forest/20 bg-forest/[0.06]"}`}>
                    <p className={`text-[12px] font-bold uppercase tracking-widest ${s.callout.type === "quote" ? "text-gold" : "text-gold-deep"}`}>{s.callout.title}</p>
                    <p className="mt-1.5 text-[15px] font-medium leading-relaxed">{s.callout.text}</p>
                  </div>
                )}
              </section>

              {idx === 1 && (
                <aside className="mt-10 rounded-[1.75rem] bg-forest p-5 text-white bg-stone-grain sm:p-7">
                  <p className="font-heading text-lg font-bold uppercase tracking-wide">Need this stone for your project?</p>
                  <p className="mt-1.5 text-sm text-white/75">Send your requirement and get a free quote with samples.</p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <EnquiryButton variant="gold" cta={`Blog inline: ${post.slug}`} product={post.title}>Get a Free Quote</EnquiryButton>
                    <Button href={waLink(`Hello Dholpurestones.com, I read "${post.title}" and would like to enquire.`)} variant="whatsapp">
                      <WhatsAppIcon className="h-4 w-4 fill-current" size={16} />WhatsApp Us
                    </Button>
                  </div>
                </aside>
              )}
            </React.Fragment>
          ))}

          <p className="mt-10 rounded-2xl bg-white p-5 text-[16px] font-medium leading-[1.8] text-ink/90 shadow-sm">{post.content.conclusion}</p>

          <section id="faqs" className="mt-12 scroll-mt-28">
            <h2 className="font-heading text-xl font-bold tracking-wide text-ink sm:text-2xl">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-3">
              {post.faqs.map((f) => (
                <details key={f.question} className="group rounded-2xl border border-black/[0.07] bg-white p-4 open:border-gold/50 open:shadow-md">
                  <summary className="cursor-pointer list-none text-[15px] font-bold text-ink marker:hidden">{f.question}</summary>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </article>

        <aside className="lg:col-span-4">
          <div className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-[1.5rem] border border-black/[0.06] bg-white p-5">
              <p className="font-heading text-sm font-bold uppercase tracking-wider text-ink">In this guide</p>
              <ol className="mt-3 space-y-1.5">
                {post.tableOfContents.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="block rounded-lg px-2 py-1.5 text-[14px] text-muted transition-colors hover:bg-ivory hover:text-forest">{t.title}</a>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-[1.5rem] bg-forest p-5 text-white bg-stone-grain">
              <p className="font-heading text-base font-bold uppercase tracking-wide">Get a free quote</p>
              <p className="mt-1.5 text-sm text-white/75">Mine-direct pricing for {topic.toLowerCase()} and more.</p>
              <div className="mt-4 grid gap-2.5">
                <EnquiryButton variant="gold" className="w-full" cta={`Blog sidebar: ${post.slug}`} product={post.title}>Request a Quote</EnquiryButton>
                <Button href={waLink(`Hello Dholpurestones.com, I would like to enquire about ${topic}.`)} variant="whatsapp" className="w-full">
                  <WhatsAppIcon className="h-4 w-4 fill-current" size={16} />WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold uppercase tracking-wide text-ink">Keep Reading</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-ivory transition-all hover:-translate-y-1.5 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.featuredImage} alt={p.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                </div>
                <div className="p-5">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-gold-deep">{p.category}</p>
                  <h3 className="mt-1.5 font-heading text-[15px] font-bold leading-snug text-ink">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready To Choose Your Stone?" text="Share your requirement and our team replies with samples and a quote." topic={topic} cta={`Blog bottom band: ${post.slug}`} />

      <JsonLd
        data={[
          articleLd,
          breadcrumbLd([{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]),
          faqLd(post.faqs.map((f) => ({ q: f.question, a: f.answer }))),
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
