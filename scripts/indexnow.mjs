/**
 * Submit all sitemap URLs to IndexNow after each deploy:
 *   SITE_URL=https://yourdomain.com npm run indexnow
 */
import { readFileSync } from "node:fs";

const site = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://dholpurestones.com").replace(/\/$/, "");
const keySource = readFileSync(new URL("../src/lib/indexnow.ts", import.meta.url), "utf8");
const key = keySource.match(/INDEXNOW_KEY = "([a-f0-9]+)"/)?.[1];
if (!key) throw new Error("IndexNow key not found in src/lib/indexnow.ts");

const xml = await (await fetch(`${site}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error(`No URLs found in ${site}/sitemap.xml`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/${key}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`);
