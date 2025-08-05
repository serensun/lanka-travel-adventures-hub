import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Heart, Camera, Utensils, TreePine } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

// Import images
import heroImage from '@/assets/sri-lanka-family-packages-hero.avif';
import familyCulturalImage from '@/assets/sri-lanka-family-packages-1.avif';
import familySafariImage from '@/assets/sri-lanka-family-packages-2.avif';
import familyFoodImage from '@/assets/sri-lanka-family-packages-3.avif';

const SriLankaFamilyPackages = () => {
  return (
    <>
      <Helmet>
        <title>Sri Lanka Family Tour Packages | Best Family Holidays & Tours</title>
        <meta name="description" content="Discover the best Sri Lanka family tour packages for unforgettable holidays. Wildlife safaris, cultural tours, beach activities & adventures perfect for families with children." />
        <meta name="keywords" content="Sri Lanka family tour packages, family holidays Sri Lanka, Sri Lanka family vacation, family tours Sri Lanka, kids friendly tours Sri Lanka" />
        <meta property="og:title" content="Sri Lanka Family Tour Packages | Best Family Holidays & Tours" />
        <meta property="og:description" content="Discover the best Sri Lanka family tour packages for unforgettable holidays. Wildlife safaris, cultural tours, beach activities & adventures perfect for families with children." />
        <meta property="og:image" content={heroImage} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://seerendipitytours.com/sri-lanka-family-tour-packages" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[70vh] overflow-hidden">
          <LazyImage
            src={heroImage}
            alt="Sri Lanka family tour packages - Happy family enjoying beach vacation"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Sri Lanka Family Tour Packages
              </h1>
              <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                Perfect Adventures for Fun-Loving Families - Wildlife, Culture, Beaches & More
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Users className="w-4 h-4" />
                  <span>Family Friendly</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Heart className="w-4 h-4" />
                  <span>Safe & Secure</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Camera className="w-4 h-4" />
                  <span>Memorable Experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">2M+</div>
                <div className="text-sm text-muted-foreground">Annual Visitors</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Safety Guaranteed</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">365</div>
                <div className="text-sm text-muted-foreground">Days Perfect Weather</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">UNESCO Sites</div>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">Table of Contents</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="#why-choose-sri-lanka" className="text-primary hover:text-primary/80 font-medium underline block py-2">
                    1. Why Choose Sri Lanka for Family Tours
                  </a>
                  <a href="#best-family-activities" className="text-primary hover:text-primary/80 font-medium underline block py-2">
                    2. Best Family Activities in Sri Lanka
                  </a>
                  <a href="#wildlife-safaris" className="text-primary hover:text-primary/80 font-medium underline block py-2">
                    3. Wildlife Safaris for Families
                  </a>
                  <a href="#cultural-experiences" className="text-primary hover:text-primary/80 font-medium underline block py-2">
                    4. Cultural Experiences & Heritage Sites
                  </a>
                  <a href="#beach-activities" className="text-primary hover:text-primary/80 font-medium underline block py-2">
                    5. Beach Activities & Water Sports
                  </a>
                  <a href="#train-journeys" className="text-primary hover:text-primary/80 font-medium underline block py-2">
                    6. Scenic Train Journeys
                  </a>
                  <a href="#package-planning" className="text-primary hover:text-primary/80 font-medium underline block py-2">
                    7. Planning Your Family Package
                  </a>
                  <a href="#best-time-to-visit" className="text-primary hover:text-primary/80 font-medium underline block py-2">
                    8. Best Time to Visit Sri Lanka
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed mb-6">
                **Sri Lanka family tour packages** perfectly fit for fun-loving families due to the wide range of sightseeing tours and activities available in Sri Lanka. Wildlife observation, rainforest exploration, action and adventure activities, with plenty of fun with sun, sea, and sand make Sri Lanka family holidays perfectly fit for any type of family.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                A tour to Sri Lanka is like turning up almost everything in one's life - the volume with busy roads of Colombo, colorful markets where buyers bargain for various goods, the historical bliss in the cultural cities of Sri Lanka, and the brightness with the sight of palm-fringed sandy beaches. This is a perfect opportunity to make your Sri Lanka family holiday an adventure through the west, south, and central Sri Lanka, through the national parks, historical monuments, and Sri Lanka hill country, and then go to the pristine beaches to relax and float all worries on the waters of the Indian Ocean.
              </p>
            </div>

            {/* Why Choose Sri Lanka */}
            <section id="why-choose-sri-lanka" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Sri Lanka for Family Tours?</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Safety & Peace</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    We believe now is the time to organize the best Sri Lanka road trip with improved security and a peaceful environment. For most travelers, Sri Lanka was out of their map for a long time due to political unrest. Today, after almost 10 years since the end of the civil war, Sri Lanka has become one of the most peaceful nations in the world.
                  </p>
                  <p className="text-lg leading-relaxed">
                    According to the Federal Bureau, Sri Lanka has been identified as one of the safest destinations to travel to. National Geographic Traveler UK has also named Sri Lanka as one of the coolest holiday destinations.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">"Land Like No Other"</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Sri Lanka is truly a heaven for world travelers with a fascinating combination of culture, history, and 3S (sun, sea, sand). Sri Lanka is becoming a heaven for nature lovers as well as adventure enthusiasts too.
                  </p>
                  <p className="text-lg leading-relaxed">
                    The number of foreign tourist arrivals now exceeds 2 million, which is four times higher than the arrivals reported in 2010, making Sri Lanka a very popular country in southern Asia for tourism purposes.
                  </p>
                </div>
              </div>

              <LazyImage
                src={familyCulturalImage}
                alt="Family exploring Sri Lankan cultural heritage sites"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />
            </section>

            {/* Best Family Activities */}
            <section id="best-family-activities" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">9 Essential Activities for Your Sri Lanka Family Holiday</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <TreePine className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">Adventure Activities</h3>
                    </div>
                    <p className="text-muted-foreground">Rock climbing, mountaineering, whitewater rafting, trekking, and mountain biking for thrilling family adventures.</p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">Ayurveda Holidays</h3>
                    </div>
                    <p className="text-muted-foreground">Relaxing Ayurveda massages and wellness treatments to rejuvenate the whole family.</p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Camera className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">Cultural Exploration</h3>
                    </div>
                    <p className="text-muted-foreground">Visit mask folklore museums, enjoy Kandyan cultural shows, and learn from locals.</p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Utensils className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">Sri Lankan Cuisine</h3>
                    </div>
                    <p className="text-muted-foreground">Authentic rice and curry meals, fresh seafood, and spicy crab dishes by the beach.</p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">Wildlife Safaris</h3>
                    </div>
                    <p className="text-muted-foreground">Spot leopards, elephants, and diverse wildlife in Yala and Udawalawe National Parks.</p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">Cultural Triangle</h3>
                    </div>
                    <p className="text-muted-foreground">Explore ancient UNESCO World Heritage sites including Sigiriya and Dambulla.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">Train Journeys</h3>
                    </div>
                    <p className="text-muted-foreground">Scenic upcountry rail journeys through tea plantations and mountains.</p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <TreePine className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">Diving & Snorkeling</h3>
                    </div>
                    <p className="text-muted-foreground">Explore coral reefs, tropical fish, and marine life in pristine waters.</p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">Beach Activities</h3>
                    </div>
                    <p className="text-muted-foreground">Sun, sea, and sand with surfing, windsurfing, and water sports for all ages.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Wildlife Safaris */}
            <section id="wildlife-safaris" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Wildlife Safaris Perfect for Families</h2>
              
              <LazyImage
                src={familySafariImage}
                alt="Family enjoying wildlife safari in Sri Lanka"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Yala National Park</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Sometimes the most unexpected memories are generated in unexpected places. Yala, the wildlife reserve in southern Sri Lanka, is popular for leopards and offers amazing opportunities to spot these big cats. Yala records the highest concentration of leopards in the world - an estimated 17½ big cats per 100 square kilometers.
                  </p>
                  <p className="text-lg leading-relaxed">
                    In most cases, you will be able to spot leopards, elephants, crocodiles, and many other animals within 3 hours of safari at Yala National Park, making it perfect for families with children who may have limited patience.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Udawalawe Elephant Orphanage</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Udawalawe elephant orphanage and conservation center is a grassroots elephant conservation operation that's perfect for families, especially kids. The conservation center acts as a safe house for sick, orphaned, and old animals.
                  </p>
                  <p className="text-lg leading-relaxed">
                    At Udawalawe, visitors can see a large number of freely wandering wild elephants of different ages. The best time to visit is during feeding time when animals gather for their milk portion.
                  </p>
                </div>
              </div>
            </section>

            {/* Cultural Experiences */}
            <section id="cultural-experiences" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Cultural Experiences & Heritage Sites</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Best **Sri Lanka family tour packages** should essentially be enriched with cultural experiences alongside scenic beauty and thrilling adventures. After all, Sri Lanka is one of the few countries in the world that boasts thousands of years of unbroken civilization.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Cultural Triangle of Sri Lanka</h3>
              <p className="text-lg leading-relaxed mb-6">
                The entire cultural triangle of Sri Lanka is an archaeological wonder located 5 hours from Colombo. It's difficult to overlook the Cultural Triangle for any travelers wishing to have one of the best tour packages in Sri Lanka. Many cities in the Cultural Triangle, such as Anuradhapura, were teaching centers for Buddhism visited by monks from India, China, and Burma.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Today, the Cultural Triangle encompasses many UNESCO World Heritage sites such as Sigiriya rock fortress, Dambulla golden cave temple, and Tooth Relic Temple. For families interested in exploring more cultural sites, consider the <a href="https://seerendipitytours.com/traditional-village-tours-Sri-Lanka" className="text-primary hover:text-primary/80 font-medium underline">traditional village tours Sri Lanka</a> offers for an authentic cultural immersion.
              </p>

              <div className="bg-primary/10 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-semibold mb-3">Cultural Activities for Families:</h4>
                <ul className="space-y-2 text-lg">
                  <li>• Visit the mask folklore museum in Ambalangoda</li>
                  <li>• Enjoy Kandyan cultural shows with traditional dancing</li>
                  <li>• Learn folklore and stories from local communities</li>
                  <li>• Explore ancient temples and religious sites</li>
                  <li>• Participate in traditional crafts workshops</li>
                </ul>
              </div>
            </section>

            {/* Food Experiences */}
            <section id="food-experiences" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Culinary Adventures for the Whole Family</h2>
              
              <LazyImage
                src={familyFoodImage}
                alt="Family enjoying traditional Sri Lankan cuisine"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <p className="text-lg leading-relaxed mb-6">
                Sampling delicious food is an essential part of any Sri Lanka family holiday. There's a noteworthy difference between Sri Lanka's food and the food of other Asian countries. One particular difference is the use of spices - almost every recipe, especially curries, is prepared with many varieties of spices and condiments.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Authentic Sri Lankan Cuisine</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Most Sri Lankan curries are very spicy compared to dishes from other Asian countries. An authentic Sri Lankan lunch consists of rice and several curries, providing a complete cultural and culinary experience for families.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Fresh Seafood</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Sri Lanka is especially popular for fresh seafood. Don't forget to visit a seafood restaurant at a beach resort and try a spicy crab dish during your family visit to Sri Lanka.
                  </p>
                </div>
              </div>
            </section>

            {/* Beach Activities */}
            <section id="beach-activities" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Beach Activities & Water Sports</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Being an island, Sri Lanka boasts clean and sandy beaches suitable for beach holidays at any given time of the year. Sri Lanka is a perfect spot for all kinds of saltwater activities, which is a distinct advantage for families because kids love to spend time at beaches.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Bentota - The Ultimate Family Beach Destination</h3>
              <p className="text-lg leading-relaxed mb-6">
                Bentota is the biggest seaside resort town and the most popular for Sri Lanka family vacations. The unique location of Bentota beach, with saltwater on one side and river water on the other, is ideal for most water sports available on earth.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Activities for Older Kids:</h4>
                  <ul className="space-y-2 text-lg">
                    <li>• Surfing and windsurfing</li>
                    <li>• Boating and kayaking</li>
                    <li>• Jet skiing and speed boating</li>
                    <li>• Diving and snorkeling (ages 5-6+)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Family-Friendly Features:</h4>
                  <ul className="space-y-2 text-lg">
                    <li>• Animation teams for kids</li>
                    <li>• Children's yoga sessions</li>
                    <li>• Jungle tours and nature walks</li>
                    <li>• Cycling tours suitable for families</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Diving and Snorkeling Locations</h3>
              <div className="bg-primary/10 rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">West & South Coast (Nov-Apr):</h4>
                    <p className="text-base">Hikkaduwa Marine Sanctuary and Unawatuna offer excellent diving opportunities with coral reefs, tropical fish, and sea turtles.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">East Coast (Apr-Nov):</h4>
                    <p className="text-base">Pigeon Island Marine National Park near Trincomalee provides opportunities to spot blue whales and dolphins.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Train Journeys */}
            <section id="train-journeys" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Scenic Train Journeys for Families</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Undoubtedly, the train is one of the most affordable and convenient transport methods in Sri Lanka for families. There are many advantages: you can move whenever you wish, buy food, interact with locals, listen to music, read, and enjoy breathtaking scenery passing by.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Ella to Kandy - The Most Scenic Route</h3>
              <p className="text-lg leading-relaxed mb-6">
                The sceneries along the Ella-Kandy stretch are incredibly breathtaking, making this the most popular train ride among travelers. The 5-hour journey offers unparalleled views of tea plantations, mountains, and valleys.
              </p>

              <div className="bg-primary/10 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-semibold mb-3">Family Train Travel Tips:</h4>
                <ul className="space-y-2 text-lg">
                  <li>• Book 1st or 2nd class tickets in advance for guaranteed seats</li>
                  <li>• Choose the observation compartment for the best views</li>
                  <li>• Travel during less crowded times (avoid morning/afternoon rush)</li>
                  <li>• Bring snacks and entertainment for children</li>
                  <li>• Consider the coastal route from Colombo to Galle as an alternative</li>
                </ul>
              </div>
            </section>

            {/* Best Time to Visit */}
            <section id="best-time-to-visit" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Best Time to Visit Sri Lanka with Family</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center">November to April</h3>
                    <div className="text-center mb-4">
                      <Badge variant="default" className="text-sm">West & South Coast</Badge>
                    </div>
                    <p className="text-base leading-relaxed">
                      Perfect for families visiting western or southern coast beaches. Dry weather ensures optimal beach conditions and outdoor activities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center">April to November</h3>
                    <div className="text-center mb-4">
                      <Badge variant="secondary" className="text-sm">East Coast</Badge>
                    </div>
                    <p className="text-base leading-relaxed">
                      Ideal for families exploring the east coast beaches and marine activities. Dry weather prevails in the eastern region during this period.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-amber-800">Important Family Travel Tip:</h4>
                <p className="text-amber-700">
                  Due to monsoon patterns, carefully choosing your beach destination based on the travel season is crucial for a successful family holiday. Traveling to the wrong coast during the rainy season can disrupt your family's beach activities and outdoor adventures.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Plan Your Sri Lanka Family Adventure?</h3>
              <p className="text-lg mb-6">
                Seerendipity Tours designs your best **Sri Lanka family tour packages** at affordable rates. All our tour packages can be customized in whatever way you wish. We are a truly Sri Lankan company with a head office in Colombo and no involvement of any third party.
              </p>
              <p className="text-base mb-6">
                Most tour packages offered by Seerendipity Tours include cultural and natural sites with amazing beach time towards the end of the tour. We believe such a combination would be a perfect mix to explore a unique destination like Sri Lanka with your family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SriLankaFamilyPackages;