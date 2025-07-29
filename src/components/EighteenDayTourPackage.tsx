import React, { useState } from 'react';
import { Check, X, Users, Calendar, MapPin, Camera, MessageSquare, Star, Clock, CreditCard, Shield, ZoomIn, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Car } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import BookingForm from './BookingForm';
import EnhancedGallery from '@/components/ui/enhanced-gallery';
import sriLanka18Places1 from '@/assets/sri-lanka-18-places-1.avif';
import sriLanka18Places2 from '@/assets/sri-lanka-18-places-2.avif';
import sriLanka18Places3 from '@/assets/sri-lanka-18-places-3.avif';
import sriLanka18Places4 from '@/assets/sri-lanka-18-places-4.avif';
import sriLanka18Places5 from '@/assets/sri-lanka-18-places-5.avif';
import sriLanka18Places6 from '@/assets/sri-lanka-18-places-6.avif';
import sriLanka18Places7 from '@/assets/sri-lanka-18-places-7.avif';
import sriLanka18Places8 from '@/assets/sri-lanka-18-places-8.avif';
import sriLanka18Places9 from '@/assets/sri-lanka-18-places-9.avif';
import sriLanka18Places10 from '@/assets/sri-lanka-18-places-10.avif';
import sriLanka18PlacesMain from '@/assets/sri-lanka-18-places-main.avif';

const EighteenDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showExpandedItinerary, setShowExpandedItinerary] = useState(false);

  const packageRates = {
    standard: { double: 1975, single: 2690 }
  };

  const galleryImages = [
    { src: sriLanka18Places1, alt: 'Ancient wonders and cultural sites' },
    { src: sriLanka18Places2, alt: 'Misty highlands and tea estates' },
    { src: sriLanka18Places3, alt: 'Wildlife safari experience' },
    { src: sriLanka18Places4, alt: 'Sigiriya Rock Fortress' },
    { src: sriLanka18Places5, alt: 'Horton Plains trek' },
    { src: sriLanka18Places6, alt: 'Ella landscapes' },
    { src: sriLanka18Places7, alt: 'Colonial Galle Fort' },
    { src: sriLanka18PlacesMain, alt: 'Majical Sri Lanka journey' },
    { src: sriLanka18Places8, alt: 'Mirissa Beach relaxation' },
    { src: sriLanka18Places9, alt: 'Elephant gatherings' },
    { src: sriLanka18Places10, alt: 'Cultural heritage sites' }
  ];

  const highlights = [
    'Explore ancient wonders at Sigiriya Rock Fortress, discover the ruins of Polonnaruwa, experience Kandy\'s spiritual heart at the Sacred Tooth Relic Temple, and wander through colonial Galle Fort.',
    'Trek through the misty highlands of Horton Plains, stroll among emerald-green tea estates, and unwind on the golden sands of Mirissa Beach.',
    'Witness the spectacular elephant gatherings at Minneriya and embark on thrilling jeep safaris through Yala National Park\'s leopard territory.',
    'Conquer the iconic Sigiriya Rock climb, hike through Ella\'s breathtaking landscapes, and catch waves at Mirissa\'s surf spots.',
    'Soak up the sun on Mirissa\'s palm-fringed shores, indulge in soothing spa therapies, and enjoy picturesque train journeys through hill country vistas.'
  ];

  const inclusions = [
    '18-day (17-night) accommodation in standard hotels',
    '17 breakfasts and 17 dinners',
    'Private transportation',
    'Air-conditioned vehicle',
    'GST/VAT/Service Charges',
    'Water Bottle on Arrival (One Mineral water bottles per person /per day)',
    'English-speaking chauffeur,guide',
    'City tour & Sightseeing',
    'Meet-and-greet services with assistance at the airport',
    'Arrangement of Foods for North Indian, Halal, Veg, Non-Veg & Jain',
    'Chauffeur Meals & Accommodation'
  ];

  const exclusions = [
    'Lunch',
    'Entrance fees',
    'Other Exclusions (Flight tickets/ Visa Charges)',
    'Any expenses of personal nature like laundry charges, tips, etc.',
    'Early check-in & late check-out',
    '4 x 4 Jeep for Safaris',
    'Train Tickets',
    'Dinner at Hotel in Ella',
    'Anything not mentioned under inclusions above'
  ];

  const detailedItinerary = [
    {
      day: 1,
      title: "Welcome to Sri Lanka",
      activities: [
        "Arrive in Colombo and meet your private guide",
        "Transfer to your hotel for overnight stay"
      ]
    },
    {
      day: 2,
      title: "Colombo to Negombo Cultural Tour",
      activities: [
        "Spiritual visit to Gangaramaya Temple",
        "Vibrant Pettah Market exploration",
        "Cultural immersion at National Museum",
        "Oceanfront stroll at Galle Face Green",
        "Evening transfer to Negombo"
      ]
    },
    {
      day: 3,
      title: "Journey to Ancient Sigiriya",
      activities: [
        "Scenic 4-hour drive with stop at Magnificent Dambulla Cave Temple complex",
        "Evening at leisure in Sigiriya"
      ]
    },
    {
      day: 4,
      title: "Sigiriya Rock & Village Life",
      activities: [
        "Sunrise climb of UNESCO-listed Sigiriya Rock Fortress",
        "Authentic village immersion experience",
        "Optional Ayurvedic spa treatment"
      ]
    },
    {
      day: 5,
      title: "Polonnaruwa Ruins & Wildlife Safari",
      activities: [
        "Morning exploration of ancient Polonnaruwa ruins",
        "Afternoon jeep safari in Minneriya National Park (famous for elephant gatherings)"
      ]
    },
    {
      day: 6,
      title: "Hill Capital of Kandy",
      activities: [
        "Enroute stop at Matale spice gardens",
        "Sacred Tooth Relic Temple visit",
        "Traditional Kandyan cultural show"
      ]
    },
    {
      day: 7,
      title: "Kandy's Natural Beauty",
      activities: [
        "Morning at Peradeniya Royal Botanical Gardens",
        "Serene Kandy Lake visit",
        "Bustling local markets exploration",
        "Fascinating gem museum tour"
      ]
    },
    {
      day: 8,
      title: "Tea Country Adventure",
      activities: [
        "Picturesque 4-hour train to Nanu Oya",
        "Afternoon tea plantation experience",
        "Charming Nuwara Eliya town walk"
      ]
    },
    {
      day: 9,
      title: "Horton Plains Exploration",
      activities: [
        "Early morning World's End trek in Horton Plains National Park"
      ]
    },
    {
      day: 10,
      title: "Scenic Ella Discovery",
      activities: [
        "Stop at majestic Ravana Falls",
        "Little Adam's Peak hike",
        "Iconic Nine Arch Bridge visit"
      ]
    },
    {
      day: 11,
      title: "Wildlife Adventure Begins",
      activities: [
        "Optional sunrise hike to Ella Rock",
        "Transfer to Yala safari lodge"
      ]
    },
    {
      day: 12,
      title: "Yala National Park Safari",
      activities: [
        "Dawn wildlife spotting expedition",
        "Afternoon at leisure at lodge"
      ]
    },
    {
      day: 13,
      title: "Coastal Retreat in Mirissa",
      activities: [
        "Scenic 4-hour drive to beach paradise"
      ]
    },
    {
      day: 14,
      title: "Ocean Giants & Beach Bliss",
      activities: [
        "Morning whale watching excursion",
        "Afternoon beach relaxation"
      ]
    },
    {
      day: 15,
      title: "Tropical Beach Escape",
      activities: [
        "Unwind at your beachfront resort"
      ]
    },
    {
      day: 16,
      title: "Tropical Beach Escape",
      activities: [
        "Unwind at your beachfront resort"
      ]
    },
    {
      day: 17,
      title: "Return to Colombo",
      activities: [
        "Morning beach time",
        "Enroute Galle Fort exploration",
        "Colombo city tour"
      ]
    },
    {
      day: 18,
      title: "Farewell Sri Lanka",
      activities: [
        "Airport transfer based on flight schedule"
      ]
    }
  ];

  const itinerary = [
    { day: 1, title: 'Welcome to Sri Lanka', activities: ['Colombo Airport Arrival', 'Hotel Transfer'] },
    { day: 2, title: 'Colombo to Negombo Cultural Tour', activities: ['Gangaramaya Temple', 'Pettah Market', 'National Museum', 'Galle Face Green'] },
    { day: 3, title: 'Journey to Ancient Sigiriya', activities: ['Dambulla Cave Temple', 'Sigiriya Transfer'] },
    { day: 4, title: 'Sigiriya Rock & Village Life', activities: ['Sigiriya Rock Fortress', 'Village Experience', 'Ayurvedic Spa'] },
    { day: 5, title: 'Polonnaruwa Ruins & Wildlife Safari', activities: ['Ancient Polonnaruwa', 'Minneriya Safari'] },
    { day: 6, title: 'Hill Capital of Kandy', activities: ['Matale Spice Gardens', 'Tooth Relic Temple', 'Cultural Show'] },
    { day: 7, title: 'Kandy\'s Natural Beauty', activities: ['Botanical Gardens', 'Kandy Lake', 'Gem Museum'] },
    { day: 8, title: 'Tea Country Adventure', activities: ['Hill Country Train', 'Tea Plantation', 'Nuwara Eliya'] },
    { day: 9, title: 'Horton Plains Exploration', activities: ['World\'s End Trek'] },
    { day: 10, title: 'Scenic Ella Discovery', activities: ['Ravana Falls', 'Little Adam\'s Peak', 'Nine Arch Bridge'] },
    { day: 11, title: 'Wildlife Adventure Begins', activities: ['Ella Rock Hike', 'Yala Transfer'] },
    { day: 12, title: 'Yala National Park Safari', activities: ['Dawn Safari', 'Lodge Relaxation'] },
    { day: 13, title: 'Coastal Retreat in Mirissa', activities: ['Beach Transfer'] },
    { day: 14, title: 'Ocean Giants & Beach Bliss', activities: ['Whale Watching', 'Beach Time'] },
    { day: 15, title: 'Tropical Beach Escape', activities: ['Resort Relaxation'] },
    { day: 16, title: 'Tropical Beach Escape', activities: ['Resort Relaxation'] },
    { day: 17, title: 'Return to Colombo', activities: ['Galle Fort', 'Colombo Tour'] },
    { day: 18, title: 'Farewell Sri Lanka', activities: ['Airport Transfer'] }
  ];

  const getTotalPrice = () => {
    if (travelers === 1) {
      return packageRates[selectedPackage].single;
    } else {
      return packageRates[selectedPackage].double * travelers;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Majical Sri Lanka 18 days tour
        </h2>
        <p className="text-xl text-blue-700 max-w-4xl mx-auto">
          Embark on an 18-day journey blending culture, adventure, and wildlife in perfect harmony. Discover ancient wonders, conquer legendary peaks, and track majestic leopards in their natural habitat - all while enjoying well-paced moments of relaxation
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
            Duration: 18 days
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
        <EnhancedGallery images={galleryImages} />
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
              18-Day Detailed Itinerary
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
                {detailedItinerary.map((day) => (
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
              <button
                onClick={() => setSelectedPackage('standard')}
                className="p-4 rounded-lg text-left transition-all transform hover:scale-105 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
              >
                <div className="font-semibold capitalize mb-2">Standard Package</div>
                <div className="text-sm">
                  <div>${packageRates.standard.double} p.p (twin sharing)</div>
                  <div>${packageRates.standard.single} (single rate)</div>
                </div>
              </button>
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
                  className="border border-blue-300 rounded-md px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <Label htmlFor="comments" className="text-blue-900 font-medium">
              Special requests or preferences:
            </Label>
            <Textarea
              id="comments"
              placeholder="Let us know about any special requirements, dietary restrictions, or preferences..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="mt-2 min-h-[100px] border-blue-300 focus:border-blue-500"
            />
          </div>

          {/* What's Included/Excluded */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <Tabs defaultValue="included" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="included">What's Included</TabsTrigger>
                <TabsTrigger value="excluded">What's Excluded</TabsTrigger>
              </TabsList>
              
              <TabsContent value="included">
                <ul className="space-y-3">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="excluded">
                <ul className="space-y-3">
                  {exclusions.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>

          {/* Important Information */}
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Important Information</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">What to bring:</h4>
                <p className="text-blue-800 text-sm">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Know before you go:</h4>
                <ul className="text-blue-800 text-sm space-y-1">
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
          </div>
        </div>

        {/* Booking Summary */}
        <div className="lg:col-span-1">
          <div className="bg-blue-50/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200 sticky top-6">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Booking Summary</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-blue-900 font-medium">Package:</span>
                <span className="text-blue-800 capitalize">{selectedPackage}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-blue-900 font-medium">Travelers:</span>
                <span className="text-blue-800">{travelers}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-blue-900 font-medium">Duration:</span>
                <span className="text-blue-800">18 days</span>
              </div>
              
              <div className="border-t border-blue-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-900 font-bold text-lg">Total Price:</span>
                  <span className="text-blue-800 font-bold text-xl">${getTotalPrice()}</span>
                </div>
                <p className="text-blue-700 text-sm mt-1">
                  {travelers === 1 ? 'Single occupancy' : `${travelers} travelers (twin sharing)`}
                </p>
              </div>
              
              <BookingForm 
                packageType="Majical Sri Lanka 18 days tour"
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

export default EighteenDayTourPackage;