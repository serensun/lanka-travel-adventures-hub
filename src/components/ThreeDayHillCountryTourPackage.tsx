import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, MapPin, Calendar, Star, CheckCircle, XCircle, Plus, Minus, ChevronLeft, ChevronRight, X } from 'lucide-react';
import EnhancedGallery from '@/components/ui/enhanced-gallery';
import BookingForm from '@/components/BookingForm';

// Import images
import heroImage from '@/assets/sri-lanka-3-day-new-hero.avif';
import gallery1 from '@/assets/sri-lanka-3-day-new-1.avif';
import gallery2 from '@/assets/sri-lanka-3-day-new-2.avif';
import gallery3 from '@/assets/sri-lanka-3-day-new-3.avif';
import gallery4 from '@/assets/sri-lanka-3-day-new-4.avif';
import gallery5 from '@/assets/sri-lanka-3-day-new-5.avif';
import gallery6 from '@/assets/sri-lanka-3-day-new-6.avif';
import gallery7 from '@/assets/sri-lanka-3-day-new-7.avif';

const ThreeDayHillCountryTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const packageRates = {
    standard: { twin: 390, single: 595 },
    comfort: { twin: 590, single: 795 }
  };

  const galleryImages = [
    { src: heroImage, alt: "Sri Lanka Hill Country scenic landscape" },
    { src: gallery1, alt: "Tea plantations and colonial architecture" },
    { src: gallery2, alt: "Traditional Sri Lankan cultural sites" },
    { src: gallery3, alt: "Hill country scenic views" },
    { src: gallery4, alt: "Colonial heritage buildings" },
    { src: gallery5, alt: "Mountain landscapes and tea estates" },
    { src: gallery6, alt: "Cultural landmarks and temples" },
    { src: gallery7, alt: "Natural beauty of hill country" }
  ];

  const highlights = [
    "Discover Nuwara Eliya, Sri Lanka's \"Little England,\" with its colonial charm and cool climate.",
    "Meet gentle giants at the Pinnawala Elephant Orphanage and observe them in their natural habitat.",
    "Step into history at Kandy's Temple of the Sacred Tooth Relic, a revered UNESCO-listed site.",
    "Marvel at the Nine Arch Bridge, an iconic colonial-era masterpiece nestled in lush greenery.",
    "Journey through breathtaking landscapes on a scenic train ride from Ella to Nanu Oya."
  ];

  const inclusions = [
    "2 nights accommodation in standard hotels",
    "Daily breakfast and dinner",
    "Visit to Pinnawala Elephant Orphanage",
    "Visit to Temple of the Sacred Tooth Relic",
    "Tour of tea plantations",
    "Visit to Ramboda Falls",
    "Tour of Nuwara Eliya",
    "Trek up Mini Adam's Peak",
    "Walk across Nine Arch Bridge",
    "Visit to a working tea factory",
    "Scenic train ride from Ella to Nanu Oya"
  ];

  const exclusions = [
    "Lunch and drinks",
    "Entrance fees",
    "Personal expenses",
    "Tips and gratuities"
  ];

  const itineraryData = [
    {
      day: 1,
      title: "Kandy – Sacred Sites & Scenic Wonders",
      details: [
        "Meet majestic elephants at Pinnawala Elephant Orphanage, watching them bathe and roam freely.",
        "Discover spiritual heritage at the Temple of the Sacred Tooth Relic, Kandy's UNESCO-listed treasure.",
        "Traverse emerald tea plantations and learn the art of Ceylon tea production.",
        "Be awed by Ramboda Falls, a cascading jewel hidden in the misty highlands.",
        "Overnight in Nuwara Eliya (or Kandy)."
      ]
    },
    {
      day: 2,
      title: "Nuwara Eliya – Colonial Charm & Iconic Landmarks",
      details: [
        "Stroll through Nuwara Eliya, Sri Lanka's \"Little England,\" with its Tudor-style buildings and manicured gardens.",
        "Hike Mini Adam's Peak for sweeping views of tea-clad valleys and distant mountains.",
        "Cross the Nine Arch Bridge, a photogenic colonial relic framed by jungle and rolling hills.",
        "Tour a tea factory and savor the freshest brew straight from the source.",
        "Overnight in Ella."
      ]
    },
    {
      day: 3,
      title: "Ella – Scenic Train Ride & Farewell",
      details: [
        "Embark on a bucket-list train journey from Ella to Nanu Oya, gliding past waterfalls and terraced hillsides.",
        "Pause at Rawana Falls, a thunderous cascade wrapped in local legend.",
        "Unwind in Ella—explore cozy cafés, browse handicrafts, or soak in panoramic views.",
        "Return to Colombo/Kandy or continue your Sri Lankan adventure."
      ]
    }
  ];

  const getTotalPrice = () => {
    const rates = packageRates[selectedPackage as keyof typeof packageRates];
    return rates.twin * travelers;
  };

  const getPackageColor = (pkg: string) => {
    return pkg === 'standard' 
      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' 
      : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700';
  };

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsDialogOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="relative h-96 rounded-lg overflow-hidden mb-6">
          <img 
            src={heroImage} 
            alt="Sri Lanka Private 3-Day Hill Country Tour with Train Ride"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sri Lanka Private 3-Day Hill Country Tour with Train Ride
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                Discover Sri Lanka's picturesque hill region and the charming town of Ella on a three-day excursion from Colombo. Highlights include a stop at the Pinnawala Elephant Orphanage, a visit to the revered Temple of the Sacred Tooth Relic, and a breathtaking train journey through stunning landscapes.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            3 Days
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Free cancellation up to 24 hours
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Private tour
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Pickup included
          </Badge>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Tour Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Gallery Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Tour Gallery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <EnhancedGallery images={galleryImages} />
            </CardContent>
          </Card>

          {/* Tour Highlights */}
          <Card>
            <CardHeader>
              <CardTitle>Tour Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Detailed Itinerary */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Itinerary</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="details">Day by Day</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4">
                    {itineraryData.map((day) => (
                      <div key={day.day} className="border rounded-lg p-4">
                        <h3 className="font-semibold text-lg mb-2">
                          Day {day.day}: {day.title}
                        </h3>
                        <p className="text-gray-600">{day.details[0]}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="details" className="mt-6">
                  <div className="space-y-4">
                    {itineraryData.map((day) => (
                      <div key={day.day} className="border rounded-lg">
                        <Button
                          variant="ghost"
                          className="w-full justify-between p-4 h-auto"
                          onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                        >
                          <span className="font-semibold text-left">
                            Day {day.day}: {day.title}
                          </span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${expandedDay === day.day ? 'rotate-90' : ''}`} />
                        </Button>
                        {expandedDay === day.day && (
                          <div className="px-4 pb-4">
                            <ul className="space-y-2">
                              {day.details.map((detail, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-gray-600">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {inclusions.map((inclusion, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{inclusion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <XCircle className="w-5 h-5" />
                  Not Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exclusions.map((exclusion, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column - Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            {/* Package Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Package Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    variant={selectedPackage === 'standard' ? 'default' : 'outline'}
                    className={`w-full justify-start h-auto p-4 ${selectedPackage === 'standard' ? getPackageColor('standard') : ''}`}
                    onClick={() => setSelectedPackage('standard')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Standard Package</div>
                      <div className="text-sm opacity-90">
                        ${packageRates.standard.twin} per person (twin sharing)
                      </div>
                      <div className="text-sm opacity-90">
                        ${packageRates.standard.single} (single occupancy)
                      </div>
                    </div>
                  </Button>

                  <Button
                    variant={selectedPackage === 'comfort' ? 'default' : 'outline'}
                    className={`w-full justify-start h-auto p-4 ${selectedPackage === 'comfort' ? getPackageColor('comfort') : ''}`}
                    onClick={() => setSelectedPackage('comfort')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Comfort Package</div>
                      <div className="text-sm opacity-90">
                        ${packageRates.comfort.twin} per person (twin sharing)
                      </div>
                      <div className="text-sm opacity-90">
                        ${packageRates.comfort.single} (single occupancy)
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Travelers */}
            <Card>
              <CardHeader>
                <CardTitle>Number of Travelers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    disabled={travelers <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-xl font-semibold">{travelers}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTravelers(travelers + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Special Requests */}
            <Card>
              <CardHeader>
                <CardTitle>Special Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Any special requirements or preferences..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>3 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers:</span>
                    <span>{travelers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span className="capitalize">{selectedPackage}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>${getTotalPrice()}</span>
                    </div>
                  </div>
                </div>

                <BookingForm
                  packageType="Sri Lanka Private 3-Day Hill Country Tour with Train Ride"
                  travelers={travelers}
                  totalCost={getTotalPrice()}
                  initialComments={comments}
                />
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card>
              <CardHeader>
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <strong>What to bring:</strong> Comfortable shoes, Hat, Camera, Sunscreen, Water
                </div>
                <div>
                  <strong>Know before you go:</strong>
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Wear comfortable walking shoes</li>
                    <li>Children under 8 years not recommended</li>
                    <li>No wheelchair/stroller access</li>
                    <li>Be ready 15 minutes before pickup</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Gallery Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>Tour Gallery</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-[60vh] object-cover"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ThreeDayHillCountryTourPackage;