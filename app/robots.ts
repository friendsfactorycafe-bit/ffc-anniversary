/**
 * ANNIVERSARY CELEBRATION VADODARA - SEO OPTIMIZED ROBOTS.TXT
 * Domain: anniversarycelebrationvadodara.com
 * 
 * Configuration for search engine crawlers:
 * - Allow all public pages
 * - Block admin, API, and private routes
 * - Specify sitemap location
 * 
 * Last Updated: January 2026
 */

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://anniversarycelebrationvadodara.com";
  
  return {
    rules: [
      {
        // Default rule for all crawlers
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/_next/",
          "/*.json$",
        ],
      },
      {
        // Google crawler - full access
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        // Google Images crawler
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        // Bing crawler
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
