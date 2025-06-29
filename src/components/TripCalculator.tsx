
import React, { useState, useEffect } from 'react';
import { Calculator, Plus, Minus, DollarSign } from 'lucide-react';

const TripCalculator = () => {
  const [tripData, setTripData] = useState({
    duration: 7,
    travelers: 2,
    accommodationType: 'mid-range',
    transportType: 'private-car',
    mealPlan: 'mixed',
    activities: 3
  });

  const [costs, setCosts] = useState({
    accommodation: 0,
    transport: 0,
    meals: 0,
    activities: 0,
    misc: 0,
    total: 0
  });

  const accommodationRates = {
    'budget': 25,
    'mid-range': 80,
    'luxury': 200
  };

  const transportRates = {
    'public': 5,
    'private-car': 40,
    'private-driver': 60
  };

  const mealRates = {
    'local': 8,
    'mixed': 15,
    'international': 25
  };

  const activityRate = 35;

  useEffect(() => {
    calculateCosts();
  }, [tripData]);

  const calculateCosts = () => {
    const accommodation = accommodationRates[tripData.accommodationType] * tripData.duration * tripData.travelers;
    const transport = transportRates[tripData.transportType] * tripData.duration;
    const meals = mealRates[tripData.mealPlan] * tripData.duration * tripData.travelers;
    const activities = activityRate * tripData.activities * tripData.travelers;
    const misc = (accommodation + transport + meals + activities) * 0.15; // 15% for miscellaneous

    const total = accommodation + transport + meals + activities + misc;

    setCosts({
      accommodation,
      transport,
      meals,
      activities,
      misc,
      total
    });
  };

  const updateTripData = (field: string, value: any) => {
    setTripData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const costItems = [
    { label: 'Accommodation', value: costs.accommodation, color: 'bg-blue-500' },
    { label: 'Transport', value: costs.transport, color: 'bg-green-500' },
    { label: 'Meals', value: costs.meals, color: 'bg-orange-500' },
    { label: 'Activities', value: costs.activities, color: 'bg-purple-500' },
    { label: 'Miscellaneous', value: costs.misc, color: 'bg-gray-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Trip Cost Calculator</h2>
        <p className="text-blue-100">Plan your budget for the perfect Sri Lankan adventure</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Calculator className="w-5 h-5 mr-2" />
            Trip Details
          </h3>

          {/* Duration */}
          <div>
            <label className="block text-white font-medium mb-2">Trip Duration (days)</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => updateTripData('duration', Math.max(1, tripData.duration - 1))}
                className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-white text-xl font-semibold w-12 text-center">{tripData.duration}</span>
              <button
                onClick={() => updateTripData('duration', tripData.duration + 1)}
                className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Travelers */}
          <div>
            <label className="block text-white font-medium mb-2">Number of Travelers</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => updateTripData('travelers', Math.max(1, tripData.travelers - 1))}
                className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-white text-xl font-semibold w-12 text-center">{tripData.travelers}</span>
              <button
                onClick={() => updateTripData('travelers', tripData.travelers + 1)}
                className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Accommodation Type */}
          <div>
            <label className="block text-white font-medium mb-2">Accommodation Type</label>
            <select
              value={tripData.accommodationType}
              onChange={(e) => updateTripData('accommodationType', e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="budget" className="bg-blue-600 text-white">Budget ($25/night)</option>
              <option value="mid-range" className="bg-blue-600 text-white">Mid-range ($80/night)</option>
              <option value="luxury" className="bg-blue-600 text-white">Luxury ($200/night)</option>
            </select>
          </div>

          {/* Transport Type */}
          <div>
            <label className="block text-white font-medium mb-2">Transport</label>
            <select
              value={tripData.transportType}
              onChange={(e) => updateTripData('transportType', e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="public" className="bg-blue-600 text-white">Public Transport ($5/day)</option>
              <option value="private-car" className="bg-blue-600 text-white">Private Car ($40/day)</option>
              <option value="private-driver" className="bg-blue-600 text-white">Private Driver ($60/day)</option>
            </select>
          </div>

          {/* Meal Plan */}
          <div>
            <label className="block text-white font-medium mb-2">Meal Plan</label>
            <select
              value={tripData.mealPlan}
              onChange={(e) => updateTripData('mealPlan', e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="local" className="bg-blue-600 text-white">Local Food ($8/day)</option>
              <option value="mixed" className="bg-blue-600 text-white">Mixed Cuisine ($15/day)</option>
              <option value="international" className="bg-blue-600 text-white">International ($25/day)</option>
            </select>
          </div>

          {/* Activities */}
          <div>
            <label className="block text-white font-medium mb-2">Number of Activities</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => updateTripData('activities', Math.max(0, tripData.activities - 1))}
                className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-white text-xl font-semibold w-12 text-center">{tripData.activities}</span>
              <button
                onClick={() => updateTripData('activities', tripData.activities + 1)}
                className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-1">$35 per person per activity</p>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2" />
            Cost Breakdown
          </h3>

          {/* Cost Items */}
          <div className="space-y-4">
            {costItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full ${item.color} mr-3`}></div>
                  <span className="text-gray-700">{item.label}</span>
                </div>
                <span className="font-semibold text-gray-800">${item.value.toFixed(0)}</span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span className="text-gray-800">Total Cost</span>
              <span className="text-green-600">${costs.total.toFixed(0)}</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              ${(costs.total / tripData.travelers).toFixed(0)} per person
            </p>
          </div>

          {/* Visual Bar Chart */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-700">Cost Distribution</h4>
            <div className="relative h-8 bg-gray-200 rounded-lg overflow-hidden">
              {costItems.map((item, index) => {
                const percentage = (item.value / costs.total) * 100;
                const previousPercentage = costItems.slice(0, index).reduce((sum, prevItem) => sum + (prevItem.value / costs.total) * 100, 0);
                
                return (
                  <div
                    key={index}
                    className={`absolute h-full ${item.color}`}
                    style={{
                      left: `${previousPercentage}%`,
                      width: `${percentage}%`
                    }}
                  ></div>
                );
              })}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Money-Saving Tips</h4>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>• Book accommodations in advance for better rates</li>
              <li>• Try local restaurants for authentic and affordable meals</li>
              <li>• Use public transport when possible</li>
              <li>• Book group tours for discounted activity rates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCalculator;
