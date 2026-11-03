export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: [] }],
    sitemap: "https://santo-square-automation.vercel.app/sitemap.xml",
  };
}
