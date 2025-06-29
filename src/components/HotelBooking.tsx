
import React, { useState } from 'react';
import { Star, MapPin, Wifi, Car, Utensils, Waves } from 'lucide-react';

const HotelBooking = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');

  const hotels = [
    // Colombo Hotels
    {
      id: 1,
      name: "Cinnamon Grand Colombo",
      city: "Colombo",
      rating: 5,
      price: 150,
      image: "🏨",
      amenities: ["Wifi", "Pool", "Spa", "Restaurant"],
      description: "Luxury hotel in the heart of Colombo with world-class amenities."
    },
    {
      id: 2,
      name: "Hilton Colombo",
      city: "Colombo",
      rating: 4,
      price: 120,
      image: "🏢",
      amenities: ["Wifi", "Pool", "Restaurant", "Gym"],
      description: "Modern 4-star hotel with excellent business facilities and city views."
    },
    {
      id: 3,
      name: "Hotel Galadari",
      city: "Colombo",
      rating: 3,
      price: 80,
      image: "🏨",
      amenities: ["Wifi", "Restaurant", "Room Service"],
      description: "Comfortable 3-star accommodation in central Colombo with harbor views."
    },
    
    // Galle Hotels
    {
      id: 4,
      name: "Jetwing Lighthouse",
      city: "Galle",
      rating: 5,
      price: 180,
      image: "🏖️",
      amenities: ["Beach", "Pool", "Spa", "Restaurant"],
      description: "Iconic clifftop hotel designed by Geoffrey Bawa overlooking the ocean."
    },
    {
      id: 5,
      name: "The Fortress Resort",
      city: "Galle",
      rating: 5,
      price: 200,
      image: "🏰",
      amenities: ["Beach", "Pool", "Spa", "Golf"],
      description: "Contemporary luxury resort with stunning ocean views and modern amenities."
    },
    {
      id: 6,
      name: "Amangalla",
      city: "Galle",
      rating: 4,
      price: 140,
      image: "🏛️",
      amenities: ["Pool", "Spa", "Restaurant", "Historical"],
      description: "Historic 4-star hotel within the UNESCO World Heritage Galle Fort."
    },
    {
      id: 7,
      name: "Fort Printers",
      city: "Galle",
      rating: 3,
      price: 90,
      image: "🏨",
      amenities: ["Wifi", "Restaurant", "Historical"],
      description: "Charming boutique hotel in a restored mansion within Galle Fort."
    },

    // Dambulla Hotels
    {
      id: 8,
      name: "Heritage Kandalama",
      city: "Dambulla",
      rating: 5,
      price: 160,
      image: "🌿",
      amenities: ["Nature", "Pool", "Spa", "Restaurant"],
      description: "Eco-luxury resort built into a rock face overlooking Kandalama Lake."
    },
    {
      id: 9,
      name: "Amaya Lake",
      city: "Dambulla",
      rating: 4,
      price: 110,
      image: "🏞️",
      amenities: ["Lake View", "Pool", "Restaurant", "Nature"],
      description: "4-star resort on the shores of Kandalama Lake with cultural tours."
    },
    {
      id: 10,
      name: "Pelwehera Village Resort",
      city: "Dambulla",
      rating: 3,
      price: 70,
      image: "🏘️",
      amenities: ["Pool", "Restaurant", "Cultural Tours"],
      description: "Traditional village-style accommodation near ancient cave temples."
    },

    // Nuwara Eliya Hotels
    {
      id: 11,
      name: "Tea Trails Bungalows",
      city: "Nuwara Eliya",
      rating: 5,
      price: 250,
      image: "🍃",
      amenities: ["Nature", "Butler", "Restaurant", "Tea Tours"],
      description: "Colonial-era tea planter bungalows in the hill country."
    },
    {
      id: 12,
      name: "Grand Hotel",
      city: "Nuwara Eliya",
      rating: 4,
      price: 130,
      image: "🏰",
      amenities: ["Golf", "Restaurant", "Historical", "Garden"],
      description: "Historic 4-star hotel with colonial charm and golf course access."
    },
    {
      id: 13,
      name: "Hill Club",
      city: "Nuwara Eliya",
      rating: 3,
      price: 85,
      image: "🏡",
      amenities: ["Historical", "Restaurant", "Library"],
      description: "Traditional gentleman's club offering authentic colonial experience."
    },

    // Tangalle Hotels
    {
      id: 14,
      name: "Anantara Peace Haven",
      city: "Tangalle",
      rating: 5,
      price: 220,
      image: "🌺",
      amenities: ["Beach", "Pool", "Spa", "Restaurant"],
      description: "Luxury beachfront resort with private villas and pristine beach access."
    },
    {
      id: 15,
      name: "Shangri-La's Hambantota",
      city: "Tangalle",
      rating: 4,
      price: 145,
      image: "🏖️",
      amenities: ["Beach", "Pool", "Golf", "Restaurant"],
      description: "4-star resort with championship golf course and elephant sanctuary visits."
    },
    {
      id: 16,
      name: "Turtle Bay Eco Lodge",
      city: "Tangalle",
      rating: 3,
      price: 75,
      image: "🐢",
      amenities: ["Beach", "Eco-friendly", "Restaurant"],
      description: "Eco-friendly beachfront lodge perfect for turtle watching and surfing."
    }
  ];

  const cities = ['all', 'Colombo', 'Galle', 'Dambulla', 'Nuwara Eliya', 'Tangalle'];
  const budgetRanges = [
    { value: 'all', label: 'All Budgets' },
    { value: 'budget', label: 'Under $100' },
    { value: 'mid', label: '$100 - $200' },
    { value: 'luxury', label: 'Above $200' }
  ];

  const filteredHotels = hotels.filter(hotel => {
    const cityMatch = selectedCity === 'all' || hotel.city === selectedCity;
    const budgetMatch = selectedBudget === 'all' || 
      (selectedBudget === 'budget' && hotel.price < 100) ||
      (selectedBudget === 'mid' && hotel.price >= 100 && hotel.price <= 200) ||
      (selectedBudget === 'luxury' && hotel.price > 200);
    
    return cityMatch && budgetMatch;
  });

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'pool': return <Waves className="w-4 h-4" />;
      case 'restaurant': return <Utensils className="w-4 h-4" />;
      case 'spa': return <span className="text-sm">🧘</span>;
      case 'beach': return <span className="text-sm">🏖️</span>;
      case 'nature': return <span className="text-sm">🌿</span>;
      case 'golf': return <span className="text-sm">⛳</span>;
      case 'butler': return <span className="text-sm">🤵</span>;
      case 'tea tours': return <span className="text-sm">🍃</span>;
      case 'historical': return <span className="text-sm">🏛️</span>;
      case 'lake view': return <span className="text-sm">🏞️</span>;
      case 'cultural tours': return <span className="text-sm">🎭</span>;
      case 'garden': return <span className="text-sm">🌺</span>;
      case 'library': return <span className="text-sm">📚</span>;
      case 'eco-friendly': return <span className="text-sm">♻️</span>;
      case 'gym': return <span className="text-sm">💪</span>;
      case 'room service': return <span className="text-sm">🛎️</span>;
      default: return <Car className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Hotels & Accommodation</h2>
        <p className="text-blue-100">Discover luxury resorts and boutique hotels across Sri Lanka</p>
      </div>

      {/* Filters */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white font-medium mb-2">City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              {cities.map(city => (
                <option key={city} value={city} className="bg-blue-600 text-white">
                  {city === 'all' ? 'All Cities' : city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Budget</label>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              {budgetRanges.map(range => (
                <option key={range.value} value={range.value} className="bg-blue-600 text-white">
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map(hotel => (
          <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="p-6">
              <div className="text-6xl mb-4 text-center">{hotel.image}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{hotel.city}</span>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(hotel.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4">{hotel.description}</p>
              
              {/* Amenities */}
              <div className="flex flex-wrap gap-2 mb-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center bg-blue-50 px-2 py-1 rounded-full text-xs text-blue-600">
                    {getAmenityIcon(amenity)}
                    <span className="ml-1">{amenity}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-green-600">${hotel.price}</span>
                  <span className="text-gray-500 text-sm">/night</span>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelBooking;
