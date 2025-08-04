import Layout from "../components/Layout";
import LazyImage from "../components/LazyImage";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

// Import images
import wildlifeHero from "../assets/wildlife-guide-hero.avif";
import wildlife1 from "../assets/wildlife-guide-1.avif";
import wildlife2 from "../assets/wildlife-guide-2.avif";
import wildlife3 from "../assets/wildlife-guide-3.avif";

const WildlifeSeasonalGuide = () => {
  const tableOfContents = [
    { id: "wildlife-seasons", title: "Understanding Sri Lanka's Wildlife Seasons" },
    { id: "best-parks", title: "Best Time for Wildlife Safaris in Key Parks" },
    { id: "monthly-guide", title: "Month-by-Month Wildlife Guide" },
    { id: "tips", title: "Tips for an Unforgettable Wildlife Experience" },
  ];

  const parkSeasons = [
    {
      park: "Yala National Park",
      bestTime: "February to June",
      highlights: "Highest leopard density in the world",
      alternative: "September-October for lush greenery"
    },
    {
      park: "Wilpattu National Park",
      bestTime: "May to September", 
      highlights: "Leopards & sloth bears, less crowded",
      alternative: "Year-round for diverse wildlife"
    },
    {
      park: "Minneriya & Kaudulla",
      bestTime: "July to October",
      highlights: "The Great Elephant Gathering",
      alternative: "November-March for smaller herds"
    },
    {
      park: "Udawalawe National Park",
      bestTime: "Year-round (Nov-Mar ideal)",
      highlights: "Guaranteed elephant sightings",
      alternative: "April-June for bird migration"
    },
    {
      park: "Sinharaja Rainforest",
      bestTime: "January to April & August to September",
      highlights: "Endemic birds, reptiles & amphibians",
      alternative: "May-July for fewer crowds"
    }
  ];

  const monthlyGuide = [
    { months: "Jan-Mar", parks: "Yala, Udawalawe, Bundala", events: "Bird migration, leopard sightings" },
    { months: "Apr-Jun", parks: "Yala, Wilpattu, Kumana", events: "Peak dry season, best for predators" },
    { months: "Jul-Sep", parks: "Minneriya, Kaudulla, Wilpattu", events: "Elephant Gathering, sloth bears" },
    { months: "Oct-Dec", parks: "Sinharaja, Gal Oya, Horton Plains", events: "Birdwatching, lush landscapes" }
  ];

  return (
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[70vh] overflow-hidden">
          <LazyImage
            src={wildlifeHero}
            alt="Sri Lankan leopard in Yala National Park"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Best Time to Visit Sri Lanka for Wildlife
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                A comprehensive seasonal guide to maximize your wildlife viewing experience
              </p>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                Wildlife Expert Guide
              </Badge>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="text-lg">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sri Lanka is a paradise for wildlife enthusiasts, boasting lush national parks, exotic species, 
                  and incredible biodiversity. Whether you're hoping to spot leopards, elephants, or rare birds, 
                  timing your visit right can make all the difference. In this guide, we'll explore the best time 
                  to visit Sri Lanka for wildlife sightings, seasonal variations, and top parks to include in your itinerary.
                </p>
              </div>

              {/* Wildlife Seasons Section */}
              <section id="wildlife-seasons" className="space-y-6">
                <h2 className="text-3xl font-bold">Understanding Sri Lanka's Wildlife Seasons</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-600">Yala Monsoon</CardTitle>
                      <CardDescription>May - September</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Affects the southwest regions including Yala and Sinharaja. During this period, 
                      these parks experience heavy rainfall, making wildlife viewing challenging.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-green-600">Maha Monsoon</CardTitle>
                      <CardDescription>November - February</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Affects the northeast regions including Wilpattu and Minneriya. The dry seasons 
                      are typically the best times for wildlife viewing.</p>
                    </CardContent>
                  </Card>
                </div>
                <LazyImage
                  src={wildlife1}
                  alt="Elephant gathering in Minneriya National Park"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </section>

              {/* Best Parks Section */}
              <section id="best-parks" className="space-y-6">
                <h2 className="text-3xl font-bold">Best Time for Wildlife Safaris in Key Parks</h2>
                <div className="space-y-6">
                  {parkSeasons.map((park, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-xl">{park.park}</CardTitle>
                        <Badge variant="outline">{park.bestTime}</Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2"><strong>Why Visit:</strong> {park.highlights}</p>
                        <p><strong>Alternative:</strong> {park.alternative}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <LazyImage
                  src={wildlife2}
                  alt="Safari jeep in Yala National Park"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </section>

              {/* Monthly Guide Section */}
              <section id="monthly-guide" className="space-y-6">
                <h2 className="text-3xl font-bold">Month-by-Month Wildlife Guide</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left">Month</th>
                        <th className="border border-border p-3 text-left">Best Parks to Visit</th>
                        <th className="border border-border p-3 text-left">Key Wildlife Events</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyGuide.map((period, index) => (
                        <tr key={index}>
                          <td className="border border-border p-3 font-semibold">{period.months}</td>
                          <td className="border border-border p-3">{period.parks}</td>
                          <td className="border border-border p-3">{period.events}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <LazyImage
                  src={wildlife3}
                  alt="Endemic birds in Sinharaja rainforest"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </section>

              {/* Tips Section */}
              <section id="tips" className="space-y-6">
                <h2 className="text-3xl font-bold">Tips for an Unforgettable Wildlife Experience</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>Early morning safaris</strong> (6 AM) offer the best sightings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>Avoid weekends & holidays</strong> to escape crowds.</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>Hire a knowledgeable guide</strong> for tracking rare species.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>Respect wildlife</strong> – maintain distance and avoid loud noises.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-muted p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Plan Your Wildlife Adventure</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Ready to experience Sri Lanka's incredible wildlife? Our expert guides know exactly when and where to find the island's most spectacular animals.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="/2-day-wildlife-tour-package"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Wildlife Tours
                  </a>
                  <a 
                    href="/yala-safari-tour-package"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Yala Safari Tours
                  </a>
                </div>
              </div>

              {/* Final Thoughts */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold">Final Thoughts</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sri Lanka's wildlife is spectacular year-round, but visiting during the dry seasons maximizes your 
                  chances of unforgettable encounters. Whether you're tracking leopards in Yala, witnessing the 
                  Great Elephant Gathering, or birdwatching in Sinharaja, timing is key!
                </p>
                <p className="text-lg font-semibold mt-6">
                  Have you been on a Sri Lankan safari? Share your best wildlife moments in the comments!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default WildlifeSeasonalGuide;