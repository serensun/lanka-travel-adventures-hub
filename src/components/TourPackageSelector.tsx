import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const TourPackageSelector = () => {

  const tourPackages = [
    {
      id: 'sri-lanka-rare-2-day-tour',
      title: 'Sri Lanka Green Bless 2-Day Tour',
      duration: '2 days',
      price: 'from $199',
      description: 'Experience the highlights of Sri Lanka in just 2 days with our express cultural tour.',
      image: '/placeholder.svg',
      highlights: ['Temple of the Tooth', 'Spice Garden', 'Cultural Sites']
    },
    {
      id: 'sri-lanka-rare-3-day-tour',
      title: 'Sri Lanka Rare 3-Day Tour',
      duration: '3 days',
      price: 'from $299',
      description: 'Discover the cultural triangle and natural wonders of Sri Lanka in our popular 3-day adventure.',
      image: '/placeholder.svg',
      highlights: ['Cultural Triangle', 'Wildlife Safari', 'Ancient Cities']
    },
    {
      id: 'sri-lanka-rare-4-day-tour',
      title: 'Sri Lanka Rare 4-Day Tour',
      duration: '4 days',
      price: 'from $399',
      description: 'See beautiful hill-country scenery, enjoy train trip, go on a safari, go boating and take a rainforest tour.',
      image: '/placeholder.svg',
      highlights: ['Hill Country', 'Train Journey', 'Wildlife Safari']
    },
    {
      id: 'sri-lanka-rare-5-day-tour',
      title: '5-Day Sri Lanka Cultural & Nature Tour',
      duration: '5 days',
      price: 'from $499',
      description: 'Immerse yourself in Sri Lanka\'s rich culture and stunning natural beauty over 5 unforgettable days.',
      image: '/placeholder.svg',
      highlights: ['Cultural Sites', 'Nature Reserves', 'Tea Plantations']
    },
    {
      id: 'sri-lanka-rare-6-day-tour',
      title: 'Sri Lanka 6-Day Cultural Triangle, Wildlife & West Coast Tour',
      duration: '6 days',
      price: 'from $599',
      description: 'Explore UNESCO heritage sites, experience wildlife safari, enjoy scenic train journeys, and relax on pristine beaches.',
      image: '/placeholder.svg',
      highlights: ['Cultural Triangle', 'Wildlife Safari', 'Beach Relaxation']
    },
    {
      id: 'Sri-Lanka-cocktail-tour',
      title: 'Sri Lanka cocktail tour with a mix of history and culture of Sri Lanka',
      duration: '6 days',
      price: 'from $690',
      description: 'Discover echoes of Sri Lanka\'s sacred history, from the towering rock fortress of Sigiriya to the ancient ruins of Anuradhapura.',
      image: 'https://serendipitypvt.com/wp-content/uploads/2025/07/56.avif',
      highlights: ['Ancient Wonders', 'Cultural Heritage', 'Wildlife Encounters']
    },
    {
      id: 'sri-lanka-rare-7-day-tour',
      title: 'Beaten Path Sri Lanka 7-Day Tour',
      duration: '7 days',
      price: 'from $699',
      description: 'Experience the best of Sri Lanka with this comprehensive 7-day journey through diverse landscapes and cultures.',
      image: '/placeholder.svg',
      highlights: ['Comprehensive Tour', 'Diverse Landscapes', 'Cultural Immersion']
    },
    {
      id: 'sri-lanka-rare-8-day-tour',
      title: 'Sri Lanka 8-Day Tour',
      duration: '8 days',
      price: 'from $799',
      description: 'Extended exploration of Sri Lanka\'s treasures with ample time for deeper cultural immersion.',
      image: '/placeholder.svg',
      highlights: ['Extended Exploration', 'Deep Cultural Immersion', 'Multiple Regions']
    },
    {
      id: 'sri-lanka-rare-10-day-tour',
      title: 'Sri Lanka 10-Day Tour',
      duration: '10 days',
      price: 'from $999',
      description: 'The ultimate Sri Lankan adventure covering all major attractions and hidden gems.',
      image: '/placeholder.svg',
      highlights: ['Ultimate Adventure', 'All Major Sites', 'Hidden Gems']
    },
    {
      id: 'sri-lanka-rare-11-day-tour',
      title: 'Sri Lanka 11-Day Tour',
      duration: '11 days',
      price: 'from $1099',
      description: 'Comprehensive journey through Sri Lanka\'s most spectacular destinations with luxury accommodations.',
      image: '/placeholder.svg',
      highlights: ['Comprehensive Journey', 'Luxury Experience', 'Spectacular Destinations']
    },
    {
      id: 'sri-lanka-rare-new-4-day-tour',
      title: 'Sri Lanka New 4-Day Tour',
      duration: '4 days',
      price: 'from $429',
      description: 'New and improved 4-day itinerary featuring the best of Sri Lanka\'s cultural and natural attractions.',
      image: '/placeholder.svg',
      highlights: ['New Itinerary', 'Cultural Sites', 'Natural Wonders']
    },
    {
      id: 'kandy-4-day-sri-lanka-full-circle-private-tour-to-colombo',
      title: 'Kandy 4-Day Sri Lanka Full Circle Private Tour to Colombo',
      duration: '4 days',
      price: 'from $449',
      description: 'A circular journey from Kandy to Colombo covering key cultural and historical sites.',
      image: '/placeholder.svg',
      highlights: ['Circular Route', 'Kandy to Colombo', 'Cultural Heritage']
    },
    {
      id: 'sri-lanka-green-bless-2-day-cultural-tour',
      title: 'Sri Lanka Green Bless 2-Day Cultural Tour',
      duration: '2 days',
      price: 'from $229',
      description: 'Quick cultural immersion highlighting Sri Lanka\'s spiritual and historical heritage.',
      image: '/placeholder.svg',
      highlights: ['Cultural Focus', 'Spiritual Sites', 'Historical Heritage']
    }
  ];

  return (
    <div className="container py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Explore Our Tour Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tourPackages.map((tour) => (
          <Card key={tour.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">{tour.title}</CardTitle>
              <CardDescription className="text-gray-600">{tour.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="flex items-center text-gray-700 mb-2">
                <CalendarIcon className="h-4 w-4 mr-2" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center text-gray-700 mb-2">
                <MapPinIcon className="h-4 w-4 mr-2" />
                <span>{tour.highlights.join(', ')}</span>
              </div>
              <div className="text-green-600 font-bold">{tour.price}</div>
            </CardContent>
            <CardFooter className="p-4">
              <Button asChild>
                <Link to={`/${tour.id}`}>
                  View Details
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TourPackageSelector;
