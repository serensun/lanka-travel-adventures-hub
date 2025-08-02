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

const Blog = () => {
  const blogPosts = [
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