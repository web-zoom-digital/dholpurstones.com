import { categories, projects, EMAIL, PHONE_PRIMARY, PHONE_SECONDARY } from "@/data/catalog";
import { generalFaqs, sandstoneFaqs, marbleFaqs, gardenFaqs, exportFaqs } from "@/data/faqs";
import { ALL_BLOG_POSTS } from "@/data/blogData";
import { SITE_URL } from "./site";

const u = (p: string) => `${SITE_URL}${p}`;

const header = `# Dholpurestones.com (B P Garg & Sons / Garg Corporation Ltd.)
> Dholpur stone, sandstone, marble and semi-precious stone manufacturer, mine owner and exporter in Dholpur, Rajasthan, India — established 1953. Specialists in Dholpur sandstone (Agra Red, Dholpur Beige, Dholpur Pink, Dholpur Chocolate), marble (beige, white, grey), hand-carved stone articles, semi-precious stone slabs, exclusive imported stones, and luxury farm house & garden stonework. Awarded by the Government of India for 300+ sandstone front elevation designs; nominated for an International Award for Business Excellence.

Also searched as: Dholpur stone, Dholpur stones, Dholpur sandstone, Dholpurestones, Dholpur stone manufacturer, Dholpur red stone, Agra red sandstone supplier, sandstone exporter India, farm house stone work, front elevation sandstone designs.

## Business facts
- Legal names: Dholpurestones.com, B P Garg & Sons, Garg Corporation Ltd. (GCL), Saroj Stone Industries
- Founded: 1953 (three generations)
- Managing Director & mine owner: Mr. Arvind Garg
- Works & address: B P Garg & Sons, Near RAC line, Mothiyapura Road, Dholpur 328026, Rajasthan, India (26.5492 N, 77.2917 E)
- Other locations: Sikandra (hand carving), Kishangarh (trading), Canada (overseas office)
- Services: mining, manufacturing, export, turnkey contracting, custom carving
- WhatsApp: ${PHONE_PRIMARY} | Phone: ${PHONE_SECONDARY} | Email: ${EMAIL}
- Hours: Monday–Saturday, 9 am–7 pm IST
- How to get a quote: WhatsApp, the enquiry form at ${u("/contact")}, or email with stone, size, finish, quantity and project location
`;

export function buildLlmsTxt(): string {
  const cats = categories
    .map((c) => `- [${c.name}](${u(c.href)}): ${c.blurb} (${c.subs.map((s) => s.name).join(", ")})`)
    .join("\n");
  const posts = ALL_BLOG_POSTS.slice(0, 15)
    .map((p) => `- [${p.title}](${u(`/blog/${p.slug}`)}): ${p.excerpt}`)
    .join("\n");

  return `${header}
## Product collections
${cats}

## Key pages
- [Home](${u("/")}): overview of all collections
- [All products](${u("/products")}): category hub
- [Projects](${u("/projects")}): Parliament House, Akshardham, AIIMS Bhopal, Adani House, Indian Embassies, 50+ ISKCON temples
- [About](${u("/about")}): history since 1953, mines, manufacturing, export
- [Contact & quote](${u("/contact")}): enquiry form, WhatsApp, address, map
- [Blog & guides](${u("/blog")}): buying guides and how-tos

## Guides
${posts}

## Optional
- [Full details for AI assistants](${u("/llms-full.txt")}): products, projects, FAQs and all guides in one file
- [Sitemap](${u("/sitemap.xml")})
`;
}

export function buildLlmsFull(): string {
  const catBlocks = categories
    .map(
      (c) =>
        `### ${c.name}\nURL: ${u(c.href)}\n${c.blurb}\nSub-categories: ${c.subs.map((s) => `${s.name} — ${s.note}`).join(" | ")}`
    )
    .join("\n\n");

  const projectLines = projects.map((p) => `- ${p.name}, ${p.place} (${p.type}): ${p.scope}`).join("\n");

  const faqBlock = (title: string, faqs: { q: string; a: string }[]) =>
    `### ${title}\n${faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}`;

  const posts = ALL_BLOG_POSTS.map(
    (p) =>
      `### ${p.title}\nURL: ${u(`/blog/${p.slug}`)}\nPublished: ${p.publishedDate} | Category: ${p.category}\nSummary: ${p.excerpt}\nKey takeaways:\n${p.keyTakeaways.map((t) => `- ${t}`).join("\n")}`
  ).join("\n\n");

  return `${header}
## Product collections (detail)
${catBlocks}

## Landmark projects
${projectLines}

## Frequently asked questions
${faqBlock("General", generalFaqs)}

${faqBlock("Dholpur sandstone", sandstoneFaqs)}

${faqBlock("Marble", marbleFaqs)}

${faqBlock("Farm house & garden stonework", gardenFaqs)}

${faqBlock("Export", exportFaqs)}

## Technical notes
- Indian Standard IS 3622 covers sandstone slabs and tiles for flooring and cladding; test methods are in IS 1121 (strength) and IS 1124 (water absorption, density). IS 1130 covers marble.
- Company-published data for Dholpur sandstone: compressive strength above 68 MPa; water absorption near 1.1%. Test documentation is available on request.
- Worked building stone is generally classified under HS heading 6802.
- Export packing: ISPM-15 treated wooden crates with protection between pieces.

## Guides and articles
${posts}
`;
}
