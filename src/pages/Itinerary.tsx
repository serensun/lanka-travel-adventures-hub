import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, DollarSign } from 'lucide-react';
import tourGallery1 from '../assets/tour-gallery-1.avif';
import tourGallery2 from '../assets/tour-gallery-2.avif';
import tourGallery3 from '../assets/tour-gallery-3.avif';
import newTourGallery1 from '../assets/new-tour-gallery-1.avif';
import newTourGallery5 from '../assets/new-tour-gallery-5.avif';

const Itinerary = () => {
  const tourPackages = [
    {
      id: '2day-tour',
      title: '2-Day Green Bless Tour',
      description: 'Experience the natural beauty of Sri Lanka with visits to Sigiriya Rock Fortress and Dambulla Cave Temple.',
      duration: 2,
      price: 'From $180',
      image: tourGallery1,
      path: '/2-day-tour',
      highlights: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', 'Cultural Triangle']
    },
    {
      id: '4day-tour',
      title: 'Sri Lanka Rare 4-Day Tour',
      description: 'Discover the cultural heritage and natural wonders of Sri Lanka including ancient cities and wildlife.',
      duration: 4,
      price: 'From $350',
      image: tourGallery2,
      path: '/sri-lanka-rare-4-day-tour',
      highlights: ['Ancient Cities', 'Wildlife Safari', 'Cultural Sites']
    },
    {
      id: '4day-new-tour',
      title: 'Sri Lanka 4-Day Private Tour With 18 Amazing Places',
      description: 'An intensive 4-day journey covering 18 spectacular destinations across Sri Lanka.',
      duration: 4,
      price: 'From $400',
      image: newTourGallery1,
      path: '/colombo-sri-lanka-4-day-private-tour-with-18-amazing-places',
      highlights: ['18 Amazing Places', 'Private Tour', 'Comprehensive Experience']
    },
    {
      id: '5day-tour',
      title: '5-Day Sri Lanka Cultural & Nature Tour',
      description: 'Perfect blend of cultural exploration and nature discovery across Sri Lanka\'s most iconic destinations.',
      duration: 5,
      price: 'From $500',
      image: tourGallery3,
      path: '/5-Day-Sri-Lanka-Cultural-Nature-Tour',
      highlights: ['Cultural Heritage', 'Nature Exploration', 'Scenic Landscapes']
    },
    {
      id: '10day-tour',
      title: 'Sri Lanka Private 10-Day Round Tour',
      description: 'The ultimate Sri Lankan experience covering all major attractions, cultural sites, and natural wonders.',
      duration: 10,
      price: 'From $1200',
      image: newTourGallery5,
      path: '/Sri-Lanka-Private-10-Day-Round-Tour',
      highlights: ['Complete Island Tour', 'All Major Attractions', 'Cultural Immersion']
    }
  ].sort((a, b) => a.duration - b.duration);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sri Lanka Tour Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the beauty of Sri Lanka with our carefully crafted tour packages. 
            From quick getaways to comprehensive island tours, find the perfect journey for you.
          </p>
        </div>

        <div className="grid gap-8 md:gap-6">
          {tourPackages.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        <Calendar className="w-3 h-3 mr-1" />
                        {tour.duration} {tour.duration === 1 ? 'Day' : 'Days'}
                      </Badge>
                      <div className="flex items-center text-green-600 font-semibold">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {tour.price}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-gray-900 mb-2">
                      {tour.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      {tour.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Tour Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tour.highlights.map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>Private Group Tour</span>
                      </div>
                      <Link to={tour.path}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          View Details & Book
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom tour package? Contact us for personalized itineraries.
          </p>
          <Link to="/?section=contact">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;