// app/robots.txt/route.js

export async function GET() {
  return new Response(
    `User-Agent: *
Allow: /

Sitemap: https://sakayet.vercel.app/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
