import LazyImage from "@/components/LazyImage";
import localFoodMarketsHero from "@/assets/local-food-markets-hero.avif";
import localFoodMarkets1 from "@/assets/local-food-markets-1.avif";
import localFoodMarkets2 from "@/assets/local-food-markets-2.avif";
import localFoodMarkets3 from "@/assets/local-food-markets-3.avif";

export default function LocalFoodMarkets() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <LazyImage
          src={localFoodMarketsHero}
          alt="Vibrant local food market in Sri Lanka with fresh produce and spices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Local Food Markets Sri Lanka
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover the Heart of Sri Lankan Cuisine Through Bustling Markets and Authentic Flavors
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#introduction" className="hover:text-primary transition-colors">Introduction to Sri Lankan Food Markets</a></li>
              <li><a href="#colombo-markets" className="hover:text-primary transition-colors">Colombo's Premier Food Markets</a></li>
              <li><a href="#kandy-markets" className="hover:text-primary transition-colors">Kandy's Traditional Markets</a></li>
              <li><a href="#galle-markets" className="hover:text-primary transition-colors">Galle Fort and Southern Markets</a></li>
              <li><a href="#spice-markets" className="hover:text-primary transition-colors">Famous Spice Markets</a></li>
              <li><a href="#street-food" className="hover:text-primary transition-colors">Street Food Experiences</a></li>
              <li><a href="#seasonal-produce" className="hover:text-primary transition-colors">Seasonal Produce and Fruits</a></li>
              <li><a href="#market-etiquette" className="hover:text-primary transition-colors">Market Etiquette and Tips</a></li>
              <li><a href="#conclusion" className="hover:text-primary transition-colors">Planning Your Market Adventure</a></li>
            </ul>
          </div>

          {/* Introduction */}
          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Introduction to Sri Lankan Food Markets</h2>
            <p className="text-lg leading-relaxed mb-6">
              **Local food markets Sri Lanka** are vibrant, sensory-rich experiences that offer visitors an authentic glimpse into the island's culinary heart. These bustling hubs of activity showcase the incredible diversity of Sri Lankan cuisine, from aromatic spices that have made the island famous for centuries to exotic tropical fruits and traditional street food prepared with recipes passed down through generations.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Whether you're wandering through the colonial-era markets of Colombo, exploring the hill country markets of Kandy, or discovering hidden gems in coastal towns, each market tells a unique story of Sri Lanka's rich cultural heritage and culinary traditions.
            </p>
            
            <LazyImage
              src={localFoodMarkets1}
              alt="Traditional spice vendor at Sri Lankan market displaying colorful curry powders and aromatic spices"
              className="w-full h-[400px] object-cover rounded-lg my-8"
            />
          </section>

          {/* Colombo Markets */}
          <section id="colombo-markets" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Colombo's Premier Food Markets</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Pettah Market</h3>
                <p className="text-lg leading-relaxed mb-4">
                  The crown jewel of **local food markets Sri Lanka**, Pettah Market in Colombo is a maze of narrow streets filled with vendors selling everything from fresh produce to traditional sweets. This 300-year-old market is divided into specialized sections, making it easy to navigate through spice stalls, fruit vendors, and traditional food outlets.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Fresh spices: cardamom, cinnamon, nutmeg, and black pepper</li>
                  <li>Tropical fruits: mangoes, pineapples, rambutan, and durian</li>
                  <li>Traditional sweets: kavum, kokis, and aluwa</li>
                  <li>Rice varieties: red rice, basmati, and traditional samba rice</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Good Market</h3>
                <p className="text-lg leading-relaxed mb-4">
                  A modern take on traditional markets, Good Market operates on weekends at various locations around Colombo. This eco-friendly market focuses on organic produce, artisanal foods, and sustainable farming practices while maintaining the authentic market experience.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Manning Market</h3>
                <p className="text-lg leading-relaxed">
                  Located in the heart of Colombo, Manning Market is famous for its fresh vegetables, seafood, and meat. The market comes alive in the early morning hours when fishermen bring their fresh catch from the nearby coastline.
                </p>
              </div>
            </div>
          </section>

          {/* Kandy Markets */}
          <section id="kandy-markets" className="mb-12">
            <LazyImage
              src={localFoodMarkets2}
              alt="Fresh tropical fruits at Sri Lankan market including mangoes, pineapples, and exotic local fruits"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <h2 className="text-3xl font-bold mb-6">Kandy's Traditional Markets</h2>
            <p className="text-lg leading-relaxed mb-6">
              The cultural capital's markets reflect the unique blend of Sinhalese and Tamil cultures, offering visitors a chance to experience traditional hill country produce and cuisine. To fully appreciate the cultural richness of the region, consider exploring <a href="https://seerendipitytours.com/traditional-village-tours-Sri-Lanka" className="text-primary hover:underline">traditional village tours Sri Lanka</a> has to offer, which complement the market experience perfectly.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Kandy Central Market</h3>
                <p className="text-lg leading-relaxed">
                  Situated near the Temple of the Tooth, this market specializes in hill country vegetables, tea, and traditional Kandyan sweets. The cooler climate allows for unique produce not found in coastal markets.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Nuwara Eliya Market</h3>
                <p className="text-lg leading-relaxed">
                  Known as "Little England," Nuwara Eliya's market features temperate vegetables like carrots, leeks, and cabbage alongside traditional Sri Lankan produce, creating a unique fusion market experience.
                </p>
              </div>
            </div>
          </section>

          {/* Galle Markets */}
          <section id="galle-markets" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Galle Fort and Southern Markets</h2>
            <p className="text-lg leading-relaxed mb-6">
              The southern coastal markets offer a different flavor profile, with abundant seafood, coconut-based products, and tropical fruits. These markets showcase the maritime influence on Sri Lankan cuisine.
            </p>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-semibold mb-3">Galle Market</h3>
              <p className="text-lg leading-relaxed">
                Located within the historic Galle Fort, this market combines Dutch colonial architecture with traditional Sri Lankan market culture. Fresh fish, tropical fruits, and spices create an atmospheric shopping experience.
              </p>
            </div>
          </section>

          {/* Spice Markets */}
          <section id="spice-markets" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Famous Spice Markets</h2>
            <p className="text-lg leading-relaxed mb-6">
              Sri Lanka's reputation as the "Spice Island" is best experienced in its dedicated spice markets. These aromatic wonderlands offer everything from Ceylon cinnamon to rare black pepper varieties.
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Essential Spices to Look For:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>• Ceylon cinnamon (true cinnamon)</li>
                  <li>• Cardamom pods</li>
                  <li>• Black peppercorns</li>
                  <li>• Nutmeg and mace</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Curry leaves (fresh and dried)</li>
                  <li>• Turmeric root and powder</li>
                  <li>• Fenugreek seeds</li>
                  <li>• Pandanus leaves</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Street Food */}
          <section id="street-food" className="mb-12">
            <LazyImage
              src={localFoodMarkets3}
              alt="Traditional Sri Lankan street food being prepared at local market including hoppers and kottu roti"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <h2 className="text-3xl font-bold mb-6">Street Food Experiences</h2>
            <p className="text-lg leading-relaxed mb-6">
              **Local food markets Sri Lanka** are incomplete without experiencing the incredible street food scene. From crispy hoppers to spicy kottu roti, these markets serve as open-air restaurants where traditional recipes come to life.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">Must-Try Street Foods</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Hoppers (string hoppers and egg hoppers)</li>
                  <li>• Kottu roti (chopped flatbread stir-fry)</li>
                  <li>• Samosas and isso vadai</li>
                  <li>• Fresh king coconut water</li>
                  <li>• Traditional short eats</li>
                </ul>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">Sweet Treats</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Watalappam (coconut custard)</li>
                  <li>• Kavum (traditional oil cake)</li>
                  <li>• Fresh tropical fruit salads</li>
                  <li>• Coconut ice cream</li>
                  <li>• Treacle toffees</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seasonal Produce */}
          <section id="seasonal-produce" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Seasonal Produce and Fruits</h2>
            <p className="text-lg leading-relaxed mb-6">
              Understanding the seasonal nature of **local food markets Sri Lanka** enhances your market experience. Different times of the year bring unique fruits and vegetables to market stalls.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Monsoon Season (May-September)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mangoes (various varieties)</li>
                  <li>• Jackfruit</li>
                  <li>• Green vegetables</li>
                  <li>• Fresh herbs</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Dry Season (October-February)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pineapples</li>
                  <li>• Bananas</li>
                  <li>• Root vegetables</li>
                  <li>• Spices harvest</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Year-Round</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Coconuts</li>
                  <li>• Papayas</li>
                  <li>• Rice varieties</li>
                  <li>• Fresh fish</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Market Etiquette */}
          <section id="market-etiquette" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Market Etiquette and Tips</h2>
            <p className="text-lg leading-relaxed mb-6">
              Navigating **local food markets Sri Lanka** requires understanding local customs and etiquette to ensure a respectful and enjoyable experience for both visitors and vendors.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Do's</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Greet vendors with a smile and "Ayubowan"</li>
                  <li>✓ Bargain politely and respectfully</li>
                  <li>✓ Try before you buy (when offered)</li>
                  <li>✓ Carry small denominations of rupees</li>
                  <li>✓ Ask permission before photographing people</li>
                  <li>✓ Dress modestly and comfortably</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Don'ts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✗ Touch produce unnecessarily</li>
                  <li>✗ Be aggressive in bargaining</li>
                  <li>✗ Refuse offered hospitality rudely</li>
                  <li>✗ Block walkways while taking photos</li>
                  <li>✗ Ignore food safety basics</li>
                  <li>✗ Compare prices loudly between vendors</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mt-8">
              <h3 className="text-lg font-semibold mb-2">Safety Tips</h3>
              <p className="text-muted-foreground">
                Keep valuables secure, stay hydrated, be cautious with raw foods if you have a sensitive stomach, and always carry hand sanitizer for food sampling.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Planning Your Market Adventure</h2>
            <p className="text-lg leading-relaxed mb-6">
              Exploring **local food markets Sri Lanka** offers is one of the most authentic ways to experience the island's rich culinary heritage. From the bustling streets of Pettah to the aromatic spice markets of Kandy, each market provides unique insights into local life, traditions, and flavors that have shaped Sri Lankan cuisine for generations.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              To make the most of your culinary journey, consider combining market visits with comprehensive island exploration. The <a href="https://serendipitypvt.com/itinerary/beaten-path-sri-lanka-7-day-tour/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium underline">beaten path Sri Lanka 7-day tour</a> offers an excellent opportunity to discover hidden food markets and local eateries away from tourist crowds, providing authentic experiences that showcase the true heart of Sri Lankan cuisine.
            </p>
            
            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Explore Sri Lanka's Food Markets?</h3>
              <p className="text-lg mb-6">
                Contact <a href="https://serendipitypvt.com/" className="text-primary hover:text-primary/80 font-medium underline">Serendipity Tours</a> for an unforgettable culinary adventure through Sri Lanka's most vibrant food markets and discover the authentic flavors that make this island paradise a food lover's dream destination.
              </p>
              
            </div>
          </section>

          {/* Related Articles */}
          <section className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold">
                  <a href="/traditional-village-tours-sri-lanka" className="text-primary hover:underline">
                    Traditional Village Tours Sri Lanka
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Experience authentic rural life and traditional cooking methods in Sri Lankan villages.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">
                  <a href="/untouched-rainforests-sri-lanka" className="text-primary hover:underline">
                    Untouched Rainforests Sri Lanka
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Discover pristine rainforests and their unique ecosystems across the island.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
