import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calendar, Users, DollarSign, Filter } from 'lucide-react';
import tourGallery1 from '../assets/tour-gallery-1.avif';
import tourGallery2 from '../assets/tour-gallery-2.avif';
import tourGallery3 from '../assets/tour-gallery-3.avif';
import newTourGallery1 from '../assets/new-tour-gallery-1.avif';
import newTourGallery5 from '../assets/new-tour-gallery-5.avif';
import culturalTriangleWildlifeHero from '../assets/cultural-triangle-wildlife-hero.avif';
import sriLanka10DayHero from '../assets/sri-lanka-10-day-hero.avif';
import sriLankaAuthentic18Places from '../assets/sri-lanka-authentic-18-places.avif';
import sriLanka8DayHero from '../assets/sri-lanka-8-day-hero.avif';
import sriLanka3DayHero from '../assets/sri-lanka-3-day-hero.avif';
import sriLanka6DayHero from '../assets/sri-lanka-6-day-hero.avif';
import sriLanka7DayHero from '../assets/sri-lanka-7-day-hero.avif';

const Itinerary = () => {
  const [activityFilter, setActivityFilter] = useState('all');
  const [destinationFilter, setDestinationFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');

  const tourPackages = [
    {
      id: '2day-tour',
      title: '2-Day Green Bless Tour',
      description: 'Experience the natural beauty of Sri Lanka with visits to Sigiriya Rock Fortress and Dambulla Cave Temple.',
      duration: 2,
      price: 'From $180',
      image: tourGallery1,
      path: '/2-day-tour',
      highlights: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', 'Cultural Triangle'],
      activities: ['Cultural', 'Sightseeing'],
      destinations: ['Sigiriya', 'Dambulla']
    },
    {
      id: '4day-tour',
      title: 'Sri Lanka Rare 4-Day Tour',
      description: 'Discover the cultural heritage and natural wonders of Sri Lanka including ancient cities and wildlife.',
      duration: 4,
      price: 'From $350',
      image: tourGallery2,
      path: '/sri-lanka-rare-4-day-tour',
      highlights: ['Ancient Cities', 'Wildlife Safari', 'Cultural Sites'],
      activities: ['Cultural', 'Wildlife', 'Adventure'],
      destinations: ['Polonnaruwa', 'Anuradhapura', 'Minneriya']
    },
    {
      id: '4day-new-tour',
      title: 'Sri Lanka 4-Day Private Tour With 18 Amazing Places',
      description: 'An intensive 4-day journey covering 18 spectacular destinations across Sri Lanka.',
      duration: 4,
      price: 'From $400',
      image: sriLankaAuthentic18Places,
      path: '/colombo-sri-lanka-4-day-private-tour-with-18-amazing-places',
      highlights: ['18 Amazing Places', 'Private Tour', 'Comprehensive Experience'],
      activities: ['Cultural', 'Sightseeing', 'Adventure'],
      destinations: ['Colombo', 'Kandy', 'Nuwara Eliya', 'Ella']
    },
    {
      id: '4day-kandy-tour',
      title: '4-Day Sri Lanka Full Circle Private Tour To Colombo',
      description: 'Why take weeks when you can see it all in just 4 action-packed days? This carefully crafted itinerary delivers Sri Lanka\'s greatest hits - from ancient kingdoms and wildlife safaris to beach bliss and cultural treasures.',
      duration: 4,
      price: 'From $499',
      image: newTourGallery5,
      path: '/kandy-4-day-sri-lanka-full-circle-private-tour-to-colombo',
      highlights: ['Ancient Wonders', 'Hill Country Train', 'Wildlife Safari', 'Coastal Charms'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Beach', 'Sightseeing'],
      destinations: ['Kandy', 'Sigiriya', 'Dambulla', 'Nuwara Eliya', 'Ella', 'Yala', 'Galle', 'Colombo']
    },
    {
      id: '5day-tour',
      title: '5-Day Sri Lanka Cultural & Nature Tour',
      description: 'Perfect blend of cultural exploration and nature discovery across Sri Lanka\'s most iconic destinations.',
      duration: 5,
      price: 'From $500',
      image: tourGallery3,
      path: '/5-Day-Sri-Lanka-Cultural-Nature-Tour',
      highlights: ['Cultural Heritage', 'Nature Exploration', 'Scenic Landscapes'],
      activities: ['Cultural', 'Nature', 'Photography'],
      destinations: ['Kandy', 'Sigiriya', 'Nuwara Eliya']
    },
    {
      id: '10day-tour',
      title: 'Sri Lanka Private 10-Day Round Tour',
      description: 'The ultimate Sri Lankan experience covering all major attractions, cultural sites, and natural wonders.',
      duration: 10,
      price: 'From $1200',
      image: sriLanka10DayHero,
      path: '/Sri-Lanka-Private-10-Day-Round-Tour',
      highlights: ['Complete Island Tour', 'All Major Attractions', 'Cultural Immersion'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Beach'],
      destinations: ['Colombo', 'Kandy', 'Sigiriya', 'Ella', 'Yala', 'Galle', 'Bentota']
    },
    {
      id: '8day-tour',
      title: 'Sri Lanka Private 8-day Tour; Transport, Guide, Hotels, Food',
      description: 'Explore ancient wonders of Sri Lanka\'s Cultural Triangle with your personal guide. Marvel at misty mountain vistas, untouched golden beaches, and cascading waterfalls.',
      duration: 8,
      price: 'From $750',
      image: sriLanka8DayHero,
      path: '/sri-lanka-private-8-day-tour-transport-guide-hotels-food',
      highlights: ['Cultural Triangle', 'Sigiriya Rock Fortress', 'Yala Safari', 'Hill Country Train'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature'],
      destinations: ['Anuradhapura', 'Sigiriya', 'Kandy', 'Ella', 'Yala']
    },
    {
      id: '2day-cultural-triangle',
      title: 'Private 2-Day Cultural Triangle + Wildlife Tour of Sri Lanka',
      description: 'Awaken Your Spirit: 2-Day Sacred Journey Through Sri Lanka\'s Cultural Heart with UNESCO World Heritage sites.',
      duration: 2,
      price: 'From $299',
      image: culturalTriangleWildlifeHero,
      highlights: ['UNESCO World Heritage Sites', 'Cultural Triangle', 'Wildlife Safari', 'Buddhist Temples'],
      activities: ['Cultural', 'Wildlife', 'Spiritual', 'Heritage'],
      destinations: ['Sigiriya', 'Dambulla', 'Polonnaruwa', 'Kandy', 'Minneriya'],
      path: '/Private-2-Day-Cultural-Triangle-Wildlife-Tour-of-Sri Lanka'
    },
    {
      id: '3day-cultural-triangle',
      title: 'All-Inclusive Cultural Triangle Private Tour: Sri Lanka 3-day Tour',
      description: 'Embark on an unforgettable journey through Sri Lanka\'s legendary Cultural Triangle, packed into three exhilarating days of discovery!',
      duration: 3,
      price: 'From $399',
      image: sriLanka3DayHero,
      path: '/sri-lanka-cultural-triangle-mini-tour',
      highlights: ['UNESCO Treasures', 'Sigiriya Rock Fortress', 'Sacred Kandy', 'Dambulla Cave Temple'],
      activities: ['Cultural', 'Heritage', 'Sightseeing'],
      destinations: ['Anuradhapura', 'Sigiriya', 'Polonnaruwa', 'Kandy', 'Dambulla']
    },
    {
      id: '6day-tour',
      title: 'All-Inclusive Sri Lanka 6-day Private Tour',
      description: 'Experience the best of Sri Lanka in just 6 days with this perfectly balanced itinerary combining thrilling wildlife encounters, ancient cultural treasures, and tropical beach relaxation.',
      duration: 6,
      price: 'From $599',
      image: sriLanka6DayHero,
      path: '/6-day-sri-lanka-tour',
      highlights: ['Yala National Park Safari', 'Cultural Triangle Exploration', 'West Coast Beach Escape', 'Tea Country & Botanic Gardens'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Beach'],
      destinations: ['Anuradhapura', 'Sigiriya', 'Kandy', 'Ella', 'Yala', 'Galle', 'Bentota']
    },
    {
      id: '7day-tour',
      title: '7-day Sri Lanka tour: Beaten path Sri Lanka',
      description: 'From the Cultural Triangle\'s archaeological marvels to Yala\'s wildlife wonders, this tour showcases Sri Lanka\'s diversity.',
      duration: 7,
      price: 'From $749',
      image: sriLanka7DayHero,
      path: '/beaten-path-sri-lanka-7-day-tour',
      highlights: ['5 UNESCO World Heritage Sites', 'Wildlife safaris in Yala National Park', 'Scenic train through tea country', 'Ancient cities & cultural experiences', 'Beach relaxation on southern coast'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Beach'],
      destinations: ['Anuradhapura', 'Sigiriya', 'Polonnaruwa', 'Kandy', 'Ella', 'Yala', 'Bentota', 'Colombo']
    }
  ];

  const filteredTourPackages = useMemo(() => {
    return tourPackages.filter(tour => {
      const matchesActivity = activityFilter === 'all' || tour.activities.some(activity => 
        activity.toLowerCase().includes(activityFilter.toLowerCase())
      );
      const matchesDestination = destinationFilter === 'all' || tour.destinations.some(dest => 
        dest.toLowerCase().includes(destinationFilter.toLowerCase())
      );
      const matchesDuration = durationFilter === 'all' || 
        (durationFilter === '1-3' && tour.duration <= 3) ||
        (durationFilter === '4-6' && tour.duration >= 4 && tour.duration <= 6) ||
        (durationFilter === '7+' && tour.duration >= 7);
      
      return matchesActivity && matchesDestination && matchesDuration;
    }).sort((a, b) => a.duration - b.duration);
  }, [activityFilter, destinationFilter, durationFilter]);

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

        {/* Filter Form */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter Tour Packages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="activity">Activity Type</Label>
                <Select value={activityFilter} onValueChange={setActivityFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Activities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Activities</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="wildlife">Wildlife</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="nature">Nature</SelectItem>
                    <SelectItem value="beach">Beach</SelectItem>
                    <SelectItem value="sightseeing">Sightseeing</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Select value={destinationFilter} onValueChange={setDestinationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Destinations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Destinations</SelectItem>
                    <SelectItem value="colombo">Colombo</SelectItem>
                    <SelectItem value="kandy">Kandy</SelectItem>
                    <SelectItem value="sigiriya">Sigiriya</SelectItem>
                    <SelectItem value="ella">Ella</SelectItem>
                    <SelectItem value="nuwara eliya">Nuwara Eliya</SelectItem>
                    <SelectItem value="galle">Galle</SelectItem>
                    <SelectItem value="dambulla">Dambulla</SelectItem>
                    <SelectItem value="yala">Yala</SelectItem>
                    <SelectItem value="polonnaruwa">Polonnaruwa</SelectItem>
                    <SelectItem value="anuradhapura">Anuradhapura</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Select value={durationFilter} onValueChange={setDurationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Durations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Durations</SelectItem>
                    <SelectItem value="1-3">1-3 Days</SelectItem>
                    <SelectItem value="4-6">4-6 Days</SelectItem>
                    <SelectItem value="7+">7+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:gap-6">
          {filteredTourPackages.length > 0 ? (
            filteredTourPackages.map((tour) => (
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
            ))
          ) : (
            <Card className="bg-white/90 backdrop-blur-sm p-8 text-center">
              <CardContent>
                <p className="text-gray-600 text-lg">
                  No tour packages match your current filters. Try adjusting your search criteria.
                </p>
              </CardContent>
            </Card>
          )}
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