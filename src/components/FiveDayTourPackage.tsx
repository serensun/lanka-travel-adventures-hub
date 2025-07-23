import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, Users, Globe, Calendar, CheckCircle, XCircle, AlertCircle, ZoomIn, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Car, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import BookingForm from "./BookingForm";

// Gallery images
import gallery1 from "@/assets/tour-gallery-1.avif";
import gallery2 from "@/assets/tour-gallery-2.avif";
import gallery3 from "@/assets/tour-gallery-3.avif";
import gallery4 from "@/assets/tour-gallery-4.avif";
import gallery5 from "@/assets/tour-gallery-5.avif";
import gallery6 from "@/assets/tour-gallery-6.avif";
import gallery7 from "@/assets/tour-gallery-7.avif";
import gallery8 from "@/assets/tour-gallery-8.avif";
import gallery9 from "@/assets/tour-gallery-9.avif";

const FiveDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const itineraryData = [
    { 
      day: 1, 
      title: "Arrival & Colombo Discovery", 
      time: "Full Day",
      highlights: "Gangaramaya Temple, Independence Square, Galle Face Green",
      description: "Arrive in Colombo and begin your Sri Lankan adventure with a comprehensive city tour. Visit the sacred Gangaramaya Temple, explore Independence Square, and enjoy the coastal breeze at Galle Face Green. Immerse yourself in the vibrant local culture and history."
    },
    { 
      day: 2, 
      title: "Kandy's Cultural Treasures", 
      time: "Full Day",
      highlights: "Temple of the Tooth, Botanical Gardens, Cultural Show",
      description: "Journey to the ancient kingdom of Kandy and visit the sacred Temple of the Tooth Relic, one of Buddhism's most important sites. Explore the beautiful Royal Botanical Gardens in Peradeniya and enjoy a traditional cultural show featuring Kandyan dance performances."
    },
    { 
      day: 3, 
      title: "Hill Country & Tea Heritage", 
      time: "Full Day",
      highlights: "Nuwara Eliya, Tea Plantation, Little England",
      description: "Experience the scenic beauty of Sri Lanka's hill country as you travel to Nuwara Eliya, known as 'Little England.' Visit a working tea plantation, learn about Ceylon tea production, and enjoy the cool mountain climate while exploring colonial-era architecture."
    },
    { 
      day: 4, 
      title: "Historic Galle & Coastal Beauty", 
      time: "Full Day",
      highlights: "Galle Fort, Dutch Architecture, Southern Beaches",
      description: "Explore the UNESCO World Heritage Site of Galle Fort, a remarkable example of Dutch colonial architecture. Walk along the ancient ramparts, visit local boutiques, and enjoy the stunning coastal views. Relax on beautiful southern beaches."
    },
    { 
      day: 5, 
      title: "Final Explorations & Departure", 
      time: "Half Day",
      highlights: "Shopping, Souvenir Hunting, Airport Transfer",
      description: "Enjoy your final morning in Sri Lanka with some last-minute shopping for souvenirs and local crafts. Visit any remaining attractions based on your interests before your comfortable airport transfer for departure."
    }
  ];
  
  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, 
    gallery6, gallery7, gallery8, gallery9
  ];

  const itinerary = [
    { day: 1, title: 'Arrival & Colombo Discovery', activities: ['Arrive in Colombo', 'Visit Gangaramaya Temple', 'Independence Square', 'Galle Face Green'] },
    { day: 2, title: 'Colombo - Kandy', activities: ['Travel to Kandy', 'Temple of the Tooth', 'Kandy Lake', 'Cultural show'] },
    { day: 3, title: 'Kandy - Nuwara Eliya', activities: ['Drive to hill country', 'Tea plantation visit', 'Gregory Lake', 'City tour'] },
    { day: 4, title: 'Nuwara Eliya - Ella - Yala', activities: ['Travel to Ella', 'Nine Arch Bridge', 'Drive to Yala', 'Evening safari'] },
    { day: 5, title: 'Yala - Galle - Colombo', activities: ['Morning safari', 'Drive to Galle', 'Galle Fort tour', 'Return to Colombo'] }
  ];

  const highlights = [
    "Explore the historic Colombo city and visit iconic temples and colonial architecture",
    "Journey to Kandy and visit the sacred Temple of the Tooth Relic",
    "Experience the scenic hill country and visit world-famous tea plantations",
    "Discover the colonial charm of Galle Fort and relax on pristine beaches"
  ];

  const includes = [
    "Hotel pickup and drop-off",
    "Air-conditioned transportation", 
    "4-nights of accommodation in standard hotels",
    "4 breakfasts",
    "4 Dinners",
    "Tea factory visit",
    "Cultural show tickets",
    "All entrance fees to attractions",
    "Professional English-speaking guide",
    "Fuel surcharge",
    "Airport/departure tax",
    "Parking fees"
  ];

  const excludes = [
    "Meals and beverages (unless specified)",
    "Gratuities (optional)",
    "Personal expenses",
    "International flights",
    "Travel insurance"
  ];

  const packageRates = {
    standard: { double: 699, single: 1299 },
    comfort: { double: 899, single: 1699 },
    luxury: { double: 1299, single: 2499 }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            5-Day Sri Lanka Cultural & Nature Tour
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Immerse yourself in the rich cultural heritage and stunning natural beauty of Sri Lanka. 
            This comprehensive 5-day journey takes you through ancient temples, lush tea plantations, 
            historic cities, and pristine beaches. Experience the perfect blend of culture, nature, 
            and relaxation in the Pearl of the Indian Ocean.
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
                    <span>Duration: 5 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Live tour guide: English, Italian, French</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Small group: Private tour participants</span>
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
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                <Car className="w-5 h-5 mr-2 text-orange-500" />
                5-Day Detailed Itinerary
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
                  <p className="text-muted-foreground">Comfortable shoes, Hat, Camera, Sunscreen, Water, Light jacket for hill country</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Know before you go:</h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Wear comfortable walking shoes as there is a moderate amount of walking involved</li>
                    <li>• It is recommended to bring a hat, sunscreen, and a camera</li>
                    <li>• Smoking and consuming food and drinks are not allowed inside the historical sites</li>
                    <li>• Please be ready at your hotel lobby 15 minutes before the pickup time</li>
                    <li>• Children under 8 years are not recommended to participate in this tour</li>
                    <li>• Wheelchair and stroller access is not available at all locations</li>
                    <li>• In case of bad weather, some outdoor activities may be cancelled</li>
                    <li>• Dress modestly when visiting religious sites (cover shoulders and knees)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            {/* Rates */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tour Rates (USD)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(packageRates).map(([pkg, rates]) => (
                    <div key={pkg} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2 capitalize">{pkg} Package</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span>Twin sharing:</span>
                          <Badge variant="outline">${rates.double} p.p</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Single rate:</span>
                          <Badge variant="outline">${rates.single}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <BookingForm 
              packageType="5-Day Sri Lanka Cultural & Nature Tour"
              travelers={2}
              totalCost={699}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveDayTourPackage;