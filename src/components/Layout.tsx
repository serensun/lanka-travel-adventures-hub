import React from 'react';
import MainNavigation from './MainNavigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <MainNavigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;