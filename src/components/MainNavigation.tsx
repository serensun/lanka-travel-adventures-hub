
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Users, Phone, Calculator, FileText, Calendar, ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import headerLogo from '../assets/header-logo.avif';

const MainNavigation = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const location = useLocation();

  const navigationItems = [
    { id: 'about', label: 'About Us', icon: Users, path: 'https://serendipitypvt.com/about-serendipity-tours-private-limited/' },
    { id: 'contact', label: 'Contact Us', icon: Phone, path: '/?section=contact' },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText, path: '/?section=terms' },
  ];

  const tourPackageItems = [
    { id: '2day-tour', label: '2-Day Green Bless Tour', icon: Calendar, path: '/2-day-tour' },
    { id: '4day-tour', label: 'Sri Lanka Rare 4-Day Tour', icon: Calendar, path: '/sri-lanka-rare-4-day-tour' },
    { id: '4day-new-tour', label: 'Sri Lanka 4-Day Private Tour With 18 Amazing Places', icon: Calendar, path: '/colombo-sri-lanka-4-day-private-tour-with-18-amazing-places' },
    { id: '5day-tour', label: '5-Day Sri Lanka Cultural & Nature Tour', icon: Calendar, path: '/5-Day-Sri-Lanka-Cultural-Nature-Tour' },
    { id: '10day-tour', label: '10-Day Round Tour', icon: Calendar, path: '/10-day-tour' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={headerLogo} 
              alt="Serendipity Tours" 
              className="h-16 w-auto"
            />
          </Link>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isExternalLink = item.path.startsWith('http');
              
              if (isExternalLink) {
                return (
                  <a
                    key={item.id}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 text-blue-800 hover:bg-blue-50"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                );
              }
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-blue-800 hover:bg-blue-50'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 text-blue-800 hover:bg-blue-50">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Tour Packages</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border-0 z-50">
                {tourPackageItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <DropdownMenuItem key={item.id} className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-50 cursor-pointer">
                      <Link to={item.path} className="flex items-center space-x-2 w-full text-blue-800">
                        <IconComponent className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          {/* Mobile Menu Button - You can expand this later for mobile responsiveness */}
          <div className="md:hidden">
            <button className="text-blue-800 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
