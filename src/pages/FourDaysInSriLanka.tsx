import React from 'react';
import EnhancedGallery from '@/components/ui/enhanced-gallery';

// Import images
import heroImage from '@/assets/4-days-sri-lanka-hero.avif';
import gallery1 from '@/assets/4-days-sri-lanka-1.avif';
import gallery2 from '@/assets/4-days-sri-lanka-2.avif';
import gallery3 from '@/assets/4-days-sri-lanka-3.avif';

const FourDaysInSriLanka = () => {
  const galleryImages = [
    { src: gallery1, alt: '4 Days in Sri Lanka - Cultural Sites' },
    { src: gallery2, alt: '4 Days in Sri Lanka - Natural Beauty' },
    { src: heroImage, alt: '4 Days in Sri Lanka - Main View' },
    { src: gallery3, alt: '4 Days in Sri Lanka - Adventure' }
  ];

  const tableOfContents = [
    { title: "4 Days in Sri Lanka: Discovering the Indian Ocean's Pearl", href: "#discovering-pearl" },
    { title: "What can you see in 4 Days in Sri Lanka?", href: "#what-can-you-see" },
    { title: "The most well-liked 4-day excursions to Sri Lanka", href: "#popular-excursions" },
    { title: "Sri Lanka 4-day tour: Hill Country and the Cultural Triangle", href: "#hill-country-cultural" },
    { title: "Sri Lanka 4-day tour: Beach and Wildlife", href: "#beach-wildlife" },
    { title: "Sri Lanka 4-day tour: East Coast and Ancient Cities", href: "#east-coast-ancient" },
    { title: "Sri Lanka 4-day tour: The South Coast and Tea Country", href: "#south-coast-tea" },
    { title: "Practical Tips for Four-Day Tours", href: "#practical-tips" },
    { title: "Packing List for a Four-Day Tour to Sri Lanka", href: "#packing-list" },
    { title: "Optimizing a Four-Day Tour", href: "#optimizing-tour" },
    { title: "Extend you stay", href: "#extend-stay" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-8">
        <img
          src={heroImage}
          alt="4 Days in Sri Lanka"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          4 Days in Sri Lanka
        </h1>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          A four-day tour of Sri Lanka provides an enticing look into the many attractions of this stunning island country. You will undoubtedly leave with priceless memories and a strong want to go back and explore more, regardless of whether you decide to concentrate on visiting historic cultural sites, seeing wildlife, unwinding on the beach, or taking in the breathtaking hill country.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          {tableOfContents.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <EnhancedGallery images={galleryImages} />
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        
        <h2 id="discovering-pearl" className="text-2xl font-semibold mt-8 mb-4">
          4 Days in Sri Lanka: Discovering the Indian Ocean's Pearl
        </h2>
        
        <p className="mb-6">
          The island nation of Sri Lanka, which resembles a teardrop and is located off the southern coast of India, provides an astonishing range of experiences in a rather compact space. There is something for every kind of traveler in Sri Lanka, from foggy tea plantations to wildlife-rich national parks, from ancient ruins to immaculate beaches. Even though the island needs much more time to completely explore, a well-thought-out 4-day trip of Sri Lanka may give you a great overview of the nation's highlights and allow you to see a lot of the country in just 4 days. This article offers a number of 4-day Sri Lanka itinerary choices that highlight various facets of Sri Lanka's breathtaking natural surroundings, vibrant culture, and intriguing past.
        </p>

        <h2 id="what-can-you-see" className="text-2xl font-semibold mt-8 mb-4">
          What can you see in 4 Days in Sri Lanka?
        </h2>
        
        <p className="mb-4">
          A four-day tour of Sri Lanka provides an enticing look into the many attractions of this stunning island country. You will undoubtedly leave with priceless memories and a strong want to go back and explore more, regardless of whether you decide to concentrate on visiting historic cultural sites, seeing wildlife, unwinding on the beach, or taking in the breathtaking hill country.
        </p>

        <p className="mb-4">
          From the natural treasures that make Sri Lanka a biodiversity hotspot to the historical kingdoms that formerly controlled the island, each of the recommended itineraries offers a unique viewpoint on the country. Due to its small size, you may see an amazing range of scenery in just four days, including golden beaches, misty mountains, lush jungles, and parched plains.
        </p>

        <p className="mb-4">
          A well-designed 4-day vacation of Sri Lanka can still offer a rich and fulfilling experience, even though a longer stay would enable a more thorough exploration. Visit UNESCO World Heritage sites to see the richness of the island's culture, explore national parks to see a variety of species, unwind on stunning beaches, and experience the friendly hospitality of the Sri Lankan people.
        </p>

        <p className="mb-4">
          Keep in mind that the trip is just as significant as the destinations when you organize your four-day adventure in Sri Lanka. Spend some time appreciating the little things in life, such as the flavor of fresh king coconut water, the view of vibrantly adorned tuk-tuks speeding through crowded streets, the sound of waves crashing onto golden beaches, and the aroma of spices in a neighborhood market. The real charm of Sri Lanka is created by these sensory encounters, magnificent historical landmarks, and breathtaking natural scenery.
        </p>

        <p className="mb-6">
          Sri Lanka offers the ideal combination of experiences for those looking for a tropical getaway, adventure seekers, wildlife lovers, or just a cultural immersion. You can build lifelong memories and develop a greater appreciation for this Indian Ocean beauty in just four days.
        </p>

        <h2 id="popular-excursions" className="text-2xl font-semibold mt-8 mb-4">
          The most well-liked 4-day excursions to Sri Lanka
        </h2>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Hill Country and the Cultural Triangle</li>
          <li>Sri Lankan Wildlife and Beach Tour</li>
          <li>Tour of the East Coast and Ancient Cities</li>
          <li>South Coast and Tea Country</li>
        </ul>

        <h2 id="hill-country-cultural" className="text-2xl font-semibold mt-8 mb-4">
          Sri Lanka 4-day tour: Hill Country and the Cultural Triangle
        </h2>
        
        <p className="mb-4">
          This itinerary combines the colonial elegance of the central highlands with a taste of Sri Lanka's ancient kingdoms located in the Cultural Triangle.
        </p>

        <p className="mb-4"><strong>Highlights consist of:</strong></p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>The UNESCO-designated Dambulla Cave Temple is home to Buddhist mural paintings and statues that date back to the first century BC.</li>
          <li>Sigiriya Rock fortification: Perched atop a gigantic rock column, this 5th-century fortification provides breathtaking views and murals.</li>
          <li>Polonnaruwa: The magnificent remains of the medieval capital of Sri Lanka are a testament to the preservation of old civilization.</li>
          <li>Large concentrations of Asian elephants can be seen in Minneriya National Park, particularly during the dry season.</li>
          <li>Kandy, the final capital of Sri Lanka's ancient rulers, is the site of the revered Temple of the Tooth Relic.</li>
          <li>Tea plantations encircle Nuwara Eliya, a quaint hill station with a somewhat British vibe.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 1: From Sigiriya to Colombo</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>early departure from the city of Columbo</li>
          <li>En route, stop at the Dambulla Cave Temple.</li>
          <li>Climbing Sigiriya Rock Fortress in the afternoon</li>
          <li>A leisurely evening in Sigiriya</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 2: Minneriya National Park and Polonnaruwa</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Morning tour to Polonnaruwa, an old city</li>
          <li>A safari in the afternoon at Minneriya National Park</li>
          <li>Spend the night at Habarana or Sigiriya</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 3: Kandy</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Drive to Kandy in the morning</li>
          <li>Along the way, stop at tea plantations and spice gardens.</li>
          <li>Kandy city trip in the afternoon, seeing the Temple of the Tooth</li>
          <li>Cultural performance in the evening</li>
          <li>Spend the night in Kandy.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 4: Go back to Colombo and Nuwara Eliya</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Beautiful train ride from Nuwara Eliya to Kandy</li>
          <li>A quick tour of "Little England," Nuwara Eliya.</li>
          <li>Returning to Colombo by night</li>
        </ul>

        <h2 id="beach-wildlife" className="text-2xl font-semibold mt-8 mb-4">
          Sri Lanka 4-day tour: Beach and Wildlife
        </h2>
        
        <p className="mb-4">This tour blends the stunning southern coastline of Sri Lanka with its amazing wildlife experiences. Highlights consist of:</p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Elephant calves left orphaned might receive rehabilitation at the Udawalawe Elephant Transit Home.</li>
          <li>Yala National Park is home to a variety of bird species, elephants, crocodiles, and leopards, making it one of the greatest spots on Earth to see them.</li>
          <li>Mirissa: A charming seaside village well-known for its relaxed atmosphere and possibilities for whale watching.</li>
          <li>Whale Watching: One of the best spots in the world to observe sperm and blue whales is the waters off Mirissa.</li>
          <li>Galle Fort: This 16th-century fort, recognized as a UNESCO World Heritage site, exhibits a distinctive fusion of South Asian and European architectural elements.</li>
          <li>Discover the conservation efforts being made to save endangered sea turtles in sea turtle hatcheries.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 1: Yala National Park from Colombo</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>early departure from the city of Columbo</li>
          <li>On the way, stop at the Udawalawe Elephant Transit Home.</li>
          <li>Yala National Park: An afternoon safari</li>
          <li>Spend the night close to Yala</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 2: Mirissa to Yala</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Safari in the morning at Yala National Park</li>
          <li>Drive to Mirissa in the afternoon</li>
          <li>leisurely evening on the beach</li>
          <li>Spend the night in Mirissa</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 3: Galle and Whale Watching</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Whale viewing tour early in the morning</li>
          <li>Galle Fort tour in the afternoon</li>
          <li>Returning to Mirissa in the evening</li>
          <li>Spend the night in Mirissa</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 4: Return to Colombo by coastal drive</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>a leisurely morning spent on the beach</li>
          <li>En route, stop at a sea turtle hatchery.</li>
          <li>Returning to Colombo by night</li>
        </ul>

        <h2 id="east-coast-ancient" className="text-2xl font-semibold mt-8 mb-4">
          Sri Lanka 4-day tour: East Coast and Ancient Cities
        </h2>
        
        <p className="mb-4">This tour combines the less-traveled but stunning east coast of Sri Lanka with its historic legacy. Highlights consist of:</p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Anuradhapura: With well-preserved ruins stretching back more than two millennia, Anuradhapura was Sri Lanka's first ancient capital.</li>
          <li>Mihintale: Known as the cradle of Buddhism in Sri Lanka, this mountain's pinnacle provides expansive vistas.</li>
          <li>The second ancient capital of Sri Lanka, Polonnaruwa, is known for its magnificent stone carvings and well-preserved city plan.</li>
          <li>Trincomalee: A historical town with stunning beaches and a naturally occurring deep-water harbor.</li>
          <li>Koneswaram Temple: An old Hindu temple with a view of the Indian Ocean built atop a cliff.</li>
          <li>Pigeon Island is a national park with great places to go snorkeling.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 1: Anuradhapura to Colombo</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>early departure from the city of Columbo</li>
          <li>Explore the historic city of Anuradhapura for the entire day.</li>
          <li>Nighttime ascent of Mihintale</li>
          <li>Spend the night at Anuradhapura</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 2: Trincomalee and Polonnaruwa</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Polonnaruwa visit in the morning</li>
          <li>Drive to Trincomalee in the afternoon</li>
          <li>Nighttime on Nilaveli Beach</li>
          <li>Staying the night in Trincomalee</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 3: The Trincomalee</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Visit to Fort Frederick and Koneswaram Temple in the morning</li>
          <li>Snorkeling trip to Pigeon Island in the afternoon</li>
          <li>leisurely evening on the beach</li>
          <li>Staying the night in Trincomalee</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 4: Colombo to Trincomalee</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Morning free</li>
          <li>Drive back to Colombo in the afternoon</li>
          <li>Possible detour to the Pinnawala Elephant Orphanage while traveling</li>
        </ul>

        <h2 id="south-coast-tea" className="text-2xl font-semibold mt-8 mb-4">
          Sri Lanka 4-day tour: The South Coast and Tea Country
        </h2>
        
        <p className="mb-4">This trip combines the historic charm and laid-back beach lifestyle of the south coast with the breathtaking scenery of Sri Lanka's hill highlands.</p>

        <p className="mb-4"><strong>Highlights consist of:</strong></p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Nuwara Eliya: Known as "Little England" due to its temperate temperature and colonial architecture.</li>
          <li>Tea Plantations: Discover how the renowned Ceylon tea is made.</li>
          <li>Horton Plains National Park is home to World's End, a precipitous precipice that plunges approximately 4,000 feet, and a distinctive environment.</li>
          <li>Ella: A mellow hill country village with great hiking opportunities encircled by tea plantations.</li>
          <li>The Nine Arch Bridge is a famous railroad bridge encircled by beautiful vegetation.</li>
          <li>Unawatuna: A lovely seaside town with calm waters and gorgeous dunes.</li>
          <li>Galle Fort: This well-preserved example of colonial architecture is a UNESCO World Heritage site.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 1: Nuwara Eliya to Colombo</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Early morning departure from the city of Columbo</li>
          <li>See Ramboda Falls while traveling.</li>
          <li>Tea plantation and manufacturing visit in the afternoon</li>
          <li>Nuwara Eliya city tour in the evening</li>
          <li>Spend the night at Nuwara Eliya</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 2: Ella and Horton Plains</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Visit to Horton Plains National Park in the early morning</li>
          <li>A beautiful train ride in the afternoon to Ella</li>
          <li>A leisurely evening in Ella</li>
          <li>Ella for the night</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 3: Unawatuna to Ella</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Hike Little Adam's Peak or Nine Arch Bridge in the morning</li>
          <li>Drive to Unawatuna in the afternoon</li>
          <li>leisurely evening on the beach</li>
          <li>Sleeping at Unawatuna</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Day 4: Travel to Galle and back to Colombo</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Visiting Galle Fort in the morning</li>
          <li>leisurely afternoon on the beach</li>
          <li>Returning to Colombo by night</li>
        </ul>

        <h2 id="practical-tips" className="text-2xl font-semibold mt-8 mb-4">
          Practical Tips for Four-Day Tours
        </h2>
        
        <p className="mb-4">
          <strong>Transportation:</strong> Renting a car with a driver is the most economical option for a 4-day journey that visits several locations. This makes it possible to alter the schedule and make pauses along the way. It is advisable to have a local driver who is experienced with the conditions as Sri Lanka's roadways can be narrow and congested.
        </p>

        <p className="mb-4">
          Alternatively, for a blend of convenience and local experience, consider combining private transfers with rail travel, particularly in the hill area.
        </p>

        <p className="mb-4">
          <strong>Accommodations:</strong> There are many different types of lodging available in Sri Lanka to fit every budget. It is preferable to plan in advance for a 4-day tour, especially if it is during the busiest time of year (December to March). There are guesthouses, eco-lodges, boutique hotels, and opulent resorts to choose from.
        </p>

        <p className="mb-4">
          <strong>Climate and Best Time to Visit:</strong> The tropical climate of Sri Lanka features distinct rainy and dry seasons that differ depending on the region:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>The finest months to visit the hill country and southwest coast are December through March.</li>
          <li>From April to September, the east coast is at its most beautiful.</li>
          <li>Nonetheless, the nation is accessible all year round, and even in the rainy season, precipitation typically occurs in intense, brief spurts as opposed to prolonged downpours.</li>
        </ul>

        <h2 id="packing-list" className="text-2xl font-semibold mt-8 mb-4">
          Packing List for a Four-Day Tour to Sri Lanka
        </h2>
        
        <p className="mb-4"><strong>Crucial</strong></p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Breathable and light-weight apparel</li>
          <li>sun protection (sunscreen, hats, and sunglasses)</li>
          <li>Repellent for insects</li>
          <li>cosy walking shoes</li>
          <li>When visiting temples, dress modestly (covering knees and shoulders).</li>
          <li>umbrella or raincoat</li>
          <li>Swimsuits</li>
        </ul>

        <p className="mb-4"><strong>Cultural Courtesies:</strong></p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Before entering a Buddhist temple, take off your shoes and hat.</li>
          <li>Don't pose or touch Buddhist sculptures.</li>
          <li>Before taking a person's picture, get their permission.</li>
          <li>Public expressions of love are not encouraged.</li>
        </ul>

        <p className="mb-4"><strong>Safety and Health:</strong></p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Sip water from a bottle.</li>
          <li>Keep yourself hydrated and apply sunscreen.</li>
          <li>Use caution when consuming street cuisine.</li>
          <li>Use common sense to avoid getting bitten by mosquitoes.</li>
          <li>Observe local recommendations when swimming in the sea because strong currents can exist in some places.</li>
        </ul>

        <p className="mb-6">
          <strong>Visa Requirements:</strong> Prior to traveling to Sri Lanka, the majority of travelers must get an Electronic Travel Authorization (ETA). This can be completed online and is usually completed fast.
        </p>

        <h2 id="optimizing-tour" className="text-2xl font-semibold mt-8 mb-4">
          Optimizing a Four-Day Tour
        </h2>
        
        <p className="mb-4">Even though four days isn't much to tour Sri Lanka, here are some pointers to make the most of your trip:</p>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Set priorities:</strong> Whether it's culture, animals, beaches, or a combination of all three, pick an itinerary that centers around your top interests.</li>
          <li><strong>Start Early:</strong> To avoid crowds and heat, it's advisable to visit several sights early in the morning.</li>
          <li><strong>Be Adaptable:</strong> Leave space on your schedule for unforeseen events or discoveries.</li>
          <li><strong>Talk to the Locals:</strong> People from Sri Lanka are renowned for being hospitable. Spend some time interacting with the locals to learn more about their culture.</li>
          <li><strong>Sample the local cuisine:</strong> Sri Lankan cuisine is flavorful and diverse. Try some of the regional specialties, such as fresh fish, kottu rotti, and hoppers.</li>
          <li><strong>Schedule Activities in Advance:</strong> To guarantee your seat for well-liked activities like safaris or whale viewing, make reservations in advance.</li>
          <li><strong>Make the Most of Your Travel Time:</strong> Make quick stops at interesting locations along the way or ask your driver to share local information with you as you travel between destinations.</li>
        </ul>

        <h2 id="extend-stay" className="text-2xl font-semibold mt-8 mb-4">
          Extend you stay
        </h2>
        
        <p className="mb-4">If you are able to remain longer than four days, think about including:</p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>More time in the Cultural Triangle to thoroughly investigate locations like Sigiriya and Dambulla</li>
          <li>a trip to the holy mountain shrine of Adam's Peak</li>
          <li>Additional days at the beach to unwind</li>
          <li>An extended visit to the high regions for trekking and tea-drinking</li>
          <li>More opportunities to see wildlife in parks like Wilpattu and Udawalawe</li>
        </ul>

      </div>
    </div>
  );
};

export default FourDaysInSriLanka;