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
    
    // Anuradhapura Hotels
    {
      id: 4,
      name: "Ulagalla Resort",
      city: "Anuradhapura",
      rating: 5,
      price: 280,
      image: "🌿",
      amenities: ["Nature", "Pool", "Spa", "Restaurant"],
      description: "Luxury eco-resort set in 20 acres of paddy fields and gardens."
    },
    {
      id: 5,
      name: "Palm Garden Village",
      city: "Anuradhapura",
      rating: 4,
      price: 95,
      image: "🏞️",
      amenities: ["Pool", "Restaurant", "Cultural Tours", "Garden"],
      description: "Charming 4-star resort with traditional architecture and modern comforts."
    },
    {
      id: 6,
      name: "Heritage Hotel",
      city: "Anuradhapura",
      rating: 3,
      price: 65,
      image: "🏛️",
      amenities: ["Restaurant", "Cultural Tours", "Wifi"],
      description: "Budget-friendly hotel near ancient ruins with guided tour services."
    },

    // Polonnaruwa Hotels
    {
      id: 7,
      name: "Hotel Sudu Araliya",
      city: "Polonnaruwa",
      rating: 4,
      price: 85,
      image: "🏨",
      amenities: ["Pool", "Restaurant", "Cultural Tours", "Wifi"],
      description: "Comfortable 4-star hotel with easy access to ancient city ruins."
    },
    {
      id: 8,
      name: "The Village",
      city: "Polonnaruwa",
      rating: 3,
      price: 55,
      image: "🏘️",
      amenities: ["Restaurant", "Cultural Tours", "Garden"],
      description: "Traditional village-style accommodation with authentic Sri Lankan experience."
    },
    {
      id: 9,
      name: "Polonnaruwa Rest House",
      city: "Polonnaruwa",
      rating: 3,
      price: 45,
      image: "🏡",
      amenities: ["Restaurant", "Historical", "Basic Wifi"],
      description: "Historic colonial-era rest house with simple but clean accommodations."
    },

    // Kandy Hotels
    {
      id: 10,
      name: "Earl's Regency Hotel",
      city: "Kandy",
      rating: 5,
      price: 140,
      image: "🏰",
      amenities: ["Pool", "Spa", "Restaurant", "Cultural Shows"],
      description: "Luxury hillside hotel with panoramic views of Kandy and cultural performances."
    },
    {
      id: 11,
      name: "Thilanka Hotel",
      city: "Kandy",
      rating: 4,
      price: 90,
      image: "🏨",
      amenities: ["Pool", "Restaurant", "Cultural Tours", "Wifi"],
      description: "Well-located 4-star hotel near Temple of the Tooth with modern amenities."
    },
    {
      id: 12,
      name: "Hotel Topaz",
      city: "Kandy",
      rating: 3,
      price: 60,
      image: "🏢",
      amenities: ["Restaurant", "Wifi", "Room Service"],
      description: "Budget-friendly hotel in Kandy city center with basic but comfortable rooms."
    },
    
    // Dambulla Hotels
    {
      id: 13,
      name: "Heritage Kandalama",
      city: "Dambulla",
      rating: 5,
      price: 160,
      image: "🌿",
      amenities: ["Nature", "Pool", "Spa", "Restaurant"],
      description: "Eco-luxury resort built into a rock face overlooking Kandalama Lake."
    },
    {
      id: 14,
      name: "Amaya Lake",
      city: "Dambulla",
      rating: 4,
      price: 110,
      image: "🏞️",
      amenities: ["Lake View", "Pool", "Restaurant", "Nature"],
      description: "4-star resort on the shores of Kandalama Lake with cultural tours."
    },
    {
      id: 15,
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
      id: 16,
      name: "Tea Trails Bungalows",
      city: "Nuwara Eliya",
      rating: 5,
      price: 250,
      image: "🍃",
      amenities: ["Nature", "Butler", "Restaurant", "Tea Tours"],
      description: "Colonial-era tea planter bungalows in the hill country."
    },
    {
      id: 17,
      name: "Grand Hotel",
      city: "Nuwara Eliya",
      rating: 4,
      price: 130,
      image: "🏰",
      amenities: ["Golf", "Restaurant", "Historical", "Garden"],
      description: "Historic 4-star hotel with colonial charm and golf course access."
    },
    {
      id: 18,
      name: "Hill Club",
      city: "Nuwara Eliya",
      rating: 3,
      price: 85,
      image: "🏡",
      amenities: ["Historical", "Restaurant", "Library"],
      description: "Traditional gentleman's club offering authentic colonial experience."
    },

    // Ella Hotels
    {
      id: 19,
      name: "98 Acres Resort",
      city: "Ella",
      rating: 5,
      price: 180,
      image: "🏔️",
      amenities: ["Nature", "Pool", "Spa", "Restaurant"],
      description: "Luxury resort with stunning views of Ella Gap and surrounding mountains."
    },
    {
      id: 20,
      name: "Zion View Hotel",
      city: "Ella",
      rating: 4,
      price: 75,
      image: "🌄",
      amenities: ["Mountain View", "Restaurant", "Hiking Tours"],
      description: "Boutique hotel with panoramic mountain views and hiking trail access."
    },
    {
      id: 21,
      name: "Ella Mount Heaven",
      city: "Ella",
      rating: 3,
      price: 45,
      image: "🏡",
      amenities: ["Mountain View", "Restaurant", "Basic Wifi"],
      description: "Budget guesthouse with basic amenities and beautiful mountain views."
    },

    // Yala Hotels
    {
      id: 22,
      name: "Cinnamon Wild Yala",
      city: "Yala",
      rating: 5,
      price: 220,
      image: "🐘",
      amenities: ["Safari", "Pool", "Spa", "Restaurant"],
      description: "Luxury tented safari resort on the edge of Yala National Park."
    },
    {
      id: 23,
      name: "Jetwing Yala",
      city: "Yala",
      rating: 4,
      price: 150,
      image: "🌿",
      amenities: ["Safari", "Pool", "Restaurant", "Wildlife Tours"],
      description: "Eco-friendly 4-star resort with direct access to national park."
    },
    {
      id: 24,
      name: "Yala Safari Game Lodge",
      city: "Yala",
      rating: 3,
      price: 80,
      image: "🏕️",
      amenities: ["Safari", "Restaurant", "Wildlife Tours"],
      description: "Simple safari lodge offering authentic wilderness experience."
    },
    
    // Galle Hotels
    {
      id: 25,
      name: "Jetwing Lighthouse",
      city: "Galle",
      rating: 5,
      price: 180,
      image: "🏖️",
      amenities: ["Beach", "Pool", "Spa", "Restaurant"],
      description: "Iconic clifftop hotel designed by Geoffrey Bawa overlooking the ocean."
    },
    {
      id: 26,
      name: "The Fortress Resort",
      city: "Galle",
      rating: 5,
      price: 200,
      image: "🏰",
      amenities: ["Beach", "Pool", "Spa", "Golf"],
      description: "Contemporary luxury resort with stunning ocean views and modern amenities."
    },
    {
      id: 27,
      name: "Amangalla",
      city: "Galle",
      rating: 4,
      price: 140,
      image: "🏛️",
      amenities: ["Pool", "Spa", "Restaurant", "Historical"],
      description: "Historic 4-star hotel within the UNESCO World Heritage Galle Fort."
    },
    {
      id: 28,
      name: "Fort Printers",
      city: "Galle",
      rating: 3,
      price: 90,
      image: "🏨",
      amenities: ["Wifi", "Restaurant", "Historical"],
      description: "Charming boutique hotel in a restored mansion within Galle Fort."
    },

    // Bentota Hotels
    {
      id: 29,
      name: "Saman Villas",
      city: "Bentota",
      rating: 5,
      price: 190,
      image: "🌺",
      amenities: ["Beach", "Pool", "Spa", "Restaurant"],
      description: "Luxury beachfront resort with private villas and pristine beach access."
    },
    {
      id: 30,
      name: "Centara Ceysands Resort",
      city: "Bentota",
      rating: 4,
      price: 120,
      image: "🏖️",
      amenities: ["Beach", "Pool", "Water Sports", "Restaurant"],
      description: "4-star beachfront resort perfect for water sports and relaxation."
    },
    {
      id: 31,
      name: "Bentota Beach Hotel",
      city: "Bentota",
      rating: 3,
      price: 70,
      image: "🏨",
      amenities: ["Beach", "Pool", "Restaurant"],
      description: "Comfortable beachfront hotel with direct beach access and pool."
    },

    // Mirissa Hotels
    {
      id: 32,
      name: "Cape Weligama",
      city: "Mirissa",
      rating: 5,
      price: 240,
      image: "🌊",
      amenities: ["Beach", "Pool", "Spa", "Restaurant"],
      description: "Ultra-luxury clifftop resort with infinity pools and ocean views."
    },
    {
      id: 33,
      name: "Mandara Resort",
      city: "Mirissa",
      rating: 4,
      price: 110,
      image: "🏖️",
      amenities: ["Beach", "Pool", "Restaurant", "Whale Watching"],
      description: "Beachfront 4-star resort with whale watching tours and water activities."
    },
    {
      id: 34,
      name: "Mirissa Beach Resort",
      city: "Mirissa",
      rating: 3,
      price: 65,
      image: "🏨",
      amenities: ["Beach", "Restaurant", "Whale Watching"],
      description: "Simple beachfront accommodation with easy access to whale watching tours."
    },

    // Hikkaduwa Hotels
    {
      id: 35,
      name: "Coral Rock Hotel",
      city: "Hikkaduwa",
      rating: 4,
      price: 100,
      image: "🐠",
      amenities: ["Beach", "Pool", "Diving", "Restaurant"],
      description: "Beachfront 4-star hotel perfect for diving and snorkeling enthusiasts."
    },
    {
      id: 36,
      name: "Hikka Tranz",
      city: "Hikkaduwa",
      rating: 4,
      price: 95,
      image: "🏖️",
      amenities: ["Beach", "Pool", "Water Sports", "Restaurant"],
      description: "Modern beachfront resort with water sports and recreational facilities."
    },
    {
      id: 37,
      name: "Ocean Moon Hotel",
      city: "Hikkaduwa",
      rating: 3,
      price: 50,
      image: "🌙",
      amenities: ["Beach", "Restaurant", "Surfing"],
      description: "Budget-friendly beachfront hotel popular with surfers and backpackers."
    }
  ];

  const cities = ['all', 'Colombo', 'Anuradhapura', 'Polonnaruwa', 'Kandy', 'Dambulla', 'Nuwara Eliya', 'Ella', 'Yala', 'Galle', 'Bentota', 'Mirissa', 'Hikkaduwa'];
  
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
      case 'safari': return <span className="text-sm">🦁</span>;
      case 'wildlife tours': return <span className="text-sm">🐘</span>;
      case 'mountain view': return <span className="text-sm">🏔️</span>;
      case 'hiking tours': return <span className="text-sm">🥾</span>;
      case 'basic wifi': return <span className="text-sm">📶</span>;
      case 'cultural shows': return <span className="text-sm">💃</span>;
      case 'water sports': return <span className="text-sm">🏄</span>;
      case 'whale watching': return <span className="text-sm">🐋</span>;
      case 'diving': return <span className="text-sm">🤿</span>;
      case 'surfing': return <span className="text-sm">🏄</span>;
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
