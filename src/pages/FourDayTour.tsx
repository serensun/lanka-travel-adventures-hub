
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FourDayTourPackage from '../components/FourDayTourPackage';
import MainNavigation from '../components/MainNavigation';

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

        <MainNavigation />

        <div className="max-w-7xl mx-auto">
          <FourDayTourPackage />
        </div>
      </div>
    </div>
  );
};

export default FourDayTour;
