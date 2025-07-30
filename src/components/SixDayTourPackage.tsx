import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Minus, MapPin, Clock, Users, Star } from 'lucide-react';
import EnhancedGallery from '@/components/ui/enhanced-gallery';
import BookingForm from '@/components/BookingForm';

// Import images
import heroImage from '@/assets/sri-lanka-6-day-hero.avif';
import galleryImage1 from '@/assets/sri-lanka-6-day-1.avif';
import galleryImage2 from '@/assets/sri-lanka-6-day-2.avif';
import galleryImage3 from '@/assets/sri-lanka-6-day-3.avif';
import galleryImage4 from '@/assets/sri-lanka-6-day-4.avif';
import galleryImage5 from '@/assets/sri-lanka-6-day-5.avif';
import galleryImage6 from '@/assets/sri-lanka-6-day-6.avif';
import galleryImage7 from '@/assets/sri-lanka-6-day-7.avif';
import galleryImage8 from '@/assets/sri-lanka-6-day-8.avif';
import galleryImage9 from '@/assets/sri-lanka-6-day-9.avif';
import galleryImage10 from '@/assets/sri-lanka-6-day-10.avif';

const SixDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');

  const packageRates = {
    standard: { twin: 650, single: 795 },
    comfort: { twin: 899, single: 1090 }
  };

  const galleryImages = [
    { src: galleryImage1, alt: 'Sri Lanka 6-day tour gallery 1' },
    { src: galleryImage2, alt: 'Sri Lanka 6-day tour gallery 2' },
    { src: galleryImage3, alt: 'Sri Lanka 6-day tour gallery 3' },
    { src: galleryImage4, alt: 'Sri Lanka 6-day tour gallery 4' },
    { src: galleryImage5, alt: 'Sri Lanka 6-day tour gallery 5' },
    { src: galleryImage6, alt: 'Sri Lanka 6-day tour gallery 6' },
    { src: galleryImage7, alt: 'Sri Lanka 6-day tour gallery 7' },
    { src: galleryImage8, alt: 'Sri Lanka 6-day tour gallery 8' },
    { src: galleryImage9, alt: 'Sri Lanka 6-day tour gallery 9' },
    { src: galleryImage10, alt: 'Sri Lanka 6-day tour gallery 10' },
  ];

  const highlights = [
    "Discover the ancient wonders of Sri Lanka's Cultural Triangle, exploring UNESCO-listed historical and cultural hotspots.",
    "Journey through the scenic hill country, visiting lush tea plantations, misty waterfalls, and charming towns.",
    "Experience thrilling wildlife safaris in Yala and Minneriya, spotting elephants, leopards, and exotic birds.",
    "Unwind along the stunning west and south coasts, where golden beaches and tranquil fishing villages await."
  ];

  const inclusions = [
    "Air-conditioned vehicle",
    "Accommodation in standard hotels",
    "Daily breakfast",
    "Private transportation",
    "Fuel surcharge",
    "Parking Fees",
    "Passenger Insurance",
    "Arrival/Departure transfers",
    "Meeting arrangements at the airport or hotel",
    "Driver Meals And Accommodations"
  ];

  const exclusions = [
    "Entrance fees",
    "Lunch, Dinner and drinks",
    "Tips gratuities",
    "Any other expenses which are not mentioned in price Includes section"
  ];

  const getTotalPrice = () => {
    const rates = packageRates[selectedPackage as keyof typeof packageRates];
    if (travelers === 1) {
      return rates.single;
    }
    return rates.twin * travelers;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Explore Great Sri Lanka with tourist hot spots in 6 days"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Explore Great Sri Lanka with tourist hot spots in 6 days
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Discover Sri Lanka's top destinations on this exclusive six-day private tour. Sit back and take in the sights while your personal guide handles all the arrangements, including private transportation for a seamless experience.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>6 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Private Tour</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Pickup Included</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>Free Cancellation</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tour Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Tour Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <EnhancedGallery images={galleryImages} />
              </CardContent>
            </Card>

            {/* Detailed Itinerary */}
            <Card>
              <CardHeader>
                <CardTitle>Detailed Itinerary</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="day1" className="w-full">
                  <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="day1">Day 1</TabsTrigger>
                    <TabsTrigger value="day2">Day 2</TabsTrigger>
                    <TabsTrigger value="day3">Day 3</TabsTrigger>
                    <TabsTrigger value="day4">Day 4</TabsTrigger>
                    <TabsTrigger value="day5">Day 5</TabsTrigger>
                    <TabsTrigger value="day6">Day 6</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="day1" className="space-y-4">
                    <h3 className="text-xl font-semibold">Day 1: Colombo → Sigiriya & Dambulla Cave Temple</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Meet your guide and begin your journey to Sigiriya.</li>
                      <li>• En route, explore the stunning Dambulla Golden Cave Temple, a UNESCO-listed rock temple with ancient Buddhist murals.</li>
                      <li>• In the afternoon, conquer the iconic Sigiriya Rock Fortress, a 5th-century royal citadel with breathtaking views.</li>
                      <li>• Overnight in Sigiriya</li>
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="day2" className="space-y-4">
                    <h3 className="text-xl font-semibold">Day 2: Sigiriya → Polonnaruwa → Minneriya Safari</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• After breakfast, step back in time at Polonnaruwa, Sri Lanka's medieval capital, and marvel at its well-preserved ruins.</li>
                      <li>• In the afternoon, embark on an exciting wildlife safari in Minneriya or Kaudulla National Park, where herds of elephants gather.</li>
                      <li>• Overnight in Sigiriya</li>
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="day3" className="space-y-4">
                    <h3 className="text-xl font-semibold">Day 3: Sigiriya → Kandy (Cultural & Spiritual Journey)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Travel to Kandy, stopping at a spice garden to learn about Sri Lanka's aromatic herbs and traditional medicine.</li>
                      <li>• Visit the sacred Muthumari Amman Temple and the revered Temple of the Tooth Relic, home to Buddha's sacred tooth.</li>
                      <li>• Overnight in Kandy</li>
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="day4" className="space-y-4">
                    <h3 className="text-xl font-semibold">Day 4: Kandy → Nuwara Eliya → Ella → Yala (Hill Country & Scenic Wonders)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Journey through Sri Lanka's lush tea country, touring a tea factory and sipping world-famous Ceylon tea.</li>
                      <li>• Stop at Gregory Lake in Nuwara Eliya and the Instagram-famous Nine Arch Bridge in Ella.</li>
                      <li>• Continue to Yala for your next adventure.</li>
                      <li>• Overnight in Yala</li>
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="day5" className="space-y-4">
                    <h3 className="text-xl font-semibold">Day 5: Yala Safari → Mirissa (Wildlife & Beach Bliss)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Rise early for a thrilling jeep safari in Yala National Park, spotting leopards, elephants, and exotic birds.</li>
                      <li>• Later, unwind at the golden beaches of Mirissa, a tropical paradise perfect for relaxation.</li>
                      <li>• Overnight in Mirissa</li>
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="day6" className="space-y-4">
                    <h3 className="text-xl font-semibold">Day 6: Mirissa → Colombo (Coastal Gems & Departure)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Travel back to Colombo, stopping at:</li>
                      <li>• Galle Fort, a charming Dutch-colonial UNESCO site.</li>
                      <li>• Hikkaduwa Beach, famous for its coral reefs.</li>
                      <li>• Bentota Lagoon for a scenic boat ride.</li>
                      <li>• Drop off at your Colombo hotel or the airport.</li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Tour Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>Tour Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-0.5 flex-shrink-0">
                        {index + 1}
                      </Badge>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Includes & Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">What's Excluded</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exclusions.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-red-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Important Information */}
            <Card>
              <CardHeader>
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What to bring:</h4>
                  <p className="text-muted-foreground text-sm">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Know before you go:</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Wear comfortable walking shoes as there is a moderate amount of walking involved</li>
                    <li>• It is recommended to bring a hat, sunscreen, and a camera</li>
                    <li>• Smoking and consuming food and drinks are not allowed inside the historical sites</li>
                    <li>• Please be ready at your hotel lobby 15 minutes before the pickup time</li>
                    <li>• Children under 8 years are not recommended to participate in this tour</li>
                    <li>• Wheelchair and stroller access is not available</li>
                    <li>• In case of bad weather, some outdoor activities may be cancelled</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Quick Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-green-600">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Free Cancellation
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>Duration:</strong> 6 days</p>
                      <p><strong>Guide:</strong> English, Italian, French</p>
                      <p><strong>Group:</strong> Private tour participants</p>
                      <p><strong>Pickup:</strong> Included</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Package Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Package Type</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedPackage === 'standard' ? 'border-primary bg-primary/5' : 'border-gray-200'
                    }`} onClick={() => setSelectedPackage('standard')}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Standard Package</h4>
                          <p className="text-sm text-muted-foreground">Comfortable accommodation</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${packageRates.standard.twin} PP</p>
                          <p className="text-xs text-muted-foreground">Twin sharing</p>
                        </div>
                      </div>
                    </div>

                    <div className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedPackage === 'comfort' ? 'border-primary bg-primary/5' : 'border-gray-200'
                    }`} onClick={() => setSelectedPackage('comfort')}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Comfort Package</h4>
                          <p className="text-sm text-muted-foreground">Premium accommodation</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${packageRates.comfort.twin} PP</p>
                          <p className="text-xs text-muted-foreground">Twin sharing</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Travelers */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setTravelers(Math.max(1, travelers - 1))}
                        disabled={travelers <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-semibold">{travelers}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setTravelers(travelers + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Special Requests</label>
                    <Textarea
                      placeholder="Any special requirements or requests..."
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Booking Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <span className="capitalize">{selectedPackage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Travelers:</span>
                      <span>{travelers}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${getTotalPrice()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <BookingForm 
                    packageType="Explore Great Sri Lanka with tourist hot spots in 6 days"
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
    </div>
  );
};

export default SixDayTourPackage;