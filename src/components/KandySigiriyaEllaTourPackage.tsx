import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Clock, Users, MapPin, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import BookingForm from './BookingForm';

// Import gallery images
import heroImage from '@/assets/kandy-tour-hero.avif';
import galleryImage1 from '@/assets/kandy-tour-1.avif';
import galleryImage2 from '@/assets/kandy-tour-2.avif';
import galleryImage3 from '@/assets/kandy-tour-3.avif';
import galleryImage4 from '@/assets/kandy-tour-4.avif';
import galleryImage5 from '@/assets/kandy-tour-5.avif';
import galleryImage6 from '@/assets/kandy-tour-6.avif';
import galleryImage7 from '@/assets/kandy-tour-7.avif';

const KandySigiriyaEllaTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const packageRates = {
    standard: { twin: 585.00, single: 855.00 }
  };

  const galleryImages = [
    { src: heroImage, alt: "4-Day Kandy, Sigiriya, Ella and Nuwara Eliya Tour" },
    { src: galleryImage1, alt: "Kandy cultural sites" },
    { src: galleryImage2, alt: "Sigiriya rock fortress" },
    { src: galleryImage3, alt: "Ella hill country" },
    { src: galleryImage4, alt: "Nuwara Eliya tea plantations" },
    { src: galleryImage5, alt: "Wildlife safari" },
    { src: galleryImage6, alt: "Tea factory tour" },
    { src: galleryImage7, alt: "Cultural experiences" }
  ];

  const highlights = [
    "Elephant Encounters: Visit Pinnawala's famous orphanage to observe rescued elephants",
    "Botanical Wonders: Wander through Peradeniya's stunning 147-acre gardens",
    "Wildlife Safari: 4-hour jeep adventure in Minneriya to spot wild elephants",
    "Mountain Magic: Picturesque train ride through tea-clad hills",
    "River Excitement: Whitewater rafting on Kitulgala's thrilling rapids"
  ];

  const inclusions = [
    "4 days (3 nights) accommodation in standard hotel",
    "3 breakfasts",
    "Guided tour of Pinnawala Elephant Orphanage",
    "Peradeniya Botanical Garden Tour",
    "Kandy sightseeing tour with downtown Kandy, gem museum, and the Kandyan cultural show",
    "Safari at Minneriya National Park",
    "Guided whitewater rafting in Kitulgala",
    "Guided Rainforest and Birdwatching Tour",
    "Waterfall visit (Devon Falls and St. Clairs Falls)",
    "Entire ground transportation in an air-conditioned vehicle with a local guide",
    "All-inclusive hill country train trip",
    "Tea plantation tour with factory visit"
  ];

  const exclusions = [
    "Entrance fees to Sigiriya, Dambulla, tooth relic temple, Pinnawala elephant orphanage and the rainforest",
    "Entrance fees Minneriya National park",
    "Jeep for the safari",
    "Whitewater rafting",
    "Personal expenses, such as tips and gratuities",
    "Dinner and Lunch",
    "Drinks"
  ];

  const itineraryData = [
    {
      day: "Day 1",
      title: "Colombo to Cultural Heartland",
      activities: [
        "Morning departure from Colombo",
        "Visit Pinnawala Elephant Orphanage - observe rescued elephants during their river bathing ritual",
        "Explore the lush Peradeniya Botanical Gardens with its century-old trees and orchid collections",
        "Overnight in Kandy"
      ]
    },
    {
      day: "Day 2",
      title: "Wildlife & Ancient Wonders",
      activities: [
        "Sunrise 4-hour safari in Minneriya National Park - spot elephant herds and exotic birds",
        "Afternoon visit to a UNESCO World Heritage cultural site (optional)",
        "Evening at leisure in Kandy"
      ]
    },
    {
      day: "Day 3",
      title: "Hill Country Rail Adventure",
      activities: [
        "Picturesque train journey through tea country (reserved 2nd class seats)",
        "Stop at a working tea plantation for a factory tour and tasting",
        "Arrive in misty Nuwara Eliya, \"Little England\" of Sri Lanka",
        "Overnight in Nuwara Eliya"
      ]
    },
    {
      day: "Day 4",
      title: "Kitulgala Adventure & Return",
      activities: [
        "Morning whitewater rafting on the Kelani River (Grade II-III rapids)",
        "Optional jungle trek to discover hidden waterfalls",
        "Scenic drive back to Galle with coastal sunset views"
      ]
    }
  ];

  const itinerary = `Day 1: Colombo to Cultural Heartland
• Morning departure from Colombo
• Visit Pinnawala Elephant Orphanage - observe rescued elephants during their river bathing ritual
• Explore the lush Peradeniya Botanical Gardens with its century-old trees and orchid collections
• Overnight in Kandy

Day 2: Wildlife & Ancient Wonders
• Sunrise 4-hour safari in Minneriya National Park - spot elephant herds and exotic birds
• Afternoon visit to a UNESCO World Heritage cultural site (optional)
• Evening at leisure in Kandy

Day 3: Hill Country Rail Adventure
• Picturesque train journey through tea country (reserved 2nd class seats)
• Stop at a working tea plantation for a factory tour and tasting
• Arrive in misty Nuwara Eliya, "Little England" of Sri Lanka
• Overnight in Nuwara Eliya

Day 4: Kitulgala Adventure & Return
• Morning whitewater rafting on the Kelani River (Grade II-III rapids)
• Optional jungle trek to discover hidden waterfalls
• Scenic drive back to Galle with coastal sunset views`;

  const getTotalPrice = (): number => {
    const rates = packageRates[selectedPackage as keyof typeof packageRates];
    return travelers === 1 ? rates.single : rates.twin * travelers;
  };

  const getPackageColor = (pkg: string): string => {
    switch (pkg) {
      case 'standard':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setSelectedImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary/20 to-primary/10">
        <img 
          src={heroImage} 
          alt="4-Day Kandy, Sigiriya, Ella and Nuwara Eliya Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">4-Day Kandy, Sigiriya, Ella and Nuwara Eliya Tour</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
              Embark on an unforgettable 4-day exploration of Sri Lanka's diverse landscapes and wildlife. This expertly guided tour takes you from the historic streets of Galle to the heart of the island's most breathtaking natural attractions.
            </p>
          </div>
        </div>
      </div>

      {/* Tour Features */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm">4 days</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm">Private tour</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm">Pickup included</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-primary" />
            <span className="text-sm">Live tour guide</span>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">Free cancellation</Badge>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tour Gallery</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div 
                        className="cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition-transform"
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                      <div className="relative w-full h-full">
                        <img 
                          src={galleryImages[selectedImageIndex].src} 
                          alt={galleryImages[selectedImageIndex].alt}
                          className="w-full h-full object-contain"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                          onClick={() => navigateImage('prev')}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                          onClick={() => navigateImage('next')}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                          {selectedImageIndex + 1} / {galleryImages.length}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Tour Highlights */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary */}
        <div className="mb-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="detailed">Detailed Itinerary</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    Embark on an unforgettable 4-day exploration of Sri Lanka's diverse landscapes and wildlife. This expertly guided tour takes you from the historic streets of Galle to the heart of the island's most breathtaking natural attractions.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="detailed" className="space-y-4">
              {itineraryData.map((day, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{day.day}: {day.title}</h3>
                    <ul className="space-y-1">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="text-muted-foreground">• {activity}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Package Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Select Package Type</h2>
          <div className="grid grid-cols-1 gap-4">
            <Button
              variant={selectedPackage === 'standard' ? 'default' : 'outline'}
              className={`p-6 h-auto justify-start ${selectedPackage === 'standard' ? getPackageColor('standard') : ''}`}
              onClick={() => setSelectedPackage('standard')}
            >
              <div className="text-left">
                <div className="font-semibold">Standard Package</div>
                <div className="text-sm opacity-90">Twin sharing: $585.00 PP | Single: $855.00</div>
              </div>
            </Button>
          </div>
        </div>

        {/* Travelers Input */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Number of Travelers</h2>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setTravelers(Math.max(1, travelers - 1))}
            >
              -
            </Button>
            <span className="text-lg font-semibold">{travelers}</span>
            <Button
              variant="outline"
              onClick={() => setTravelers(travelers + 1)}
            >
              +
            </Button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Special Requests</h2>
          <textarea
            className="w-full p-3 border rounded-lg resize-none"
            rows={4}
            placeholder="Any special requests or comments..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>

        {/* Inclusions and Exclusions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">Includes</h3>
            <ul className="space-y-2">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600">Excludes</h3>
            <ul className="space-y-2">
              {exclusions.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Summary */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Duration:</span>
                <span>4 days</span>
              </div>
              <div className="flex justify-between">
                <span>Travelers:</span>
                <span>{travelers}</span>
              </div>
              <div className="flex justify-between">
                <span>Package:</span>
                <span className="capitalize">{selectedPackage}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total Cost:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Form */}
        <BookingForm 
          packageType="4-Day Kandy, Sigiriya, Ella and Nuwara Eliya Tour - 4 days - Standard level"
          travelers={travelers}
          totalCost={getTotalPrice()}
          initialComments={comments}
        />
      </div>
    </div>
  );
};

export default KandySigiriyaEllaTourPackage;