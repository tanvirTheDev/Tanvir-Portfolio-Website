/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.tanvirthedev.com", // ✅ your domain (no trailing slash)
  generateRobotsTxt: true, // ✅ generate robots.txt automatically
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  outDir: "./public", // 🔥 ensure sitemap.xml and robots.txt go to /public
  exclude: ["/admin/*", "/api/*"], // exclude private routes if any
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"], // disallow backend/api routes
      },
    ],
  },
};
