
import React, { useState } from 'react';
import { Check, X, Users, Calendar, MapPin, Camera, MessageSquare, TreePine, Binoculars, Mountain } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import BookingForm from './BookingForm';

const TwoDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');

  const packageRates = {
    standard: { double: 350, single: 590 },
    comfort: { double: 490, single: 650 },
    luxury: { double: 550, single: 790 }
  };

  const tourImages = [
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2020/01/udawalawe-cover-photo.gif',
      alt: 'Udawalawe National Park',
      caption: 'Witness wild elephants at Udawalawe National Park'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/05/22-768x548.avif',
      alt: 'Yala Safari',
      caption: 'Experience leopards and wildlife at Yala National Park'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/02/3-2.png',
      alt: 'Sinharaja Rainforest',
      caption: 'Trek through the ancient Sinharaja Rainforest'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2022/09/crocodile-1.gif',
      alt: 'Wildlife Safari',
      caption: 'Encounter diverse wildlife including crocodiles'
    },
    {
      url: 'https://serendipitypvt.com/wp-content/uploads/2025/02/1-1.png',
      alt: 'Galle Fort',
      caption: 'Explore the historic UNESCO World Heritage Galle Fort'
    }
  ];

  const highlights = [
    'Explore 3 most important natural habitats: Yala, Udawalawe and Sinharaja forest',
    '3-hours guided rainforest trek and learn about fauna and flora in the forest',
    'Explore the south coast pristine beaches such as Mirissa, Unawatuna and Hikkaduwa',
    'Guided walking tour of Galle Fort and learn about the rich historical past',
    'Exploring south coast and west coast beaches'
  ];

  const inclusions = [
    'Hotel pick-up and drop off from western province',
    '1 night accommodation based on a standard tourist hotel',
    '1 Breakfast',
    '1 Dinner',
    'Entire ground transportation in an AC vehicle',
    'Tour guide',
    'Guided walking tour of Sinharaja rainforest (3 hours)',
    'Sightseeing tour of west coast and south coast beaches',
    'All inclusive guided walking tour of ancient Galle Fort',
    'Highway toll',
    'All taxes'
  ];

  const exclusions = [
    'Personal expenses such as tips, telephone',
    'Entrance fees to Udawalawe national park',
    'Entrance fees to Yala national park',
    'Entrance fees to Sinharaja rainforest',
    '4 Wheel drive jeeps for 2 safaris (Yala and Udawalawe)'
  ];

  const whatToBring = [
    'Comfortable shoes',
    'Hiking shoes',
    'Sunscreen',
    'Comfortable clothes',
    'Long-sleeved shirt',
    'Long pants',
    'Passport, copy accepted',
    'Outdoor clothing'
  ];

  const hotels = {
    standard: 'Raintree by Oakray',
    comfort: 'Chaarya Resort',
    luxury: 'Jetwing Yala'
  };

  const itinerary = [
    {
      day: 1,
      title: 'Colombo - Sinharaja - Udawalawe - Yala',
      activities: [
        'Meet and greet by your guide and drive to Sinharaja rainforest',
        '3-hour guided jungle trek with nature guide',
        'Learn about hundreds of tropical fauna and flora',
        'Drive to Udawalawe National Park',
        'Udawalawe safari in 4-wheel drive jeep',
        'See wild elephants, crocodiles, buffaloes, and jackals',
        'Drive to Tissamharama/Yala for dinner and overnight stay'
      ]
    },
    {
      day: 2,
      title: 'Yala - Mirissa - Galle - Colombo',
      activities: [
        'Early morning Yala National Park safari (4 hours)',
        'Spot leopards, black panthers, crocodiles, elephants, and monkeys',
        'Drive to Galle Fort via southern coastal belt',
        'Stops at pristine beaches along the way',
        'Guided walking tour of ancient Galle Fort',
        'Learn about important monuments and history',
        'Return to Colombo hotel'
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
          Sri Lanka Green Bless 2-Day Tour
        </h2>
        <p className="text-xl text-blue-700 max-w-4xl mx-auto">
          A 2-day guided tour with 2 National Park Safaris and a 3-hour rainforest trek in one of the largest rainforests in the world. Explore the south coast beaches with Galle Fort, Mirissa, and Hikkaduwa.
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

          {/* Itinerary */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-6">2-Day Itinerary</h3>
            <div className="space-y-6">
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
            </div>
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
                    Hotel: {hotels[pkg]}
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
                  <Calendar className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Cancel up to 24 hours in advance for a full refund</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Users className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Live tour guide: English, German</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Binoculars className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Private group tour</span>
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
                  2 days
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
                <span className="text-blue-700">Hotel</span>
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
                <strong>Note:</strong> Entrance fees to national parks and jeep rentals for safaris are not included.
              </p>
            </div>

            <BookingForm 
              packageType={`2day-${selectedPackage}`}
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

export default TwoDayTourPackage;
