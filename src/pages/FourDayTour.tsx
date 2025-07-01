
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FourDayTourPackage from '../components/FourDayTourPackage';

const FourDayTour = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-green-500 to-orange-400">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="https://serendipitypvt.com/wp-content/uploads/2025/05/header-image-travel-cart.avif" 
              alt="Serendipity Tours Logo" 
              className="h-20 object-contain"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">
            Sri Lanka Travel Planner
          </h1>
          <p className="text-blue-100 text-lg">Your gateway to paradise</p>
        </div>

        <div className="flex justify-center mb-8">
          <Link
            to="/"
            className="flex items-center space-x-2 px-6 py-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <FourDayTourPackage />
        </div>
      </div>
    </div>
  );
};

export default FourDayTour;
