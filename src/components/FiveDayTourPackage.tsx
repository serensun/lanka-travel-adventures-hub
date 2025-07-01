import React, { useState } from 'react';
import { Check, X, Users, Calendar, MapPin, Camera, AlertTriangle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import BookingForm from './BookingForm';

const FiveDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);

  const packageRates = {
    standard: { double: 449, single: 799 },
    comfort: { double: 750, single: 1099 },
    luxury: { double: 1190, single: 1500 }
  };

  const tourImages = [
    {
      url: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600',
      alt: 'Sigiriya Rock Fortress',
      caption: 'Climb the majestic Sigiriya Rock Fortress with ancient frescoes'
    },
    {
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600',
      alt: 'Temple of the Sacred Tooth',
      caption: 'Experience the sacred ceremony at Temple of the Tooth Relic'
    },
    {
      url: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600',
      alt: 'Dambulla Golden Temple',
      caption: 'Discover the magnificent Dambulla Golden Temple caves'
    },
    {
      url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600',
      alt: 'Tea Plantation',
      caption: 'Tour authentic tea plantations and factories in Nuwara Eliya'
    },
    {
      url: 'https://images.unsplash.com/photo-1580500550469-8b22ad62f4f2?w=800&h=600',
      alt: 'Nine Arches Bridge',
      caption: 'Walk across the iconic Nine Arches Bridge in Ella'
    },
    {
      url: 'https://images.unsplash.com/photo-1571919743851-c8c19ff4d0c3?w=800&h=600',
      alt: 'Pinnawala Elephant Orphanage',
      caption: 'Meet rescued elephants at Pinnawala Elephant Orphanage'
    },
    {
      url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600',
      alt: 'Galle Fort',
      caption: 'Explore the UNESCO World Heritage Galle Fort'
    },
    {
      url: 'https://images.unsplash.com/photo-1583997052301-0042b33fc598?w=800&h=600',
      alt: 'Hill Country Train',
      caption: 'Journey through scenic landscapes on the hill country train'
    }
  ];

  const hotelsByPackage = {
    standard: {
      kandy: 'Swiss Residence Hotel Kandy',
      ella: 'Alta Vista Hotel Ella',
      galle: 'South Lake Resort Galle'
    },
    comfort: {
      kandy: 'Earls Regent Hotel Kandy',
      ella: 'Hotel MOI Ella',
      bentota: 'Earls Reef Hotel Bentota'
    },
    luxury: {
      kandy: 'Mahaweli Reach Hotel Kandy',
      ella: '98 Acres Hotel Ella',
      galle: 'Araliya Beach Galle'
    }
  };

  const inclusions = [
    '5 Days (4 nights) accommodation in standard hotels',
    '4 Breakfasts',
    'Guided hike at Sigiriya Rock Fortress with frescoes',
    'Dambulla Golden Temple Tour',
    'Tooth Temple tour with ceremony',
    'Pinnawala Elephant Park',
    'Complete ground transportation as per itinerary',
    'English-speaking local tour guide',
    'All government taxes',
    'Airport meeting arrangements',
    'Entrance fees to spice/herbal garden',
    'Guided walking tour of Galle Fort',
    'Guided sightseeing tour of Ella with Mini Adams Peak and Nine Arch Bridge',
    'Kandy sightseeing tour',
    'Nuwara Eliya sightseeing tour: Gregory Lake Esplanade',
    'Tea plantation tour with factory visits',
    'Mineral water (1.5 liters) per person per day',
    'All expenses for hill country train',
    '1 serving of natural King Coconut'
  ];

  const exclusions = [
    'Entrance fees to Sigiriya Rock (USD 30)',
    'Entrance fees to Dambulla Golden Temple (USD 7)',
    'Entrance fees to Pinnawala Elephant Orphanage (USD 15)',
    'Entrance fees to Tooth Relic Temple (USD 7)',
    'Entrance fees to Udawalawe National Park and Jeep Hire (USD 80)',
    'Local lunch and Sri Lankan curry cooking experience',
    'Guided slow boat river safari and mangrove lagoon tour',
    'Lunch and dinner',
    'Drinks',
    'Tips and gratuities'
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

  const itinerary = [
    {
      day: 1,
      title: 'Colombo - Kandy',
      activities: [
        'Meet and greet with Seerendipity Tours representative',
        'Drive to hotel in Kandy',
        'Stop at Pinnawala Elephant Park en route',
        'Afternoon Kandy sightseeing tour',
        'Visit Temple of the Tooth Relic',
        'Kandyan cultural show'
      ],
      overnight: 'Hotel in Kandy'
    },
    {
      day: 2,
      title: 'Kandy - Sigiriya - Kandy',
      activities: [
        'Early breakfast',
        'Visit Sigiriya Rock Fortress',
        'Explore Dambulla Golden Temple',
        'Discover 2 iconic cultural and historical monuments'
      ],
      overnight: 'Hotel in Kandy'
    },
    {
      day: 3,
      title: 'Kandy - Nuwara Eliya - Ella',
      activities: [
        'Drive to hotel in Ella after breakfast',
        'Stop at tea factory and garden in Nuwara Eliya',
        'Visit downtown Nuwara Eliya',
        'Gregory Lake Esplanade',
        'Sita Amman Temple',
        'Scenic hill country train from Nanu Oya to Ella'
      ],
      overnight: 'Hotel in Ella'
    },
    {
      day: 4,
      title: 'Ella - Udawalawe - Galle',
      activities: [
        'Early morning Ella sightseeing tour',
        'Visit Ella Rock, Mini Adams Peak, and Nine Arch Bridge',
        'Continue to Udawalawe National Park for wildlife watch'
      ],
      overnight: 'Hotel in Galle'
    },
    {
      day: 5,
      title: 'Galle - Bentota - Kalutara - Colombo',
      activities: [
        'Guided walking tour of Galle Fort after breakfast',
        'Drive to Colombo hotel',
        'Stop at Hikkaduwa Beach and Bentota Beach',
        'Boat tour of Bentota River to see fauna and flora'
      ],
      overnight: 'Tour ends in Colombo'
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
          5-Day Sri Lanka Cultural & Nature Tour
        </h2>
        <p className="text-xl text-blue-100 max-w-4xl mx-auto">
          Experience the best of Sri Lanka's cultural triangle, hill country, and southern coast. 
          From ancient rock fortresses to pristine beaches, this comprehensive tour covers it all!
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
            <h3 className="text-xl font-bold text-white mb-6">5-Day Detailed Itinerary</h3>
            <div className="space-y-6">
              {itinerary.map((day) => (
                <div key={day.day} className="border-l-4 border-orange-300 pl-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-orange-300 text-blue-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {day.day}
                    </div>
                    <h4 className="text-white font-semibold text-lg">{day.title}</h4>
                  </div>
                  <ul className="space-y-2 mb-2">
                    {day.activities.map((activity, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-100 text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-orange-200 text-sm font-medium">
                    Overnight: {day.overnight}
                  </p>
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

          {/* Hotels */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Hotels Included</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-blue-100">Kandy:</span>
                <span className="text-white font-medium">{hotelsByPackage[selectedPackage].kandy}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-100">Ella:</span>
                <span className="text-white font-medium">{hotelsByPackage[selectedPackage].ella}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-100">Galle/Bentota:</span>
                <span className="text-white font-medium">
                  {hotelsByPackage[selectedPackage].galle || hotelsByPackage[selectedPackage].bentota}
                </span>
              </div>
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

          {/* Important Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
              Important Information
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">What to Bring:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {whatToBring.map((item, index) => (
                    <span key={index} className="text-blue-100 text-sm">• {item}</span>
                  ))}
                </div>
              </div>
              <div className="bg-red-500/20 border border-red-400 rounded-lg p-3">
                <p className="text-red-200 text-sm">
                  <strong>Not suitable for:</strong> People with back problems
                </p>
              </div>
              <div className="bg-green-500/20 border border-green-400 rounded-lg p-3">
                <p className="text-green-200 text-sm">
                  <strong>Cancellation Policy:</strong> Cancel up to 24 hours in advance for a full refund
                </p>
              </div>
              <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-3">
                <p className="text-blue-200 text-sm">
                  <strong>Tour Guide:</strong> Live guide available in English and German | Private group
                </p>
              </div>
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
                  5 days
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
                <strong>Note:</strong> Additional entrance fees (approximately USD 139-159 per person) are not included.
              </p>
            </div>

            <BookingForm 
              packageType={`5-day-${selectedPackage}`}
              travelers={travelers}
              totalCost={getTotalPrice()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveDayTourPackage;
