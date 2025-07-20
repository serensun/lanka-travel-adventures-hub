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
import gallery1 from "@/assets/new-tour-gallery-1.avif";
import gallery2 from "@/assets/new-tour-gallery-2.avif";
import gallery3 from "@/assets/new-tour-gallery-3.avif";
import gallery4 from "@/assets/new-tour-gallery-4.avif";
import gallery5 from "@/assets/new-tour-gallery-5.avif";
import gallery6 from "@/assets/new-tour-gallery-6.avif";
import gallery7 from "@/assets/new-tour-gallery-7.avif";
import gallery8 from "@/assets/new-tour-gallery-8.avif";
import gallery9 from "@/assets/new-tour-gallery-9.avif";
import gallery10 from "@/assets/new-tour-gallery-10.avif";
import gallery11 from "@/assets/new-tour-gallery-11.avif";
import gallery12 from "@/assets/new-tour-gallery-12.avif";

const NewFourDayTourPackage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);
  
  
  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, 
    gallery6, gallery7, gallery8, gallery9, gallery10,
    gallery11, gallery12
  ];

  const itineraryData = [
    { 
      day: 1, 
      title: "Ancient Marvels & Wild Encounters", 
      time: "Full Day",
      highlights: "Dambulla Cave Temple, Polonnaruwa, Minneriya National Park",
      description: "Begin in Colombo, then journey to the Dambulla Cave Temple, a stunning complex of Buddhist art and history. Step back in time at Polonnaruwa, exploring its grand ruins, temples, and royal gardens. Witness the 'Great Elephant Gathering' at Minneriya National Park, where herds roam freely."
    },
    { 
      day: 2, 
      title: "Sigiriya's Majesty & Kandy's Spirit", 
      time: "Full Day",
      highlights: "Sigiriya Rock Fortress, Temple of the Tooth, Peradeniya Gardens",
      description: "Conquer the legendary Sigiriya Rock Fortress—climb 1,200 steps for panoramic views! Discover Kandy, home to the sacred Temple of the Tooth Relic, a spiritual treasure. Stroll around Kandy Lake and lose yourself in the exotic beauty of Peradeniya Botanical Gardens."
    },
    { 
      day: 3, 
      title: "Waterfalls, Tea Trails & Hill Country Magic", 
      time: "Full Day",
      highlights: "Ramboda Falls, Tea Plantation, Nuwara Eliya, Train to Ella",
      description: "Chase waterfalls at Ramboda Falls and soak in views from Ambuluwawa Tower. Tour a tea plantation, sip world-famous Ceylon tea, and learn how it's made. Explore Nuwara Eliya, 'Little England,' with its colonial charm and misty landscapes. Hop on a scenic train ride to Ella, passing emerald hills and lush valleys. Visit the iconic Nine Arches Bridge and cool off at Ravana Falls."
    },
    { 
      day: 4, 
      title: "Safari Thrills & Beach Bliss", 
      time: "Full Day",
      highlights: "Yala National Park Safari, Galle Fort, Unawatuna Beach",
      description: "Embark on a wildlife safari in Yala National Park, spotting leopards, elephants, and more! Wander through Galle Fort, a UNESCO-listed Dutch-colonial gem. Unwind on Unawatuna Beach—golden sands, turquoise waves, and pure relaxation. Snorkel in Hikkaduwa among vibrant coral reefs (optional)."
    }
  ];

  const itinerary = [
    { day: 1, title: 'Ancient Marvels & Wild Encounters', activities: ['Dambulla Cave Temple', 'Polonnaruwa Archaeological Site', 'Minneriya National Park Safari', 'Elephant Gathering Experience'] },
    { day: 2, title: 'Sigiriya\'s Majesty & Kandy\'s Spirit', activities: ['Sigiriya Rock Fortress Climb', 'Temple of the Tooth Relic', 'Kandy Lake Walk', 'Peradeniya Botanical Gardens'] },
    { day: 3, title: 'Waterfalls, Tea Trails & Hill Country Magic', activities: ['Ramboda Falls Visit', 'Tea Plantation Tour', 'Nuwara Eliya City Tour', 'Scenic Train to Ella', 'Nine Arch Bridge', 'Ravana Falls'] },
    { day: 4, title: 'Safari Thrills & Beach Bliss', activities: ['Yala National Park Safari', 'Galle Fort Exploration', 'Unawatuna Beach', 'Optional Hikkaduwa Snorkeling'] }
  ];

  const highlights = [
    "Discover the legendary Sigiriya Rock Fortress and hike to its summit for breathtaking views.",
    "Explore the sacred Temple of the Tooth Relic and wander through the lush Peradeniya Botanical Gardens.",
    "Spot majestic leopards and elephants on an exciting Yala National Park safari.",
    "Enjoy a scenic train ride from Nanu Oya to Ella and marvel at the iconic Nine Arch Bridge"
  ];

  const rates = [
    { type: "Standard package", twin: 399, single: 699 },
    { type: "Comfort package", twin: 599, single: 799 },
    { type: "Luxury package", twin: 699, single: 999 }
  ];

  const includes = [
    "Hotel pickup and drop-off",
    "Air-conditioned transportation", 
    "3-nights of accommodation in standard hotels",
    "3 breakfasts",
    "3 Dinners",
    "Tea factory visit",
    "Waterfall visit",
    "All inclusive hill country train trip",
    "Fuel surcharge",
    "Airport/departure tax",
    "Parking fees"
  ];

  const excludes = [
    "Meals and beverages (unless specified)",
    "Gratuities (optional)",
    "Personal expenses",
    "Entrance tickets to attractions (around US$ 200 P.P)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Sri Lanka 4-Day Private Tour With 18 Amazing Places
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Dreaming of a quick escape? Sri Lanka's Best in Just 4 Days! From ancient wonders to wild safaris, 
            misty hills to golden beaches—experience it all in one unforgettable trip! Experience an exhilarating 
            4-day journey across Sri Lanka, exploring 18 of its most breathtaking locations. Discover ancient ruins, 
            untouched beaches, lush highlands, and thriving national parks teeming with wildlife.
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
                    <span>Duration: 4 days</span>
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
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200 mb-8">
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
                    <li>• We do try our best to reserve seats for you in the hill country train, but there are instances that we may not be able to get a seat for you due to high demand; however, we purchase the second-class tickets for you.</li>
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
                  {rates.map((rate, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">{rate.type}</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span>Twin sharing:</span>
                          <Badge variant="outline">${rate.twin} p.p</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Single rate:</span>
                          <Badge variant="outline">${rate.single}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <BookingForm 
              packageType="Sri Lanka 4-Day Private Tour With 18 Amazing Places"
              travelers={2}
              totalCost={399}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFourDayTourPackage;