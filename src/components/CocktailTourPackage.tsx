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
import gallery1 from "@/assets/cocktail-tour-1.avif";
import gallery2 from "@/assets/cocktail-tour-2.avif";
import gallery3 from "@/assets/cocktail-tour-3.avif";
import gallery4 from "@/assets/cocktail-tour-4.avif";
import gallery5 from "@/assets/cocktail-tour-5.avif";
import gallery6 from "@/assets/cocktail-tour-6.avif";
import gallery7 from "@/assets/cocktail-tour-7.avif";
import gallery8 from "@/assets/cocktail-tour-8.avif";

const CocktailTourPackage = () => {
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
      title: "Arrival & Ancient Wonders", 
      time: "Full Day",
      highlights: "Pinnawala Elephant Orphanage, Anuradhapura Sacred City",
      description: "Land at Bandaranaike International Airport, meet your 'Serendipity Tour' guide, and transfer to Sigiriya/Habarana. Visit the world's largest captive elephant herd at Pinnawala Elephant Orphanage. Explore Sri Lanka's ancient capital (4th century BC) and its eight sacred Buddhist sites, including Ruwanwelisaya, Thuparamaya, Abhayagiri & Jethavanaramaya."
    },
    { 
      day: 2, 
      title: "Sigiriya Rock Fortress & Dambulla Caves", 
      time: "Full Day",
      highlights: "Sigiriya Lion Rock, Dambulla Golden Cave Temple",
      description: "Climb the 200m-high UNESCO-listed rock fortress, adorned with ancient frescoes and the iconic lion's paw gateway. Discover 1st-century BC Buddhist cave shrines with vibrant murals and statues at Dambulla Golden Cave Temple."
    },
    { 
      day: 3, 
      title: "Polonnaruwa's Ruins & Minneriya Safari", 
      time: "Full Day",
      highlights: "Polonnaruwa Ancient City, Minneriya Safari",
      description: "Tour the well-preserved medieval capital, including Royal Palace of King Parakramabahu, Gal Viharaya (magnificent rock-cut Buddha statues), and Rankoth Vehera. Optional safari to spot wild elephants and deer in Minneriya National Park."
    },
    { 
      day: 4, 
      title: "Kandy's Culture & Temple of the Tooth", 
      time: "Full Day",
      highlights: "Matale Aluvihara Temple, Spice Garden, Temple of the Sacred Tooth Relic",
      description: "Learn about Sri Lanka's herbal remedies and spice trade at Matale. Visit Kandy Lake and a batik factory. Witness the evening ceremony at the UNESCO-listed Temple of the Sacred Tooth Relic. Enjoy traditional Kandyan cultural show with dances, drumming, and fire performances."
    },
    { 
      day: 5, 
      title: "Peradeniya Gardens & Colombo Temples", 
      time: "Full Day",
      highlights: "Royal Botanical Gardens, Kelaniya & Gangaramaya Temples",
      description: "Stroll among 4,000+ plant species, including giant orchids and royal palms at Peradeniya Gardens. Explore Colombo's iconic Buddhist sites by Beira Lake including Kelaniya and Gangaramaya Temples."
    },
    { 
      day: 6, 
      title: "Colombo Exploration & Departure", 
      time: "Half Day",
      highlights: "Colombo City Tour, Shopping, Airport Transfer",
      description: "Optional Colombo city tour including Galle Face Green, Viharamahadevi Park, Wolvendaal Church, BMICH & Independence Hall. Shopping at Odel, Barefoot, or Hemachandra Jewellers for souvenirs. Transfer to Airport for departure."
    }
  ];

  const itinerary = [
    { day: 1, title: 'Arrival & Ancient Wonders', activities: ['Airport Pickup', 'Pinnawala Elephant Orphanage', 'Anuradhapura Sacred City Tour', 'Ruwanwelisaya Stupa', 'Thuparamaya Dagoba'] },
    { day: 2, title: 'Sigiriya Rock Fortress & Dambulla Caves', activities: ['Sigiriya Lion Rock Climb', 'Ancient Frescoes Viewing', 'Dambulla Cave Temple', 'Buddhist Cave Shrines'] },
    { day: 3, title: 'Polonnaruwa\'s Ruins & Minneriya Safari', activities: ['Polonnaruwa Ancient City', 'Royal Palace Ruins', 'Gal Viharaya Buddha Statues', 'Minneriya Safari (Optional)'] },
    { day: 4, title: 'Kandy\'s Culture & Temple of the Tooth', activities: ['Matale Spice Garden', 'Kandy City Tour', 'Temple of the Tooth Relic', 'Kandyan Cultural Show'] },
    { day: 5, title: 'Peradeniya Gardens & Colombo Temples', activities: ['Royal Botanical Gardens', 'Kelaniya Temple', 'Gangaramaya Temple', 'Beira Lake'] },
    { day: 6, title: 'Colombo Exploration & Departure', activities: ['Galle Face Green', 'Viharamahadevi Park', 'Shopping Tour', 'Airport Transfer'] }
  ];

  const highlights = [
    "Uncover Ancient Wonders: Wander through millennia-old ruins in Polonnaruwa by bicycle, tuk-tuk, and even an oxcart ride.",
    "Sigiriya's Sky-High Majesty: Climb the legendary Lion Rock Fortress for a stunning 360-degree view of the surrounding jungles.",
    "Kandy's Cultural Heart: Tour the city and witness a mesmerizing Kandyan dance performance, complete with acrobatics and traditional music.",
    "Nature & Spice: Stroll through fragrant spice gardens, lush tea plantations, and the Royal Botanic Gardens of Peradeniya.",
    "Wildlife Encounters: Embark on a safari in Minneriya National Park to spot wild elephants, crocodiles, and more. Visit Pinnawala Elephant Orphanage and watch these gentle giants bathe in the Maha Oya River."
  ];

  const packageRates = {
    standard: { double: 690, single: 990 },
    comfort: { double: 995, single: 1300 },
    luxury: { double: 1350, single: 1900 }
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
    "5 nights of accommodation in the chosen category of hotels",
    "Daily breakfast and dinner at the hotel (5 breakfasts, starting from day 2, 5 dinners, starting from day 1)",
    "Colombo sightseeing tour, Kandy city tour",
    "Transport in an air-conditioned, private car",
    "Tour to Anuradhapura ancient city, Polonnaruwa ancient city, Kandy, Colombo",
    "Guided walking tour of Gangarama and Kelaniya temples",
    "Guided cultural tour to Sigiriya rock fortress",
    "Guided walking tour of spice/herbal garden",
    "Guided temple tours to Dambulla cave temple and temple of the tooth relic",
    "Service of an English-speaking driver/guide (please inquire about other languages)",
    "Meeting arrangements at the airport on arrival and departure",
    "All government taxes and insurance",
    "Entrance fees for all specified sites including Anuradhapura monuments, Polonnaruwa monuments, Sigiriya Rock Fortress, Kandy tooth relic temple, Dambulla cave temple, Gangarama Buddhist temple, Kelaniya temple, and spice/herbal garden",
    "Safari at Minneriya National Park"
  ];

  const excludes = [
    "Expenses of personal nature such as tipping, porters, laundry, telephones, etc.",
    "Video and camera permits",
    "Any meals not specified throughout the tour",
    "Any other services not specified"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Sri Lanka 6-days tour, Sri Lanka cocktail tour with a mix of history and culture of Sri Lanka
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover echoes of Sri Lanka's sacred history, from the towering rock fortress of Sigiriya to the ancient ruins of Anuradhapura. On this 6-day journey, uncover breathtaking blends of nature and human ingenuity as you explore vibrant cities, lush jungles, and mysterious caves.
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
                    <span>Duration: 6 days</span>
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
                6-Day Detailed Itinerary
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
                  <p className="text-sm text-muted-foreground">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Know before you go:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
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

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl">Select Package Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Package Selection */}
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(packageRates).map(([pkg, rates]) => (
                    <Button
                      key={pkg}
                      variant={selectedPackage === pkg ? "default" : "outline"}
                      className={`h-auto flex-col p-4 ${
                        selectedPackage === pkg 
                          ? `bg-gradient-to-br ${getPackageColor(pkg)} text-white border-transparent` 
                          : 'hover:bg-muted'
                      }`}
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      <div className="text-sm font-medium capitalize mb-1">{pkg}</div>
                      <div className="text-xs opacity-90">
                        Twin: ${rates.double} pp
                      </div>
                      <div className="text-xs opacity-90">
                        Single: ${rates.single}
                      </div>
                    </Button>
                  ))}
                </div>

                {/* Travelers */}
                <div className="space-y-2">
                  <Label htmlFor="travelers" className="text-sm font-medium">Number of Travelers</Label>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      disabled={travelers <= 1}
                    >
                      -
                    </Button>
                    <span className="px-4 py-2 bg-muted rounded-md min-w-[3rem] text-center">{travelers}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTravelers(travelers + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Comments */}
                <div className="space-y-2">
                  <Label htmlFor="comments" className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Special Requests or Comments
                  </Label>
                  <Textarea
                    id="comments"
                    placeholder="Any special requirements or questions..."
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="min-h-[80px]"
                  />
                </div>

                {/* Booking Summary */}
                <div className="border-t pt-4 space-y-3">
                  <h3 className="font-semibold">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Duration:
                      </span>
                      <span>6 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Travelers:
                      </span>
                      <span>{travelers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs capitalize">
                          {selectedPackage}
                        </Badge>
                        Package:
                      </span>
                      <span>
                        ${travelers === 1 
                          ? packageRates[selectedPackage].single 
                          : packageRates[selectedPackage].double} 
                        {travelers > 1 && " pp"}
                      </span>
                    </div>
                    <div className="flex justify-between font-semibold text-base pt-2 border-t">
                      <span>Total Cost:</span>
                      <span className="text-primary">${getTotalPrice()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <div className="mt-6">
              <BookingForm 
                tourPackage="Sri Lanka 6-Day Cocktail Tour"
                packageType={selectedPackage}
                travelers={travelers}
                totalCost={getTotalPrice()}
                duration="6 days"
                initialComments={comments}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailTourPackage;