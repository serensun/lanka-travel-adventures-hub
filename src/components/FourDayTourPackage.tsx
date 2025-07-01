import React, { useState } from 'react';
import { Check, X, Users, Calendar, MapPin, Camera, MessageSquare } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import BookingForm from './BookingForm';

const FourDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');

  const packageRates = {
    standard: { double: 499, single: 899 },
    comfort: { double: 690, single: 999 },
    luxury: { double: 750, single: 1300 }
  };

  const tourImages = [
    {
      url: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600',
      alt: 'Sigiriya Rock Fortress',
      caption: 'Climb the iconic Sigiriya Rock Fortress'
    },
    {
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600',
      alt: 'Temple of the Sacred Tooth',
      caption: 'Visit the sacred Temple of the Tooth Relic in Kandy'
    },
    {
      url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600',
      alt: 'Tea Plantation',
      caption: 'Explore lush tea plantations in the hill country'
    },
    {
      url: 'https://images.unsplash.com/photo-1580500550469-8b22ad62f4f2?w=800&h=600',
      alt: 'Nine Arches Bridge',
      caption: 'Marvel at the famous Nine Arches Bridge in Ella'
    },
    {
      url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600',
      alt: 'Galle Fort',
      caption: 'Discover the historic Galle Fort'
    },
    {
      url: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600',
      alt: 'Unawatuna Beach',
      caption: 'Relax on the golden sands of Unawatuna Beach'
    }
  ];

  const inclusions = [
    'Hotel pickup and drop-off',
    'Air-conditioned transportation',
    '3-nights of accommodation in standard hotels',
    '3 breakfasts',
    '3 Dinners',
    'Tea factory visit',
    'Waterfall visit',
    'All inclusive hill country train trip',
    'Fuel surcharge',
    'Airport/departure tax',
    'Parking fees'
  ];

  const exclusions = [
    'Meals and beverages (unless specified)',
    'Gratuities (optional)',
    'Personal expenses',
    'Entrance tickets to attractions (around US$ 200 P.P)'
  ];

  const itinerary = [
    {
      day: 1,
      title: 'Discover the Cultural Triangle',
      activities: [
        'Visit Dambulla Cave Temple',
        'Explore ancient city of Polonnaruwa',
        'Minneriya National Park safari'
      ]
    },
    {
      day: 2,
      title: 'Explore Sigiriya, Kandy and the Hill Country',
      activities: [
        'Climb Sigiriya Rock (1,200 steps)',
        'Visit Temple of the Sacred Tooth Relic',
        'Stroll around Kandy Lake',
        'Tour Peradeniya Botanical Gardens'
      ]
    },
    {
      day: 3,
      title: 'Waterfall, Rivers, Tea Gardens and Hill Country Wonders',
      activities: [
        'Visit Ramboda Falls and Ambuluwawa Tower',
        'Tea plantation and factory tour',
        'Explore Nuwara Eliya ("Little England")',
        'Hill country train journey',
        'Visit Nine Arches Bridge in Ella',
        'See Ravana Falls'
      ]
    },
    {
      day: 4,
      title: 'Unwind on the South Coast',
      activities: [
        'Early afternoon safari',
        'Visit historic Galle Fort (UNESCO site)',
        'Relax at Unawatuna Beach',
        'Optional coral reef exploration at Hikkaduwa'
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
      case 'standard': return 'from-green-500 to-blue-500';
      case 'comfort': return 'from-blue-500 to-purple-500';
      case 'luxury': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          4-Day Sri Lanka Whirlwind Tour
        </h2>
        <p className="text-xl text-blue-100 max-w-4xl mx-auto">
          Experience the mystique of the Cultural Triangle, climb Sigiriya rock, witness majestic Asian elephants at Minneriya, 
          savour lush tea gardens, and unwind on golden sands of Unawatuna Beach. Your perfect Insta-worthy adventure awaits!
        </p>
      </div>

      {/* Image Gallery */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Tour Highlights</h3>
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
          {/* Itinerary */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">4-Day Itinerary</h3>
            <div className="space-y-6">
              {itinerary.map((day) => (
                <div key={day.day} className="border-l-4 border-orange-300 pl-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-orange-300 text-blue-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {day.day}
                    </div>
                    <h4 className="text-white font-semibold text-lg">{day.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {day.activities.map((activity, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-100 text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Package Selection */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Select Package Type</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(packageRates).map(([pkg, rates]) => (
                <button
                  key={pkg}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`p-4 rounded-lg text-left transition-all transform hover:scale-105 ${
                    selectedPackage === pkg
                      ? `bg-gradient-to-r ${getPackageColor(pkg)} text-white shadow-lg`
                      : 'bg-white/20 text-white hover:bg-white/30'
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
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Number of Travelers (1-10)
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label htmlFor="travelers" className="text-white font-medium">
                  Travelers:
                </label>
                <input
                  id="travelers"
                  type="number"
                  min="1"
                  max="10"
                  value={travelers}
                  onChange={(e) => setTravelers(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                  className="bg-white/20 text-white placeholder-white/60 border border-white/30 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 w-20 text-center"
                />
              </div>
              <div className="text-blue-100 text-sm">
                {travelers === 1 ? (
                  <p>Single traveler rate applies</p>
                ) : (
                  <p>Twin sharing rate: ${packageRates[selectedPackage].double} per person</p>
                )}
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Comments & Special Requests
            </h3>
            <div className="space-y-4">
              <Label htmlFor="comments" className="text-white font-medium">
                Tell us about your preferences, dietary requirements, or any special requests:
              </Label>
              <Textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="e.g., vegetarian meals, accessibility needs, celebration occasions, preferred activities..."
                rows={4}
                className="bg-white/20 text-white placeholder-white/60 border border-white/30 focus:ring-2 focus:ring-white/50 resize-none"
              />
              <p className="text-blue-100 text-sm">
                This information will help us customize your tour experience to better suit your needs.
              </p>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Check className="w-5 h-5 mr-2 text-green-400" />
                Inclusions
              </h3>
              <ul className="space-y-2">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <X className="w-5 h-5 mr-2 text-red-400" />
                Exclusions
              </h3>
              <ul className="space-y-2">
                {exclusions.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Camera className="w-5 h-5 mr-2" />
            Book Your Adventure
          </h3>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Duration</span>
                <span className="font-semibold flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  4 days
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Travelers</span>
                <span className="font-semibold">{travelers} person{travelers > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Package</span>
                <span className="font-semibold capitalize">{selectedPackage}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-gray-800">Total Cost</span>
                <span className="text-green-600">${getTotalPrice().toLocaleString()}</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                {travelers === 1 ? 'Single rate' : `$${packageRates[selectedPackage].double} per person`}
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> Entrance tickets to attractions (around US$ 200 per person) are not included.
              </p>
            </div>

            <BookingForm 
              packageType={selectedPackage}
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

export default FourDayTourPackage;
