
import React, { useState } from 'react';
import { Clock, Users, Star, MapPin } from 'lucide-react';

const SightseeingTours = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tours = [
    {
      id: 1,
      name: "Cultural Triangle Tour",
      category: "Cultural",
      duration: "3 Days",
      groupSize: "2-15",
      rating: 4.8,
      price: 180,
      image: "🏛️",
      description: "Explore ancient cities of Anuradhapura, Polonnaruwa, and Sigiriya Lion Rock.",
      highlights: ["Sigiriya Rock Fortress", "Ancient Temples", "Cave Paintings", "Royal Gardens"]
    },
    {
      id: 2,
      name: "Kandy & Hill Country",
      category: "Nature",
      duration: "2 Days",
      groupSize: "2-12",
      rating: 4.9,
      price: 145,
      image: "🏔️",
      description: "Discover the last kingdom of Sri Lanka and stunning tea plantations.",
      highlights: ["Temple of the Tooth", "Tea Factory Visit", "Kandy Lake", "Royal Botanical Gardens"]
    },
    {
      id: 3,  
      name: "Yala Safari Adventure",
      category: "Wildlife",
      duration: "1 Day",
      groupSize: "2-8",
      rating: 4.7,
      price: 85,
      image: "🐘",
      description: "Experience Sri Lanka's premier national park and spot leopards and elephants.",
      highlights: ["Leopard Spotting", "Elephant Herds", "Crocodiles", "Bird Watching"]
    },
    {
      id: 4,
      name: "Galle Fort & Southern Coast",
      category: "Historical",
      duration: "1 Day",
      groupSize: "2-20",
      rating: 4.6,
      price: 75,
      image: "🏰",
      description: "Walk through UNESCO World Heritage Galle Fort and enjoy coastal beauty.",
      highlights: ["Dutch Architecture", "Lighthouse", "Rampart Walk", "Local Markets"]
    },
    {
      id: 5,
      name: "Whale Watching Mirissa",
      category: "Marine",
      duration: "Half Day",
      groupSize: "5-30",
      rating: 4.5,
      price: 45,
      image: "🐋",
      description: "Witness majestic blue whales and dolphins in their natural habitat.",
      highlights: ["Blue Whales", "Sperm Whales", "Dolphins", "Sea Turtles"]
    },
    {
      id: 6,
      name: "Adam's Peak Pilgrimage",
      category: "Adventure",
      duration: "1 Day",
      groupSize: "2-10",
      rating: 4.9,
      price: 65,
      image: "⛰️",
      description: "Climb the sacred mountain for spectacular sunrise views.",
      highlights: ["Sacred Footprint", "Sunrise Views", "Pilgrimage Trail", "Mountain Flora"]
    }
  ];

  const categories = ['all', 'Cultural', 'Nature', 'Wildlife', 'Historical', 'Marine', 'Adventure'];

  const filteredTours = tours.filter(tour => 
    selectedCategory === 'all' || tour.category === selectedCategory
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Sightseeing Tours</h2>
        <p className="text-blue-100">Curated experiences to discover Sri Lanka's treasures</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {category === 'all' ? 'All Tours' : category}
          </button>
        ))}
      </div>

      {/* Tours Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTours.map(tour => (
          <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="p-6">
              <div className="text-6xl mb-4 text-center">{tour.image}</div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{tour.name}</h3>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                  {tour.category}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{tour.groupSize} people</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                  <span>{tour.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">{tour.description}</p>

              {/* Highlights */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Tour Highlights:</h4>
                <div className="grid grid-cols-2 gap-1">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600">
                      <MapPin className="w-3 h-3 mr-1 text-green-500" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-green-600">${tour.price}</span>
                  <span className="text-gray-500 text-sm">/person</span>
                </div>
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                  Book Tour
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SightseeingTours;
