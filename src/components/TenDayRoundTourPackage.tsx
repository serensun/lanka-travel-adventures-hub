import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MapPin, Calendar, Users, Shield, CreditCard, Clock, Languages, Star, CheckCircle, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import BookingForm from './BookingForm';

// Import images
import heroImage from '@/assets/10-day-round-tour-hero.avif';
import gallery1 from '@/assets/10-day-round-tour-1.avif';
import gallery2 from '@/assets/10-day-round-tour-2.avif';
import gallery3 from '@/assets/10-day-round-tour-3.avif';
import gallery4 from '@/assets/10-day-round-tour-4.avif';
import gallery5 from '@/assets/10-day-round-tour-5.avif';
import gallery6 from '@/assets/10-day-round-tour-6.avif';
import gallery7 from '@/assets/10-day-round-tour-7.avif';
import gallery8 from '@/assets/10-day-round-tour-8.avif';
import gallery9 from '@/assets/10-day-round-tour-9.avif';

const packageRates = {
  standard: { twinSharing: 790, single: 1495 },
  comfort: { twinSharing: 1190, single: 1795 }
};

const galleryImages = [
  { src: gallery1, alt: "Sri Lanka 10-day tour gallery 1", caption: "Cultural Triangle exploration" },
  { src: gallery2, alt: "Sri Lanka 10-day tour gallery 2", caption: "Ancient temples and ruins" },
  { src: gallery3, alt: "Sri Lanka 10-day tour gallery 3", caption: "Tea plantation scenic views" },
  { src: gallery4, alt: "Sri Lanka 10-day tour gallery 4", caption: "Wildlife safari adventure" },
  { src: gallery5, alt: "Sri Lanka 10-day tour gallery 5", caption: "Hill country train journey" },
  { src: gallery6, alt: "Sri Lanka 10-day tour gallery 6", caption: "Beach relaxation" },
  { src: gallery7, alt: "Sri Lanka 10-day tour gallery 7", caption: "Coastal exploration" },
  { src: gallery8, alt: "Sri Lanka 10-day tour gallery 8", caption: "Historical sites" },
  { src: gallery9, alt: "Sri Lanka 10-day tour gallery 9", caption: "Natural landscapes" }
];

const highlights = [
  "Explore Ancient Wonders: Discover the UNESCO-listed treasures of Sri Lanka's Cultural Triangle, where centuries-old temples, palaces, and sacred sites tell stories of a glorious past.",
  "Journey Through Paradise: Embark on one of the world's most scenic train rides, winding through misty tea plantations and lush green hills in the heart of the island.",
  "Wildlife Adventures: Set out on an exhilarating jeep safari to spot majestic leopards, elephants, and other exotic wildlife in their natural habitats.",
  "Beachside Bliss: Unwind on sun-kissed, golden beaches with crystal-clear waters—the perfect finale to your Sri Lankan adventure."
];

const inclusions = [
  "10-day (9-night) accommodation in standard tourist hotels",
  "9 breakfasts",
  "9 dinners",
  "Anuradhapura temple tour",
  "Polonnaruwa ancient city tour",
  "Entrance fees to Dambulla Temple",
  "Entrance fees to Kandy temple",
  "Minneriya National Park Safari",
  "Yala Safari",
  "Kandy temple tour with the ceremony",
  "Guided Sigiriay rock fort hike",
  "Ramboda and Ravana waterfalls",
  "Nuwara Eliya sightseeing tour with gregory Lake",
  "Galle fort tour",
  "Ella sightseeing tour (guided Mini Adams peak hike, nine arch bridge tour)",
  "Spice garden and herbal garden tour",
  "Entire ground transportation as per the tour itinerary in private vehicle",
  "Air-conditioned vehicle",
  "GST/VAT/Service Charges",
  "Water Bottle on Arrival",
  "Kandy City tour & Sightseeing",
  "All-inclusive hill country train trip",
  "Tea plantation tour with factory visit",
  "1 serving of natural King Coconut",
  "Meet-and-greet services with assistance at the airport",
  "Chauffeur Meals & Accommodation"
];

const exclusions = [
  "Lunch",
  "Entrance fees to Sigiriya Rock, Anuradhapura, Polonaruwa, Minneriya National Park, Peradeniya Botanical Garden, and Yala National Park.",
  "Other Exclusions (Flight Tickets/Visa Charges)",
  "Any expenses of personal nature like laundry charges, tips, etc.",
  "Early check-in & late check-out",
  "4 x 4 Jeep for Safaris",
  "Dinner at Hotel in Ella",
  "Rural village tour with cooking class and delicious local meal",
  "Anything not mentioned under inclusions above"
];

const itineraryData = [
  {
    day: "Day 1",
    title: "Colombo to Sigiriya via Anuradhapura",
    description: "Your journey begins with a warm welcome by your English-speaking driver. Travel from Colombo to Sigiriya, stopping to explore the ancient ruins of Anuradhapura, a UNESCO World Heritage Site showcasing Sri Lanka's early civilization. Spend your first night in Sigiriya."
  },
  {
    day: "Day 2",
    title: "Sigiriya Rock Fortress & Wildlife Safari",
    description: "Start early to climb the magnificent Sigiriya Rock Fortress, admiring its ancient frescoes and panoramic views. In the afternoon, embark on an exciting 4x4 safari at Minneriya, Kaudulla, or Hurulu Eco Park (chosen based on elephant movements) to witness these majestic creatures in their natural habitat. Overnight in Sigiriya."
  },
  {
    day: "Day 3",
    title: "Polonnaruwa Ancient City & Village Life",
    description: "Discover the medieval capital of Polonnaruwa, another UNESCO site featuring well-preserved ruins. Later, experience authentic Sri Lankan village life in Habarana, including a possible bullock cart ride or canoe trip. Return to Sigiriya for the night."
  },
  {
    day: "Day 4",
    title: "Dambulla Caves to Kandy",
    description: "Journey to Kandy, stopping at the golden Dambulla Cave Temples and a spice garden to learn about Sri Lanka's famous spices. Visit the unique Nalanda Gedige temple and a Hindu Kovil before arriving in Kandy for overnight."
  },
  {
    day: "Day 5",
    title: "Exploring Kandy",
    description: "Discover Kandy's highlights: the Royal Botanical Garden with its orchid collection, the Gem Museum, serene Kandy Lake, and the sacred Temple of the Tooth Relic. Complete your day with a vibrant Kandyan cultural show featuring traditional dance and fire-walking."
  },
  {
    day: "Day 6",
    title: "Tea Country & Nuwara Eliya",
    description: "Travel through tea plantations to \"Little England,\" stopping at Ramboda Falls and a tea factory to learn about Ceylon tea production. Explore Nuwara Eliya's colonial charm, including Gregory Lake and Victoria Park. Overnight in the hill station."
  },
  {
    day: "Day 7",
    title: "Scenic Train to Ella",
    description: "After morning sightseeing, take the famous train ride (subject to availability) through breathtaking landscapes to Ella. Hike Little Adam's Peak for spectacular sunset views. Note: Train tickets are limited during peak season (Dec-Apr)."
  },
  {
    day: "Day 8",
    title: "Ella to Yala Wildlife Adventure",
    description: "Visit Ravana Falls and the ancient Buduruwagala rock carvings en route to Tissamaharama. Choose an afternoon safari at Yala (best for leopards) or Udawalawe (known for elephants). Overnight near the national park."
  },
  {
    day: "Day 9",
    title: "South Coast Relaxation",
    description: "Transfer to your beach resort on the southwest coast. Enjoy well-deserved relaxation by the Indian Ocean, with options for water sports or Ayurveda spa treatments."
  },
  {
    day: "Day 10",
    title: "Coastal Exploration & Departure",
    description: "Travel along the scenic coast to Colombo, stopping at historic Galle Fort and beautiful Bentota Beach. Conclude with a Colombo city tour before airport transfer, completing your comprehensive Sri Lankan experience."
  }
];

const TenDayRoundTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getTotalPrice = (): number => {
    const rates = packageRates[selectedPackage as keyof typeof packageRates];
    return travelers === 1 ? rates.single : rates.twinSharing * travelers;
  };

  const getPackageColor = (pkg: string): string => {
    switch (pkg) {
      case 'standard':
        return 'from-blue-500 to-blue-700';
      case 'comfort':
        return 'from-purple-500 to-purple-700';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

  const openImageDialog = (index: number) => {
    setSelectedImageIndex(index);
    setIsDialogOpen(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setSelectedImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sri Lanka Private 10-Day Round Tour Car, Guide, Hotels, Food
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Experience the island's breathtaking diversity as you embark on a picturesque train ride through emerald tea plantations in the hill country, spot magnificent leopards and elephants during an exciting jeep safari in Yala National Park, then unwind on palm-fringed golden beaches where turquoise waters meet powdery soft sand. This unforgettable journey showcases Sri Lanka's perfect blend of history, nature, and relaxation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="flex items-center gap-2 text-sm px-3 py-2">
                <Shield className="w-4 h-4" />
                Free cancellation
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 text-sm px-3 py-2">
                <CreditCard className="w-4 h-4" />
                Reserve now & pay later
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 text-sm px-3 py-2">
                <Clock className="w-4 h-4" />
                10 days
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 text-sm px-3 py-2">
                <Users className="w-4 h-4" />
                Private tour
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery Section */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Tour Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    {galleryImages.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card className="cursor-pointer overflow-hidden group" onClick={() => openImageDialog(index)}>
                            <div className="relative aspect-video">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                {/* Image Dialog */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                    <div className="relative w-full h-full flex items-center justify-center bg-black">
                      <img
                        src={galleryImages[selectedImageIndex]?.src}
                        alt={galleryImages[selectedImageIndex]?.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                        onClick={() => navigateImage('prev')}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                        onClick={() => navigateImage('next')}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </Button>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                        <p className="text-sm opacity-80">
                          {selectedImageIndex + 1} of {galleryImages.length}
                        </p>
                        <p className="text-lg font-medium">
                          {galleryImages[selectedImageIndex]?.caption}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Tour Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Tour Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tour Details */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Detailed Itinerary</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green-600 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        What's Included
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {inclusions.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <XCircle className="w-5 h-5" />
                        What's Not Included
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exclusions.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Important Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">What to bring</h4>
                      <p className="text-muted-foreground">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Know before you go</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Wear comfortable walking shoes as there is a moderate amount of walking involved</li>
                        <li>• It is recommended to bring a hat, sunscreen, and a camera</li>
                        <li>• Smoking and consuming food and drinks are not allowed inside the historical sites</li>
                        <li>• Please be ready at your hotel lobby 15 minutes before the pickup time</li>
                        <li>• Children under 8 years are not recommended to participate in this tour</li>
                        <li>• Wheelchair and stroller access is not available</li>
                        <li>• In case of bad weather, some outdoor activities may be cancel</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="itinerary" className="space-y-4">
                {itineraryData.map((day, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-primary">{day.day}: {day.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{day.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Book This Tour</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Package Selection */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Package Type</label>
                    <div className="space-y-2">
                      {Object.entries(packageRates).map(([pkg, rates]) => (
                        <Button
                          key={pkg}
                          variant={selectedPackage === pkg ? "default" : "outline"}
                          className={`w-full justify-between p-4 h-auto ${
                            selectedPackage === pkg 
                              ? `bg-gradient-to-r ${getPackageColor(pkg)} text-white` 
                              : ''
                          }`}
                          onClick={() => setSelectedPackage(pkg)}
                        >
                          <div className="text-left">
                            <div className="font-medium capitalize">{pkg} Package</div>
                            <div className="text-sm opacity-80">
                              ${rates.twinSharing} per person (twin sharing)
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Travelers */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Number of Travelers</label>
                    <Input
                      type="number"
                      min="1"
                      max="10"
                      value={travelers}
                      onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                      className="w-full"
                    />
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Special Requests</label>
                    <Textarea
                      placeholder="Any special requirements or comments..."
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  {/* Booking Summary */}
                  <div className="border-t pt-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>10 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Travelers:</span>
                        <span>{travelers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Package:</span>
                        <span className="capitalize">{selectedPackage}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total:</span>
                        <span>${getTotalPrice()}</span>
                      </div>
                    </div>
                  </div>

                  <BookingForm
                    packageType="Sri Lanka Private 10-Day Round Tour Car, Guide, Hotels, Food"
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

export default TenDayRoundTourPackage;