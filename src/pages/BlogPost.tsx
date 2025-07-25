import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import EnhancedGallery from '@/components/ui/enhanced-gallery';

// Gallery images
import anuradhapura1 from '@/assets/anuradhapura-1.avif';
import anuradhapura2 from '@/assets/anuradhapura-2.avif';
import anuradhapura3 from '@/assets/anuradhapura-3.avif';
import anuradhapura4 from '@/assets/anuradhapura-4.avif';
import anuradhapura5 from '@/assets/anuradhapura-5.avif';
import anuradhapura6 from '@/assets/anuradhapura-6.avif';
import anuradhapura7 from '@/assets/anuradhapura-7.avif';
import anuradhapura8 from '@/assets/anuradhapura-8.avif';

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  
  // Handle both /blog/:slug and direct /:slug routes
  const postSlug = slug || location.pathname.replace('/', '');

  // Table of Contents
  const tableOfContents = [
    { id: 'anuradhapura', title: 'Anuradhapura' },
    { id: 'ancient-metropolis', title: 'The ancient metropolis of Anuradhapura' },
    { id: 'destinations', title: 'Destinations in Anuradhapura' },
    { id: 'historic-temples', title: 'Exploring historic Anuradhapura temples' },
    { id: 'historical-sites', title: "Anuradhapura's historical sites" },
    { id: '8-places', title: '8 Places to visit in Anuradhapura' },
    { id: 'sri-maha-bodhi', title: '1. Sri Maha Bodhi: The Sacred Bo Tree' },
    { id: 'ruwanwelisaya', title: '2. Ruwanwelisaya: The Majestic White Dome' },
    { id: 'jetavanaramaya', title: '3. Jetavanaramaya: Once the World\'s Tallest Stupa' },
    { id: 'abhayagiri', title: '4. Abhayagiri Monastery: A Center of Learning' },
    { id: 'isurumuniya', title: '5. Isurumuniya Temple: Rock-Cut Wonder' },
    { id: 'thuparamaya', title: '6. Thuparamaya: The First Stupa' },
    { id: 'lankarama', title: '7. Lankarama: The Unique Circular Stupa' },
    { id: 'mirisawetiya', title: '8. Mirisawetiya Stupa: A Promise Fulfilled' },
    { id: 'kuttam-pokuna', title: '9. Kuttam Pokuna (Twin Ponds): Ancient Engineering Marvel' },
    { id: 'practical-tips', title: 'Practical Tips for Visiting Anuradhapura' }
  ];

  const galleryImages = [
    { src: anuradhapura1, alt: 'Anuradhapura ancient temple view' },
    { src: anuradhapura2, alt: 'Sri Maha Bodhi sacred tree' },
    { src: anuradhapura3, alt: 'Ruwanweli Stupa white dome' },
    { src: anuradhapura4, alt: 'Jetavanaramaya ancient stupa' },
    { src: anuradhapura5, alt: 'Abhayagiri monastery ruins' },
    { src: anuradhapura6, alt: 'Isurumuniya temple rock carvings' },
    { src: anuradhapura7, alt: 'Thuparamaya first stupa' },
    { src: anuradhapura8, alt: 'Anuradhapura archaeological site' }
  ];

  // Only show the Anuradhapura post for now
  if (postSlug !== '8-places-to-visit-in-anuradhapura') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-primary hover:text-primary/80">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back to Blog */}
      <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">Culture</Badge>
          <Badge variant="secondary">History</Badge>
          <Badge variant="secondary">Ancient Sites</Badge>
          <Badge variant="secondary">UNESCO</Badge>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          8 PLACES TO VISIT IN ANURADHAPURA
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            January 25, 2025
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            15 min read
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Anuradhapura
          </div>
          <Button variant="outline" size="sm" className="ml-auto">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">
          8 Places to visit in Anuradhapura are Sri Maha Bodhi, Ruwanweli Stupa, Thuparama, Jetawanarama, Lovamahapaya, Abhayagiri, Mirisaweti, Lankarama.
        </p>
      </header>

      {/* Hero Image */}
      <div className="aspect-video overflow-hidden rounded-lg mb-8">
        <img
          src={anuradhapura1}
          alt="Anuradhapura ancient city view"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {tableOfContents.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-primary hover:text-primary/80 hover:underline text-sm"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gallery</h2>
        <EnhancedGallery images={galleryImages} />
      </div>

      <Separator className="my-8" />

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div className="mb-8">
          <p className="text-lg leading-relaxed mb-4">
            Sri Maha Bodi: This 288 BC-planted fig tree is revered because it is thought that the Buddha attained enlightenment while meditating beneath it.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Ruwanwelisaya: One of the largest "stupas" ever finished, it was constructed by King Dutugamunu.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Thuparamaya: is possibly the oldest surviving "dagoba" in the world as well as the oldest in Sri Lanka.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            The oldest city in Sri Lanka, Anuradhapura, was founded in the third century BC. Most travel itineraries to Sri Lanka include a stop in Anuradhapura, which is situated inside the Sri Lanka's cultural triangle. After serving as Sri Lanka's capital for over a millennium, Anuradhapura is now recognised as a UNESCO World Heritage Site.
          </p>
        </div>

        <h2 id="anuradhapura" className="text-3xl font-bold text-gray-900 mb-4">Anuradhapura</h2>
        <p className="text-lg leading-relaxed mb-6">
          The oldest city in Sri Lanka, Anuradhapura, was founded in the third century BC. The majority of journeys to Sri Lanka involve a stop in Anuradhapura, which is situated inside the country's cultural triangle. After serving as Sri Lanka's capital for over a millennium, Anuradhapura is now recognised as a UNESCO World Heritage Site. Places to visit in Anuradhapura are more than dozens, however, due to the time constraint, most tourists visit only a few historical attractions. In this blog post, we'll focus on a few key tourist attractions such as Sri Maha Bodhi, Ruwanweli Stupa, and Jetawanarama.
        </p>

        <h2 id="ancient-metropolis" className="text-3xl font-bold text-gray-900 mb-4">The ancient metropolis of Anuradhapura</h2>
        <p className="text-lg leading-relaxed mb-6">
          In the third century BC, Anuradhapura brought together all of Sri Lanka, and it went on to be the country's capital for more than a millennium. According to legend, King Pandukabhaya was the one who founded the city. The Sri Lankan kings moved their capital from the coastal region of west Sri Lanka to Polonnaruwa, which is situated closer to the country's interior, following the fall of Anuradhapura as a result of Tamil invasions.
        </p>

        <h2 id="8-places" className="text-3xl font-bold text-gray-900 mb-6">8 Places to visit in Anuradhapura</h2>

        <h3 id="sri-maha-bodhi" className="text-2xl font-semibold text-gray-900 mb-4">1. Sri Maha Bodhi: The Sacred Bo Tree</h3>
        <p className="text-lg leading-relaxed mb-4">
          Let's kick things off with the granddaddy of all trees in Sri Lanka – the Sri Maha Bodhi. This isn't just any old tree; it's believed to be a sapling from the very Bo tree under which Buddha attained enlightenment. Talk about a living piece of history!
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Key Facts:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Planted in 288 BCE</li>
            <li>World's oldest known human-planted tree</li>
            <li>Surrounded by golden railings</li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            <strong>Pro Tip:</strong> Visit early morning to avoid crowds and soak in the serene atmosphere.
          </p>
        </div>

        <h3 id="ruwanwelisaya" className="text-2xl font-semibold text-gray-900 mb-4">2. Ruwanwelisaya: The Majestic White Dome</h3>
        <p className="text-lg leading-relaxed mb-4">
          Next up is the Ruwanwelisaya, a massive white stupa that'll make your jaw drop. This architectural marvel stands at 338 feet tall and is a sight to behold, especially when lit up at night.
        </p>
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Interesting Tidbits:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Built by King Dutugemunu in 140 BCE</li>
            <li>Contains relics of Buddha</li>
            <li>Surrounded by a wall of elephants</li>
          </ul>
        </div>

        <h3 id="jetavanaramaya" className="text-2xl font-semibold text-gray-900 mb-4">3. Jetavanaramaya: Once the World's Tallest Stupa</h3>
        <p className="text-lg leading-relaxed mb-4">
          Imagine a structure so tall it was once the third-tallest in the entire ancient world! That's Jetavanaramaya for you. While it may have lost its height crown, it hasn't lost an ounce of its grandeur.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Quick Facts:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Originally 400 feet tall</li>
            <li>Built in the 3rd century CE</li>
            <li>Made of approximately 93.3 million bricks</li>
          </ul>
        </div>

        <h3 id="abhayagiri" className="text-2xl font-semibold text-gray-900 mb-4">4. Abhayagiri Monastery: A Center of Learning</h3>
        <p className="text-lg leading-relaxed mb-4">
          Abhayagiri isn't just a pretty face; it was once a thriving center of Buddhist learning. This sprawling monastic complex will give you a taste of what life was like for ancient monks.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Founded in 88 BCE</li>
            <li>Home to various architectural marvels</li>
            <li>Features beautiful stone carvings</li>
          </ul>
        </div>

        <h3 id="isurumuniya" className="text-2xl font-semibold text-gray-900 mb-4">5. Isurumuniya Temple: Rock-Cut Wonder</h3>
        <p className="text-lg leading-relaxed mb-4">
          Ready for some Indiana Jones vibes? Isurumuniya Temple, carved into a rock face, is your ticket to adventure. Don't miss the famous "Lovers" sculpture – it's a true masterpiece!
        </p>

        <h3 id="thuparamaya" className="text-2xl font-semibold text-gray-900 mb-4">6. Thuparamaya: The First Stupa</h3>
        <p className="text-lg leading-relaxed mb-4">
          History nerds, rejoice! Thuparamaya holds the title of being the first stupa built in Sri Lanka. It may not be the biggest, but it's certainly one of the most significant.
        </p>

        <h3 id="lankarama" className="text-2xl font-semibold text-gray-900 mb-4">7. Lankarama: The Unique Circular Stupa</h3>
        <p className="text-lg leading-relaxed mb-4">
          Ever seen a stupa that looks like a giant bell? Well, you're about to! Lankarama's unique circular design sets it apart from its pointy cousins.
        </p>

        <h3 id="mirisawetiya" className="text-2xl font-semibold text-gray-900 mb-4">8. Mirisawetiya Stupa: A Promise Fulfilled</h3>
        <p className="text-lg leading-relaxed mb-4">
          This stupa has a cool backstory. It was built by King Dutugemunu to fulfill a promise he made to the gods. Talk about keeping your word!
        </p>

        <h3 id="kuttam-pokuna" className="text-2xl font-semibold text-gray-900 mb-4">9. Kuttam Pokuna (Twin Ponds): Ancient Engineering Marvel</h3>
        <p className="text-lg leading-relaxed mb-4">
          Who said ancient folks didn't know how to keep cool? The Twin Ponds are a testament to the advanced hydraulic engineering of ancient Sri Lanka.
        </p>

        <h2 id="practical-tips" className="text-3xl font-bold text-gray-900 mb-4">Practical Tips for Visiting Anuradhapura</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <ul className="space-y-3 text-lg">
            <li><strong>Best Time to Visit:</strong> May to September for drier weather</li>
            <li><strong>Dress Code:</strong> Modest clothing for temple visits (cover shoulders and knees)</li>
            <li><strong>Transportation:</strong> Rent a bike or hire a tuk-tuk for easy navigation</li>
            <li><strong>Duration:</strong> Plan for at least a full day, two if you want to explore leisurely</li>
            <li><strong>Hydration:</strong> Carry plenty of water; it can get hot!</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Wrapping It Up</h2>
        <p className="text-lg leading-relaxed mb-6">
          Anuradhapura isn't just a bunch of old rocks and trees; it's a window into an advanced civilization that flourished over two millennia ago. As you wander through these ancient wonders, you'll feel the weight of history and the spiritual energy that still permeates the air.
        </p>
        <p className="text-lg leading-relaxed">
          So, are you ready to step back in time and explore Anuradhapura? Trust me, it's an experience you won't forget. Happy exploring, time travelers!
        </p>
      </div>

      {/* Related Posts */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">More Sri Lanka Travel Guides Coming Soon!</h3>
        <p className="text-gray-600">
          We're working on comprehensive guides for Sigiriya, Kandy, Galle, and many other amazing destinations in Sri Lanka.
        </p>
        <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mt-2">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;