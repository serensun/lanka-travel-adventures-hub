import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calendar, Clock, Users, MapPin, Shield, ChevronLeft, ChevronRight, Star, CheckCircle, XCircle, AlertTriangle, Car, Check, X, MessageSquare } from 'lucide-react';
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
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
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
        "Morning arrival & transfer to Kandy",
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

  const itinerary = itineraryData.map((day, index) => ({
    day: index + 1,
    title: day.title,
    activities: day.activities
  }));

  const highlights = [
    "Explore dozens of iconic destinations across the island",
    "Ride one of the world's most breathtaking train journeys through tea country",
    "Spot wild leopards and majestic elephants on an exciting Yala National Park safari",
    "Stroll stunning beaches along Sri Lanka's picturesque coasts",
    "Uncover ancient wonders - from Sigiriya's rock fortress to Dambulla's cave temples and Kandy's sacred"
  ];

  const packageRates = {
    standard: { double: 499, single: 699 },
    comfort: { double: 599, single: 799 },
    luxury: { double: 699, single: 999 }
  };

  const getTotalPrice = () => {
    if (travelers === 1) {
      return packageRates[selectedPackage].single;
    } else {
      return packageRates[selectedPackage].double * travelers;
    }
  };

  const getPackageColor = (pkg: string) => {
    switch (pkg) {
      case 'standard': return 'from-blue-500 to-blue-700';
      case 'comfort': return 'from-blue-600 to-blue-800';
      case 'luxury': return 'from-blue-700 to-blue-900';
      default: return 'from-blue-500 to-blue-700';
    }
  };

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
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                <Car className="w-5 h-5 mr-2 text-orange-500" />
                4-Day Detailed Itinerary
              </h3>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="detailed">Detailed Day-by-Day</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {itinerary.map((day) => (
                      <div key={day.day} className="bg-white/60 rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="bg-orange-400 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">
                            {day.day}
                          </div>
                          <h4 className="text-blue-900 font-medium text-sm">{day.title}</h4>
                        </div>
                        <p className="text-blue-700 text-xs">{day.activities.length} activities planned</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="detailed" className="space-y-6">
                  {itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-orange-400 pl-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          {day.day}
                        </div>
                        <h4 className="text-blue-900 font-semibold text-lg">{day.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {day.activities.map((activity, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                            <span className="text-blue-800 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Includes & Excludes */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-600" />
                  Includes
                </h3>
                <ul className="space-y-2">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <X className="w-5 h-5 mr-2 text-red-500" />
                  Excludes
                </h3>
                <ul className="space-y-2">
                  {excludes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important Information */}
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                Important Information
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-900">What to bring:</h4>
                  <p className="text-sm text-blue-800">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-blue-900">Know before you go:</h4>
                  <ul className="space-y-1 text-sm text-blue-800">
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
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="space-y-6">
            {/* Rates */}
            <Card>
              <CardHeader>
                <CardTitle>Package Rates (USD)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(packageRates).map(([pkg, rates]) => (
                  <div key={pkg} className="border rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold text-lg capitalize">{pkg} Package</h4>
                    <div className="space-y-1">
                      <p className="text-sm">Twin sharing: <span className="font-bold text-primary">${rates.double} p.p</span></p>
                      <p className="text-sm">Single rate: <span className="font-bold text-primary">${rates.single}</span></p>
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