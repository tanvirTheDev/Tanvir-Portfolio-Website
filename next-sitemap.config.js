/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.tanvirthedev.com", // ✅ your domain (no trailing slash)
    generateRobotsTxt: true, // ✅ generate robots.txt automatically
    sitemapSize: 7000,
    changefreq: "weekly",
    priority: 0.7,
    exclude: ["/admin/*", "/api/*"], // exclude private routes if any
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/", "/admin/"], // disallow backend/api routes
        },
      ],
      additionalSitemaps: [
        "https://www.tanvirthedev.com/sitemap.xml", // optional for multi-site
      ],
    },
  };
  