# Dholpurstones.com

Next.js (App Router) website for Dholpurstones.com — Dholpur sandstone, marble, semi-precious stones, stone articles and farm house & garden stonework.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Where to edit content

| What | File |
| --- | --- |
| Categories, sub-categories, images, projects | `src/data/catalog.ts` |
| FAQs (also used for FAQ schema) | `src/data/faqs.ts` |
| Blog posts | `src/data/blogData.ts` (older), `src/data/blogPostsGuides.ts` (new guides) |
| Domain, keywords | `src/lib/site.ts` |

Adding a blog post: add an object with `guide({...})` in `blogPostsGuides.ts`. It gets its own URL (`/blog/<slug>`), schema, sitemap entry and `llms.txt` entry automatically.

## Enquiries and lead tracking

Every enquiry form, quote button and WhatsApp link is tracked:

- Forms post to `/api/contact` with the **page**, **button**, first-visit **landing page**, **referrer** and **UTM / gclid**.
- WhatsApp messages get `[Page: /path]` appended, so you can see where each chat started.
- GA4 events: `generate_lead`, `whatsapp_click`, `phone_click`, `email_click`.

**WhatsApp:** after a visitor submits any enquiry form, WhatsApp opens automatically with all their details pre-filled (they just tap Send), so every enquiry also lands in the business WhatsApp. For fully automatic delivery set the Meta WhatsApp Cloud API variables below.

Set these in the hosting environment (see `.env.example`) so leads also reach you without the visitor pressing Send — otherwise they only appear in server logs:

- `RESEND_API_KEY` + `LEAD_TO_EMAIL` — email each lead, or
- `LEAD_WEBHOOK_URL` — send to Google Sheets (Apps Script), Zapier, Make or a CRM, or
- `WHATSAPP_CLOUD_TOKEN` + `WHATSAPP_PHONE_NUMBER_ID` + `LEAD_WHATSAPP_TO` (+ `WHATSAPP_TEMPLATE_NAME`) — Meta WhatsApp Cloud API.

## SEO / AI search

- Canonical domain: `NEXT_PUBLIC_SITE_URL` (default `https://www.dholpurstones.com`).
- `/sitemap.xml`, `/robots.txt` (search + AI crawlers allowed), `/llms.txt`, `/llms-full.txt` are generated from the data files.
- JSON-LD: Organization, LocalBusiness, WebSite (root); BreadcrumbList, ItemList, FAQPage, BlogPosting on pages.
- **IndexNow (Bing, Yandex…)**: key file is served at `/<key>.txt`. After each deploy run `SITE_URL=https://yourdomain.com npm run indexnow`, or `POST /api/indexnow` with `Authorization: Bearer $INDEXNOW_SECRET`.
- Add the Bing Webmaster verification code as `NEXT_PUBLIC_BING_VERIFICATION`, then submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
