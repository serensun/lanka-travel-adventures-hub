import React, { useState } from 'react';
import { Check, X, Users, Calendar, MapPin, Camera, MessageSquare, Star, Clock, CreditCard, Shield, ZoomIn, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Car } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import BookingForm from './BookingForm';
import culturalTriangleWilpattu1 from '@/assets/cultural-triangle-wilpattu-1.avif';
import culturalTriangleWilpattu2 from '@/assets/cultural-triangle-wilpattu-2.avif';
import culturalTriangleWilpattu3 from '@/assets/cultural-triangle-wilpattu-3.avif';
import culturalTriangleWilpattu4 from '@/assets/cultural-triangle-wilpattu-4.avif';
import culturalTriangleWilpattu5 from '@/assets/cultural-triangle-wilpattu-5.avif';
import culturalTriangleWilpattu6 from '@/assets/cultural-triangle-wilpattu-6.avif';
import culturalTriangleWilpattu7 from '@/assets/cultural-triangle-wilpattu-7.avif';

const CulturalTriangleWilpattuTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);

  const packageRates = {
    standard: { double: 590, single: 85 }
  };

  const galleryImages = [
    {
      url: culturalTriangleWilpattu1,
      alt: 'Cultural Triangle Wilpattu Tour',
      caption: 'Explore the ancient wonders of Sri Lanka\'s Cultural Triangle'
    },
    {
      url: culturalTriangleWilpattu2,
      alt: 'Sigiriya Rock Fortress',
      caption: 'Conquer the legendary Sigiriya Rock Fortress'
    },
    {
      url: culturalTriangleWilpattu3,
      alt: 'Anuradhapura Ancient City',
      caption: 'Wander through Anuradhapura, Sri Lanka\'s ancient capital'
    },
    {
      url: culturalTriangleWilpattu4,
      alt: 'Dambulla Cave Temple',
      caption: 'Marvel at the golden-hued Dambulla Cave Temple'
    },
    {
      url: culturalTriangleWilpattu5,
      alt: 'Polonnaruwa Ruins',
      caption: 'Discover Polonnaruwa\'s magnificent ruins'
    },
    {
      url: culturalTriangleWilpattu6,
      alt: 'Wilpattu National Park Safari',
      caption: 'Embark on an exciting Wilpattu safari'
    },
    {
      url: culturalTriangleWilpattu7,
      alt: 'Temple of the Sacred Tooth',
      caption: 'Pay homage at Kandy\'s sacred Temple of the Tooth'
    }
  ];

  const highlights = [
    'Wander through Anuradhapura, Sri Lanka\'s ancient capital steeped in 2,500 years of history',
    'Conquer the legendary Sigiriya Rock Fortress, a UNESCO-listed marvel of ancient engineering',
    'Marvel at the golden-hued Dambulla Cave Temple and pay homage at Kandy\'s sacred Temple of the Tooth',
    'Discover Polonnaruwa\'s magnificent ruins, where towering Buddha statues whisper tales of a glorious past',
    'Embark on an exciting Wilpattu safari to spot leopards, elephants and exotic birds in their natural habitat'
  ];

  const inclusions = [
    '4-day cultural tour',
    'Private guided tours',
    'Overnight stays in Anuradhapura and Sigiriya',
    'Visit to 5 UNESCO-listed sites in 5 ancient cities',
    'Guided Sigiriya Rock Fortress tour',
    'Guided Dambulla Golden Temple tour',
    'Anuradhapura city tour to visit ancient monuments',
    'Polonnaruwa city tour to visit ancient monuments',
    'Kandy city tour',
    'Visit to spice/herbal garden in Matale'
  ];

  const exclusions = [
    'Lunch, dinner and drinks',
    'Safari at Wilpattu National Park (entrance fees and jeep hire)',
    'Entrance fees to Sigiriya Rock (USD 35 p.p.), Dambulla temple (USD 7 p.p.), Anuradhapura (USD 30 p.p.), Polonnaruwa (USD 30 p.p.), and the tooth relic temple (USD 7 p.p.)',
    'Personal expenses',
    'Travel insurance'
  ];

  const itineraryData = [
    { 
      day: 1, 
      title: "Colombo → Wilpattu → Anuradhapura", 
      time: "Full Day",
      highlights: "Wilpattu National Park Safari, Ancient City",
      description: "Morning pickup from Colombo. Enroute wildlife safari at Wilpattu National Park (spot leopards, elephants & migratory birds). Evening check-in at Anuradhapura hotel."
    },
    { 
      day: 2, 
      title: "Ancient Wonders of Anuradhapura → Sigiriya", 
      time: "Full Day",
      highlights: "Sacred Bodhi Tree, Massive Dagobas, Ancient Monastic Complexes",
      description: "Full exploration of Sri Lanka's first capital: Sacred Bodhi Tree (oldest historically documented tree on earth), Massive dagobas including Ruwanwelisaya and Jetavanaramaya, Ancient monastic complexes and royal palaces. Afternoon transfer to Sigiriya. Overnight in Sigiriya."
    },
    { 
      day: 3, 
      title: "Sigiriya Rock Fortress & Polonnaruwa", 
      time: "Full Day",
      highlights: "Sigiriya Frescoed Maidens, Lion's Paw Gateway, Gal Vihara",
      description: "Sunrise climb to UNESCO-listed Sigiriya: Frescoed maidens & lion's paw gateway, 5th-century water gardens. Visit Pidurangala Cave Temple. Explore Polonnaruwa's medieval ruins: Giant stone Buddhas at Gal Vihara, Royal palace complex, Ancient Hindu shrines. Return to Sigiriya for overnight stay."
    },
    { 
      day: 4, 
      title: "Cultural Finale - Dambulla/Kandy → Colombo", 
      time: "Full Day",
      highlights: "Spice Garden, Dambulla Cave Temple, Temple of the Sacred Tooth",
      description: "Morning spice garden visit in Matale. Dambulla Cave Temple (golden Buddha statues & ceiling murals). Kandy's Temple of the Sacred Tooth Relic. Scenic evening return to Colombo."
    }
  ];

  const itinerary = [
    { day: 1, title: 'Colombo → Wilpattu → Anuradhapura', activities: ['Morning pickup from Colombo', 'Wilpattu National Park Safari', 'Evening check-in at Anuradhapura hotel'] },
    { day: 2, title: 'Ancient Wonders of Anuradhapura → Sigiriya', activities: ['Sacred Bodhi Tree visit', 'Massive dagobas exploration', 'Ancient monastic complexes', 'Transfer to Sigiriya'] },
    { day: 3, title: 'Sigiriya Rock Fortress & Polonnaruwa', activities: ['Sunrise Sigiriya climb', 'Pidurangala Cave Temple', 'Polonnaruwa medieval ruins', 'Gal Vihara stone Buddhas'] },
    { day: 4, title: 'Cultural Finale - Dambulla/Kandy → Colombo', activities: ['Matale spice garden', 'Dambulla Cave Temple', 'Temple of the Sacred Tooth', 'Return to Colombo'] }
  ];

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
      default: return 'from-blue-500 to-blue-700';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          4-Day Cultural Triangle Tour with Wilpattu Safari
        </h2>
        <p className="text-xl text-blue-700 max-w-4xl mx-auto">
          Embark on an unforgettable journey through Sri Lanka's legendary Cultural Triangle and explore the fascinating wildlife at Wilpattu national park. This immersive 4-day experience takes you to three magnificent ancient capitals - the sacred city of Anuradhapura, the breathtaking Sigiriya Rock Fortress, and the medieval ruins of Polonnaruwa. Along the way, you'll marvel at the golden splendor of Dambulla's cave temples and pay homage at Kandy's revered Temple of the Tooth, home to Buddhism's most sacred relic.
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
            <strong>Live tour guide:</strong> English, Italian, French<br/>
            <strong>Pickup included:</strong> Please provide us the name of the hotel or address of the pick-up location
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

          {/* Package Selection */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Select Package Type</h3>
            <div className="grid md:grid-cols-1 gap-4">
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
                  onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                  className="w-20 px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="text-sm text-blue-700">
                Total cost: <span className="font-bold text-lg text-blue-900">${getTotalPrice()}</span>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Special Requests or Comments
            </h3>
            <Textarea
              placeholder="Please let us know if you have any special requirements, dietary restrictions, or other requests..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="min-h-24 border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Booking Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-blue-200 shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Booking Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Package:</span>
                <span className="font-medium text-blue-900 capitalize">{selectedPackage}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Travelers:</span>
                <span className="font-medium text-blue-900">{travelers}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Duration:</span>
                <span className="font-medium text-blue-900">4 days</span>
              </div>
              <div className="border-t border-blue-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-900">Total:</span>
                  <span className="text-2xl font-bold text-blue-900">${getTotalPrice()}</span>
                </div>
              </div>
            </div>

            <BookingForm 
              packageType="4-Day Cultural Triangle Tour with Wilpattu Safari"
              travelers={travelers}
              totalCost={getTotalPrice()}
              initialComments={comments}
            />

            {/* What's Included/Excluded */}
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  What's Included
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  {inclusions.slice(0, 3).map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                  <li className="text-blue-600 text-xs">+ {inclusions.length - 3} more included</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                  <X className="w-4 h-4 mr-2 text-red-500" />
                  What's Excluded
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  {exclusions.slice(0, 2).map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <X className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                  <li className="text-blue-600 text-xs">+ {exclusions.length - 2} more excluded</li>
                </ul>
              </div>
            </div>

            {/* Important Information */}
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">Important Information</h4>
              <div className="text-sm text-yellow-700 space-y-1">
                <div><strong>What to bring:</strong> Comfortable shoes, Hat, Camera, Sunscreen, Water</div>
                <div className="mt-2"><strong>Know before you go:</strong></div>
                <ul className="text-xs space-y-1 ml-2">
                  <li>• Wear comfortable walking shoes</li>
                  <li>• Children under 8 years not recommended</li>
                  <li>• Be ready 15 minutes before pickup</li>
                  <li>• Weather may affect outdoor activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Inclusions/Exclusions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50/70 backdrop-blur-sm rounded-xl p-6 border border-green-200">
          <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
            <Check className="w-5 h-5 mr-2 text-green-600" />
            What's Included
          </h3>
          <ul className="space-y-2">
            {inclusions.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50/70 backdrop-blur-sm rounded-xl p-6 border border-red-200">
          <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
            <X className="w-5 h-5 mr-2 text-red-600" />
            What's Not Included
          </h3>
          <ul className="space-y-2">
            {exclusions.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-red-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CulturalTriangleWilpattuTourPackage;