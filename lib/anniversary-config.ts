// Anniversary Celebration Vadodara - Configuration
// Dedicated Anniversary Celebration Service

export interface SetupPackage {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  cakeIncluded: boolean;
  features: string[];
  perfectFor: string[];
  thumbnail: string;
  images: string[];
}

export interface ServiceKeyword {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
}

export interface AreaConfig {
  slug: string;
  name: string;
}

// ==================== SITE CONFIG ====================
export const siteConfig = {
  name: "Anniversary Celebration Vadodara",
  tagline: "Create Timeless Memories on Your Special Day",
  description: "Vadodara's premier anniversary celebration destination. Elegant private venues, romantic decorations, candlelight dinners, and personalized celebration packages for couples celebrating their love story.",
  phone: "+91 7487888730",
  whatsapp: "917487888730",
  email: "hello@anniversarycelebrationvadodara.com",
  address: "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Besides Adventuraa, Sevasi - Canal Rd, Gotri, Vadodara, Gujarat 391101",
  city: "Vadodara",
  website: "https://anniversarycelebrationvadodara.com",
  colors: {
    primary: "#BE185D", // Rose Pink
    secondary: "#F472B6",
    accent: "#9D174D",
    gradient: "from-rose-600 to-pink-600",
    gradientHover: "from-rose-700 to-pink-700",
    lightBg: "bg-rose-50",
    darkBg: "bg-rose-900",
    text: "text-rose-600"
  },
  socialLinks: {
    instagram: "https://www.instagram.com/anniversarycelebrationvadodara/",
    facebook: "https://www.facebook.com/anniversarycelebrationvadodara/",
    youtube: ""
  }
};

// ==================== ANNIVERSARY PACKAGES ====================
export const packages: SetupPackage[] = [
  {
    id: "anniversary-1",
    slug: "eternal-love-celebration",
    name: "Eternal Love Celebration",
    emoji: "💕",
    shortDescription: "A romantic rooftop celebration under the stars to honor your timeless love story",
    fullDescription: `💕 Eternal Love Celebration — Where Your Love Story Continues Under the Stars

Celebrate another beautiful year together in a magical rooftop setting designed exclusively for couples. The Eternal Love Celebration package transforms your anniversary into an unforgettable evening of romance, elegance, and cherished moments.

✨ Package Highlights:

• 3 Hours of Private Rooftop Exclusivity
Your own romantic haven with panoramic city views, perfect for intimate anniversary celebrations.

• Elegant Anniversary Decorations
Rose petals, heart-shaped balloons, fairy lights, and romantic table settings create the perfect ambiance for your special day.

• Complimentary Anniversary Cake 🎂
A beautifully decorated celebration cake to mark another year of love.

• Welcome Drinks & Curated Refreshments
Begin your evening with specially selected welcome drinks and premium treats.

• Candlelight Dinner Setup 🕯️
Intimate candlelit seating with soft music to set the mood for romance.

• Professional Photo Corner
Capture your special moments with our Instagram-worthy backdrop setup.

Perfect for couples seeking a memorable way to celebrate their love milestone.`,
    price: 6900,
    cakeIncluded: true,
    features: [
      "3 Hours Private Rooftop Celebration",
      "Elegant Anniversary Decorations",
      "Complimentary Anniversary Cake",
      "Welcome Drinks & Premium Refreshments",
      "Candlelight Dinner Setup",
      "Rose Petal Decoration",
      "Romantic Background Music",
      "Photo Corner Setup"
    ],
    perfectFor: ["Wedding Anniversary", "Dating Anniversary", "Milestone Celebrations", "Romantic Surprises"],
    thumbnail: "/images/gallery/IMG_20251108_195907946.jpg",
    images: [
      "/images/gallery/IMG_20251108_195907946.jpg",
      "/images/gallery/IMG_20251108_195914428.jpg",
      "/images/gallery/IMG_20251108_195959576.jpg"
    ]
  },
  {
    id: "anniversary-2",
    slug: "golden-memories-glasshouse",
    name: "Golden Memories Glass House",
    emoji: "✨",
    shortDescription: "An intimate glass house setting for couples who want privacy and elegance",
    fullDescription: `✨ Golden Memories Glass House — Create Golden Moments in an Enchanting Setting

Step into our elegant glass house venue where every detail is designed to make your anniversary extraordinary. The Golden Memories package offers privacy, sophistication, and romance in a stunning climate-controlled environment.

✨ Package Highlights:

• 3 Hours in Private Glass House
An exclusive, beautifully decorated space just for the two of you.

• Premium Anniversary Decorations
Elegant golden accents, soft lighting, flowers, and romantic décor elements.

• Complimentary Anniversary Cake 🎂
A specially prepared cake to sweeten your celebration.

• Gourmet Refreshments & Welcome Treats
Handpicked treats and beverages for a premium experience.

• Intimate Candlelight Setting
Romantic table setup with candles and soft ambient lighting.

• Climate-Controlled Comfort
Enjoy your celebration in perfect comfort regardless of weather.

Ideal for couples who appreciate elegance and want an intimate, private celebration space.`,
    price: 6500,
    cakeIncluded: true,
    features: [
      "3 Hours Private Glass House",
      "Premium Golden Theme Decorations",
      "Complimentary Anniversary Cake",
      "Gourmet Welcome Treats",
      "Intimate Candlelight Setting",
      "Climate-Controlled Environment",
      "Soft Background Music",
      "Photo-Ready Décor"
    ],
    perfectFor: ["Wedding Anniversary", "1st Anniversary", "Silver Anniversary", "Golden Anniversary"],
    thumbnail: "/images/gallery/IMG_20251117_201140680.jpg",
    images: [
      "/images/gallery/IMG_20251117_201140680.jpg",
      "/images/gallery/IMG_20251117_201157039.jpg",
      "/images/gallery/IMG_20251108_200130169.jpg"
    ]
  },
  {
    id: "anniversary-3",
    slug: "starlit-anniversary-rooftop",
    name: "Starlit Anniversary Rooftop",
    emoji: "🌟",
    shortDescription: "Celebrate under the stars with city lights as your backdrop",
    fullDescription: `🌟 Starlit Anniversary Rooftop — Your Love Deserves a Night Under the Stars

Transform your anniversary into a magical evening on our stunning rooftop venue. Watch the stars while celebrating the love that has grown stronger with each passing year.

✨ Package Highlights:

• 3 Hours of Starlit Rooftop Access
Exclusive rooftop space with breathtaking views of Vadodara's skyline.

• Romantic Star-Theme Decorations
Fairy lights, lanterns, and celestial décor creating a dreamy atmosphere.

• Complimentary Anniversary Cake 🎂
A delicious cake to mark your special milestone.

• Welcome Drinks & Delicious Bites
Carefully selected refreshments to complement your evening.

• Cozy Seating Arrangement
Comfortable, intimate seating designed for romance.

• Sunset to Starlight Experience
Begin with golden hour and transition into a magical starlit evening.

Perfect for couples who love outdoor settings and starry nights.`,
    price: 6000,
    cakeIncluded: true,
    features: [
      "3 Hours Rooftop Celebration",
      "Star-Theme Romantic Decorations",
      "Complimentary Anniversary Cake",
      "Welcome Drinks & Snacks",
      "Cozy Outdoor Seating",
      "Fairy Lights & Lanterns",
      "City Skyline Views",
      "Romantic Music Playlist"
    ],
    perfectFor: ["Dating Anniversary", "Engagement Anniversary", "Romantic Milestone", "Surprise Anniversary"],
    thumbnail: "/images/gallery/IMG_20251126_195504828.jpg",
    images: [
      "/images/gallery/IMG_20251126_195504828.jpg",
      "/images/gallery/IMG_20251126_195520782.jpg",
      "/images/gallery/IMG_20251126_195542577.jpg"
    ]
  },
  {
    id: "anniversary-4",
    slug: "timeless-love-experience",
    name: "Timeless Love Experience",
    emoji: "💝",
    shortDescription: "A classic romantic setup celebrating your enduring love",
    fullDescription: `💝 Timeless Love Experience — Classic Romance for Timeless Love

Honor your journey together with a celebration that embodies timeless elegance and heartfelt romance. This package creates the perfect setting for couples who appreciate classic beauty.

✨ Package Highlights:

• 3 Hours Private Celebration Space
Beautifully decorated venue exclusively for your anniversary.

• Classic Romantic Decorations
Red roses, candles, elegant drapes, and romantic accents.

• Curated Refreshments & Treats
Premium welcome drinks and delicious bites.

• Candle-Lit Ambiance
Warm, intimate lighting perfect for romance.

• Comfortable Premium Seating
Elegant seating arrangement for two.

💡 Anniversary Cake available at additional cost (₹500)

Ideal for couples who love classic romance and timeless elegance.`,
    price: 5100,
    cakeIncluded: false,
    features: [
      "3 Hours Private Celebration",
      "Classic Rose & Candle Décor",
      "Welcome Drinks & Treats",
      "Elegant Candle-Lit Setting",
      "Premium Seating for Two",
      "Romantic Background Music",
      "Photo Opportunity Setup",
      "Cake Available (+₹500)"
    ],
    perfectFor: ["Wedding Anniversary", "Romantic Celebration", "Anniversary Surprise", "Love Milestone"],
    thumbnail: "/images/gallery/IMG_20251130_190628327.jpg",
    images: [
      "/images/gallery/IMG_20251130_190628327.jpg",
      "/images/gallery/IMG_20251130_190653723.jpg",
      "/images/gallery/IMG_20251126_195913666.jpg"
    ]
  },
  {
    id: "anniversary-5",
    slug: "moonlit-romance-anniversary",
    name: "Moonlit Romance Anniversary",
    emoji: "🌙",
    shortDescription: "An enchanting evening celebration under the moonlight",
    fullDescription: `🌙 Moonlit Romance Anniversary — Let the Moon Witness Your Love

Create magical memories under the moonlight with this enchanting anniversary celebration package. Perfect for couples who want a romantic evening filled with intimate moments.

✨ Package Highlights:

• 3 Hours of Moonlit Celebration
Evening celebration timed perfectly with the moonrise.

• Moonlight Theme Decorations
Silver and white décor, soft lights, and dreamy accents.

• Premium Refreshments
Curated welcome drinks and gourmet treats.

• Intimate Seating Setup
Cozy seating designed for romantic conversations.

• Soft Music & Ambient Sounds
Carefully selected playlist for the perfect mood.

💡 Anniversary Cake available at additional cost (₹500)

Perfect for couples who love evening celebrations and romantic ambiance.`,
    price: 5700,
    cakeIncluded: false,
    features: [
      "3 Hours Evening Celebration",
      "Moonlight Theme Décor",
      "Silver & White Decorations",
      "Premium Welcome Drinks",
      "Gourmet Treats",
      "Intimate Seating Setup",
      "Ambient Music Playlist",
      "Cake Available (+₹500)"
    ],
    perfectFor: ["Anniversary Date", "Romantic Evening", "Surprise Anniversary", "Night Celebration"],
    thumbnail: "/images/gallery/IMG_20251201_201429116.jpg",
    images: [
      "/images/gallery/IMG_20251201_201429116.jpg",
      "/images/gallery/IMG_20251201_201504639.jpg",
      "/images/gallery/IMG_20251201_201519850.jpg"
    ]
  },
  {
    id: "anniversary-6",
    slug: "intimate-anniversary-celebration",
    name: "Intimate Anniversary Celebration",
    emoji: "🤍",
    shortDescription: "Simple elegance for meaningful anniversary moments",
    fullDescription: `🤍 Intimate Anniversary Celebration — Simplicity Meets Romance

Sometimes the most meaningful celebrations are the simplest. This package offers an intimate, beautifully arranged space for couples who value togetherness over extravagance.

✨ Package Highlights:

• 3 Hours Private Space
A cozy, private setting just for the two of you.

• Elegant Simple Decorations
Minimalist yet romantic décor with flowers and candles.

• Welcome Refreshments
Light refreshments to enjoy together.

• Comfortable Seating
Intimate seating perfect for meaningful conversations.

• Soft Ambient Music
Gentle background music to set the mood.

💡 Anniversary Cake available at additional cost (₹500)

Ideal for couples who appreciate intimate settings and meaningful moments.`,
    price: 4700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Space",
      "Elegant Minimalist Décor",
      "Flower & Candle Setup",
      "Welcome Refreshments",
      "Comfortable Seating",
      "Ambient Background Music",
      "Intimate Setting",
      "Cake Available (+₹500)"
    ],
    perfectFor: ["Quiet Anniversary", "Intimate Celebration", "Simple Romance", "Meaningful Moments"],
    thumbnail: "/images/gallery/IMG_20251203_202600922.jpg",
    images: [
      "/images/gallery/IMG_20251203_202600922.jpg",
      "/images/gallery/IMG_20251209_193815280.jpg",
      "/images/gallery/IMG_20251213_191903856.jpg"
    ]
  },
  {
    id: "anniversary-7",
    slug: "forever-us-loveframe",
    name: "Forever Us LoveFrame",
    emoji: "💝",
    shortDescription: "Premium rooftop celebration with custom love frame photo setup",
    fullDescription: `💝 Forever Us LoveFrame — Capture Your Love in a Perfect Frame

The ultimate anniversary experience with our signature LoveFrame photo setup. This premium package combines breathtaking rooftop ambiance with custom photography elements designed to capture your love story beautifully.

✨ Package Highlights:

• 3 Hours of Private Rooftop Celebration
Exclusive access to our stunning rooftop venue with city views.

• Custom LoveFrame Photo Setup
Personalized photo frame with your names, date, and romantic backdrop for Instagram-worthy moments.

• Premium Decorations
Elegant fairy lights, premium flowers, heart decorations, and romantic photo props.

• Romantic Candlelight Dinner
Multi-course dinner with welcome drinks, appetizers, main course, and dessert.

• Personalized Touches
Customized name display, anniversary wishes banner, and special photo corners.

This is our signature premium experience designed for couples who want to create lasting visual memories of their special day.`,
    price: 6900,
    cakeIncluded: true,
    features: [
      "3 Hours Private Rooftop Access",
      "Custom LoveFrame Photo Setup",
      "Personalized Name Display",
      "Premium Flower Decorations",
      "Fairy Light Canopy",
      "Multi-Course Dinner",
      "Welcome Drink & Champagne",
      "Complimentary Celebration Cake",
      "Romantic Background Music",
      "Photo Props & Accessories"
    ],
    perfectFor: ["Milestone Anniversary", "Special Surprise", "Premium Celebration", "Photography Lovers"],
    thumbnail: "/images/gallery/IMG-20250123-WA0014.jpg",
    images: [
      "/images/gallery/IMG-20250123-WA0014.jpg",
      "/images/gallery/IMG-20250123-WA0018.jpg",
      "/images/gallery/IMG-20250123-WA0029.jpg"
    ]
  },
  {
    id: "anniversary-8",
    slug: "pure-love-paradise",
    name: "Pure Love Paradise",
    emoji: "🤍",
    shortDescription: "An elegant white-themed anniversary celebration in our glass house",
    fullDescription: `🤍 Pure Love Paradise — Celebrate Your Pure & Timeless Bond

Experience the beauty of your love story in our elegant white-themed glass house paradise. This package is designed for couples who appreciate sophistication, purity, and the timeless nature of true love.

✨ Package Highlights:

• 3 Hours in Private Glass House
Exclusive white-themed setting in our elegant climate-controlled glass house.

• White & Gold Decorations
Pristine white drapes, golden accents, white roses, and elegant décor elements.

• Romantic Atmosphere
Soft lighting, white candles, and serene ambiance for intimate moments.

• Special Anniversary Dinner
Curated menu with welcome refreshments, chef's special dishes, and sweet treats.

• Peaceful & Elegant Setting
A tranquil environment away from the world, just for the two of you.

Perfect for couples who want a sophisticated, pure, and peaceful anniversary celebration.`,
    price: 4700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Glass House",
      "White & Gold Theme Decorations",
      "White Rose Arrangements",
      "Elegant Candle Setup",
      "Special Anniversary Dinner",
      "Welcome Refreshments",
      "Comfortable Seating",
      "Soft Romantic Music",
      "Photo-Ready Setup",
      "Cake Available (+₹500)"
    ],
    perfectFor: ["Elegant Anniversary", "White Theme Lovers", "Peaceful Celebration", "Classic Romance"],
    thumbnail: "/images/gallery/IMG-20250123-WA0033.jpg",
    images: [
      "/images/gallery/IMG-20250123-WA0033.jpg",
      "/images/gallery/IMG-20250123-WA0037.jpg",
      "/images/gallery/IMG-20250123-WA0039.jpg"
    ]
  }
];

// ==================== ANNIVERSARY SERVICE KEYWORDS ====================
export const anniversaryKeywords: ServiceKeyword[] = [
  { 
    slug: "anniversary-dinner-vadodara", 
    title: "Anniversary Dinner", 
    h1: "Romantic Anniversary Dinner in Vadodara", 
    metaTitle: "Anniversary Dinner Vadodara | Romantic Private Dining", 
    metaDescription: "Book a romantic anniversary dinner in Vadodara. Private venue, candlelight setting, elegant decorations, and personalized service for your special day." 
  },
  { 
    slug: "anniversary-surprise-for-husband-vadodara", 
    title: "Anniversary Surprise for Husband", 
    h1: "Anniversary Surprise for Husband in Vadodara", 
    metaTitle: "Anniversary Surprise for Husband Vadodara | Special Setup", 
    metaDescription: "Plan a memorable anniversary surprise for your husband in Vadodara. Romantic decorations, private venue, and personalized celebration setup." 
  },
  { 
    slug: "anniversary-surprise-for-wife-vadodara", 
    title: "Anniversary Surprise for Wife", 
    h1: "Anniversary Surprise for Wife in Vadodara", 
    metaTitle: "Anniversary Surprise for Wife Vadodara | Make Her Day", 
    metaDescription: "Create a beautiful anniversary surprise for your wife in Vadodara. Elegant decorations, romantic ambiance, and thoughtful touches." 
  },
  { 
    slug: "first-anniversary-celebration-vadodara", 
    title: "First Anniversary Celebration", 
    h1: "First Anniversary Celebration in Vadodara", 
    metaTitle: "First Anniversary Celebration Vadodara | Paper Anniversary", 
    metaDescription: "Celebrate your first wedding anniversary in Vadodara with a special romantic setup. Mark one year of love in style." 
  },
  { 
    slug: "wedding-anniversary-party-vadodara", 
    title: "Wedding Anniversary Party", 
    h1: "Wedding Anniversary Party in Vadodara", 
    metaTitle: "Wedding Anniversary Party Vadodara | Private Celebration", 
    metaDescription: "Host a memorable wedding anniversary party in Vadodara. Private venue, beautiful decorations, and personalized service." 
  },
  { 
    slug: "anniversary-decoration-vadodara", 
    title: "Anniversary Decoration", 
    h1: "Anniversary Decoration Services in Vadodara", 
    metaTitle: "Anniversary Decoration Vadodara | Romantic Setup", 
    metaDescription: "Professional anniversary decoration services in Vadodara. Flowers, balloons, candles, and romantic themes for your celebration." 
  },
  { 
    slug: "anniversary-celebration-ideas-vadodara", 
    title: "Anniversary Celebration Ideas", 
    h1: "Best Anniversary Celebration Ideas in Vadodara", 
    metaTitle: "Anniversary Celebration Ideas Vadodara | Creative Plans", 
    metaDescription: "Discover unique anniversary celebration ideas in Vadodara. From rooftop dinners to surprise parties, find the perfect way to celebrate." 
  },
  { 
    slug: "romantic-anniversary-date-vadodara", 
    title: "Romantic Anniversary Date", 
    h1: "Romantic Anniversary Date in Vadodara", 
    metaTitle: "Romantic Anniversary Date Vadodara | Perfect Evening", 
    metaDescription: "Plan a romantic anniversary date in Vadodara with candlelight dinner, beautiful decorations, and intimate setting." 
  },
  { 
    slug: "anniversary-venues-vadodara", 
    title: "Anniversary Venues", 
    h1: "Best Anniversary Venues in Vadodara", 
    metaTitle: "Anniversary Venues Vadodara | Private Celebration Spaces", 
    metaDescription: "Find the perfect anniversary venue in Vadodara. Private rooftop spaces, glass houses, and elegant celebration venues for couples." 
  },
  { 
    slug: "anniversary-restaurants-vadodara", 
    title: "Anniversary Restaurants", 
    h1: "Best Anniversary Restaurants in Vadodara", 
    metaTitle: "Anniversary Restaurants Vadodara | Romantic Dining", 
    metaDescription: "Discover the best anniversary restaurants in Vadodara. Private dining, romantic ambiance, and special anniversary menus." 
  },
  { 
    slug: "surprise-anniversary-party-vadodara", 
    title: "Surprise Anniversary Party", 
    h1: "Surprise Anniversary Party in Vadodara", 
    metaTitle: "Surprise Anniversary Party Vadodara | Secret Celebration", 
    metaDescription: "Plan a surprise anniversary party in Vadodara. Secret setup, romantic decorations, and unforgettable moments." 
  },
  { 
    slug: "anniversary-planners-vadodara", 
    title: "Anniversary Planners", 
    h1: "Anniversary Planners in Vadodara", 
    metaTitle: "Anniversary Planners Vadodara | Professional Service", 
    metaDescription: "Professional anniversary planners in Vadodara. We handle decorations, venue setup, and every detail for your perfect celebration." 
  },
  { 
    slug: "25th-anniversary-celebration-vadodara", 
    title: "25th Anniversary Celebration", 
    h1: "25th Silver Anniversary Celebration in Vadodara", 
    metaTitle: "25th Anniversary Celebration Vadodara | Silver Jubilee", 
    metaDescription: "Celebrate your silver jubilee 25th anniversary in Vadodara with special silver-themed decorations and elegant setup." 
  },
  { 
    slug: "10th-anniversary-celebration-vadodara", 
    title: "10th Anniversary Celebration", 
    h1: "10th Anniversary Celebration in Vadodara", 
    metaTitle: "10th Anniversary Celebration Vadodara | Tin Anniversary", 
    metaDescription: "Mark a decade of love with a 10th anniversary celebration in Vadodara. Special setup for your milestone moment." 
  },
  { 
    slug: "anniversary-date-night-vadodara", 
    title: "Anniversary Date Night", 
    h1: "Anniversary Date Night in Vadodara", 
    metaTitle: "Anniversary Date Night Vadodara | Romantic Evening", 
    metaDescription: "Plan a special anniversary date night in Vadodara with candlelight dinner, romantic music, and intimate ambiance." 
  },
  { 
    slug: "rooftop-anniversary-vadodara", 
    title: "Rooftop Anniversary", 
    h1: "Rooftop Anniversary Celebration in Vadodara", 
    metaTitle: "Rooftop Anniversary Vadodara | Sky-High Romance", 
    metaDescription: "Celebrate your anniversary on a beautiful rooftop in Vadodara. City views, starlit ambiance, and romantic decorations." 
  },
  // Additional Anniversary Keywords
  { 
    slug: "50th-anniversary-celebration-vadodara", 
    title: "50th Golden Anniversary", 
    h1: "50th Golden Anniversary Celebration in Vadodara", 
    metaTitle: "50th Anniversary Celebration Vadodara | Golden Jubilee", 
    metaDescription: "Celebrate 50 years of love with a golden anniversary celebration in Vadodara. Elegant gold-themed decorations and memorable setup." 
  },
  { 
    slug: "5th-anniversary-celebration-vadodara", 
    title: "5th Anniversary Celebration", 
    h1: "5th Wood Anniversary Celebration in Vadodara", 
    metaTitle: "5th Anniversary Celebration Vadodara | Wood Anniversary", 
    metaDescription: "Celebrate 5 years of marriage with a special wood anniversary celebration in Vadodara. Romantic venue and personalized decor." 
  },
  { 
    slug: "15th-anniversary-celebration-vadodara", 
    title: "15th Anniversary Celebration", 
    h1: "15th Crystal Anniversary Celebration in Vadodara", 
    metaTitle: "15th Anniversary Celebration Vadodara | Crystal Anniversary", 
    metaDescription: "Mark 15 years of love with a crystal anniversary celebration in Vadodara. Elegant decorations and romantic ambiance." 
  },
  { 
    slug: "20th-anniversary-celebration-vadodara", 
    title: "20th Anniversary Celebration", 
    h1: "20th China Anniversary Celebration in Vadodara", 
    metaTitle: "20th Anniversary Celebration Vadodara | China Anniversary", 
    metaDescription: "Celebrate two decades of love with a 20th anniversary celebration in Vadodara. Beautiful venue and memorable experience." 
  },
  { 
    slug: "30th-anniversary-celebration-vadodara", 
    title: "30th Pearl Anniversary", 
    h1: "30th Pearl Anniversary Celebration in Vadodara", 
    metaTitle: "30th Anniversary Celebration Vadodara | Pearl Anniversary", 
    metaDescription: "Honor 30 years of marriage with a pearl anniversary celebration in Vadodara. Elegant pearl-themed decorations and setup." 
  },
  { 
    slug: "candlelight-anniversary-dinner-vadodara", 
    title: "Candlelight Anniversary Dinner", 
    h1: "Candlelight Anniversary Dinner in Vadodara", 
    metaTitle: "Candlelight Anniversary Dinner Vadodara | Romantic Dining", 
    metaDescription: "Book a romantic candlelight anniversary dinner in Vadodara. Private setting, elegant decorations, and intimate atmosphere." 
  },
  { 
    slug: "private-anniversary-celebration-vadodara", 
    title: "Private Anniversary Celebration", 
    h1: "Private Anniversary Celebration in Vadodara", 
    metaTitle: "Private Anniversary Celebration Vadodara | Exclusive Venue", 
    metaDescription: "Enjoy a completely private anniversary celebration in Vadodara. Exclusive venue just for you and your partner." 
  },
  { 
    slug: "luxury-anniversary-celebration-vadodara", 
    title: "Luxury Anniversary Celebration", 
    h1: "Luxury Anniversary Celebration in Vadodara", 
    metaTitle: "Luxury Anniversary Celebration Vadodara | Premium Experience", 
    metaDescription: "Experience a luxury anniversary celebration in Vadodara. Premium decorations, gourmet treats, and five-star service." 
  },
  { 
    slug: "outdoor-anniversary-celebration-vadodara", 
    title: "Outdoor Anniversary Celebration", 
    h1: "Outdoor Anniversary Celebration in Vadodara", 
    metaTitle: "Outdoor Anniversary Celebration Vadodara | Open Air Romance", 
    metaDescription: "Celebrate your anniversary under the open sky in Vadodara. Beautiful rooftop venue with city views and starlit ambiance." 
  },
  { 
    slug: "anniversary-gift-ideas-vadodara", 
    title: "Anniversary Gift Ideas", 
    h1: "Best Anniversary Gift Ideas in Vadodara", 
    metaTitle: "Anniversary Gift Ideas Vadodara | Surprise Your Partner", 
    metaDescription: "Discover unique anniversary gift ideas in Vadodara. Combine your gift with a romantic celebration experience." 
  },
  { 
    slug: "anniversary-party-organizers-vadodara", 
    title: "Anniversary Party Organizers", 
    h1: "Anniversary Party Organizers in Vadodara", 
    metaTitle: "Anniversary Party Organizers Vadodara | Professional Planning", 
    metaDescription: "Professional anniversary party organizers in Vadodara. We handle everything from decorations to venue setup." 
  },
  { 
    slug: "romantic-anniversary-setup-vadodara", 
    title: "Romantic Anniversary Setup", 
    h1: "Romantic Anniversary Setup in Vadodara", 
    metaTitle: "Romantic Anniversary Setup Vadodara | Beautiful Decorations", 
    metaDescription: "Get a romantic anniversary setup in Vadodara with flowers, candles, balloons, and personalized decorations." 
  },
  { 
    slug: "affordable-anniversary-celebration-vadodara", 
    title: "Affordable Anniversary Celebration", 
    h1: "Affordable Anniversary Celebration in Vadodara", 
    metaTitle: "Affordable Anniversary Celebration Vadodara | Budget Friendly", 
    metaDescription: "Celebrate your anniversary in Vadodara without breaking the bank. Beautiful setups at affordable prices." 
  },
  { 
    slug: "best-anniversary-places-vadodara", 
    title: "Best Anniversary Places", 
    h1: "Best Anniversary Celebration Places in Vadodara", 
    metaTitle: "Best Anniversary Places Vadodara | Top Venues", 
    metaDescription: "Find the best places to celebrate your anniversary in Vadodara. Private venues, romantic ambiance, and great service." 
  }
];

// ==================== VADODARA AREAS ====================
export const vadodaraAreas: AreaConfig[] = [
  { slug: "alkapuri-vadodara", name: "Alkapuri" },
  { slug: "akota-vadodara", name: "Akota" },
  { slug: "fatehgunj-vadodara", name: "Fatehgunj" },
  { slug: "sayajigunj-vadodara", name: "Sayajigunj" },
  { slug: "vasna-vadodara", name: "Vasna" },
  { slug: "manjalpur-vadodara", name: "Manjalpur" },
  { slug: "waghodia-road-vadodara", name: "Waghodia Road" },
  { slug: "gotri-vadodara", name: "Gotri" },
  { slug: "sama-vadodara", name: "Sama" },
  { slug: "karelibaug-vadodara", name: "Karelibaug" },
  { slug: "nizampura-vadodara", name: "Nizampura" },
  { slug: "subhanpura-vadodara", name: "Subhanpura" },
  { slug: "ajwa-road-vadodara", name: "Ajwa Road" },
  { slug: "old-padra-road-vadodara", name: "Old Padra Road" },
  { slug: "race-course-vadodara", name: "Race Course" },
  { slug: "ellora-park-vadodara", name: "Ellora Park" },
  { slug: "harni-vadodara", name: "Harni" },
  { slug: "tandalja-vadodara", name: "Tandalja" },
  { slug: "bhayli-vadodara", name: "Bhayli" },
  { slug: "sevasi-vadodara", name: "Sevasi" },
  { slug: "chhani-vadodara", name: "Chhani" },
  { slug: "makarpura-vadodara", name: "Makarpura" },
  { slug: "gorwa-vadodara", name: "Gorwa" },
  { slug: "tarsali-vadodara", name: "Tarsali" }
];

// Helper functions
export function getPackageBySlug(slug: string): SetupPackage | undefined {
  return packages.find(p => p.slug === slug);
}

export function getKeywordBySlug(keywordSlug: string): ServiceKeyword | undefined {
  return anniversaryKeywords.find(k => k.slug === keywordSlug);
}

export function getAreaBySlug(slug: string): AreaConfig | undefined {
  return vadodaraAreas.find(a => a.slug === slug);
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}.00`;
}

// ==================== MENU ITEMS ====================
export const menuItems = {
  starters: [
    { name: "Welcome Drink", description: "A refreshing welcome to begin your romantic celebration", emoji: "🥤" },
    { name: "Cheese Fondue", description: "Rich, velvety cheese fondue served with cheese balls, wedges, and nachos", emoji: "🧀" },
    { name: "Paneer Tortilla", description: "Soft tortilla filled with spicy paneer and chef's special seasoning", emoji: "🌯" },
    { name: "Peri Peri Fries with Mac & Cheese", description: "Creamy mac & cheese paired with peri-peri fries", emoji: "🍟" },
    { name: "Tangy Loaf", description: "Warm loaf served with cheesy garlic sauce", emoji: "🍞" }
  ],
  desserts: [
    { name: "Anniversary Cake", description: "Specially decorated celebration cake for your milestone", emoji: "🎂" },
    { name: "Chocolate Delight", description: "Rich chocolate dessert to sweeten your celebration", emoji: "🍫" }
  ],
  addOns: [
    { name: "Champagne", description: "Non-Alcoholic Sparkling Celebration Drink", price: "₹500", emoji: "🥂" },
    { name: "Rose Bouquet", description: "Fresh red roses arrangement", price: "₹800", emoji: "🌹" },
    { name: "Extra Cake", description: "Additional celebration cake", price: "₹500", emoji: "🍰" }
  ]
};

// ==================== TESTIMONIALS ====================
export const testimonials = [
  {
    name: "Priya & Rahul",
    anniversary: "5th Anniversary",
    rating: 5,
    text: "Our 5th anniversary celebration was absolutely magical! The rooftop setup, decorations, and the attention to detail made it a night we'll never forget. Thank you for making our day so special!"
  },
  {
    name: "Neha & Amit",
    anniversary: "1st Anniversary",
    rating: 5,
    text: "As a couple celebrating our first anniversary, we wanted something intimate and romantic. This exceeded all our expectations. The glass house setting was perfect!"
  },
  {
    name: "Meera & Vikram",
    anniversary: "10th Anniversary",
    rating: 5,
    text: "Celebrating a decade of marriage deserved something special, and we got exactly that. The team went above and beyond to make our 10th anniversary truly memorable."
  },
  {
    name: "Anjali & Karan",
    anniversary: "25th Anniversary",
    rating: 5,
    text: "Our silver jubilee celebration was beautifully organized. The silver-themed decorations and the romantic ambiance made us feel like newlyweds again!"
  }
];

// ==================== FAQ ====================
export const faqs = [
  {
    question: "What anniversary packages do you offer?",
    answer: "We offer 6 specially curated anniversary packages ranging from ₹4,700 to ₹6,900. Each package includes private venue access, decorations, refreshments, and various amenities. Some packages include a complimentary anniversary cake."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 3-5 days in advance to ensure availability, especially for weekends and special dates. For customized setups, 7 days advance booking is preferred."
  },
  {
    question: "Can you customize the decorations for our anniversary?",
    answer: "Absolutely! We can customize decorations based on your preferences, including specific color themes, personal messages, photos, and special requests. Just let us know your requirements when booking."
  },
  {
    question: "Is the venue private?",
    answer: "Yes, all our packages offer completely private celebration spaces. Whether you choose our rooftop or glass house venue, you'll have exclusive access during your celebration time."
  },
  {
    question: "Do you offer anniversary cakes?",
    answer: "Yes! Our premium packages (Eternal Love, Golden Memories, Starlit Anniversary) include a complimentary anniversary cake. For other packages, cakes are available at an additional cost of ₹500."
  },
  {
    question: "What areas in Vadodara do you serve?",
    answer: "Our venue is centrally located in Gotri, Vadodara, and we welcome couples from all areas including Alkapuri, Akota, Fatehgunj, Sayajigunj, Manjalpur, and surrounding localities."
  }
];
