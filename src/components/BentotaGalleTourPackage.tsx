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
import heroImage from '@/assets/bentota-galle-tour-hero.avif';
import galleryImage1 from '@/assets/bentota-galle-tour-1.avif';
import galleryImage2 from '@/assets/bentota-galle-tour-2.avif';
import galleryImage3 from '@/assets/bentota-galle-tour-3.avif';
import galleryImage4 from '@/assets/bentota-galle-tour-4.avif';
import galleryImage5 from '@/assets/bentota-galle-tour-5.avif';
import galleryImage6 from '@/assets/bentota-galle-tour-6.avif';
import galleryImage7 from '@/assets/bentota-galle-tour-7.avif';

const BentotaGalleTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const packageRates = {
    standard: { twin: 90.00, single: 155.00 }
  };

  const galleryImages = [
    { src: heroImage, alt: "1 Day Tour Bentota, Galle, Mangrove Lagoon and Sea Turtles" },
    { src: galleryImage1, alt: "Bentota mangrove lagoon" },
    { src: galleryImage2, alt: "Galle Fort colonial architecture" },
    { src: galleryImage3, alt: "Sea turtle conservation" },
    { src: galleryImage4, alt: "Stilt fishermen in Weligama" },
    { src: galleryImage5, alt: "Jungle Beach coastal views" },
    { src: galleryImage6, alt: "Bentota river wildlife" },
    { src: galleryImage7, alt: "Hikkadwa Beach activities" }
  ];

  const highlights = [
    "Swimming in Hikkadwa Beach",
    "Visit the Kosgoda Turtle Hatchery to see endangered sea turtles being cared for",
    "Boating in Bentota lagoon and explore the rich Fauna and Flora",
    "Explore 17th-century Galle Fort, a fortified complex of colonial mansions, museums and arty shops"
  ];

  const inclusions = [
    "Hotel pickup and drop-off",
    "Entire ground transportation in an air-conditioned modern vehicle",
    "English speaking driver-guide",
    "Self-guided walking tour at Galle fort",
    "Sea turtle conservation center",
    "Leisurely bath in Mirissa",
    "Visit the Jungle beach",
    "All government taxes"
  ];

  const exclusions = [
    "Food and drinks",
    "Entrance fees at Madu Estuary",
    "Gratuities"
  ];

  const itineraryData = [
    {
      day: "Morning",
      title: "Departure & Turtle Hatchery",
      activities: [
        "Meet and greet by our Chauffeur/guide at your hotel (06.00 am) in Colombo",
        "Visit Turtle Hatchery - observe five species of marine turtles including Green Turtle, Leatherback, Hawksbill, Loggerhead, and Olive Ridley",
        "Learn about conservation efforts by the Wild Life Protection Society of Sri Lanka"
      ]
    },
    {
      day: "Mid-Morning",
      title: "Stilt Fishermen & Jungle Beach",
      activities: [
        "Visit the amazing Stilt Fishermen in Weligama - witness this unique fishing technique started after WWII",
        "Explore Jungle Beach - twin stretches of deserted sand between ocean and Rumassala Rock",
        "Experience peace, solitude, and gorgeous nature away from crowds"
      ]
    },
    {
      day: "Afternoon",
      title: "Historic Galle Fort",
      activities: [
        "Explore 17th-century Galle Fort with its tumultuous history",
        "Walk through the fortified complex of colonial mansions, museums and shops",
        "Discover Dutch fortifications built with coral and granite stones",
        "Experience the rectangular grid pattern of streets with low houses, gables and verandas"
      ]
    },
    {
      day: "Late Afternoon",
      title: "Bentota River Lagoon",
      activities: [
        "Boat in Bentota River lagoon with high bio-diversity",
        "Spot some of the 247 animal species, 111 bird species, 70 fish species",
        "Observe 50 species of butterfly and various mangrove types",
        "Return journey to Colombo with coastal sunset views"
      ]
    }
  ];

  const itinerary = `Morning: Departure & Turtle Hatchery
• Meet and greet by our Chauffeur/guide at your hotel (06.00 am) in Colombo
• Visit Turtle Hatchery - observe five species of marine turtles including Green Turtle, Leatherback, Hawksbill, Loggerhead, and Olive Ridley
• Learn about conservation efforts by the Wild Life Protection Society of Sri Lanka

Mid-Morning: Stilt Fishermen & Jungle Beach
• Visit the amazing Stilt Fishermen in Weligama - witness this unique fishing technique started after WWII
• Explore Jungle Beach - twin stretches of deserted sand between ocean and Rumassala Rock
• Experience peace, solitude, and gorgeous nature away from crowds

Afternoon: Historic Galle Fort
• Explore 17th-century Galle Fort with its tumultuous history
• Walk through the fortified complex of colonial mansions, museums and shops
• Discover Dutch fortifications built with coral and granite stones
• Experience the rectangular grid pattern of streets with low houses, gables and verandas

Late Afternoon: Bentota River Lagoon
• Boat in Bentota River lagoon with high bio-diversity
• Spot some of the 247 animal species, 111 bird species, 70 fish species
• Observe 50 species of butterfly and various mangrove types
• Return journey to Colombo with coastal sunset views`;

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
          alt="1 Day Tour Bentota, Galle, Mangrove Lagoon and Sea Turtles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">1 Day Tour Bentota, Galle, Mangrove Lagoon and Sea Turtles</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
              On a day excursion from Colombo, explore the Cinnamon Island, boat in a mangrove lagoon and observe birds, monkeys, and crocodiles up close, and enjoy the picturesque beaches of Mirissa and Galle on the south coast. Examine marine turtles in further detail.
            </p>
          </div>
        </div>
      </div>

      {/* Tour Features */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm">1 day</span>
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
                    On a day excursion from Colombo, explore the Cinnamon Island, boat in a mangrove lagoon and observe birds, monkeys, and crocodiles up close, and enjoy the picturesque beaches of Mirissa and Galle on the south coast. Examine marine turtles in further detail.
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
                <div className="text-sm opacity-90">Twin sharing: $90.00 PP | Single: $155.00</div>
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
                <span>1 day</span>
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
          packageType="1 Day Tour Bentota, Galle, Mangrove Lagoon and Sea Turtles - 1 day - Standard level"
          travelers={travelers}
          totalCost={getTotalPrice()}
          initialComments={comments}
        />
      </div>
    </div>
  );
};

export default BentotaGalleTourPackage;