import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import EnhancedGallery from '@/components/ui/enhanced-gallery';
import LazyImage from '@/components/LazyImage';
import hikingTrailsHero from '@/assets/hiking-trails-hero.avif';
import hikingTrails1 from '@/assets/hiking-trails-1.avif';
import hikingTrails2 from '@/assets/hiking-trails-2.avif';
import hikingTrails3 from '@/assets/hiking-trails-3.avif';

const UnknownHikingTrails = () => {
  const { t } = useTranslation();

  const galleryImages = [
    { src: hikingTrails1, alt: 'Mountain hiking trail with wildlife' },
    { src: hikingTrails2, alt: 'Rocky mountain landscape under blue sky' },
    { src: hikingTrails3, alt: 'Forest trail with sunbeam' },
    { src: hikingTrailsHero, alt: 'Aerial view of green mountains' }
  ];

  const tableOfContents = [
    { id: 'bambarakanda', title: 'Bambarakanda Falls Trail' },
    { id: 'kirigalpoththa', title: 'Kirigalpoththa Peak' },
    { id: 'knuckles', title: 'Knuckles Mountain Range' },
    { id: 'namunukula', title: 'Namunukula Peak' },
    { id: 'riverston', title: 'Riverston - Pitawala Pathana' },
    { id: 'why-explore', title: 'Why Explore These Trails?' }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <LazyImage
          src={hikingTrailsHero}
          alt="Unknown hiking trails in Sri Lanka"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Discover the Hidden Gems
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Unknown Hiking Trails in Sri Lanka
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-sm">Adventure</Badge>
              <Badge variant="secondary" className="text-sm">Hiking</Badge>
              <Badge variant="secondary" className="text-sm">Nature</Badge>
              <Badge variant="secondary" className="text-sm">Hidden Gems</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Blog Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-muted-foreground">
            <span>📅 December 2024</span>
            <span>⏱️ 8 min read</span>
            <span>📍 Sri Lanka</span>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Sri Lanka is renowned for its lush landscapes, misty mountains, and breathtaking trails. 
              While popular hikes like Adam's Peak and Ella Rock attract many adventurers, the island 
              hides lesser-known trails that offer serenity, untouched beauty, and thrilling experiences. 
              If you're looking to escape the crowds and explore off-the-beaten-path routes, here are 
              some of the best unknown hiking trails in Sri Lanka that promise unforgettable adventures.
            </p>
          </div>

          {/* Table of Contents */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-primary hover:underline text-left"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Trail 1: Bambarakanda Falls */}
          <section id="bambarakanda" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Bambarakanda Falls Trail</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Badge variant="outline">📍 Kalupahana, near Haputale</Badge>
              <Badge variant="outline">🏔️ Moderate Difficulty</Badge>
              <Badge variant="outline">💧 Waterfall Trail</Badge>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Bambarakanda Falls, Sri Lanka's tallest waterfall, is a spectacular sight, but the trail 
              leading to its base remains relatively unexplored. The hike takes you through dense forests, 
              tea plantations, and rocky terrains, offering stunning views along the way. The cool mist 
              from the falls makes this a refreshing escape.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Why Hike Here?</h3>
              <ul className="space-y-2">
                <li>• Less crowded than other waterfall trails</li>
                <li>• Panoramic views of the surrounding hills</li>
                <li>• A perfect spot for photography and birdwatching</li>
              </ul>
            </div>
          </section>

          {/* Trail 2: Kirigalpoththa */}
          <section id="kirigalpoththa" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. Kirigalpoththa – Sri Lanka's Second-Highest Peak</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Badge variant="outline">📍 Horton Plains National Park</Badge>
              <Badge variant="outline">🏔️ Challenging</Badge>
              <Badge variant="outline">⛰️ 2,389m Peak</Badge>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              While Horton Plains is famous for World's End, Kirigalpoththa (2,389m) remains a hidden 
              challenge. This demanding trek takes you through cloud forests, grasslands, and rugged paths. 
              The summit rewards hikers with 360-degree views of the central highlands.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Why Hike Here?</h3>
              <ul className="space-y-2">
                <li>• A true wilderness experience</li>
                <li>• Rare flora and fauna sightings</li>
                <li>• Ideal for experienced hikers seeking solitude</li>
              </ul>
            </div>
          </section>

          {/* Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Trail Gallery</h3>
            <EnhancedGallery images={galleryImages} className="mb-8" />
          </div>

          {/* Trail 3: Knuckles Range */}
          <section id="knuckles" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. Knuckles Mountain Range – Dothalugala Trail</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Badge variant="outline">📍 Matale District</Badge>
              <Badge variant="outline">🏔️ Moderate to Difficult</Badge>
              <Badge variant="outline">🌿 UNESCO Heritage Site</Badge>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              The Knuckles Range is a UNESCO World Heritage Site, yet many of its trails remain under 
              the radar. The Dothalugala Trail is a hidden treasure, taking you through misty forests, 
              cascading streams, and traditional villages. The biodiversity here is astounding, with 
              endemic species at every turn.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Why Hike Here?</h3>
              <ul className="space-y-2">
                <li>• Unique biodiversity and scenic landscapes</li>
                <li>• Cultural encounters with local villages</li>
                <li>• Perfect for multi-day treks</li>
              </ul>
            </div>
          </section>

          {/* Trail 4: Namunukula Peak */}
          <section id="namunukula" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Namunukula Peak</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Badge variant="outline">📍 Badulla District</Badge>
              <Badge variant="outline">🏔️ Moderate</Badge>
              <Badge variant="outline">🌅 Sunrise Views</Badge>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Often overshadowed by Ella's popular hikes, Namunukula offers an offbeat adventure. 
              The trail winds through pine forests and grasslands, leading to a summit with breathtaking 
              sunrise views over the Uva Province.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Why Hike Here?</h3>
              <ul className="space-y-2">
                <li>• Stunning sunrise and sunset vistas</li>
                <li>• Less touristy than Ella Rock</li>
                <li>• Great for a peaceful day hike</li>
              </ul>
            </div>
          </section>

          {/* Trail 5: Riverston */}
          <section id="riverston" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">5. Riverston – Pitawala Pathana</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Badge variant="outline">📍 Matale</Badge>
              <Badge variant="outline">🏔️ Easy to Moderate</Badge>
              <Badge variant="outline">👨‍👩‍👧‍👦 Family-Friendly</Badge>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Riverston is famous for its "Little World's End," but the Pitawala Pathana trail is a 
              hidden gem. This gentle hike takes you through grassy plains, pine forests, and rocky 
              outcrops, offering spectacular views of the Knuckles Range.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Why Hike Here?</h3>
              <ul className="space-y-2">
                <li>• Family-friendly hike</li>
                <li>• Stunning viewpoints without the crowds</li>
                <li>• Rich in endemic wildlife</li>
              </ul>
            </div>
          </section>

          {/* Why Explore Section */}
          <section id="why-explore" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Explore These Unknown Hiking Trails?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🌿</div>
                  <h3 className="font-semibold mb-2">Escape the Crowds</h3>
                  <p className="text-muted-foreground">Enjoy nature in peaceful solitude</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🏞️</div>
                  <h3 className="font-semibold mb-2">Untouched Beauty</h3>
                  <p className="text-muted-foreground">Discover diverse ecosystems</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="font-semibold mb-2">Sustainable Tourism</h3>
                  <p className="text-muted-foreground">Support less commercialized areas</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Related Tours */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Plan Your Hiking Adventure</h3>
              <p className="text-lg mb-6">
                If you're planning a hiking adventure in Sri Lanka, explore our guided tours and 
                customized itineraries for an unforgettable experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/4-Day-Jungle-Adventure-Sri-Lanka–Explore-Lush-Rainforests-and-Thrilling-National-Parks"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Jungle Adventure Tours
                </a>
                <a 
                  href="/sri-lanka-7-day-tour-package"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  7-Day Tour Package
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Final Thoughts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
            <p className="text-lg leading-relaxed mb-6">
              Sri Lanka's unknown hiking trails offer a unique blend of adventure, tranquility, and 
              natural beauty. Whether you're an avid trekker or a casual hiker, these hidden paths 
              promise an unforgettable journey. Lace up your boots, pack your essentials, and set 
              out to explore the island's best-kept secrets!
            </p>
            <div className="bg-primary/10 p-6 rounded-lg">
              <p className="font-semibold text-primary">
                Have you hiked any of these trails? Share your experiences in the comments below!
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UnknownHikingTrails;