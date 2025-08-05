import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';

// Import images
import sriLankaPrivateToursHero from '@/assets/sri-lanka-private-tours-hero.avif';
import templesHero from '@/assets/temples-sri-lanka-hero.avif';
import culturalHeritage2 from '@/assets/cultural-heritage-2.avif';
import anuradhapura1 from '@/assets/anuradhapura-1.avif';
import culturalHeritage3 from '@/assets/cultural-heritage-3.avif';
import galleDayTripHero from '@/assets/galle-day-trip-hero.avif';
import culturalTriangleHero from '@/assets/cultural-triangle-hero.avif';
import buddhistPilgrimageHero from '@/assets/buddhist-pilgrimage-hero.avif';
import hikingTrailsHero from '@/assets/hiking-trails-hero.avif';
import wildlifeGuideHero from '@/assets/wildlife-guide-hero.avif';
import untouchedRainforestsHero from '@/assets/untouched-rainforests-hero.avif';

const Blog = () => {
  const blogPosts = [
    {
      id: 'untouched-rainforests-Sri-Lanka',
      title: 'Exploring Sri Lanka\'s Untouched Rainforests: A Hidden Paradise',
      description: 'Discover Sri Lanka\'s pristine untouched rainforests including Sinharaja, Knuckles Range, and KDN Forest. A complete guide to biodiversity hotspots and eco-tourism.',
      image: untouchedRainforestsHero,
      date: '2025-02-02',
      readTime: '18 min read',
      location: 'Sri Lanka',
      tags: ['Rainforests', 'Eco-tourism', 'Biodiversity', 'Wildlife', 'Conservation']
    },
    {
      id: 'Sri-lanka-wildlife-seasonal-guide',
      title: 'Best Time to Visit Sri Lanka for Wildlife',
      description: 'A comprehensive seasonal guide to maximize your wildlife viewing experience in Sri Lanka\'s national parks and reserves.',
      image: wildlifeGuideHero,
      date: '2025-02-01',
      readTime: '10 min read',
      location: 'Sri Lanka',
      tags: ['Wildlife', 'Safari', 'National Parks', 'Travel Guide']
    },
    {
      id: 'Sri-Lanka-Buddhist-pilgrimage-routes',
      title: 'Sri Lanka Buddhist Pilgrimage Routes',
      description: 'Discover sacred Buddhist sites and ancient pilgrimage paths across the island. Explore over 2,300 years of Buddhist heritage through temples, stupas, and sacred mountains.',
      image: buddhistPilgrimageHero,
      date: '2025-01-31',
      readTime: '22 min read',
      location: 'Sri Lanka',
      tags: ['Buddhist Sites', 'Pilgrimage', 'Sacred Places', 'Temples']
    },
    {
      id: 'unknown-hiking-trails',
      title: 'Unknown Hiking Trails in Sri Lanka',
      description: 'Escape the crowds and discover hidden hiking trails that offer serenity, untouched beauty, and thrilling adventures across Sri Lanka\'s diverse landscapes.',
      image: hikingTrailsHero,
      date: '2025-01-31',
      readTime: '8 min read',
      location: 'Sri Lanka',
      tags: ['Hiking', 'Adventure', 'Nature', 'Hidden Gems']
    },
    {
      id: 'Hidden-historical-sites-Sri-Lanka',
      title: 'Hidden Historical Sites Sri Lanka',
      description: 'While Sri Lanka\'s famous historical sites like Sigiriya and Anuradhapura draw millions of visitors, the island harbors countless hidden historical treasures waiting to be discovered.',
      image: culturalHeritage3,
      date: '2025-01-31',
      readTime: '18 min read',
      location: 'Sri Lanka',
      tags: ['Historical Sites', 'Hidden Gems', 'Ancient Architecture', 'Cultural Heritage']
    },
    {
      id: '4-Days-in-Sri-Lanka',
      title: '4 Days in Sri Lanka',
      description: 'A four-day tour of Sri Lanka provides an enticing look into the many attractions of this stunning island country. You will undoubtedly leave with priceless memories and a strong want to go back and explore more.',
      image: culturalHeritage2,
      date: '2025-01-31',
      readTime: '20 min read',
      location: 'Sri Lanka',
      tags: ['Travel Planning', 'Itinerary', '4-Day Tours', 'Cultural Sites']
    },
    {
      id: 'Visit-Dambulla-Sigiriya-and-Polonnaruwa-single-day',
      title: 'Visit Dambulla, Sigiriya, and Polonnaruwa in a single day',
      description: 'Visit Dambulla, Sigiriya, and Polonnaruwa in a single day is possible, however, completing the trip successfully is depend on the starting point. It is crucial to commence the tour from Dambulla or Sigiriya in order to visit all 3 places in a single day.',
      image: culturalTriangleHero,
      date: '2025-01-30',
      readTime: '12 min read',
      location: 'Cultural Triangle, Sri Lanka',
      tags: ['Cultural Sites', 'Day Tours', 'UNESCO Heritage', 'Ancient Sites']
    },
    {
      id: 'One-Day-Trip-to-Galle-from-Colombo',
      title: 'One-Day Trip to Galle from Colombo',
      description: 'One-Day Trip to Galle from Colombo lats about 8 hours, you can explore many interesting places on this trip along the west coast such as Bentota, Hikkaduwa, Galle, as well as few places on the south coast.',
      image: galleDayTripHero,
      date: '2025-01-29',
      readTime: '25 min read',
      location: 'Galle, Sri Lanka',
      tags: ['Day Tours', 'West Coast', 'Galle Fort', 'Beaches']
    },
    {
      id: 'Sri-Lanka-private-tours',
      title: 'Sri Lanka private tours',
      description: 'Sri Lanka private tours presents a once-in-a-lifetime chance to see this varied and stunning nation on your own terms. From ancient towns to pristine beaches, experience luxury travel.',
      image: sriLankaPrivateToursHero,
      date: '2025-01-28',
      readTime: '25 min read',
      location: 'Sri Lanka',
      tags: ['Private Tours', 'Luxury Travel', 'Travel Planning', 'Guide']
    },
    {
      id: '12-temples-in-sri-lanka-amazing-locations-you-must-see-while-travelling',
      title: '12 Temples in Sri Lanka: Amazing Locations You Must See While Travelling',
      description: 'Explore the most sacred and beautiful temples across Sri Lanka, from ancient Buddhist sites to stunning Hindu temples with rich cultural heritage.',
      image: templesHero,
      date: '2025-01-02',
      readTime: '15 min read',
      location: 'Sri Lanka',
      tags: ['Temples', 'Religion', 'Culture', 'Travel Guide']
    },
    {
      id: 'sri-lanka-travel-route',
      title: 'Sri Lanka Travel Route',
      description: 'Discover the best travel routes in Sri Lanka for your perfect vacation. From coastal drives to mountain paths, learn how to plan the most efficient routes for your Sri Lankan adventure.',
      image: culturalHeritage2,
      date: '2025-01-26',
      readTime: '25 min read',
      location: 'Sri Lanka',
      tags: ['Travel Planning', 'Routes', 'Transportation', 'Guide']
    },
    {
      id: '8-places-to-visit-in-anuradhapura',
      title: '8 PLACES TO VISIT IN ANURADHAPURA',
      description: '8 Places to visit in Anuradhapura are Sri Maha Bodhi, Ruwanweli Stupa, Thuparama, Jetawanarama, Lovamahapaya, Abhayagiri, Mirisaweti, Lankarama.',
      image: anuradhapura1,
      date: '2025-01-25',
      readTime: '15 min read',
      location: 'Anuradhapura',
      tags: ['Culture', 'History', 'Ancient Sites', 'UNESCO']
    },
    {
      id: 'cultural-heritage-tours-in-sri-lanka-explore-the-soul-of-the-island',
      title: 'Cultural Heritage Tours in Sri Lanka: Explore the Soul of the Island',
      description: 'Embark on a journey through Sri Lanka\'s rich cultural heritage. From ancient temples and colonial architecture to vibrant traditions, discover the soul of this beautiful island.',
      image: culturalHeritage3,
      date: '2025-01-15',
      readTime: '12 min read',
      location: 'Sri Lanka',
      tags: ['Culture', 'Heritage', 'Travel Guide', 'Ancient Sites']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sri Lanka Travel Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the hidden gems, cultural treasures, and natural wonders of Sri Lanka through our comprehensive travel guides and local insights.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {post.location}
                </div>
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {post.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                to={`/${post.id}`}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                Read More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Coming Soon Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          More Amazing Content Coming Soon!
        </h2>
        <p className="text-gray-600">
          We're working on more comprehensive guides covering all the beautiful destinations across Sri Lanka.
        </p>
      </div>
    </div>
  );
};

export default Blog;