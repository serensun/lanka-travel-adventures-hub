import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X, Calendar, Users, MapPin, Star, Check, Minus, Plus } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import BookingForm from './BookingForm';
import EnhancedGallery from '@/components/ui/enhanced-gallery';

// Import gallery images
import heroImage from '@/assets/jungle-adventure-hero.avif';
import gallery1 from '@/assets/jungle-adventure-1.avif';
import gallery2 from '@/assets/jungle-adventure-2.avif';
import gallery3 from '@/assets/jungle-adventure-3.avif';
import gallery4 from '@/assets/jungle-adventure-4.avif';
import gallery5 from '@/assets/jungle-adventure-5.avif';
import gallery6 from '@/assets/jungle-adventure-6.avif';
import gallery7 from '@/assets/jungle-adventure-7.avif';
import gallery8 from '@/assets/jungle-adventure-8.avif';
import gallery9 from '@/assets/jungle-adventure-9.avif';
import gallery10 from '@/assets/jungle-adventure-10.avif';

const JungleAdventureTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');

  const packageRates = {
    standard: { twin: 475, single: 690 }
  };

  const galleryImages = [
    { src: gallery1, alt: 'Sinharaja rainforest exploration' },
    { src: gallery2, alt: 'Wildlife safari in Yala National Park' },
    { src: gallery3, alt: 'Udawalawe elephant sanctuary' },
    { src: gallery4, alt: 'Blue whale watching adventure' },
    { src: gallery5, alt: 'Galle Fort historic tour' },
    { src: gallery6, alt: 'Bentota river safari' },
    { src: gallery7, alt: 'Makandeva rainforest trek' },
    { src: gallery8, alt: 'Whitewater rafting in Kitulgala' },
    { src: gallery9, alt: 'Endemic bird species spotting' },
    { src: gallery10, alt: 'Coastal beach relaxation' }
  ];

  const highlights = [
    "Guided Rainforest Exploration: Join a 4-hour guided trek through the lush Sinharaja and Makandeva rainforests, home to exotic wildlife and rare flora.",
    "Wildlife Safari in Yala: Set out on an exciting game drive through Yala National Park to spot leopards, sloth bears, and wild elephants in their natural habitat.",
    "Elephant Spectacle at Udawalawe: Witness massive herds of elephants roaming freely in Udawalawe National Park, a sanctuary for these gentle giants.",
    "Blue Whale Watching Adventure: Embark on a thrilling boat excursion off Sri Lanka's southern coast for close encounters with magnificent blue whales.",
    "Coastal & Cultural Highlights: Discover the historic Galle Fort, relax on stunning south and west coast beaches, and enjoy a scenic river safari along the Bentota waterways."
  ];

  const inclusions = [
    "3 Nights accommodation in standard hotels",
    "3 Breakfasts",
    "Guided rainforest tour at Sinharaja and Kitulgala",
    "Guided whitewater rafting in Kitulgala",
    "Guided walking tour of Galle Fort",
    "Entire ground transportation in an air-conditioned vehicle with a local guide",
    "4-wheel-drive jeep for Yala and Udawalawe safari",
    "Bentota river safari",
    "Guided tour of spice and herbal gardens"
  ];

  const exclusions = [
    "Personal expenses",
    "Entrance fees to Udawalawe national park",
    "Entrance fees to Yala national park",
    "Entrance fees to Sinharaja rainforest",
    "Mirissa whale watching tour",
    "Tips"
  ];

  const itineraryData = [
    {
      day: 1,
      title: "Adventure Begins - Colombo to Sinharaja",
      activities: [
        "Warm welcome by your Seerendipity Tours representative",
        "Scenic 2-hour drive through picturesque countryside to Kitulgala",
        "Thrilling whitewater rafting adventure on the Kelaniya River",
        "Immersive village walk and birdwatching experience",
        "Exploration of the lush Makandeva rainforest",
        "Evening transfer to Sinharaja hotel for check-in and relaxation"
      ]
    },
    {
      day: 2,
      title: "Wildlife Wonders - Sinharaja to Yala",
      activities: [
        "Morning rainforest trek discovering exotic birds and unique flora/fauna",
        "Breakfast at the hotel before journeying to Udawalawe",
        "Exciting jeep safari spotting elephant herds in Udawalawe National Park",
        "Evening transfer to Yala with hotel check-in and leisure time"
      ]
    },
    {
      day: 3,
      title: "Leopards & Leisure - Yala to Mirissa",
      activities: [
        "Sunrise safari in Yala National Park (4-hour adventure seeking leopards)",
        "Scenic drive to coastal Mirissa",
        "Check-in at beachfront hotel with free time to unwind"
      ]
    },
    {
      day: 4,
      title: "Coastal Discoveries - Mirissa to Colombo",
      activities: [
        "Magical whale watching cruise from Mirissa (spotting blue whales & dolphins)",
        "Guided walking tour of historic Galle Fort",
        "Bentota River safari through mangrove forests",
        "Cultural visits: Mask Museum and Spice/Herbal Garden",
        "Relaxing stop at beautiful Hikkaduwa Beach",
        "Return to Colombo with unforgettable memories"
      ]
    }
  ];

  const getTotalPrice = () => {
    const rates = packageRates[selectedPackage as keyof typeof packageRates];
    if (travelers === 1) {
      return rates.single;
    }
    return rates.twin * travelers;
  };

  const getPackageColor = (pkg: string) => {
    return pkg === 'standard' ? 'from-emerald-500 to-teal-600' : '';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[600px] rounded-2xl overflow-hidden mb-8">
        <img
          src={heroImage}
          alt="4-Day Jungle Adventure in Sri Lanka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">
            4-Day Jungle Adventure in Sri Lanka – Explore Lush Rainforests and Thrilling National Parks
          </h1>
          <p className="text-xl mb-6">
            This guided Sri Lanka wildlife tour packs in the best of the island's biodiversity—explore 2 national parks, 2 rainforests, a mangrove lagoon, misty hill country, and the scenic south & west coasts—all in one unforgettable journey!
          </p>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
        <Badge variant="secondary" className="p-3 justify-center">
          <Calendar className="w-4 h-4 mr-2" />
          4 Days
        </Badge>
        <Badge variant="secondary" className="p-3 justify-center">
          <Users className="w-4 h-4 mr-2" />
          Private Tour
        </Badge>
        <Badge variant="secondary" className="p-3 justify-center">
          <MapPin className="w-4 h-4 mr-2" />
          Pickup Included
        </Badge>
        <Badge variant="secondary" className="p-3 justify-center">
          <Star className="w-4 h-4 mr-2" />
          Free Cancellation
        </Badge>
        <Badge variant="secondary" className="p-3 justify-center">
          <Check className="w-4 h-4 mr-2" />
          Reserve Now
        </Badge>
        <Badge variant="secondary" className="p-3 justify-center">
          <Users className="w-4 h-4 mr-2" />
          Live Guide
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Gallery Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Tour Gallery</h2>
            <EnhancedGallery images={galleryImages} className="mb-6" />
          </div>

          {/* Tour Highlights */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Tour Highlights</h2>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Itinerary */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Detailed Itinerary</h2>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="detailed">Day by Day</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      Experience the ultimate jungle adventure in Sri Lanka with this comprehensive 4-day tour. 
                      From thrilling whitewater rafting and rainforest treks to wildlife safaris and coastal discoveries, 
                      this tour offers the perfect blend of adventure, nature, and culture. Explore two UNESCO-recognized 
                      rainforests, witness incredible wildlife in renowned national parks, and enjoy the pristine beaches 
                      of Sri Lanka's southern coast.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="detailed" className="space-y-4">
                {itineraryData.map((day) => (
                  <Card key={day.day}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-primary">
                        Day {day.day}: {day.title}
                      </h3>
                      <ul className="space-y-2">
                        {day.activities.map((activity, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-primary">•</span>
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* What's Included/Excluded */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">What's Included</h3>
                <ul className="space-y-2">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-600">What's Not Included</h3>
                <ul className="space-y-2">
                  {exclusions.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Important Information */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Important Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">What to bring</h4>
                  <p className="text-sm text-gray-700">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Know before you go</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Wear comfortable walking shoes as there is a moderate amount of walking involved</li>
                    <li>• It is recommended to bring a hat, sunscreen, and a camera</li>
                    <li>• Smoking and consuming food and drinks are not allowed inside the historical sites</li>
                    <li>• Please be ready at your hotel lobby 15 minutes before the pickup time</li>
                    <li>• Children under 8 years are not recommended to participate in this tour</li>
                    <li>• Wheelchair and stroller access is not available</li>
                    <li>• In case of bad weather, some outdoor activities may be cancelled</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            {/* Package Selection */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Select Package Type</h3>
                <div className="space-y-3">
                  <Button
                    onClick={() => setSelectedPackage('standard')}
                    className={`w-full justify-between h-auto p-4 ${
                      selectedPackage === 'standard'
                        ? `bg-gradient-to-r ${getPackageColor('standard')} text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    variant={selectedPackage === 'standard' ? 'default' : 'outline'}
                  >
                    <div className="text-left">
                      <div className="font-semibold">Standard Package</div>
                      <div className="text-sm opacity-90">Complete adventure experience</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">$475</div>
                      <div className="text-xs opacity-90">per person</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Travelers */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Number of Travelers</h3>
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    disabled={travelers <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-xl font-semibold mx-4">{travelers}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTravelers(travelers + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Special Requests */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Special Requests</h3>
                <Textarea
                  placeholder="Any special requests or dietary requirements?"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>4 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers:</span>
                    <span>{travelers} {travelers === 1 ? 'Person' : 'People'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span>Standard</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>${getTotalPrice()}</span>
                    </div>
                  </div>
                </div>
                <BookingForm
                  packageType="4-Day Jungle Adventure"
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

export default JungleAdventureTourPackage;