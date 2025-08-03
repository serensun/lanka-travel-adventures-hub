import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Eye } from 'lucide-react';
import EnhancedGallery from '@/components/ui/enhanced-gallery';

// Import images
import hiddenSitesHero from '@/assets/hidden-sites-hero.avif';
import hiddenSites1 from '@/assets/hidden-sites-1.avif';
import hiddenSites2 from '@/assets/hidden-sites-2.avif';
import hiddenSites3 from '@/assets/hidden-sites-3.avif';

const HiddenHistoricalSites = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const galleryImages = [
    { src: hiddenSitesHero, alt: 'Hidden historical site in Sri Lanka' },
    { src: hiddenSites1, alt: 'Ancient temple ruins' },
    { src: hiddenSites2, alt: 'Historical architecture' },
    { src: hiddenSites3, alt: 'Sacred historical site' }
  ];

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction to Hidden Historical Sites' },
    { id: 'lesser-known-temples', title: 'Lesser-Known Ancient Temples' },
    { id: 'forgotten-kingdoms', title: 'Forgotten Kingdoms and Palaces' },
    { id: 'colonial-heritage', title: 'Hidden Colonial Heritage Sites' },
    { id: 'archaeological-discoveries', title: 'Recent Archaeological Discoveries' },
    { id: 'visiting-tips', title: 'Tips for Visiting Hidden Sites' },
    { id: 'preservation', title: 'Conservation and Preservation' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            January 20, 2025
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            18 min read
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Sri Lanka
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Hidden Historical Sites Sri Lanka
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary">Historical Sites</Badge>
          <Badge variant="secondary">Hidden Gems</Badge>
          <Badge variant="secondary">Ancient Architecture</Badge>
          <Badge variant="secondary">Cultural Heritage</Badge>
          <Badge variant="secondary">Travel Guide</Badge>
        </div>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          While Sri Lanka's famous historical sites like Sigiriya and Anuradhapura draw millions of visitors, the island harbors countless hidden historical treasures waiting to be discovered. These lesser-known sites offer intimate glimpses into Sri Lanka's rich past without the crowds, providing authentic experiences for adventurous travelers seeking to uncover the island's secret heritage.
        </p>

        <div className="mb-8">
          <EnhancedGallery images={galleryImages} />
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Table of Contents
          </h2>
          <nav>
            <ul className="space-y-2">
              {tableOfContents.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-primary hover:text-primary/80 transition-colors text-left w-full"
                  >
                    {index + 1}. {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none">
        <section id="introduction" className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Introduction to Hidden Historical Sites</h2>
          
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Sri Lanka's recorded history spans over 2,500 years, leaving behind an incredible archaeological legacy scattered across the island. While UNESCO World Heritage sites rightfully receive international attention, countless other historical sites remain relatively unknown to mainstream tourism. These hidden gems offer unique opportunities to explore Sri Lanka's layered history in peaceful, authentic settings.
          </p>

          <p className="mb-6 text-muted-foreground leading-relaxed">
            From ancient cave monasteries tucked away in remote forests to colonial-era buildings slowly being reclaimed by nature, these sites tell stories of forgotten kingdoms, spiritual movements, and cultural exchanges that shaped the island's identity. Many of these locations are still actively used by local communities, providing visitors with living connections to Sri Lanka's past.
          </p>
        </section>

        <section id="lesser-known-temples" className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Lesser-Known Ancient Temples</h2>
          
          <h3 className="text-2xl font-semibold text-foreground mb-4">Ritigala Monastery Complex</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Hidden within the Ritigala Strict Nature Reserve, this ancient monastery complex dates back to the 1st century BCE. The ruins, scattered across the mountainous terrain, belonged to the Pansukulika sect of Buddhist monks who lived an extremely austere lifestyle. The site features remarkably preserved stone platforms, meditation chambers, and an intricate water management system that demonstrates advanced engineering knowledge.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">Sasseruwa Buddha Statue</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Located near Avukana, the Sasseruwa statue is a magnificent 38-foot tall standing Buddha carved from a single granite rock. Dating to the 5th century, this masterpiece rivals the famous Avukana Buddha but receives far fewer visitors. The statue's serene expression and perfect proportions showcase the pinnacle of ancient Sinhalese sculptural art.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">Arankele Monastery</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Nestled in dense forest near Kurunegala, Arankele was a forest monastery complex active from the 6th to 14th centuries. The site features unique double-platform structures, ancient meditation caves, and beautifully preserved stone carvings. The monastery's remote location has helped preserve its mystical atmosphere, making it feel like a sacred site frozen in time.
          </p>
        </section>

        <section id="forgotten-kingdoms" className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Forgotten Kingdoms and Palaces</h2>
          
          <h3 className="text-2xl font-semibold text-foreground mb-4">Yapahuwa Rock Fortress</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Often called "Little Sigiriya," Yapahuwa served as Sri Lanka's capital in the 13th century. The site features an impressive stone stairway leading to a palace complex atop a massive rock formation. Unlike Sigiriya, Yapahuwa remains relatively undiscovered, allowing visitors to explore its ruins in solitude while imagining the grandeur of this short-lived capital.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">Panduwasnuwara Kingdom</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            The ruins of Panduwasnuwara, located near Kurunegala, represent one of Sri Lanka's most overlooked medieval capitals. Active from the 12th to 14th centuries, the site contains the remains of royal palaces, defensive walls, and an intricate moat system. The highlight is the Parakkramabahu Palace complex, which offers insights into medieval Sinhalese royal architecture.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">Dambadeniya Archaeological Site</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Capital of Sri Lanka during the 13th century, Dambadeniya contains extensive ruins spread across several hills. The site includes the remains of the famous Tooth Relic Temple, royal palaces, and defensive structures. The climb to the summit rewards visitors with panoramic views and well-preserved stone carvings that showcase the artistic achievements of medieval Sri Lanka.
          </p>
        </section>

        <section id="colonial-heritage" className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Hidden Colonial Heritage Sites</h2>
          
          <h3 className="text-2xl font-semibold text-foreground mb-4">Batticaloa Dutch Fort</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            While Galle Fort receives most attention, the Dutch fort in Batticaloa offers an equally fascinating but less crowded colonial experience. Built in 1628, this star-shaped fort sits on an island in Batticaloa Lagoon and houses a small museum showcasing the area's multi-cultural heritage, including Tamil, Muslim, Dutch, and British influences.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">Jaffna Fort</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            The massive Jaffna Fort, originally built by the Portuguese and later expanded by the Dutch, stands as one of Sri Lanka's largest colonial fortifications. Recently restored after years of conflict, the fort now offers visitors a chance to explore its ramparts, underground tunnels, and museum while learning about the complex history of Sri Lanka's Northern Province.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">Matara Fort</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Built by the Dutch in the 17th century, Matara Fort is smaller but more intimate than Galle Fort. The well-preserved ramparts overlook the Indian Ocean, and the fort's interior houses the Matara Museum. The adjacent Dutch Reformed Church, with its distinctive architecture, adds to the site's colonial charm.
          </p>
        </section>

        <section id="archaeological-discoveries" className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Recent Archaeological Discoveries</h2>
          
          <h3 className="text-2xl font-semibold text-foreground mb-4">Ranchamadama Archaeological Site</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Recent excavations at Ranchamadama have revealed a significant ancient settlement dating back to the 3rd century BCE. The site has yielded pottery, coins, and architectural remains that provide new insights into early urbanization in Sri Lanka. Ongoing archaeological work continues to uncover artifacts that are reshaping understanding of ancient Sri Lankan civilization.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">Ibbankatuwa Megalithic Cemetery</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            This prehistoric burial site near Dambulla contains over 50 megalithic tombs dating from 700 BCE to 400 CE. The site represents one of Sri Lanka's most important Iron Age archaeological discoveries, providing evidence of sophisticated burial practices and social organization among ancient communities. Many of the tombs have been carefully excavated and restored for public viewing.
          </p>
        </section>

        <section id="visiting-tips" className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Tips for Visiting Hidden Sites</h2>
          
          <h3 className="text-2xl font-semibold text-foreground mb-4">Best Time to Visit</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            The ideal time to explore hidden historical sites is during the dry season (May to September for the west and south, November to March for the north and east). Early morning visits are recommended to avoid heat and enjoy the best lighting for photography. Many sites have minimal facilities, so visiting during daylight hours is essential.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">What to Bring</h3>
          <ul className="mb-6 text-muted-foreground leading-relaxed list-disc pl-6">
            <li>Comfortable walking shoes with good grip</li>
            <li>Sun protection (hat, sunscreen, sunglasses)</li>
            <li>Plenty of water and snacks</li>
            <li>First aid kit for remote locations</li>
            <li>Camera with extra batteries</li>
            <li>Local maps or GPS device</li>
            <li>Insect repellent</li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mb-4">Respectful Exploration</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            When visiting these precious historical sites, remember that you're often exploring sacred spaces or delicate archaeological remains. Always follow local guidelines, don't remove artifacts or stones, and be respectful of any ongoing religious activities. Many sites are still actively used by local communities for worship and cultural practices.
          </p>
        </section>

        <section id="preservation" className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Conservation and Preservation</h2>
          
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Many of Sri Lanka's hidden historical sites face ongoing challenges from weathering, vegetation growth, and limited funding for conservation. The Department of Archaeology and local organizations work tirelessly to preserve these treasures, but responsible tourism can also play a crucial role in their protection.
          </p>

          <p className="mb-6 text-muted-foreground leading-relaxed">
            Visitors can contribute to preservation efforts by following site guidelines, supporting local conservation initiatives, and spreading awareness about these important cultural resources. Photography and documentation by respectful visitors also help create records that can assist in future conservation work.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-4">Community Involvement</h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Local communities often serve as the guardians of these historical sites, maintaining traditional knowledge about their significance and helping protect them from damage. Engaging with local guides and community members not only enriches the visitor experience but also supports the people who have preserved these sites for generations.
          </p>
        </section>

        <section id="conclusion" className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Conclusion</h2>
          
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Sri Lanka's hidden historical sites offer unparalleled opportunities to connect with the island's rich past away from the crowds of major tourist attractions. These forgotten temples, ancient cities, and colonial remnants provide intimate glimpses into the complex tapestry of Sri Lankan civilization spanning over two millennia.
          </p>

          <p className="mb-6 text-muted-foreground leading-relaxed">
            For travelers seeking authentic cultural experiences, these hidden gems represent some of Sri Lanka's greatest treasures. Each site tells unique stories of spiritual devotion, royal ambition, colonial encounter, and community resilience. By visiting these places with respect and curiosity, modern travelers become part of the ongoing story of preservation and appreciation that ensures these historical treasures will inspire future generations.
          </p>

          <p className="mb-6 text-muted-foreground leading-relaxed">
            Whether you're drawn to the mystical atmosphere of forest monasteries, the grandeur of forgotten palaces, or the cultural fusion evident in colonial sites, Sri Lanka's hidden historical heritage offers endless opportunities for discovery and reflection. Take the time to venture beyond the well-trodden paths – the island's greatest historical treasures may be waiting in places where few have thought to look.
          </p>
        </section>
      </div>

      {/* CTA Section */}
      <Card className="mt-12">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Explore Sri Lanka's Hidden Historical Sites?</h3>
          <p className="text-muted-foreground mb-4">
            Contact Seerendipity Tours to plan your personalized journey to Sri Lanka's most fascinating hidden historical treasures.
          </p>
          <div className="text-sm text-muted-foreground">
            URL: Hidden-historical-sites-Sri-Lanka
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HiddenHistoricalSites;