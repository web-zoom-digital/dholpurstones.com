import type { BlogPost } from "./blogData";

const author: BlogPost["author"] = {
  name: "Arvind Garg",
  role: "Managing Director & Stone Consultant",
  experience: "Third-generation stone business, Estd. 1953",
  avatar: "/assets/crest-1953.jpg",
};

type Draft = Omit<BlogPost, "author" | "lastUpdated" | "tableOfContents"> & { lastUpdated?: string };

/** Fills in author and table of contents so each guide only holds its real content. */
function guide(d: Draft): BlogPost {
  const toc = [
    ...d.content.sections.map((s, i) => ({ id: s.id, title: `${i + 1}. ${s.heading}` })),
    { id: "faqs", title: `${d.content.sections.length + 1}. Frequently Asked Questions` },
  ];
  return { ...d, author, lastUpdated: d.lastUpdated || d.publishedDate, tableOfContents: toc };
}

export const LEAD_GUIDE_POSTS: BlogPost[] = [
  guide({
    slug: "dholpur-stone-buyers-guide-colours-uses-price-factors",
    title: "Dholpur Stone: The Complete Buyer's Guide to Colours, Uses and Price Factors",
    excerpt:
      "What Dholpur stone is, how the four main colours differ, where each one works best and what actually decides the price — a plain-language guide before you ask for a quote.",
    category: "Buying Guides",
    readTime: "8 min read",
    publishedDate: "October 23, 2026",
    featuredImage: "/assets/blog/dholpur-beige-facade.jpg",
    imageAlt: "Villa elevation clad in Dholpur beige sandstone",
    tags: ["Dholpur stone", "Dholpur sandstone", "Agra red", "Dholpur beige", "Dholpur pink", "Dholpur chocolate", "sandstone price"],
    keyTakeaways: [
      "Dholpur stone is a fine-to-medium grained sandstone from Dholpur, Rajasthan — compact, acid resistant and easy to dress and carve.",
      "Four colours cover most projects: Agra Red, Dholpur Beige, Dholpur Pink and Dholpur Chocolate.",
      "Price is driven by colour, thickness, finish, size, quantity and distance — not by a single 'rate per sq ft'.",
      "Buying direct from a mine owner removes middlemen and gives you control over colour consistency.",
    ],
    faqs: [
      {
        question: "What is Dholpur stone used for?",
        answer:
          "Front elevations, wall cladding, columns and jalis, flooring and paving, driveways, pool coping, steps, garden walling, temples and hand-carved sculptures.",
      },
      {
        question: "Is Dholpur stone the same as Agra red sandstone?",
        answer:
          "They come from the same sandstone belt in eastern Rajasthan. 'Agra Red' describes the deep red colour; Dholpur stone also includes beige, pink and chocolate tones.",
      },
      {
        question: "How do I get an accurate price for Dholpur stone?",
        answer:
          "Share the colour, thickness, finish, size, quantity and delivery location. Because these change the price, a single rate quoted without them is not reliable.",
      },
    ],
    content: {
      intro:
        "Dholpur stone has been used for palaces, temples and government buildings for generations, and it is still one of the most practical natural stones for Indian homes and farm houses. This guide explains what to look for before you place an order.",
      sections: [
        {
          id: "what-is-dholpur-stone",
          heading: "What is Dholpur stone?",
          paragraphs: [
            "Dholpur stone is a sandstone quarried in and around Dholpur district in Rajasthan. District geological descriptions characterise it as fine to medium grained and compact, resistant to acid, and easy to dress and chisel. Its colour depends on the cementing material between the quartz grains.",
            "Those traits explain its popularity: it cuts cleanly into slabs and tiles, carves well for jalis and sculpture, and holds up in heat, rain and pollution.",
          ],
        },
        {
          id: "four-colours",
          heading: "The four main colours",
          paragraphs: ["Each colour suits a different design mood. Samples from the same quarry bench keep colour consistent across a large order."],
          table: {
            caption: "Dholpur stone colours at a glance",
            headers: ["Colour", "Look", "Best for"],
            rows: [
              ["Agra Red", "Deep terracotta red", "Heritage-style elevations, plazas, temples"],
              ["Dholpur Beige", "Warm buff-cream", "Modern and classical villa elevations, farm houses"],
              ["Dholpur Pink", "Soft blush pink", "Temples, jalis, carved work, palatial facades"],
              ["Dholpur Chocolate", "Rich brown with wood-like graining", "Feature walls, accents, pool and garden surrounds"],
            ],
          },
        },
        {
          id: "where-to-use",
          heading: "Where each application works best",
          paragraphs: [
            "For outdoor floors and driveways choose a naturally textured or flamed finish for grip. For elevations, sawn or honed panels with a clean joint line look sharp, while split-face gives a rustic feel. For carving, finer-grained pink and beige blocks are easier to work.",
          ],
          bullets: [
            "Driveways and patios: split, flamed or riven finish, thicker pieces",
            "Elevation cladding: sawn or honed panels, calibrated thickness",
            "Jalis, columns and sculptures: monolithic blocks cut to size",
            "Pool coping: bullnosed, non-slip finish",
          ],
        },
        {
          id: "price-factors",
          heading: "What decides the price",
          paragraphs: [
            "There is no single price for Dholpur stone. The main factors are listed below; telling your supplier all of them is the quickest way to an accurate quote.",
          ],
          bullets: [
            "Colour and grade — some colours and uniform-tone selections cost more",
            "Thickness and size — larger, thicker pieces need more raw material",
            "Finish — sawn, honed, flamed, brushed, split or carved",
            "Quantity — larger orders are easier to price sharply",
            "Delivery distance and packing — freight is a real part of the total",
          ],
          callout: {
            title: "Quote checklist",
            text: "Colour, thickness, finish, size, quantity, project city — send these six details for a reliable quote.",
            type: "tip",
          },
        },
        {
          id: "buy-direct",
          heading: "Why buy direct from a mine owner",
          paragraphs: [
            "A mine owner controls extraction, cutting and grading, so colour variation is managed at source and there is no extra margin from traders. Dholpurstones.com has quarried stone since 1953 and supplies projects ranging from private farm houses to national landmarks.",
          ],
        },
      ],
      conclusion:
        "Pick the colour for the look you want, the finish for how the surface will be used, and send complete details for a quote. To see samples or get pricing, request a free quote from Dholpurstones.com.",
    },
  }),

  guide({
    slug: "sandstone-vs-marble-vs-kota-stone-flooring-which-is-better",
    title: "Sandstone vs Marble vs Kota Stone for Flooring: Which Should You Choose?",
    excerpt:
      "A practical comparison of natural sandstone, marble and Kota stone for floors — look, durability, slip resistance, maintenance and where each one belongs in an Indian home.",
    category: "Buying Guides",
    readTime: "7 min read",
    publishedDate: "October 23, 2026",
    featuredImage: "/assets/blog/indian-marble-luxury-interior.jpg",
    imageAlt: "Luxury interior with natural marble flooring and stone feature wall",
    tags: ["sandstone flooring", "marble flooring", "Kota stone", "natural stone flooring India", "outdoor flooring"],
    keyTakeaways: [
      "Marble is the premium choice for indoor living areas; sandstone is the better choice outdoors and in high-traffic areas.",
      "Kota stone is a budget-friendly limestone, popular for large floors and utility areas.",
      "Slip resistance, heat behaviour and maintenance matter as much as looks.",
      "Many homes combine stones — marble inside, sandstone on the porch, patio and driveway.",
    ],
    faqs: [
      { question: "Which is better for outdoor flooring, sandstone or marble?", answer: "Sandstone. Its natural texture gives better grip when wet and it tolerates sun, rain and temperature swings. Polished marble can become slippery and is better kept indoors." },
      { question: "Does sandstone stay cooler than marble?", answer: "Light-coloured, textured sandstone generally feels comfortable underfoot in sun because of its surface texture and thermal behaviour, which is why it is widely used around pools and terraces." },
      { question: "Can I use sandstone inside the house?", answer: "Yes. Honed sandstone suits verandas, courtyards, living areas and bedrooms where a warm, earthy look is wanted. Sealing is recommended in kitchens and bathrooms." },
    ],
    content: {
      intro:
        "Choosing a floor stone is mostly about where it will be laid. Here is how sandstone, marble and Kota stone compare in the situations homeowners actually face.",
      sections: [
        {
          id: "quick-comparison",
          heading: "Quick comparison",
          paragraphs: ["The table below summarises the typical differences. Exact performance varies by variety and finish."],
          table: {
            caption: "Sandstone vs marble vs Kota stone",
            headers: ["", "Sandstone", "Marble", "Kota stone"],
            rows: [
              ["Look", "Earthy, warm, textured", "Polished, veined, luxurious", "Plain, grey-green"],
              ["Best location", "Outdoors, porches, living areas", "Indoor living rooms, lobbies", "Large floors, utility areas"],
              ["Slip resistance", "Good, especially textured finishes", "Lower when polished and wet", "Good"],
              ["Maintenance", "Low; seal for stain protection", "Higher; polish and stain care", "Low"],
              ["Typical cost", "Mid", "Mid to high (by variety)", "Lower"],
            ],
          },
        },
        {
          id: "sandstone",
          heading: "When sandstone is the right choice",
          paragraphs: [
            "Sandstone is dense and weathers gracefully, which is why it is used on driveways, patios, steps and pool decks. Its colours — beige, red, pink, chocolate — hide dust and everyday marks, and a textured finish keeps it safe when wet.",
          ],
        },
        {
          id: "marble",
          heading: "When marble is worth it",
          paragraphs: [
            "Marble gives an unmatched sense of luxury in living rooms, entrances and bathrooms. Indian marble standards (IS 1130) set water absorption limits, and good installation with sealing keeps it looking new. It does need more care: avoid acidic cleaners and wipe spills quickly.",
          ],
        },
        {
          id: "kota",
          heading: "Where Kota stone fits",
          paragraphs: [
            "Kota stone is a fine-grained limestone from Rajasthan, valued for covering large floor areas economically. It suits garages, kitchens, schools and commercial spaces where durability and price matter more than an ornate look.",
          ],
        },
        {
          id: "mix-and-match",
          heading: "Mixing stones in one home",
          paragraphs: [
            "Many of our clients use marble in the main lounge and master bedroom, sandstone on the veranda, steps and driveway, and a plainer stone in service areas. A consistent colour family keeps the transition between them natural.",
          ],
        },
      ],
      conclusion:
        "Match the stone to the space: sandstone outdoors and for rustic warmth, marble indoors for polish, Kota for budget coverage. Dholpurstones.com supplies sandstone and marble — send your floor plan or requirement for a free quote.",
    },
  }),

  guide({
    slug: "how-to-choose-stone-for-farm-house-driveway-patio-pool",
    title: "How to Choose Stone for Your Farm House: Driveway, Patio, Pool and Garden",
    excerpt:
      "A step-by-step planning guide for farm house owners — which stone for each area, what finishes to ask for, how to avoid common mistakes and how to brief your supplier.",
    category: "Landscape Design",
    readTime: "8 min read",
    publishedDate: "October 23, 2026",
    featuredImage: "/assets/blog/farmhouse-patio-pool.jpg",
    imageAlt: "Farm house patio and pool deck paved in natural sandstone",
    tags: ["farm house stone", "garden landscaping stone", "driveway stone", "pool coping", "patio paving", "sandstone landscaping"],
    keyTakeaways: [
      "Plan stone by zone: driveway, patio, pool, steps, walls and features each need different thickness and finish.",
      "Choose slip-resistant finishes for wet zones and thicker pieces for vehicle zones.",
      "Stick to one or two colour families so the whole property feels unified.",
      "Share a simple layout and areas with your supplier to receive a complete quote and material schedule.",
    ],
    faqs: [
      { question: "Which stone is best for a farm house driveway?", answer: "Hand-split or heavy-duty sandstone in thicker sections is a common choice because it handles vehicle loads and weather. Your installer should confirm the sub-base." },
      { question: "What finish is safest around a pool?", answer: "A natural, riven or flamed finish with bullnosed coping gives good grip and a comfortable edge." },
      { question: "Do you supply and install?", answer: "Dholpurstones.com supplies and executes farm house and garden stonework. Share your project location to discuss the scope." },
    ],
    content: {
      intro:
        "A farm house has many surfaces, and each asks something different from the stone. Planning by zone avoids over-spending in some places and under-specifying in others.",
      sections: [
        {
          id: "plan-by-zone",
          heading: "Plan by zone",
          paragraphs: ["Start with a rough sketch and mark each outdoor zone. Then choose stone, thickness and finish zone by zone."],
          table: {
            caption: "Zone-wise stone planning",
            headers: ["Zone", "What it needs", "Typical choice"],
            rows: [
              ["Driveway & porch", "Load capacity, grip", "Thick hand-split or flamed sandstone"],
              ["Patio & lawn paths", "Comfort, even surface", "Sawn or riven tiles"],
              ["Pool deck & coping", "Non-slip, cool underfoot", "Riven/flamed, bullnosed coping"],
              ["Steps & retaining walls", "Strength, natural look", "Solid treads, natural walling stone"],
              ["Gazebo & features", "Craftsmanship", "Carved sandstone, jali panels"],
            ],
          },
        },
        {
          id: "colour-and-style",
          heading: "Choose colour and style",
          paragraphs: [
            "Beige suits most farm houses and blends with greenery. Red and pink give a heritage feel, and chocolate works well as an accent. Choose one main colour and one accent rather than mixing many.",
          ],
        },
        {
          id: "finish-and-thickness",
          heading: "Finish and thickness matter",
          paragraphs: [
            "Wet areas need textured finishes. Vehicle areas need thicker pieces laid on a proper sub-base. Ask your supplier for calibrated thickness so installation is even.",
          ],
          callout: {
            title: "Avoid this mistake",
            text: "Polished or very smooth stone around the pool looks premium in a showroom but is slippery in use. Always ask for a textured finish.",
            type: "tip",
          },
        },
        {
          id: "brief-your-supplier",
          heading: "How to brief your supplier",
          paragraphs: ["A good brief gets you a complete quote the first time."],
          bullets: [
            "Approximate area (sq ft) for each zone",
            "Preferred colour and finish",
            "Project city and site access",
            "Whether you need installation or only supply",
            "Photos of any look you like",
          ],
        },
      ],
      conclusion:
        "Plan by zone, pick a limited palette, insist on non-slip finishes and brief your supplier clearly. Farm house and garden stonework is our speciality — request a free quote and we will help you plan the material.",
    },
  }),

  guide({
    slug: "how-much-sandstone-do-i-need-quantity-wastage-ordering-checklist",
    title: "How Much Sandstone Do I Need? Quantity, Wastage and an Ordering Checklist",
    excerpt:
      "Learn how to measure your area, add the right wastage, understand thickness and avoid short orders — with a simple checklist to use before you place a sandstone order.",
    category: "Buying Guides",
    readTime: "6 min read",
    publishedDate: "October 23, 2026",
    featuredImage: "/assets/blog/front-elevation-architecture.jpg",
    imageAlt: "Sandstone elevation and paving being planned for a residential project",
    tags: ["sandstone quantity", "wastage", "ordering checklist", "stone estimate", "sandstone paving"],
    keyTakeaways: [
      "Measure the net area first, then add wastage for cutting, breakage and pattern matching.",
      "Always order from the same batch to keep colour consistent.",
      "Thickness depends on use — thicker for vehicles, thinner for wall cladding.",
      "Order a small extra reserve for future repairs.",
    ],
    faqs: [
      { question: "How much wastage should I add?", answer: "A common planning allowance is roughly 5–10% for simple layouts and more for diagonal patterns, curves or heavily cut areas. Your supplier or installer can confirm for your layout." },
      { question: "Why order everything at once?", answer: "Natural stone varies between batches. Ordering together keeps colour and tone consistent." },
      { question: "Can you help estimate quantity?", answer: "Yes — share a sketch or dimensions and our team will estimate area, wastage and pieces." },
    ],
    content: {
      intro: "Running short mid-project is expensive: a new batch may not match. A few minutes of planning avoids it.",
      sections: [
        {
          id: "measure",
          heading: "Measure the net area",
          paragraphs: [
            "Multiply length by width for each rectangular area and add them up. For circles use πr², and split irregular shapes into simple parts. Record area per zone, since finish and thickness may differ between zones.",
          ],
        },
        {
          id: "wastage",
          heading: "Add wastage",
          paragraphs: [
            "Cuts at edges, breakage in transit and pattern matching all consume stone. Plain straight layouts need less allowance; diagonal layouts, curves and borders need more.",
          ],
          table: {
            caption: "Planning allowance by layout (indicative)",
            headers: ["Layout", "Indicative allowance"],
            rows: [
              ["Straight, simple rectangle", "About 5%"],
              ["Mixed sizes / random pattern", "About 7–10%"],
              ["Diagonal, curved, many cuts", "10% or more"],
            ],
          },
        },
        {
          id: "thickness",
          heading: "Choose thickness for the use",
          paragraphs: [
            "Wall cladding can use thinner panels. Floors and patios need more thickness, and driveways need the thickest pieces laid on a proper sub-base. Ask your supplier to recommend thickness for your exact use.",
          ],
        },
        {
          id: "checklist",
          heading: "Ordering checklist",
          paragraphs: ["Before you confirm, check each point below."],
          bullets: [
            "Colour and finish approved from a physical sample",
            "Thickness and size confirmed for each zone",
            "Net area plus wastage calculated",
            "Delivery address, access and unloading plan",
            "Packing method agreed (crates for long distance or export)",
            "Small reserve kept for future repairs",
          ],
        },
      ],
      conclusion:
        "Measure, add wastage, confirm thickness and order from one batch. Send your dimensions to Dholpurstones.com and we will help estimate quantity and quote the order.",
    },
  }),

  guide({
    slug: "sandstone-care-maintenance-cleaning-sealing-stain-removal",
    title: "Sandstone Care and Maintenance: Cleaning, Sealing and Stain Removal",
    excerpt:
      "Simple, safe routines to keep natural sandstone looking good — everyday cleaning, when to seal, how to treat common stains and what products to avoid.",
    category: "Care & Maintenance",
    readTime: "6 min read",
    publishedDate: "October 23, 2026",
    featuredImage: "/assets/blog/dholpur-beige-facade.jpg",
    imageAlt: "Clean Dholpur sandstone facade and paving",
    tags: ["sandstone cleaning", "sandstone sealing", "stain removal", "stone maintenance", "outdoor stone care"],
    keyTakeaways: [
      "Everyday cleaning needs only water, a soft brush and mild neutral cleaner.",
      "Sealing helps resist stains, especially around kitchens, pools and dining areas.",
      "Avoid harsh acids and high-pressure jets held close to the surface.",
      "Test any cleaner or sealer on a hidden spot first.",
    ],
    faqs: [
      { question: "How often should sandstone be sealed?", answer: "It depends on use and exposure. High-use and stain-prone areas benefit from periodic re-sealing; follow the sealer manufacturer's guidance." },
      { question: "Can I pressure-wash sandstone?", answer: "Gently and from a distance. Strong close-range jets can erode the surface and open joints." },
      { question: "How do I remove algae or moss?", answer: "Brush with a mild neutral cleaner and water, rinse well, and keep drainage clear so areas dry out." },
    ],
    content: {
      intro: "Natural sandstone is low-maintenance, but a little regular care keeps colour fresh and prevents stains from setting.",
      sections: [
        {
          id: "daily-care",
          heading: "Everyday care",
          paragraphs: [
            "Sweep regularly and wash with clean water and a soft brush. For heavier dirt use a mild, pH-neutral stone cleaner. Rinse thoroughly so no residue is left behind.",
          ],
        },
        {
          id: "sealing",
          heading: "When and how to seal",
          paragraphs: [
            "A penetrating (impregnating) sealer reduces water and oil absorption without forming a plastic-looking film. Clean and dry the stone first, apply evenly, wipe excess and allow full curing time before use.",
          ],
          callout: { title: "Always test first", text: "Try the sealer on a spare piece or hidden corner to check the finish and colour change.", type: "tip" },
        },
        {
          id: "stains",
          heading: "Common stains",
          paragraphs: ["Act quickly: blot, don't rub."],
          table: {
            caption: "Stain quick guide",
            headers: ["Stain", "What to do"],
            rows: [
              ["Oil or grease", "Blot, then use a stone-safe degreaser or poultice"],
              ["Algae, moss", "Soft brush with neutral cleaner, rinse, improve drainage"],
              ["Rust marks", "Use a rust remover made for natural stone"],
              ["Food and drink", "Blot immediately, wash with mild cleaner"],
            ],
          },
        },
        {
          id: "avoid",
          heading: "What to avoid",
          paragraphs: ["A few habits cause most damage."],
          bullets: [
            "Strong acids and bleach",
            "Wire brushes and close-range high-pressure jets",
            "Leaving standing water on the surface",
            "Skipping joint maintenance, which lets water in",
          ],
        },
      ],
      conclusion:
        "Light, regular cleaning and sensible sealing keep sandstone beautiful for decades. For product advice for your stone and finish, ask the Dholpurstones.com team.",
    },
  }),

  guide({
    slug: "beige-white-or-grey-marble-how-to-choose-marble-colour",
    title: "Beige, White or Grey Marble? How to Choose the Right Marble Colour",
    excerpt:
      "A simple guide to choosing between beige, white and grey marble — mood, lighting, maintenance, popular varieties and how to see slabs before you buy.",
    category: "Marble & Gemstones",
    readTime: "7 min read",
    publishedDate: "October 23, 2026",
    featuredImage: "/assets/blog/bookmatched-marble-feature-wall.jpg",
    imageAlt: "Bookmatched white marble feature wall in a modern living room",
    tags: ["beige marble", "white marble", "grey marble", "Botticino", "Statuario", "Carrara", "marble colour guide"],
    keyTakeaways: [
      "Beige marble feels warm and timeless; white feels bright and luxurious; grey feels modern and dramatic.",
      "Naming varies by supplier — Statuario is a type of white marble from the Carrara region, while the name 'Botticino' is used for stones from more than one origin.",
      "Always choose from full-slab photos, not small tiles, to see veining and tone.",
      "Match the marble colour to your wall paint, furniture and lighting.",
    ],
    faqs: [
      { question: "Which marble colour is easiest to maintain?", answer: "Beige and mid-grey marbles tend to hide dust and marks better than pure white, though all marbles need quick spill cleanup." },
      { question: "What is the difference between Statuario and Carrara?", answer: "Statuario is a premium type of white marble from the Carrara area of Tuscany with bold grey veining on a bright white base; standard Carrara is typically softer in tone with finer grey veining." },
      { question: "Where can I see slab photos?", answer: "Browse our exclusive beige, white and grey marble collections, or message us on WhatsApp with the variety name and we will share slab photos." },
    ],
    content: {
      intro: "Marble is chosen with the eyes, so the best decisions come from seeing full slabs in the light your room will have. These pointers help narrow the options first.",
      sections: [
        {
          id: "beige-marble",
          heading: "Beige marble: warm and timeless",
          paragraphs: [
            "Beige marbles range from ivory to honey. Botticino-style beiges are a classic for floors and wall cladding. Because the Botticino name is used for stones of different origins, always confirm the origin and see the actual slab.",
          ],
        },
        {
          id: "white-marble",
          heading: "White marble: bright and luxurious",
          paragraphs: [
            "White marble reflects light and makes rooms feel larger. Statuario has bold grey veining on a clean white base; Carrara is softer with fine veining; Arabescato shows swirling patterns. Whites show marks more easily, so use them where you can maintain them.",
          ],
        },
        {
          id: "grey-marble",
          heading: "Grey marble: modern and dramatic",
          paragraphs: [
            "Grey marbles such as Pearl White, Venatino and Blue Wave suit contemporary interiors and feature walls. They pair well with dark joinery and metal accents.",
          ],
        },
        {
          id: "how-to-choose",
          heading: "How to choose with confidence",
          paragraphs: ["Use this short process."],
          bullets: [
            "Pick the mood: warm (beige), bright (white) or modern (grey)",
            "Shortlist 2–3 varieties and view full-slab photos",
            "Check the finish: polished, honed or leather",
            "Confirm origin, thickness and available quantity from one block",
            "Plan for sealing and routine care",
          ],
          callout: { title: "Standards note", text: "Indian Standard IS 1130 covers marble blocks, slabs and tiles, including a cap on water absorption — ask your supplier about quality testing.", type: "spec" },
        },
      ],
      conclusion:
        "Choose a mood, shortlist varieties and decide from full-slab photos. Browse our exclusive marble collection or WhatsApp us the variety you like for photos and a quote.",
    },
  }),

  guide({
    slug: "is-3622-sandstone-standard-quality-tests-what-to-ask-supplier",
    title: "IS 3622 and Sandstone Quality Tests: What to Ask Your Supplier",
    excerpt:
      "Understand the Indian Standard for sandstone slabs and tiles, the tests behind it and the questions that separate a reliable supplier from a risky one.",
    category: "Buying Guides",
    readTime: "7 min read",
    publishedDate: "October 23, 2026",
    featuredImage: "/assets/blog/front-elevation-architecture.jpg",
    imageAlt: "Sandstone slabs prepared for quality testing and inspection",
    tags: ["IS 3622", "sandstone standard", "stone testing", "water absorption", "compressive strength", "quality control"],
    keyTakeaways: [
      "IS 3622 is the Indian Standard for sandstone slabs and tiles for flooring and cladding.",
      "It sets limits for properties such as water absorption, transverse strength and abrasion.",
      "Test methods for stone strength and absorption are given in IS 1121 and IS 1124.",
      "Ask for recent, batch-specific test reports from an accredited laboratory.",
    ],
    faqs: [
      { question: "What does IS 3622 cover?", answer: "IS 3622 (1977) covers sandstone slabs and tiles used for flooring and cladding, including requirements for physical properties and dimensions." },
      { question: "Which tests matter most for outdoor stone?", answer: "Water absorption, strength (compressive and transverse), abrasion resistance and durability against weathering are the key checks." },
      { question: "Can you share test reports?", answer: "Ask via the enquiry form or WhatsApp — our team can share available test documentation for the stone you are considering." },
    ],
    content: {
      intro: "Photos show colour, not quality. A standard and a test report show quality. This guide keeps the technical side simple.",
      sections: [
        {
          id: "what-is-is-3622",
          heading: "What is IS 3622?",
          paragraphs: [
            "IS 3622:1977 is the Bureau of Indian Standards specification for sandstone (slabs and tiles) used in flooring and cladding. It lays out physical property requirements, along with dimensions and finish expectations.",
          ],
        },
        {
          id: "key-properties",
          heading: "Key properties to understand",
          paragraphs: ["The standard sets limits that help predict how stone behaves in service."],
          table: {
            caption: "Properties in the sandstone standard (summary)",
            headers: ["Property", "Why it matters", "Reference"],
            rows: [
              ["Water absorption", "Lower absorption means better frost, stain and weather resistance", "IS 3622 limit: not more than 2.5%; test method IS 1124"],
              ["Transverse strength", "Resistance to bending and breaking under load", "IS 3622 minimum: 7 N/mm²; test method IS 1121 (Part 2)"],
              ["Abrasion", "Wear in walked-on floors", "IS 3622 limit; test method IS 1706"],
              ["Compressive strength", "Load-bearing capacity", "Test method IS 1121 (Part 1)"],
            ],
          },
          callout: { title: "Verify before you specify", text: "Values quoted here come from published summaries of the standard — confirm limits against the current BIS text for your specification.", type: "spec" },
        },
        {
          id: "questions-to-ask",
          heading: "Questions to ask your supplier",
          paragraphs: ["These questions reveal how serious a supplier is about quality."],
          bullets: [
            "Do you own the quarry or buy from traders?",
            "Can you share recent test reports for this batch?",
            "Which laboratory tested it, and to which methods?",
            "How do you control thickness and colour consistency?",
            "How is the stone packed to prevent transit damage?",
          ],
        },
        {
          id: "our-approach",
          heading: "Our approach",
          paragraphs: [
            "As a quarry owner we control extraction and grading, calibrate thickness in-house and pack for road and sea. Our published stone data shows compressive strength above 68 MPa and water absorption near 1.1%. We share available test documentation on request.",
          ],
        },
      ],
      conclusion:
        "Standards and test reports turn a stone choice into a specification. Ask for them — and if you want ours, contact Dholpurstones.com.",
    },
  }),

  guide({
    slug: "how-to-import-natural-stone-from-india-documents-packing-shipping",
    title: "How to Import Natural Stone from India: Documents, Packing and Shipping Steps",
    excerpt:
      "A practical overview for overseas buyers — HS classification, key shipping documents, crating for sea freight and how to plan a first container of Indian sandstone or marble.",
    category: "Export & Business",
    readTime: "8 min read",
    publishedDate: "October 23, 2026",
    featuredImage: "/assets/blog/marble-sandstone-royal-palace.jpg",
    imageAlt: "Natural stone prepared for export from India",
    tags: ["import stone from India", "sandstone export", "HS 6802", "stone shipping", "ISPM-15", "container loading"],
    keyTakeaways: [
      "Worked stone for buildings is generally classified under HS heading 6802 — confirm the exact code with your customs broker.",
      "Standard export paperwork includes a commercial invoice, packing list, bill of lading and insurance.",
      "Stone needs sturdy, treated wooden crating and careful container loading.",
      "Agree samples, finish, tolerances and Incoterms before production starts.",
    ],
    faqs: [
      { question: "Do you export sandstone and marble?", answer: "Yes. Dholpurstones.com exports natural stone and stone articles worldwide and has an overseas office in Canada." },
      { question: "What documents are needed?", answer: "Typically a commercial invoice, packing list, bill of lading or airway bill, and insurance. Some countries also ask for a certificate of origin — check with your customs broker." },
      { question: "How is stone packed for sea freight?", answer: "In sturdy wooden crates treated to ISPM-15 standards, with protection between slabs and secure blocking inside the container." },
    ],
    content: {
      intro: "Importing stone is straightforward when each step is planned. This guide outlines the process from first enquiry to delivery.",
      sections: [
        {
          id: "plan-order",
          heading: "Step 1: Define the order",
          paragraphs: [
            "Decide the stone, colour, finish, sizes, thickness and quantity. Ask for physical samples and approve them in writing so production matches what you saw.",
          ],
        },
        {
          id: "classification",
          heading: "Step 2: Classification and paperwork",
          paragraphs: [
            "Worked stone for building and monumental use is generally classified under HS heading 6802. Your customs broker will confirm the exact tariff line and any duties in your country.",
          ],
          table: {
            caption: "Core export documents",
            headers: ["Document", "Purpose"],
            rows: [
              ["Commercial invoice", "Value, product description, Incoterms"],
              ["Packing list", "Contents, weights, dimensions, markings"],
              ["Bill of lading", "Transport contract and proof of shipment"],
              ["Insurance certificate", "Cover against loss or damage in transit"],
              ["Certificate of origin (if required)", "Proof of origin for duty purposes"],
            ],
          },
        },
        {
          id: "packing",
          heading: "Step 3: Packing and loading",
          paragraphs: [
            "Slabs and tiles are packed in treated wooden crates (ISPM-15 compliant for international shipping) with protection between pieces. Inside the container, loads must be blocked and braced so nothing shifts at sea.",
          ],
        },
        {
          id: "incoterms",
          heading: "Step 4: Agree shipping terms",
          paragraphs: [
            "Choose Incoterms such as FOB or CIF, agree payment terms and confirm lead time. Clear terms prevent disputes at the port.",
          ],
          bullets: [
            "Confirm ports of loading and discharge",
            "Agree production and shipping timeline",
            "Decide who arranges insurance and customs clearance",
          ],
        },
      ],
      conclusion:
        "With samples approved, paperwork aligned and proper crating, importing Indian stone is smooth. Talk to our export team for a quotation and shipping plan.",
    },
  }),

  guide({
    slug: "backlit-semi-precious-stone-panels-agate-lapis-jasper-interiors",
    title: "Backlit Semi-Precious Stone Panels: Using Agate, Lapis and Jasper in Interiors",
    excerpt:
      "Where backlit gemstone slabs work best — feature walls, reception desks, bars and tabletops — with notes on lighting, thickness, care and the stones available.",
    category: "Marble & Gemstones",
    readTime: "6 min read",
    publishedDate: "October 23, 2026",
    featuredImage: "/assets/blog/pietra-dura-marble-inlay.jpg",
    imageAlt: "Backlit semi-precious agate stone feature panel in an interior",
    tags: ["semi precious stone slabs", "backlit agate", "lapis lazuli", "red jasper", "gemstone feature wall"],
    keyTakeaways: [
      "Translucent stones like agate glow when backlit and become the focal point of a room.",
      "Feature walls, reception counters, bar fronts and tabletops are the most popular uses.",
      "Use LED panels designed for stone and plan access for maintenance.",
      "Each slab is unique — approve the actual slab photo before fabrication.",
    ],
    faqs: [
      { question: "Which stones can be backlit?", answer: "Translucent stones such as blue, green and fire agate respond best. Opaque stones like lapis and jasper are used as polished feature surfaces." },
      { question: "Are the slabs natural?", answer: "Our semi-precious range is natural stone, cut and polished into slabs and panels; patterns and colours vary slab to slab." },
      { question: "Can you cut to size?", answer: "Yes, panels can be cut and finished to size. Share your dimensions with the enquiry." },
    ],
    content: {
      intro: "Few materials create a statement like a glowing gemstone wall. Here is how to use them well.",
      sections: [
        {
          id: "best-uses",
          heading: "Where they work best",
          paragraphs: ["Gemstone slabs suit small, high-impact areas rather than entire floors."],
          bullets: [
            "Feature walls behind a sofa, bed or reception",
            "Bar fronts and counter tops",
            "Dining and console tabletops",
            "Wash basins and decor pieces",
          ],
        },
        {
          id: "stone-choices",
          heading: "Choosing the stone",
          paragraphs: ["Pick the stone for its colour and light behaviour."],
          table: {
            caption: "Popular semi-precious stones",
            headers: ["Stone", "Look", "Backlit?"],
            rows: [
              ["Blue agate", "Blue banded patterns", "Excellent"],
              ["Green agate", "Fresh green mosaic", "Excellent"],
              ["Fire agate", "Amber and orange glow", "Excellent"],
              ["Lapis lazuli", "Deep royal blue", "Polished surface"],
              ["Tiger's eye", "Golden shimmer", "Polished surface"],
              ["Red jasper", "Bold crimson", "Polished surface"],
            ],
          },
        },
        {
          id: "lighting",
          heading: "Lighting and installation",
          paragraphs: [
            "Use even, cool-running LED panels sized to the slab and allow access to replace them. Fabricators typically bond thin slabs to a supportive backing for strength.",
          ],
        },
        {
          id: "care",
          heading: "Care",
          paragraphs: ["Wipe with a soft, damp cloth. Avoid abrasive pads and harsh chemicals."],
        },
      ],
      conclusion:
        "Gemstone panels turn a wall or counter into art. See our semi-precious and precious gem surface collections, or send your dimensions for a quote.",
    },
  }),

  guide({
    slug: "hand-carved-sandstone-sculptures-for-gardens-buying-guide",
    title: "Hand-Carved Sandstone Sculptures for Gardens: A Buying Guide",
    excerpt:
      "How to choose peacocks, lions, lanterns, elephants and fountains for your garden or entrance — sizes, placement, commissioning process and care.",
    category: "Artisanal Craftsmanship",
    readTime: "7 min read",
    publishedDate: "October 23, 2026",
    featuredImage: "/assets/blog/shilpa-shastra-carving.jpg",
    imageAlt: "Master artisan hand carving a sandstone sculpture",
    tags: ["stone sculptures", "garden statues", "sandstone peacock", "stone lantern", "stone fountain", "hand carved stone"],
    keyTakeaways: [
      "Choose the piece for its symbolism and scale — a guardian lion for gates, a peacock for lawns, a lantern for pathways.",
      "Custom size and design are normal; share a reference photo and the intended spot.",
      "Hand carving takes time — plan ahead and approve the design before work begins.",
      "Sandstone sculptures weather well outdoors with simple care.",
    ],
    faqs: [
      { question: "Can I order a custom size or design?", answer: "Yes. Share a photo or sketch, the size and the location, and our Sikandra artisans will advise on feasibility and timeline." },
      { question: "Are the sculptures hand carved?", answer: "Yes — they are carved by hereditary master artisans using traditional methods." },
      { question: "Do you ship sculptures?", answer: "We pack in protective wooden crates and ship across India and overseas." },
    ],
    content: {
      intro: "A well-chosen sculpture gives a garden or entrance a focal point and a sense of character. These pointers help you choose and commission.",
      sections: [
        {
          id: "choosing-the-piece",
          heading: "Choosing the piece",
          paragraphs: ["Each form carries meaning and suits a place."],
          table: {
            caption: "Sculptures and where they suit",
            headers: ["Piece", "Meaning / use", "Best placed"],
            rows: [
              ["Guardian lions", "Strength, protection", "Gates, porticos, entrances"],
              ["Peacocks", "Grace, beauty", "Lawns, fountains, courtyards"],
              ["Elephants", "Auspiciousness, prosperity", "Entrances, gardens"],
              ["Lanterns", "Light, warmth", "Pathways, patios, pool edges"],
              ["Fountains", "Calm, movement", "Courtyards, garden centres"],
            ],
          },
        },
        {
          id: "size-and-scale",
          heading: "Size and scale",
          paragraphs: [
            "Scale the piece to its surroundings: a large gate needs a substantial pair of lions; a small courtyard suits a modest fountain. Mock up the size with a cardboard cut-out before ordering.",
          ],
        },
        {
          id: "commissioning",
          heading: "How commissioning works",
          paragraphs: ["The process is simple."],
          bullets: [
            "Share a reference photo, size and location",
            "Receive design confirmation and timeline",
            "Hand carving by master artisans",
            "Finishing, crating and delivery",
          ],
        },
        {
          id: "care-outdoors",
          heading: "Care outdoors",
          paragraphs: ["Sandstone weathers gracefully. Brush off dust and algae and keep surrounding drainage clear."],
        },
      ],
      conclusion:
        "A hand-carved piece becomes part of the property's identity. Browse our stone articles or send us your idea to commission one.",
    },
  }),

  guide({
    slug: "dholpur-stone-vs-granite-vs-kota-stone-outdoor-flooring",
    title: "Dholpur Stone vs Granite vs Kota Stone for Outdoor Flooring",
    excerpt:
      "Which natural stone should you lay on a terrace, driveway or garden path? A clear comparison of Dholpur sandstone, granite and Kota stone for outdoor use in Indian climates.",
    category: "Buying Guides",
    readTime: "6 min read",
    publishedDate: "October 23, 2026",
    featuredImage: "/assets/blog/dholpur-beige-facade.jpg",
    imageAlt: "Outdoor terrace paved in natural Dholpur sandstone",
    tags: ["outdoor flooring stone", "Dholpur stone vs granite", "Kota stone", "terrace flooring", "driveway paving"],
    keyTakeaways: [
      "Dholpur sandstone offers warm colour, natural grip and carving flexibility.",
      "Granite is extremely hard and durable but can be hot and slippery when polished.",
      "Kota stone is economical and widely used for large areas, with a plainer look.",
      "Texture matters more than the stone: choose non-polished finishes outdoors.",
    ],
    faqs: [
      { question: "Which is best for a driveway?", answer: "Thick sandstone or granite in a textured finish suits driveways. Sandstone gives a warmer look; granite is harder and costlier to shape." },
      { question: "Which is coolest underfoot?", answer: "Light-coloured, textured stones such as beige sandstone generally stay more comfortable than dark polished granite in strong sun." },
      { question: "Which is cheapest?", answer: "Kota stone is usually the most economical, but price depends on thickness, finish and quantity — request a quote for your case." },
    ],
    content: {
      intro: "Outdoor floors face sun, rain, dust and footfall. Here is how three popular Indian stones compare.",
      sections: [
        {
          id: "comparison",
          heading: "Side-by-side comparison",
          paragraphs: ["General characteristics; actual performance depends on variety and finish."],
          table: {
            caption: "Outdoor flooring stones compared",
            headers: ["", "Dholpur sandstone", "Granite", "Kota stone"],
            rows: [
              ["Look", "Warm beige, red, pink, chocolate", "Speckled, dark or light", "Plain grey-green"],
              ["Grip", "Good when textured", "Slippery if polished", "Good"],
              ["Heat", "Comfortable in light colours", "Can get hot (dark)", "Moderate"],
              ["Carving / profiling", "Easy", "Difficult", "Limited"],
              ["Cost", "Mid", "Mid to high", "Lower"],
            ],
          },
        },
        {
          id: "why-sandstone",
          heading: "Why many choose sandstone",
          paragraphs: [
            "Dholpur sandstone is compact, easy to dress and available in warm colours that suit gardens and elevations. It can also be profiled into steps, coping and edges from the same material, so everything matches.",
          ],
        },
        {
          id: "choose-finish",
          heading: "Choose a safe finish",
          paragraphs: ["Whatever the stone, avoid polish outdoors. Flamed, riven, brushed or split finishes grip well and hide wear."],
        },
      ],
      conclusion:
        "For warmth, grip and flexibility outdoors, Dholpur sandstone is hard to beat. Request a free quote to compare finishes and pricing for your area.",
    },
  }),
];
