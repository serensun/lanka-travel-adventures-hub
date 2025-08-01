import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import EnhancedGallery from '@/components/ui/enhanced-gallery';
import BookingForm from './BookingForm';

// Import all images
import heroImage from '@/assets/sri-lanka-14-day-hero.avif';
import galleryImage1 from '@/assets/sri-lanka-14-day-1.avif';
import galleryImage2 from '@/assets/sri-lanka-14-day-2.avif';
import galleryImage3 from '@/assets/sri-lanka-14-day-3.avif';
import galleryImage4 from '@/assets/sri-lanka-14-day-4.avif';
import galleryImage5 from '@/assets/sri-lanka-14-day-5.avif';
import galleryImage6 from '@/assets/sri-lanka-14-day-6.avif';
import galleryImage7 from '@/assets/sri-lanka-14-day-7.avif';
import galleryImage8 from '@/assets/sri-lanka-14-day-8.avif';
import galleryImage9 from '@/assets/sri-lanka-14-day-9.avif';
import galleryImage10 from '@/assets/sri-lanka-14-day-10.avif';

const FourteenDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');

  const packageRates = {
    standard: { twin: 1190.00, single: 1595.00 },
    comfort: { twin: 1550.00, single: 1890.00 }
  };

  const galleryImages = [
    { src: heroImage, alt: "Sri Lanka Grand Tour 14 Days - Main" },
    { src: galleryImage1, alt: "Ancient Temples and Cultural Sites" },
    { src: galleryImage2, alt: "Wildlife Safari Experience" },
    { src: galleryImage3, alt: "Hill Country Tea Plantations" },
    { src: galleryImage4, alt: "Scenic Train Journey" },
    { src: galleryImage5, alt: "Historic Fortresses and Palaces" },
    { src: galleryImage6, alt: "Coastal Beaches and Relaxation" },
    { src: galleryImage7, alt: "Traditional Villages and Culture" },
    { src: galleryImage8, alt: "Botanical Gardens and Nature" },
    { src: galleryImage9, alt: "Waterfalls and Natural Beauty" },
    { src: galleryImage10, alt: "Local Markets and City Life" }
  ];

  const highlights = [
    "Explore Sri Lanka's Cultural Triangle, visiting ancient temples, royal palaces, and lush gardens.",
    "Embark on thrilling wildlife safaris in Minneriya and Yala to spot leopards, elephants, sloth bears, and crocodiles.",
    "Experience one of the world's most scenic train rides through breathtaking landscapes.",
    "Unwind on the pristine beaches of the west coast and enjoy a serene river safari through mangrove lagoons."
  ];

  const inclusions = [
    "13 Nights accommodation in standard Hotels",
    "One typical local lunch",
    "Daily breakfast at hotel (13 breakfasts)",
    "Entire ground transportation in an AC vehicle",
    "Bottled water (1L per person per day)",
    "All-inclusive hill country train trip",
    "Tea factory visit",
    "Spice/herbal garden visit",
    "Ella sightseeing tour",
    "Kandy city tour",
    "Nuwara Eliya city tour",
    "Polonnaruwa and Anurdhapura guided ancient city tour",
    "Dambulla and tooth relic temple guided tour",
    "Guided sigiriya rock fortress Walking tour",
    "Gem museum tour",
    "Kandyan cultural show",
    "Airport pick-up and drop-off",
    "Fuel surcharge",
    "All Taxes",
    "English-speaking chauffeur-guide"
  ];

  const exclusions = [
    "Entrance fees at sites",
    "Lunches, Dinners & drinks",
    "Gratuities",
    "4x4 jeep for Yala safari and Minneriya",
    "Entry fees to Sigiriya, The Ancient Rock Fortress",
    "Entry fees to Polonnaruwa Vatadage",
    "Entry fees to Dambulla Royal Cave Temple",
    "Entry fees to Yala National Park",
    "Entry fees to Minneriya National Park",
    "Entry fees to Little Adam's Peak View Point",
    "Entry fees to Anuradhapura",
    "Entry fees to Tooth relic temple",
    "Entry fees to Botanical garden",
    "Boat safari"
  ];

  const itineraryData = [
    {
      day: "Day 1",
      title: "Arrival in Colombo → Negombo",
      details: "Upon arrival, you'll be greeted and transferred to your hotel in Negombo (25 mins). Explore this coastal town, visiting Hindu temples, the lively fish market, and other local landmarks."
    },
    {
      day: "Day 2",
      title: "Negombo → Sigiriya",
      details: "After breakfast, travel to Sigiriya and climb the legendary Sigiriya Rock Fortress. In the evening, enjoy a traditional village tour in Habarana before an overnight stay in Sigiriya."
    },
    {
      day: "Day 3",
      title: "Sigiriya → Polonnaruwa",
      details: "Discover the 12th-century ruins of Polonnaruwa, a UNESCO-listed ancient city. Later, embark on an exciting wildlife safari in Minneriya National Park, famous for elephant herds."
    },
    {
      day: "Day 4",
      title: "Sigiriya → Anuradhapura & Dambulla",
      details: "After breakfast, explore Anuradhapura's sacred temples, palaces, and gardens, followed by a visit to Dambulla's iconic cave temples."
    },
    {
      day: "Day 5",
      title: "Sigiriya → Kandy",
      details: "Journey to Kandy, Sri Lanka's cultural heart. En route, stop at a spice/herbal garden. Spend the afternoon at leisure, soaking in the city's charm."
    },
    {
      day: "Day 6",
      title: "Kandy Sightseeing",
      details: "Discover Kandy's highlights: the Royal Botanical Gardens, the sacred Temple of the Tooth, a Kandyan cultural show, and the vibrant downtown area."
    },
    {
      day: "Day 7",
      title: "Kandy → Nuwara Eliya",
      details: "Travel to Nuwara Eliya, stopping at tea plantations, a tea factory, and stunning waterfalls. In the afternoon, explore Gregory Lake and the quaint town center."
    },
    {
      day: "Day 8",
      title: "Nuwara Eliya → Ella (Scenic Train Ride)",
      details: "Board the picturesque hill country train to Ella. Spend the afternoon hiking Ella Rock, visiting the Nine Arch Bridge, and enjoying Mini Adams Peak's breathtaking views."
    },
    {
      day: "Day 9",
      title: "Ella → Yala",
      details: "Drive to Yala National Park for an afternoon jeep safari, spotting leopards, elephants, and more."
    },
    {
      day: "Day 10",
      title: "Yala → Bentota (Coastal Exploration)",
      details: "Head to Bentota, stopping at Galle Fort, Mirissa Beach, and Hikkaduwa Beach. Relax at your beach resort in the evening."
    },
    {
      day: "Days 11-13",
      title: "Bentota (Beach Relaxation)",
      details: "Unwind on Sri Lanka's pristine west coast beaches, enjoying sun, sand, and sea."
    },
    {
      day: "Day 14",
      title: "Bentota → Colombo (Departure)",
      details: "After a leisurely morning, transfer to Colombo for your onward journey."
    }
  ];

  const getTotalPrice = (): number => {
    const rateType = travelers === 1 ? 'single' : 'twin';
    const basePrice = packageRates[selectedPackage as keyof typeof packageRates][rateType];
    return travelers === 1 ? basePrice : basePrice * travelers;
  };

  const getPackageColor = (pkg: string): string => {
    return selectedPackage === pkg 
      ? "bg-primary text-primary-foreground" 
      : "bg-background text-foreground border hover:bg-muted";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Sri Lanka grand tour 14 days</h1>
            <p className="text-lg md:text-xl">
              Enjoy a 14-day guided tour visiting highlights such as Sigiriya, Dambulla, Polonnaruwa, and Kandy. Discover ancient cave temples, historic royal palaces, scenic tea trails, lush botanical gardens, stunning waterfalls, and unwind at Bentota Beach.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 text-sm">
            <Badge variant="secondary">Free cancellation: Cancel up to 24-hours in advance for a full refund</Badge>
            <Badge variant="secondary">Reserve now & pay later: Keep your travel plans flexible — book your spot and pay nothing today</Badge>
            <Badge variant="secondary">Duration: 14 days</Badge>
            <Badge variant="secondary">Live tour guide: English, Italy, French</Badge>
            <Badge variant="secondary">Small group: Private tour participants</Badge>
            <Badge variant="secondary">Pickup included: Please provide us the name of the hotel or address of the pick-up location</Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Gallery Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Gallery</h2>
              <EnhancedGallery images={galleryImages} className="mb-6" />
            </section>

            {/* Detailed Itinerary */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Detailed Itinerary</h2>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="day-by-day">Day by Day</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="prose max-w-none">
                    <p>
                      Experience the complete Sri Lanka adventure on this comprehensive 14-day journey. From ancient cultural sites to pristine beaches, wildlife safaris to scenic train rides, this tour covers all the highlights that make Sri Lanka truly magical.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="day-by-day" className="space-y-4">
                  {itineraryData.map((day, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{day.day}: {day.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{day.details}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </section>

            {/* Tour Highlights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* What's Included/Excluded */}
            <section className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{item}</span>
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
                  <ul className="space-y-1 text-sm">
                    {exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Important Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Important Information</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">What to bring:</h4>
                      <p className="text-sm text-muted-foreground">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Know before you go:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
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
            </section>
          </div>

          {/* Sidebar - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">14 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Group Size:</span>
                    <span className="font-medium">Private</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Languages:</span>
                    <span className="font-medium">English, Italian, French</span>
                  </div>
                </CardContent>
              </Card>

              {/* Package Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Package Type</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className={`w-full justify-between h-auto p-4 ${getPackageColor('standard')}`}
                    onClick={() => setSelectedPackage('standard')}
                  >
                    <div className="text-left">
                      <div className="font-medium">Standard Package</div>
                      <div className="text-sm opacity-80">Twin: $1,190 | Single: $1,595</div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className={`w-full justify-between h-auto p-4 ${getPackageColor('comfort')}`}
                    onClick={() => setSelectedPackage('comfort')}
                  >
                    <div className="text-left">
                      <div className="font-medium">Comfort Package</div>
                      <div className="text-sm opacity-80">Twin: $1,550 | Single: $1,890</div>
                    </div>
                  </Button>
                </CardContent>
              </Card>

              {/* Travelers */}
              <Card>
                <CardHeader>
                  <CardTitle>Number of Travelers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      disabled={travelers <= 1}
                    >
                      -
                    </Button>
                    <span className="text-lg font-medium">{travelers}</span>
                    <Button
                      variant="outline"
                      size="icon"
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
                  <Textarea
                    placeholder="Any special requests or requirements..."
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="min-h-[100px]"
                  />
                </CardContent>
              </Card>

              {/* Booking Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Duration:</span>
                    <span>14 days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Travelers:</span>
                    <span>{travelers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Package:</span>
                    <span className="capitalize">{selectedPackage}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Form */}
              <BookingForm
                packageType="Sri Lanka grand tour 14 days"
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

export default FourteenDayTourPackage;