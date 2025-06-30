import React, { useState } from 'react';
import { MapPin, Hotel, Camera, Calculator, Plane, Star, Calendar } from 'lucide-react';
import HotelBooking from '../components/HotelBooking';
import SightseeingTours from '../components/SightseeingTours';
import PlacesToVisit from '../components/PlacesToVisit';
import TourPackageSelector from '../components/TourPackageSelector';
import FourDayTourPackage from '../components/FourDayTourPackage';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: Plane },
    { id: '4day-tour', label: '4-Day Tour', icon: Calendar },
    { id: 'hotels', label: 'Hotels', icon: Hotel },
    { id: 'tours', label: 'Tours', icon: Camera },
    { id: 'places', label: 'Places', icon: MapPin },
    { id: 'packages', label: 'Custom Packages', icon: Calculator },
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case '4day-tour':
        return <FourDayTourPackage />;
      case 'hotels':
        return <HotelBooking />;
      case 'tours':
        return <SightseeingTours />;
      case 'places':
        return <PlacesToVisit />;
      case 'packages':
        return <TourPackageSelector />;
      default:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white mb-4">
                Discover the Pearl of the Indian Ocean
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Plan your perfect Sri Lankan adventure with our comprehensive travel planner. 
                From pristine beaches to ancient temples, we'll help you create unforgettable memories.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Luxury Hotels",
                  description: "5-star resorts and boutique accommodations",
                  price: "From $80/night",
                  image: "🏨"
                },
                {
                  title: "Cultural Tours",
                  description: "Ancient temples and heritage sites",
                  price: "From $45/person",
                  image: "🏛️"
                },
                {
                  title: "Beach Adventures",
                  description: "Pristine coastlines and water sports",
                  price: "From $25/person",
                  image: "🏖️"
                },
                {
                  title: "Wildlife Safaris",
                  description: "National parks and elephant sanctuaries",
                  price: "From $65/person",
                  image: "🐘"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl mb-4">{item.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm mb-3">{item.description}</p>
                  <div className="text-orange-300 font-semibold">{item.price}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Sri Lanka?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="space-y-2">
                  <Star className="w-6 h-6 text-orange-300" />
                  <h4 className="font-semibold text-white">Rich Culture</h4>
                  <p className="text-blue-100 text-sm">2,500 years of history with ancient temples and traditions</p>
                </div>
                <div className="space-y-2">
                  <Star className="w-6 h-6 text-orange-300" />
                  <h4 className="font-semibold text-white">Natural Beauty</h4>
                  <p className="text-blue-100 text-sm">From tea plantations to pristine beaches and wildlife</p>
                </div>
                <div className="space-y-2">
                  <Star className="w-6 h-6 text-orange-300" />
                  <h4 className="font-semibold text-white">Affordable Luxury</h4>
                  <p className="text-blue-100 text-sm">World-class experiences at incredible value</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-green-500 to-orange-400">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">
            Sri Lanka Travel Planner
          </h1>
          <p className="text-blue-100 text-lg">Your gateway to paradise</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
};

export default Index;
