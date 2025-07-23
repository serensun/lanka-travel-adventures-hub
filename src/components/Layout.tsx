import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;