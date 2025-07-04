import React, { useState } from 'react';
import { Check, X, Users, Calendar, MapPin, Camera, MessageSquare, TreePine, Binoculars, Mountain, Train, Car } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import BookingForm from './BookingForm';

const TenDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');

  const packageRates = {
    standard: { double: 850, single: 1349 },
    comfort: { double: 1250, single: 1699 },
    luxury: { double: 1690, single: 1999 }
  };

  const tourImages = [
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2024/07/sigiriya-rock-sri-lanka.jpg',
      alt: 'Sigiriya Rock Fortress',
      caption: 'Climb the ancient Sigiriya Rock Fortress, the "Eighth Wonder of the World"'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/22-768x548.avif',
      alt: 'Yala Safari',
      caption: 'Spot leopards and elephants on exciting safaris at Yala National Park'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2024/03/kandy-temple-tooth-relic.jpg',
      alt: 'Temple of the Tooth Relic',
      caption: 'Visit the sacred Temple of the Tooth Relic in Kandy'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2024/09/ella-nine-arch-bridge.jpg',
      alt: 'Nine Arch Bridge Ella',
      caption: 'Experience the scenic hill country train ride to Ella'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/02/1-1.png',
      alt: 'Galle Fort',
      caption: 'Explore the historic UNESCO World Heritage Galle Fort'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/59-1.avif',
      alt: 'Sri Lankan Adventure',
      caption: 'Discover the natural beauty and cultural richness of Sri Lanka'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/58-1.avif',
      alt: 'Mountain Landscapes',
      caption: 'Marvel at the breathtaking mountain vistas and tea plantations'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/52.avif',
      alt: 'Cultural Heritage',
      caption: 'Immerse yourself in Sri Lanka\'s rich cultural heritage'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/51.avif',
      alt: 'Ancient Temples',
      caption: 'Visit magnificent ancient temples and archaeological sites'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/48.avif',
      alt: 'Wildlife Safari',
      caption: 'Experience thrilling wildlife encounters in national parks'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/23.avif',
      alt: 'Beach Paradise',
      caption: 'Relax on pristine beaches along the southern coastline'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/22-1.avif',
      alt: 'Hill Country',
      caption: 'Journey through the scenic hill country and tea estates'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/18-1.avif',
      alt: 'Local Culture',
      caption: 'Experience authentic Sri Lankan culture and traditions'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/10-2.avif',
      alt: 'Natural Wonders',
      caption: 'Explore stunning waterfalls and natural landscapes'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/17.avif',
      alt: 'Adventure Activities',
      caption: 'Enjoy exciting adventures and outdoor activities'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/96.avif',
      alt: 'Scenic Views',
      caption: 'Capture unforgettable moments with spectacular scenic views'
    }
  ];

  const highlights = [
    "Witness Sri Lanka's Cultural Triangle and its 5 most important historical cities",
    "See leopards, elephants, crocodiles and many more on wildlife safaris",
    "Get into the popular hill country train of Sri Lanka and enjoy mountain scenery",
    "Explore the pristine beaches on the west coast and south coast",
    "Spend a day in the heritage city of Kandy; take leisurely stroll around Kandy Lake"
  ];

  const inclusions = [
    '10-day (9-night) accommodation in standard tourist hotels',
    '9 breakfasts and 9 dinners',
    'Anuradhapura temple tour',
    'Polonnaruwa ancient city tour',
    'Entrance fees to Dambulla Temple and Kandy temple',
    'Minneriya National Park Safari and Yala Safari',
    'Guided Sigiriya rock fort hike',
    'Ramboda and Ravana waterfalls',
    'All-inclusive hill country train trip',
    'Tea plantation tour with factory visit',
    'Galle fort tour and Ella sightseeing tour',
    'Air-conditioned private vehicle transportation',
    'Meet-and-greet services with airport assistance',
    'Chauffeur meals & accommodation'
  ];

  const exclusions = [
    'Lunch meals',
    'Entrance fees to Sigiriya Rock, Anuradhapura, Polonnaruwa, Minneriya, Peradeniya Botanical Garden, and Yala National Park',
    'Flight tickets and visa charges',
    'Personal expenses like laundry charges and tips',
    '4x4 Jeep rentals for safaris',
    'Dinner at Hotel in Ella',
    'Rural village tour with cooking class'
  ];

  const whatToBring = [
    'Comfortable shoes',
    'Hiking shoes',
    'Sunscreen',
    'Comfortable clothes',
    'Long-sleeved shirt',
    'Long pants',
    'Passport (copy accepted)',
    'Outdoor clothing'
  ];

  const hotels = {
    standard: '3-star hotels',
    comfort: '4-star hotels',
    luxury: '5-star hotels'
  };

  const itinerary = [
    {
      day: 1,
      title: 'Colombo - Anuradhapura - Sigiriya',
      activities: [
        'Welcome by English-speaking driver from hotels or airports in Colombo',
        'Drive to Sigiriya with visit to Anuradhapura ancient city en route',
        'Overnight at Sigiriya'
      ]
    },
    {
      day: 2,
      title: 'Sigiriya Rock Fortress & Minneriya Safari',
      activities: [
        'Early morning visit to Sigiriya Rock Fortress - "Eighth Wonder of the World"',
        'UNESCO World Heritage site exploration',
        'Evening Minneriya National Park 4x4 safari',
        'Overnight at Sigiriya'
      ]
    },
    {
      day: 3,
      title: 'Polonnaruwa Ancient City & Village Tour',
      activities: [
        'Drive to Polonnaruwa ancient city',
        'Explore the 10th century historical city',
        'Village tour in Habarana',
        'Overnight at Sigiriya'
      ]
    },
    {
      day: 4,
      title: 'Sigiriya - Dambulla - Kandy',
      activities: [
        'Visit Dambulla Golden Temple',
        'Stop at Spice/Herbal Garden',
        'Visit Nalanda Gedige and Hindu temple',
        'Drive to Kandy for overnight stay'
      ]
    },
    {
      day: 5,
      title: 'Kandy City Tour',
      activities: [
        'Visit Royal Botanical Garden and Gem Museum',
        'Explore Kandy Lake and downtown Kandy',
        'Visit Temple of the Tooth Relic',
        'Witness traditional Kandyan cultural show',
        'Overnight at Kandy'
      ]
    },
    {
      day: 6,
      title: 'Kandy - Nuwara Eliya',
      activities: [
        'Visit Ramboda Falls',
        'Tea plantation and factory tour',
        'Nuwara Eliya city tour',
        'Overnight in Nuwara Eliya'
      ]
    },
    {
      day: 7,
      title: 'Nuwara Eliya - Ella Train Journey',
      activities: [
        'Visit Gregory Lake and Victoria Park Garden',
        'Scenic hill country train ride to Ella',
        'Evening climb to Little Adams Peak viewpoint',
        'Overnight at Ella'
      ]
    },
    {
      day: 8,
      title: 'Ella - Yala',
      activities: [
        'Visit Rawana waterfall and Buduruwagala Rock Temple',
        'Drive to Tissamaharama',
        'Evening safari at Yala or Udawalawe National Park',
        'Overnight in Tissamaharama'
      ]
    },
    {
      day: 9,
      title: 'Yala - South-west Coast',
      activities: [
        'Drive to south coast beach resort',
        'Evening leisure at the beach',
        'Overnight stay on south-west coast'
      ]
    },
    {
      day: 10,
      title: 'South Coast - Galle - Bentota - Colombo',
      activities: [
        'Visit historic Galle Fort',
        'Stop at Bentota Beach',
        'Colombo city tour',
        'Transfer to Colombo Airport'
      ]
    }
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
          Sri Lanka Private 10-Day Round Tour
        </h2>
        <p className="text-xl text-blue-700 max-w-4xl mx-auto">
          Car, Guide, Hotels, Food - A grand tour offering ancient wonders, pristine beaches, lush landscapes, and vibrant culture across Sri Lanka's most spectacular destinations.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
        <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">Tour Highlights</h3>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {tourImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-sm p-4 font-medium">{image.caption}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tour Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Highlights */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
              <TreePine className="w-5 h-5 mr-2 text-green-600" />
              Tour Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800 text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary with Tabs */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
              <Car className="w-5 h-5 mr-2 text-orange-500" />
              10-Day Detailed Itinerary
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
                  <div className="text-sm mb-2">
                    <div>${rates.double} p.p (twin sharing)</div>
                    <div>${rates.single} (single rate)</div>
                  </div>
                  <div className="text-xs opacity-80">
                    Hotels: {hotels[pkg]}
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
                  <p>Single traveler rate applies</p>
                ) : (
                  <p>Twin sharing rate: ${packageRates[selectedPackage].double} per person</p>
                )}
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Comments & Special Requests
            </h3>
            <div className="space-y-4">
              <Label htmlFor="comments" className="text-blue-900 font-medium">
                Tell us about your preferences, dietary requirements, or any special requests:
              </Label>
              <Textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="e.g., vegetarian meals, accessibility needs, celebration occasions, preferred activities..."
                rows={4}
                className="bg-white/70 text-blue-900 placeholder-blue-500 border border-blue-300 focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <p className="text-blue-700 text-sm">
                This information will help us customize your tour experience to better suit your needs.
              </p>
            </div>
          </div>

          {/* What to Bring & Important Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Mountain className="w-5 h-5 mr-2 text-orange-500" />
                What to Bring
              </h3>
              <ul className="space-y-2">
                {whatToBring.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Important Information</h3>
              <div className="space-y-3 text-blue-800 text-sm">
                <div className="flex items-start space-x-2">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Not suitable for people with back problems</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Train className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Train seats subject to availability (50% chance during peak season)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Calendar className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Cancel up to 24 hours in advance for a full refund</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Binoculars className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Private group tour with English-speaking guide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Check className="w-5 h-5 mr-2 text-green-600" />
                Inclusions
              </h3>
              <ul className="space-y-2">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <X className="w-5 h-5 mr-2 text-red-500" />
                Exclusions
              </h3>
              <ul className="space-y-2">
                {exclusions.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 h-fit border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Camera className="w-5 h-5 mr-2" />
            Book Your Adventure
          </h3>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-700">Duration</span>
                <span className="font-semibold flex items-center text-blue-900">
                  <Calendar className="w-4 h-4 mr-1" />
                  10 days
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-700">Travelers</span>
                <span className="font-semibold text-blue-900">{travelers} person{travelers > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-700">Package</span>
                <span className="font-semibold capitalize text-blue-900">{selectedPackage}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-700">Hotels</span>
                <span className="font-semibold text-sm text-blue-900">{hotels[selectedPackage]}</span>
              </div>
            </div>

            <div className="border-t border-blue-200 pt-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-gray-800">Total Cost</span>
                <span className="text-green-600">${getTotalPrice().toLocaleString()}</span>
              </div>
              <p className="text-blue-600 text-sm mt-1">
                {travelers === 1 ? 'Single rate' : `$${packageRates[selectedPackage].double} per person`}
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> Entrance fees to national parks and jeep rentals for safaris are additional costs.
              </p>
            </div>

            <BookingForm 
              packageType={`10day-${selectedPackage}`}
              travelers={travelers}
              totalCost={getTotalPrice()}
              initialComments={comments}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenDayTourPackage;
