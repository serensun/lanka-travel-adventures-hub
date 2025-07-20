import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calendar, Clock, Users, MapPin, Shield, ChevronLeft, ChevronRight, Star, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import BookingForm from './BookingForm';

// Import existing gallery images as placeholders
import gallery1 from '@/assets/new-tour-gallery-1.avif';
import gallery2 from '@/assets/new-tour-gallery-2.avif';
import gallery3 from '@/assets/new-tour-gallery-3.avif';
import gallery4 from '@/assets/new-tour-gallery-4.avif';
import gallery5 from '@/assets/new-tour-gallery-5.avif';
import gallery6 from '@/assets/new-tour-gallery-6.avif';
import gallery7 from '@/assets/new-tour-gallery-7.avif';
import gallery8 from '@/assets/new-tour-gallery-8.avif';

const KandyFourDayTourPackage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);

  const galleryImages = [
    { src: gallery1, alt: "Ancient temple architecture" },
    { src: gallery2, alt: "Scenic hill country landscapes" },
    { src: gallery3, alt: "Wildlife safari experience" },
    { src: gallery4, alt: "Traditional tea plantation" },
    { src: gallery5, alt: "Coastal beauty and beaches" },
    { src: gallery6, alt: "Cultural heritage sites" },
    { src: gallery7, alt: "Blue train journey" },
    { src: gallery8, alt: "Galle Fort colonial architecture" },
  ];

  const itineraryData = [
    {
      day: "Day 1",
      title: "Ancient Wonders & Royal Cities",
      description: "Morning arrival & transfer to Kandy",
      activities: [
        "Explore the magnificent Dambulla Cave Temple (1st century BC)",
        "Conquer the legendary Sigiriya Rock Fortress - a 5th century royal citadel",
        "Overnight in Kandy - Sri Lanka's cultural capital"
      ]
    },
    {
      day: "Day 2", 
      title: "Hill Country Magic",
      description: "Journey through tea country",
      activities: [
        "Visit the sacred Temple of the Tooth Relic",
        "Journey through tea country to Nuwara Eliya (\"Little England\")",
        "Tour a working tea factory & plantation",
        "Experience the world-famous Blue Train to Ella (voted one of Earth's most scenic rides!)",
        "Overnight in misty Ella"
      ]
    },
    {
      day: "Day 3",
      title: "Wildlife & Wilderness", 
      description: "Safari and coastal transfer",
      activities: [
        "Morning at leisure in Ella's hill country",
        "Afternoon leopard safari in Yala National Park (best leopard sightings worldwide!)",
        "Sunset transfer to the Southern Coast",
        "Overnight at beachfront hotel"
      ]
    },
    {
      day: "Day 4",
      title: "Coastal Charms & Colombo",
      description: "Historic sites and city tour",
      activities: [
        "Explore historic Galle Fort (UNESCO World Heritage)",
        "Relax on golden Unawatuna Beach", 
        "Optional: Snorkel Hikkaduwa's coral reefs",
        "Colombo highlights tour featuring: Gangaramaya Temple, Viharamahadevi Park, Galle Face Green, Pettah Markets",
        "Evening departure with unforgettable memories"
      ]
    }
  ];

  const highlights = [
    "Explore dozens of iconic destinations across the island",
    "Ride one of the world's most breathtaking train journeys through tea country",
    "Spot wild leopards and majestic elephants on an exciting Yala National Park safari",
    "Stroll stunning beaches along Sri Lanka's picturesque coasts",
    "Uncover ancient wonders - from Sigiriya's rock fortress to Dambulla's cave temples and Kandy's sacred"
  ];

  const rates = [
    { package: 'Standard', twin: 499, single: 699 },
    { package: 'Comfort', twin: 599, single: 799 },
    { package: 'Luxury', twin: 699, single: 999 }
  ];

  const includes = [
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
    "All-inclusive Hill Country Blue Train Experience",
    "Guided Galle Fort Tour",
    "Meeting arrangements at the airport on arrival and departure",
    "The above rates are net and encompass all government entities"
  ];

  const excludes = [
    "Entrance fees to Sigiriya rock fortress",
    "Entrance fees to River slow boat safari", 
    "Entrance fees to Yala national park safari and jeep hire"
  ];

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            4-Day Sri Lanka Full Circle Private Tour To Colombo
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Why take weeks when you can see it all in just 4 action-packed days? This carefully crafted itinerary delivers Sri Lanka's greatest hits - from ancient kingdoms and wildlife safaris to beach bliss and cultural treasures - all at an unbeatable value!
          </p>
          
          {/* Tour Features */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge variant="secondary" className="px-3 py-1">
              <Shield className="w-4 h-4 mr-2" />
              Free cancellation
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Calendar className="w-4 h-4 mr-2" />
              Reserve now & pay later
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Clock className="w-4 h-4 mr-2" />
              Duration: 4 days
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Users className="w-4 h-4 mr-2" />
              Live tour guide: English, Italy, French
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <MapPin className="w-4 h-4 mr-2" />
              Small group: Private tour participants
            </Badge>
          </div>
        </div>

        {/* Enhanced Gallery Section */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, groupIndex) => (
                  <CarouselItem key={groupIndex}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                      {galleryImages.slice(groupIndex * 3, (groupIndex + 1) * 3).map((image, imageIndex) => {
                        const actualIndex = groupIndex * 3 + imageIndex;
                        return (
                          <Dialog key={actualIndex}>
                            <DialogTrigger asChild>
                              <div 
                                className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group"
                                onClick={() => setCurrentImageIndex(actualIndex)}
                              >
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl w-full p-0">
                              <div className="relative">
                                <img
                                  src={galleryImages[currentImageIndex].src}
                                  alt={galleryImages[currentImageIndex].alt}
                                  className="w-full h-auto max-h-[80vh] object-contain"
                                />
                                
                                {/* Navigation arrows inside the dialog */}
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 border-white/20 hover:bg-black/40"
                                  onClick={() => navigateImage('prev')}
                                >
                                  <ChevronLeft className="h-4 w-4 text-white" />
                                </Button>
                                
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 border-white/20 hover:bg-black/40"
                                  onClick={() => navigateImage('next')}
                                >
                                  <ChevronRight className="h-4 w-4 text-white" />
                                </Button>

                                {/* Image counter */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                                  {currentImageIndex + 1} / {galleryImages.length}
                                </div>
                                
                                {/* Caption */}
                                <div className="absolute bottom-4 left-4 right-4 text-center">
                                  <p className="text-white bg-black/60 px-4 py-2 rounded-lg text-sm">
                                    {galleryImages[currentImageIndex].alt}
                                  </p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        );
                      })}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </CardContent>
        </Card>

        {/* Tour Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Tour Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Itinerary */}
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
                      {itineraryData.map((day, index) => (
                        <Card key={index} className="border-l-4 border-l-primary">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-primary">{day.day}</h4>
                            <h5 className="font-medium">{day.title}</h5>
                            <p className="text-sm text-muted-foreground mt-1">{day.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="detailed" className="space-y-6">
                    {itineraryData.map((day, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">{day.title}</h4>
                              <p className="text-muted-foreground">{day.description}</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {day.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                <span className="text-sm">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
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
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    Includes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <XCircle className="w-5 h-5" />
                    Excludes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {excludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Important Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What to bring:</h4>
                  <p className="text-sm text-muted-foreground">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
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
                    <li>• We do try our best to reserve seats for you in the hill country train, but there are instances that we may not be able to get a seat for you due to high demand; however, we purchase the second-class tickets for you.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Section */}
          <div className="space-y-6">
            {/* Rates */}
            <Card>
              <CardHeader>
                <CardTitle>Package Rates (USD)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {rates.map((rate, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold text-lg">{rate.package} Package</h4>
                    <div className="space-y-1">
                      <p className="text-sm">Twin sharing: <span className="font-bold text-primary">${rate.twin} p.p</span></p>
                      <p className="text-sm">Single rate: <span className="font-bold text-primary">${rate.single}</span></p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Booking Form */}
            <BookingForm 
              packageType="4-day-kandy-standard"
              travelers={2}
              totalCost={499}
              initialComments=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KandyFourDayTourPackage;