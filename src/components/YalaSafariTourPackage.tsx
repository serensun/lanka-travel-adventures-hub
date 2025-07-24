import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Calendar, Users, Star, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import BookingForm from './BookingForm';

// Import images
import heroImage from '@/assets/yala-safari-tour-hero.avif';
import gallery1 from '@/assets/yala-safari-tour-1.avif';
import gallery2 from '@/assets/yala-safari-tour-2.avif';
import gallery3 from '@/assets/yala-safari-tour-3.avif';
import gallery4 from '@/assets/yala-safari-tour-4.avif';
import gallery5 from '@/assets/yala-safari-tour-5.avif';
import gallery6 from '@/assets/yala-safari-tour-6.avif';
import gallery7 from '@/assets/yala-safari-tour-7.avif';
import gallery8 from '@/assets/yala-safari-tour-8.avif';

const YalaSafariTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const packageRates = {
    standard: { twin: 390.00, single: 595.00 }
  };

  const galleryImages = [
    { src: gallery1, alt: "Yala Safari Wildlife", caption: "Witness amazing wildlife in their natural habitat" },
    { src: gallery2, alt: "Whale Watching", caption: "Blue whales and sperm whales in Mirissa waters" },
    { src: gallery3, alt: "Galle Fort", caption: "Explore the UNESCO World Heritage Galle Fort" },
    { src: gallery4, alt: "Southern Coast Beach", caption: "Pristine beaches of the south coast" },
    { src: gallery5, alt: "Mangrove Safari", caption: "Bentota River mangrove exploration" },
    { src: gallery6, alt: "Turtle Conservation", caption: "Sea turtle conservation project visit" },
    { src: gallery7, alt: "Safari Experience", caption: "Full day Yala National Park safari" },
    { src: gallery8, alt: "Coastal Views", caption: "Stunning southern coast scenery" }
  ];

  const highlights = [
    "During your safari, see wild buffaloes, bears, elephants, crocs, and leopards",
    "Unwind, dive, snorkel, swim, and surf at this immaculate beach resort on the south coast. Mirissa",
    "Take a boat safari to see the ancient temple, the mangrove lagoon, and Cinnamon Island",
    "Savour the herbal message and discover Sri Lankan Ayurveda and spices",
    "Explore Galle Fort's cobbled streets to explore galleries and museums"
  ];

  const inclusions = [
    "2 nights (3 days) of accommodation in standard hotels",
    "Daily Breakfast at the hotel, 2 breakfasts (starting from day 2)",
    "An Ayurveda spa treatment",
    "Guided walking tour of Galle Fort",
    "Mask Museum",
    "Spice garden",
    "Sea turtle conservation project",
    "Pickup and drop-off at the airport or local hotels",
    "Meeting arrangement at the airport",
    "Entire ground transportation in an air-conditioned, modern, fuel-efficient private vehicle",
    "Service of an English-speaking driver/guide for the entire tour",
    "All current taxes"
  ];

  const exclusions = [
    "The expenses of personal nature such as telephone, Internet",
    "Gratuities",
    "Expenses for whale watching tour",
    "Expenses for Full day Yala safari",
    "Expenses for Madu river safari"
  ];

  const itineraryData = [
    {
      day: "Day 1",
      title: "Colombo / Bentota / Galle / Mirissa",
      activities: [
        "You will be met and warmly greeted by your personal chauffeur guide at the Bandaranaike International Colombo Airport or your hotel in Colombo and drive to Mirissa via Galle",
        "Stop At Galle Fort, Galle Fort is the UNESCO world heritage site in the south and the most important iconic tourist attraction in southern Sri Lanka, which sits halfway on the track to Yala from Colombo",
        "Bentota River Safari, this wetland is a natural jewel with a large tract of mangrove forest and a wide range of wildlife such as monkeys, crocodiles, and monitors as well as a large number of aqua avian fauna species",
        "Other important places to encounter on the program are the spice garden, mask museum, sea turtle conservation project, and moonstone mines",
        "Spend Overnight in Mirissa"
      ]
    },
    {
      day: "Day 2",
      title: "Mirissa / Yala",
      activities: [
        "Early morning leave for Mirissa harbor and set off on a whale-watching tour",
        "Mirissa of southern Sri Lanka has become the hub of whale watching in southern Asia due to the large concentration of Blue whales and sperm whales. The whale watching spotting is very frequent in the area and most importantly Mirissa is popular for blue whales",
        "After the whale-watching tour spends the day at a hotel in Mirissa, and later in the evening leave for a hotel in Yala"
      ]
    },
    {
      day: "Day 3",
      title: "Yala / Colombo",
      activities: [
        "Early morning breakfast and leave for Safari at Yala national park",
        "The full-day jeep safari takes to most areas that tourists don't see in regular safari and dramatically increases your chance of spotting leopards. The safari lasts more than 6 hours",
        "Here you see a large number of animals such as elephants, deer, mungos, monkeys, deer, crocodiles, buffalo, etc",
        "Your personal jeep and the driver arrange your picnic lunch, which comprised delicious rice and curry also with fruits for dessert",
        "Later leave for your chosen hotel in Colombo or on the west coast",
        "End of the tour"
      ]
    }
  ];

  const itinerary = [
    {
      day: 1,
      title: "Colombo to Southern Coast via Galle",
      description: "Journey through colonial history and mangrove ecosystems"
    },
    {
      day: 2,
      title: "Whale Watching in Mirissa",
      description: "Blue whale encounters and beach relaxation"
    },
    {
      day: 3,
      title: "Yala Safari Adventure",
      description: "Full day wildlife safari and return to Colombo"
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
        return 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800';
      default:
        return 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800';
    }
  };

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsDialogOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative mb-8 rounded-xl overflow-hidden">
        <img
          src={heroImage}
          alt="3-Day southern Sri Lanka Yala Safari"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              3-Day southern Sri Lanka Yala Safari, Galle Fort, Whale Watching Tour
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              On this guided tour, spend three days lounging on the south coast beach of Sri Lanka. See whales swimming in the water, have a guided walking tour of Galle Fort, and go on a full-day Yala safari.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <Badge variant="secondary" className="flex items-center gap-2 p-3">
          <Clock className="h-4 w-4" />
          3 Days
        </Badge>
        <Badge variant="secondary" className="flex items-center gap-2 p-3">
          <Users className="h-4 w-4" />
          Private Tour
        </Badge>
        <Badge variant="secondary" className="flex items-center gap-2 p-3">
          <MapPin className="h-4 w-4" />
          Pickup Included
        </Badge>
        <Badge variant="secondary" className="flex items-center gap-2 p-3">
          <Calendar className="h-4 w-4" />
          Free Cancellation
        </Badge>
        <Badge variant="secondary" className="flex items-center gap-2 p-3">
          <Star className="h-4 w-4" />
          Live Guide
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Gallery Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Tour Gallery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full">
                <CarouselContent>
                  {galleryImages.reduce((acc, image, index) => {
                    if (index % 3 === 0) {
                      acc.push(
                        <CarouselItem key={index}>
                          <div className="grid grid-cols-3 gap-2">
                            {galleryImages.slice(index, index + 3).map((img, imgIndex) => (
                              <div
                                key={index + imgIndex}
                                className="relative aspect-video cursor-pointer rounded-lg overflow-hidden group"
                                onClick={() => openGallery(index + imgIndex)}
                              >
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                              </div>
                            ))}
                          </div>
                        </CarouselItem>
                      );
                    }
                    return acc;
                  }, [] as JSX.Element[])}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              {/* Gallery Modal */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-4xl p-0">
                  <div className="relative">
                    <img
                      src={galleryImages[currentImageIndex]?.src}
                      alt={galleryImages[currentImageIndex]?.alt}
                      className="w-full h-[600px] object-cover"
                    />
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                      {currentImageIndex + 1} / {galleryImages.length}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Highlights */}
          <Card>
            <CardHeader>
              <CardTitle>Tour Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
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
                  {itinerary.map((day) => (
                    <div key={day.day} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className="text-muted-foreground">{day.description}</p>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="detailed" className="space-y-4">
                  {itineraryData.map((day) => (
                    <div key={day.day} className="border rounded-lg">
                      <button
                        onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                        className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="font-semibold text-lg">
                          {day.day}: {day.title}
                        </h3>
                      </button>
                      {expandedDay === day.day && (
                        <div className="px-4 pb-4 border-t">
                          <ul className="space-y-2 mt-3">
                            {day.activities.map((activity, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span className="text-sm">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="space-y-6">
          {/* Package Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Package Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={() => setSelectedPackage('standard')}
                className={`w-full justify-start text-left h-auto p-4 ${
                  selectedPackage === 'standard'
                    ? getPackageColor('standard')
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                <div>
                  <div className="font-semibold">Standard Package</div>
                  <div className="text-sm opacity-90">
                    ${packageRates.standard.twin} per person (twin sharing)
                  </div>
                  <div className="text-sm opacity-90">
                    ${packageRates.standard.single} (single occupancy)
                  </div>
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* Travelers */}
          <Card>
            <CardHeader>
              <CardTitle>Number of Travelers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTravelers(Math.max(1, travelers - 1))}
                  disabled={travelers <= 1}
                >
                  -
                </Button>
                <span className="font-semibold text-lg w-8 text-center">{travelers}</span>
                <Button
                  variant="outline"
                  size="sm"
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
              <Textarea
                placeholder="Any special requirements or requests..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={3}
              />
            </CardContent>
          </Card>

          {/* Booking Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Duration:</span>
                <span className="font-semibold">3 Days</span>
              </div>
              <div className="flex justify-between">
                <span>Travelers:</span>
                <span className="font-semibold">{travelers} {travelers === 1 ? 'Person' : 'People'}</span>
              </div>
              <div className="flex justify-between">
                <span>Package:</span>
                <span className="font-semibold capitalize">{selectedPackage}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Cost:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
              <BookingForm
                packageType="3-Day southern Sri Lanka Yala Safari, Galle Fort, Whale Watching Tour"
                travelers={travelers}
                totalCost={getTotalPrice()}
                initialComments={comments}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YalaSafariTourPackage;