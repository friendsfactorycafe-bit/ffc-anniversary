/**
 * ANNIVERSARY CELEBRATION VADODARA - SEO OPTIMIZED SITEMAP
 * Domain: anniversarydinnervadodara.com
 * 
 * Total Pages: 90 including:
 * - 1 Homepage (priority 1.0)
 * - 2 Static pages (about, contact) (priority 0.8)
 * - 1 Areas index page (priority 0.8)
 * - 62 Keyword pages (priority 0.9) - Main SEO pages (30 original + 32 couple-focused)
 * - 24 Vadodara Area pages (priority 0.85)
 * 
 * Last Updated: January 2026
 */

import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://anniversarydinnervadodara.com";
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
    // Couple-focused anniversary pages
    'anniversary-surprise-for-partner-vadodara',
    'anniversary-couple-dinner-vadodara',
    'anniversary-date-ideas-vadodara',
    'anniversary-couple-experience-vadodara',
    'intimate-anniversary-dinner-vadodara',
    'anniversary-dinner-for-two-vadodara',
    'anniversary-celebration-with-cake-vadodara',
    'anniversary-celebration-with-flowers-vadodara',
    'anniversary-celebration-with-music-vadodara',
    'anniversary-under-stars-vadodara',
    'anniversary-for-newlyweds-vadodara',
    'anniversary-couple-photoshoot-vadodara',
    'anniversary-love-celebration-vadodara',
    'anniversary-couple-package-vadodara',
    'anniversary-couple-venue-vadodara',
    'anniversary-date-plan-vadodara',
    'romantic-anniversary-evening-vadodara',
    'anniversary-dinner-with-decoration-vadodara',
    'anniversary-moonlight-dinner-vadodara',
    'anniversary-fairy-light-setup-vadodara',
    'anniversary-rooftop-dinner-vadodara',
    'anniversary-surprise-for-soulmate-vadodara',
    'anniversary-candlelight-setup-vadodara',
    'anniversary-special-evening-vadodara',
    'first-month-anniversary-celebration-vadodara',
    '2nd-anniversary-celebration-vadodara',
    '3rd-anniversary-celebration-vadodara',
    '7th-anniversary-celebration-vadodara',
    '40th-anniversary-celebration-vadodara',
    'anniversary-dinner-booking-vadodara',
    'anniversary-celebration-near-me-vadodara',
    'couple-anniversary-celebration-vadodara',
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
