import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Users, MapPin, Car, Star, Calendar, MessageSquare } from 'lucide-react';
import BookingForm from './BookingForm';
import EnhancedGallery from '@/components/ui/enhanced-gallery';

// Import gallery images
import heroImage from '@/assets/sri-lanka-10-day-hero.avif';
import galleryImage1 from '@/assets/sri-lanka-10-day-1.avif';
import galleryImage2 from '@/assets/sri-lanka-10-day-2.avif';
import galleryImage3 from '@/assets/sri-lanka-10-day-3.avif';
import galleryImage4 from '@/assets/sri-lanka-10-day-4.avif';
import galleryImage5 from '@/assets/sri-lanka-10-day-5.avif';
import galleryImage6 from '@/assets/sri-lanka-10-day-6.avif';
import galleryImage7 from '@/assets/sri-lanka-10-day-7.avif';
import galleryImage8 from '@/assets/sri-lanka-10-day-8.avif';
import galleryImage9 from '@/assets/sri-lanka-10-day-9.avif';
import galleryImage10 from '@/assets/sri-lanka-10-day-10.avif';

const TenDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');

  const packageRates = {
    standard: {
      twin: 790.00,
      single: 995.00
    },
    comfort: {
      twin: 950.00,
      single: 1290.00
    }
  };

  const galleryImages = [
    { src: heroImage, alt: 'Sri Lanka 8-Day Tour Hero' },
    { src: galleryImage1, alt: 'Ancient Temple Architecture' },
    { src: galleryImage2, alt: 'Sri Lankan Landscape' },
    { src: galleryImage3, alt: 'Cultural Heritage Site' },
    { src: galleryImage4, alt: 'Wildlife Safari' },
    { src: galleryImage5, alt: 'Tea Plantation Views' },
    { src: galleryImage6, alt: 'Beach Coastline' },
    { src: galleryImage7, alt: 'Mountain Scenery' },
    { src: galleryImage8, alt: 'Cultural Experience' },
    { src: galleryImage9, alt: 'Natural Beauty' },
    { src: galleryImage10, alt: 'Adventure Activity' }
  ];

  const highlights = [
    "Explore Ancient Wonders: Discover the UNESCO-listed Dambulla Cave Temple and climb the iconic Sigiriya Rock Fortress.",
    "Wildlife Safari: Spot majestic elephants in their natural habitat during a thrilling safari in Minneriya National Park.",
    "Cultural Gems of Kandy: Visit the sacred Temple of the Tooth Relic and immerse yourself in the city's rich heritage.",
    "Scenic Train Ride: Journey through lush tea plantations on a breathtaking train ride from Nuwara Eliya to Ella.",
    "Coastal Relaxation: Unwind on the golden beaches of the South Coast and enjoy a serene Bentota River safari."
  ];

  const inclusions = [
    "7 nights accommodation in standard hotels",
    "7 breakfasts and dinners",
    "Meet and greet by Serendipity tours representative",
    "Guided tour of Dambulla Cave Temple (entrance fees not included)",
    "Tooth temple (entrance fees not included)",
    "Sigiriya rock (entrance fees not included)",
    "Visit to Ananda Gedige",
    "Visit to spice garden",
    "Visit to Hindu temple Matale",
    "Visit to Kandy upper lake and Kandy Lake",
    "Visit to Gem museum",
    "Nuwara Eliya city tour",
    "Tickets for the scenic train ride",
    "Visit to Mini Adams Peak",
    "Visit to Nine Arch Bridge",
    "Visit to Lipton's Seat",
    "Driver Meals And Accommodations"
  ];

  const exclusions = [
    "Lunch and drinks",
    "White water rafting in Kitulgala",
    "Minneriya national park safari",
    "Tour to Horton Plains National Park",
    "Entrance fees to Sigiriya, Dambulla and tooth relic temple",
    "Bentota river safari",
    "Personal expenses",
    "Travel insurance",
    "Tips and gratuities",
    "Any other expenses which are not mentioned in price Includes section"
  ];

  const itineraryData = [
    {
      day: "Day 1: Colombo → Sigiriya",
      activities: [
        "Hotel pickup from Colombo/Negombo/Mount Lavinia",
        "Stop in Kurunegala for lunch & refreshments",
        "Explore the golden Buddha statues & cave murals at UNESCO-listed Dambulla Cave Temple",
        "Overnight in Sigiriya"
      ]
    },
    {
      day: "Day 2: Sigiriya Exploration",
      activities: [
        "Sunrise climb of Sigiriya Rock Fortress (UNESCO World Heritage & Ancient Wonder)",
        "Discover ancient frescoes & lion-paw terraces",
        "Afternoon elephant safari in Minneriya National Park",
        "Overnight in Sigiriya"
      ]
    },
    {
      day: "Day 3: Sigiriya → Kandy",
      activities: [
        "Visit the unique hybrid architecture of Ananda Gedige",
        "Stop at a spice garden in Matale for aromatic demonstrations",
        "Kandy highlights: Temple of the Tooth Relic, Kandy Lake & Gem Museum",
        "Optional cultural dance show",
        "Overnight in Kandy"
      ]
    },
    {
      day: "Day 4: Kandy → Kitulgala → Nuwara Eliya",
      activities: [
        "Morning white-water rafting in Kitulgala (optional)",
        "Scenic drive to \"Little England\":",
        "Gregory Lake boat ride",
        "Explore colonial-era Victoria Park & vibrant market",
        "Overnight in Nuwara Eliya"
      ]
    },
    {
      day: "Day 5: Nuwara Eliya → Horton Plains → Ella",
      activities: [
        "Sunrise trek to World's End at Horton Plains National Park",
        "Picturesque Blue Train journey through tea plantations to Ella",
        "Free evening to explore Ella's cafes",
        "Overnight in Ella"
      ]
    },
    {
      day: "Day 6: Ella → Haputale",
      activities: [
        "Morning hike to Mini Adam's Peak",
        "Photo stop at iconic Nine Arch Bridge",
        "Transfer to misty Haputale for relaxation",
        "Overnight in Haputale"
      ]
    },
    {
      day: "Day 7: Haputale → South Coast",
      activities: [
        "Sunrise at Lipton's Seat (panoramic tea estate views)",
        "Scenic drive to the coast with a Bentota River safari (mangroves & wildlife)",
        "Beachside leisure time",
        "Overnight at South Coast resort"
      ]
    },
    {
      day: "Day 8: South Coast → Colombo Airport",
      activities: [
        "Breakfast with ocean views",
        "Transfer to Colombo International Airport for departure"
      ]
    }
  ];

  const itinerary = itineraryData.map(day => (
    <div key={day.day} className="mb-6 p-4 border border-border rounded-lg">
      <h4 className="font-semibold text-lg mb-3 text-primary">{day.day}</h4>
      <ul className="space-y-2">
        {day.activities.map((activity, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span className="text-muted-foreground">{activity}</span>
          </li>
        ))}
      </ul>
    </div>
  ));

  const getTotalPrice = (): number => {
    const rates = packageRates[selectedPackage as keyof typeof packageRates];
    return travelers === 1 ? rates.single : rates.twin * travelers;
  };

  const getPackageColor = (pkg: string): string => {
    if (pkg === selectedPackage) {
      return pkg === 'standard' ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-purple-100 border-purple-500 text-purple-700';
    }
    return 'bg-background border-border text-foreground hover:bg-muted';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-96 rounded-lg overflow-hidden mb-8">
        <img 
          src={heroImage} 
          alt="Sri Lanka 8-Day Tour with Adventure, Wildlife, ancient Temples, hill country and beaches"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sri Lanka 8-Day Tour with Adventure, Wildlife, ancient Temples, hill country and beaches
            </h1>
            <p className="text-xl mb-6 max-w-3xl">
              Embark on an 8-day adventure across Sri Lanka, beginning in Colombo. Tour UNESCO World Heritage Sites, embark on a wildlife safari, visit the cultural city of Kandy, and enjoy leisure time on the beautiful South Coast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Clock className="w-4 h-4 mr-1" />
                8 Days
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Users className="w-4 h-4 mr-1" />
                Private Tour
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                Pickup Included
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Car className="w-4 h-4 mr-1" />
                Transport Included
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Tour Gallery */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-primary" />
                Tour Gallery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <EnhancedGallery images={galleryImages} />
            </CardContent>
          </Card>

          {/* Tour Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Tour Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Detailed Itinerary</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  {/* Tour Highlights */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tour Highlights</h3>
                    <ul className="space-y-3">
                      {highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What's Included */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-green-600">What's Included</h3>
                      <ul className="space-y-2">
                        {inclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-red-600">What's Excluded</h3>
                      <ul className="space-y-2">
                        {exclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2">✗</span>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="itinerary" className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Detailed Itinerary</h3>
                  {itinerary}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <Card>
              <CardHeader>
                <CardTitle>Book Your Tour</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Package Selection */}
                <div>
                  <h4 className="font-semibold mb-3">Select Package Type</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedPackage('standard')}
                      className={`w-full p-3 border rounded-lg text-left transition-colors ${getPackageColor('standard')}`}
                    >
                      <div className="font-medium">Standard Package</div>
                      <div className="text-sm opacity-75">
                        ${packageRates.standard.twin} per person (twin sharing)
                      </div>
                      <div className="text-sm opacity-75">
                        ${packageRates.standard.single} (single occupancy)
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setSelectedPackage('comfort')}
                      className={`w-full p-3 border rounded-lg text-left transition-colors ${getPackageColor('comfort')}`}
                    >
                      <div className="font-medium">Comfort Package</div>
                      <div className="text-sm opacity-75">
                        ${packageRates.comfort.twin} per person (twin sharing)
                      </div>
                      <div className="text-sm opacity-75">
                        ${packageRates.comfort.single} (single occupancy)
                      </div>
                    </button>
                  </div>
                </div>

                {/* Travelers */}
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                  <select 
                    value={travelers} 
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full p-2 border border-border rounded-md bg-background"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                    ))}
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Any special dietary requirements, accessibility needs, or preferences..."
                    className="w-full p-2 border border-border rounded-md bg-background min-h-[80px] resize-none"
                  />
                </div>

                {/* Booking Summary */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>8 Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Travelers:</span>
                      <span>{travelers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <span className="capitalize">{selectedPackage}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg border-t pt-2">
                      <span>Total:</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <BookingForm 
                  packageType="Sri Lanka 8-Day Tour with Adventure, Wildlife, ancient Temples, hill country and beaches"
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

export default TenDayTourPackage;