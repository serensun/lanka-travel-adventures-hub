import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { 
  Calendar, Users, MapPin, Clock, Star, 
  CheckCircle, XCircle, Shield, RefreshCw, 
  ChevronLeft, ChevronRight, X
} from 'lucide-react';
import BookingForm from './BookingForm';

// Import images
import sevenDayTour1 from '../assets/seven-day-tour-1.avif';
import sevenDayTourHero from '../assets/seven-day-tour-hero.avif';
import sevenDayTour2 from '../assets/seven-day-tour-2.avif';
import sevenDayTour3 from '../assets/seven-day-tour-3.avif';
import sevenDayTour4 from '../assets/seven-day-tour-4.avif';
import sevenDayTour5 from '../assets/seven-day-tour-5.avif';
import sevenDayTour6 from '../assets/seven-day-tour-6.avif';
import sevenDayTour7 from '../assets/seven-day-tour-7.avif';
import sevenDayTour8 from '../assets/seven-day-tour-8.avif';

const SevenDayPrivateTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const packageRates = {
    standard: { twin: 750.00, single: 995.00 },
    comfort: { twin: 950.00, single: 1390.00 },
    luxury: { twin: 1290.00, single: 1695.00 }
  };

  const galleryImages = [
    { url: sevenDayTour1, alt: 'Sri Lanka Tour Gallery 1', caption: 'Explore Sri Lanka\'s ancient wonders' },
    { url: sevenDayTourHero, alt: 'Sri Lanka Tour Gallery 2', caption: 'Scenic landscapes and cultural sites' },
    { url: sevenDayTour2, alt: 'Sri Lanka Tour Gallery 3', caption: 'Traditional Buddhist temples' },
    { url: sevenDayTour3, alt: 'Sri Lanka Tour Gallery 4', caption: 'Wildlife safari adventures' },
    { url: sevenDayTour4, alt: 'Sri Lanka Tour Gallery 5', caption: 'Tea plantation experiences' },
    { url: sevenDayTour5, alt: 'Sri Lanka Tour Gallery 6', caption: 'Historical monuments' },
    { url: sevenDayTour6, alt: 'Sri Lanka Tour Gallery 7', caption: 'Cultural heritage sites' },
    { url: sevenDayTour7, alt: 'Sri Lanka Tour Gallery 8', caption: 'Natural beauty of Sri Lanka' },
    { url: sevenDayTour8, alt: 'Sri Lanka Tour Gallery 9', caption: 'Complete Sri Lankan experience' }
  ];

  const highlights = [
    'Stroll through the ancient temples, dagobas, and palaces of Sri Lanka\'s historic cities',
    'Ascend the 5th-century Sigiriya Rock Fortress with your guide and uncover its fascinating tales',
    'Take a breathtaking train ride to Ella, crossing the iconic Nine Arches Bridge',
    'Marvel at stunning waterfalls and dip your feet into the refreshing Indian Ocean',
    'Admire towering granite Buddha statues and explore the world\'s largest ancient brick structure'
  ];

  const inclusions = [
    '7 days (6 nights)',
    '6 Breakfast',
    'Entire ground transportation in an air-conditioned vehicle with a local guide',
    'Private transportation',
    'Highway toll',
    'Sigiriya rock fortress rise hike with local guide',
    'Guided tour of Dambulla, Polonnaruwa, Galle Fort, and Tooth relic temple',
    'Safari at Yala National Park',
    'Guided slow boat river safari and mangrove lagoon tour',
    'Tea plantation tour with factory visit',
    'All Government fees & Taxes',
    'Driver Accommodation, meals, salary',
    'Waterfall visit (Ravana waterfall)',
    'Ella sightseeing tour (guided Mini Adams peak hike, Nine Arches Bridge tour)',
    'All-inclusive hill country train trip'
  ];

  const exclusions = [
    'All Entry Fees + Safari Jeeps / Boats, Etc.',
    'Lunch, dinner and drinks',
    'Tips and gratuities'
  ];

  const itineraryData = [
    {
      day: 'Day 1',
      title: 'Colombo → Sigiriya',
      activities: [
        'Dambulla Cave Temple: Explore the UNESCO-listed Golden Temple of Dambulla, a stunning complex of ancient cave temples adorned with intricate Buddhist murals and statues.',
        'Kaudulla/Minneriya National Park: Embark on an afternoon safari (from 2 PM) to witness the majestic gathering of wild elephants in one of Sri Lanka\'s premier wildlife sanctuaries.'
      ]
    },
    {
      day: 'Day 2',
      title: 'Sigiriya → Polonnaruwa → Sigiriya',
      activities: [
        'Sigiriya Rock Fortress: Start early (6:45 AM) to climb the iconic 5th-century rock fortress, avoiding crowds while learning its fascinating history. Return to the hotel for breakfast afterward.',
        'Polonnaruwa Ancient City: Discover Sri Lanka\'s second kingdom, wandering through its well-preserved ruins, including royal palaces, temples, and sacred relics.'
      ]
    },
    {
      day: 'Day 3',
      title: 'Sigiriya → Dambulla → Kandy',
      activities: [
        'Temple of the Sacred Tooth Relic: Visit Kandy\'s revered Buddhist temple, home to Sri Lanka\'s most sacred relic—the tooth of the Buddha.',
        'Royal Botanical Gardens, Peradeniya: Stroll through lush gardens famous for exotic orchids and towering palms, set along the Mahaweli River.',
        'Kandy Cultural Show: Wrap up the day with vibrant traditional dance performances at the Kandy Lake Club (5 PM onward).'
      ]
    },
    {
      day: 'Day 4',
      title: 'Kandy → Ramboda → Ella',
      activities: [
        'Ramboda Waterfall & Tea Plantations: Stop at cascading Ramboda Falls, tour a tea factory, and enjoy scenic viewpoints en route.',
        'Nuwara Eliya ("Little England"): Wander through this charming hill station before boarding the iconic 3 PM train from Nanu Oya to Ella—a journey famed for its breathtaking vistas.'
      ]
    },
    {
      day: 'Day 5',
      title: 'Ella → Yala',
      activities: [
        'Little Adam\'s Peak Sunrise: Hike early (weather permitting) for panoramic sunrise views over Ella\'s rolling hills.',
        'Nine Arches Bridge: Marvel at this colonial-era "Bridge in the Sky," surrounded by lush jungle.',
        'Ravana Ella Falls: Capture photos at this dramatic waterfall before continuing to Yala.'
      ]
    },
    {
      day: 'Day 6',
      title: 'Yala → Mirissa → Bentota',
      activities: [
        'Yala National Park Safari: Depart at 5 AM for a thrilling 4-hour safari, spotting leopards, elephants, and more.',
        'Galle Fort: Explore the 17th-century Dutch fort en route, with a seaside lunch stop in Mirissa.'
      ]
    },
    {
      day: 'Day 7',
      title: 'Bentota → Colombo',
      activities: [
        'Return to Colombo/Airport: After breakfast, transfer to Colombo or the airport, concluding your Sri Lankan adventure.'
      ]
    }
  ];

  const getTotalPrice = () => {
    const rates = packageRates[selectedPackage as keyof typeof packageRates];
    return travelers === 1 ? rates.single : rates.twin * travelers;
  };

  const getPackageColor = (pkg: string) => {
    switch (pkg) {
      case 'standard': return 'from-blue-500 to-blue-600';
      case 'comfort': return 'from-green-500 to-green-600';
      case 'luxury': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedImageIndex(prev => prev === 0 ? galleryImages.length - 1 : prev - 1);
    } else {
      setSelectedImageIndex(prev => prev === galleryImages.length - 1 ? 0 : prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={sevenDayTourHero} 
          alt="Sri Lanka Private 7-day Tour" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Sri Lanka Private 7-day Tour: Transport, Guide, Hotels, Food
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Discover Sri Lanka's vibrant cultural heritage, tour its ancient landmarks, unwind on serene beaches, and experience the thrill of a wildlife safari. Enjoy personalized, flexible journeys with the convenience of a private vehicle.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Book This Adventure
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="bg-white py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-green-600 mb-2" />
              <div className="font-semibold text-green-600">Free cancellation</div>
              <div className="text-sm text-gray-600">Cancel up to 24-hours in advance for a full refund</div>
            </div>
            <div className="flex flex-col items-center">
              <RefreshCw className="w-8 h-8 text-blue-600 mb-2" />
              <div className="font-semibold text-blue-600">Reserve now & pay later</div>
              <div className="text-sm text-gray-600">Keep your travel plans flexible — book your spot and pay nothing today</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-purple-600 mb-2" />
              <div className="font-semibold text-purple-600">Duration: 7 days</div>
              <div className="text-sm text-gray-600">6 nights</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-orange-600 mb-2" />
              <div className="font-semibold text-orange-600">Live tour guide</div>
              <div className="text-sm text-gray-600">English, Italy, French</div>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-600 mb-2" />
              <div className="font-semibold text-red-600">Small group</div>
              <div className="text-sm text-gray-600">Private tour participants</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tour Gallery */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tour Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    {galleryImages.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/3">
                        <div className="relative group">
                          <img 
                            src={image.url} 
                            alt={image.alt}
                            className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform group-hover:scale-105"
                            onClick={() => openGallery(index)}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all rounded-lg" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>

            {/* Tour Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-500" />
                  Tour Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Detailed Itinerary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Detailed Itinerary</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="detailed">Day by Day</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Experience the best of Sri Lanka in 7 unforgettable days. This comprehensive tour takes you from ancient kingdoms to wildlife safaris, scenic train rides through tea country, and coastal adventures. Perfect for travelers who want to see the highlights of the island in a well-paced itinerary.
                    </p>
                  </TabsContent>
                  <TabsContent value="detailed" className="space-y-6">
                    {itineraryData.map((day, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-lg text-blue-600">{day.day}: {day.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {day.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="text-gray-700 leading-relaxed">
                                • {activity}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Package Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Package Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(packageRates).map(([pkg, rates]) => (
                  <div key={pkg}>
                    <Button
                      variant={selectedPackage === pkg ? "default" : "outline"}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`w-full justify-between h-auto p-4 ${
                        selectedPackage === pkg 
                          ? `bg-gradient-to-r ${getPackageColor(pkg)} text-white` 
                          : ''
                      }`}
                    >
                      <div className="text-left">
                        <div className="font-semibold capitalize">{pkg}</div>
                        <div className="text-sm opacity-90">
                          Twin: ${rates.twin} | Single: ${rates.single}
                        </div>
                      </div>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Travelers */}
            <Card>
              <CardHeader>
                <CardTitle>Number of Travelers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="travelers">Travelers</Label>
                  <Input
                    id="travelers"
                    type="number"
                    min="1"
                    max="10"
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                  />
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
                  placeholder="Any special requests or dietary requirements..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            {/* What's Included/Excluded */}
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {inclusions.slice(0, 5).map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                    <li className="text-sm text-gray-500">...and more</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">What's Not Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Important Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Important Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">What to bring</h4>
                  <p className="text-sm text-gray-600">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Know before you go</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
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

            {/* Booking Summary */}
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers:</span>
                    <span>{travelers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span className="capitalize">{selectedPackage}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                </div>
                <BookingForm 
                  packageType="Sri Lanka Private 7-day Tour: Transport, Guide, Hotels, Food"
                  travelers={travelers}
                  totalCost={getTotalPrice()}
                  initialComments={comments}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
          <DialogContent className="max-w-4xl h-[80vh] p-0">
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              <img 
                src={galleryImages[selectedImageIndex].url} 
                alt={galleryImages[selectedImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Navigation arrows */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>

              {/* Close button */}
              <DialogClose className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2">
                <X className="w-6 h-6" />
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default SevenDayPrivateTourPackage;