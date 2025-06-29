
import React, { useState } from 'react';
import { MapPin, Clock, Camera, Star } from 'lucide-react';

const PlacesToVisit = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const places = [
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      region: "Central",
      type: "Historical",
      visitDuration: "3-4 hours",
      bestTime: "Early morning",
      rating: 4.8,
      entryFee: 30,
      image: "🏔️",
      description: "Ancient rock fortress and palace with spectacular frescoes and gardens.",
      tips: ["Wear comfortable shoes", "Start early to avoid crowds", "Bring water", "Don't miss the mirror wall"]
    },
    {
      id: 2,
      name: "Temple of the Sacred Tooth",
      region: "Central",
      type: "Religious",
      visitDuration: "1-2 hours",
      bestTime: "Evening puja",
      rating: 4.7,
      entryFee: 2,
      image: "🏛️",
      description: "Sacred Buddhist temple housing a tooth relic of Lord Buddha.",
      tips: ["Dress modestly", "Remove shoes", "Photography restricted inside", "Visit during evening ceremony"]
    },
    {
      id: 3,
      name: "Ella Rock",
      region: "Central",
      type: "Nature",
      visitDuration: "4-5 hours",
      bestTime: "Early morning",
      rating: 4.9,
      entryFee: 0,
      image: "⛰️",
      description: "Scenic hiking trail with breathtaking views of tea plantations and valleys.",
      tips: ["Start before sunrise", "Hire a local guide", "Wear hiking boots", "Pack snacks and water"]
    },
    {
      id: 4,
      name: "Galle Fort",
      region: "Southern",
      type: "Historical",
      visitDuration: "2-3 hours",
      bestTime: "Sunset",
      rating: 4.6,
      entryFee: 0,
      image: "🏰",
      description: "Well-preserved Dutch colonial fort with charming streets and ocean views.",
      tips: ["Walk the ramparts at sunset", "Explore local boutiques", "Try seafood restaurants", "Visit the lighthouse"]
    },
    {
      id: 5,
      name: "Yala National Park",
      region: "Southern",
      type: "Wildlife",
      visitDuration: "Half day",
      bestTime: "Early morning",
      rating: 4.7,
      entryFee: 25,
      image: "🐘",
      description: "Premier wildlife sanctuary famous for leopards, elephants, and diverse fauna.",
      tips: ["Book safari in advance", "Bring binoculars", "Stay quiet during safari", "Visit in dry season for better sightings"]
    },
    {
      id: 6,
      name: "Dambulla Cave Temple",
      region: "Central",
      type: "Religious",
      visitDuration: "1-2 hours",
      bestTime: "Morning",
      rating: 4.5,
      entryFee: 10,
      image: "🕯️",
      description: "Ancient cave complex with Buddha statues and colorful ceiling paintings.",
      tips: ["Climb early to avoid heat", "Respect photography rules", "Wear modest clothing", "Bring a flashlight"]
    },
    {
      id: 7,
      name: "Nuwara Eliya Tea Plantations",
      region: "Central",
      type: "Nature",
      visitDuration: "Half day",
      bestTime: "Morning",
      rating: 4.8,
      entryFee: 5,
      image: "🍃",
      description: "Lush green tea estates with factory tours and scenic mountain views.",
      tips: ["Take a factory tour", "Try fresh Ceylon tea", "Bring warm clothes", "Best photos in morning mist"]
    },
    {
      id: 8,
      name: "Mirissa Beach",
      region: "Southern",
      type: "Beach",
      visitDuration: "Full day",
      bestTime: "Any time",
      rating: 4.4,
      entryFee: 0,
      image: "🏖️",
      description: "Beautiful crescent-shaped beach perfect for whale watching and relaxation.",
      tips: ["Go whale watching", "Try coconut tree hill", "Sunset is spectacular", "Beware of strong currents"]
    }
  ];

  const regions = ['all', 'Central', 'Southern', 'Western', 'Northern'];
  const types = ['all', 'Historical', 'Religious', 'Nature', 'Wildlife', 'Beach'];

  const [selectedType, setSelectedType] = useState('all');

  const filteredPlaces = places.filter(place => {
    const regionMatch = selectedRegion === 'all' || place.region === selectedRegion;
    const typeMatch = selectedType === 'all' || place.type === selectedType;
    return regionMatch && typeMatch;
  });

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Places to Visit</h2>
        <p className="text-blue-100">Discover Sri Lanka's most spectacular destinations</p>
      </div>

      {/* Filters */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white font-medium mb-2">Region</label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              {regions.map(region => (
                <option key={region} value={region} className="bg-blue-600 text-white">
                  {region === 'all' ? 'All Regions' : region}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              {types.map(type => (
                <option key={type} value={type} className="bg-blue-600 text-white">
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Places Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaces.map(place => (
          <div key={place.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="p-6">
              <div className="text-6xl mb-4 text-center">{place.image}</div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{place.name}</h3>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm text-gray-600">{place.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{place.region}</span>
                </div>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                  {place.type}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{place.visitDuration}</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-4 h-4 mr-1" />
                  <span>{place.bestTime}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">{place.description}</p>

              {/* Tips */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Visitor Tips:</h4>
                <ul className="space-y-1">
                  {place.tips.slice(0, 2).map((tip, index) => (
                    <li key={index} className="text-xs text-gray-600 flex items-start">
                      <span className="w-1 h-1 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-bold text-green-600">
                    {place.entryFee === 0 ? 'Free' : `$${place.entryFee}`}
                  </span>
                  <span className="text-gray-500 text-sm"> entry</span>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
