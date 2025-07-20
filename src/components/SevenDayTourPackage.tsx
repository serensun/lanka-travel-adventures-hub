import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  Car, 
  Clock, 
  CheckCircle, 
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import heroImage from "@/assets/sri-lanka-7-day-hero.avif";
import gallery1 from "@/assets/sri-lanka-7-day-1.avif";
import gallery2 from "@/assets/sri-lanka-7-day-2.avif";
import gallery3 from "@/assets/sri-lanka-7-day-3.avif";
import gallery4 from "@/assets/sri-lanka-7-day-4.avif";
import gallery5 from "@/assets/sri-lanka-7-day-5.avif";
import gallery6 from "@/assets/sri-lanka-7-day-6.avif";

const SevenDayTourPackage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const galleryImages = [
    { src: gallery1, alt: "Sri Lanka 7-day tour gallery 1" },
    { src: gallery2, alt: "Sri Lanka 7-day tour gallery 2" },
    { src: gallery3, alt: "Sri Lanka 7-day tour gallery 3" },
    { src: gallery4, alt: "Sri Lanka 7-day tour gallery 4" },
    { src: gallery5, alt: "Sri Lanka 7-day tour gallery 5" },
    { src: gallery6, alt: "Sri Lanka 7-day tour gallery 6" },
  ];

  const visibleImages = galleryImages.slice(0, 3);

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <img 
          src={heroImage} 
          alt="7-day Sri Lanka tour: Beaten path Sri Lanka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              7-day Sri Lanka tour: Beaten path Sri Lanka
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              From the Cultural Triangle's archaeological marvels to Yala's wildlife wonders, this tour showcases Sri Lanka's diversity. Summit Sigiriya for unforgettable views, ride the rails through tea country to Ella, and explore the island's scenic beauty from cool highlands to tropical beaches - the perfect introduction to paradise.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              Book This Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            <div className="flex flex-col items-center space-y-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-sm font-medium">Free cancellation</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Reserve now & pay later</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Clock className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Duration: 7 days</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Live tour guide</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Private tour</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Pickup included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Tour Gallery</h2>
              <div className="grid grid-cols-3 gap-4">
                {visibleImages.map((image, index) => (
                  <div key={index} className="relative cursor-pointer group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
                      onClick={() => openGallery(index)}
                    />
                    {index === 2 && galleryImages.length > 3 && (
                      <div 
                        className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg"
                        onClick={() => openGallery(index)}
                      >
                        <span className="text-white text-xl font-bold">
                          +{galleryImages.length - 3} more
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Highlights Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Tour Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "5 UNESCO World Heritage Sites",
                  "Wildlife safaris in Yala National Park", 
                  "Scenic train through tea country",
                  "Ancient cities & cultural experiences",
                  "Beach relaxation on southern coast"
                ].map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Itinerary */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Day 1: Colombo → Anuradhapura → Sigiriya</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Begin your journey with a warm welcome from your guide</li>
                    <li>Explore the ancient capital Anuradhapura (dating back to 8th century BCE)</li>
                    <li>Visit sacred Buddhist sites including Ruwanwelisaya stupa and Jethavanaramaya monastery</li>
                    <li>See the impressive 46-foot Aukana Buddha statue</li>
                    <li>Discover Mihintale, birthplace of Sri Lankan Buddhism</li>
                    <li>Overnight in Sigiriya</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Day 2: Sigiriya & Polonnaruwa Exploration</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Morning climb of UNESCO-listed Sigiriya Rock Fortress (the "Lion Rock")</li>
                    <li>Tour the medieval capital Polonnaruwa: Royal Palace complex, Gal Viharaya rock temple, Rankoth Vehera stupa</li>
                    <li>Experience authentic Sri Lankan village life and cooking</li>
                    <li>Overnight in Sigiriya</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Day 3: Dambulla → Kandy</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Visit the spectacular Dambulla Cave Temple with its golden Buddha images</li>
                    <li>Stop at Matale spice gardens</li>
                    <li>Explore Kandy's highlights: Temple of the Sacred Tooth Relic, Kandy Lake and markets</li>
                    <li>Traditional Kandyan dance performance</li>
                    <li>Overnight in Kandy</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Day 4: Hill Country & Tea Plantations</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Travel through tea country to Nuwara Eliya ("Little England")</li>
                    <li>Visit Ramboda Falls and a working tea factory</li>
                    <li>Tour Gregory Lake and Victoria Park</li>
                    <li>Scenic train ride to Ella through misty hills</li>
                    <li>Overnight in Ella</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Day 5: Ella → Yala National Park</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Sunrise hike at Little Adam's Peak</li>
                    <li>Visit Nine Arch Bridge and Ravana Falls</li>
                    <li>Afternoon wildlife safari in Yala (leopards, elephants, bears)</li>
                    <li>Overnight near Yala</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Day 6: Southern Coast Discovery</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Optional morning safari in Yala</li>
                    <li>Explore historic Galle Fort (UNESCO site)</li>
                    <li>Visit sea turtle conservation project</li>
                    <li>Madu River boat safari through mangroves</li>
                    <li>Overnight in Bentota</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Day 7: Bentota → Colombo Departure</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Relax on golden Bentota Beach</li>
                    <li>Colombo city tour (if time permits)</li>
                    <li>Transfer to airport for departure</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Included & Excluded */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">What's Included</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 6 nights of hotel accommodation in standard hotels</li>
                    <li>• 6 breakfasts</li>
                    <li>• Airport pickup and drop-off</li>
                    <li>• All sightseeing tours</li>
                    <li>• Tickets for Hill country train trip</li>
                    <li>• Ella sightseeing tour with Mini Adam's peak hike</li>
                    <li>• Transport in an air-conditioned vehicle</li>
                    <li>• Tea factory and garden visit</li>
                    <li>• Sigiriya guided rock fortress tour</li>
                    <li>• Dambulla golden temple and Tooth relic temple tours</li>
                    <li>• Friendly, experienced driver/guide</li>
                    <li>• Kandy city tour</li>
                    <li>• Galle fort guided tour</li>
                    <li>• All government taxes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">What's Excluded</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Lunch</li>
                    <li>• Dinners</li>
                    <li>• Entrance tickets (about US$ 200 per person)</li>
                    <li>• The village tour, a catamaran ride, and a cooking class</li>
                    <li>• Bentota River Safari</li>
                    <li>• Minneriya safari and Yala safari</li>
                    <li>• Gratuities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Book This Tour</h3>
                      <div className="space-y-4">
                        <div>
                          <Badge variant="secondary" className="mb-2">Standard Package</Badge>
                          <div className="text-3xl font-bold">$749 <span className="text-base text-muted-foreground">per person</span></div>
                          <div className="text-sm text-muted-foreground">Twin sharing double</div>
                          <div className="text-sm text-muted-foreground">Single rate: $999</div>
                        </div>
                        
                        <div>
                          <Badge variant="outline" className="mb-2">Comfort Package</Badge>
                          <div className="text-2xl font-bold">$875 <span className="text-base text-muted-foreground">per person</span></div>
                          <div className="text-sm text-muted-foreground">Twin sharing double</div>
                          <div className="text-sm text-muted-foreground">Single rate: $1200</div>
                        </div>

                        <div>
                          <Badge variant="default" className="mb-2">Luxury Package</Badge>
                          <div className="text-2xl font-bold">$1290 <span className="text-base text-muted-foreground">per person</span></div>
                          <div className="text-sm text-muted-foreground">Twin sharing double</div>
                          <div className="text-sm text-muted-foreground">Single rate: $1790</div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      Book Now
                    </Button>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Free cancellation up to 24 hours</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Reserve now & pay later</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">What to bring:</h4>
                      <p className="text-sm text-muted-foreground">
                        Comfortable shoes, Hat, Camera, Sunscreen, Water
                      </p>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Important Notes:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Moderate walking involved</li>
                        <li>• Children under 8 not recommended</li>
                        <li>• Weather dependent activities</li>
                        <li>• Be ready 15 minutes before pickup</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft size={36} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight size={36} />
            </button>
            
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SevenDayTourPackage;