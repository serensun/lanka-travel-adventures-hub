import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, MapPin, Check, X, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BookingForm from "./BookingForm";

// Import gallery images
import heroImage from "@/assets/sri-lanka-6-day-hero.avif";
import galleryImage1 from "@/assets/sri-lanka-6-day-1.avif";
import galleryImage2 from "@/assets/sri-lanka-6-day-2.avif";
import galleryImage3 from "@/assets/sri-lanka-6-day-3.avif";
import galleryImage4 from "@/assets/sri-lanka-6-day-4.avif";
import galleryImage5 from "@/assets/sri-lanka-6-day-5.avif";
import galleryImage6 from "@/assets/sri-lanka-6-day-6.avif";

const SixDayTourPackage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const galleryImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
  ];

  const visibleImages = galleryImages.slice(0, 3);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const highlights = [
    "Yala National Park Safari - Spot leopards, elephants, and exotic birds in their natural habitat",
    "Cultural Triangle Exploration - Discover UNESCO-listed ancient cities and majestic monuments",
    "West Coast Beach Escape - Unwind on golden sands with turquoise waters",
    "Tea Country & Botanic Gardens - Walk through emerald tea plantations and lush tropical gardens"
  ];

  const includes = [
    "5 nights of hotel accommodation in standard hotels",
    "5 breakfasts and 5 Dinners",
    "Airport pickup and drop-off",
    "All sightseeing tours as per the tour itinerary",
    "Ella sightseeing tour with Mini Adam's peak hike, nine arch bridge visit",
    "Waterfall visit",
    "Transport in an air-conditioned vehicle",
    "Tea factory and garden visit",
    "Entrance fees to dambulla golden temple",
    "Entrance fees to sacred tooth relic temple",
    "Sigiriya guided rock fortress tour",
    "Anuradhapura and Polonnaruwa guided tour",
    "Friendly, experienced driver/guide",
    "All expenses for the train journey",
    "Kandy city tour",
    "Galle fort guided tour",
    "Ceylon tea trail",
    "Nuwara Eliya city tour",
    "Guided spice garden tour with traditional head massage",
    "All government taxes",
    "Meeting arrangements at the hotel or airport"
  ];

  const excludes = [
    "Lunch and drinks",
    "Safari entrance fees and jeep hire",
    "Entrance fees to Anuradhapura",
    "Entrance fees Polonnaruwa",
    "Entrance fees Sigiriya guided rock fortress",
    "River safari",
    "Royal botanical garden",
    "Gratuities"
  ];

  const rates = [
    {
      package: "Standard package",
      twinSharing: 599,
      singleRate: 850
    },
    {
      package: "Comfort package",
      twinSharing: 895,
      singleRate: 1155
    }
  ];

  const itinerary = [
    {
      day: "Day 1",
      title: "Colombo → Anuradhapura → Sigiriya",
      description: "Meet your guide and travel to the ancient capital Anuradhapura (8th century BCE)",
      activities: [
        "Explore sacred Buddhist sites including: Ruwanwelisaya stupa (King Dutugamunu's masterpiece), Jethavanaramaya monastery (UNESCO site), The bronze-roofed Lovamahapaya",
        "Visit Mihintale, birthplace of Sri Lankan Buddhism",
        "Overnight in Sigiriya"
      ]
    },
    {
      day: "Day 2",
      title: "Sigiriya & Polonnaruwa Exploration",
      description: "Morning climb of UNESCO-listed Sigiriya Rock Fortress (the \"Lion Rock\")",
      activities: [
        "Tour medieval Polonnaruwa's highlights: Royal Palace complex, Gal Viharaya's magnificent rock sculptures, Rankoth Vehera stupa",
        "Overnight in Sigiriya"
      ]
    },
    {
      day: "Day 3",
      title: "Dambulla → Kandy",
      description: "Discover Dambulla's golden cave temples (1st century BC)",
      activities: [
        "Visit Matale spice gardens",
        "Explore Kandy's cultural treasures:",
        "Sacred Temple of the Tooth Relic",
        "Kandy Lake and markets",
        "Traditional Kandyan dance performance",
        "Overnight in Kandy"
      ]
    },
    {
      day: "Day 4",
      title: "Hill Country & Tea Plantations",
      description: "Travel through tea country to Nuwara Eliya (\"Little England\")",
      activities: [
        "Visit Ramboda Falls and a working tea factory",
        "Scenic train ride to Ella (voted one of world's most beautiful journeys)",
        "Overnight in Ella"
      ]
    },
    {
      day: "Day 5",
      title: "Ella → Yala National Park",
      description: "Sunrise hike at Little Adam's Peak",
      activities: [
        "Visit Ravana Falls and Nine Arch Bridge",
        "Afternoon wildlife safari in Yala (leopards, elephants, bears)",
        "Overnight near Yala"
      ]
    },
    {
      day: "Day 6",
      title: "Coastal Exploration → Colombo",
      description: "Visit historic Galle Fort (UNESCO site)",
      activities: [
        "See turtle conservation project",
        "Madu River mangrove boat safari",
        "Relax at Bentota Beach",
        "Transfer to Colombo airport/hotel"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="All-Inclusive Sri Lanka 6-day Private Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              All-Inclusive Sri Lanka 6-day Private Tour
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the best of Sri Lanka in just 6 days with this perfectly balanced itinerary combining thrilling wildlife encounters, ancient cultural treasures, and tropical beach relaxation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
              <Badge variant="secondary" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                6 days
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Private tour participants
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Pickup included
              </Badge>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book Now - From $599
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <BookingForm packageType="6-day-sri-lanka-tour" travelers={1} totalCost={599} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 relative z-10">
          <Card className="bg-card shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-green-600">Free cancellation</CardTitle>
              <CardDescription>Cancel up to 24-hours in advance for a full refund</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-blue-600">Reserve now & pay later</CardTitle>
              <CardDescription>Keep your travel plans flexible — book your spot and pay nothing today.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-purple-600">Duration</CardTitle>
              <CardDescription>6 days</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-orange-600">Live tour guide</CardTitle>
              <CardDescription>English, Italy, French</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Tour Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {visibleImages.map((image, index) => (
            <div 
              key={index}
              className="relative h-64 cursor-pointer group overflow-hidden rounded-lg"
              onClick={() => {
                setSelectedImageIndex(index);
                setIsGalleryOpen(true);
              }}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
        {galleryImages.length > 3 && (
          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedImageIndex(3);
                setIsGalleryOpen(true);
              }}
            >
              View All {galleryImages.length} Photos
            </Button>
          </div>
        )}
      </div>

      {/* Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-4xl p-0">
          <div className="relative">
            <img 
              src={galleryImages[selectedImageIndex]} 
              alt={`Gallery image ${selectedImageIndex + 1}`}
              className="w-full h-[70vh] object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="highlights" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="includes">Includes</TabsTrigger>
                <TabsTrigger value="info">Info</TabsTrigger>
              </TabsList>

              <TabsContent value="highlights" className="space-y-4">
                <h3 className="text-2xl font-semibold">Tour Highlights</h3>
                <div className="grid gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="space-y-4">
                <h3 className="text-2xl font-semibold">Detailed Itinerary</h3>
                <Accordion type="single" collapsible className="w-full">
                  {itinerary.map((day, index) => (
                    <AccordionItem key={index} value={`day-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div>
                          <h4 className="font-semibold">{day.day}: {day.title}</h4>
                          <p className="text-sm text-muted-foreground">{day.description}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-4">
                          {day.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <p className="text-sm">{activity}</p>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="includes" className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">What's Included</h3>
                  <div className="grid gap-3">
                    {includes.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">What's Not Included</h3>
                  <div className="grid gap-3">
                    {excludes.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="info" className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Important Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">What to bring</h4>
                      <p className="text-sm">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Know before you go</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Wear comfortable walking shoes as there is a moderate amount of walking involved</li>
                        <li>• It is recommended to bring a hat, sunscreen, and a camera</li>
                        <li>• Smoking and consuming food and drinks are not allowed inside the historical sites</li>
                        <li>• Please be ready at your hotel lobby 15 minutes before the pickup time</li>
                        <li>• Children under 8 years are not recommended to participate in this tour</li>
                        <li>• Wheelchair and stroller access is not available</li>
                        <li>• In case of bad weather, some outdoor activities may be cancelled</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Book This Tour</CardTitle>
                <CardDescription>Choose your package</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {rates.map((rate, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{rate.package}</h4>
                    <div className="space-y-1 text-sm">
                      <p>Twin sharing: <span className="font-semibold">${rate.twinSharing} p.p</span></p>
                      <p>Single rate: <span className="font-semibold">${rate.singleRate}</span></p>
                    </div>
                  </div>
                ))}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full" size="lg">
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <BookingForm packageType="6-day-sri-lanka-tour" travelers={1} totalCost={599} />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixDayTourPackage;