import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import EnhancedGallery from '@/components/ui/enhanced-gallery';

import culturalHeritage1 from '@/assets/cultural-heritage-1.avif';
import culturalHeritage2 from '@/assets/cultural-heritage-2.avif';
import culturalHeritage3 from '@/assets/cultural-heritage-3.avif';
import culturalHeritage4 from '@/assets/cultural-heritage-4.avif';
import culturalHeritage5 from '@/assets/cultural-heritage-5.avif';
import culturalHeritage6 from '@/assets/cultural-heritage-6.avif';

export default function CulturalHeritageTour() {
  const tableOfContents = [
    { id: 'top-sites', title: 'Top Cultural Heritage Sites in Sri Lanka' },
    { id: 'anuradhapura', title: '1. The Sacred City of Anuradhapura' },
    { id: 'polonnaruwa', title: '2. Polonnaruwa: The Medieval Marvel' },
    { id: 'sigiriya', title: '3. Sigiriya: The Lion Rock Fortress' },
    { id: 'kandy', title: '4. Kandy: The Cultural Heart of Sri Lanka' },
    { id: 'galle', title: '5. Galle Fort: A Colonial Gem' },
    { id: 'experiences', title: 'Unique Cultural Experiences You Shouldn\'t Miss' },
    { id: 'planning', title: 'Planning Your Cultural Heritage Tour in Sri Lanka' },
    { id: 'why-choose', title: 'Why Choose Sri Lanka for Your Next Cultural Adventure?' },
    { id: 'final-thoughts', title: 'Final Thoughts' },
  ];

  const galleryImages = [
    { src: culturalHeritage1, alt: 'Ancient Buddhist temple with intricate carvings' },
    { src: culturalHeritage2, alt: 'Traditional Sri Lankan cultural performance' },
    { src: culturalHeritage3, alt: 'Historic colonial architecture in Galle Fort' },
    { src: culturalHeritage4, alt: 'Sacred Buddhist stupa in ancient city' },
    { src: culturalHeritage5, alt: 'Traditional Sri Lankan village life' },
    { src: culturalHeritage6, alt: 'Cultural heritage site with ancient ruins' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back to Blog */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Culture</Badge>
            <Badge variant="outline">Heritage</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Cultural Heritage Tours in Sri Lanka: Explore the Soul of the Island
          </h1>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Sri Lanka</span>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <img 
              src={culturalHeritage3} 
              alt="Cultural heritage sites in Sri Lanka"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className="text-primary hover:text-primary/80 hover:underline"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Cultural Heritage Gallery</h2>
          <EnhancedGallery images={galleryImages} />
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <div className="mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sri Lanka is a treasure trove of ancient wonders, offering travelers a unique blend of cultural heritage, history, and spirituality. From majestic temples and ancient cities to colonial architecture and vibrant traditions, the island promises unforgettable experiences for every history buff and culture lover. In this guide, we'll take you through the best places to visit, tips for planning, and why cultural heritage tours in Sri Lanka should be on your travel list.
            </p>
          </div>

          <h2 id="top-sites" className="text-3xl font-bold mb-6 scroll-mt-16">Top Cultural Heritage Sites in Sri Lanka</h2>
          
          <h3 id="anuradhapura" className="text-2xl font-semibold mb-4 scroll-mt-16">1. The Sacred City of Anuradhapura</h3>
          <p className="mb-4">
            Dating back over 2,000 years, Anuradhapura was Sri Lanka's first ancient capital. It is home to iconic Buddhist stupas, such as Ruwanwelisaya and Jaya Sri Maha Bodhi, a sacred tree believed to have grown from a branch of the original Bodhi tree under which Buddha attained enlightenment.
          </p>
          <p className="mb-2"><strong>Must-See:</strong> Abhayagiri Monastery and Isurumuniya Temple</p>
          <p className="mb-6"><strong>Pro Tip:</strong> Explore the city by bicycle for a unique experience!</p>

          <h3 id="polonnaruwa" className="text-2xl font-semibold mb-4 scroll-mt-16">2. Polonnaruwa: The Medieval Marvel</h3>
          <p className="mb-4">
            A UNESCO World Heritage Site, Polonnaruwa boasts spectacular ruins of palaces, statues, and temples. This ancient capital flourished in the 11th and 12th centuries and offers an awe-inspiring glimpse into Sri Lanka's medieval period.
          </p>
          <p className="mb-2"><strong>Don't Miss:</strong> The Gal Vihara rock temple featuring Buddha statues carved into granite.</p>
          <p className="mb-6"><strong>Tip:</strong> Visit early in the morning to avoid the midday heat.</p>

          <h3 id="sigiriya" className="text-2xl font-semibold mb-4 scroll-mt-16">3. Sigiriya: The Lion Rock Fortress</h3>
          <p className="mb-4">
            Sigiriya is more than just a fortress – it's a masterpiece. Perched atop a 200-meter-high rock, this 5th-century citadel was built by King Kasyapa. The site features frescoes, landscaped gardens, and stunning panoramic views from the summit.
          </p>
          <p className="mb-2"><strong>Insider Tip:</strong> The climb can be tough, but the reward at the top is worth every step.</p>
          <p className="mb-6"><strong>Fun Fact:</strong> Sigiriya was once considered one of the world's earliest urban planning projects.</p>

          <h3 id="kandy" className="text-2xl font-semibold mb-4 scroll-mt-16">4. Kandy: The Cultural Heart of Sri Lanka</h3>
          <p className="mb-4">
            Kandy is home to the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), one of the most revered Buddhist pilgrimage sites. Beyond its spiritual significance, Kandy also offers lush greenery, colonial architecture, and vibrant cultural festivals like the Esala Perahera.
          </p>
          <p className="mb-2"><strong>What to Do:</strong> Attend a traditional Kandyan dance performance in the evening.</p>
          <p className="mb-6"><strong>Travel Hack:</strong> Stay at a lakeside hotel to enjoy peaceful views and cool breezes.</p>

          <h3 id="galle" className="text-2xl font-semibold mb-4 scroll-mt-16">5. Galle Fort: A Colonial Gem</h3>
          <p className="mb-4">
            Galle Fort, a UNESCO-listed site, is a testament to Sri Lanka's colonial history, blending Dutch, Portuguese, and British influences. Wander through its cobbled streets lined with charming cafes, boutique shops, and art galleries.
          </p>
          <p className="mb-2"><strong>Highlight:</strong> Walk along the fort's walls at sunset for breathtaking coastal views.</p>
          <p className="mb-6"><strong>Suggestion:</strong> Rent a tuk-tuk to explore nearby beaches like Unawatuna and Jungle Beach.</p>

          <h2 id="experiences" className="text-3xl font-bold mb-6 scroll-mt-16">Unique Cultural Experiences You Shouldn't Miss</h2>
          <ul className="mb-6 space-y-2">
            <li><strong>Tea Plantation Tours in Nuwara Eliya:</strong> Discover Sri Lanka's tea heritage by visiting a tea factory and enjoying a tasting session.</li>
            <li><strong>Traditional Village Tours in Habarana:</strong> Interact with locals, try your hand at traditional cooking, and learn about rural life.</li>
            <li><strong>Attend a Sri Lankan Festival:</strong> Plan your trip during Vesak Poya or the Kandy Esala Perahera for colorful celebrations filled with music, dance, and rituals.</li>
          </ul>

          <h2 id="planning" className="text-3xl font-bold mb-6 scroll-mt-16">Planning Your Cultural Heritage Tour in Sri Lanka</h2>
          <p className="mb-2"><strong>Best Time to Visit:</strong> November to April is ideal for most regions, with dry weather perfect for sightseeing.</p>
          <p className="mb-2"><strong>Dress Code:</strong> Many cultural sites require modest clothing, especially temples. Carry a scarf or shawl to cover your shoulders when needed.</p>
          <p className="mb-6"><strong>Guided Tours:</strong> Opting for a guided tour enhances your experience, as knowledgeable guides provide insights you might otherwise miss.</p>

          <h2 id="why-choose" className="text-3xl font-bold mb-6 scroll-mt-16">Why Choose Sri Lanka for Your Next Cultural Adventure?</h2>
          <p className="mb-6">
            Sri Lanka offers a blend of ancient history, colonial charm, and living traditions – all within a compact and scenic setting. Whether you're standing before a towering stupa, witnessing a ritual at a temple, or wandering through centuries-old ruins, you'll feel deeply connected to the island's soul. Plus, Sri Lanka's friendly locals and flavorful cuisine will leave you with memories to cherish long after your trip ends.
          </p>

          <h2 id="final-thoughts" className="text-3xl font-bold mb-6 scroll-mt-16">Final Thoughts</h2>
          <p className="mb-6">
            A cultural heritage tour in Sri Lanka is more than just sightseeing – it's an immersive journey through the heart of the island's history and traditions. With a diverse range of experiences packed into one destination, Sri Lanka is a must-visit for those seeking a rich cultural adventure. So pack your bags, embrace the island vibes, and embark on a journey through time!
          </p>
          <p className="mb-6">
            Have you explored Sri Lanka's cultural sites? Share your experiences in the comments below – we'd love to hear your travel stories!
          </p>

          <div className="bg-primary/5 p-6 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-4">More Sri Lanka Travel Guides Coming Soon!</h3>
            <p className="text-muted-foreground">
              Stay tuned for more in-depth guides covering Sri Lanka's wildlife, beaches, adventure activities, and local cuisine. Subscribe to our newsletter to be the first to know when new content is published.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}