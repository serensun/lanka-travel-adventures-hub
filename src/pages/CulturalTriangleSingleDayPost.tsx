import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Clock, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import EnhancedGallery from "@/components/ui/enhanced-gallery";
import culturalTriangleHero from "@/assets/cultural-triangle-hero.avif";
import culturalTriangle1 from "@/assets/cultural-triangle-1.avif";
import culturalTriangle2 from "@/assets/cultural-triangle-2.avif";
import culturalTriangle3 from "@/assets/cultural-triangle-3.avif";

const CulturalTriangleSingleDayPost = () => {
  const location = useLocation();
  
  const tableOfContents = [
    { id: "duration", title: "What is the duration of the Dambulla, Sigiriya, and Polonnaruwa tours?" },
    { id: "from-colombo", title: "Visiting Dambulla, Sigiriya and Polonnaruwa from Colombo" },
    { id: "three-day-tour", title: "3-day tour of Dambulla, Sigiriya, and Polonnaruwa" },
    { id: "destinations", title: "What are the significant destinations to visit?" },
    { id: "cultural-triangle", title: "The cultural triangle of Sri Lanka" },
    { id: "why-visit", title: "What are the reasons for visiting Sigiriya, Dambulla, and Polonnaruwa?" },
    { id: "best-time", title: "What is the optimal time to embark on the tours?" },
    { id: "itinerary", title: "What is the itinerary for the one-day tour?" },
    { id: "starting-point", title: "The commencement point of the journey" },
    { id: "sigiriya-first", title: "Visit Sigiriya first on the journey" },
    { id: "polonnaruwa", title: "Visiting Polonnaruwa" },
    { id: "dambulla", title: "Golden Temple Visitation" }
  ];

  const galleryImages = [
    { src: culturalTriangle1, alt: "Cultural Triangle Tour - Sigiriya Rock Fortress" },
    { src: culturalTriangle2, alt: "Cultural Triangle Tour - Dambulla Cave Temple" },
    { src: culturalTriangle3, alt: "Cultural Triangle Tour - Polonnaruwa Ancient City" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to Blog */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <Card className="mb-8 overflow-hidden border-0 shadow-xl bg-gradient-to-r from-card via-card to-card/90">
          <CardContent className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                Cultural Sites
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                Day Tours
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                UNESCO Heritage
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Visit Dambulla, Sigiriya, and Polonnaruwa in a single day
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Cultural Triangle, Sri Lanka</span>
              </div>
              <div className="text-sm">
                December 15, 2024
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Visit Dambulla, Sigiriya, and Polonnaruwa in a single day is possible, however, completing the trip successfully is depend on the starting point. It is crucial to commence the tour from Dambulla or Sigiriya in order to visit all 3 places in a single day. Due to the fact that this tour is involved with a long journey (about 150 km).
            </p>

            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share Article
            </Button>
          </CardContent>
        </Card>

        {/* Hero Image */}
        <div className="mb-8">
          <img
            src={culturalTriangleHero}
            alt="Cultural Triangle Single Day Tour"
            className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Table of Contents */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Table of Contents</h2>
            <nav className="space-y-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  className="block text-muted-foreground hover:text-primary transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Gallery */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Cultural Triangle Gallery</h2>
            <EnhancedGallery images={galleryImages} />
          </CardContent>
        </Card>

        {/* Main Content */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">
              
              <section className="space-y-6">
                <p className="text-lg leading-relaxed">
                  On a one-day tour to Sri Lanka, is it feasible to visit Dambulla, Sigiriya, and Polonnaruwa? Certainly, but it is crucial to commence the tour from Dambulla or Sigiriya in order to investigate Polonnaruwa, Sigiriya, and Dambulla in a single day. Due to the fact that this tour is involved with a long journey (about 150 km).
                </p>

                <p className="text-lg leading-relaxed">
                  It is feasible to visit Dambulla, Sigiriya, and Polonnaruwa in a single day; however, the itinerary should commence in Sigiriya, Dambulla, and Habarana.
                </p>

                <p className="text-lg leading-relaxed">
                  This article will focus on a specific inquiry that many travelers have when they are preparing for a vacation to Sri Lanka. The inquiry is whether it is feasible to visit Dambulla, Sigiriya, and Polonnaruwa in a single day. Based on my personal experience, it is feasible to visit the triumvirate in a single-day journey; in fact, I have achieved this on numerous occasions. I will demonstrate the process in a nutshell.
                </p>
              </section>

              <section id="duration" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">What is the duration of the Dambulla, Sigiriya, and Polonnaruwa tours?</h2>
                
                <p className="text-lg leading-relaxed">
                  We will discuss the duration of this one-day tour initially. Tourists may be able to visit the significant monuments at each of these three locations within 6-7 hours by driving between them in a private vehicle.
                </p>

                <p className="text-lg leading-relaxed">
                  The Dambulla, Sigiriya, and Polonnaruwa excursions typically last between 6-7 hours, depending on whether the journey commences in Habarana or Sigiriya. The time required for the one-day tour of Dambulla, Sigiriya, and Polonnaruwa, however, varied significantly based on the amount of time spent in each city and the mode of transportation. According to my personal experience, it is necessary to allocate approximately three hours for the journey between these three cities.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">It is necessary to investigate the monuments</h3>
                
                <p className="text-lg leading-relaxed">
                  Additionally, it will require approximately 4 additional hours to investigate the monuments in Dambulla, Sigiriya, and Polonnaruwa, resulting in a total tour duration of approximately six to seven hours. If you are a seasoned trekker or frequently walk at home, you may be able to reduce the duration of the journey by an hour and save approximately an hour. Please be advised that I have not computed the time necessary for a lunch break or any other brief respite.
                </p>
              </section>

              <section id="from-colombo" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Visiting Dambulla, Sigiriya and Polonnaruwa from Colombo</h2>
                
                <p className="text-lg leading-relaxed">
                  It is necessary to allocate about 14 hours for the trip when commencing a journey to Dambulla, Sigiriya, or Polonnaruwa from Colombo or any other beach resort on the west or south coast. The one-way trip may require a minimum of four hours due to the lengthy journey from Colombo. For those who reside in Colombo or a beach resort on the west coast, it is advisable to organize a two-day cultural triangle excursion that includes visits to Polonnaruwa, Dambulla, and Sigiriya.
                </p>
              </section>

              <section id="three-day-tour" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">3-day tour of Dambulla, Sigiriya, and Polonnaruwa</h2>
                
                <p className="text-lg leading-relaxed">
                  I believe that it would be preferable for you to reserve a three-day cultural triangle tour of Sri Lanka. This three-day tour encompasses Dambulla, Sigiriya, Polonnaruwa, and Kandy, which are all significant archaeological sites (UNESCO world heritage sites) in the cultural triangle. In addition to the historical monuments, this three-day excursion encompasses safaris, city visits, a botanical garden, cultural performances, and more.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">The itinerary for the three-day tour</h3>
                
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">Day 1:</span>
                    <span>Before departing for the hotel in Sigiriya, your guide will meet and greet you. He will also make pauses at the Pinnawala Elephant Orphanage and the Dambulla Temple.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">Day 2:</span>
                    <span>Ascend the Sigiriya rock fortress in the morning and explore the ancient city of Polonnaruwa. A subsequent safari in Minneriya National Park in the afternoon.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">Day 3:</span>
                    <span>Depart for the hotel in Colombo via Kandy; en route, visit the Royal Botanical Garden, Matale Spice Garden, and Tooth Relic Temple as well.</span>
                  </li>
                </ul>
              </section>

              <section id="destinations" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">What are the significant destinations to visit during a tour of Sigiriya, Dambulla, and Polonaruwa?</h2>
                
                <p className="text-lg leading-relaxed">
                  On this route, there are twelve significant historical monuments; however, the Dambulla Golden Temple, Sigiriya Rock Fortress, and Polonnaruwa Ancient City are the primary tourism attractions that you will visit due to the restricted time frame.
                </p>

                <p className="text-lg leading-relaxed">
                  Attending cooking classes or village excursions, participating in safari tours, or visiting other historical monuments is challenging due to time constraints. There is a high likelihood of visiting additional significant historical monuments, including the Pidurangala temple, which you are able to prolong your trip to for a two-day tour.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Main Attractions:</h3>
                
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Rock fortification of Sigiriya</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Dambulla Golden Temple</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Museum of Polonnaruwa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>The ancient city of Polonnaruwa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Temple of Pidurangala</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>National Park of Minneriya</span>
                  </li>
                </ul>
              </section>

              <section id="cultural-triangle" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">The cultural triangle of Sri Lanka</h2>
                
                <p className="text-lg leading-relaxed">
                  Many iconic tourist attractions, including Sigiriya and Dambulla, are included in the cultural triangle of Sri Lanka, which some individuals refer to as the golden triangle of Sri Lanka. One can observe hundreds of historical monuments that are in a state of disrepair and date back to the 3rd century BC by visiting the cultural triangle.
                </p>

                <p className="text-lg leading-relaxed">
                  However, the island is not solely comprised of cultural and historical monuments; there are numerous other significant locations that warrant exploration. The allocation of a few days for sightseeing in each region of the island is a prevalent practice among travelers.
                </p>
              </section>

              <section id="why-visit" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">What are the reasons for visiting Sigiriya, Dambulla, and Polonnaruwa?</h2>
                
                <p className="text-lg leading-relaxed">
                  Foreigners frequently engage in the practice of visiting historical monuments in Sri Lanka. Sigiriya, Dambulla, and Polonnaruwa are significant historical monuments and UNESCO world heritage locations. Consequently, the majority of Sri Lankan road journeys encompass all three locations.
                </p>

                <p className="text-lg leading-relaxed">
                  Every week, I receive numerous emails containing inquiries such as "Is it possible to visit Dambulla, Polonnaruwa, and Sigiriya in a single day?" "Is it possible for you to organize a tour that includes visits to Sigiriya, Polonnaruwa, and Dambulla?" "What is the duration of the trip to Dambulla, Polonnaruwa, and Sigiriya?". That is why I decided to create this blog post in order to provide a comprehensive account of the day excursion to Sigiriya, Polonnaruwa, and Dambulla.
                </p>
              </section>

              <section id="best-time" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">What is the optimal time to embark on the Dambulla, Sigiriya, and Polonnaruwa excursions?</h2>
                
                <p className="text-lg leading-relaxed">
                  If you are uncertain about the optimal time of year to undertake the Dambulla Sigiriya Polonnaruwa excursion, I would suggest that it can be undertaken at any point in the year. Dambulla, Sigiriya, and Polonnaruwa are all year-round holiday destinations as a result of the arid weather.
                </p>

                <p className="text-lg leading-relaxed">
                  The cultural triangle of Sri Lanka encompasses Dambulla, Sigiriya, and Polonnaruwa, all of which are situated in the arid zone of the country. Travelers can enjoy pleasant, sunny weather for the majority of the year in the arid zone of Sri Lanka, as rainfall is scarce and the majority of the year is dry.
                </p>
              </section>

              <section id="itinerary" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">What is the itinerary for the Dambulla Sigiriya Polonnaruwa one-day tour?</h2>
                
                <div className="bg-secondary/10 rounded-lg p-6 border border-secondary/20">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Daily Schedule:</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[80px]">7:00 am:</span>
                      <span>Commence the hike at the Sigiriya rock fortress.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[80px]">09:45 am:</span>
                      <span>Completion of the Sigiriya rock hike</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[80px]">10:00 am:</span>
                      <span>Drive to Polonnaruwa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[80px]">11:00 am:</span>
                      <span>Arrival in Polonnaruwa and commencement of the Polonnaruwa city excursion.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[80px]">1:00 pm:</span>
                      <span>Depart from the historical city of Polonnaruwa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[80px]">1:20 pm:</span>
                      <span>Lunch is taken</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[80px]">3:30 pm:</span>
                      <span>Visit the Dambulla Golden Cave Temple</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[80px]">4:30 pm:</span>
                      <span>A one-day conclusion of journey to Sigiriya, Polonnaruwa, and Dambulla concludes</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="starting-point" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">The commencement point of the journey to Dambulla is Sigiriya, Polonnaruwa</h2>
                
                <p className="text-lg leading-relaxed">
                  In order to visit Dambulla, Sigiriya, and Polonnaruwa in a single day, it is necessary to commence your voyage from a nearby location. This is due to the fact that the journey, given that it commences in Sigiriya or a neighboring location, is approximately 150 km in length and requires approximately three hours.
                </p>

                <p className="text-lg leading-relaxed">
                  Furthermore, an additional five hours will be required for tourism, resulting in a total tour duration of approximately eight hours. Naturally, you must also allocate time for a few breaks, such as for lunch, to use the restroom, or to consume a beverage.
                </p>
              </section>

              <section id="sigiriya-first" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">The initial activity of the Dambulla, Sigiriya, and Polonnaruwa one-day journey is to visit Sigiriya</h2>
                
                <p className="text-lg leading-relaxed">
                  I recommend that you commence the one-day tour at the earliest possible time, which is approximately 7 a.m. Additionally, I recommend that you begin your journey by visiting the Sigiriya rock fortress.
                </p>

                <p className="text-lg leading-relaxed">
                  You may be pondering why I suggest visiting Sigiriya in the early morning. Initially, shielding oneself from the scorching sun rays and intense heat is feasible during the Sigiriya trek, an outdoor activity. Not only is it inconvenient, but hiking during the day can result in fatigue and perspiration.
                </p>

                <p className="text-lg leading-relaxed">
                  The early morning visit to Sigiriya Rock also allows you to circumvent the crowd of tourists that begins to accumulate at the entrance at approximately 8 a.m. and subsequently persist until the early afternoon.
                </p>
              </section>

              <section id="polonnaruwa" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Visiting Polonnaruwa</h2>
                
                <p className="text-lg leading-relaxed">
                  Polonnaruwa, the second-most ancient capital of Sri Lanka, is a city that dates back to the 10th century AD. Polonnaruwa conceals an abundance of historical monuments, the majority of which are still in pristine condition.
                </p>

                <p className="text-lg leading-relaxed">
                  There are numerous historical structures, including palaces, parks, temples, and audience halls, that have been in existence for centuries. In contrast to Sigiriya, there are no stairs to ascend in Polonnaruwa; however, the monuments are dispersed throughout the large ancient city.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">City tour of Polonnaruwa</h3>
                
                <p className="text-lg leading-relaxed">
                  The primary focus of the Polonnaruwa city excursion is the exploration of ancient monuments, historical temples, stupas, and museums. The duration of the Polonnaruwa city tour may differ based on the mode of transportation and your interest in archaeology.
                </p>
              </section>

              <section id="dambulla" className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Golden Temple Visitation on a One-Day Tour</h2>
                
                <p className="text-lg leading-relaxed">
                  I suggest that you visit the Dambulla Golden Cave Temple at the conclusion of the one-day tour, which includes stops at Sigiriya, Dambulla, and Polonnaruwa. The Dambulla cave temple's ascent is less taxing than that of Sigiriya.
                </p>

                <p className="text-lg leading-relaxed">
                  You can visit Polonnaruwa at any time by taking a leisurely trek that lasts no more than 10 minutes (maximum). Dambulla steps are simpler to ascend than the rock-cut stairs of Sigiriya, which are narrower.
                </p>

                <p className="text-lg leading-relaxed">
                  The Dambulla cave temple visit is approximately one hour in duration, and it includes both upward and downward journeys to all five caves as well.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Why select Seerendipity Tours for your trip to Sigiriya, Dambulla and Polonnaruwa?</h2>
                
                <p className="text-lg leading-relaxed">
                  Seerendipity Tour is a travel company that is wholly locally owned and has its headquarters in Colombo. Seerendipity Tours' most significant asset is its exceptionally knowledgeable local personnel, who are capable of organizing your ideal Sri Lankan vacation.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">The most competitive price is guaranteed for your Sri Lankan excursion</h3>
                
                <p className="text-lg leading-relaxed">
                  By booking a tour with Seerendipity Tours, you are directly contacting the local company, ensuring that there are no intermediaries and that you receive the most competitive price. Please do not hesitate to contact us and inform us of your travel plans and preferred experiences.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">Arrange your ideal Sri Lankan excursion with the assistance of a professional</h3>
                
                <p className="text-lg leading-relaxed">
                  Our staff develops a customized itinerary for you, which you may modify until you identify the optimal Sri Lanka trip package. You may also consult our current tour packages for inspiration. All of our pre-made tour packages are adaptable and can be customized to satisfy your specific requirements.
                </p>

                <p className="text-lg leading-relaxed">
                  Contact us at admin@seerendipitytours.com or by phone: 0094-77-440977, WhatsApp: 0094-77-4440977
                </p>
              </section>

            </div>
          </CardContent>
        </Card>

        {/* Coming Soon Section */}
        <Card className="mt-8 border-0 shadow-lg bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">More Sri Lanka Travel Guides Coming Soon!</h2>
            <p className="text-muted-foreground">
              Stay tuned for more comprehensive guides about Sri Lanka's amazing destinations, cultural sites, and travel experiences.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CulturalTriangleSingleDayPost;