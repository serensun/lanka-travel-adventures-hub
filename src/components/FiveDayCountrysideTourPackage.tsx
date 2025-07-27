import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Clock, MapPin, Users, Check, Minus, Calendar } from 'lucide-react';
import BookingForm from './BookingForm';
import EnhancedGallery from './ui/enhanced-gallery';

// Import images
import fiveDayCountrysideHero from '../assets/5-day-countryside-hero.avif';
import fiveDayCountryside1 from '../assets/5-day-countryside-1.avif';
import fiveDayCountryside2 from '../assets/5-day-countryside-2.avif';
import fiveDayCountryside3 from '../assets/5-day-countryside-3.avif';
import fiveDayCountryside4 from '../assets/5-day-countryside-4.avif';
import fiveDayCountryside5 from '../assets/5-day-countryside-5.avif';
import fiveDayCountryside6 from '../assets/5-day-countryside-6.avif';
import fiveDayCountryside7 from '../assets/5-day-countryside-7.avif';
import fiveDayCountryside8 from '../assets/5-day-countryside-8.avif';
import fiveDayCountryside9 from '../assets/5-day-countryside-9.avif';
import fiveDayCountryside10 from '../assets/5-day-countryside-10.avif';

const FiveDayCountrysideTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');

  const packageRates = {
    standard: { twinSharing: 620, single: 850 },
    comfort: { twinSharing: 800, single: 1090 },
    luxury: { twinSharing: 1090, single: 1395 }
  };

  const galleryImages = [
    { src: fiveDayCountrysideHero, alt: "Sri Lanka countryside scenic view" },
    { src: fiveDayCountryside1, alt: "Tea plantation landscape" },
    { src: fiveDayCountryside2, alt: "Ella Nine Arch Bridge" },
    { src: fiveDayCountryside3, alt: "Sigiriya Rock Fortress" },
    { src: fiveDayCountryside4, alt: "Kandy Temple of Tooth" },
    { src: fiveDayCountryside5, alt: "Udawalawe Safari elephants" },
    { src: fiveDayCountryside6, alt: "Nuwara Eliya hill country" },
    { src: fiveDayCountryside7, alt: "Galle Fort colonial architecture" },
    { src: fiveDayCountryside8, alt: "Bentota river boat safari" },
    { src: fiveDayCountryside9, alt: "Hill country train journey" },
    { src: fiveDayCountryside10, alt: "Gregory Lake Nuwara Eliya" }
  ];

  const highlights = [
    "Discover Sri Lanka's rich heritage at the ancient temples and cultural landmarks of Sigiriya, Kandy, and Dambulla",
    "Witness majestic elephants on a thrilling Udawalawe safari",
    "Marvel at rolling tea estates, cascading waterfalls, and misty highland landscapes",
    "Enjoy a picturesque train ride to Ella and visit the famous Nine Arch Bridge",
    "Take a serene river cruise through mangrove forests to spot crocodiles and monitor lizards"
  ];

  const inclusions = [
    "5 Days (4 nights) accommodation in standard hotels",
    "4 Breakfasts",
    "Embark on a guided hike at the Sigiriya rock fortress, which features frescoes",
    "Dambulla Golden Temple Tour",
    "Tooth temple tour with ceremony",
    "Pinnawala Elephant park",
    "Complete ground transportation as per the tour itinerary",
    "English-speaking local tour guide",
    "All government taxes",
    "Meeting arrangements at the airport",
    "Entrance fees to the spice/herbal garden",
    "Guided walking tour of Galle Fort",
    "Guided sightseeing tour of Ella with Mini Adams Peak and the Nine Arch Bridge",
    "Kandy sightseeing tour",
    "Nuwara Eliya sightseeing tour: Gregory Lake Esplanade",
    "Tea plantation tour with factory visits",
    "All expenses for the hill country train"
  ];

  const exclusions = [
    "Entrance fees to Sigiriya Rock (USD 30), Dambulla Golden Temple (USD 7), Pinnawala Elephant Orphanage (USD 15), Tooth Relic Temple (USD 7)",
    "Entrance fees to Udawalawe National Park and Jeep Hire (USD 80)+",
    "Enjoy a typical delicious local lunch and learn how to cook a Sri Lankan curry",
    "Guided slow boat river safari and a mangrove lagoon tour",
    "Lunch and dinner",
    "Drinks",
    "Tips and gratuities"
  ];

  const itineraryData = [
    {
      day: 1,
      title: "Colombo → Kandy",
      details: "Meet & Greet: A Seerendipity Tours representative will welcome you in Colombo before your scenic drive to Kandy. Afternoon Tour: Explore Kandy's highlights, including the sacred Temple of the Tooth Relic and a vibrant Kandyan cultural show. Overnight: Hotel in Kandy."
    },
    {
      day: 2,
      title: "Kandy → Sigiriya → Kandy",
      details: "Morning Excursion: After breakfast, journey to the UNESCO-listed Sigiriya Rock Fortress and the magnificent Dambulla Golden Temple, two of Sri Lanka's most iconic landmarks. Overnight: Return to Kandy for another comfortable stay."
    },
    {
      day: 3,
      title: "Kandy → Nuwara Eliya → Ella",
      details: "Scenic Drive: Depart for Ella, stopping in Nuwara Eliya—Sri Lanka's \"Little England\"—to visit a tea factory, Gregory Lake, and the enchanting Sita Amman Temple. Train Adventure: Experience one of the world's most beautiful rail journeys on the Nanu Oya to Ella train ride, soaking in misty hills and lush valleys. Overnight: Hotel in Ella."
    },
    {
      day: 4,
      title: "Ella → Udawalawe → Galle",
      details: "Ella Exploration: Hike to Mini Adam's Peak, marvel at the Nine Arch Bridge, and take in panoramic views from Ella Rock. Wildlife Safari: Head to Udawalawe National Park for a thrilling jeep safari to spot elephants, leopards, and exotic birds. Overnight: Hotel in Galle."
    },
    {
      day: 5,
      title: "Galle → Bentota → Colombo",
      details: "Galle Fort Tour: Wander through the historic Galle Fort, a UNESCO World Heritage Site, with its charming colonial architecture. Coastal Stops: Relax at Hikkaduwa and Bentota Beaches, then enjoy a Bentota River boat safari to spot crocodiles, monkeys, and tropical birds. Return: Transfer to Colombo, concluding your memorable journey."
    }
  ];

  const getTotalPrice = () => {
    const rates = packageRates[selectedPackage as keyof typeof packageRates];
    if (travelers === 1) {
      return rates.single;
    } else {
      return rates.twinSharing * travelers;
    }
  };

  const getPackageColor = (pkg: string) => {
    switch (pkg) {
      case 'standard':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'comfort':
        return 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white';
      case 'luxury':
        return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fiveDayCountrysideHero})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              5-Day Private Country Side Tour with Ella, Udawalawe
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Experience the scenic beauty of Sri Lanka's countryside from Kandy. Wander through charming hill towns, wildlife reserves, coastal beaches, and heritage sites, and enjoy a memorable train ride across the scenic hill country.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-primary/10 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Duration: 5 days</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Free cancellation: Cancel up to 24-hours in advance for a full refund</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Live tour guide: English, Italian, French</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Small group: Private tour participants</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tour Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tour Gallery */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Gallery</h2>
              <EnhancedGallery images={galleryImages} className="w-full" />
            </section>

            {/* Tour Highlights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Itinerary */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Detailed Itinerary</h2>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="detailed">Day by Day</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="prose max-w-none">
                    <p>This 5-day countryside tour takes you through Sri Lanka's most scenic landscapes and cultural highlights. From the ancient rock fortress of Sigiriya to the misty hills of Ella, experience the diverse beauty of the island.</p>
                  </div>
                </TabsContent>
                <TabsContent value="detailed" className="space-y-4">
                  {itineraryData.map((item) => (
                    <Card key={item.day}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Badge variant="outline">Day {item.day}</Badge>
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.details}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </section>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">What's Not Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Minus className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              
              {/* Package Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Package Type</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(packageRates).map(([packageType, rates]) => (
                    <Button
                      key={packageType}
                      variant={selectedPackage === packageType ? "default" : "outline"}
                      className={`w-full justify-between ${selectedPackage === packageType ? getPackageColor(packageType) : ''}`}
                      onClick={() => setSelectedPackage(packageType)}
                    >
                      <span className="capitalize">{packageType}</span>
                      <span>
                        ${rates.twinSharing} PP (Twin) / ${rates.single} (Single)
                      </span>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Number of Travelers */}
              <Card>
                <CardHeader>
                  <CardTitle>Number of Travelers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      disabled={travelers <= 1}
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      value={travelers}
                      onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center"
                      min="1"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTravelers(travelers + 1)}
                    >
                      +
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Special Requests */}
              <Card>
                <CardHeader>
                  <CardTitle>Special Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea
                    id="comments"
                    placeholder="Any special requirements or preferences..."
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="mt-2"
                  />
                </CardContent>
              </Card>

              {/* Booking Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">5 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers:</span>
                    <span className="font-semibold">{travelers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span className="font-semibold capitalize">{selectedPackage}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Cost:</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                  
                  <BookingForm
                    packageType="5-Day Private Country Side Tour with Ella, Udawalawe"
                    travelers={travelers}
                    totalCost={getTotalPrice()}
                    initialComments={comments}
                  />
                </CardContent>
              </Card>

              {/* Important Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Important Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">What to bring:</h4>
                    <p className="text-muted-foreground">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Know before you go:</h4>
                    <ul className="text-muted-foreground space-y-1">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveDayCountrysideTourPackage;