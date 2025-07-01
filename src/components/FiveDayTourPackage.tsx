import React, { useState } from 'react';
import { Check, X, Users, Calendar, MapPin, Camera, MessageSquare } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import BookingForm from './BookingForm';

const FiveDayTourPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [comments, setComments] = useState('');

  const packageRates = {
    standard: { double: 699, single: 1299 },
    deluxe: { double: 899, single: 1699 },
    luxury: { double: 1299, single: 2499 }
  };

  const calculatePrice = (packageType: string, travelers: number) => {
    const rates = packageRates[packageType as keyof typeof packageRates];
    if (travelers === 1) {
      return rates.single;
    }
    return rates.double * Math.ceil(travelers / 2);
  };

  const getTotalPrice = () => {
    return calculatePrice(selectedPackage, travelers);
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrival & Colombo City Tour",
      description: "Airport pickup, city tour including Gangaramaya Temple, Independence Square, and Galle Face Green",
      highlights: ["Airport transfer", "City sightseeing", "Welcome dinner"]
    },
    {
      day: 2,
      title: "Kandy - Cultural Capital",
      description: "Journey to Kandy, visit Temple of the Tooth, Royal Botanical Gardens, and cultural show",
      highlights: ["Temple of the Tooth", "Botanical Gardens", "Cultural performance"]
    },
    {
      day: 3,
      title: "Nuwara Eliya - Hill Country",
      description: "Scenic train ride, tea plantation visit, and explore the 'Little England' of Sri Lanka",
      highlights: ["Scenic train journey", "Tea factory tour", "Hill country views"]
    },
    {
      day: 4,
      title: "Galle & South Coast",
      description: "Explore historic Galle Fort, beautiful beaches, and coastal attractions",
      highlights: ["Galle Fort", "Beach time", "Coastal scenery"]
    },
    {
      day: 5,
      title: "Departure",
      description: "Final shopping, last-minute sightseeing, and airport transfer",
      highlights: ["Shopping time", "Airport transfer", "Departure"]
    }
  ];

  const imageGalleries = {
    cultural: [
      { url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800", caption: "Temple of the Tooth Relic" },
      { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800", caption: "Buddhist Ceremonies" },
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800", caption: "Cultural Heritage Sites" }
    ],
    nature: [
      { url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800", caption: "Tea Plantations" },
      { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800", caption: "Hill Country Landscapes" },
      { url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800", caption: "Scenic Train Routes" }
    ],
    beaches: [
      { url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800", caption: "Galle Fort Views" },
      { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800", caption: "Southern Beaches" },
      { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800", caption: "Coastal Adventures" }
    ]
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          5-Day Sri Lanka Cultural & Nature Tour
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Experience the best of Sri Lanka's culture, nature, and beaches in this comprehensive 5-day journey 
          through the island's most iconic destinations.
        </p>
      </div>

      {/* Image Galleries */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {Object.entries(imageGalleries).map(([category, images]) => (
          <div key={category} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <h3 className="text-lg font-bold text-white mb-3 capitalize text-center">
              {category === 'cultural' ? 'Cultural Heritage' : category === 'nature' ? 'Natural Beauty' : 'Beach Paradise'}
            </h3>
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img 
                        src={image.url} 
                        alt={image.caption}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg">
                        <p className="text-sm font-medium">{image.caption}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Detailed Itinerary */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              5-Day Detailed Itinerary
            </h3>
            <div className="space-y-4">
              {itinerary.map((day) => (
                <div key={day.day} className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {day.day}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg mb-2">{day.title}</h4>
                      <p className="text-blue-100 mb-3">{day.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.highlights.map((highlight, index) => (
                          <span key={index} className="bg-blue-500/30 text-blue-100 px-3 py-1 rounded-full text-xs">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Check className="w-5 h-5 mr-2 text-green-400" />
                What's Included
              </h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-400" />Accommodation (4 nights)</li>
                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-400" />All meals (breakfast, lunch, dinner)</li>
                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-400" />Private transportation</li>
                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-400" />Professional tour guide</li>
                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-400" />All entrance fees</li>
                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-400" />Train tickets (where applicable)</li>
                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-400" />Airport transfers</li>
                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-400" />Cultural show tickets</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <X className="w-5 h-5 mr-2 text-red-400" />
                Not Included
              </h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center"><X className="w-4 h-4 mr-2 text-red-400" />International flights</li>
                <li className="flex items-center"><X className="w-4 h-4 mr-2 text-red-400" />Sri Lankan visa fees</li>
                <li className="flex items-center"><X className="w-4 h-4 mr-2 text-red-400" />Travel insurance</li>
                <li className="flex items-center"><X className="w-4 h-4 mr-2 text-red-400" />Personal expenses</li>
                <li className="flex items-center"><X className="w-4 h-4 mr-2 text-red-400" />Alcoholic beverages</li>
                <li className="flex items-center"><X className="w-4 h-4 mr-2 text-red-400" />Tips and gratuities</li>
                <li className="flex items-center"><X className="w-4 h-4 mr-2 text-red-400" />Optional activities</li>
                <li className="flex items-center"><X className="w-4 h-4 mr-2 text-red-400" />Laundry services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Sidebar */}
        <div className="space-y-6">
          {/* Package Selection */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Choose Your Package</h3>
            <div className="space-y-4">
              {['standard', 'deluxe', 'luxury'].map((pkg) => (
                <div key={pkg} className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedPackage === pkg 
                    ? 'border-orange-400 bg-orange-400/20' 
                    : 'border-white/30 hover:border-white/50'
                }`} onClick={() => setSelectedPackage(pkg)}>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white capitalize">{pkg}</span>
                    <span className="text-orange-300 font-bold">
                      ${packageRates[pkg as keyof typeof packageRates].double}/person
                    </span>
                  </div>
                  <p className="text-sm text-blue-100 mt-1">
                    {pkg === 'standard' && 'Comfortable 3-star hotels'}
                    {pkg === 'deluxe' && 'Premium 4-star hotels'}
                    {pkg === 'luxury' && 'Luxury 5-star resorts'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Travelers Selection */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Number of Travelers
            </h3>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setTravelers(Math.max(1, travelers - 1))}
                className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                -
              </button>
              <span className="text-2xl font-bold text-white">{travelers}</span>
              <button 
                onClick={() => setTravelers(Math.min(10, travelers + 1))}
                className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                +
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-2">Maximum 10 travelers per booking</p>
          </div>

          {/* Price Summary */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Price Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-blue-100">
                <span>Package ({selectedPackage})</span>
                <span>${packageRates[selectedPackage as keyof typeof packageRates].double}/person</span>
              </div>
              <div className="flex justify-between text-blue-100">
                <span>Travelers</span>
                <span>{travelers} person{travelers > 1 ? 's' : ''}</span>
              </div>
              <div className="border-t border-white/30 pt-3">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span>${getTotalPrice().toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Button */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <BookingForm 
              packageType={`5-day-${selectedPackage}`}
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

export default FiveDayTourPackage;
