export default function sitemap() {
  const routes = [
    "",           // homepage
    "about",      // about page
    "resume",   // projects/portfolio page
    "portfolio",   // projects/portfolio page
    "contact",    // contact page
  ];

  return routes.map((route) => ({
    url: `https://sakayet.vercel.app/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
