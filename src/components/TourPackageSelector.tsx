
import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Users, Hotel, DollarSign, CheckCircle2 } from 'lucide-react';

const TourPackageSelector = () => {
  const [selectedDuration, setSelectedDuration] = useState(7);
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [travelers, setTravelers] = useState(2);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState(0);

  const packagePrices = {
    standard: { double: 230, single: 200 },
    comfort: { double: 390, single: 300 },
    luxury: { double: 590, single: 455 }
  };

  const destinations = [
    {
      name: 'Colombo',
      activities: ['City Tour'],
      hotels: {
        standard: 'Best Western Hotel',
        comfort: 'Fairway Hotel',
        luxury: 'Cinnamon Grand Hotel'
      }
    },
    {
      name: 'Sigiriya',
      activities: ['Visiting Rock Fortress', 'Village Tour'],
      hotels: {
        standard: 'Elephant Lake Hotel',
        comfort: 'Habarana Village Hotel',
        luxury: 'Cinnamon Lodge Habarana'
      }
    },
    {
      name: 'Habarana',
      activities: ['Minneriya Safari'],
      hotels: {
        standard: 'Elephant Lake Hotel',
        comfort: 'Habarana Village Hotel',
        luxury: 'Cinnamon Lodge Habarana'
      }
    },
    {
      name: 'Kitulgala',
      activities: ['White Water Rafting', 'Rain Forest Exploration'],
      hotels: {
        standard: 'Kitulgala Rest House',
        comfort: 'Plantation Hotel',
        luxury: 'Borderlands Safari Lodge'
      }
    },
    {
      name: 'Udawalawe',
      activities: ['Safari', 'Visiting Elephant Orphanage'],
      hotels: {
        standard: 'Grand Udawalawe Safari Resort',
        comfort: 'Centauria Lake Resort',
        luxury: 'Kalu River Lodge'
      }
    },
    {
      name: 'Dambulla',
      activities: ['Visiting Dambulla Temple'],
      hotels: {
        standard: 'Sundaras Resort',
        comfort: 'Amaya Lake',
        luxury: 'Heritage Kandalama'
      }
    },
    {
      name: 'Kandy',
      activities: ['Visiting Tooth Relic Temple', 'Kandy City Tour', 'Kandyan Cultural Show'],
      hotels: {
        standard: 'Ganga Addara Hotel',
        comfort: 'Thilanka Hotel',
        luxury: 'Mahaweli Reach Hotel'
      }
    },
    {
      name: 'Anuradhapura',
      activities: ['Ancient City Tour'],
      hotels: {
        standard: 'Milano Tourist Rest',
        comfort: 'Palm Garden Village',
        luxury: 'Ulagalla Resort'
      }
    },
    {
      name: 'Polonnaruwa',
      activities: ['Ancient City Tour'],
      hotels: {
        standard: 'The Village',
        comfort: 'Hotel Sudu Araliya',
        luxury: 'Deer Park Hotel'
      }
    },
    {
      name: 'Nuwara Eliya',
      activities: ['Tea Plantation Visit', 'Tea Factory Visit', 'Waterfall Visit', 'Horton Plains Tour', 'Hill Country Train Trip'],
      hotels: {
        standard: 'Summerhill Breeze Hotel',
        comfort: 'Araliya Red Hotel',
        luxury: 'Golden Ridge Hotel'
      }
    },
    {
      name: 'Ella',
      activities: ['Mini Adams Peak Hike', 'Visiting 9-Arch Bridge'],
      hotels: {
        standard: 'Hotel Alta Vista',
        comfort: 'Hotel Moi',
        luxury: '99 Acres Hotel'
      }
    },
    {
      name: 'Yala',
      activities: ['Yala Safari', 'Visiting Kataragama Temple'],
      hotels: {
        standard: 'Rain Tree by Oakray Hotel',
        comfort: 'Chaarya Resort',
        luxury: 'Jetwing Yala'
      }
    },
    {
      name: 'South Coast Beaches',
      activities: ['Whale Watching', 'Relax'],
      hotels: {
        standard: 'South Lake Resort',
        comfort: 'Triple-O-Six',
        luxury: 'Araliya Beach Hotel'
      }
    },
    {
      name: 'West Coast Beaches',
      activities: ['Surfing', 'Diving', 'River Boating', 'Relaxing'],
      hotels: {
        standard: 'Hibiscus Beach Hotel',
        comfort: 'Earls Reef Hotel',
        luxury: 'Eden Resort'
      }
    }
  ];

  useEffect(() => {
    const pricePerDay = travelers === 1 
      ? packagePrices[selectedPackage].single 
      : packagePrices[selectedPackage].double;
    setTotalCost(pricePerDay * selectedDuration);
  }, [selectedDuration, selectedPackage, travelers]);

  const toggleDestination = (destination: string) => {
    setSelectedDestinations(prev => 
      prev.includes(destination) 
        ? prev.filter(d => d !== destination)
        : [...prev, destination]
    );
  };

  const toggleActivity = (activity: string) => {
    setSelectedActivities(prev => 
      prev.includes(activity) 
        ? prev.filter(a => a !== activity)
        : [...prev, activity]
    );
  };

  const getPackageColor = (pkg: string) => {
    switch (pkg) {
      case 'standard': return 'from-green-500 to-blue-500';
      case 'comfort': return 'from-blue-500 to-purple-500';
      case 'luxury': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Customize Your Sri Lanka Adventure</h2>
        <p className="text-blue-100">Create your perfect Sri Lankan tour package</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Trip Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Duration Selection */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Trip Duration
            </h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSelectedDuration(Math.max(1, selectedDuration - 1))}
                className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                -
              </button>
              <span className="text-white text-xl font-semibold w-16 text-center">{selectedDuration} days</span>
              <button
                onClick={() => setSelectedDuration(Math.min(24, selectedDuration + 1))}
                className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                +
              </button>
            </div>
            <input
              type="range"
              min="1"
              max="24"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(Number(e.target.value))}
              className="w-full mt-4"
            />
          </div>

          {/* Travelers */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Number of Travelers
            </h3>
            <div className="flex space-x-4">
              <button
                onClick={() => setTravelers(1)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  travelers === 1 
                    ? 'bg-white text-blue-600' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Single (1 person)
              </button>
              <button
                onClick={() => setTravelers(2)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  travelers === 2 
                    ? 'bg-white text-blue-600' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Double (2 persons)
              </button>
            </div>
          </div>

          {/* Package Selection */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Hotel className="w-5 h-5 mr-2" />
              Package Type
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(packagePrices).map(([pkg, prices]) => (
                <button
                  key={pkg}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`p-4 rounded-lg text-left transition-all transform hover:scale-105 ${
                    selectedPackage === pkg
                      ? `bg-gradient-to-r ${getPackageColor(pkg)} text-white shadow-lg`
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <div className="font-semibold capitalize mb-2">{pkg} Package</div>
                  <div className="text-sm">
                    <div>${prices.double}/day (2 persons)</div>
                    <div>${prices.single}/day (1 person)</div>
                  </div>
                  <div className="text-xs mt-2 opacity-75">
                    {pkg === 'standard' && '3-star hotels'}
                    {pkg === 'comfort' && '4-star hotels'}
                    {pkg === 'luxury' && '5-star hotels'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Select Destinations
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {destinations.map((dest) => (
                <label key={dest.name} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedDestinations.includes(dest.name)}
                    onChange={() => toggleDestination(dest.name)}
                    className="w-5 h-5 text-orange-500 rounded focus:ring-orange-300"
                  />
                  <div className="flex-1">
                    <div className="text-white font-medium">{dest.name}</div>
                    <div className="text-blue-100 text-sm">
                      {dest.hotels[selectedPackage]}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Select Activities</h3>
            <div className="space-y-4">
              {destinations
                .filter(dest => selectedDestinations.includes(dest.name))
                .map(dest => (
                  <div key={dest.name} className="border-l-4 border-orange-300 pl-4">
                    <h4 className="text-white font-semibold mb-2">{dest.name}</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {dest.activities.map(activity => (
                        <label key={`${dest.name}-${activity}`} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedActivities.includes(`${dest.name}: ${activity}`)}
                            onChange={() => toggleActivity(`${dest.name}: ${activity}`)}
                            className="w-4 h-4 text-orange-500 rounded focus:ring-orange-300"
                          />
                          <span className="text-blue-100 text-sm">{activity}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2" />
            Tour Summary
          </h3>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Duration</span>
                <span className="font-semibold">{selectedDuration} days</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Travelers</span>
                <span className="font-semibold">{travelers} person{travelers > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Package</span>
                <span className="font-semibold capitalize">{selectedPackage}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Rate per day</span>
                <span className="font-semibold">
                  ${travelers === 1 
                    ? packagePrices[selectedPackage].single 
                    : packagePrices[selectedPackage].double}
                </span>
              </div>
            </div>

            {selectedDestinations.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Selected Destinations</h4>
                <div className="space-y-2">
                  {selectedDestinations.map(dest => {
                    const destData = destinations.find(d => d.name === dest);
                    return (
                      <div key={dest} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">{dest}</div>
                          <div className="text-gray-500">{destData?.hotels[selectedPackage]}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {selectedActivities.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Selected Activities</h4>
                <div className="space-y-1">
                  {selectedActivities.map(activity => (
                    <div key={activity} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-gray-800">Total Cost</span>
                <span className="text-green-600">${totalCost.toLocaleString()}</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                For {selectedDuration} days, {travelers} person{travelers > 1 ? 's' : ''}
              </p>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
              Book This Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackageSelector;
