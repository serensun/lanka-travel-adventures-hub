import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, MapPin, Camera, Eye, Binoculars } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/sri-lanka-wildlife-safari-packages-hero.avif';

export default function SriLankaWildlifeSafariPackages() {
  return (
    <>
      <Helmet>
        <title>Sri Lanka Wildlife Safari Packages - Best Wildlife Tours 2025</title>
        <meta name="description" content="Discover Sri Lanka wildlife safari packages with leopards, elephants & exotic birds. Book your wildlife adventure in Yala, Udawalawe & Wilpattu National Parks." />
        <meta name="keywords" content="Sri Lanka wildlife safari packages, Yala safari tours, wildlife packages Sri Lanka, elephant safari, leopard watching, national park tours" />
        <link rel="canonical" href="https://seerendipitytours.com/sri-lanka-wildlife-safari-packages" />
        <meta property="og:title" content="Sri Lanka Wildlife Safari Packages - Best Wildlife Tours 2025" />
        <meta property="og:description" content="Discover Sri Lanka wildlife safari packages with leopards, elephants & exotic birds. Book your wildlife adventure in Yala, Udawalawe & Wilpattu National Parks." />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://seerendipitytours.com/sri-lanka-wildlife-safari-packages" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sri Lanka Wildlife Safari Packages - Best Wildlife Tours 2025" />
        <meta name="twitter:description" content="Discover Sri Lanka wildlife safari packages with leopards, elephants & exotic birds. Book your wildlife adventure in Yala, Udawalawe & Wilpattu National Parks." />
        <meta name="twitter:image" content={heroImage} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Sri Lanka wildlife safari packages"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Sri Lanka Wildlife Safari Packages
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                Experience the Wild Side of Paradise
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Year-round availability
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <Clock className="w-4 h-4 mr-2" />
                  2-14 day packages
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                  8 National Parks
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Sri Lanka wildlife safari packages offer an extraordinary opportunity to witness some of the world's most magnificent creatures in their natural habitat. From the elusive leopards of Yala National Park to the gentle giants roaming Udawalawe, Sri Lanka's diverse ecosystems provide unforgettable wildlife encounters for nature enthusiasts and adventure seekers alike.
              </p>
            </div>

            {/* Quick Facts */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  Wildlife Safari Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Best Safari Destinations</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Yala National Park - Leopard Capital</li>
                      <li>• Udawalawe National Park - Elephant Haven</li>
                      <li>• Wilpattu National Park - Sloth Bear Territory</li>
                      <li>• Minneriya National Park - The Gathering</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Wildlife Highlights</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Sri Lankan Leopards (Highest density globally)</li>
                      <li>• Asian Elephants (5,800+ wild population)</li>
                      <li>• 400+ Bird Species</li>
                      <li>• Sloth Bears, Spotted Deer, Wild Boar</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Why Choose Sri Lanka Wildlife Safari Packages?</h2>
              
              <p>
                Sri Lanka stands out as one of Asia's premier wildlife destinations, offering an incredible diversity of flora and fauna within a compact island nation. Our <strong>Sri Lanka wildlife safari packages</strong> are meticulously designed to maximize your chances of witnessing the Big Five of Sri Lanka: leopards, elephants, sloth bears, blue whales, and sperm whales.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Yala National Park - The Crown Jewel</h3>
              <p>
                Yala National Park boasts the highest density of leopards in the world, with an estimated 17.5 leopards per 100 square kilometers. Our safari packages include early morning and late afternoon game drives when these magnificent cats are most active. The park also hosts over 215 bird species, making it a paradise for birdwatchers.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Udawalawe National Park - Elephant Paradise</h3>
              <p>
                Home to over 600 Asian elephants, Udawalawe offers guaranteed elephant sightings year-round. The park's open grasslands provide excellent visibility, making it perfect for photography enthusiasts. Our packages often include visits to the nearby Elephant Transit Home, where orphaned elephant calves are rehabilitated.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Combining Culture and Wildlife</h3>
              <p>
                Many of our wildlife safari packages can be combined with cultural experiences. For instance, you can explore the rich heritage of Sri Lanka with our <a href="https://seerendipitytours.com/sri-lanka-green-bless-2-day-cultural-tour" className="text-primary hover:text-primary/80 underline">2-day cultural tour</a>, which perfectly complements a wildlife adventure by showcasing the island's ancient temples, traditional villages, and local customs.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Popular Safari Package Options</h2>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">3-Day Wildlife Explorer</h3>
              <p>
                Perfect for first-time visitors, this package covers Yala National Park and includes accommodation at a nearby eco-lodge. Experience morning and evening game drives with expert naturalist guides who share their extensive knowledge of animal behavior and park ecology.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">6-Day Ultimate Safari Experience</h3>
              <p>
                Our comprehensive <a href="https://serendipitypvt.com/itinerary/6-day-sri-lanka-tour/" className="text-primary hover:text-primary/80 underline">6-day Sri Lanka tour</a> combines multiple national parks including Yala, Udawalawe, and Minneriya. This package offers the best chance to encounter all of Sri Lanka's iconic wildlife species while enjoying comfortable accommodations and expert guidance throughout your journey.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Best Time for Wildlife Safaris</h3>
              <p>
                Sri Lanka's wildlife can be observed year-round, but certain seasons offer better experiences:
              </p>
              <ul className="my-4">
                <li><strong>February to July:</strong> Ideal for Yala National Park (dry season, animals gather around water sources)</li>
                <li><strong>May to September:</strong> Perfect for Minneriya National Park (famous elephant gathering)</li>
                <li><strong>Year-round:</strong> Udawalawe National Park offers consistent wildlife viewing</li>
                <li><strong>December to March:</strong> Best for whale watching off the southern coast</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">What Makes Our Safari Packages Special</h2>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Expert Naturalist Guides</h3>
              <p>
                Our experienced guides possess intimate knowledge of animal behavior patterns, ensuring you're in the right place at the right time. They can identify bird calls, track animal movements, and share fascinating insights about Sri Lanka's unique ecosystems.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Eco-Friendly Accommodations</h3>
              <p>
                We partner with eco-lodges and sustainable accommodations that minimize environmental impact while providing comfortable stays. Many of our lodges are located within or adjacent to national parks, offering the chance to spot wildlife right from your room.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Small Group Sizes</h3>
              <p>
                To ensure an intimate and personalized experience, our safari vehicles accommodate small groups, allowing for better wildlife viewing and photography opportunities. This approach also reduces disturbance to the animals and their natural behaviors.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Photography and Wildlife Watching Tips</h2>
              
              <p>
                Capturing Sri Lanka's wildlife requires patience and preparation. Early morning safaris (starting at 6 AM) and late afternoon drives offer the best lighting conditions and animal activity. Bring a telephoto lens for close-up shots of distant animals, and always maintain a respectful distance from wildlife.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Essential Safari Gear</h3>
              <ul className="my-4">
                <li>Binoculars for distant wildlife spotting</li>
                <li>Camera with telephoto lens</li>
                <li>Neutral-colored clothing (khaki, olive, brown)</li>
                <li>Sun protection (hat, sunscreen, sunglasses)</li>
                <li>Insect repellent</li>
                <li>Comfortable walking shoes</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conservation and Responsible Tourism</h2>
              
              <p>
                Our <strong>Sri Lanka wildlife safari packages</strong> are designed with conservation in mind. A portion of safari fees contributes directly to park maintenance and anti-poaching efforts. We follow strict guidelines to ensure minimal environmental impact and support local communities through employment and sustainable tourism practices.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Supporting Local Communities</h3>
              <p>
                By choosing our safari packages, you're contributing to local economic development. We employ local guides, use local transportation, and partner with community-based accommodations, ensuring that tourism benefits reach the people who are the true guardians of Sri Lanka's natural heritage.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Booking Your Wildlife Safari Package</h2>
              
              <p>
                Sri Lanka wildlife safari packages can be customized to match your interests, budget, and time constraints. Whether you're a serious wildlife photographer, a family with children, or a couple seeking a romantic adventure, we can tailor the perfect safari experience for you.
              </p>

              <p>
                Contact us today to discuss your dream wildlife safari in Sri Lanka. Our expert team will help you choose the best parks, accommodations, and itinerary to create memories that will last a lifetime. With our comprehensive packages, professional guides, and commitment to responsible tourism, your Sri Lankan wildlife adventure awaits!
              </p>
            </div>

            {/* Call to Action */}
            <Card className="mt-12 bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for Your Wildlife Adventure?</h3>
                <p className="text-muted-foreground mb-6">
                  Book your Sri Lanka wildlife safari package today and experience the incredible biodiversity of this tropical paradise.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Binoculars className="w-5 h-5 mr-2" />
                  Book Your Safari Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}