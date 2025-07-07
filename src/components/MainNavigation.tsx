
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Users, Phone, Calculator, FileText, Calendar, ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

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
    { id: '4day-tour', label: '4-Day Tour', icon: Calendar, path: '/4-day-tour' },
    { id: '5day-tour', label: '5-Day Tour', icon: Calendar, path: '/5-day-tour' },
    { id: '10day-tour', label: '10-Day Round Tour', icon: Calendar, path: '/10-day-tour' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
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
              className="flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 bg-white/90 text-blue-800 hover:bg-white border border-blue-200 shadow-sm"
            >
              <IconComponent className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </a>
          );
        }
        
        return (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
              isActive(item.path)
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/90 text-blue-800 hover:bg-white border border-blue-200 shadow-sm'
            }`}
          >
            <IconComponent className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        );
      })}
      
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 bg-white/90 text-blue-800 hover:bg-white border border-blue-200 shadow-sm">
          <Calendar className="w-5 h-5" />
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
    </div>
  );
};

export default MainNavigation;
