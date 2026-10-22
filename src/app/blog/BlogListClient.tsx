"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BlogPost, BLOG_POSTS } from "@/data/blogData";
import {
  LuChevronRight as ChevronRight,
  LuHouse as HomeIcon,
  LuBookOpen as BookOpen,
  LuCalendar as Calendar,
  LuClock as Clock,
  LuArrowRight as ArrowRight,
  LuSearch as Search,
  LuSparkles as Sparkles,
  LuPhoneCall as PhoneCall,
  LuCircleCheck as CheckCircle2,
  LuAward as Award,
  LuShieldCheck as ShieldCheck,
  LuX as X,
  LuShare2 as Share2,
  LuCheck as Check,
  LuFileText as FileText,
  LuBookmark as Bookmark,
  LuCircleHelp as HelpCircle,
  LuChevronDown as ChevronDown
} from "react-icons/lu";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const CATEGORIES = [
  "All",
  "Architectural Facades",
  "Heritage Architecture",
  "Landscape Design",
  "Artisanal Craftsmanship",
  "Front Elevation",
] as const;

export default function BlogListClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Sync hash with active article (e.g. /blog#dholpur-beige-vs-engineered-cladding-longevity)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = BLOG_POSTS.find((p) => p.slug === hash);
        if (found) {
          setActiveArticle(found);
          document.body.style.overflow = "hidden";
          return;
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Close article modal
  const closeArticle = () => {
    setActiveArticle(null);
    document.body.style.overflow = "";
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  // Open article modal
  const openArticle = (post: BlogPost) => {
    setActiveArticle(post);
    document.body.style.overflow = "hidden";
    window.history.pushState(null, "", `#${post.slug}`);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeArticle) {
        closeArticle();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeArticle]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && activeArticle) {
      const url = `${window.location.origin}/blog#${activeArticle.slug}`;
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS[0];

  const scrollToArticles = () => {
    const el = document.getElementById("articles-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
      <Navbar />
      <section className="relative min-h-[75vh] lg:min-h-[86vh] flex flex-col justify-between bg-[#123D32] text-white border-b border-white/10 overflow-hidden">
        {/* Background Ultrarealistic Architectural Image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Image
            src="/assets/blog/front-elevation-architecture.jpg"
            alt="Dholpurestones Architectural Journal – Heritage and Contemporary Sandstone Facades"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Balanced translucent dark overlay for supreme image visibility + text legibility */}
          {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-[1.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#123D32] via-transparent to-[#123D32]/70" /> */}
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#C5A15B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1E5A46]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Top Breadcrumbs & Accolade Ribbon */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-white/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C5A15B] flex items-center gap-1 transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#C5A15B] font-semibold">Blog</span>
          </nav>

          {/* Govt & Intl Honors Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#C5A15B]/60 text-[#C5A15B] text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg">
            <Award className="w-3.5 h-3.5 text-[#C5A15B] shrink-0" />
            <span>Awarded by Govt. of India &bull; Nominated for Intl. Award</span>
          </div>
        </div>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex-1 flex flex-col justify-center items-center text-center">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A15B]/20 border border-[#C5A15B]/50 mb-4 backdrop-blur-md shadow-sm">
            {/* <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" /> */}
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C5A15B] tracking-[0.22em] uppercase">
              ARCHITECTURAL DOSSIER &bull; GEOTECHNICAL RESEARCH 
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-['Cinzel',serif] text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide text-white leading-[1.1] max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            The Natural Sandstone Journal
          </h1>

          {/* Subheading / Lineage */}
          <div className="mt-3 sm:mt-4">
            <span className="font-['Cinzel',serif] font-bold text-[#C5A15B] tracking-[0.16em] uppercase text-sm sm:text-lg lg:text-xl drop-shadow-[0_0_20px_rgba(194,155,56,0.6)]">
              Quarry Science &bull; Shilpa Shastra &bull; Facade Engineering
            </span>
          </div>        
        </div>

        {/* Hero Bottom Metric Cards Strip */}
        <div className="relative z-10 bg-black/70 backdrop-blur-md border-t border-white/10 py-4 px-4">
          <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="font-['Cinzel',serif] text-base sm:text-xl font-bold text-[#C5A15B]">20 In-Depth</span>
              <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider">Architectural Masterclasses</span>
            </div>
            <div className="flex flex-col items-center border-l border-white/10">
              <span className="font-['Cinzel',serif] text-base sm:text-xl font-bold text-[#C5A15B]">&gt; 68.4 MPa</span>
              <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider">Compressive Strength</span>
            </div>
            <div className="flex flex-col items-center border-l border-white/10">
              <span className="font-['Cinzel',serif] text-base sm:text-xl font-bold text-[#C5A15B]">300+ Designs</span>
              <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider">Front Elevation Portfolio</span>
            </div>
            <div className="flex flex-col items-center border-l border-white/10">
              <span className="font-['Cinzel',serif] text-base sm:text-xl font-bold text-[#C5A15B]">Since 1953</span>
              <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider">Direct Quarry Concession</span>
            </div>
          </div>
        </div>
      </section>

      

      
      {selectedCategory === "All" && searchQuery === "" && featuredPost && (
        <section id="articles-section" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 scroll-mt-28">
          <div className="bg-white rounded-3xl border border-black/8 overflow-hidden shadow-md hover:shadow-xl transition-all group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Side */}
              <div
                onClick={() => openArticle(featuredPost)}
                className="lg:col-span-7 relative h-64 sm:h-80 lg:h-[460px] overflow-hidden bg-neutral-900 cursor-pointer"
              >
                <Image
                  src={featuredPost.featuredImage}
                  alt={featuredPost.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="bg-[#123D32] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Featured Masterclass
                  </span>
                  <span className="bg-black/60 backdrop-blur-md text-[#C5A15B] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#6B7C73] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A15B]" />
                      {featuredPost.publishedDate}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C5A15B]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2
                    onClick={() => openArticle(featuredPost)}
                    className="font-['Cinzel',serif] text-xl sm:text-2xl lg:text-3xl font-bold text-[#1F2A24] group-hover:text-[#123D32] transition-colors leading-snug cursor-pointer"
                  >
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#6B7C73] mt-3 sm:mt-4 leading-relaxed line-clamp-3 lg:line-clamp-4">
                    {featuredPost.excerpt}
                  </p>

                  {/* Key Takeaway Bullets Preview */}
                  <div className="mt-4 pt-4 border-t border-black/6 space-y-1.5 hidden sm:block">
                    {featuredPost.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#6B7C73]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A15B] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-black/8 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C5A15B] relative shrink-0">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#1F2A24] block leading-tight">
                        {featuredPost.author.name}
                      </span>
                      <span className="text-[10px] text-[#6B7C73]">
                        {featuredPost.author.role}
                      </span>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

     
      <section id="articles-section" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 scroll-mt-28">
        {selectedCategory === "All" && searchQuery === "" && (
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-black/8">
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#1F2A24]">
              All Architectural Guides &amp; Insights
            </h3>
            <span className="text-xs text-[#6B7C73] font-medium">
              Showing {filteredPosts.length} Guides
            </span>
          </div>
        )}

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-black/8 p-8">
            <BookOpen className="w-12 h-12 text-[#C5A15B] mx-auto mb-3" />
            <h4 className="font-['Cinzel',serif] text-lg font-bold text-[#1F2A24]">
              No articles found matching &quot;{searchQuery}&quot;
            </h4>
            <p className="text-xs text-[#6B7C73] mt-1">
              Try searching for &quot;Dholpur Beige&quot;, &quot;Agra Red&quot;, &quot;Patio&quot;, or reset your category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#123D32] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C5A15B] hover:text-black transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                id={post.slug}
                className="bg-white rounded-2xl border border-black/8 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Image Container with 16:9 Aspect Ratio */}
                  <div
                    onClick={() => openArticle(post)}
                    className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 cursor-pointer"
                  >
                    <Image
                      src={post.featuredImage}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                      <span className="bg-black/75 backdrop-blur-md text-[#C5A15B] border border-white/10 text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 text-[11px] text-[#6B7C73] mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#C5A15B]" />
                        {post.publishedDate}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C5A15B]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3
                      onClick={() => openArticle(post)}
                      className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-[#1F2A24] group-hover:text-[#123D32] transition-colors leading-snug line-clamp-2 cursor-pointer"
                    >
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#6B7C73] mt-2.5 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    
                  </div>
                </div>

                
              </article>
            ))}
          </div>
        )}
      </section>

     
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="bg-gradient-to-r from-[#123D32] via-[#1F2A24] to-[#123D32] rounded-3xl p-8 sm:p-12 text-white border border-[#C5A15B]/30 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A15B]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 text-[#C5A15B] text-xs font-bold uppercase tracking-widest mb-2">
                <Sparkles className="w-4 h-4" />
                <span>DIRECT QUARRY CONSULTATION &bull; SIKA  NDRA &bull; SARMATHURA</span>
              </div>
              <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold leading-tight">
                Specifying Natural Sandstone for Your Next Architectural Project?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-2 max-w-2xl leading-relaxed">
                Connect directly with our 3rd-generation quarry concessionaires for physical stone sample kits, IS:3620 test reports, CAD drawing reviews, and containerized export pricing.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20am%20an%20architect/developer%20interested%20in%20natural%20sandstone%20technical%20specs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C5A15B] hover:bg-[#C5A15B] text-black text-xs font-bold uppercase tracking-wider transition-all shadow-md text-center"
              >
                <WhatsAppIcon className="w-4 h-4 fill-black" size={16} />
                <span>WhatsApp Stone Advisory</span>
              </a>

              <a
                href="tel:+919414945457"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all text-center"
              >
                <PhoneCall className="w-4 h-4 text-[#C5A15B]" />
                <span>Call: +91 94149 45457</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FULL IN-PAGE ARTICLE READER MODAL (NO SLUG / FOLDER NEEDED)
      ========================================================================= */}
      {activeArticle && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 backdrop-blur-md overflow-y-auto p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-5xl bg-[#F7F4EB] text-[#1F2A24] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-[#C5A15B]/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Sticky Header */}
            <div className="sticky top-0 z-50 bg-[#123D32] text-white p-4 sm:px-6 flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2.5 truncate mr-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#123D32] text-white text-[10px] font-bold uppercase tracking-wider shrink-0">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-white/80 truncate font-['Cinzel',serif] hidden sm:inline">
                  {activeArticle.title}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Copy Link Button */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="p-2 rounded-full bg-white/10 hover:bg-[#C5A15B] hover:text-black text-white text-xs transition-colors flex items-center gap-1 cursor-pointer"
                  title="Copy link to this article"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Share2 className="w-3.5 h-3.5" />
                  )}
                  <span className="hidden md:inline text-[11px] font-bold">
                    {copied ? "Copied" : "Share"}
                  </span>
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeArticle}
                  className="p-2 rounded-full bg-white/10 hover:bg-[#123D32] text-white transition-colors cursor-pointer"
                  aria-label="Close article modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Article Body */}
            <div className="overflow-y-auto p-5 sm:p-8 lg:p-10 space-y-8 scrollbar-thin">
              {/* Featured Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-md">
                <Image
                  src={activeArticle.featuredImage}
                  alt={activeArticle.imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1200px) 100vw, 1000px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs drop-shadow-md">
                  <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15 inline-block">
                    {activeArticle.imageAlt}
                  </span>
                </div>
              </div>

              {/* Title & Meta */}
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#6B7C73] mb-2.5">
                  <span className="flex items-center gap-1 font-semibold text-[#123D32]">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
                    {activeArticle.category}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A15B]" />
                    {activeArticle.publishedDate}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A15B]" />
                    {activeArticle.readTime}
                  </span>
                </div>

                <h1 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F2A24] leading-tight">
                  {activeArticle.title}
                </h1>
                <p className="text-xs sm:text-sm text-[#6B7C73] mt-3 leading-relaxed">
                  {activeArticle.excerpt}
                </p>
              </div>

              {/* Key Takeaways Highlight Box */}
              <div className="bg-white border-2 border-[#C5A15B]/40 p-5 sm:p-6 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#C5A15B]" />
                <div className="flex items-center gap-2 text-[#123D32] mb-3">
                  <Sparkles className="w-4 h-4 text-[#C5A15B]" />
                  <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold uppercase tracking-wide text-[#1F2A24]">
                    Executive Summary &bull; Key Takeaways
                  </h3>
                </div>
                <ul className="space-y-2">
                  {activeArticle.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#6B7C73]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intro Text */}
              <div className="text-xs sm:text-sm text-[#6B7C73] leading-relaxed">
                {activeArticle.content.intro}
              </div>

              {/* Full Content Sections */}
              {activeArticle.content.sections.map((section) => (
                <section key={section.id} className="space-y-3 pt-4 border-t border-black/8">
                  <h3 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-[#1F2A24]">
                    {section.heading}
                  </h3>

                  {section.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-[#6B7C73] leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Callout */}
                  {section.callout && (
                    <div
                      className={`p-4 rounded-xl border ${
                        section.callout.type === "quote"
                          ? "bg-[#123D32] text-white border-[#C5A15B]/40 italic"
                          : section.callout.type === "spec"
                          ? "bg-[#123D32]/10 text-[#123D32] border-[#123D32]/30"
                          : "bg-[#123D32]/10 text-[#123D32] border-[#123D32]/30"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest block mb-1">
                        {section.callout.title}
                      </span>
                      <p className="text-xs sm:text-sm font-medium">
                        &ldquo;{section.callout.text}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Table */}
                  {section.table && (
                    <div className="overflow-x-auto my-4 bg-white rounded-xl border border-black/8 shadow-2xs">
                      <table className="w-full text-left text-xs">
                        {section.table.caption && (
                          <caption className="p-2.5 text-left font-['Cinzel',serif] font-bold text-xs text-[#1F2A24] bg-[#F7F4EB] border-b border-black/6">
                            {section.table.caption}
                          </caption>
                        )}
                        <thead>
                          <tr className="bg-[#123D32] text-white">
                            {section.table.headers.map((h, idx) => (
                              <th key={idx} className="p-2.5 font-semibold uppercase tracking-wider text-[10.5px]">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-black/6">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#F7F4EB]/50"}>
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`p-2.5 ${cIdx === 0 ? "font-bold text-[#1F2A24]" : "text-[#6B7C73]"}`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Bullets */}
                  {section.bullets && (
                    <ul className="space-y-1.5 mt-2 pl-1">
                      {section.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#6B7C73]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A15B] mt-1.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Conclusion */}
              <div className="bg-[#F7F4EB] border border-black/8 p-5 sm:p-6 rounded-2xl space-y-2">
                <h4 className="font-['Cinzel',serif] text-base font-bold text-[#1F2A24] uppercase">
                  Concluding Remarks
                </h4>
                <p className="text-xs sm:text-sm text-[#6B7C73] leading-relaxed">
                  {activeArticle.content.conclusion}
                </p>
              </div>

              {/* FAQs Accordion */}
              <div className="space-y-3 pt-4 border-t border-black/8">
                <div className="flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-[#C5A15B]" />
                  <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold uppercase tracking-wide text-[#1F2A24]">
                    Frequently Asked Questions
                  </h4>
                </div>

                {activeArticle.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-black/8 overflow-hidden shadow-2xs"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-3.5 text-left font-['Cinzel',serif] text-xs font-bold text-[#1F2A24] hover:text-[#123D32] cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#C5A15B] shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-3.5 pt-0 text-xs text-[#6B7C73] leading-relaxed border-t border-black/6 bg-[#F7F4EB]/40">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Author Card & Direct Inquiries */}
              <div className="bg-gradient-to-r from-[#123D32] to-[#1E5A46] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#C5A15B]/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C5A15B] relative shrink-0">
                    <Image
                      src={activeArticle.author.avatar}
                      alt={activeArticle.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {activeArticle.author.name}
                    </span>
                    <span className="text-[10px] text-[#C5A15B]">
                      {activeArticle.author.role} &bull; {activeArticle.author.experience}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20am%20inquiring%20about%20${encodeURIComponent(activeArticle.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A15B] hover:bg-[#C5A15B] text-black text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-black" size={16} />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={closeArticle}
                    className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Back to Blog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
