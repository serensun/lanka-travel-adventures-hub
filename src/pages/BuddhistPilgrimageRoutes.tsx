import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, MapPin, Users } from 'lucide-react';
import EnhancedGallery from '@/components/ui/enhanced-gallery';

// Import images
import buddhistPilgrimageHero from '@/assets/buddhist-pilgrimage-hero.avif';
import buddhistPilgrimage1 from '@/assets/buddhist-pilgrimage-1.avif';
import buddhistPilgrimage2 from '@/assets/buddhist-pilgrimage-2.avif';

const BuddhistPilgrimageRoutes = () => {
  const galleryImages = [
    { src: buddhistPilgrimageHero, alt: "Buddhist temple in Sri Lanka" },
    { src: buddhistPilgrimage1, alt: "Ancient Buddhist monastery" },
    { src: buddhistPilgrimage2, alt: "Sacred Buddhist site" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={buddhistPilgrimageHero}
          alt="Sri Lanka Buddhist pilgrimage routes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Sri Lanka Buddhist Pilgrimage Routes
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Discover sacred Buddhist sites and ancient pilgrimage paths across the island
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            January 31, 2025
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            22 min read
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Sri Lanka
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            Pilgrimage, Buddhist Sites
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Sri Lanka, the resplendent island nation, holds a special place in Buddhist history as one of the earliest countries to embrace Buddhism. With over 2,300 years of Buddhist heritage, the island is home to numerous sacred sites, ancient monasteries, and pilgrimage routes that continue to attract devotees and spiritual seekers from around the world.
          </p>

          {/* Table of Contents */}
          <div className="bg-muted/30 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#introduction" className="text-primary hover:text-primary/80">Introduction to Buddhist Pilgrimage in Sri Lanka</a></li>
              <li><a href="#sacred-sites" className="text-primary hover:text-primary/80">Major Sacred Sites and Temples</a></li>
              <li><a href="#pilgrimage-routes" className="text-primary hover:text-primary/80">Traditional Pilgrimage Routes</a></li>
              <li><a href="#cultural-triangle" className="text-primary hover:text-primary/80">The Cultural Triangle Pilgrimage</a></li>
              <li><a href="#adams-peak" className="text-primary hover:text-primary/80">Adam's Peak Sacred Journey</a></li>
              <li><a href="#planning" className="text-primary hover:text-primary/80">Planning Your Pilgrimage</a></li>
              <li><a href="#etiquette" className="text-primary hover:text-primary/80">Temple Etiquette and Guidelines</a></li>
              <li><a href="#conclusion" className="text-primary hover:text-primary/80">Conclusion</a></li>
            </ul>
          </div>

          {/* Gallery Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Sacred Sites Gallery</h2>
            <EnhancedGallery images={galleryImages} className="mb-8" />
          </div>

          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Introduction to Buddhist Pilgrimage in Sri Lanka</h2>
            
            <p className="mb-6 leading-relaxed">
              Buddhism arrived in Sri Lanka in the 3rd century BCE during the reign of King Devanampiya Tissa, brought by Arahat Mahinda, son of Emperor Ashoka of India. Since then, the island has been a bastion of Theravada Buddhism, preserving ancient traditions, texts, and practices that have been passed down through generations.
            </p>

            <p className="mb-6 leading-relaxed">
              The Buddhist pilgrimage routes in Sri Lanka offer more than just religious significance; they provide a journey through time, culture, and spiritual awakening. These sacred paths connect ancient cities, royal capitals, and monasteries that have witnessed the rise and fall of kingdoms while maintaining their spiritual essence.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Why Sri Lanka is Special for Buddhist Pilgrims</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Home to the sacred Bo Tree (Sri Maha Bodhi) in Anuradhapura, grown from a cutting of the original Bodhi tree under which Buddha attained enlightenment</li>
              <li>Custodian of the Sacred Tooth Relic of Buddha, housed in the Temple of the Tooth in Kandy</li>
              <li>Numerous ancient stupas and dagobas containing relics of Buddha and his disciples</li>
              <li>Well-preserved ancient texts and manuscripts in the Pali language</li>
              <li>Living tradition of monastic communities that have practiced continuously for over 2,000 years</li>
            </ul>
          </section>

          <section id="sacred-sites" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Major Sacred Sites and Temples</h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Anuradhapura - The Ancient Capital</h3>
            <p className="mb-4 leading-relaxed">
              Anuradhapura, Sri Lanka's first capital and a UNESCO World Heritage Site, is the most sacred city for Buddhist pilgrims. Founded in the 4th century BCE, it served as the capital for over 1,400 years.
            </p>
            
            <h4 className="text-xl font-semibold mb-3 text-foreground">Key Sites in Anuradhapura:</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Sri Maha Bodhi:</strong> The sacred Bo tree, over 2,300 years old, attracting pilgrims from around the world</li>
              <li><strong>Ruwanwelisaya:</strong> One of the finest stupas in Sri Lanka, built by King Dutugemunu</li>
              <li><strong>Thuparamaya:</strong> The oldest stupa in Sri Lanka, containing the collarbone relic of Buddha</li>
              <li><strong>Jetavanarama:</strong> Once the world's third-tallest structure, this massive stupa dominates the skyline</li>
              <li><strong>Abhayagiri Monastery:</strong> Ruins of an ancient monastery complex that housed thousands of monks</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Kandy - The Last Kingdom</h3>
            <p className="mb-4 leading-relaxed">
              Kandy, nestled in the central hills of Sri Lanka, was the last capital of the ancient kings and is now home to the most sacred Buddhist relic in the country.
            </p>
            
            <h4 className="text-xl font-semibold mb-3 text-foreground">Sacred Sites in Kandy:</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Temple of the Sacred Tooth Relic (Sri Dalada Maligawa):</strong> Houses the sacred tooth relic of Buddha</li>
              <li><strong>Malwathu Maha Viharaya:</strong> Important monastery and seat of one of the main Buddhist sects</li>
              <li><strong>Asgiriya Vihara:</strong> Another significant monastery complex</li>
              <li><strong>Udawattakele Sanctuary:</strong> Former royal forest preserve, now a peaceful retreat</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Polonnaruwa - The Medieval Capital</h3>
            <p className="mb-4 leading-relaxed">
              Polonnaruwa served as Sri Lanka's capital from the 11th to 13th centuries and contains some of the finest examples of ancient Sinhalese art and architecture.
            </p>
            
            <h4 className="text-xl font-semibold mb-3 text-foreground">Important Sites in Polonnaruwa:</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Gal Vihara:</strong> Four magnificent Buddha statues carved from a single granite wall</li>
              <li><strong>Lankatilaka Temple:</strong> Impressive brick structure with towering walls</li>
              <li><strong>Watadage:</strong> Circular relic house with intricate stone carvings</li>
              <li><strong>Rankoth Vehera:</strong> The largest stupa in Polonnaruwa</li>
            </ul>
          </section>

          <section id="pilgrimage-routes" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Traditional Pilgrimage Routes</h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-foreground">The Classic Triangle Route</h3>
            <p className="mb-4 leading-relaxed">
              The most popular Buddhist pilgrimage route connects the three ancient capitals: Anuradhapura, Polonnaruwa, and Kandy. This circuit allows pilgrims to experience the evolution of Buddhist architecture and practices across different periods.
            </p>
            
            <h4 className="text-xl font-semibold mb-3 text-foreground">Suggested Itinerary (7-10 days):</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Days 1-3:</strong> Anuradhapura - Visit all major stupas and the Sacred Bo Tree</li>
              <li><strong>Days 4-5:</strong> Mihintale - The cradle of Buddhism in Sri Lanka</li>
              <li><strong>Days 6-7:</strong> Polonnaruwa - Explore the medieval capital's religious sites</li>
              <li><strong>Days 8-10:</strong> Kandy - Pay respects at the Temple of the Tooth and surrounding monasteries</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">The Southern Sacred Circuit</h3>
            <p className="mb-4 leading-relaxed">
              This route focuses on the southern regions of Sri Lanka, including important temples and the sacred mountain of Adam's Peak.
            </p>
            
            <h4 className="text-xl font-semibold mb-3 text-foreground">Key Destinations:</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Kelaniya Temple:</strong> Near Colombo, where Buddha is said to have visited</li>
              <li><strong>Adam's Peak (Sri Pada):</strong> Sacred mountain with Buddha's footprint</li>
              <li><strong>Mulkirigala Temple:</strong> Ancient rock temple with cave paintings</li>
              <li><strong>Kataragama:</strong> Multi-religious sacred site</li>
            </ul>
          </section>

          <section id="cultural-triangle" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">The Cultural Triangle Pilgrimage</h2>
            
            <p className="mb-6 leading-relaxed">
              The Cultural Triangle, encompassing Anuradhapura, Polonnaruwa, and Kandy, forms the heart of Buddhist Sri Lanka. This region contains the highest concentration of sacred sites and offers the most comprehensive pilgrimage experience.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Dambulla Cave Temple</h3>
            <p className="mb-4 leading-relaxed">
              Located at the center of the Cultural Triangle, the Dambulla Cave Temple complex contains over 150 Buddha statues and murals dating back to the 1st century BCE. The five main caves each tell different aspects of Buddha's life and Buddhist cosmology.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Sigiriya's Buddhist Heritage</h3>
            <p className="mb-4 leading-relaxed">
              While famous for its royal palace ruins, Sigiriya also has significant Buddhist heritage. The base of the rock contains monastery ruins, and the site was originally a monastery before becoming a royal residence.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Mihintale - Where Buddhism Began</h3>
            <p className="mb-6 leading-relaxed">
              Mihintale is considered the birthplace of Buddhism in Sri Lanka. It was here that Arahat Mahinda first met King Devanampiya Tissa and introduced Buddhism to the island. The site includes numerous stupas, meditation caves, and the sacred Mihintale Rock.
            </p>
          </section>

          <section id="adams-peak" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Adam's Peak Sacred Journey</h2>
            
            <p className="mb-6 leading-relaxed">
              Adam's Peak (Sri Pada) stands as one of Sri Lanka's most sacred pilgrimage destinations. The 2,243-meter mountain is believed to bear the footprint of Buddha at its summit, making it a vital pilgrimage site for Buddhists worldwide.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">The Pilgrimage Season</h3>
            <p className="mb-4 leading-relaxed">
              The traditional pilgrimage season runs from December to May, with the peak period being from January to March. During this time, thousands of pilgrims make the nighttime ascent to reach the summit for sunrise.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">The Sacred Footprint</h3>
            <p className="mb-4 leading-relaxed">
              The depression at the summit, measuring about 1.8 meters long, is revered by Buddhists as the footprint left by Buddha during his legendary third visit to Sri Lanka. The site has been a place of worship for over 1,000 years.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Pilgrimage Routes to the Summit</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Hatton/Nallathanniya Route:</strong> Most popular and well-developed path (7 km)</li>
              <li><strong>Ratnapura Route:</strong> Longer but more scenic route through tea plantations</li>
              <li><strong>Kuruwita Route:</strong> Less crowded alternative path</li>
            </ul>
          </section>

          <section id="planning" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Planning Your Buddhist Pilgrimage</h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Best Time to Visit</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Dry Season (December-March):</strong> Ideal for visiting most sites, especially Cultural Triangle</li>
              <li><strong>Shoulder Seasons (April-May, September-November):</strong> Fewer crowds, occasional rain</li>
              <li><strong>Monsoon Season (June-August):</strong> Southwest monsoon affects western and southern regions</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Accommodation Options</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Temple Accommodation:</strong> Some temples offer simple lodging for pilgrims</li>
              <li><strong>Guest Houses:</strong> Budget-friendly options near major sites</li>
              <li><strong>Heritage Hotels:</strong> Converted colonial buildings with historical significance</li>
              <li><strong>Eco Lodges:</strong> Sustainable accommodation options in natural settings</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Transportation</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Private Driver:</strong> Most convenient for visiting multiple sites</li>
              <li><strong>Public Transport:</strong> Buses connect major towns and cities</li>
              <li><strong>Train:</strong> Scenic routes, especially in hill country</li>
              <li><strong>Organized Tours:</strong> Guided pilgrimage tours available</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">What to Pack</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Modest clothing covering shoulders and knees</li>
              <li>Comfortable walking shoes that can be easily removed</li>
              <li>Sun protection (hat, sunscreen, sunglasses)</li>
              <li>Light rain jacket or umbrella</li>
              <li>Insect repellent</li>
              <li>First aid kit and personal medications</li>
              <li>Water bottle and snacks for long temple visits</li>
            </ul>
          </section>

          <section id="etiquette" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Temple Etiquette and Guidelines</h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Dress Code</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Wear modest clothing that covers shoulders, arms, and legs</li>
              <li>Remove shoes and hats before entering temple premises</li>
              <li>White clothing is preferred for important religious occasions</li>
              <li>Avoid tight-fitting or revealing clothing</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Behavior in Temples</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Maintain a respectful and quiet demeanor</li>
              <li>Do not point feet toward Buddha statues</li>
              <li>Do not turn your back to Buddha statues</li>
              <li>Avoid touching statues or religious artifacts</li>
              <li>Photography may be restricted in certain areas</li>
              <li>Follow the guidance of monks and temple authorities</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Offerings and Donations</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Lotus flowers, incense, and oil lamps are traditional offerings</li>
              <li>Monetary donations help maintain temple facilities</li>
              <li>Participate respectfully in religious ceremonies if invited</li>
              <li>Follow local customs for making offerings</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">Interacting with Monks</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Show respect by keeping hands together in prayer position</li>
              <li>Women should not touch monks or hand items directly to them</li>
              <li>Speak quietly and respectfully</li>
              <li>Learn basic Sinhala or English phrases for greetings</li>
            </ul>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Conclusion</h2>
            
            <p className="mb-6 leading-relaxed">
              A Buddhist pilgrimage through Sri Lanka offers more than just visits to ancient temples and monuments. It provides an opportunity for spiritual reflection, cultural immersion, and connection with a living tradition that has thrived for over two millennia.
            </p>

            <p className="mb-6 leading-relaxed">
              Whether you follow the classic Cultural Triangle route, embark on the challenging ascent of Adam's Peak, or explore lesser-known sacred sites, each pilgrimage experience in Sri Lanka is unique and transformative. The island's Buddhist heritage, combined with its natural beauty and warm hospitality, creates an environment conducive to spiritual growth and inner peace.
            </p>

            <p className="mb-6 leading-relaxed">
              As you plan your pilgrimage, remember that the journey itself is as important as the destinations. Take time to meditate, reflect, and absorb the profound spiritual energy that permeates these sacred places. The Buddhist pilgrimage routes of Sri Lanka await those seeking enlightenment, peace, and a deeper understanding of the dharma.
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Plan Your Pilgrimage</h3>
              <p className="text-muted-foreground">
                Ready to embark on your spiritual journey through Sri Lanka's sacred Buddhist sites? Contact local tour operators or Buddhist organizations for guided pilgrimage experiences that honor both the religious significance and cultural heritage of these sacred places.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            URL: /Sri-Lanka-Buddhist-pilgrimage-routes
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuddhistPilgrimageRoutes;