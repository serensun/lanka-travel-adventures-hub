import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: '8-places-to-visit-in-anuradhapura',
      title: '8 PLACES TO VISIT IN ANURADHAPURA',
      description: '8 Places to visit in Anuradhapura are Sri Maha Bodhi, Ruwanweli Stupa, Thuparama, Jetawanarama, Lovamahapaya, Abhayagiri, Mirisaweti, Lankarama.',
      image: '/src/assets/anuradhapura-1.avif',
      date: '2025-01-25',
      readTime: '15 min read',
      location: 'Anuradhapura',
      tags: ['Culture', 'History', 'Ancient Sites', 'UNESCO']
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
                to={`/blog/${post.id}`}
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