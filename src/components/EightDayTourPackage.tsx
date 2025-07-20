import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, Users, Globe, Calendar, CheckCircle, XCircle, AlertCircle, ZoomIn, ChevronLeft, ChevronRight, Car, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import BookingForm from "./BookingForm";

// Gallery images
import gallery1 from "@/assets/sri-lanka-8-day-1.avif";
import gallery2 from "@/assets/sri-lanka-8-day-2.avif";
import gallery3 from "@/assets/sri-lanka-8-day-3.avif";
import heroImage from "@/assets/sri-lanka-8-day-hero.avif";

const EightDayTourPackage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const galleryImages = [
    heroImage, gallery1, gallery2, gallery3
  ];

  const itineraryData = [
    { 
      day: 1, 
      title: "Colombo/Anuradhapura/Sigiriya", 
      time: "Full Day",
      highlights: "Anuradhapura Historic City",
      description: "Meet and greet a representative of Seerendipity Tours, then drive to a hotel in Sigiriya. En route, visit the historic city of Anuradhapura. Stay overnight in Sigiriya."
    },
    { 
      day: 2, 
      title: "Sigiriya/Polonnaruwa/Sigiriya", 
      time: "Full Day",
      highlights: "Sigiriya Rock Fortress, Polonnaruwa, Pidurangala Temple",
      description: "Breakfast at the hotel and climb the iconic Sigiriya rock fortress; later, drive to Pollonnaruwa, an ancient city, to see many dozens of ancient religious monuments. Later, visit the ancient Pidurangala temple. Stay overnight in Sigiriya."
    },
    { 
      day: 3, 
      title: "Sigiriya/Kandy", 
      time: "Full Day",
      highlights: "Dambulla Golden Temple, Spice Garden, Hindu Temple",
      description: "After breakfast, leave for the hotel in Kandy. En route, stop at Dambulla Golden Temple, the spice and herbal garden in Matale. Later, see the beautiful Hindu temple in Matale. Check in at the hotel and enjoy. Overnight stays in Kandy"
    },
    { 
      day: 4, 
      title: "Kandy", 
      time: "Full Day",
      highlights: "Tooth Relic Temple, Royal Botanical Garden, Kandyan Cultural Show",
      description: "Today, explore the beautiful city of Kandy after breakfast. Visit the Tooth Relic Temple, the Royal Botanical Garden, Bahirawakande Temple, Downtown Kandy, the Gem Museum, the Kandyan Cultural Show, the World War II Commonwealth War Cemetery, Kandy Lake, Kandy Upper Lake, and the Kandy Museum. Overnight stays in Kandy"
    },
    { 
      day: 5, 
      title: "Kandy/Nuwara Eliya/Ella", 
      time: "Full Day",
      highlights: "Tea Factories, Ramboda Waterfall, Hill Country Train",
      description: "After breakfast, leave for the hill country resort of Nuwara Eliya. En route, stop at tea factories, tea plantations and the Ramboda waterfall. Later in the day, take a sightseeing tour of Nuwara Eliya. In the afternoon, board the Ella-bound hill country train from Nuwara Eliya and experience one of the world's most scenic train trips. Overnight stay in Ella"
    },
    { 
      day: 6, 
      title: "Ella/Yala", 
      time: "Full Day",
      highlights: "Mini-Adams Peak, Ella Rock, Nine Arch Bridge, Ravana Waterfall",
      description: "Early in the morning, climb the mini-Adams to see the picturesque sunrise. Later, visit Ella Rock and its nine arch bridges. After breakfast, leave for the hotel in Yala. Make stops at the Sita Amman Temple and the Ravan Waterfall en route. check-in and leisure. Overnight stay in Yala"
    },
    { 
      day: 7, 
      title: "Yala/West Coast", 
      time: "Full Day",
      highlights: "Yala Safari, Galle Fort, Mirissa Beach, Hikkaduwa",
      description: "Early morning leave for a Yala safari; later drive to the beach hotel on the southwest coast. En route, stop at Galle Fort, Mirissa Beach, Hikkaduwa and the Bentota River. Stay overnight in a hotel in Galle, Bentota or Kalutara"
    },
    { 
      day: 8, 
      title: "Southwest Coast/Colombo", 
      time: "Full Day",
      highlights: "Departure",
      description: "After breakfast, leave for the Colombo airport or hotel of your choice."
    }
  ];

  const itinerary = [
    { day: 1, title: 'Colombo/Anuradhapura/Sigiriya', activities: ['Meet & Greet', 'Drive to Sigiriya', 'Anuradhapura Historic City Visit', 'Check-in Sigiriya Hotel'] },
    { day: 2, title: 'Sigiriya/Polonnaruwa/Sigiriya', activities: ['Sigiriya Rock Fortress Climb', 'Polonnaruwa Ancient City', 'Pidurangala Temple Visit', 'Return to Sigiriya'] },
    { day: 3, title: 'Sigiriya/Kandy', activities: ['Dambulla Golden Temple', 'Matale Spice Garden', 'Hindu Temple Visit', 'Check-in Kandy Hotel'] },
    { day: 4, title: 'Kandy City Tour', activities: ['Tooth Relic Temple', 'Royal Botanical Garden', 'Kandyan Cultural Show', 'Kandy Lake & Museums'] },
    { day: 5, title: 'Kandy/Nuwara Eliya/Ella', activities: ['Tea Factory Tour', 'Ramboda Waterfall', 'Nuwara Eliya Sightseeing', 'Hill Country Train to Ella'] },
    { day: 6, title: 'Ella/Yala', activities: ['Mini-Adams Peak Sunrise', 'Ella Rock Hike', 'Nine Arch Bridge', 'Drive to Yala via Ravana Falls'] },
    { day: 7, title: 'Yala/West Coast', activities: ['Yala National Park Safari', 'Galle Fort Tour', 'Beach Stops - Mirissa & Hikkaduwa', 'Coastal Hotel Check-in'] },
    { day: 8, title: 'Departure', activities: ['Transfer to Colombo Airport', 'Tour Conclusion'] }
  ];

  const highlights = [
    "Discover Sri Lanka's legendary Cultural Triangle - explore the ancient wonders of Anuradhapura, Polonnaruwa and Dambulla's cave temples.",
    "Scale the iconic Sigiriya Rock Fortress for panoramic views.",
    "Encounter leopards and elephants on an exhilarating Yala safari.",
    "Complete your journey with a scenic train ride through tea-clad hills to Ella, showcasing the island's stunning diversity from mountains to golden coasts."
  ];

  const rates = [
    { type: "Standard package", twin: 750, single: 1200 },
    { type: "Comfort package", twin: 950, single: 1599 },
    { type: "Luxury package", twin: 1399, single: 1799 }
  ];

  const includes = [
    "8 days accommodation in chosen category of hotels",
    "7 Breakfasts",
    "Guided Sigiriya rock tour",
    "Exploring ancient monuments in Anuradhapura",
    "Exploring ancient monuments in Polonnaruwa",
    "Guided Dambulla temple tour",
    "Tooth relic temple tour",
    "Kandy sightseeing tour",
    "Herbal garden tour",
    "Nuwara Eliya sightseeing tour",
    "All-inclusive hill country blue train trip",
    "Ella sightseeing tour with nine Arches bridge and Mini adams peak hike",
    "Air-conditioned vehicles and private transportation",
    "Local tourist driver cum guide",
    "Fuel charges, Parking Fees and Highway Charges",
    "Hotel or Airport Pick-up & Drop-Off",
    "Breakfast and dinner (depending on option selected)"
  ];

  const excludes = [
    "Lunch and refreshments",
    "Expenses of Personal Nature",
    "Entry/Admission – Sigiriya, The Ancient Rock Fortress",
    "Entry/Admission – Anuradhapura",
    "Entry/Admission – Polonnaruwa",
    "Entry/Admission – Minneriya and Yala National Park",
    "Jeeps for safaris",
    "Entry/Admission – Dambulla Royal Cave Temple",
    "Entry/Admission – Temple of the Sacred Tooth Relic",
    "Entry/Admission – Royal Botanical Gardens",
    "Entry/Admission – Kosgoda Sea Turtle Conservation Project"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Sri Lanka Private 8-day Tour; Transport, Guide, Hotels, Food
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore ancient wonders of Sri Lanka's Cultural Triangle with your personal guide. Marvel at misty mountain vistas, 
            untouched golden beaches, and cascading waterfalls as you discover heritage gems like sacred Kandy. Cap off your 
            journey with an unforgettable wildlife safari adventure.
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
            </div>
            <div className="text-center mt-4 text-sm text-muted-foreground">
              Showing 3 images - scroll horizontally to view more
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
                    <span>Duration: 8 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Live tour guide: English, Italy, French</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Small group: Private tour participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
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

            {/* Itinerary with Tabs */}
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                <Car className="w-5 h-5 mr-2 text-orange-500" />
                8-Day Detailed Itinerary
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
                        <h4 className="text-blue-900 font-semibold text-lg">{day.title}</h4>
                      </div>
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs">{day.highlights}</Badge>
                      </div>
                      <p className="text-blue-800 text-sm">{day.description}</p>
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
            {/* Rates Table */}
            <Card>
              <CardHeader>
                <CardTitle>Tour Rates</CardTitle>
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
              </CardContent>
            </Card>

            {/* Booking Form */}
            <BookingForm 
              packageType="8-day-standard"
              travelers={2}
              totalCost={750}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EightDayTourPackage;