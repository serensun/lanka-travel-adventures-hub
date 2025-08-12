import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Star, Clock, ArrowRight, Plane, Camera, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/sri-lanka-france-packages-hero.avif';

const SriLankaVacationPackagesFromFrance = () => {
  const tableOfContents = [
    { title: "Why Choose Sri Lanka for Your French Vacation?", href: "#why-choose-sri-lanka" },
    { title: "Best Sri Lanka Tour Packages for French Travelers", href: "#best-packages" },
    { title: "Cultural Experiences Perfect for French Visitors", href: "#cultural-experiences" },
    { title: "French-Friendly Accommodations", href: "#accommodations" },
    { title: "Planning Your Sri Lanka Vacation from France", href: "#planning-guide" },
    { title: "Travel Tips for French Visitors", href: "#travel-tips" },
    { title: "Frequently Asked Questions", href: "#faq" }
  ];

  const tourPackages = [
    {
      title: "Sri Lanka Grand Discovery - 10 Days",
      price: "€1,899",
      duration: "10 days",
      highlights: ["Sigiriya Rock Fortress", "Kandy Temple", "Tea Plantations", "Safari Adventure"],
      description: "Perfect introduction to Sri Lanka's cultural triangle and natural beauty"
    },
    {
      title: "Cultural Heritage Explorer - 7 Days", 
      price: "€1,499",
      duration: "7 days",
      highlights: ["Ancient Cities", "Buddhist Temples", "Local Villages", "Traditional Crafts"],
      description: "Immerse yourself in 2,500 years of rich cultural heritage"
    },
    {
      title: "Tropical Paradise & Wildlife - 8 Days",
      price: "€1,699",
      duration: "8 days", 
      highlights: ["Yala Safari", "Beach Relaxation", "Whale Watching", "Coastal Towns"],
      description: "Combine wildlife adventures with pristine beach experiences"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sri Lanka Vacation Packages from France | Expert French Travel Guide</title>
        <meta name="description" content="Discover exclusive Sri Lanka vacation packages from France. Expert-designed tours featuring cultural sites, wildlife safaris, and tropical beaches. French-speaking guides available." />
        <meta name="keywords" content="Sri Lanka vacation packages from France, Sri Lanka tours France, French travelers Sri Lanka, vacation Sri Lanka, tours Sri Lanka France" />
        <link rel="canonical" href="https://seerendipitytours.lovable.app/4-Days-in-Sri-Lanka" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Sri Lanka Vacation Packages from France | Expert French Travel Guide" />
        <meta property="og:description" content="Discover exclusive Sri Lanka vacation packages from France. Expert-designed tours featuring cultural sites, wildlife safaris, and tropical beaches." />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://seerendipitytours.lovable.app/4-Days-in-Sri-Lanka" />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sri Lanka Vacation Packages from France" />
        <meta name="twitter:description" content="Discover exclusive Sri Lanka vacation packages from France with expert French-speaking guides." />
        <meta name="twitter:image" content={heroImage} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Sri Lanka Vacation Packages from France | Expert French Travel Guide",
            "description": "Discover exclusive Sri Lanka vacation packages from France. Expert-designed tours featuring cultural sites, wildlife safaris, and tropical beaches.",
            "image": heroImage,
            "author": {
              "@type": "Organization",
              "name": "Serendipity Tours"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "Serendipity Tours",
              "logo": {
                "@type": "ImageObject",
                "url": "https://seerendipitytours.lovable.app/logo.png"
              }
            },
            "datePublished": "2025-01-12",
            "dateModified": "2025-01-12"
          })}
        </script>
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <img
              src={heroImage}
              alt="Beautiful Sri Lankan landscape perfect for French vacation packages"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Sri Lanka Vacation Packages from France
              </h1>
              <p className="text-xl opacity-90">
                Découvrez le paradis tropical avec nos forfaits experts
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Published: January 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Sri Lanka</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">Vacation Packages</Badge>
            <Badge variant="secondary">France Travel</Badge>
            <Badge variant="secondary">Cultural Tours</Badge>
            <Badge variant="secondary">Wildlife Safari</Badge>
            <Badge variant="secondary">Beach Holidays</Badge>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-muted/30 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <section id="why-choose-sri-lanka" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Why Choose Sri Lanka for Your French Vacation?
            </h2>

            <p className="mb-6 text-muted-foreground">
              Sri Lanka vacation packages from France offer an extraordinary escape to one of Asia's most captivating destinations. This enchanting island nation, often called the "Pearl of the Indian Ocean," provides French travelers with a perfect blend of exotic culture, pristine beaches, ancient heritage, and warm hospitality that rivals the world's top vacation destinations.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Unparalleled Cultural Richness
            </h3>

            <p className="mb-6 text-muted-foreground">
              French visitors are particularly drawn to Sri Lanka's remarkable cultural heritage, which spans over 2,500 years. The island boasts eight UNESCO World Heritage Sites, including the magnificent Sigiriya Rock Fortress and the sacred city of Kandy. These ancient wonders provide a fascinating contrast to European architecture and offer unique photographic opportunities that French travelers cherish.
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
              <li><strong>Ancient Buddhist temples</strong> with intricate architecture and peaceful atmospheres</li>
              <li><strong>Colonial-era buildings</strong> that reflect Dutch, Portuguese, and British influences</li>
              <li><strong>Traditional arts and crafts</strong> including batik, wood carving, and precious gem cutting</li>
              <li><strong>Vibrant festivals</strong> celebrating Buddhist and Hindu traditions throughout the year</li>
              <li><strong>Local markets</strong> bursting with exotic spices, tropical fruits, and handmade goods</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Tropical Paradise Perfectly Suited for French Tastes
            </h3>

            <p className="mb-6 text-muted-foreground">
              Sri Lanka's diverse landscapes offer something for every French traveler's preference. From the misty mountains of the central highlands to the golden beaches of the southern coast, the island's natural beauty is breathtaking and accessible year-round.
            </p>
          </section>

          <section id="best-packages" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Best Sri Lanka Tour Packages for French Travelers
            </h2>

            <p className="mb-8 text-muted-foreground">
              Our specially curated Sri Lanka vacation packages from France are designed with French travelers' preferences in mind, offering comfortable accommodations, excellent cuisine options, and culturally enriching experiences.
            </p>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 mb-8">
              {tourPackages.map((pkg, index) => (
                <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-foreground">{pkg.title}</CardTitle>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">{pkg.duration}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              What Makes Our Packages Special for French Visitors?
            </h3>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li><strong>French-speaking tour guides</strong> available upon request for seamless communication</li>
              <li><strong>Carefully selected accommodations</strong> that meet European comfort standards</li>
              <li><strong>Cuisine options</strong> including French-inspired dishes alongside authentic Sri Lankan meals</li>
              <li><strong>Flexible itineraries</strong> that allow for leisurely exploration and cultural immersion</li>
              <li><strong>Small group sizes</strong> ensuring personalized attention and authentic experiences</li>
            </ul>
          </section>

          <section id="cultural-experiences" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Cultural Experiences Perfect for French Visitors
            </h2>

            <p className="mb-6 text-muted-foreground">
              French travelers appreciate authentic cultural encounters, and Sri Lanka delivers exceptional experiences that create lasting memories and deep cultural understanding.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ancient City Explorations
            </h3>

            <p className="mb-6 text-muted-foreground">
              The ancient cities of Anuradhapura, Polonnaruwa, and Sigiriya offer French visitors a journey through time. These archaeological marvels showcase sophisticated urban planning, intricate stonework, and advanced hydraulic systems that predate many European civilizations.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Tea Plantation Experiences
            </h3>

            <p className="mb-6 text-muted-foreground">
              The central highlands' tea estates provide a unique cultural experience that resonates with French appreciation for fine beverages. Visitors can participate in tea picking, learn about processing methods, and enjoy tastings in scenic plantation settings that rival the beauty of French countryside.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Traditional Arts and Crafts Workshops
            </h3>

            <p className="mb-6 text-muted-foreground">
              Hands-on experiences in traditional Sri Lankan crafts appeal to French travelers' artistic sensibilities. Popular workshops include:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Batik fabric painting in traditional patterns and modern designs</li>
              <li>Wood carving sessions using ancient techniques passed down through generations</li>
              <li>Pottery making in village settings with local artisans</li>
              <li>Traditional mask carving and painting workshops</li>
              <li>Spice garden tours with cooking demonstrations</li>
            </ul>
          </section>

          <section id="accommodations" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              French-Friendly Accommodations
            </h2>

            <p className="mb-6 text-muted-foreground">
              Our Sri Lanka vacation packages from France feature carefully selected accommodations that cater to French standards of comfort, style, and service. These properties offer the perfect balance of local character and international amenities.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Boutique Hotels and Heritage Properties
            </h3>

            <p className="mb-6 text-muted-foreground">
              French travelers particularly enjoy our selection of boutique hotels housed in restored colonial mansions, traditional Sri Lankan homes, and purpose-built properties that reflect local architectural styles. These accommodations provide:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Personalized service with staff trained in French hospitality standards</li>
              <li>Rooms designed with both comfort and cultural authenticity in mind</li>
              <li>Restaurants offering fusion cuisine that appeals to French palates</li>
              <li>Spa services incorporating traditional Ayurvedic treatments</li>
              <li>Beautiful gardens and outdoor spaces for relaxation</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Eco-Lodges and Sustainable Tourism
            </h3>

            <p className="mb-6 text-muted-foreground">
              Environmental consciousness is important to many French travelers, and Sri Lanka offers excellent eco-lodge options that combine sustainability with comfort. These properties demonstrate commitment to environmental protection while providing unique accommodations in natural settings.
            </p>
          </section>

          <section id="planning-guide" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Planning Your Sri Lanka Vacation from France
            </h2>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Best Time to Visit
            </h3>

            <p className="mb-6 text-muted-foreground">
              Sri Lanka's tropical climate offers year-round travel opportunities, but certain seasons provide optimal conditions for different regions and activities:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li><strong>December to March:</strong> Perfect for west and south coast beaches, cultural triangle exploration</li>
              <li><strong>May to September:</strong> Ideal for east coast beaches and cultural sites</li>
              <li><strong>April and October:</strong> Excellent for hill country visits and tea plantation tours</li>
              <li><strong>Year-round:</strong> Wildlife safaris, though different parks peak at different times</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Travel Documentation and Requirements
            </h3>

            <p className="mb-6 text-muted-foreground">
              French citizens planning Sri Lanka vacation packages should ensure proper documentation:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Valid French passport with at least 6 months remaining validity</li>
              <li>Electronic Travel Authorization (ETA) obtained online before departure</li>
              <li>Proof of return ticket or onward travel arrangements</li>
              <li>Travel insurance covering medical expenses and emergency evacuation</li>
              <li>Yellow fever vaccination certificate if arriving from infected areas</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Currency and Financial Considerations
            </h3>

            <p className="mb-6 text-muted-foreground">
              The Sri Lankan Rupee (LKR) is the local currency. French travelers should note:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Credit cards widely accepted in hotels, restaurants, and major shops</li>
              <li>ATMs available in cities and tourist areas for cash withdrawals</li>
              <li>USD and Euros can be exchanged at banks and authorized dealers</li>
              <li>Tipping is appreciated but not mandatory (10-15% for good service)</li>
              <li>Bargaining is common in markets and with street vendors</li>
            </ul>
          </section>

          <section id="travel-tips" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Essential Travel Tips for French Visitors
            </h2>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Cultural Etiquette and Customs
            </h3>

            <p className="mb-6 text-muted-foreground">
              Understanding local customs enhances your Sri Lanka vacation experience and shows respect for the local culture:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Dress modestly when visiting temples (cover shoulders and knees)</li>
              <li>Remove shoes and hats before entering religious sites</li>
              <li>Avoid pointing feet toward Buddha statues or monks</li>
              <li>Ask permission before photographing people, especially monks</li>
              <li>Use right hand for eating and giving/receiving items</li>
              <li>Avoid public displays of affection</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Health and Safety Considerations
            </h3>

            <p className="mb-6 text-muted-foreground">
              Sri Lanka is generally safe for French tourists, but basic precautions ensure a worry-free vacation:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Drink bottled or properly filtered water</li>
              <li>Use sunscreen and protective clothing due to strong tropical sun</li>
              <li>Carry insect repellent for mosquito protection</li>
              <li>Stay hydrated and take frequent breaks in hot weather</li>
              <li>Keep copies of important documents in separate locations</li>
              <li>Purchase comprehensive travel insurance</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Communication and Language
            </h3>

            <p className="mb-6 text-muted-foreground">
              English is widely spoken in tourist areas, making communication relatively easy for French visitors. However, learning a few basic Sinhala or Tamil phrases is appreciated by locals and enhances cultural exchange.
            </p>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  How long should I plan for my Sri Lanka vacation from France?
                </h4>
                <p className="text-muted-foreground">
                  We recommend a minimum of 7-10 days to experience Sri Lanka's highlights. Our most popular packages range from 7-14 days, allowing sufficient time to explore cultural sites, enjoy wildlife safaris, and relax on beautiful beaches.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  Are French-speaking guides available?
                </h4>
                <p className="text-muted-foreground">
                  Yes, we can arrange French-speaking guides for most of our Sri Lanka vacation packages from France. Please request this service when booking to ensure availability.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  What is the best way to get to Sri Lanka from France?
                </h4>
                <p className="text-muted-foreground">
                  The most convenient route from France to Sri Lanka typically involves one or two stops. Popular airlines include Emirates (via Dubai), Qatar Airways (via Doha), and Turkish Airlines (via Istanbul). Flight time is approximately 10-14 hours including connections.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  Is Sri Lanka safe for French tourists?
                </h4>
                <p className="text-muted-foreground">
                  Sri Lanka is generally very safe for French tourists. The country has a low crime rate, and locals are known for their hospitality toward foreign visitors. Standard travel precautions and awareness of local customs ensure a safe and enjoyable experience.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  What type of cuisine can French travelers expect?
                </h4>
                <p className="text-muted-foreground">
                  Sri Lankan cuisine offers a delightful blend of spices and flavors that many French travelers find appealing. Our packages include restaurants that can accommodate French preferences, and many hotels offer international cuisine alongside local specialties.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-primary/5 rounded-2xl p-8 text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Book Your Sri Lanka Vacation from France?
            </h2>
            <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
              Discover why Sri Lanka vacation packages from France are becoming increasingly popular. Contact our travel experts to create your personalized Sri Lankan adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="flex items-center gap-2">
                <Plane className="w-5 h-5" />
                Start Planning Your Trip
              </Button>
              <Link to="/contact" className="text-primary hover:text-primary/80 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Get Free Consultation
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default SriLankaVacationPackagesFromFrance;