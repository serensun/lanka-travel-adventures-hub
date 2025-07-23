import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Clock, Users, Globe, Calendar, CheckCircle, XCircle, AlertCircle, ZoomIn, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Car, MapPin, DollarSign, MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import BookingForm from "./BookingForm";

// Gallery images
import gallery1 from "@/assets/sri-lanka-11-day-1.avif";
import gallery2 from "@/assets/sri-lanka-11-day-hero.avif";
import gallery3 from "@/assets/sri-lanka-11-day-2.avif";
import gallery4 from "@/assets/sri-lanka-11-day-3.avif";
import gallery5 from "@/assets/sri-lanka-11-day-4.avif";
import gallery6 from "@/assets/sri-lanka-11-day-5.avif";
import gallery7 from "@/assets/sri-lanka-11-day-6.avif";
import gallery8 from "@/assets/sri-lanka-11-day-7.avif";

const ElevenDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);
  
  
  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, 
    gallery6, gallery7, gallery8
  ];

  const itineraryData = [
    { 
      day: 1, 
      title: "Arrival in Negombo", 
      time: "Full Day",
      highlights: "Airport transfer, Beach relaxation, Fish market",
      description: "Welcome to Sri Lanka! Your driver will greet you at the airport and transfer you to your beachside hotel in Negombo, a charming fishing town near the capital. Relax & Explore: Unwind at your hotel or take a self-guided stroll along the sandy shores. Watch local fishermen bring in their catch, rent a bike to explore the area, or enjoy fresh seafood at a beachside café."
    },
    { 
      day: 2, 
      title: "Negombo → Sigiriya (via Dambulla)", 
      time: "Full Day",
      highlights: "Fish market, Dambulla Cave Temple, Spice garden",
      description: "Morning: Visit Negombo's lively fish market before departing for Sigiriya. En Route Stop: Explore the Dambulla Cave Temple (UNESCO-listed), a stunning complex of Buddhist cave shrines. Spice Garden Visit: Learn about Sri Lanka's famous spices like cinnamon, cardamom, and pepper."
    },
    { 
      day: 3, 
      title: "Sigiriya & Polonnaruwa Exploration", 
      time: "Full Day",
      highlights: "Sigiriya Rock Fortress, Polonnaruwa ruins, Village experience",
      description: "Morning Adventure: Climb the iconic Sigiriya Rock Fortress for breathtaking 360° views. Ancient City Tour: Discover the ruins of Polonnaruwa (UNESCO), including its grand palaces, temples, and Buddha statues. Village Experience: Enjoy a bullock cart ride, tuk-tuk tour, and a Sri Lankan cooking class with a local family."
    },
    { 
      day: 4, 
      title: "Sigiriya → Kandy (via Matale)", 
      time: "Full Day",
      highlights: "Temple of the Tooth, Cultural dance, Kandy Lake",
      description: "Scenic Drive: Stop at Matale's Muttumari Amman Temple and a spice garden to see Ayurvedic herbs. Kandy Highlights: Visit the sacred Temple of the Tooth Relic. Watch a vibrant Kandyan cultural dance show. Stroll around Kandy Lake and explore the city's markets."
    },
    { 
      day: 5, 
      title: "Kandy → Ella (By Train)", 
      time: "Full Day",
      highlights: "Scenic train journey, Tea plantations, Ella exploration",
      description: "Iconic Train Journey: Enjoy one of the world's most scenic rail rides through tea plantations and misty hills. Afternoon in Ella: Check into your hotel and explore at leisure—visit a tea factory, hike to viewpoints, or relax at a café."
    },
    { 
      day: 6, 
      title: "Ella Exploration", 
      time: "Full Day",
      highlights: "Nine Arch Bridge, Mini Adam's Peak, Ceylon tea",
      description: "Morning Trek: Hike to Ella Gap, Mini Adam's Peak, and the stunning Nine Arch Bridge. Local Interaction: Sip Ceylon tea and enjoy a home-cooked lunch in a mountain village. Free Afternoon: Relax or explore more of Ella's charming landscapes."
    },
    { 
      day: 7, 
      title: "Ella → Yala (Wildlife Safari)", 
      time: "Full Day",
      highlights: "Yala National Park, Wildlife safari, Leopards & elephants",
      description: "Drive to Yala: Head to Tissamaharama, the gateway to Yala National Park. Afternoon Safari: Embark on a thrilling jeep safari to spot leopards, elephants, crocodiles, and exotic birds. Alternative Option: If Yala is overcrowded, visit Udawalawe National Park (known for elephant herds)."
    },
    { 
      day: 8, 
      title: "Yala → Unawatuna (Beach Time)", 
      time: "Full Day",
      highlights: "Beach relaxation, Mirissa whale watching",
      description: "Coastal Escape: Travel to Unawatuna, a laid-back beach paradise. Free Time: Relax on golden sands, explore nearby jungle beaches, or enjoy fresh seafood. Optional: Sunset whale-watching tour in Mirissa (seasonal)."
    },
    { 
      day: 9, 
      title: "Unawatuna & Galle Exploration", 
      time: "Full Day",
      highlights: "Galle Dutch Fort, Beach activities, Colonial history",
      description: "Beach Day: Soak up the sun or try snorkeling. Cultural Detour: Visit the Galle Dutch Fort (UNESCO), a blend of colonial history and coastal charm. Optional: Bike tour through Galle's hidden streets."
    },
    { 
      day: 10, 
      title: "Unawatuna → Colombo (By Train)", 
      time: "Full Day",
      highlights: "Coastal train ride, Colombo city tour, Farewell dinner",
      description: "Scenic Coastal Ride: Take a train to Colombo, Sri Lanka's vibrant capital. City Tour: Explore markets, colonial landmarks, and bustling streets. Farewell Dinner: Enjoy a final group meal (optional)."
    },
    { 
      day: 11, 
      title: "Departure from Colombo", 
      time: "Half Day",
      highlights: "Airport transfer, Departure",
      description: "Airport Transfer: Bid farewell to Sri Lanka with unforgettable memories!"
    }
  ];

  const itinerary = [
    { day: 1, title: 'Arrival in Negombo', activities: ['Airport transfer', 'Beach relaxation', 'Fish market visit', 'Local exploration'] },
    { day: 2, title: 'Negombo → Sigiriya (via Dambulla)', activities: ['Fish market tour', 'Dambulla Cave Temple', 'Spice garden visit', 'Transfer to Sigiriya'] },
    { day: 3, title: 'Sigiriya & Polonnaruwa Exploration', activities: ['Sigiriya Rock Fortress climb', 'Polonnaruwa ancient city tour', 'Village experience', 'Cooking class'] },
    { day: 4, title: 'Sigiriya → Kandy (via Matale)', activities: ['Temple visit in Matale', 'Temple of the Tooth Relic', 'Cultural dance show', 'Kandy Lake walk'] },
    { day: 5, title: 'Kandy → Ella (By Train)', activities: ['Scenic train journey', 'Tea plantation visit', 'Ella exploration', 'Tea factory tour'] },
    { day: 6, title: 'Ella Exploration', activities: ['Nine Arch Bridge visit', 'Mini Adam\'s Peak hike', 'Ceylon tea tasting', 'Village lunch'] },
    { day: 7, title: 'Ella → Yala (Wildlife Safari)', activities: ['Transfer to Yala', 'Wildlife safari', 'Leopard & elephant spotting', 'Evening at resort'] },
    { day: 8, title: 'Yala → Unawatuna (Beach Time)', activities: ['Transfer to coast', 'Beach relaxation', 'Optional whale watching', 'Seafood dining'] },
    { day: 9, title: 'Unawatuna & Galle Exploration', activities: ['Beach activities', 'Galle Dutch Fort tour', 'Snorkeling', 'Colonial architecture'] },
    { day: 10, title: 'Unawatuna → Colombo (By Train)', activities: ['Coastal train ride', 'Colombo city tour', 'Shopping', 'Farewell dinner'] },
    { day: 11, title: 'Departure from Colombo', activities: ['Airport transfer', 'Departure'] }
  ];

  const highlights = [
    "Discover Ancient Wonders: Explore Sri Lanka's Cultural Triangle, home to millennia-old temples, palaces, and UNESCO-listed ruins.",
    "Scenic Train Adventure: Experience a breathtaking rail journey through misty mountains and lush tea plantations.",
    "Nature & Leisure Strolls: Wander through Gregory Lake, Victoria Park, and the Royal Botanic Gardens in Peradeniya.",
    "Southern Coast Beaches: Relax on the golden sands of Hikkaduwa and other stunning beaches from your seaside resort.",
    "Wildlife Safari in Yala: Spot leopards, elephants, and crocodiles on an exciting jeep safari through Yala National Park.",
    "West Coast Relaxation: Unwind on palm-fringed beaches along Sri Lanka's picturesque west coast."
  ];

  const packageRates = {
    standard: { double: 1075, single: 1550 },
    comfort: { double: 1390, single: 1985 },
    luxury: { double: 1699, single: 2299 }
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
    "10 nights of accommodation in standard tourist hotels",
    "Meal plan on a H/B basis (daily breakfast and dinner included at hotel)",
    "Ceylon tea trail",
    "A guided walking tour of Nuwara Eliya",
    "Tour of Sigiriya rock fortress, tour to Dambulla Golden Temple, tour of temple of the tooth relic, Kandy, and the museum",
    "Walking tour of Peradeniya botanical garden (1 hour)",
    "Negombo city tour (car) with visits to the fish market and other monuments",
    "Colombo city tour (car) with visits to monuments",
    "Kandy city tour (car) with stops at monuments",
    "Guided trekking and hiking in Ella with 9-arch bridge and mini adams peak",
    "Tour in the Galle Fort with visits to monuments",
    "A guided walking tour at Spice/Herbal Garden with a nature guide",
    "Tea plantation and factory",
    "The blue train journey in the hill country (seats are not guaranteed during the peak season)",
    "Entire ground transportation in an air-conditioned, luxury, private vehicle",
    "Pickup and drop-off at the airport or local hotels",
    "All sightseeing tours as per the tour itinerary",
    "Service of an English-speaking chauffeur/guide for the entire tour (please inquire about other languages)",
    "All current taxes"
  ];

  const excludes = [
    "Sri Lanka visa-related fees",
    "Any other expense not mentioned in the Price Includes section",
    "Whale-watching trip (US$ 70 per person)",
    "Flight tickets",
    "Gratuities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Sri Lanka 11-days tour, Insight Into Sri Lanka
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover Sri Lanka (11-day tour) offers a leisurely journey through the island's top attractions, 
            including ancient sites in the Cultural Triangle, scenic hill country, wildlife reserves in the south, 
            beautiful west coast beaches, and much more.
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
                    <span>Duration: 11 days</span>
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
                11-Day Detailed Itinerary
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
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Package Selection */}
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Select Package Type</h3>
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(packageRates).map(([pkg, rates]) => (
                  <button
                    key={pkg}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`p-4 rounded-lg text-left transition-all transform hover:scale-105 ${
                      selectedPackage === pkg
                        ? `bg-gradient-to-r ${getPackageColor(pkg)} text-white shadow-lg`
                        : 'bg-white/70 text-blue-800 hover:bg-white/90 border border-blue-200'
                    }`}
                  >
                    <div className="font-semibold capitalize mb-2">{pkg} Package</div>
                    <div className="text-sm">
                      <div>${rates.double} p.p (twin sharing)</div>
                      <div>${rates.single} (single rate)</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Travelers */}
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Number of Travelers (1-10)
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label htmlFor="travelers" className="text-blue-900 font-medium">
                    Travelers:
                  </label>
                  <input
                    id="travelers"
                    type="number"
                    min="1"
                    max="10"
                    value={travelers}
                    onChange={(e) => setTravelers(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                    className="bg-white/70 text-blue-900 placeholder-blue-500 border border-blue-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 text-center"
                  />
                </div>
                <div className="text-blue-700 text-sm">
                  {travelers === 1 ? (
                    <p>Single traveler rate applies</p>
                  ) : (
                    <p>Twin sharing rate: ${packageRates[selectedPackage].double} per person</p>
                  )}
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Comments & Special Requests
              </h3>
              <div className="space-y-4">
                <Label htmlFor="comments" className="text-blue-900 font-medium">
                  Tell us about your preferences, dietary requirements, or any special requests:
                </Label>
                <Textarea
                  id="comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="e.g., vegetarian meals, accessibility needs, celebration occasions, preferred activities..."
                  rows={4}
                  className="bg-white/70 text-blue-900 placeholder-blue-500 border border-blue-300 focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <p className="text-blue-700 text-sm">
                  This information will help us customize your tour experience to better suit your needs.
                </p>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6 h-fit border border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Car className="w-5 h-5 mr-2" />
                Book Your Adventure
              </h3>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-700">Duration</span>
                    <span className="font-semibold flex items-center text-blue-900">
                      <Calendar className="w-4 h-4 mr-1" />
                      11 days
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-700">Travelers</span>
                    <span className="font-semibold text-blue-900">{travelers} person{travelers > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">Package</span>
                    <span className="font-semibold capitalize text-blue-900">{selectedPackage}</span>
                  </div>
                </div>

                <div className="border-t border-blue-200 pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span className="text-gray-800">Total Cost</span>
                    <span className="text-green-600">${getTotalPrice().toLocaleString()}</span>
                  </div>
                  <p className="text-blue-600 text-sm mt-1">
                    {travelers === 1 ? 'Single rate' : `$${packageRates[selectedPackage].double} per person`}
                  </p>
                </div>

                <BookingForm 
                  packageType={`11-day-sri-lanka-insight-${selectedPackage}`}
                  travelers={travelers}
                  totalCost={getTotalPrice()}
                  initialComments={comments}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevenDayTourPackage;