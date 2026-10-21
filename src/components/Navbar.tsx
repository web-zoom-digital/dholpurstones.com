"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  Menu,
  X,
  Award,
  Sparkles,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Layers,
  TreePine,
  Building2,
  ShieldCheck,
  Mountain,
  BookOpen,
  Calendar,
  Cpu,
  Camera,
  Play,
  FileText,
  Gem,
  Palette,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface NavChild {
  label: string;
  href: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

interface NavItem {
  label: string;
  href?: string;
  headerTag?: string;
  footerNote?: { text: string; href: string };
  isGrid?: boolean;
  children?: NavChild[];
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    Company: false,
    Products: false,
    Resources: false,
    Gallery: false,
  });

  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastMouseEnterTimeRef = useRef<number>(0);
  const clickLockedRef = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click outside listener to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        clickLockedRef.current = null;
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Farm House & Gardens", href: "/farmhouse-gardens" },
    {
      label: "Products",
      headerTag: "NATURAL SANDSTONE & PRODUCTS DIRECTORY",
      // footerNote: {
      //   text: "Need custom sizes or 3D CNC profiling? WhatsApp our Stone Desk",
      //   href: "https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20am%20inquiring%20about%20custom%20stone%20products",
      // },
      isGrid: true,
      children: [
        {
          label: "Front Elevation",
          href: "/#elevation",
          desc: "300+ Bespoke classical & modern designs",
          icon: Building2,
          badge: "300+ Designs",
        },
        {
          label: "Farm House & Gardens",
          href: "/farmhouse-gardens",
          desc: "Patios, pool coping & carved gazebos",
          icon: TreePine,
          badge: "Specialty",
        },
        {
          label: "Agra Red Sandstone",
          href: "/products#products",
          desc: "Mughal fort stone & iron-rich ferric blocks",
          icon: Layers,
        },
        {
          label: "Dholpur Beige Stone",
          href: "/products#products",
          desc: "Siliceous buff cream facade cladding",
          icon: Layers,
          badge: "Best Seller",
        },
        {
          label: "Chocolate Sandstone",
          href: "/products#products",
          desc: "Exotic wood-grain teakwood patterns",
          icon: Gem,
        },
        {
          label: "Bansi Pink Sandstone",
          href: "/products#products",
          desc: "Sacred blush pink temple stone",
          icon: Palette,
        },
        {
          label: "Stone Articles & Sculptures",
          href: "/articles",
          desc: "Hand-carved peacocks, lanterns & jalis",
          icon: Sparkles,
          badge: "Sikandra",
        },
      ],
    },
    { label: "Projects", href: "/projects" },
    {
      label: "Company",
      headerTag: "HERITAGE & QUARRY OPERATIONS",
      // footerNote: {
      //   text: "Sarmathura, Sikandra & Kishangarh mining hubs • Estd. 1953",
      //   href: "/about",
      // },
      children: [
        {
          label: "About Us",
          href: "/about",
          desc: "70+ Years lineage since 1953 & founder vision",
          icon: Building2,
        },
        {
          label: "Govt. & Intl. Honors",
          href: "/#international-excellence",
          desc: "Awarded by Govt. of India & global nominations",
          icon: Award,
          badge: "Awarded",
        },
        {
          label: "Infrastructure",
          href: "/about#strength",
          desc: "Automated multi-wire saws & processing yards",
          icon: Cpu,
        },
        {
          label: "Why Choose Us",
          href: "/about#why-choose",
          desc: "Direct quarry concessionaire advantages",
          icon: ShieldCheck,
        },
        {
          label: "Our Mines",
          href: "/about#mines",
          desc: "Active Sarmathura & Bari quarry strata",
          icon: Mountain,
          badge: "Proprietary",
        },
      ],
    },
    {
      label: "Resources",
      headerTag: "TECHNICAL DOSSIERS & PUBLICATIONS",
      // footerNote: {
      //   text: "Explore all 20 architectural masterclasses on our blog",
      //   href: "/blog",
      // },
      children: [
        {
          label: "Blog",
          href: "/blog",
          desc: "20 in-depth architectural guides & reports",
          icon: BookOpen,
          badge: "20 Guides",
        },
        {
          label: "Quality Process",
          href: "/resources#quality",
          desc: "IS:3620 & ASTM C616 geotechnical test data",
          icon: ShieldCheck,
          badge: "IS:3620",
        },
        {
          label: "Exhibition",
          href: "/resources#exhibition",
          desc: "STONA, Marmomac & Big 5 Dubai presence",
          icon: Calendar,
        },
        {
          label: "Packaging and Machinery",
          href: "/resources#packaging",
          desc: "ISPM-15 export crating & 8-axis CNC profiling",
          icon: Cpu,
        },
      ],
    },
    {
      label: "Gallery",
      headerTag: "VISUAL MEDIA ARCHIVES",
      // footerNote: { 
      //   text: "View 4K visual documentation of quarry benches & projects",
      //   href: "/gallery",
      // },
      children: [
        {
          label: "Photo Gallery",
          href: "/gallery#photo",
          desc: "High-resolution quarry & architecture archive",
          icon: Camera,
        },
        {
          label: "Media Gallery",
          href: "/gallery#media",
          desc: "Press coverage, certificates & awards",
          icon: FileText,
          badge: "Press",
        },
        {
          label: "Video Gallery",
          href: "/gallery#video",
          desc: "Artisan carving & automated factory operations",
          icon: Play,
          badge: "Watch",
        },
      ],
    },
    { label: "Contact us", href: "/contact" },
  ];

  // Smooth scroll to hash on page load/navigation
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Mouse hover handlers with delay buffer
  const handleMouseEnter = (label: string) => {
    lastMouseEnterTimeRef.current = Date.now();
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    if (clickLockedRef.current) return;
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 250);
  };

  // Toggle on click — locks dropdown open so clicking never accidentally hides options
  const handleDropdownClick = (e: React.MouseEvent, label: string) => {
    e.stopPropagation();
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    const timeSinceEnter = Date.now() - lastMouseEnterTimeRef.current;

    if (openDropdown === label && clickLockedRef.current === label && timeSinceEnter > 450) {
      setOpenDropdown(null);
      clickLockedRef.current = null;
    } else {
      setOpenDropdown(label);
      clickLockedRef.current = label;
    }
  };

  // Smooth scroll handler for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpenDropdown(null);
    clickLockedRef.current = null;
    setMobileOpen(false);

    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const currentPath = pathname === "" ? "/" : pathname;
      const targetPath = path === "" ? "/" : path;

      if (currentPath === targetPath) {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${hash}`);
          window.dispatchEvent(new Event("hashchange"));
        }
      }
    }
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isNavActive = (item: NavItem): boolean => {
    if (item.href) {
      if (item.href === "/" && pathname === "/") return true;
      if (item.href !== "/" && !item.href.startsWith("/#") && pathname === item.href) return true;
      if (item.href !== "/" && !item.href.startsWith("/#") && pathname.startsWith(item.href)) return true;
    }
    if (item.children) {
      return item.children.some((c) => {
        const basePath = c.href.split("#")[0];
        if (!basePath || basePath === "/") return false;
        return pathname === basePath || pathname.startsWith(basePath);
      });
    }
    return false;
  };

  return (
    <>
      {/* 1. Top Utility Bar (Desktop & Tablet) */}
      <div className="bg-[#0D1311] text-white/80 py-2 px-3 sm:px-6 relative z-50 border-b border-white/8 text-[11px] sm:text-xs">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-2">
          {/* Heritage Tag */}
          <div className="flex items-center gap-1.5 text-[#C29B38] font-bold tracking-wider uppercase truncate">
            <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#C29B38]" />
            <span className="hidden xs:inline">ESTD. 1953 &bull;</span> DHOLPURESTONES
          </div>

          {/* Contact Details */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <a
              href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20inquire%20about%20natural%20stone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C29B38] font-semibold hover:text-[#FAF7F2] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0 fill-[#C29B38]" size={16} />
              <span>+91 94149 45457</span>
            </a>

            <a
              href="tel:+919057355232"
              className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-[#C29B38] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C29B38] shrink-0" />
              <span>+91 90573 55232</span>
            </a>

            <a
              href="mailto:gargcorporationltd@gmail.com"
              className="hidden md:flex items-center gap-1.5 text-white/70 hover:text-[#C29B38] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
              <span>gargcorporationltd@gmail.com</span>
            </a>

            <span className="hidden xl:inline-flex items-center gap-1 text-[#C29B38] bg-[#C29B38]/10 border border-[#C29B38]/30 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px]">
              <Award className="w-3 h-3 text-[#C29B38]" />
              Govt. of India Awarded &bull; Nominated for Intl. Award (Business Excellence)
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Bar (Fixed padding to prevent scroll jitter/bounce) */}
      <header
        style={{ overflow: "visible" }}
        className={`sticky top-0 w-full z-[100] bg-white/98 backdrop-blur-md border-b transition-shadow duration-300 py-2.5 sm:py-3.5 overflow-visible ${
          isScrolled
            ? "shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-black/10"
            : "border-black/6 shadow-2xs"
        }`}
      >
        <div style={{ overflow: "visible" }} className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 overflow-visible">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#0D1311] border border-[#C29B38]/80 flex items-center justify-center shadow-md transition-transform group-hover:scale-105 shrink-0">
              <span className="font-['Cinzel',serif] text-xs sm:text-base font-extrabold text-[#C29B38]">
                DS
              </span>
            </div>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-['Cinzel',serif] text-xs sm:text-lg font-bold text-[#141A17] uppercase tracking-[0.06em] group-hover:text-[#C29B38] transition-colors whitespace-nowrap">
                Dholpurestones
              </span>
              <span className="text-[7.5px] sm:text-[9.5px] text-[#68726E] uppercase tracking-[0.12em] sm:tracking-[0.14em] font-semibold whitespace-nowrap">
                Natural Stone &bull; Since 1953
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Bulletproof Hover and Click Support */}
          <nav ref={navRef} style={{ overflow: "visible" }} className="hidden lg:flex items-center gap-3.5 xl:gap-6 overflow-visible">
            {navItems.map((item) => {
              const active = isNavActive(item);
              const isDropdownOpen = openDropdown === item.label;

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    style={{ overflow: "visible" }}
                    className="relative py-1 overflow-visible"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={(e) => handleDropdownClick(e, item.label)}
                      className={`inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-bold tracking-tight transition-all cursor-pointer py-1.5 px-3 rounded-full ${
                        active || isDropdownOpen
                          ? "text-[#0D1311] bg-[#C29B38]/20 border border-[#C29B38]/60 shadow-2xs"
                          : "text-[#141A17] hover:text-[#C29B38] hover:bg-[#FAF7F2]"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-[#C29B38]" : "text-[#141A17]/60"
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu Box with invisible bridge to prevent losing hover */}
                    {isDropdownOpen && (
                      <div
                        className={`absolute top-full pt-2 z-[150] animate-in fade-in slide-in-from-top-1.5 duration-200 overflow-visible ${
                          item.label === "Gallery"
                            ? "right-0"
                            : item.label === "Resources"
                            ? "left-1/2 -translate-x-1/2"
                            : "left-0"
                        } ${item.isGrid ? "w-[620px]" : "w-[380px]"}`}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-[0_24px_60px_-10px_rgba(13,19,17,0.22),0_8px_24px_-4px_rgba(194,155,56,0.18)] border border-[#C29B38]/35 ring-1 ring-black/5 overflow-hidden flex flex-col">
                          {/* Top Royal Accent Line */}
                          <div className="h-[3px] w-full bg-gradient-to-r from-[#852233] via-[#C29B38] to-[#852233]" />

                          {/* Category Header Strip */}
                          {item.headerTag && (
                            <div className="px-4 py-2.5 bg-gradient-to-r from-[#FAF7F2] via-white to-[#FAF7F2] border-b border-black/6 flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#852233]">
                                <Sparkles className="w-3 h-3 text-[#C29B38]" />
                                {item.headerTag}
                              </span>
                              <span className="text-[10px] font-bold text-[#68726E] uppercase tracking-wider">
                                {item.children.length} Options
                              </span>
                            </div>
                          )}

                          {/* Items Grid or List */}
                          <div
                            className={
                              item.isGrid
                                ? "grid grid-cols-2 gap-1.5 p-2.5 bg-[#FCFAF7]/50"
                                : "flex flex-col space-y-1 p-2 bg-[#FCFAF7]/50"
                            }
                          >
                            {item.children.map((sub) => {
                              const IconComponent = sub.icon;
                              return (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={(e) => handleNavClick(e, sub.href)}
                                  className="group flex items-start gap-3 p-2.5 rounded-xl border border-transparent hover:border-[#C29B38]/40 hover:bg-white hover:shadow-sm transition-all duration-150 text-left"
                                >
                                  {/* Icon Tile */}
                                  <div className="w-9 h-9 rounded-lg bg-[#0D1311] text-[#C29B38] border border-[#C29B38]/30 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#C29B38] group-hover:text-[#0D1311] group-hover:scale-105 transition-all duration-200 mt-0.5">
                                    <IconComponent className="w-4 h-4 transition-transform group-hover:scale-110" />
                                  </div>

                                  {/* Content Info */}
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-bold text-[#141A17] group-hover:text-[#852233] transition-colors leading-tight">
                                        {sub.label}
                                      </span>
                                      {sub.badge && (
                                        <span className="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#C29B38]/15 text-[#852233] border border-[#C29B38]/40 shrink-0 group-hover:bg-[#852233] group-hover:text-white transition-colors">
                                          {sub.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[11px] text-[#68726E] group-hover:text-[#333E39] leading-snug mt-0.5 line-clamp-1">
                                      {sub.desc}
                                    </p>
                                  </div>

                                  {/* Micro chevron arrow */}
                                  <ChevronRight className="w-3.5 h-3.5 text-[#C29B38]/40 group-hover:text-[#852233] group-hover:translate-x-0.5 transition-all shrink-0 self-center opacity-0 group-hover:opacity-100" />
                                </Link>
                              );
                            })}
                          </div>

                          {/* Advisory / Direct Link Footer Strip */}
                          {item.footerNote && (
                            <Link
                              href={item.footerNote.href}
                              onClick={(e) => handleNavClick(e, item.footerNote!.href)}
                              className="px-4 py-2.5 bg-[#0D1311] hover:bg-[#141D19] text-white/90 border-t border-[#C29B38]/30 flex items-center justify-between gap-3 text-[11px] transition-colors group/foot"
                            >
                              <div className="flex items-center gap-2 truncate">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38] animate-pulse shrink-0" />
                                <span className="text-[#FAF7F2] font-medium truncate group-hover/foot:text-[#C29B38] transition-colors">
                                  {item.footerNote.text}
                                </span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-[#C29B38] shrink-0 group-hover/foot:translate-x-1 transition-transform" />
                            </Link>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Direct link
              return (
                <Link
                  key={item.label}
                  href={item.href || "/"}
                  onClick={(e) => handleNavClick(e, item.href || "/")}
                  className={`font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-bold tracking-tight transition-all py-1.5 px-3 rounded-full flex items-center gap-1.5 shrink-0 ${
                    item.label === "Farm House & Gardens"
                      ? "bg-[#134e3f]/10 text-[#134e3f] border border-[#134e3f]/30 hover:bg-[#134e3f] hover:text-white shadow-2xs"
                      : active
                      ? "text-[#0D1311] bg-[#C29B38]/20 border border-[#C29B38]/60 shadow-2xs"
                      : "text-[#141A17] hover:text-[#C29B38] hover:bg-[#FAF7F2]"
                  }`}
                >
                  {item.label === "Farm House & Gardens" && (
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* WhatsApp CTA Styled in Website's Royal Gold Theme */}
            <a
              href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20connect%20regarding%20natural%20stone%20projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold tracking-wider uppercase px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#C29B38] hover:bg-[#dfb54b] text-[#0D1311] transition-all duration-300 shadow-[0_4px_16px_rgba(194,155,56,0.32)] hover:shadow-[0_6px_22px_rgba(194,155,56,0.5)] border border-[#C29B38] active:scale-95 whitespace-nowrap shrink-0 group"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#0D1311] shrink-0 transition-transform group-hover:scale-110" size={16} />
              <span className="hidden sm:inline">WhatsApp Chat</span>
              <span className="sm:hidden text-[11px]">Chat</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-black/5 hover:bg-black/10 text-[#141A17] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C29B38]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-5 h-5 text-[#C29B38]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer with Accordion Submenus */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden flex animate-fade-in">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-xs bg-[#FAF7F2] h-full shadow-2xl flex flex-col z-10 border-l border-black/10">
            {/* Drawer Header */}
            <div className="p-4 bg-[#0D1311] text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#141A17] border border-[#C29B38] flex items-center justify-center">
                  <span className="font-['Cinzel',serif] text-xs font-bold text-[#C29B38]">DS</span>
                </div>
                <div>
                  <span className="font-['Cinzel',serif] text-sm font-bold text-white tracking-wider block">
                    DHOLPURESTONES
                  </span>
                  <span className="text-[9px] text-[#C29B38] uppercase tracking-widest font-semibold">
                    ESTD. 1953
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Links with Expandable Accordions */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-2">
              {navItems.map((item) => {
                const active = isNavActive(item);

                if (item.children) {
                  const isExpanded = mobileExpanded[item.label] ?? false;
                  return (
                    <div key={item.label} className="bg-white rounded-xl border border-black/6 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className={`w-full flex items-center justify-between p-3.5 text-[14.5px] font-bold text-left transition-colors ${
                          active ? "text-[#C29B38] bg-[#0D1311]" : "text-[#141A17]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#C29B38]" : "text-[#141A17]/60"
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="bg-[#FAF7F2] border-t border-black/8 p-2.5 space-y-1.5">
                          {item.headerTag && (
                            <div className="px-2 pt-1 pb-1 flex items-center justify-between text-[9.5px] font-extrabold uppercase tracking-widest text-[#852233]">
                              <span className="flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3 text-[#C29B38]" />
                                {item.headerTag}
                              </span>
                              <span className="text-[#68726E] font-bold">{item.children.length}</span>
                            </div>
                          )}
                          {item.children.map((sub) => {
                            const IconComponent = sub.icon;
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={(e) => handleNavClick(e, sub.href)}
                                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-black/5 hover:border-[#C29B38]/40 hover:bg-[#C29B38]/10 transition-all text-left shadow-2xs group"
                              >
                                <div className="w-7 h-7 rounded-lg bg-[#0D1311] text-[#C29B38] flex items-center justify-center shrink-0 border border-[#C29B38]/30 mt-0.5 group-hover:bg-[#C29B38] group-hover:text-[#0D1311] transition-colors">
                                  <IconComponent className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <span className="text-[13px] font-bold text-[#141A17] group-hover:text-[#852233] transition-colors leading-tight">
                                      {sub.label}
                                    </span>
                                    {sub.badge && (
                                      <span className="text-[8.5px] font-extrabold uppercase tracking-wider px-1.5 py-0.2 rounded-full bg-[#C29B38]/20 text-[#852233] border border-[#C29B38]/40 shrink-0">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[10.5px] text-[#68726E] leading-snug mt-0.5 line-clamp-1">
                                    {sub.desc}
                                  </p>
                                </div>
                                <ChevronRight className="w-3.5 h-3.5 text-[#C29B38]/60 shrink-0 ml-auto self-center" />
                              </Link>
                            );
                          })}
                          {/* {item.footerNote && (
                            <Link
                              href={item.footerNote.href}
                              onClick={(e) => handleNavClick(e, item.footerNote!.href)}
                              className="flex items-center justify-between p-2 rounded-lg bg-[#0D1311] text-[#FAF7F2] text-[10.5px] font-semibold border border-[#C29B38]/40 hover:text-[#C29B38] transition-colors mt-1"
                            >
                              <span className="truncate">{item.footerNote.text}</span>
                              <ArrowRight className="w-3 h-3 text-[#C29B38] shrink-0 ml-1" />
                            </Link>
                          )} */}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href || "/"}
                    onClick={(e) => handleNavClick(e, item.href || "/")}
                    className={`flex items-center justify-between p-3.5 rounded-xl text-[14.5px] font-bold transition-all border ${
                      item.label === "Farm House & Gardens"
                        ? "bg-[#134e3f]/10 text-[#134e3f] border-[#134e3f]/30"
                        : active
                        ? "text-[#C29B38] bg-[#0D1311] border-[#C29B38]/40"
                        : "text-[#141A17] bg-white border-black/6 hover:text-[#C29B38]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.label === "Farm House & Gardens" && (
                      <span className="text-[9px] bg-[#134e3f] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        SPECIALTY
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Drawer Footer CTA */}
            <div className="p-4 bg-white border-t border-black/8 space-y-2.5">
              <a
                href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20connect%20regarding%20natural%20stone%20projects"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-full bg-[#C29B38] hover:bg-[#dfb54b] text-[#0D1311] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 border border-[#C29B38]"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#0D1311]" size={16} />
                <span>Chat On WhatsApp</span>
              </a>
              <div className="text-[10px] text-center text-[#68726E] flex items-center justify-center gap-2 pt-1">
                <a href="tel:+919414945457" className="hover:text-[#C29B38] font-semibold">
                  WA: +91 94149 45457
                </a>
                <span>&bull;</span>
                <a href="tel:+919057355232" className="hover:text-[#C29B38] font-semibold">
                  Call: +91 90573 55232
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
