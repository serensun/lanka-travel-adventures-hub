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
import gallery1 from '@/assets/sri-lanka-7-day-1.avif';
import gallery2 from '@/assets/sri-lanka-7-day-2.avif';
import gallery3 from '@/assets/sri-lanka-7-day-3.avif';
import gallery4 from '@/assets/sri-lanka-7-day-4.avif';
import gallery5 from '@/assets/sri-lanka-7-day-5.avif';
import gallery6 from '@/assets/sri-lanka-7-day-6.avif';
import gallery7 from '@/assets/sri-lanka-7-day-7.avif';
import gallery8 from '@/assets/sri-lanka-7-day-8.avif';
import heroImage from '@/assets/sri-lanka-7-day-hero.avif';

const AllInSriLankaSevenDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);

  const packageRates = {
    standard: { double: 820, single: 1050 },
    comfort: { double: 1100, single: 1590 },
    luxury: { double: 1390, single: 1895 }
  };

  const galleryImages = [
    {
      url: heroImage,
      alt: 'Sri Lanka 7-Day Cultural Heritage Tour',
      caption: 'Immerse yourself in Sri Lanka\'s living heritage'
    },
    {
      url: gallery1,
      alt: 'Cultural Triangle Heritage',
      caption: 'Discover Sri Lanka\'s Cultural Triangle with its wealth of historic treasures'
    },
    {
      url: gallery2,
      alt: 'Wildlife Safari Adventure',
      caption: 'Experience incredible wildlife sightings at Yala and Minneriya National Parks'
    },
    {
      url: gallery3,
      alt: 'Hill Country Train Journey',
      caption: 'Journey through picturesque highlands aboard the charming blue train'
    },
    {
      url: gallery4,
      alt: 'Galle Fort Colonial Charm',
      caption: 'Wander through the beautiful Galle Fort and Sri Lanka\'s stunning southern coastline'
    },
    {
      url: gallery5,
      alt: 'Bentota Mangrove Safari',
      caption: 'Take a boat safari in Bentota to spot crocodiles, monkeys, and monitor lizards'
    },
    {
      url: gallery6,
      alt: 'Ancient Temples and Monuments',
      caption: 'Explore ancient temples, palaces and stupas that date back over 2,000 years'
    },
    {
      url: gallery7,
      alt: 'Scenic Tea Plantations',
      caption: 'Experience lush mangrove forests and scenic tea country landscapes'
    },
    {
      url: gallery8,
      alt: 'Beach Paradise and Culture',
      caption: 'Enjoy golden beaches and rich cultural heritage in one journey'
    }
  ];

  const highlights = [
    'Discover Sri Lanka\'s Cultural Triangle with its wealth of historic and cultural treasures.',
    'Experience incredible wildlife sightings at Yala and Minneriya National Parks.',
    'Journey through picturesque highlands aboard the charming blue train.',
    'Wander through the beautiful Galle Fort and along Sri Lanka\'s stunning southern coastline.',
    'Take a boat safari in Bentota to spot crocodiles, monkeys, monitor lizards and lush mangrove forests.'
  ];

  const inclusions = [
    '6 night accommodation in standard hotels',
    '6 Breakfast',
    'Entire ground transportation with local driver cum guide',
    'Air-conditioned vehicle',
    'GST/VAT/ Service Charges',
    'Water Bottle on Arrival (One Mineral water bottles per person /per day)',
    'English-speaking chauffeur, guide',
    'City tour & Sightseeing',
    'Meet & greet services with assistance at the airport',
    'Train ticket'
  ];

  const exclusions = [
    'Lunch and dinner',
    'Entrance fees and activity cost',
    'Other Exclusions (Flight tickets/ Visa Charges)',
    'Any expenses of personal nature like laundry charges, tips, etc.',
    'Early check-in & late check-out',
    '4 x 4 Jeep for Safaris',
    'Anything not mentioned under inclusions above'
  ];

  const itineraryData = [
    { 
      day: 1, 
      title: "Arrival & Ancient Wonders", 
      time: "Full Day",
      highlights: "Anuradhapura UNESCO site, Ancient temples and stupas",
      description: "• Arrive and meet your Serendipity Tours guide\n• Travel to Sigiriya with a stop at UNESCO-listed Anuradhapura - explore its ancient temples, palaces and stupas\n• Overnight in Sigiriya"
    },
    { 
      day: 2, 
      title: "Cultural Triangle to Hill Capital", 
      time: "Full Day",
      highlights: "Sigiriya Rock Fortress, Dambulla Cave Temple, Hindu temple visit",
      description: "• Morning visit to iconic Sigiriya Rock Fortress\n• Stop at Dambulla's Golden Cave Temple and Matale's spice gardens\n• Evening arrival in Kandy after visiting a colorful Hindu temple\n• Overnight in Kandy"
    },
    { 
      day: 3, 
      title: "Tea Country & Scenic Rail Journey", 
      time: "Full Day",
      highlights: "Sacred Tooth Relic Temple, Tea plantations, Scenic train to Ella",
      description: "• Morning at Kandy's Sacred Tooth Relic Temple\n• Travel through tea plantations with factory visit\n• Explore \"Little England\" - Nuwara Eliya's colonial charm\n• Afternoon scenic train to Ella through breathtaking landscapes\n• Overnight in Ella"
    },
    { 
      day: 4, 
      title: "Highlands Adventure & Wildlife Safari", 
      time: "Full Day",
      highlights: "Little Adam's Peak, Nine Arch Bridge, Yala National Park",
      description: "• Sunrise hike at Little Adam's Peak\n• Visit Ella Rock and Nine Arch Bridge\n• Travel to Yala via Ravana Falls and Sita Temple\n• Afternoon Yala National Park safari\n• Overnight in Yala"
    },
    { 
      day: 5, 
      title: "Wildlife to Beach Retreat", 
      time: "Full Day",
      highlights: "Udawalawe National Park, Sinharaja Rainforest, Bentota beaches",
      description: "• Morning Udawalawe National Park safari\n• Drive through Sinharaja Rainforest biosphere\n• Arrive at Bentota's golden beaches\n• Overnight in Bentota"
    },
    { 
      day: 6, 
      title: "Southern Coast Exploration", 
      time: "Full Day",
      highlights: "Bentota watersports, Galle Fort, Hikkaduwa",
      description: "• Full day exploring Bentota watersports, Galle Fort and Hikkaduwa\n• Discover the Dutch-colonial charm of Galle\n• Overnight in Bentota"
    },
    { 
      day: 7, 
      title: "Colombo & Departure", 
      time: "Half Day",
      highlights: "Colombo city tour, Shopping, Airport transfer",
      description: "• Morning transfer to Colombo\n• City tour including shopping and landmarks\n• Airport transfer for departure"
    }
  ];

  const itinerary = [
    { day: 1, title: 'Arrival & Ancient Wonders', activities: ['Meet & Greet Service', 'Anuradhapura UNESCO Site', 'Ancient Temples & Stupas', 'Transfer to Sigiriya'] },
    { day: 2, title: 'Cultural Triangle to Hill Capital', activities: ['Sigiriya Rock Fortress', 'Dambulla Golden Cave Temple', 'Matale Spice Gardens', 'Hindu Temple Visit'] },
    { day: 3, title: 'Tea Country & Scenic Rail Journey', activities: ['Sacred Tooth Relic Temple', 'Tea Plantation & Factory', 'Nuwara Eliya City Tour', 'Scenic Train to Ella'] },
    { day: 4, title: 'Highlands Adventure & Wildlife Safari', activities: ['Little Adam\'s Peak Hike', 'Nine Arch Bridge', 'Ravana Falls', 'Yala National Park Safari'] },
    { day: 5, title: 'Wildlife to Beach Retreat', activities: ['Udawalawe National Park', 'Sinharaja Rainforest Drive', 'Bentota Beach Arrival', 'Beach Relaxation'] },
    { day: 6, title: 'Southern Coast Exploration', activities: ['Bentota Watersports', 'Galle Fort Tour', 'Hikkaduwa Beach', 'Dutch Colonial Heritage'] },
    { day: 7, title: 'Colombo & Departure', activities: ['Colombo City Tour', 'Shopping Tour', 'Landmark Visits', 'Airport Transfer'] }
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
      case 'comfort': return 'from-blue-600 to-blue-800';
      case 'luxury': return 'from-blue-700 to-blue-900';
      default: return 'from-blue-500 to-blue-700';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          All in Sri Lanka 7-days tour, history, culture, nature
        </h2>
        <p className="text-xl text-blue-700 max-w-4xl mx-auto">
          Immerse yourself in Sri Lanka's living heritage – wander through timeless ruins, bask on palm-fringed shores, and encounter wild elephants on thrilling safaris. Your journey unfolds at your own pace, with the freedom of a private chauffeur-driven tour.
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
            Duration: 6 days
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Small group: Private tour participants
          </Badge>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-yellow-800 text-sm">
            <strong>Free cancellation:</strong> Cancel up to 24-hours in advance for a full refund<br/>
            <strong>Reserve now & pay later:</strong> Keep your travel plans flexible — book your spot and pay nothing today.<br/>
            <strong>Live tour guide:</strong> English, Italy, French<br/>
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
              7-Day Detailed Itinerary
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
            <div className="grid md:grid-cols-3 gap-4">
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
                  <span>Single traveler rate applies</span>
                ) : (
                  <span>Twin sharing rate applies for {travelers} travelers</span>
                )}
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
              placeholder="Share any special requests, dietary requirements, or questions..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="bg-white/70 text-blue-900 placeholder-blue-500 border border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              rows={4}
            />
          </div>

          {/* Includes/Excludes */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/70 backdrop-blur-sm rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <Check className="w-5 h-5 mr-2" />
                Includes
              </h3>
              <ul className="space-y-2">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50/70 backdrop-blur-sm rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <X className="w-5 h-5 mr-2" />
                Excludes
              </h3>
              <ul className="space-y-2">
                {exclusions.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-red-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-amber-50/70 backdrop-blur-sm rounded-xl p-6 border border-amber-200">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Important Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">What to bring:</h4>
                <p className="text-amber-700 text-sm">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Know before you go:</h4>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• Wear comfortable walking shoes as there is a moderate amount of walking involved</li>
                  <li>• It is recommended to bring a hat, sunscreen, and a camera</li>
                  <li>• Smoking and consuming food and drinks are not allowed inside the historical sites</li>
                  <li>• Please be ready at your hotel lobby 15 minutes before the pickup time</li>
                  <li>• Children under 8 years are not recommended to participate in this tour</li>
                  <li>• Wheelchair and stroller access is not available</li>
                  <li>• In case of bad weather, some outdoor activities may be cancel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 border border-blue-300 sticky top-4">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Booking Summary</h3>
            
            <div className="space-y-4">
              <div className="bg-white/70 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-700 font-medium">Package:</span>
                  <span className="text-blue-900 capitalize font-semibold">{selectedPackage}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-700 font-medium">Travelers:</span>
                  <span className="text-blue-900 font-semibold">{travelers}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-700 font-medium">Duration:</span>
                  <span className="text-blue-900 font-semibold">7 days</span>
                </div>
                <hr className="my-3 border-blue-200" />
                <div className="flex justify-between items-center">
                  <span className="text-blue-900 font-bold text-lg">Total:</span>
                  <span className="text-blue-900 font-bold text-lg">${getTotalPrice()}</span>
                </div>
              </div>

              <BookingForm 
                packageType={`7-day-${selectedPackage}`}
                travelers={travelers}
                totalCost={getTotalPrice()}
                initialComments={comments}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInSriLankaSevenDayTourPackage;