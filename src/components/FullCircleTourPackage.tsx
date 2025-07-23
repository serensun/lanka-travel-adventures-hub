import React, { useState } from 'react';
import { Check, X, Users, Calendar, MapPin, Camera, MessageSquare, Star, Clock, CreditCard, Shield, ZoomIn, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Car } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import BookingForm from './BookingForm';

import fullCircleTour1 from '@/assets/full-circle-tour-1.avif';
import fullCircleTour2 from '@/assets/full-circle-tour-2.avif';
import fullCircleTour3 from '@/assets/full-circle-tour-3.avif';
import fullCircleTour4 from '@/assets/full-circle-tour-4.avif';
import fullCircleTour5 from '@/assets/full-circle-tour-5.avif';
import fullCircleTourHero from '@/assets/full-circle-tour-hero.avif';
import fullCircleTour6 from '@/assets/full-circle-tour-6.avif';
import fullCircleTour7 from '@/assets/full-circle-tour-7.avif';

const FullCircleTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);

  const packageRates = {
    standard: { double: 595, single: 795 },
  };

  const galleryImages = [
    {
      url: fullCircleTourHero,
      alt: 'Sri Lanka Full Circle Tour - Main',
      caption: 'Complete Sri Lanka experience in 4 days'
    },
    {
      url: fullCircleTour1,
      alt: 'Sri Lanka landscapes and cultural sites',
      caption: 'Ancient temples and UNESCO sites'
    },
    {
      url: fullCircleTour2,
      alt: 'Ancient temples and historical monuments', 
      caption: 'Cultural Triangle exploration'
    },
    {
      url: fullCircleTour3,
      alt: 'Scenic mountain views and tea plantations',
      caption: 'Hill country train journey'
    },
    {
      url: fullCircleTour4,
      alt: 'Wildlife safari and national parks',
      caption: 'Yala National Park safari'
    },
    {
      url: fullCircleTour5,
      alt: 'Coastal areas and beach destinations',
      caption: 'Southern coast beaches'
    },
    {
      url: fullCircleTour6,
      alt: 'Cultural experiences and local attractions',
      caption: 'Galle Fort and colonial heritage'
    },
    {
      url: fullCircleTour7,
      alt: 'Train journeys through hill country',
      caption: 'Blue train scenic ride'
    }
  ];

  const highlights = [
    "Explore countless must-see destinations across Sri Lanka in an action-packed 4-day tour",
    "Enjoy one of the world's most breathtaking train rides through stunning landscapes",
    "Spot majestic Sri Lankan leopards and massive elephants on an exciting Yala National Park safari",
    "Stroll along pristine beaches lining the island's southern and western coasts",
    "Step back in time at legendary UNESCO sites like Sigiriya Rock Fortress, Dambulla Cave Temple, and the sacred Temple of the Tooth"
  ];

  const inclusions = [
    "3 nights of accommodation in standard hotels with breakfast",
    "Kandy city tour",
    "A sightseeing tour of Nuwara Eliya",
    "Pettah's city tour of Colombo",
    "Entrance fees to Dambulla golden temple",
    "Entrance fees to Tooth relic temple and museum",
    "Gregory Lake Esplanade",
    "Transport in an air-conditioned vehicle with an English-speaking driver and guide",
    "Entrance fees Tea factory and tea garden",
    "Spice / herbal garden",
    "Kandy city tour",
    "All-inclusive Hill Country Blue Train Experience",
    "Guided Galle Fort Tour",
    "Entrance fees Tea factory/Tea garden",
    "Meeting arrangements at the airport on arrival and departure"
  ];

  const exclusions = [
    "Entrance fees to Sigiriya rock fortress",
    "Entrance fees to River slow boat safari",
    "Entrance fees to Yala national park safari and jeep hire"
  ];

  const itineraryData = [
    {
      day: 1,
      title: "Airport → Colombo → Sigiriya → Kandy",
      activities: [
        "Begin your journey with a warm welcome from your guide before heading to Kandy",
        "En route, explore the Dambulla Golden Temple, a stunning cave complex dating back to the 1st century BC",
        "Discover Sigiriya Rock Fortress, an ancient palace built by King Kasyapa, perched atop a massive rock with breathtaking frescoes",
        "Overnight stay in Kandy"
      ]
    },
    {
      day: 2,
      title: "Kandy → Nuwara Eliya → Ella",
      activities: [
        "Visit the revered Temple of the Sacred Tooth Relic, home to Buddha's tooth and a UNESCO World Heritage Site",
        "Journey to Ella, stopping at a tea plantation & factory in Sri Lanka's lush hill country",
        "Pass through Nuwara Eliya, known as 'Little England,' with its colonial charm and misty landscapes",
        "Experience the iconic Blue Train ride from Ella to Nuwara Eliya, one of the world's most scenic rail journeys",
        "Overnight stay in Ella"
      ]
    },
    {
      day: 3,
      title: "Ella → Yala → South Coast",
      activities: [
        "Head to Yala National Park for an afternoon jeep safari, renowned for its leopard sightings and diverse wildlife",
        "Relax at a beachside hotel on Sri Lanka's southern coast",
        "Overnight stay on the South Coast"
      ]
    },
    {
      day: 4,
      title: "Galle → Bentota → Colombo",
      activities: [
        "After breakfast, travel to Colombo, stopping at Galle, a historic fortified city with Dutch-colonial architecture",
        "Enjoy a river safari in Bentota, exploring the mangroves and wildlife of Madu Ganga",
        "In Colombo, visit key landmarks:",
        "Gangaramaya Buddhist Temple – A sacred and architecturally rich temple",
        "Viharamahadevi Park – Colombo's largest green space",
        "Galle Face Green – A scenic oceanfront promenade",
        "Independence Hall & Pettah Market – A mix of history and vibrant local culture",
        "Tour concludes with drop-off at your preferred location"
      ]
    }
  ];

  const itinerary = [
    { day: 1, title: 'Airport → Colombo → Sigiriya → Kandy', activities: ['Airport pickup with guide welcome', 'Dambulla Golden Temple exploration', 'Sigiriya Rock Fortress discovery', 'Overnight stay in Kandy'] },
    { day: 2, title: 'Kandy → Nuwara Eliya → Ella', activities: ['Temple of the Sacred Tooth visit', 'Tea plantation & factory tour', 'Nuwara Eliya Little England exploration', 'Blue Train scenic journey'] },
    { day: 3, title: 'Ella → Yala → South Coast', activities: ['Yala National Park safari', 'Leopard and elephant spotting', 'South coast beach relaxation', 'Beachside hotel stay'] },
    { day: 4, title: 'Galle → Bentota → Colombo', activities: ['Galle Fort historic tour', 'Bentota river safari', 'Colombo city landmarks', 'Tour conclusion and drop-off'] }
  ];

  const getTotalPrice = (): number => {
    const rates = packageRates[selectedPackage as keyof typeof packageRates];
    if (travelers === 1) {
      return rates.single;
    }
    return rates.double * travelers;
  };

  const getPackageColor = (pkg: string): string => {
    switch (pkg) {
      case 'standard':
        return 'from-blue-500 to-blue-700';
      default:
        return 'from-blue-500 to-blue-700';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          4-Day Sri Lanka Full Circle Private Tour To Colombo
        </h2>
        <p className="text-xl text-blue-700 max-w-4xl mx-auto">
          This 4-day tour packs in the highlights of an 8-day Sri Lanka classic tour, covering nearly the same route and key destinations in half the time. You'll experience the best of the country's must-see sights, just like on the longer itinerary.
        </p>
        
        {/* Tour Features */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Free cancellation
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Reserve now & pay later
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Duration: 4 days
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Small group: Private tour
          </Badge>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-yellow-800 text-sm">
            <strong>Free cancellation:</strong> Cancel up to 24-hours in advance for a full refund<br/>
            <strong>Reserve now & pay later:</strong> Keep your travel plans flexible — book your spot and pay nothing today.<br/>
            <strong>Live tour guide:</strong> English, Italian, French
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
        <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">Tour Gallery</h3>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                 <Dialog>
                   <DialogTrigger asChild>
                     <div 
                       className="relative group overflow-hidden rounded-lg cursor-pointer"
                       onClick={() => setCurrentImageIndex(index)}
                     >
                       <img
                         src={image.url}
                         alt={image.alt}
                         className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-125"
                       />
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <ZoomIn className="h-8 w-8 text-white mb-16" />
                       </div>
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                         <p className="text-white text-sm p-4 font-medium">{image.caption}</p>
                       </div>
                     </div>
                   </DialogTrigger>
                   <DialogContent className="max-w-4xl w-full max-h-[90vh] p-2">
                     <div className="relative">
                       <img 
                         src={galleryImages[currentImageIndex].url} 
                         alt={galleryImages[currentImageIndex].alt}
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Highlights Section */}
      <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
        <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
          <Star className="w-5 h-5 mr-2 text-yellow-500" />
          Tour Highlights
        </h3>
        <ul className="space-y-3">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
              <span className="text-blue-800">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tour Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Itinerary with Tabs */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">What's Not Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Important Information */}
          <Card>
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">What to bring:</h4>
                <p className="text-sm text-muted-foreground">
                  Comfortable shoes, Hat, Camera, Sunscreen, Water
                </p>
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

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 space-y-6">
            {/* Package Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Package Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    variant={selectedPackage === 'standard' ? 'default' : 'outline'}
                    className={`w-full justify-start h-auto p-4 ${
                      selectedPackage === 'standard' 
                        ? `bg-gradient-to-r ${getPackageColor('standard')} text-white` 
                        : ''
                    }`}
                    onClick={() => setSelectedPackage('standard')}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Standard Package</div>
                      <div className="text-sm opacity-90">
                        Twin: ${packageRates.standard.double} pp | Single: ${packageRates.standard.single}
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Travelers Input */}
            <Card>
              <CardHeader>
                <CardTitle>Number of Travelers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Label htmlFor="travelers">Travelers:</Label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      disabled={travelers <= 1}
                    >
                      -
                    </Button>
                    <Input
                      id="travelers"
                      type="number"
                      min="1"
                      value={travelers}
                      onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTravelers(travelers + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card>
              <CardHeader>
                <CardTitle>Special Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Any special requirements or requests..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>4 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers:</span>
                    <span>{travelers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span className="capitalize">{selectedPackage}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                </div>
                
                <BookingForm
                  packageType="4-Day Sri Lanka Full Circle Private Tour To Colombo"
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
  );
};

export default FullCircleTourPackage;