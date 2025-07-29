import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, Star, MapPin, Camera, Binoculars } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BookingForm from './BookingForm';

// Import images
import heroImage from "@/assets/sri-lanka-8-day-hero.avif";
import image1 from "@/assets/sri-lanka-8-day-1.avif";
import image2 from "@/assets/sri-lanka-8-day-2.avif";
import image3 from "@/assets/sri-lanka-8-day-3.avif";
import image4 from "@/assets/sri-lanka-8-day-4.avif";
import image5 from "@/assets/sri-lanka-8-day-5.avif";
import image6 from "@/assets/sri-lanka-8-day-6.avif";
import image7 from "@/assets/sri-lanka-8-day-7.avif";
import image8 from "@/assets/sri-lanka-8-day-8.avif";
import image9 from "@/assets/sri-lanka-8-day-9.avif";
import image10 from "@/assets/sri-lanka-8-day-10.avif";

const EightDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');

  const packageRates = {
    standard: { twin: 759.00, single: 1190.00 },
    comfort: { twin: 999.00, single: 1490.00 }
  };

  const galleryImages = [
    { src: heroImage, alt: "Sri Lanka 8-Day Tour" },
    { src: image1, alt: "Cultural Triangle" },
    { src: image2, alt: "Sigiriya Rock Fortress" },
    { src: image3, alt: "Tea Plantations" },
    { src: image4, alt: "Wildlife Safari" },
    { src: image5, alt: "Kandy Temple" },
    { src: image6, alt: "Hill Country" },
    { src: image7, alt: "Ancient Ruins" },
    { src: image8, alt: "Beach Paradise" },
    { src: image9, alt: "Train Journey" },
    { src: image10, alt: "Local Culture" }
  ];

  const highlights = [
    "Discover Sri Lanka's rich heritage as you explore ancient temples, stupas, and royal palaces in the Cultural Triangle.",
    "Ascend the legendary Sigiriya Rock Fortress to admire its historic frescoes and breathtaking views.",
    "Embark on a thrilling Yala National Park safari, where you might spot leopards, sloth bears, elephants, and crocodiles.",
    "Relax on stunning coastal beaches and take a refreshing dip in the warm ocean waters.",
    "Journey through Sri Lanka's scenic hill country on the famous blue train, soaking in the picturesque landscapes."
  ];

  const inclusions = [
    "8 days accommodation in standard tourist hotels",
    "7 Breakfasts and Dinners",
    "Guided Sigiriya rock tour",
    "Dambulla temple tour",
    "Exploring ancient monuments in Anuradhapura",
    "Exploring ancient monuments in Polonnaruwa",
    "Kandy sightseeing tour",
    "Tooth relic temple tour",
    "Yala National Park safari",
    "Royal botanical garden tour",
    "Herbal garden tour",
    "Nuwara Eliya sightseeing tour",
    "All-inclusive hill country blue train trip",
    "Ella sightseeing tour with nine arch bridge and mini-adams peak",
    "Minneriya National Park safari",
    "Air-conditioned vehicles and private transportation",
    "Local tourist driver cum guide",
    "Daily breakfast and dinner at hotel",
    "Fuel charges, Parking Fees and Highway Charges",
    "Chauffeur guide",
    "Hotel or Airport Pick-up & Drop-Off"
  ];

  const exclusions = [
    "Lunch and refreshments",
    "Expenses of Personal Nature",
    "Entry/Admission - Sigiriya The Ancient Rock Fortress",
    "Entry/Admission - Anuradhapura",
    "Entry/Admission - Polonnaruwa",
    "Entry/Admission - Minneriya and Yala National Park",
    "Jeeps for safaris",
    "Entry/Admission - Dambulla Royal Cave Temple",
    "Entry/Admission - Temple of the Sacred Tooth Relic",
    "Entry/Admission - Royal Botanical Gardens",
    "Entry/Admission - Kosgoda Sea Turtle Conservation Project"
  ];

  const itineraryData = [
    {
      day: "Day 1",
      title: "Colombo → Anuradhapura → Sigiriya",
      details: [
        "Meet your Seerendipity Tours representative and travel to Sigiriya.",
        "En route, explore the ancient ruins of Anuradhapura, a UNESCO-listed historic city.",
        "Overnight stay in Sigiriya."
      ]
    },
    {
      day: "Day 2",
      title: "Sigiriya → Polonnaruwa → Minneriya Safari",
      details: [
        "After breakfast, conquer the legendary Sigiriya Rock Fortress with its ancient frescoes and panoramic views.",
        "Discover the archaeological wonders of Polonnaruwa, another UNESCO World Heritage Site.",
        "Embark on an exciting Minneriya National Park safari (famous for elephant gatherings).",
        "Overnight stay in Sigiriya."
      ]
    },
    {
      day: "Day 3",
      title: "Sigiriya → Dambulla → Kandy",
      details: [
        "Visit the Dambulla Cave Temple, a stunning complex of rock temples.",
        "Stop at a spice garden in Matale and explore a vibrant Hindu temple.",
        "Arrive in Kandy, the cultural heart of Sri Lanka.",
        "Overnight stay in Kandy."
      ]
    },
    {
      day: "Day 4",
      title: "Kandy Sightseeing",
      details: [
        "Discover Kandy's highlights:",
        "• Temple of the Sacred Tooth Relic",
        "• Royal Botanical Gardens (Peradeniya)",
        "• Bahirawakanda Temple (for panoramic city views)",
        "• Kandy Lake & Upper Lake",
        "• Gem Museum & Cultural Show",
        "Overnight stay in Kandy."
      ]
    },
    {
      day: "Day 5",
      title: "Kandy → Nuwara Eliya → Ella (Scenic Train Ride)",
      details: [
        "Journey through tea country, visiting plantations & Ramboda Falls.",
        "Explore Nuwara Eliya (\"Little England\") with its colonial charm.",
        "Board the picturesque Ella-bound train (one of the world's most beautiful rides).",
        "Overnight stay in Ella."
      ]
    },
    {
      day: "Day 6",
      title: "Ella → Yala",
      details: [
        "Sunrise hike up Little Adam's Peak for breathtaking views.",
        "Visit Ella Rock & Nine Arch Bridge.",
        "Stop at Ravana Falls & Sita Amman Temple en route to Yala.",
        "Overnight stay in Yala."
      ]
    },
    {
      day: "Day 7",
      title: "Yala Safari → South Coast",
      details: [
        "Morning Yala National Park safari (leopards, elephants & more!).",
        "Travel to the southwest coast for beach relaxation.",
        "Overnight stay at a beachside hotel."
      ]
    },
    {
      day: "Day 8",
      title: "South Coast → Colombo (Coastal Highlights)",
      details: [
        "Scenic drive back to Colombo, stopping at:",
        "• Galle Fort (Dutch-colonial heritage)",
        "• Mirissa Beach (optional whale watching)",
        "• Hikkaduwa & Bentota River (optional boat ride)",
        "Drop-off at Colombo airport/hotel."
      ]
    }
  ];

  const getTotalPrice = () => {
    const rate = packageRates[selectedPackage as keyof typeof packageRates];
    return travelers === 1 ? rate.single : rate.twin * travelers;
  };

  const getPackageColor = (pkg: string) => {
    switch (pkg) {
      case 'standard': return 'bg-blue-500 hover:bg-blue-600';
      case 'comfort': return 'bg-green-500 hover:bg-green-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Sri Lanka 8-Day Private Tour-:25 Amazing Places+Activities
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Explore the highlights of Sri Lanka on an 8-day journey with included stays. Experience 25 incredible destinations, featuring historic sites, wildlife reserves, picturesque highlands, untouched beaches, and charming rural towns.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Calendar className="w-4 h-4 mr-2" />
                8 Days
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Users className="w-4 h-4 mr-2" />
                Private Tour
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <MapPin className="w-4 h-4 mr-2" />
                25 Destinations
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Star className="w-4 h-4 mr-2" />
                Free Cancellation
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Facts */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Duration</p>
                    <p className="text-sm text-muted-foreground">8 Days</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Group Size</p>
                    <p className="text-sm text-muted-foreground">Private</p>
                  </div>
                  <div className="text-center">
                    <Camera className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Photography</p>
                    <p className="text-sm text-muted-foreground">Unlimited</p>
                  </div>
                  <div className="text-center">
                    <Binoculars className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Wildlife</p>
                    <p className="text-sm text-muted-foreground">Safaris</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tour Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Tour Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {galleryImages.slice(0, 6).map((image, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer overflow-hidden rounded-lg aspect-square">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {galleryImages.map((img, imgIndex) => (
                              <CarouselItem key={imgIndex}>
                                <div className="flex items-center justify-center p-6">
                                  <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="max-w-full max-h-[70vh] object-contain"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
                {galleryImages.length > 6 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full mt-4">
                        View All {galleryImages.length} Photos
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {galleryImages.map((img, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <div className="flex items-center justify-center p-6">
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="max-w-full max-h-[70vh] object-contain"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </DialogContent>
                  </Dialog>
                )}
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
                    <li key={index} className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tour Details */}
            <Card>
              <CardHeader>
                <CardTitle>Tour Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="itinerary">Detailed Itinerary</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">What's Included</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {inclusions.map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">What's Not Included</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exclusions.map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="itinerary" className="space-y-4">
                    {itineraryData.map((day, index) => (
                      <Card key={index}>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-primary">{day.day}: {day.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {day.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-sm">{detail}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Package Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Package Type</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button
                      variant={selectedPackage === 'standard' ? 'default' : 'outline'}
                      className={`w-full justify-start ${selectedPackage === 'standard' ? getPackageColor('standard') : ''}`}
                      onClick={() => setSelectedPackage('standard')}
                    >
                      <div className="text-left">
                        <div className="font-semibold">Standard Package</div>
                        <div className="text-sm opacity-90">
                          ${packageRates.standard.twin} PP (Twin) | ${packageRates.standard.single} (Single)
                        </div>
                      </div>
                    </Button>
                    
                    <Button
                      variant={selectedPackage === 'comfort' ? 'default' : 'outline'}
                      className={`w-full justify-start ${selectedPackage === 'comfort' ? getPackageColor('comfort') : ''}`}
                      onClick={() => setSelectedPackage('comfort')}
                    >
                      <div className="text-left">
                        <div className="font-semibold">Comfort Package</div>
                        <div className="text-sm opacity-90">
                          ${packageRates.comfort.twin} PP (Twin) | ${packageRates.comfort.single} (Single)
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
                  <div className="space-y-2">
                    <Label htmlFor="travelers">How many people?</Label>
                    <Input
                      id="travelers"
                      type="number"
                      min="1"
                      max="20"
                      value={travelers}
                      onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                    />
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
                    placeholder="Any special requests or dietary requirements?"
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
                      <span>8 Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Travelers:</span>
                      <span>{travelers} {travelers === 1 ? 'person' : 'people'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <span className="capitalize">{selectedPackage}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total:</span>
                        <span>${getTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Form */}
              <BookingForm 
                packageType={`8-day-${selectedPackage}`}
                travelers={travelers}
                totalCost={getTotalPrice()}
                initialComments={comments}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EightDayTourPackage;