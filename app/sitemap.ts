/**
 * ANNIVERSARY CELEBRATION VADODARA - SEO OPTIMIZED SITEMAP
 * Domain: anniversarycelebrationvadodara.com
 * 
 * Total Pages: 58 including:
 * - 1 Homepage (priority 1.0)
 * - 2 Static pages (about, contact) (priority 0.8)
 * - 1 Areas index page (priority 0.8)
 * - 30 Keyword pages (priority 0.9) - Main SEO pages
 * - 24 Vadodara Area pages (priority 0.85)
 * 
 * Last Updated: January 2026
 */

import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://anniversarycelebrationvadodara.com";
  const currentDate = new Date().toISOString();
  
  const entries: MetadataRoute.Sitemap = [];
  
  // ==================== HOME PAGE ====================
  entries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
  });
  
  // ==================== STATIC PAGES ====================
  const staticPages = [
    { path: '/about', priority: 0.8, freq: 'monthly' as const },
    { path: '/contact', priority: 0.9, freq: 'monthly' as const },
    { path: '/areas', priority: 0.8, freq: 'weekly' as const },
  ];
  
  staticPages.forEach((page) => {
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.freq,
      priority: page.priority,
    });
  });
  
  // ==================== KEYWORD PAGES (30 MAIN SEO PAGES) ====================
  const keywordPages = [
    'anniversary-celebration-ideas-vadodara',
    'anniversary-date-night-vadodara',
    'anniversary-decoration-vadodara',
    'anniversary-dinner-vadodara',
    'anniversary-gift-ideas-vadodara',
    'anniversary-party-organizers-vadodara',
    'anniversary-planners-vadodara',
    'anniversary-restaurants-vadodara',
    'anniversary-surprise-for-husband-vadodara',
    'anniversary-surprise-for-wife-vadodara',
    'anniversary-venues-vadodara',
    'best-anniversary-places-vadodara',
    'candlelight-anniversary-dinner-vadodara',
    'first-anniversary-celebration-vadodara',
    '5th-anniversary-celebration-vadodara',
    '10th-anniversary-celebration-vadodara',
    '15th-anniversary-celebration-vadodara',
    '20th-anniversary-celebration-vadodara',
    '25th-anniversary-celebration-vadodara',
    '30th-anniversary-celebration-vadodara',
    '50th-anniversary-celebration-vadodara',
    'luxury-anniversary-celebration-vadodara',
    'affordable-anniversary-celebration-vadodara',
    'outdoor-anniversary-celebration-vadodara',
    'private-anniversary-celebration-vadodara',
    'romantic-anniversary-date-vadodara',
    'romantic-anniversary-setup-vadodara',
    'rooftop-anniversary-vadodara',
    'surprise-anniversary-party-vadodara',
    'wedding-anniversary-party-vadodara',
  ];

  keywordPages.forEach((slug) => {
    entries.push({
      url: `${baseUrl}/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });
  
  // ==================== AREA PAGES (24 VADODARA AREAS) ====================
  const areaPages = [
    'alkapuri-vadodara',
    'akota-vadodara',
    'fatehgunj-vadodara',
    'sayajigunj-vadodara',
    'manjalpur-vadodara',
    'karelibaug-vadodara',
    'race-course-vadodara',
    'vasna-vadodara',
    'sama-vadodara',
    'gotri-vadodara',
    'waghodia-road-vadodara',
    'bil-vadodara',
    'nizampura-vadodara',
    'old-padra-road-vadodara',
    'ellora-park-vadodara',
    'subhanpura-vadodara',
    'harni-vadodara',
    'tandalja-vadodara',
    'bhayli-vadodara',
    'sevasi-vadodara',
    'chhani-vadodara',
    'makarpura-vadodara',
    'gorwa-vadodara',
    'tarsali-vadodara',
    'ajwa-road-vadodara',
  ];

  areaPages.forEach((slug) => {
    entries.push({
      url: `${baseUrl}/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  return entries;
}
