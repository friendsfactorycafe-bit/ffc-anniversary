'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Gift, Clock, Heart, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { AreaConfig, packages, siteConfig, formatPrice, anniversaryKeywords } from '@/lib/anniversary-config';

interface AnniversaryAreaPageProps {
  area: AreaConfig;
}

// Gallery images for area pages
const galleryImages = [
  '/images/gallery/IMG_20251108_195907946.jpg',
  '/images/gallery/IMG_20251117_201140680.jpg',
  '/images/gallery/IMG_20251126_195504828.jpg',
  '/images/gallery/IMG_20251130_190628327.jpg',
];

export default function AnniversaryAreaPage({ area }: AnniversaryAreaPageProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Get top packages
  const topPackages = packages.slice(0, 3);

  // Get related keywords
  const relatedKeywords = anniversaryKeywords.slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-rose-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-rose-600">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-rose-600">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-600 font-medium">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                📍 Serving {area.name}, Vadodara
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                Anniversary Celebration in {area.name}, Vadodara
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Looking for the perfect anniversary celebration venue near {area.name}? We offer private rooftop and glass house venues with romantic decorations, just a short drive away.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-rose-600 hover:bg-rose-50 text-lg px-8 py-6"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Now
                </Button>
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9★ Rating
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <MapPin className="h-4 w-4" /> Near {area.name}
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Heart className="h-4 w-4" /> Couples Only
                </span>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center">
                <div className="text-8xl">💕</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-rose-800">
              Anniversary Celebration Near {area.name}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-center mb-8">
                Residents of {area.name}, Vadodara can now celebrate their special anniversary at our premium venue. 
                Located in Gotri on Sevasi Canal Road, we're just a short drive from {area.name}. 
                Our private rooftop and glass house venues offer the perfect romantic setting for your milestone celebration.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <Card className="text-center border-rose-100">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-rose-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-rose-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Near {area.name}</h3>
                  <p className="text-sm text-muted-foreground">15-20 mins drive from {area.name}</p>
                </CardContent>
              </Card>
              <Card className="text-center border-rose-100">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-rose-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-rose-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Private Venue</h3>
                  <p className="text-sm text-muted-foreground">Exclusive space just for you</p>
                </CardContent>
              </Card>
              <Card className="text-center border-rose-100">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-rose-100 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-rose-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Premium Décor</h3>
                  <p className="text-sm text-muted-foreground">Elegant romantic decorations</p>
                </CardContent>
              </Card>
              <Card className="text-center border-rose-100">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-rose-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-rose-600" />
                  </div>
                  <h3 className="font-semibold mb-2">3 Hours</h3>
                  <p className="text-sm text-muted-foreground">Ample celebration time</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-rose-800">
            Our Anniversary Celebration Setups
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Anniversary celebration setup ${index + 1} for ${area.name} couples`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-rose-800">
            Anniversary Packages for {area.name} Couples
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the perfect package for your anniversary celebration
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {topPackages.map((pkg, index) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-all border-rose-100 ${index === 0 ? 'ring-2 ring-rose-500' : ''}`}>
                {index === 0 && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-rose-500 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="text-3xl mb-2">{pkg.emoji}</div>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-sm">{pkg.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-rose-600">{formatPrice(pkg.price)}</span>
                    <span className="text-muted-foreground text-sm ml-1">/ celebration</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {pkg.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    Book This Package
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Anniversary Services in Area */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-rose-800">
            Anniversary Services for {area.name} Residents
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedKeywords.map((kw, index) => (
              <Link 
                key={index}
                href={`/${kw.slug}`}
                className="block p-4 rounded-lg border border-rose-200 bg-white hover:border-rose-400 hover:bg-rose-50 transition-all group"
              >
                <h3 className="font-medium text-sm group-hover:text-rose-600 transition-colors flex items-center">
                  {kw.title}
                  <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-rose-800">
              How to Reach Us from {area.name}
            </h2>
            <Card className="border-rose-100">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Our Location</h3>
                    <p className="text-muted-foreground">{siteConfig.address}</p>
                    <p className="text-sm text-rose-600 mt-2">
                      Approximately 15-20 minutes drive from {area.name}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button 
                    className="bg-rose-500 hover:bg-rose-600"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                  <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I'm from ${area.name} and interested in anniversary celebration at your venue.`}>
                    <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </Button>
                  </a>
                  <a href={`tel:${siteConfig.phone}`}>
                    <Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Celebrate Your Anniversary Near {area.name}
          </h2>
          <p className="text-rose-100 mb-8 max-w-xl mx-auto">
            {area.name} residents, let us create a magical anniversary celebration for you and your partner. Book now!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-rose-600 hover:bg-rose-50"
              onClick={() => setIsBookingOpen(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Celebration
            </Button>
            <a href={`https://wa.me/${siteConfig.whatsapp}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCBookingForm open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      <FFCWhatsAppFloat />
    </div>
  );
}
