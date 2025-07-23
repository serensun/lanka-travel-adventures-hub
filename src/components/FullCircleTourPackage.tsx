import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Clock, Users, MapPin, Check, X } from "lucide-react";
import BookingForm from './BookingForm';

import fullCircleTour1 from '@/assets/full-circle-tour-1.avif';
import fullCircleTour2 from '@/assets/full-circle-tour-2.avif';
import fullCircleTour3 from '@/assets/full-circle-tour-3.avif';
import fullCircleTour4 from '@/assets/full-circle-tour-4.avif';
import fullCircleTour5 from '@/assets/full-circle-tour-5.avif';
import fullCircleTourHero from '@/assets/full-circle-tour-hero.avif';
import fullCircleTour6 from '@/assets/full-circle-tour-6.avif';
import fullCircleTour7 from '@/assets/full-circle-tour-7.avif';

const FullCircleTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const packageRates = {
    standard: { twin: 595, single: 795 },
  };

  const galleryImages = [
    { src: fullCircleTourHero, alt: 'Sri Lanka Full Circle Tour - Main' },
    { src: fullCircleTour1, alt: 'Sri Lanka landscapes and cultural sites' },
    { src: fullCircleTour2, alt: 'Ancient temples and historical monuments' },
    { src: fullCircleTour3, alt: 'Scenic mountain views and tea plantations' },
    { src: fullCircleTour4, alt: 'Wildlife safari and national parks' },
    { src: fullCircleTour5, alt: 'Coastal areas and beach destinations' },
    { src: fullCircleTour6, alt: 'Cultural experiences and local attractions' },
    { src: fullCircleTour7, alt: 'Train journeys through hill country' },
  ];

  const highlights = [
    "Explore countless must-see destinations across Sri Lanka in an action-packed 4-day tour",
    "Enjoy one of the world's most breathtaking train rides through stunning landscapes",
    "Spot majestic Sri Lankan leopards and massive elephants on an exciting Yala National Park safari",
    "Stroll along pristine beaches lining the island's southern and western coasts",
    "Step back in time at legendary UNESCO sites like Sigiriya Rock Fortress, Dambulla Cave Temple, and the sacred Temple of the Tooth"
  ];

  const inclusions = [
    "3 nights of accommodation in standard hotels with breakfast",
    "Kandy city tour",
    "A sightseeing tour of Nuwara Eliya",
    "Pettah's city tour of Colombo",
    "Entrance fees to Dambulla golden temple",
    "Entrance fees to Tooth relic temple and museum",
    "Gregory Lake Esplanade",
    "Transport in an air-conditioned vehicle with an English-speaking driver and guide",
    "Entrance fees Tea factory and tea garden",
    "Spice / herbal garden",
    "Kandy city tour",
    "All-inclusive Hill Country Blue Train Experience",
    "Guided Galle Fort Tour",
    "Entrance fees Tea factory/Tea garden",
    "Meeting arrangements at the airport on arrival and departure"
  ];

  const exclusions = [
    "Entrance fees to Sigiriya rock fortress",
    "Entrance fees to River slow boat safari",
    "Entrance fees to Yala national park safari and jeep hire"
  ];

  const itineraryData = [
    {
      day: 1,
      title: "Airport → Colombo → Sigiriya → Kandy",
      activities: [
        "Begin your journey with a warm welcome from your guide before heading to Kandy",
        "En route, explore the Dambulla Golden Temple, a stunning cave complex dating back to the 1st century BC",
        "Discover Sigiriya Rock Fortress, an ancient palace built by King Kasyapa, perched atop a massive rock with breathtaking frescoes",
        "Overnight stay in Kandy"
      ]
    },
    {
      day: 2,
      title: "Kandy → Nuwara Eliya → Ella",
      activities: [
        "Visit the revered Temple of the Sacred Tooth Relic, home to Buddha's tooth and a UNESCO World Heritage Site",
        "Journey to Ella, stopping at a tea plantation & factory in Sri Lanka's lush hill country",
        "Pass through Nuwara Eliya, known as 'Little England,' with its colonial charm and misty landscapes",
        "Experience the iconic Blue Train ride from Ella to Nuwara Eliya, one of the world's most scenic rail journeys",
        "Overnight stay in Ella"
      ]
    },
    {
      day: 3,
      title: "Ella → Yala → South Coast",
      activities: [
        "Head to Yala National Park for an afternoon jeep safari, renowned for its leopard sightings and diverse wildlife",
        "Relax at a beachside hotel on Sri Lanka's southern coast",
        "Overnight stay on the South Coast"
      ]
    },
    {
      day: 4,
      title: "Galle → Bentota → Colombo",
      activities: [
        "After breakfast, travel to Colombo, stopping at Galle, a historic fortified city with Dutch-colonial architecture",
        "Enjoy a river safari in Bentota, exploring the mangroves and wildlife of Madu Ganga",
        "In Colombo, visit key landmarks:",
        "Gangaramaya Buddhist Temple – A sacred and architecturally rich temple",
        "Viharamahadevi Park – Colombo's largest green space",
        "Galle Face Green – A scenic oceanfront promenade",
        "Independence Hall & Pettah Market – A mix of history and vibrant local culture",
        "Tour concludes with drop-off at your preferred location"
      ]
    }
  ];

  const getTotalPrice = (): number => {
    const rates = packageRates[selectedPackage as keyof typeof packageRates];
    if (travelers === 1) {
      return rates.single;
    }
    return rates.twin * travelers;
  };

  const getPackageColor = (pkg: string): string => {
    switch (pkg) {
      case 'standard':
        return 'from-blue-600 to-blue-800';
      default:
        return 'from-blue-600 to-blue-800';
    }
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => prev === 0 ? galleryImages.length - 1 : prev - 1);
    } else {
      setCurrentImageIndex(prev => prev === galleryImages.length - 1 ? 0 : prev + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          4-Day Sri Lanka Full Circle Private Tour To Colombo
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          This 4-day tour packs in the highlights of an 8-day Sri Lanka classic tour, covering nearly the same route and key destinations in half the time. You'll experience the best of the country's must-see sights, just like on the longer itinerary.
        </p>
        
        {/* Tour Features */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            4 days
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Private tour
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Pickup included
          </Badge>
          <Badge variant="outline">Free cancellation</Badge>
          <Badge variant="outline">Reserve now & pay later</Badge>
          <Badge variant="outline">English, Italian, French guide</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image Gallery */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Tour Gallery</h3>
              <Carousel className="w-full">
                <CarouselContent>
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Dialog open={isDialogOpen && currentImageIndex === index} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                          <div 
                            className="cursor-pointer"
                            onClick={() => {
                              setCurrentImageIndex(index);
                              setIsDialogOpen(true);
                            }}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] p-2">
                          <div className="relative">
                            <img
                              src={galleryImages[currentImageIndex].src}
                              alt={galleryImages[currentImageIndex].alt}
                              className="w-full h-auto max-h-[80vh] object-contain"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                              onClick={() => navigateImage('prev')}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                              onClick={() => navigateImage('next')}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>

          {/* Tour Highlights */}
          <Card>
            <CardHeader>
              <CardTitle>Tour Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Detailed Itinerary */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Itinerary</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="detailed">Day by Day</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {itineraryData.map((day) => (
                      <Card key={day.day} className="border-l-4 border-l-primary">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Day {day.day}</CardTitle>
                          <p className="text-sm text-muted-foreground font-medium">{day.title}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {day.activities[0]}...
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="detailed" className="space-y-4">
                  {itineraryData.map((day) => (
                    <Card key={day.day}>
                      <CardHeader 
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">Day {day.day}</CardTitle>
                            <p className="text-sm text-muted-foreground font-medium">{day.title}</p>
                          </div>
                          <ChevronRight 
                            className={`w-5 h-5 transition-transform ${
                              expandedDay === day.day ? 'rotate-90' : ''
                            }`} 
                          />
                        </div>
                      </CardHeader>
                      {expandedDay === day.day && (
                        <CardContent className="pt-0">
                          <ul className="space-y-2">
                            {day.activities.map((activity, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                                <span className="text-sm text-muted-foreground">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Includes & Excludes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{item}</span>
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
                      <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Important Information */}
          <Card>
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">What to bring:</h4>
                <p className="text-sm text-muted-foreground">
                  Comfortable shoes, Hat, Camera, Sunscreen, Water
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Know before you go:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Wear comfortable walking shoes as there is a moderate amount of walking involved</li>
                  <li>• It is recommended to bring a hat, sunscreen, and a camera</li>
                  <li>• Smoking and consuming food and drinks are not allowed inside the historical sites</li>
                  <li>• Please be ready at your hotel lobby 15 minutes before the pickup time</li>
                  <li>• Children under 8 years are not recommended to participate in this tour</li>
                  <li>• Wheelchair and stroller access is not available</li>
                  <li>• In case of bad weather, some outdoor activities may be cancelled</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 space-y-6">
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
                        Twin: ${packageRates.standard.twin} pp | Single: ${packageRates.standard.single}
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Travelers Input */}
            <Card>
              <CardHeader>
                <CardTitle>Number of Travelers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Label htmlFor="travelers">Travelers:</Label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      disabled={travelers <= 1}
                    >
                      -
                    </Button>
                    <Input
                      id="travelers"
                      type="number"
                      min="1"
                      value={travelers}
                      onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTravelers(travelers + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card>
              <CardHeader>
                <CardTitle>Special Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Any special requirements or requests..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                </div>
                
                <BookingForm
                  packageType="4-Day Sri Lanka Full Circle Private Tour To Colombo"
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
  );
};

export default FullCircleTourPackage;