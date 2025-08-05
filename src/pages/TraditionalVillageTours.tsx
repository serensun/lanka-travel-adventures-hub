import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Users, Camera, Utensils, Home } from 'lucide-react';

// Import images
import heroImage from '@/assets/traditional-village-tours-hero.avif';
import villageArtisans from '@/assets/traditional-village-tours-1.avif';
import villageCooking from '@/assets/traditional-village-tours-2.avif';
import bullockCart from '@/assets/traditional-village-tours-3.avif';

const TraditionalVillageTours = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Traditional Village Tours Sri Lanka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Traditional Village Tours Sri Lanka
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience authentic rural life and immerse yourself in Sri Lanka's timeless traditions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Full Day Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Multiple Villages</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Cultural Immersion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#why-choose" className="text-primary hover:underline">Why Choose Traditional Village Tours?</a></li>
              <li><a href="#best-villages" className="text-primary hover:underline">Best Villages to Visit in Sri Lanka</a></li>
              <li><a href="#cultural-experiences" className="text-primary hover:underline">Cultural Experiences You'll Enjoy</a></li>
              <li><a href="#what-to-expect" className="text-primary hover:underline">What to Expect on Your Village Tour</a></li>
              <li><a href="#best-time" className="text-primary hover:underline">Best Time for Village Tours</a></li>
              <li><a href="#practical-tips" className="text-primary hover:underline">Practical Tips for Village Tours</a></li>
              <li><a href="#conclusion" className="text-primary hover:underline">Final Thoughts</a></li>
            </ul>
          </CardContent>
        </Card>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Traditional Villages</Badge>
              <Badge variant="secondary">Cultural Tours</Badge>
              <Badge variant="secondary">Authentic Experiences</Badge>
              <Badge variant="secondary">Rural Tourism</Badge>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            Sri Lanka's traditional village tours offer an extraordinary opportunity to step back in time and experience the authentic rural lifestyle that has remained unchanged for centuries. These immersive cultural experiences showcase the island's rich heritage, traditional crafts, and the warm hospitality of rural communities.
          </p>

          <section id="why-choose" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose Traditional Village Tours?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src={villageArtisans}
                  alt="Traditional Sri Lankan village artisans"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              </div>
              <div className="space-y-4">
                <p>
                  <strong>Traditional village tours Sri Lanka</strong> provide an authentic glimpse into the island's cultural soul. Unlike mainstream tourist attractions, these tours allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Experience genuine hospitality</strong> from local families</li>
                  <li><strong>Learn traditional crafts</strong> like pottery, weaving, and woodcarving</li>
                  <li><strong>Participate in daily activities</strong> such as farming and cooking</li>
                  <li><strong>Understand ancient traditions</strong> passed down through generations</li>
                  <li><strong>Support rural communities</strong> through sustainable tourism</li>
                </ul>
              </div>
            </div>

            <p>
              These tours complement perfectly with visits to spiritual sites. For those interested in exploring Sri Lanka's religious heritage, consider reading about the <a href="https://www.urlaub-sr-lanka.info/9-temples-in-colombo-to-experience-peace-divinity/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">9 temples in Colombo to experience peace and divinity</a>, which showcases the spiritual diversity of the capital city.
            </p>
          </section>

          <section id="best-villages" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Best Villages to Visit in Sri Lanka</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">1. Hiriwadunna Village</h3>
                <p>
                  Located near Dambulla, Hiriwadunna offers an authentic village experience with catamaran rides across the lake, traditional cooking demonstrations, and bullock cart rides through paddy fields.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">2. Sigiriya Village</h3>
                <p>
                  Experience rural life in the shadow of the famous Lion Rock. This village tour includes traditional farming methods, clay pot making, and authentic Sri Lankan cuisine preparation.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">3. Polonnaruwa Rural Villages</h3>
                <p>
                  Combine your <Link to="/sri-lanka-cultural-triangle-mini-tour" className="text-primary hover:underline">Sri Lanka cultural triangle mini tour</Link> with village experiences near the ancient capital, where you can observe traditional irrigation systems still in use today.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">4. Gampola Village</h3>
                <p>
                  Nestled in the hill country, this village offers tea plucking experiences, spice garden tours, and traditional Kandyan cultural performances.
                </p>
              </div>
            </div>
          </section>

          <section id="cultural-experiences" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Cultural Experiences You'll Enjoy</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src={villageCooking}
                  alt="Traditional Sri Lankan village cooking"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-2 mb-3">
                  <Utensils className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">Traditional Cooking</h3>
                </div>
                <p>
                  Learn to prepare authentic Sri Lankan meals using traditional methods, clay pots, and wood-fired stoves. Experience the art of grinding spices and creating coconut milk from scratch.
                </p>
              </div>
              
              <div>
                <img
                  src={bullockCart}
                  alt="Traditional bullock cart ride in Sri Lankan village"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-2 mb-3">
                  <Camera className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">Bullock Cart Rides</h3>
                </div>
                <p>
                  Experience traditional transportation methods with scenic bullock cart rides through paddy fields, coconut groves, and village paths while enjoying the peaceful countryside.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Home className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Traditional Crafts</h3>
                  <p className="text-sm">Watch skilled artisans create pottery, weave baskets, and carve wooden items using techniques passed down through generations.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Farm Activities</h3>
                  <p className="text-sm">Participate in rice planting, vegetable gardening, and learn about sustainable farming practices used by local communities.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Cultural Performances</h3>
                  <p className="text-sm">Enjoy traditional dance performances, folk music, and storytelling sessions that preserve Sri Lanka's rich oral traditions.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="what-to-expect" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What to Expect on Your Village Tour</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Typical Village Tour Itinerary</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</span>
                  <div>
                    <strong>Morning:</strong> Village welcome ceremony and traditional breakfast
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</span>
                  <div>
                    <strong>Mid-Morning:</strong> Bullock cart ride through paddy fields and coconut plantations
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</span>
                  <div>
                    <strong>Afternoon:</strong> Traditional cooking demonstration and lunch with a local family
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">4</span>
                  <div>
                    <strong>Late Afternoon:</strong> Craft workshops (pottery, weaving, or woodcarving)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">5</span>
                  <div>
                    <strong>Evening:</strong> Cultural performance and farewell ceremony
                  </div>
                </div>
              </div>
            </div>

            <p>
              <strong>Traditional village tours Sri Lanka</strong> are designed to be immersive and educational. You'll gain hands-on experience in various aspects of rural life while contributing to the local economy through community-based tourism initiatives.
            </p>
          </section>

          <section id="best-time" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Best Time for Village Tours</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Optimal Seasons</h3>
                <ul className="space-y-2">
                  <li><strong>December to March:</strong> Dry season with pleasant weather ideal for outdoor activities</li>
                  <li><strong>April to May:</strong> Pre-monsoon period with lush green landscapes</li>
                  <li><strong>July to September:</strong> Southwest monsoon brings life to agricultural areas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Special Considerations</h3>
                <ul className="space-y-2">
                  <li><strong>Harvest Season (April-May):</strong> Experience rice harvesting activities</li>
                  <li><strong>Planting Season (October-November):</strong> Participate in traditional farming practices</li>
                  <li><strong>Festival Periods:</strong> Witness authentic cultural celebrations</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="practical-tips" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Practical Tips for Village Tours</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">What to Bring</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Comfortable walking shoes and light cotton clothing</li>
                <li>Sun hat and sunscreen for outdoor activities</li>
                <li>Camera to capture authentic moments</li>
                <li>Small gifts for host families (optional but appreciated)</li>
                <li>Open mind and willingness to participate</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">Cultural Etiquette</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Remove shoes before entering homes</li>
                <li>Dress modestly, especially when visiting religious sites</li>
                <li>Accept hospitality graciously</li>
                <li>Ask permission before photographing people</li>
                <li>Show respect for local customs and traditions</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
              <h3 className="text-lg font-semibold mb-3">Booking Your Village Tour in Sri Lanka</h3>
              <p>
                Choose reputable tour operator like <a href="https://serendipitypvt.com/">serendipity Tours (Pvt) limited</a> who work directly with village communities to ensure authentic experiences and fair compensation for locals. Look for tours that emphasize sustainable tourism practices and cultural preservation.
              </p>
            </div>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
            
            <p className="text-lg mb-6">
              <strong>Traditional village tours Sri Lanka</strong> offer an unparalleled opportunity to connect with the island's authentic cultural heritage. These experiences go beyond typical sightseeing, providing meaningful interactions with local communities and deep insights into traditional ways of life that have endured for generations.
            </p>
            
            <p className="mb-6">
              Whether you're seeking cultural enrichment, authentic experiences, or simply want to escape the hustle and bustle of modern life, Sri Lanka's traditional villages provide the perfect setting for meaningful travel. These tours not only create lasting memories but also support rural communities through sustainable tourism practices.
            </p>
            
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Plan Your Village Adventure Today</h3>
              <p>
                Ready to embark on an authentic Sri Lankan village experience? These immersive tours offer the perfect complement to your Sri Lankan adventure, providing insights into the island's rich cultural tapestry that you won't find anywhere else.
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TraditionalVillageTours;
