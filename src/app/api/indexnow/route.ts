import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/site";
import { INDEXNOW_KEY } from "@/lib/indexnow";
import sitemap from "@/app/sitemap";

export const runtime = "nodejs";

/**
 * Submits every URL in the sitemap to IndexNow (Bing, Yandex, Seznam, Naver…).
 * Protect with INDEXNOW_SECRET:  curl -X POST -H "Authorization: Bearer <secret>" https://yourdomain/api/indexnow
 */
export async function POST(req: Request) {
  const secret = process.env.INDEXNOW_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const urlList = sitemap().map((e) => e.url);
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  return NextResponse.json({ submitted: urlList.length, status: res.status });
}
