// app/robots.txt/route.js

export async function GET() {
  const robots = `User-Agent: *
Allow: /

Sitemap: https://sakayet.vercel.app/sitemap.xml`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain", // ✅ robots.txt text format
    },
  });
}
