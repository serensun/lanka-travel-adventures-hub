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
import sriLanka5Day1 from '@/assets/sri-lanka-5-day-1.avif';
import sriLanka5Day2 from '@/assets/sri-lanka-5-day-2.avif';
import sriLanka5Day3 from '@/assets/sri-lanka-5-day-3.avif';
import sriLanka5Day4 from '@/assets/sri-lanka-5-day-4.avif';
import sriLanka5Day5 from '@/assets/sri-lanka-5-day-5.avif';
import sriLanka5Day6 from '@/assets/sri-lanka-5-day-6.avif';
import sriLanka5Day7 from '@/assets/sri-lanka-5-day-7.avif';
import sriLanka5Day8 from '@/assets/sri-lanka-5-day-8.avif';

const FiveDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);

  const packageRates = {
    standard: { double: 455, single: 795 }
  };

  const galleryImages = [
    {
      url: sriLanka5Day1,
      alt: 'Sri Lanka Countryside Adventure',
      caption: 'Explore Sri Lanka\'s stunning countryside and historic landmarks'
    },
    {
      url: sriLanka5Day2,
      alt: 'Hill Country Views',
      caption: 'Take in the breathtaking hill country scenery'
    },
    {
      url: sriLanka5Day3,
      alt: 'Kandy Temple',
      caption: 'Visit historic temples and cultural treasures in Kandy'
    },
    {
      url: sriLanka5Day4,
      alt: 'Tea Plantations',
      caption: 'Admire lush tea plantations and mountain views'
    },
    {
      url: sriLanka5Day5,
      alt: 'Train Journey',
      caption: 'Embark on a scenic train journey to Ella'
    },
    {
      url: sriLanka5Day6,
      alt: 'Nine Arch Bridge',
      caption: 'Discover the iconic Nine Arch Bridge'
    },
    {
      url: sriLanka5Day7,
      alt: 'Wildlife Safari',
      caption: 'Spot wild elephants on an exciting safari'
    },
    {
      url: sriLanka5Day8,
      alt: 'Bentota Beach',
      caption: 'Relax on picturesque beaches'
    }
  ];

  const highlights = [
    'Explore historic temples and cultural treasures in Sigiriya, Kandy, and Dambulla.',
    'Spot wild elephants on an exciting safari in Udawalawe National Park.',
    'Admire lush tea plantations, stunning waterfalls, and breathtaking mountain views in the hill country.',
    'Embark on a scenic train journey to Ella and discover the iconic Nine Arch Bridge.',
    'Glide through mangrove lagoons on a relaxing boat safari to observe crocodiles and monitor lizards.'
  ];

  const inclusions = [
    '5 Days (4 nights) accommodation in standard hotels',
    '4 Breakfasts',
    'Embark on a guided hike at the Sigiriya rock fortress, which features frescoes.',
    'Dambulla Golden Temple Tour',
    'Tooth temple tour with ceremony',
    'Pinnawala Elephant park',
    'Complete ground transportation as per the tour itinerary',
    'English-speaking local tour guide',
    'All government taxes',
    'Meeting arrangements at the airport',
    'Entrance fees to the spice/herbal garden',
    'Guided walking tour of Galle Fort',
    'Guided sightseeing tour of Ella with Mini Adams Peak and the Nine Arch Bridge',
    'Kandy sightseeing tour',
    'Nuwara Eliya sightseeing tour: Gregory Lake Esplanade',
    'Tea plantation tour with factory visits',
    'Mineral water (1.5 liters) per person a day',
    'All expenses for the hill country train'
  ];

  const exclusions = [
    'Entrance fees to Sigiriya Rock (USD 30), Dambulla Golden Temple (USD 7), Pinnawala Elephant Orphanage (USD 15), Tooth Relic Temple (USD 7)',
    'Entrance fees to Udawalawe National Park and Jeep Hire (USD 80)+',
    'Enjoy a typical delicious local lunch and learn how to cook a Sri Lankan curry',
    'Guided slow boat river safari and a mangrove lagoon tour',
    'Lunch and dinner',
    'Drinks',
    'Tips and gratuities'
  ];

  const itineraryData = [
    { 
      day: 1, 
      title: "Colombo → Kandy", 
      time: "Full Day",
      highlights: "Pinnawala Elephant Park, Temple of the Tooth Relic, Kandyan Cultural Show",
      description: "Upon arrival, meet your Serendipity Tours representative and begin your journey to Kandy. En route, visit the Pinnawala Elephant Park to observe these majestic creatures. In the afternoon, enjoy a Kandy city tour, including the sacred Temple of the Tooth Relic and a vibrant Kandyan cultural show. Overnight in Kandy"
    },
    { 
      day: 2, 
      title: "Kandy → Sigiriya → Kandy", 
      time: "Full Day",
      highlights: "Sigiriya Rock Fortress, Dambulla Golden Temple",
      description: "After an early breakfast, set off to explore two of Sri Lanka's most famous landmarks: the awe-inspiring Sigiriya Rock Fortress and the magnificent Dambulla Golden Temple. Immerse yourself in history and breathtaking views before returning to Kandy. Overnight in Kandy"
    },
    { 
      day: 3, 
      title: "Kandy → Nuwara Eliya → Ella", 
      time: "Full Day",
      highlights: "Tea Factory, Gregory Lake, Train Journey to Ella",
      description: "Depart for Ella after breakfast, stopping along the way in Nuwara Eliya. Visit a tea factory and plantation, stroll through downtown Nuwara Eliya, relax by Gregory Lake, and explore the mystical Sita Amman Temple. Later, embark on a picturesque train ride from Nanu Oya to Ella, soaking in the stunning hill country scenery. Overnight in Ella"
    },
    { 
      day: 4, 
      title: "Ella → Udawalawe → Galle", 
      time: "Full Day",
      highlights: "Ella Rock, Mini Adam's Peak, Nine Arch Bridge, Udawalawe Safari",
      description: "Start your day with a visit to Ella Rock, Mini Adam's Peak, and the iconic Nine Arch Bridge. Then, head to Udawalawe National Park for an exciting jeep safari to spot elephants and other wildlife. Overnight in Galle"
    },
    { 
      day: 5, 
      title: "Galle → Bentota → Colombo", 
      time: "Full Day",
      highlights: "Galle Fort, Bentota Beach, River Safari",
      description: "After breakfast, take a guided walking tour of Galle Fort, a UNESCO World Heritage Site. Continue your journey to Colombo, stopping at Hikkaduwa Beach and Bentota Beach for some relaxation. Enjoy a boat safari along the Bentota River, spotting crocodiles, monitor lizards, and lush mangroves, before heading to Colombo. End of the tour"
    }
  ];

  const itinerary = [
    { day: 1, title: 'Colombo → Kandy', activities: ['Pinnawala Elephant Park', 'Temple of the Tooth Relic', 'Kandyan Cultural Show', 'Kandy City Tour'] },
    { day: 2, title: 'Kandy → Sigiriya → Kandy', activities: ['Sigiriya Rock Fortress', 'Dambulla Golden Temple', 'Ancient Frescoes Tour', 'Historical Sites'] },
    { day: 3, title: 'Kandy → Nuwara Eliya → Ella', activities: ['Tea Factory Visit', 'Gregory Lake', 'Sita Amman Temple', 'Hill Country Train Journey'] },
    { day: 4, title: 'Ella → Udawalawe → Galle', activities: ['Ella Rock', 'Mini Adam\'s Peak', 'Nine Arch Bridge', 'Udawalawe Safari'] },
    { day: 5, title: 'Galle → Bentota → Colombo', activities: ['Galle Fort Tour', 'Bentota Beach', 'River Safari', 'Return to Colombo'] }
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
          Sri Lanka 5-Day Private Country Side Tour Car, Hotels, Food
        </h2>
        <p className="text-xl text-blue-700 max-w-4xl mx-auto">
          Explore Sri Lanka's stunning countryside and discover its historic landmarks. Take in the breathtaking hill country, picturesque beaches, charming villages, and lively cities like Kandy, Ella, and Bentota.
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
            Duration: 5 days
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
            <strong>Pickup included:</strong> Please provide us the name of the hotel or address of the pick-up location.
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
              5-Day Detailed Itinerary
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
                  onChange={(e) => setTravelers(parseInt(e.target.value))}
                  className="w-20 px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Additional Comments
            </h3>
            <Textarea
              placeholder="Any special requests or comments about your tour..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="min-h-[100px] bg-white/70 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Booking Summary */}
        <div className="space-y-6">
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200 sticky top-6">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Booking Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-blue-800">Package:</span>
                <span className="font-medium text-blue-900 capitalize">{selectedPackage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-800">Travelers:</span>
                <span className="font-medium text-blue-900">{travelers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-800">Duration:</span>
                <span className="font-medium text-blue-900">5 Days</span>
              </div>
              <div className="border-t border-blue-200 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-blue-900">Total:</span>
                  <span className="text-orange-600">${getTotalPrice()}</span>
                </div>
              </div>
            </div>

            <BookingForm 
              packageType="Sri Lanka 5-Day Private Country Side Tour Car, Hotels, Food"
              travelers={travelers}
              totalCost={getTotalPrice()}
              initialComments={comments}
            />
          </div>

          {/* What's Included */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
              <Check className="w-5 h-5 mr-2 text-green-600" />
              What's Included
            </h4>
            <ul className="space-y-2">
              {inclusions.slice(0, 6).map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setShowExpandedItinerary(!showExpandedItinerary)}
              className="text-blue-600 hover:text-blue-800 text-sm mt-3 flex items-center"
            >
              {showExpandedItinerary ? 'Show less' : `+${inclusions.length - 6} more items`}
              {showExpandedItinerary ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
            </button>
            {showExpandedItinerary && (
              <ul className="space-y-2 mt-3">
                {inclusions.slice(6).map((item, index) => (
                  <li key={index + 6} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* What's Not Included */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
              <X className="w-5 h-5 mr-2 text-red-500" />
              Not Included
            </h4>
            <ul className="space-y-2">
              {exclusions.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Information */}
          <div className="bg-yellow-50/70 backdrop-blur-sm rounded-xl p-6 border border-yellow-200">
            <h4 className="text-lg font-bold text-yellow-900 mb-4">Important Information</h4>
            <div className="space-y-3 text-yellow-800 text-sm">
              <div>
                <strong>What to bring:</strong> Comfortable shoes, Hat, Camera, Sunscreen, Water
              </div>
              <div>
                <strong>Know before you go:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
                  <li>Wear comfortable walking shoes as there is a moderate amount of walking involved</li>
                  <li>It is recommended to bring a hat, sunscreen, and a camera</li>
                  <li>Smoking and consuming food and drinks are not allowed inside the historical sites</li>
                  <li>Please be ready at your hotel lobby 15 minutes before the pickup time</li>
                  <li>Children under 8 years are not recommended to participate in this tour</li>
                  <li>Wheelchair and stroller access is not available</li>
                  <li>In case of bad weather, some outdoor activities may be cancelled</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveDayTourPackage;