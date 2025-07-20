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
import gallery1 from "@/assets/sri-lanka-3-day-1.avif";
import gallery2 from "@/assets/sri-lanka-3-day-2.avif";
import gallery3 from "@/assets/sri-lanka-3-day-3.avif";
import gallery4 from "@/assets/sri-lanka-3-day-4.avif";
import gallery5 from "@/assets/sri-lanka-3-day-5.avif";
import gallery6 from "@/assets/sri-lanka-3-day-6.avif";
import heroImage from "@/assets/sri-lanka-3-day-hero.avif";

const ThreeDayTourPackage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);
  
  
  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6
  ];

  const itineraryData = [
    { 
      day: 1, 
      title: "Colombo/Anuradhapura/Sigiriya", 
      time: "Full Day",
      highlights: "Historic city of Anuradhapura, Ancient UNESCO site",
      description: "Meet and greet a representative of Serendipity Tours, then drive to a hotel in Sigiriya. En route, visit the historic city of Anuradhapura, one of the ancient capitals of Sri Lanka. Explore the sacred city with its magnificent dagobas, monasteries, and palaces that date back over 2,000 years."
    },
    { 
      day: 2, 
      title: "Sigiriya/Polonnaruwa/Sigiriya", 
      time: "Full Day",
      highlights: "Sigiriya Rock Fortress, Polonnaruwa Ancient City, Pidurangala Temple",
      description: "Breakfast at the hotel and climb the iconic Sigiriya rock fortress, a 5th-century palace built on a massive rock column. Later, drive to Polonnaruwa, an ancient city, to see many dozens of ancient religious monuments. Visit the ancient Pidurangala temple for spectacular sunset views."
    },
    { 
      day: 3, 
      title: "Sigiriya/Kandy/Colombo", 
      time: "Full Day",
      highlights: "Dambulla Golden Temple, Spice Garden, Kandy City Tour",
      description: "After breakfast, leave for Kandy. En route, stop at Dambulla Golden Temple, a complex of five cave temples with magnificent Buddha statues and murals. Visit the spice and herbal garden in Matale and see the beautiful Hindu temple. Complete your cultural triangle journey with memories to last a lifetime."
    }
  ];

  const itinerary = [
    { day: 1, title: 'Colombo/Anuradhapura/Sigiriya', activities: ['Meet & Greet at Airport', 'Drive to Sigiriya', 'Historic Anuradhapura City Tour', 'Ancient Dagobas & Monasteries'] },
    { day: 2, title: 'Sigiriya/Polonnaruwa/Sigiriya', activities: ['Sigiriya Rock Fortress Climb', 'Polonnaruwa Archaeological Site', 'Ancient Religious Monuments', 'Pidurangala Temple Visit'] },
    { day: 3, title: 'Sigiriya/Kandy/Colombo', activities: ['Dambulla Golden Cave Temple', 'Spice & Herbal Garden', 'Hindu Temple in Matale', 'Return Journey to Colombo'] }
  ];

  const highlights = [
    "Explore UNESCO treasures: Walk through the ancient cities of Anuradhapura and Polonnaruwa",
    "Conquer Sigiriya Rock Fortress: Climb the iconic Lion Rock for breathtaking views",
    "Discover sacred Kandy: Visit the revered Temple of the Tooth Relic",
    "Marvel at Dambulla's Golden Cave Temple: A masterpiece of Buddhist art",
    "Taste hill country life: Scenic drives through tea plantations and lush landscapes"
  ];

  const rates = [
    { type: "Standard package", twin: 399, single: 599 },
    { type: "Comfort package", twin: 499, single: 799 },
    { type: "Luxury package", twin: 699, single: 899 }
  ];

  const includes = [
    "2 Nights (3 days) of accommodation in standard hotels",
    "Daily Breakfast at the Hotel: 2 breakfasts (starting from day 2)",
    "Daily Dinner at the Hotel: 2 Dinners (starting from day 1)",
    "Kandy city tour and shopping trip",
    "Entrance fees for The Sigiriya Rock Fortress, Sigiriya paintings, and the Sigiriya museum are all worth visiting",
    "Dambulla Golden Cave Temple, Polonnaruwa historical city and historical museum, Sacred Tooth Relic Temple, Kandyan cultural show, The spice garden comes with a serving of herbal drink",
    "Tea factory and tea tasting",
    "A botanical garden in Peradeniya",
    "We provide pick-up and drop-off services at the airport or local hotels",
    "All passengers are fully insured during the sightseeing tours",
    "Meeting arrangements at the airport",
    "Complete ground transportation with an air-conditioned, modern, fuel-efficient private vehicle",
    "A driver or guide who speaks English will be available for the entire tour (please enquire about other languages)",
    "All current taxes"
  ];

  const excludes = [
    "Lunch and drinks",
    "Minneriya national park safari (entrance fees and jeep hire)",
    "Any others expense not mentioned in price includes section",
    "Gratuities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            All-Inclusive Cultural Triangle Private Tour: Sri Lanka 3-day Tour
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Embark on an unforgettable journey through Sri Lanka's legendary Cultural Triangle, packed into three exhilarating days of discovery! This whirlwind tour takes you from vibrant Colombo to ancient kingdoms, iconic rock fortresses, and misty hill country – the perfect sampler of Sri Lanka's rich heritage.
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
                    <span>Duration: 3 days</span>
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
                    <MapPin className="h-5 w-5 text-primary" />
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
                3-Day Detailed Itinerary
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
                  <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      Are you prepared for a spiritual adventure? Take advantage of our exclusive 3-day Cultural Triangle tour of Sri Lanka. 
                      Explore magnificent palaces, historic Buddhist temples, and magnificent Buddha statues. With a private guide, 
                      see four UNESCO-listed locations: Polonnaruwa, Sigiriya, Dambulla, and Kandy. Explore these hallowed locations' 
                      rich spirituality and history. Experience the enchantment of Sri Lanka's most sacred locations by scheduling your 
                      heartfelt journey right away.
                    </p>
                  </div>
                  
                  {itineraryData.map((day) => (
                    <div key={day.day} className="border-l-4 border-orange-400 pl-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          {day.day}
                        </div>
                        <div>
                          <h4 className="text-blue-900 font-semibold text-lg">{day.title}</h4>
                          <p className="text-blue-700 text-sm">{day.highlights}</p>
                        </div>
                      </div>
                      <p className="text-blue-800 text-sm mb-3">{day.description}</p>
                      {day.day < 3 && <p className="text-sm text-blue-600 italic">Stay overnight in {day.day === 1 ? 'Sigiriya' : 'Sigiriya'}</p>}
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
          <div className="space-y-6">
            {/* Pricing */}
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Package Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Package Type</TableHead>
                      <TableHead>Twin Sharing</TableHead>
                      <TableHead>Single Rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rates.map((rate, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{rate.type}</TableCell>
                        <TableCell>${rate.twin} p.p</TableCell>
                        <TableCell>${rate.single}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <div className="mt-6">
                  <BookingForm 
                    packageType="3-day-cultural-triangle" 
                    travelers={2} 
                    totalCost={399}
                    initialComments=""
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDayTourPackage;