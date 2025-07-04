
import React from 'react';
import TenDayTourPackage from '@/components/TenDayTourPackage';
import MainNavigation from '@/components/MainNavigation';

const TenDayTour = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="https://serendipitypvt.com/wp-content/uploads/2025/05/header-image-travel-cart.avif" 
              alt="Serendipity Tours Logo" 
              className="h-20 object-contain"
            />
          </div>
          <h1 className="text-5xl font-bold text-blue-900 mb-2">
            Sri Lanka Travel Planner
          </h1>
          <p className="text-blue-700 text-lg">Your gateway to paradise</p>
        </div>

        <MainNavigation />

        <div className="max-w-7xl mx-auto">
          <TenDayTourPackage />
        </div>
      </div>
    </div>
  );
};

export default TenDayTour;
