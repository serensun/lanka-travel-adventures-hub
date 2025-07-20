import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Clock, Users, Globe, Calendar, CheckCircle, XCircle, AlertCircle, ZoomIn } from "lucide-react";
import { useState } from "react";
import BookingForm from "./BookingForm";

// Gallery images
import gallery1 from "@/assets/new-tour-gallery-1.avif";
import gallery2 from "@/assets/new-tour-gallery-2.avif";
import gallery3 from "@/assets/new-tour-gallery-3.avif";
import gallery4 from "@/assets/new-tour-gallery-4.avif";
import gallery5 from "@/assets/new-tour-gallery-5.avif";
import gallery6 from "@/assets/new-tour-gallery-6.avif";
import gallery7 from "@/assets/new-tour-gallery-7.avif";
import gallery8 from "@/assets/new-tour-gallery-8.avif";
import gallery9 from "@/assets/new-tour-gallery-9.avif";
import gallery10 from "@/assets/new-tour-gallery-10.avif";
import gallery11 from "@/assets/new-tour-gallery-11.avif";
import gallery12 from "@/assets/new-tour-gallery-12.avif";

const NewFourDayTourPackage = () => {
  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, 
    gallery6, gallery7, gallery8, gallery9, gallery10,
    gallery11, gallery12
  ];

  const highlights = [
    "Discover the legendary Sigiriya Rock Fortress and hike to its summit for breathtaking views.",
    "Explore the sacred Temple of the Tooth Relic and wander through the lush Peradeniya Botanical Gardens.",
    "Spot majestic leopards and elephants on an exciting Yala National Park safari.",
    "Enjoy a scenic train ride from Nanu Oya to Ella and marvel at the iconic Nine Arch Bridge"
  ];

  const includes = [
    "Hotel pickup and drop-off",
    "Air-conditioned transportation", 
    "3-nights of accommodation in standard hotels",
    "3 breakfasts",
    "3 Dinners",
    "Tea factory visit",
    "Waterfall visit",
    "All inclusive hill country train trip",
    "Fuel surcharge",
    "Airport/departure tax",
    "Parking fees"
  ];

  const excludes = [
    "Meals and beverages (unless specified)",
    "Gratuities (optional)",
    "Personal expenses",
    "Entrance tickets to attractions (around US$ 200 P.P)"
  ];

  const rates = [
    { type: "Standard package", twin: 399, single: 699 },
    { type: "Comfort package", twin: 599, single: 799 },
    { type: "Luxury package", twin: 699, single: 999 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Sri Lanka 4-Day Private Tour With 18 Amazing Places
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Dreaming of a quick escape? Sri Lanka's Best in Just 4 Days! From ancient wonders to wild safaris, 
            misty hills to golden beaches—experience it all in one unforgettable trip! Experience an exhilarating 
            4-day journey across Sri Lanka, exploring 18 of its most breathtaking locations. Discover ancient ruins, 
            untouched beaches, lush highlands, and thriving national parks teeming with wildlife.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
              {galleryImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="flex-none w-80 aspect-video overflow-hidden rounded-lg shadow-lg snap-start cursor-pointer group relative">
                      <img 
                        src={image} 
                        alt={`Tour gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full max-h-[90vh] p-2">
                    <div className="relative">
                      <img 
                        src={image} 
                        alt={`Tour gallery ${index + 1} - Enlarged view`}
                        className="w-full h-auto object-contain max-h-[80vh] rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
            <div className="text-center mt-4 text-sm text-muted-foreground">
              Scroll horizontally to view more images
            </div>
          </div>
        </div>

        {/* Tour Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            {/* Key Features */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Tour Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Free cancellation: Cancel up to 24-hours in advance for a full refund</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Reserve now & pay later: Keep your travel plans flexible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Duration: 4 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Live tour guide: English, Italian, French</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Small group: Private tour participants</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Itinerary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Day 1: Ancient Marvels & Wild Encounters</h3>
                  <p className="text-muted-foreground">
                    Begin in Colombo, then journey to the Dambulla Cave Temple, a stunning complex of Buddhist art and history. 
                    Step back in time at Polonnaruwa, exploring its grand ruins, temples, and royal gardens. Witness the 
                    "Great Elephant Gathering" at Minneriya National Park, where herds roam freely.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Day 2: Sigiriya's Majesty & Kandy's Spirit</h3>
                  <p className="text-muted-foreground">
                    Conquer the legendary Sigiriya Rock Fortress—climb 1,200 steps for panoramic views! Discover Kandy, 
                    home to the sacred Temple of the Tooth Relic, a spiritual treasure. Stroll around Kandy Lake and lose 
                    yourself in the exotic beauty of Peradeniya Botanical Gardens.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Day 3: Waterfalls, Tea Trails & Hill Country Magic</h3>
                  <p className="text-muted-foreground">
                    Chase waterfalls at Ramboda Falls and soak in views from Ambuluwawa Tower. Tour a tea plantation, 
                    sip world-famous Ceylon tea, and learn how it's made. Explore Nuwara Eliya, "Little England," with 
                    its colonial charm and misty landscapes. Hop on a scenic train ride to Ella, passing emerald hills 
                    and lush valleys. Visit the iconic Nine Arches Bridge and cool off at Ravana Falls.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Day 4: Safari Thrills & Beach Bliss</h3>
                  <p className="text-muted-foreground">
                    Embark on a wildlife safari in Yala National Park, spotting leopards, elephants, and more! Wander 
                    through Galle Fort, a UNESCO-listed Dutch-colonial gem. Unwind on Unawatuna Beach—golden sands, 
                    turquoise waves, and pure relaxation. Snorkel in Hikkaduwa among vibrant coral reefs (optional).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Includes & Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-6 w-6" />
                    Includes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <XCircle className="h-6 w-6" />
                    Excludes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {excludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Important Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What to bring:</h4>
                  <p className="text-muted-foreground">Comfortable shoes, Hat, Camera, Sunscreen, Water</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Know before you go:</h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Wear comfortable walking shoes as there is a moderate amount of walking involved</li>
                    <li>• It is recommended to bring a hat, sunscreen, and a camera</li>
                    <li>• Smoking and consuming food and drinks are not allowed inside the historical sites</li>
                    <li>• Please be ready at your hotel lobby 15 minutes before the pickup time</li>
                    <li>• Children under 8 years are not recommended to participate in this tour</li>
                    <li>• Wheelchair and stroller access is not available</li>
                    <li>• In case of bad weather, some outdoor activities may be cancelled</li>
                    <li>• We do try our best to reserve seats for you in the hill country train, but there are instances that we may not be able to get a seat for you due to high demand; however, we purchase the second-class tickets for you.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            {/* Rates */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tour Rates (USD)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rates.map((rate, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">{rate.type}</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span>Twin sharing:</span>
                          <Badge variant="outline">${rate.twin} p.p</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Single rate:</span>
                          <Badge variant="outline">${rate.single}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <BookingForm 
              packageType="Sri Lanka 4-Day Private Tour With 18 Amazing Places"
              travelers={2}
              totalCost={399}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFourDayTourPackage;