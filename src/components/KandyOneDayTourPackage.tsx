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
import gallery1 from "@/assets/kandy-tour-1.avif";
import gallery2 from "@/assets/kandy-tour-2.avif";
import gallery3 from "@/assets/kandy-tour-3.avif";
import gallery4 from "@/assets/kandy-tour-4.avif";
import gallery5 from "@/assets/kandy-tour-5.avif";
import gallery6 from "@/assets/kandy-tour-6.avif";
import gallery7 from "@/assets/kandy-tour-7.avif";

const KandyOneDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);
  
  
  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, 
    gallery6, gallery7
  ];

  const itineraryData = [
    { 
      day: 1, 
      title: "Morning", 
      time: "Full Day",
      highlights: "Pinnawala Elephant Orphanage",
      description: "Your personal guide will meet you to begin your journey to Kandy. Our first stop is the famous Pinnawala Elephant Orphanage, where you'll observe: Elephants of all ages roaming freely in their natural habitat, The daily river bathing ritual (a photographer's dream), Baby elephants being bottle-fed by caretakers, The conservation efforts protecting these majestic creatures"
    },
    { 
      day: 2, 
      title: "Kandy Highlights", 
      time: "Full Day",
      highlights: "Temple of the Tooth Relic, Cultural Performance",
      description: "Discover Sri Lanka's last royal capital, which maintained independence until 1815. Our visit includes: The sacred Temple of the Tooth Relic (UNESCO World Heritage Site), A vibrant cultural performance featuring: Traditional Kandyan dancing, Pulse-pounding drum ceremonies, Daring fire-walking displays"
    },
    { 
      day: 3, 
      title: "Afternoon Experiences", 
      time: "Full Day",
      highlights: "Matale Spice Garden, Peradeniya Botanical Gardens, Kandy City",
      description: "1. Matale Spice Garden: Learn about Sri Lanka's legendary spices, Discover ancient Ayurvedic medicinal plants, See cinnamon, pepper, and cardamom in their natural state. 2. Peradeniya Botanical Gardens: Wander through 147 acres of tropical splendor, Marvel at the giant Java fig tree (a favorite Instagram spot), Spot colorful tropical birds in this 16th century royal garden. 3. Kandy City Exploration: Scenic drive around the picturesque Kandy Lake, Visit historic religious sites (Buddhist/Hindu temples, colonial churches), Tour a working tea factory with tasting session"
    }
  ];

  const itinerary = [
    { day: 1, title: 'Morning', activities: ['Pinnawala Elephant Orphanage', 'River Bathing Ritual', 'Feeding Baby Elephants', 'Conservation Experience'] },
    { day: 2, title: 'Kandy Highlights', activities: ['Temple of the Tooth Relic', 'Cultural Performance', 'Kandyan Dancing', 'Drum Ceremonies'] },
    { day: 3, title: 'Afternoon Experiences', activities: ['Matale Spice Garden', 'Peradeniya Botanical Gardens', 'Kandy Lake Drive', 'Tea Factory Visit'] }
  ];

  const highlights = [
    "Marvel at playful elephants as they splash and bathe in the river at Pinnawala Elephant Orphanage",
    "Pay homage at Sri Lanka's holiest site - the revered Temple of the Tooth Relic in Kandy",
    "Wander through tropical paradise among exotic plants and vibrant orchids at Peradeniya Botanical Gardens",
    "Engage your senses in a fragrant spice garden showcasing Sri Lanka's famous cinnamon and spices",
    "Take in Kandy's vibrant sights from your comfortable air-conditioned vehicle"
  ];

  const packageRates = {
    standard: { double: 99, single: 160 }
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
    "Complimentary hotel pick-up and drop-off from over 400 West Coast hotels",
    "Expert-led walking tour of the Sacred Tooth Relic Temple",
    "Guided visit to Pinnawala Elephant Orphanage",
    "Exploration of a fragrant spice and herbal garden",
    "Tour of a scenic tea estate and tea production facility",
    "Sightseeing in Kandy with a knowledgeable guide",
    "All land transportation as per the planned itinerary",
    "Professional tour guide services"
  ];

  const excludes = [
    "Admission tickets to Pinnawala Elephant Orphanage",
    "Entry fees for the Temple of the Tooth Relic",
    "Access to the Royal Botanical Garden",
    "Gratuities for service staff"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Full-Day Kandy Cultural & Nature Tour from Colombo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            This Full-Day Kandy Cultural & Nature Tour from Colombo, Bentota, Kalutara, and other west coast resorts includes visits to the Pinnawala Elephant Orphanage, the sacred Temple of the Tooth in Kandy, the Peradeniya Botanical Gardens, and a tea factory.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
              {galleryImages.slice(0, 3).map((image, index) => (
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
              {galleryImages.slice(3).map((image, index) => (
                <Dialog key={index + 3}>
                  <DialogTrigger asChild>
                    <div 
                      className="flex-none w-80 aspect-video overflow-hidden rounded-lg shadow-lg snap-start cursor-pointer group relative"
                      onClick={() => setCurrentImageIndex(index + 3)}
                    >
                      <img 
                        src={image} 
                        alt={`Tour gallery ${index + 4}`}
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
                    <span>Duration: 1 day</span>
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
                    <span>Pickup included: Please provide us the name of the hotel or address</span>
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

            {/* Detailed Itinerary */}
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                <Car className="w-5 h-5 mr-2 text-orange-500" />
                Full-Day Detailed Itinerary
              </h3>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="detailed">Detailed Day-by-Day</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid md:grid-cols-1 gap-4">
                    {itinerary.map((section) => (
                      <div key={section.day} className="bg-white/60 rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="bg-orange-400 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">
                            {section.day}
                          </div>
                          <h4 className="text-blue-900 font-medium text-sm">{section.title}</h4>
                        </div>
                        <p className="text-blue-700 text-xs">{section.activities.length} activities planned</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="detailed" className="space-y-6">
                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-400 pl-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          M
                        </div>
                        <h4 className="text-blue-900 font-semibold text-lg">Morning</h4>
                      </div>
                      <p className="text-blue-800 text-sm mb-3">Your personal guide will meet you to begin your journey to Kandy. Our first stop is the famous Pinnawala Elephant Orphanage, where you'll observe:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-800 text-sm">Elephants of all ages roaming freely in their natural habitat</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-800 text-sm">The daily river bathing ritual (a photographer's dream)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-800 text-sm">Baby elephants being bottle-fed by caretakers</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-800 text-sm">The conservation efforts protecting these majestic creatures</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-400 pl-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          K
                        </div>
                        <h4 className="text-blue-900 font-semibold text-lg">Kandy Highlights</h4>
                      </div>
                      <p className="text-blue-800 text-sm mb-3">Discover Sri Lanka's last royal capital, which maintained independence until 1815. Our visit includes:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-800 text-sm">The sacred Temple of the Tooth Relic (UNESCO World Heritage Site)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-800 text-sm">Traditional Kandyan dancing</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-800 text-sm">Pulse-pounding drum ceremonies</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-blue-800 text-sm">Daring fire-walking displays</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-400 pl-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          A
                        </div>
                        <h4 className="text-blue-900 font-semibold text-lg">Afternoon Experiences</h4>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">1. Matale Spice Garden:</h5>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">Learn about Sri Lanka's legendary spices</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">Discover ancient Ayurvedic medicinal plants</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">See cinnamon, pepper, and cardamom in their natural state</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">2. Peradeniya Botanical Gardens:</h5>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">Wander through 147 acres of tropical splendor</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">Marvel at the giant Java fig tree (a favorite Instagram spot)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">Spot colorful tropical birds in this 16th century royal garden</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">3. Kandy City Exploration:</h5>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">Scenic drive around the picturesque Kandy Lake</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">Visit historic religious sites (Buddhist/Hindu temples, colonial churches)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">Tour a working tea factory with tasting session</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Shopping Opportunities:</h5>
                          <ul className="space-y-1">
                            <li className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">Luxurious Sri Lankan silk products</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">Exquisite gemstones at Hemachandra Jewellers</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-800 text-sm">Unique handicrafts at Barefoot</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Evening:</h5>
                          <p className="text-blue-800 text-sm">Conclude your tour with comfortable return transportation to your hotel, filled with unforgettable memories of Sri Lanka's cultural heartland.</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <p className="text-sm text-muted-foreground">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Know before you go:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
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
            <div className="sticky top-8">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-center">Select Package Type</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div 
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPackage === 'standard' 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedPackage('standard')}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Standard Package</h3>
                      <Badge variant="secondary">Most Popular</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">
                      Perfect for most travelers seeking comfort and value
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Twin sharing (per person):</span>
                      <span className="font-semibold">${packageRates.standard.double}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Single rate:</span>
                      <span className="font-semibold">${packageRates.standard.single}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Number of Travelers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      disabled={travelers <= 1}
                    >
                      -
                    </Button>
                    <span className="font-semibold text-lg">{travelers}</span>
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

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Special Requests
                  </CardTitle>
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

              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span className="capitalize">{selectedPackage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers:</span>
                    <span>{travelers}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                  <BookingForm 
                    packageType={`Full-Day Kandy Cultural & Nature Tour - ${selectedPackage} package`}
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
    </div>
  );
};

export default KandyOneDayTourPackage;