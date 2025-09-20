export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://sakayet.vercel.app/sitemap.xml",
  };
}
