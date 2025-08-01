
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Users, Phone, Calculator, FileText, Calendar, ChevronDown, MapPin, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import headerLogo from '../assets/header-logo.avif';

const MainNavigation = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const location = useLocation();
  const { t } = useTranslation();

  const navigationItems = [
    { id: 'home', label: t('navigation.home'), icon: Home, path: '/' },
    { id: 'itinerary', label: t('navigation.tourPackages'), icon: MapPin, path: '/itinerary' },
    { id: 'blog', label: 'Blog', icon: FileText, path: '/blog' },
    { id: 'about', label: t('navigation.aboutUs'), icon: Users, path: 'https://serendipitypvt.com/about-serendipity-tours-private-limited/' },
    { id: 'contact', label: t('navigation.contactUs'), icon: Phone, path: '/contact' },
    { id: 'terms', label: t('navigation.termsConditions'), icon: FileText, path: '/?section=terms' },
  ];

  const tourPackageItems = [
    { id: '2day-tour', label: '2-Day Green Bless Tour', icon: Calendar, path: '/sri-lanka-green-bless-2-day-cultural-tour' },
    { id: '4day-tour', label: 'Sri Lanka Rare 4-Day Tour', icon: Calendar, path: '/sri-lanka-rare-4-day-tour' },
    { id: '4day-new-tour', label: 'Sri Lanka 4-Day Private Tour With 18 Amazing Places', icon: Calendar, path: '/colombo-sri-lanka-4-day-private-tour-with-18-amazing-places' },
    { id: '5day-tour', label: '5-Day Sri Lanka Cultural & Nature Tour', icon: Calendar, path: '/sri-lanka-rare-5-day-tour' },
    { id: '10day-tour', label: 'Sri Lanka Private 10-Day Round Tour', icon: Calendar, path: '/sri-lanka-rare-10-day-tour' },
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
