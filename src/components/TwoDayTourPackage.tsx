import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, Users, Globe, Calendar, CheckCircle, XCircle, AlertCircle, ZoomIn, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Car, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import BookingForm from "./BookingForm";

// Gallery images - using existing tour gallery images
import gallery1 from "@/assets/tour-gallery-1.avif";
import gallery2 from "@/assets/tour-gallery-2.avif";
import gallery3 from "@/assets/tour-gallery-3.avif";
import gallery4 from "@/assets/tour-gallery-4.avif";
import gallery5 from "@/assets/tour-gallery-5.avif";
import gallery6 from "@/assets/tour-gallery-6.avif";
import gallery7 from "@/assets/tour-gallery-7.avif";
import gallery8 from "@/assets/tour-gallery-8.avif";

const TwoDayTourPackage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);
  
  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, 
    gallery6, gallery7, gallery8
  ];

  const itineraryData = [
    { 
      day: 1, 
      title: "DAMBULLA, SIGIRIYA, COLOMBO", 
      time: "Full Day",
      highlights: "Dambulla Cave Temple, Sigiriya Rock, Minneriya Safari",
      description: "Early in the morning, depart from your west coast accommodation and stop by Sigiriya's Dambulla Cave Temple. Visit the Golden Cave Temple where a South Indian invasion forced the king of Anuradhapura to flee in the first century BC. Climb the mighty Sigiriya Rock, a 5th-century patricide perpetrator's hiding place. End the day with an exhilarating 3-hour private Jeep safari at Minneriya National Park to see wild elephants."
    },
    { 
      day: 2, 
      title: "COLOMBO, KANDY, AND SIGIRIYA", 
      time: "Full Day",
      highlights: "Polonnaruwa, Herbal Garden, Kandy, Botanical Garden, Temple of Tooth, Tea Factory",
      description: "After breakfast, travel via Kandy to Colombo. Visit Polonnaruwa, the second capital of Sri Lanka with Buddhist structures. See the Matale spice garden with herbs and spices used in Sri Lankan medicine. Explore Kandy and visit the Temple of the Sacred Tooth of the Buddha. Tour the Botanical Garden of Peradeniya and stop by a tea mill and plantation."
    }
  ];

  const itinerary = [
    { day: 1, title: 'DAMBULLA, SIGIRIYA, COLOMBO', activities: ['Dambulla Golden Cave Temple', 'Sigiriya Rock Fortress', 'Minneriya Safari', 'Wild Elephant Viewing'] },
    { day: 2, title: 'COLOMBO, KANDY, AND SIGIRIYA', activities: ['Polonnaruwa Ancient City', 'Herbal/Spice Garden', 'Temple of Sacred Tooth', 'Botanical Garden', 'Tea Factory Tour'] }
  ];

  const highlights = [
    "Explore the historical sites at Kandy, Sigiriya, Dambulla, and Polonnaruwa.",
    "Take a 4-wheel drive vehicle safari in the national park to see untamed creatures.",
    "Take a guided trip to discover the herbs and spices that are farmed in Sri Lanka.",
    "Sip a typical Ceylon tea while touring a tea factory and garden.",
    "Enjoy the vibrant flavours of Sri Lankan cuisine at a neighborhood eatery."
  ];

  const rates = [
    { type: "Standard package", twin: 299, single: 499 },
    { type: "Comfort package", twin: 399, single: 599 },
    { type: "Luxury package", twin: 499, single: 699 }
  ];

  const includes = [
    "Pick up and drop off from the hotel located in the west coast",
    "1-night accommodation in a standard hotel",
    "1 breakfast",
    "Entire ground transportation in an air-conditioned vehicle",
    "Tour guide",
    "Tooth relic temple tour",
    "Sigiriya rock fortress guided tour",
    "Dambulla golden temple tour",
    "Polonnaruwa cultural museum",
    "Polonnaruwa ancient city guided tour",
    "Minnerioya safari",
    "Gem Museum",
    "Guided walk in the spice or herbal garden",
    "All taxes"
  ];

  const excludes = [
    "Entrance fees to Sigiriya, Dambulla Temple, Tooth relic temple Kandy and Polonnaruwa",
    "Minneriya national park safari",
    "Lunch and dinner",
    "Personal expenses such as telephone, laundry",
    "Tips and gratuities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Private 2-Day Cultural Triangle with Wildlife Tour of Sri Lanka
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Awaken Your Spirit: 2-Day Sacred Journey Through Sri Lanka's Cultural Heart. Take advantage of our exclusive 2-day Cultural Triangle tour of Sri Lanka. Explore historic Buddhist temples, regal palaces, breathtaking Buddha sculptures, and safari wildlife. Embark on a transformative pilgrimage to Sri Lanka's most revered sites. This carefully curated spiritual odyssey takes you through 4 UNESCO World Heritage sites in just two profound days, with exclusive access to ancient temples, sacred relics, and breathtaking monuments.
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
                    <span>Duration: 2 days</span>
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
              
              {/* Detailed Itinerary Description */}
              <div className="mt-8 space-y-6">
                <p className="text-blue-800 text-sm leading-relaxed">
                  Are you prepared for a spiritual adventure? Take advantage of our exclusive 2-day Cultural Triangle tour of Sri Lanka. Explore magnificent palaces, historic Buddhist temples, and magnificent Buddha statues. With a private guide, see four UNESCO-listed locations: Polonnaruwa, Sigiriya, Dambulla, and Kandy. Explore these hallowed locations' rich spirituality and history. Experience the enchantment of Sri Lanka's most sacred locations by scheduling your heartfelt journey right away.
                </p>
                
                {itineraryData.map((day) => (
                  <div key={day.day} className="bg-white/80 rounded-lg p-6 border border-blue-100">
                    <h4 className="text-blue-900 font-bold text-lg mb-2 flex items-center">
                      <span className="bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                        {day.day}
                      </span>
                      DAY {day.day.toString().padStart(2, '0')}: {day.title}
                    </h4>
                    <p className="text-blue-800 text-sm leading-relaxed">{day.description}</p>
                  </div>
                ))}
              </div>
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
            {/* Price Table */}
            <Card>
              <CardHeader>
                <CardTitle>Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Package</TableHead>
                      <TableHead>Twin Sharing</TableHead>
                      <TableHead>Single</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rates.map((rate, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{rate.type}</TableCell>
                        <TableCell>${rate.twin}</TableCell>
                        <TableCell>${rate.single}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <BookingForm 
              packageType="Private 2-Day Cultural Triangle + Wildlife Tour"
              travelers={2}
              totalCost={299}
              initialComments=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoDayTourPackage;