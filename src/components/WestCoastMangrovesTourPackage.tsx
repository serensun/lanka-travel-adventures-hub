import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, Users, Calendar, ChevronLeft, ChevronRight, Star, Plane, Car, Camera, Coffee, Leaf } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import BookingForm from "./BookingForm";
import { useTranslation } from "react-i18next";

// Import tour images
import tourImage1 from "@/assets/west-coast-mangroves-1.avif";
import tourImage2 from "@/assets/west-coast-mangroves-2.avif";
import tourImage3 from "@/assets/west-coast-mangroves-3.avif";
import tourImage4 from "@/assets/west-coast-mangroves-4.avif";
import tourImage5 from "@/assets/west-coast-mangroves-5.avif";
import tourImage6 from "@/assets/west-coast-mangroves-6.avif";
import tourImage7 from "@/assets/west-coast-mangroves-7.avif";
import heroImage from "@/assets/west-coast-mangroves-hero.avif";

const WestCoastMangrovesTourPackage = () => {
  const { t } = useTranslation();
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const packageRates = {
    standard: { twin: 90, single: 125 }
  };

  const galleryImages = [
    { src: tourImage1, alt: "West Coast Mangroves Tour 1" },
    { src: tourImage2, alt: "West Coast Mangroves Tour 2" },
    { src: tourImage3, alt: "West Coast Mangroves Tour 3" },
    { src: tourImage4, alt: "West Coast Mangroves Tour 4" },
    { src: tourImage5, alt: "West Coast Mangroves Tour 5" },
    { src: tourImage6, alt: "West Coast Mangroves Tour 6" },
    { src: tourImage7, alt: "West Coast Mangroves Tour 7" }
  ];

  const highlights = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Immerse in Local Culture",
      description: "Witness the traditional island way of life and visit ancient temples steeped in history."
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Birdwatcher's Paradise",
      description: "Spot vibrant eagles, darting kingfishers, playful cormorants, and melodious bulbuls in their natural habitat."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Wildlife Encounters",
      description: "Look out for sunbathing monitor lizards, stealthy crocodiles, and mischievous monkeys along the waterways."
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Unwind on the Shore",
      description: "End your adventure with a peaceful stroll along the golden sands of Bentota Beach, fringed with swaying palms."
    }
  ];

  const inclusions = [
    "Return transfer from the resorts",
    "Modern motorboat tour",
    "Driver/guide of your chosen language",
    "Guided walking tour of Bentota Beach",
    "Guided walking tour of spice/herbal garden",
    "Guided tour to learn about different species of sea turtles found on Sri Lankan beaches",
    "Visit ancient Buddhist temples in Sri Lanka",
    "A serving of king coconut (orange coconut)",
    "Natural moon stone mine tour"
  ];

  const exclusions = [
    "Any personal expenses",
    "Tips for services",
    "Meals and drinks",
    "Entrance fees to turtle hatchery"
  ];

  const itineraryData = [
    {
      title: "Scenic Coastal Journey",
      description: "Your adventure begins with a picturesque drive along Sri Lanka's stunning west coast. Pass by golden beaches, swaying coconut plantations, and vibrant fishing villages, soaking in the island's natural beauty."
    },
    {
      title: "Sea Turtle Conservation Centre",
      description: "Your first stop is a sea turtle rescue and rehabilitation center, where you'll learn about Sri Lanka's vital role in turtle conservation. Witness firsthand how injured and disabled turtles are cared for before being released back into the wild."
    },
    {
      title: "Madu River Mangrove Safari (Ramsar Wetland)",
      description: "Embark on a captivating boat safari through the Madu River estuary, one of Sri Lanka's last thriving mangrove ecosystems. This protected sanctuary is home to: Exotic wildlife – Spot crocodiles, monitor lizards, monkeys, and rare birds like kingfishers and eagles. Rich biodiversity – Discover aquatic plants, crabs, shrimp, and fish that thrive in this delicate habitat. A sacred island temple – Visit a secluded Buddhist temple steeped in history and serenity."
    },
    {
      title: "Mask Museum & Cultural Exploration",
      description: "Step into a world of tradition at the mask museum, where you'll see intricately carved masks used in Sri Lankan rituals, dances, and folklore. Learn about their cultural significance from local artisans."
    },
    {
      title: "Spice & Herbal Garden Visit",
      description: "Experience the fragrant world of Sri Lankan spices at a herbal garden, where you'll see cinnamon, pepper, cardamom, and Ayurvedic plants used in traditional medicine."
    },
    {
      title: "Sacred Buddhist Temple",
      description: "Conclude your journey with a visit to a revered Buddhist temple on the west coast, offering a peaceful retreat and a glimpse into Sri Lanka's spiritual heritage."
    },
    {
      title: "Relax at Bentota Beach",
      description: "End your day with a leisurely stroll along Bentota Beach, one of Sri Lanka's most beautiful stretches of coastline, fringed with palm trees and lapped by turquoise waves."
    }
  ];

  const getTotalPrice = (): number => {
    const rates = packageRates[selectedPackage as keyof typeof packageRates];
    return travelers === 1 ? rates.single : rates.twin * travelers;
  };

  const getPackageColor = (pkg: string): string => {
    switch (pkg) {
      case 'standard':
        return 'from-blue-500 to-blue-600';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsDialogOpen(true);
  };

  const closeGallery = () => {
    setIsDialogOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/90 to-primary-foreground/90">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="West Coast Mangroves Tour Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              West coast Beach, River Mangroves lagoon, Wildlife boat Tour
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Mangrove forests are rapidly disappearing, making this perhaps the final chance to experience these extraordinary ecological treasures. Home to a rich diversity of trees, plants, vines, wildlife, and bird species, they offer a unique natural wonder. Don't miss the chance to explore their lush landscapes and relax on serene, palm-lined beaches.
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              Book Your Adventure
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Free cancellation</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">6 days</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Private tour</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Pickup included</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Live guide</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Reserve & pay later</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Gallery Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Tour Gallery</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/3">
                      <div className="p-1">
                        <div 
                          className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openGallery(index)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </section>

            {/* Tour Highlights */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {highlight.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                          <p className="text-muted-foreground">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Detailed Itinerary */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Detailed Itinerary</h2>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="detailed">Day by Day</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Tour Overview</h3>
                      <p className="text-muted-foreground mb-4">
                        Embark on an unforgettable journey through Sri Lanka's pristine mangrove ecosystems and stunning west coast beaches. This comprehensive tour combines wildlife observation, cultural exploration, and relaxation in one perfect day.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">What You'll Experience:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Mangrove boat safari</li>
                            <li>• Sea turtle conservation center</li>
                            <li>• Traditional mask museum</li>
                            <li>• Spice garden exploration</li>
                            <li>• Buddhist temple visit</li>
                            <li>• Bentota Beach relaxation</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Wildlife Spotting:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Crocodiles and monitor lizards</li>
                            <li>• Eagles and kingfishers</li>
                            <li>• Cormorants and bulbuls</li>
                            <li>• Monkeys and various bird species</li>
                            <li>• Sea turtles (at conservation center)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="detailed" className="space-y-4">
                  {itineraryData.map((day, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                            {index + 1}
                          </span>
                          {day.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{day.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">What's Not Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Right Column - Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Package Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Package Type</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button
                      variant={selectedPackage === 'standard' ? 'default' : 'outline'}
                      className={`w-full justify-start h-auto p-4 ${
                        selectedPackage === 'standard' 
                          ? `bg-gradient-to-r ${getPackageColor('standard')} text-white` 
                          : ''
                      }`}
                      onClick={() => setSelectedPackage('standard')}
                    >
                      <div className="text-left">
                        <div className="font-semibold">Standard Package</div>
                        <div className="text-sm opacity-90">
                          Twin: $90 pp | Single: $125
                        </div>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Travelers */}
              <Card>
                <CardHeader>
                  <CardTitle>Number of Travelers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    >
                      -
                    </Button>
                    <span className="text-2xl font-semibold">{travelers}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setTravelers(travelers + 1)}
                    >
                      +
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Comments */}
              <Card>
                <CardHeader>
                  <CardTitle>Special Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full p-3 border rounded-md resize-none"
                    rows={4}
                    placeholder="Any special requests or dietary requirements..."
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  />
                </CardContent>
              </Card>

              {/* Booking Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>6 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Travelers:</span>
                      <span>{travelers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <span className="capitalize">{selectedPackage}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>${getTotalPrice()}.00</span>
                    </div>
                  </div>
                  <BookingForm
                    packageType="West coast Beach, River Mangroves lagoon, Wildlife boat Tour (6 days)"
                    travelers={travelers}
                    totalCost={getTotalPrice()}
                    initialComments={comments}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl w-full">
          <div className="relative">
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WestCoastMangrovesTourPackage;