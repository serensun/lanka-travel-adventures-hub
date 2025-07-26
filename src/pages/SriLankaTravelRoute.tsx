import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SriLankaTravelRoute = () => {
  const tableOfContents = [
    { id: 'transport-sri-lanka', title: 'Transport in Sri Lanka' },
    { id: 'expressways', title: 'Expressways' },
    { id: 'select-best-route', title: 'How do I select the best Sri Lanka travel route?' },
    { id: 'benefits-travel-path', title: 'Benefits of having the finest travel path' },
    { id: '14-popular-routes', title: 'What are the 14 popular Sri Lanka travel routes?' },
    { id: 'one-week-trip', title: 'The most popular travel route for a one-week Sri Lanka trip' },
    { id: 'colombo-kataragama', title: '1. Sri Lanka travel route from Colombo to Kataragama' },
    { id: 'colombo-matara', title: '2. Sri Lanka travel route: Colombo to Matara Expressway' },
    { id: 'colombo-nuwara-eliya', title: '3. Sri Lanka travel route Colombo to Nuwara Eliya via Kitulgala' },
    { id: 'colombo-arugam-bay', title: '4. Sri Lanka travel route: Colombo to Arugam Bay via Kandy' },
    { id: 'colombo-anuradhapura', title: '5. Sri Lanka travel route: Colombo to Anuradhapura via Puttalam' },
    { id: 'colombo-trincomalee', title: '6. Sri Lanka tour from Colombo to Trincomalee via Dambulla' },
    { id: 'colombo-kandy', title: '7. Travel route through Sri Lanka: Kegalle to Kandy from Colombo' },
    { id: 'colombo-rathnapura', title: '8. Travel route from Colombo to Rathnapura' },
    { id: 'colombo-bandarawela', title: '9. Sri Lanka travel route from Colombo to Bandarawela' },
    { id: 'nuwara-eliya-bentota', title: '10. Sri Lanka travel route from Nuwara Eliya to Bentota' },
    { id: 'colombo-sigiriya', title: '11. Travel routes in Sri Lanka: Colombo to Sigiriya' },
    { id: 'mirissa-colombo', title: '12. Travel routes in Sri Lanka: Mirissa to Colombo' },
    { id: 'colombo-badulla', title: '13. Colombo to Badulla via the hill country/tea loving route' },
    { id: 'anuradhapura-kandy', title: '14. Travel path from Anuradhapura to Kandy' },
    { id: 'mirissa-arugam-bay', title: '15. Route for wildlife lovers from Mirissa to Aru Gam Bay' },
    { id: 'southern-route', title: '16. Route for a seven-day trip via the southern route' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            January 26, 2025
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            25 min read
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Sri Lanka
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Sri Lanka Travel Route
        </h1>
        
        <div className="text-lg text-gray-700 leading-relaxed mb-8">
          <p className="mb-4">
            Choosing the best Sri Lanka travel route are important to your Sri Lanka tour's success. It is very crucial, especially if it is a short journey, such as a{' '}
            <a href="https://www.urlaub-sr-lanka.info/sri-lanka-day-trips-from-bentota/" className="text-primary hover:underline">
              1-day Sri Lanka trip
            </a>{' '}
            or a{' '}
            <a href="https://www.urlaub-sr-lanka.info/visit-sri-lanka-2-days-trip-in-sri-lanka/" className="text-primary hover:underline">
              2-day Sri Lanka tour
            </a>. 
            We all seek to decrease our journey time to allocate more time for sightseeing and leisure activities.
          </p>
          
          <p>
            While the island's pristine, palm-lined beaches get all the glory, Sri Lanka has much more to offer. Sri Lanka is a tropical island nation that has a lot to offer: ancient jungles, fairytale castles, historic landmarks, and medieval cities that have survived the years, as well as nature reserves teeming with wild creatures. Interesting old towns, folk museums, and rural villages showcasing the country's traditional culture are just a few of the things that will keep you occupied here.{' '}
            <a href="https://www.urlaub-sr-lanka.info/sri-lanka-hiking-tours/" className="text-primary hover:underline">
              Hiking the trails in Sri Lanka
            </a>{' '}
            is another great way to see the island's natural wetlands and wildlife.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
          <nav className="space-y-2">
            {tableOfContents.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors py-1"
              >
                <ChevronRight className="w-3 h-3" />
                {item.title}
              </a>
            ))}
          </nav>
        </CardContent>
      </Card>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <h2 id="transport-sri-lanka">Transport in Sri Lanka</h2>
        
        <p>
          Although some people choose to explore Sri Lanka on rental motorcycles or scooters, the most convenient alternative is to{' '}
          <a href="https://www.urlaub-sr-lanka.info/private-driver-guide-sri-lanka/" className="text-primary hover:underline">
            hire a car equipped with a driver and travel across Sri Lanka
          </a>. 
          Most drivers speak English well and are knowledgeable about every aspect of driving throughout the nation, even the best places to stop for roadside curry and rice that is spicier. In the event that you hire a driver for an extended trip, don't be shocked if they invite you to dinner before your visit is up. To get you started, here are a few of our recommended Sri Lanka travel route.
        </p>

        <p>
          Sri Lanka's transportation system mostly relies on a road network, concentrated around the country's business city, Colombo. A rail network serves a portion of Sri Lanka's transportation needs. Three international airports are located at Jaffna, Hambantota, and Katunayake, 35 kilometers (22 mi) north of Colombo, along with navigable canals and harbors.
        </p>

        <p>
          Streets represent roughly 93% of Sri Lanka's land transport. Sri Lanka's road network is roughly 12,000 kilometers (7,500 mi), comprising A- and B-class streets and 151.8 kilometers (94.3 mi) of expressways. The main transport modes in Sri Lanka are buses, passenger automobiles and motorcycles.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Grade</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Speed limit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">E</td>
                <td className="border border-gray-300 px-4 py-2">High-speed, high-traffic expressways duplicating heavily travelled A-Grade routes</td>
                <td className="border border-gray-300 px-4 py-2">100 km/h (62 mph)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">A</td>
                <td className="border border-gray-300 px-4 py-2">The national highway network</td>
                <td className="border border-gray-300 px-4 py-2">70 km/h (43 mph)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">B</td>
                <td className="border border-gray-300 px-4 py-2">Major provincial roads used as feeders for A- and E-Grade roads</td>
                <td className="border border-gray-300 px-4 py-2">60 km/h (37 mph)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">C</td>
                <td className="border border-gray-300 px-4 py-2">Local residential roads</td>
                <td className="border border-gray-300 px-4 py-2">50 km/h (31 mph)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="expressways">Expressways</h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Number</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Start</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">End</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Length (km)</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Lanes</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cost (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">E01</td>
                <td className="border border-gray-300 px-4 py-2">Colombo–Matara Expressway</td>
                <td className="border border-gray-300 px-4 py-2">Kottawa</td>
                <td className="border border-gray-300 px-4 py-2">Matara</td>
                <td className="border border-gray-300 px-4 py-2">126</td>
                <td className="border border-gray-300 px-4 py-2">4 (provision for 6)</td>
                <td className="border border-gray-300 px-4 py-2">765.4 million</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">E02</td>
                <td className="border border-gray-300 px-4 py-2">Outer Circular Expressway</td>
                <td className="border border-gray-300 px-4 py-2">Kottawa</td>
                <td className="border border-gray-300 px-4 py-2">Kerawalapitiya</td>
                <td className="border border-gray-300 px-4 py-2">29</td>
                <td className="border border-gray-300 px-4 py-2">6</td>
                <td className="border border-gray-300 px-4 py-2">1.12 billion</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">E03</td>
                <td className="border border-gray-300 px-4 py-2">Colombo–Katunayake Expressway</td>
                <td className="border border-gray-300 px-4 py-2">New Kelani Bridge</td>
                <td className="border border-gray-300 px-4 py-2">Katunayake</td>
                <td className="border border-gray-300 px-4 py-2">25.8</td>
                <td className="border border-gray-300 px-4 py-2">6,4 (provision for 6)</td>
                <td className="border border-gray-300 px-4 py-2">291 million</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">E04</td>
                <td className="border border-gray-300 px-4 py-2">Colombo–Kandy Expressway</td>
                <td className="border border-gray-300 px-4 py-2">Kadawatha</td>
                <td className="border border-gray-300 px-4 py-2">Katugastota</td>
                <td className="border border-gray-300 px-4 py-2">98.9</td>
                <td className="border border-gray-300 px-4 py-2">4,6</td>
                <td className="border border-gray-300 px-4 py-2">Under construction</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="select-best-route">How do I select the best Sri Lanka travel route?</h2>
        
        <p>
          The number of inquiries such as "What is the best travel route in Sri Lanka?" and "What is the best trip to Sri Lanka?" has been constantly rising. We thought of producing this essay expanding on various renowned travel routes in Sri Lanka that you should only hit once in a lifetime. This list features 14 travel routes, and we will be adding more in the future. I believe this information is quite beneficial, not only for local travelers but also for outsiders. If you plan a short Sri Lanka trip, such as a one-day trip, choosing the optimal travel route is crucial to the success of your trip because you need to minimize the time spent commuting and spend maximum time experiencing the places.
        </p>

        <h2 id="benefits-travel-path">Benefits of having the finest travel path for a Sri Lanka vacation</h2>
        
        <p>
          Choosing the best Sri Lanka travel route is important to your Sri Lanka tour's success. It is very crucial, especially if it is a short journey, such as a{' '}
          <a href="https://www.urlaub-sr-lanka.info/sri-lanka-day-trips-from-bentota/" className="text-primary hover:underline">
            1-day Sri Lanka trip
          </a>{' '}
          or a{' '}
          <a href="https://www.urlaub-sr-lanka.info/visit-sri-lanka-2-days-trip-in-sri-lanka/" className="text-primary hover:underline">
            2-day Sri Lanka tour
          </a>. 
          We all seek to decrease our journey time to allocate more time for sightseeing and leisure activities.
        </p>

        <p>
          A short journey means you have very little time for sightseeing, therefore, saving time on travel is quite vital. Even if it is a multi-day Sri Lanka trip, such as a 5-day Sri Lanka tour or a 1-week Sri Lanka trip, minimizing the time on the road means you can add many additional interesting destinations that are not previously included in your trip.
        </p>

        <h2 id="14-popular-routes">What are the 14 popular Sri Lanka travel routes?</h2>
        
        <p>
          On a prior occasion, we wrote a lengthy blog entry about Sri Lankan trips. We meticulously scratched the annals of Sri Lanka excursions and formed this blog post with the 14 top Sri Lanka travel routes for holiday trips in Sri Lanka. If you are contemplating a tour of Sri Lanka, you may choose one or more of the routes indicated below for your travel. Most of these routes provide an easy gateway to many popular one-day trips in Sri Lanka.
        </p>

        <ol className="list-decimal list-inside space-y-2 my-6">
          <li>Sri Lanka travel route Colombo to Kataragama.</li>
          <li>Sri Lanka travel route Colombo to Matara Expressway.</li>
          <li>Sri Lanka travel route Colombo to Nuwara Eliya via Kitulgala.</li>
          <li>Sri Lanka travel route Colombo to Arugam Bay via Kandy.</li>
          <li>Sri Lanka travel route Colombo to Anuradhapura via Puttalam.</li>
          <li>Sri Lanka travel route Colombo to Trincomalee via Dambulla.</li>
          <li>Sri Lanka travel route Colombo to Kandy via Kegalle.</li>
          <li>Sri Lanka travel route Colombo to Rathnapura.</li>
          <li>Sri Lanka travel route Colombo to Bandarawela via Haputale.</li>
          <li>Sri Lanka travel route Nuwara Eliya to Bentota via Kithulagla.</li>
          <li>Lanka travel route Colombo to Sigiriya via Kurunegala.</li>
          <li>Lanka Travel Route from Colombo to Mirissa/Beach Lovers Route.</li>
          <li>Sri Lankan travel route Colombo to Badulla across the hill country/tea lovers route.</li>
          <li>Sri Lanka travel route from Anuradhapura to Kandy/route for lovers of history and culture.</li>
          <li>Sri Lanka travel route from Mirissa to Aru Gam Bay/wildlife lovers route.</li>
          <li>Route for the 7 day tour on the southern route</li>
        </ol>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <h4 className="font-semibold text-blue-900">
            If you wish to book any Sri Lanka trip, please do get in touch with Seerendipity Tours by sending an email to admin@seerendipitytours.com or Call us/WhatsApp us at 0094774440977.
          </h4>
        </div>

        <h2 id="one-week-trip">The most popular travel route for a one-week Sri Lanka trip</h2>
        
        <p>
          The above-mentioned travel routes in Sri Lanka are most suitable for short trips from Colombo, such as a 1-day Sri Lanka trip or a 2-day Sri Lanka trip. If you plan a Sri Lanka trip for more than two days, like a one-week Sri Lanka trip or a 10-day Sri Lanka tour, you could combine a few of the above-mentioned travel routes to make a much bigger circuit.
        </p>

        <p>
          If you plan a one- to two-week Sri Lanka trip, we would like to recommend the below-mentioned travel route, which is one of the most popular Sri Lanka travel routes for Sri Lanka tours from 7 to 14 days. This travel route covers the most important tourist places, such as historical sites in the cultural triangle, Sri Lanka's hill country, southern Sri Lanka and west coast beaches.
        </p>

        <ul className="list-disc list-inside space-y-2 my-6">
          <li>Day 1: Colombo-Anurahdapura-Sigiriya</li>
          <li>Day 2: Sigiriya-Polonnaruwa</li>
          <li>Day 3: Polonnaruwa-Kandy</li>
          <li>Day 4: Kandy-Nuwara Eliya</li>
          <li>Day 5: Nuwara Eliya-Yala</li>
          <li>Day 6: Yala-Galle-Bentota</li>
          <li>Day 7: Bentota-Colombo</li>
        </ul>

        {/* Continue with remaining sections... */}
        <h2 id="colombo-kataragama">1. Sri Lanka travel route from Colombo to Kataragama</h2>
        
        <p>
          Words cannot convince you of the beauty of this coastal travel route from Colombo to Kataragama. It would definitely be fun to cruise along the pristine beaches of western and southern Sri Lanka. This is one of the most popular travel routes on the island. The travel route is very popular among local and foreign travelers, as it leads to many interesting places. Sri Lanka's south coast itinerary is a very popular trip in Sri Lanka and travelers who book south coast tours hit this travel route.
        </p>

        <p>
          There are many places on this route that you can't simply ignore. So plan your tour with several additional hours for the stops. This is a very popular route among foreign travelers because it brings them to some of the island's best beach resorts, such as Bentota Beach, Kalutara, Galle, Hikkaduwa, and many other beach resorts in southern Sri Lanka.
        </p>

        <h3>Places to stop on the Sri Lanka travel route from Colombo to Kataragama:</h3>
        
        <ul className="list-disc list-inside space-y-2 my-6">
          <li>Kalutara: Gamgatilaka temple, Kalido beach</li>
          <li>Beruwala: Kachchimale mosque</li>
          <li>Bentota: Bentota beach, water sport centre</li>
          <li>Balapitiya: Madu river safari, sea turtle farm</li>
          <li>Hikkaduwa: Hikkaduwa Beach, Hikkaduwa marine sanctuary, Mask Museum, Moonstone mines</li>
          <li>Galle: Galle fortress</li>
          <li>Unawatuna: Unawatuna beach, stilt fisherman</li>
          <li>Weligama: Weligama beach, Kustarajagala temple</li>
          <li>Matara: Polhena beach, whale and dolphin watching, blowhole, the star fort</li>
          <li>Kataragama: Yala wildlife reserve, Kataragama temple</li>
        </ul>

        {/* Add remaining content sections here... */}
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
          <h4 className="font-semibold text-blue-900">
            If you wish to book any Sri Lanka trip, please do get in touch with Seerendipity Tours by sending an email to admin@seerendipitytours.com or Call us/WhatsApp us at 0094774440977.
          </h4>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="mt-12 pt-8 border-t">
        <Link
          to="/blog"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default SriLankaTravelRoute;