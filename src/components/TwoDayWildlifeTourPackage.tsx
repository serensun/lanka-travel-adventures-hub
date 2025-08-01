import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Clock, Users, Globe, Calendar, CheckCircle, XCircle, AlertCircle, ZoomIn, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Car, MapPin, Camera, MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import BookingForm from "./BookingForm";

// Gallery images
import gallery1 from "@/assets/2-day-wildlife-1.avif";
import gallery2 from "@/assets/2-day-wildlife-2.avif";
import gallery3 from "@/assets/2-day-wildlife-3.avif";
import gallery4 from "@/assets/2-day-wildlife-4.avif";
import gallery5 from "@/assets/2-day-wildlife-5.avif";
import gallery6 from "@/assets/2-day-wildlife-6.avif";
import gallery7 from "@/assets/2-day-wildlife-7.avif";
import gallery8 from "@/assets/2-day-wildlife-8.avif";
import gallery9 from "@/assets/2-day-wildlife-9.avif";

const TwoDayWildlifeTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);
  
  
  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, 
    gallery6, gallery7, gallery8, gallery9
  ];

  const itineraryData = [
    { 
      day: 1, 
      title: "Rainforest Trek & Udawalawe Safari", 
      time: "Full Day",
      highlights: "Sinharaja Rainforest, Udawalawe National Park Safari",
      description: "Depart from your west coast hotel and journey through Sri Lanka's picturesque low country (approx. 2-hour drive) to Sinharaja Rainforest, a UNESCO-listed biosphere. Embark on a 3–4 hour guided trek with an expert naturalist, spotting exotic trees, rare plants, birds, insects, and hidden waterfalls. Continue to Udawalawe National Park for an exciting 4-hour jeep safari, where you'll encounter elephants, bears, crocodiles, jackals, deer, wild buffaloes, and vibrant birdlife. Check in to your Udawalawe hotel for an overnight stay and leisure time."
    },
    { 
      day: 2, 
      title: "Scenic Train Ride & Tea Country Exploration", 
      time: "Full Day",
      highlights: "Blue Train Journey, Tea Plantation Tour, Nuwara Eliya",
      description: "Transfer early to Ella Railway Station and board the iconic hill country blue train for a breathtaking 2.5-hour journey. Marvel at rolling tea plantations, misty mountains, forested valleys, and rural villages along one of the world's most scenic rail routes. Disembark at Nanu Oya Station, where your guide will meet you for a visit to Nuwara Eliya's tea country. Stop at Gregory Lake for serene views before touring a working tea factory (1-hour visit) to learn about Ceylon tea production. Conclude the tour with a return transfer to your west coast hotel."
    }
  ];

  const itinerary = [
    { day: 1, title: 'Rainforest Trek & Udawalawe Safari', activities: ['Sinharaja Rainforest Trek', 'Bird-watching in Sinharaja', 'Udawalawe National Park Safari', 'Wildlife Photography', 'Hotel Check-in'] },
    { day: 2, title: 'Scenic Train Ride & Tea Country Exploration', activities: ['Blue Train Journey', 'Tea Plantation Tour', 'Tea Factory Visit', 'Gregory Lake Visit', 'Return Transfer'] }
  ];

  const highlights = [
    "Explore Sinharaja Rainforest with an expert guide to discover towering trees, exotic plants, colorful birds, and fascinating insects in this UNESCO-listed biosphere",
    "Embark on an off-road jeep safari through Udawalawe National Park to observe wild elephants, crocodiles, and other incredible wildlife in their natural habitat",
    "Journey through misty mountains aboard the iconic blue train, soaking in panoramic views of lush tea plantations and dramatic hill country landscapes",
    "Discover charming highland towns including Ella and Nuwara Eliya, known for their cool climate, colonial charm, and stunning natural beauty",
    "Experience the famous Ceylon Tea Trail with visits to working tea plantations and factories to learn about tea production and sample world-renowned brews"
  ];

  const packageRates = {
    standard: { double: 350, single: 450 }
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
      default: return 'from-blue-500 to-blue-700';
    }
  };

  const includes = [
    "1-night accommodation in a standard tourist hotel",
    "Day 2 breakfast",
    "A guided jungle trek in the sinharaja rainforest",
    "Bird-watching in Sinharaja",
    "Udawalawe National Park safari",
    "Hill Country blue train journey from Ella to Nuwara Eliya",
    "Visiting waterfalls",
    "Tea factory visit and tea plantation tour",
    "Spice/herbal garden tour"
  ];

  const excludes = [
    "Tips and gratuities",
    "Entrance fees (USD about 25 P.P)",
    "Udawalawe National Park entrance and charges for the jeep (About USD 85 P.P)",
    "Dinner and Lunch",
    "Drinks"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            2-Day wildlife tour; rainforest and National park
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Embark on an unforgettable wildlife adventure with an off-road jeep safari through Udawalawe National Park. 
            Explore Sri Lanka's rich biodiversity during a guided rainforest walk with our expert naturalist. 
            Complete your journey with a picturesque blue train ride through the rolling hills of tea country, 
            offering breathtaking panoramic views.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
              {galleryImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div 
                      className="flex-none w-80 aspect-video overflow-hidden rounded-lg shadow-lg snap-start cursor-pointer group relative"
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img 
                        src={image} 
                        alt={`Tour gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full max-h-[90vh] p-2">
                    <div className="relative">
                      <img 
                        src={galleryImages[currentImageIndex]} 
                        alt={`Tour gallery ${currentImageIndex + 1} - Enlarged view`}
                        className="w-full h-auto object-contain max-h-[80vh] rounded-lg"
                      />
                      
                      {/* Previous Arrow */}
                      <button
                        onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : galleryImages.length - 1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      
                      {/* Next Arrow */}
                      <button
                        onClick={() => setCurrentImageIndex(prev => prev < galleryImages.length - 1 ? prev + 1 : 0)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {galleryImages.length}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
            <div className="text-center mt-4 text-sm text-muted-foreground">
              Scroll horizontally to view more images
            </div>
          </div>
        </div>

        {/* Tour Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            {/* Key Features */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Tour Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Free cancellation: Cancel up to 24-hours in advance for a full refund</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Reserve now & pay later: Keep your travel plans flexible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Duration: 2 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Live tour guide: English, Italian, French</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Small group: Private tour participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    <span>Pickup included: Please provide us the name of the hotel or address of the pick-up location</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Itinerary with Tabs */}
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                <Car className="w-5 h-5 mr-2 text-orange-500" />
                2-Day Detailed Itinerary
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
                  {itineraryData.map((day) => (
                    <div key={day.day} className="border-l-4 border-orange-400 pl-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          {day.day}
                        </div>
                        <div>
                          <h4 className="text-blue-900 font-semibold text-lg">{day.title}</h4>
                          <p className="text-blue-600 text-sm">{day.time} • {day.highlights}</p>
                        </div>
                      </div>
                      <p className="text-blue-800 text-sm leading-relaxed">{day.description}</p>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Includes & Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-6 w-6" />
                    Includes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <XCircle className="h-6 w-6" />
                    Excludes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {excludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Important Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What to bring:</h4>
                  <p className="text-muted-foreground">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Know before you go:</h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
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

          {/* Sidebar */}
          <div className="lg:sticky lg:top-8 h-fit">
            {/* Quick Info */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">Free cancellation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">2 days duration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-sm">English guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm">Private group</span>
                </div>
              </CardContent>
            </Card>

            {/* Package Selection */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Select Package Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div 
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 bg-gradient-to-r ${getPackageColor('standard')} text-white border-transparent shadow-lg`}
                  onClick={() => setSelectedPackage('standard')}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">Standard Package</h3>
                      <p className="text-sm text-white/90">Perfect for budget travelers</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">${packageRates.standard.double}</div>
                      <div className="text-xs text-white/80">per person (twin sharing)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Travelers */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Number of Travelers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    disabled={travelers <= 1}
                  >
                    -
                  </Button>
                  <span className="text-xl font-semibold">{travelers}</span>
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
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Special Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea 
                  placeholder="Any special requests or dietary requirements..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-center">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">2 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers:</span>
                    <span className="font-semibold">{travelers} {travelers === 1 ? 'Person' : 'People'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span className="font-semibold capitalize">{selectedPackage}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Cost:</span>
                      <span className="text-primary">${getTotalPrice()}</span>
                    </div>
                  </div>
                </div>
                
                <BookingForm 
                  packageType={`2-day-wildlife-tour-${selectedPackage}`}
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

export default TwoDayWildlifeTourPackage;