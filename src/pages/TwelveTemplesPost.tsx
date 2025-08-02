import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import EnhancedGallery from '@/components/ui/enhanced-gallery';

import templesHeroImage from '../assets/temples-sri-lanka-hero.avif';
import temples1 from '../assets/temples-sri-lanka-1.avif';
import temples2 from '../assets/temples-sri-lanka-2.avif';
import temples3 from '../assets/temples-sri-lanka-3.avif';
import temples4 from '../assets/temples-sri-lanka-4.avif';

const TwelveTemplesPost = () => {
  const tableOfContents = [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "popular-temples", title: "12 Popular Temples in Sri Lanka", level: 1 },
    { id: "gangaramaya", title: "1. The Gangaramaya Temple in Colombo", level: 2 },
    { id: "tooth-relic", title: "2. Temple of the Sacred Tooth Relic", level: 2 },
    { id: "naguleswaram", title: "3. Kankesanturai's Naguleswaram Temple", level: 2 },
    { id: "konesar", title: "4. Thirukonamalai Konesar Temple in Trincomalee", level: 2 },
    { id: "shankari-devi", title: "5. The Shaktipeeth Shri Shankari Devi Temple in Trincomalee", level: 2 },
    { id: "kataragama", title: "6. Kataragama Temple, Kataragama", level: 2 },
    { id: "kelaniya", title: "7. The Kelaniya Raja Maha Vihara Temple in Peliyagoda", level: 2 },
    { id: "dambulla", title: "8. Cave Temple: Dambulla", level: 2 },
    { id: "muthiyangana", title: "9. Muthiyangana Temple in Badulla", level: 2 },
    { id: "maviddapuram", title: "10. Maviddapuram Kandaswamy Temple", level: 2 },
    { id: "ponnambalam", title: "11. Sri Ponnambalam Vanesar Kovil", level: 2 },
    { id: "munneswaram", title: "12. Munneswaram Temple in Chilaw", level: 2 },
    { id: "faq", title: "Frequently Asked Questions about Temples in Sri Lanka", level: 1 },
  ];

  const galleryImages = [
    { src: temples1, alt: "Temple in Sri Lanka" },
    { src: temples2, alt: "Ancient Sri Lankan temple architecture" },
    { src: templesHeroImage, alt: "Beautiful temple in Sri Lanka" },
    { src: temples3, alt: "Traditional Sri Lankan temple" },
    { src: temples4, alt: "Sacred temple in Sri Lanka" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back to Blog Link */}
        <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary">Travel Guide</Badge>
              <Badge variant="outline">Temples</Badge>
              <Badge variant="outline">Sri Lanka</Badge>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              12 Temples in Sri Lanka: Amazing Locations You Must See While Travelling
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                January 2, 2025
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                15 min read
              </div>
              <div className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                Sri Lanka
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                12 temples in sri lanka-amazing locations you must see while travelling are The Gangaramaya Temple in Colombo, The Temple of the Sacred Tooth Relic in Kandy, Kankesanturai's Naguleswaram Temple, Thirukonamalai Konesar Temple in Trincomalee, The Shaktipeeth Shri Shankari Devi Temple in Trincomalee, Kataragama Temple Kataragama, The Kelaniya Raja Maha Vihara Temple in Peliyagoda, Cave Temple Dambulla, Muthiyangana Temple in Badulla, The Maviddapuram Kandaswamy Temple in Jaffna, Sri Ponnambalam Vanesar Kovil in Colombo, Munneswaram Temple in Chilaw
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8">
              <img
                src={templesHeroImage}
                alt="12 temples in Sri Lanka"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-primary hover:text-primary/80 ${
                      item.level === 2 ? 'ml-4 text-sm' : 'font-medium'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Gallery */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
              <EnhancedGallery images={galleryImages} />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div id="introduction">
                <p><a href="https://www.urlaub-sr-lanka.info/about-sri-lanka/">Sri Lanka </a>is an island nation shaped like a diamond in the Indian Ocean. As soon as you step foot in this nation, you will fall in love. To truly immerse yourself in the rich tradition, take a spiritual trip to some of the most significant temples in the region, such as the <a href="https://www.urlaub-sr-lanka.info/temple-of-the-tooth-relic-kandy/">tooth relic temple,</a> and many other holy places. It is true that you will surely receive blessings from the Almighty and be able to restore your faith if you visit these temples (<a href="https://blog.seerendipitytours.com/popular-temples-in-colombo/">Popular temples in Colombo</a>). They are scattered all throughout Sri Lanka and are an excellent place to discover spiritual rebirth. Get ready for a peaceful <a href="https://seerendipitytours.com/itinerary/simply-sri-lanka/">Sri Lanka trip</a> to the temples!</p>
              </div>

              <div id="popular-temples">
                <h2>12 Popular Temples in Sri Lanka</h2>
                <p>The list below contains the <a href="https://www.urlaub-sr-lanka.info/sri-lanka-buddhist-tour/">best temples in Sri Lanka</a> that you should not miss when you visit this breathtaking country that is home to many national parks, beaches, and tourist attractions. Here are some temples you might want to check out:</p>
                
                <ul>
                  <li><a href="https://www.urlaub-sr-lanka.info/beautiful-temples-in-colombo-gangarama/">The Gangaramaya Temple in Colombo</a></li>
                  <li><a href="https://www.urlaub-sr-lanka.info/temple-of-the-tooth-relic-kandy/">The Temple of the Sacred Tooth Relic in Kandy</a></li>
                  <li>Kankesanturai's Naguleswaram Temple</li>
                  <li>Thirukonamalai Konesar Temple in Trincomalee</li>
                  <li>The Shaktipeeth Shri Shankari Devi Temple in Trincomalee</li>
                  <li><a href="https://www.urlaub-sr-lanka.info/temple-of-kataragama/">Kataragama Temple, Kataragama</a></li>
                  <li><a href="https://www.urlaub-sr-lanka.info/paintings-of-sri-lanka/">The Kelaniya Raja Maha Vihara Temple in Peliyagoda</a></li>
                  <li><a href="https://www.urlaub-sr-lanka.info/dambulla-cave-temple-temple-in-the-rock/">Cave Temple, Dambulla</a></li>
                  <li>Muthiyangana Temple in Badulla</li>
                  <li>The Maviddapuram Kandaswamy Temple in Jaffna</li>
                  <li>Sri Ponnambalam Vanesar Kovil in Colombo</li>
                  <li>Munneswaram Temple in Chilaw</li>
                </ul>
              </div>

              <div id="gangaramaya">
                <h3>1. The Gangaramaya Temple in Colombo</h3>
                <p>Gangaramaya Temple is among Sri Lanka's most significant ancient temples, and it is one of the most popular <a href="https://www.urlaub-sr-lanka.info/17-best-places-to-see-in-colombo-bentota-package-tour/">tourist places in Colombo</a>. This temple, which lies in the centre of the city, combines traditional and modern architectural features. The enormous Bodhi tree at this temple functions as a kind of attraction. Another unique item in this temple is the old artwork that the Buddhists used.</p>
                <p>Address: 61 Sri Jinarathana Road, Colombo, Sri Lanka, 00200.</p>
                <p>How to Get There: You can take a taxi from the <a href="https://www.urlaub-sr-lanka.info/what-are-the-things-to-see-and-do-on-an-8-hour-layover-in-colombo-sri-lanka-mattala/">Colombo Airport;</a> the trip should take around forty minutes.</p>
              </div>

              <div id="tooth-relic">
                <h3>2. Temple of the Sacred Tooth Relic</h3>
                <p>When <a href="https://www.urlaub-sr-lanka.info/is-it-worth-visiting-sri-lanka/">visiting Sri Lanka,</a> the Temple of the Sacred Tooth Relic in <a href="https://www.urlaub-sr-lanka.info/mini-guide-to-the-trip-of-kandy/">Kandy </a>Sri Dalada Maligawa is the best <a href="https://www.urlaub-sr-lanka.info/places-to-visit-kandy/">place to go in Kandy</a> if you want to have a profound spiritual experience. This shrine of the sacred tooth is home to the most cherished relic in Sri Lanka. The tooth of the Buddha is kept there in a golden room, and it is situated on the grounds of the royal palace complex. The temple, which is beautiful in and of itself and offers fascinating ceremonies to see, is one of the most fascinating <a href="https://www.urlaub-sr-lanka.info/family-trip-places-in-sri-lanka/">tourist places in Sri Lanka.</a></p>
                <p>Location: Sri Dalada Veediya, Kandy, 20000, Sri Lanka</p>
                <p>How to Get There: Bandaranaike Airport is the closest airport, and flying is the most convenient option. From there, tourists can go to Kandy by bus or train.</p>
                <p>The World Buddhist Museum and Kandy Garrison Cemetery are two other noteworthy attractions.</p>
              </div>

              <div id="naguleswaram">
                <h3>3. Kankesanturai's Naguleswaram Temple</h3>
                <p>One of Sri Lanka's best-known temples devoted to the worship of the Hindu god Shiva is located here. This temple also provides a special soul-cleansing ceremony. It is located in front of the Keerimalai Sacred Water Spring. You should take a bath in the holy pond to get ready for the event.</p>
                <p>Location: Keerimalai, Jaffna 40000, Sri Lanka</p>
                <p>How to Get There: Take the morning train from Jaffna station to the temple, and then utilise a local mode of conveyance.</p>
                <p>Casuarina Beach, Nagadeepa Rajamaha Viharaya, Neduntheevu, and Nalur Kovil are further noteworthy attractions.</p>
              </div>

              <div id="konesar">
                <h3>4. Thirukonamalai Konesar Temple in Trincomalee</h3>
                <p>It is one of the most ancient and well-known temples in Sri Lanka. Surrounded by the magnificent Swami Rock and Gokarna Bay, this classical-medieval edifice is one of the most popular <a href="https://www.urlaub-sr-lanka.info/trincomalee-sri-lanka-holiday-guide-and-holiday-info/">tourist spots in Trincomalee.</a> The temple is an important Hindu pilgrimage site and one of Lord Shiva's five abodes.</p>
                <p>Location: Trincomalee, Sri Lanka</p>
                <p>How to Get There: From Fort Frederick, walk along the walkway that has shops all around it to the temple. Another option is to get a bus from the Central Bus Station.</p>
                <p>Two more important sites are the Sri Pathrakali Amman Temple and the Trincomalee War Cemetery.</p>
              </div>

              <div id="shankari-devi">
                <h3>5. The Shaktipeeth Shri Shankari Devi Temple in Trincomalee</h3>
                <p>It is said that Ravana built the ancient Shankari Devi <a href="https://www.urlaub-sr-lanka.info/sri-lanka-anuradhapura-temple/">Temple in Sri Lanka</a>. Adi Shankara's Ashta Dasha Shakti Peethas mentions it. Beside this temple is the Koneswaram Temple, a sacred site for Hindu pilgrims. The peaceful Indian Ocean is also breathtakingly visible from the temple.</p>
                <p>Location: Trincomalee, Sri Lanka</p>
                <p>How to Get There: All forms of transportation can take you to this area.</p>
                <p>Among the other notable sights are the Ravana Abyss, Trincomalee War Cemetery, Kanniya Hot Springs, and Orr's Hill Army Museum.</p>
              </div>

              <div id="kataragama">
                <h3>6. Kataragama Temple, Kataragama</h3>
                <p>One of the <a href="https://www.urlaub-sr-lanka.info/historical-places-sri-lanka/">oldest temples in Sri Lanka,</a> it was built for Hindu devotees and is the home of Lord Karthikeya Subramaniam. A unique chapter in the history of this temple was revealed when Lord Indra invited Lord Karthikeya to the battlefield on the last day of fighting. This was done to protect Lord Rama from the bullet from the Brahma Ashram and the wrath of King Ravana. It is advised to visit <a href="https://www.urlaub-sr-lanka.info/temple-of-kataragama/">Sri Lanka's Kataragama temple </a>during the week during the off-season if you want to pray quietly.</p>
                <p>The address is Ruhunu Maha Kataragama Devalaya, Kataragama 91400, Sri Lanka.</p>
                <p>Additional Major Attractions: Lunugamvehera National Park, Tissa Wewa, and <a href="https://www.urlaub-sr-lanka.info/the-tissamaharama-raja-maha-vihara/">Raja Maha Vihara of Tissamaharama</a></p>
              </div>

              <div id="kelaniya">
                <h3>7. The Kelaniya Raja Maha Vihara Temple in Peliyagoda</h3>
                <p>The well-known Kelaniya temple in Sri Lanka is one of the most significant <a href="https://srilankaholidaypackage.com/nine-temples-in-colombo-for-the-experience-of-peace-and-the-divine/">Buddhist temples in Colombo</a>. This temple is worth visiting because of its amazing murals that depict the life narrative of Lord Buddha on its walls. It is equally a popular tourist destination as it is for devotees. This temple has managed to maintain its own personality while being one of Sri Lanka's most sacred sites. It is believed that Lord Buddha made a visit to this country in the past.</p>
                <p>Sri Lanka's Colombo is the location.</p>
                <p>How to Get There: From every area of the nation's capital, Colombo, it is easily accessible by bus, car, and taxi.</p>
              </div>

              <div id="dambulla">
                <h3>8. Cave Temple: Dambulla</h3>
                <p>Recognised as a UNESCO World Heritage Site, it is also known as the Golden Temple of Dambulla. It is also the largest and best-preserved cave temple in Sri Lanka. This temple is one of the most well-known in Sri Lanka because worshippers can occasionally enjoy the nicest views of the surroundings from the cave. The paintings on the walls are beautiful and quite old. Make sure you visit this incredible underground temple when you're in Sri Lanka.</p>
                <p>Location: Near the Kandy-Jaffna Highway in Habarana, Sri Lanka, 50150.</p>
                <p>How to Get There: Rather than taking the local bus or renting a car, tourists visiting Sri Lanka can opt for the cute and useful tuk-tuks. You may get from Sigiriya to the base of the temple using tuk-tuk services. Moreover, walking from the Dambulla bus stop to the base takes fifteen minutes.</p>
                <p>Other Attractions: the Golden Temple of Dambulla, Popham's Arboretum, and Karu Arts and Crafts</p>
              </div>

              <div id="muthiyangana">
                <h3>9. Muthiyangana Temple in Badulla</h3>
                <p>Muthiyangana Temple, one of Sri Lanka's most beautiful temples, is regarded as one of the 16 Solosmasthana, or holiest locations, in the nation. This temple takes you back to the time of the <a href="https://www.urlaub-sr-lanka.info/badulla-sri-lanka/">Buddha</a> and has a magnificent dragon pandol at the entrance. Schedule a visit to this temple because it is a must-see.</p>
                <p>Location: Station Road, Badulla, Sri Lanka, 90000</p>
                <p>How to Get There: The town of Badulla is located around 20 km from Ella. You can take the train or bus from Ella, and a tuk tuk will cost you some money.</p>
              </div>

              <div id="maviddapuram">
                <h3>10. Maviddapuram Kandaswamy Temple</h3>
                <p>Maviddapuram Kandaswamy Temple in <a href="https://www.urlaub-sr-lanka.info/jaffna-sri-lanka/">Jaffna</a>, one of the most well-known Hindu temples in Sri Lanka, is dedicated to Lord Skanda, widely known as the God of War and the son of Lord Shiva and Goddess Parvathi. According to legend, a Chola princess from Tamil Nadu constructed this temple. The architecture of this temple is magnificent, with its lofty gopuram and ornately decorated columns. You can visit this temple any time of year to seek the blessings of Lord Murugan.</p>
                <p>Location: Jaffna, Sri Lanka</p>
                <p>How to Get There: For roughly 400 kilometres from the capital, there are direct train and bus services from Colombo. Furthermore, the nearest international airport in Colombo is just 16 kilometres away.</p>
              </div>

              <div id="ponnambalam">
                <h3>11. Sri Ponnambalam Vanesar Kovil</h3>
                <p>Sri Ponnambalam Vanesar Kovil, a Hindu temple dedicated to Lord Shiva, is one of Sri Lanka's most well-known structures. It was constructed using granite that came from South India. The Srikalahasti Temple in Andhra Pradesh, India, appears to have had a significant influence on the temple's tall ceiling. It is also one of the oldest Hindu temples in the world. The busiest days of the week are Tuesday and Friday, so try to avoid visiting on those days.</p>
                <p>Location: Kotahena, Colombo, Sri Lanka</p>
                <p>How to Get There: Buses and taxis connect Colombo to other locations of Sri Lanka.</p>
                <p><a href="https://www.urlaub-sr-lanka.info/dutch-reformed-church-colombo/">Wolvendaal Church</a>, St. Lucia's Cathedral, and St. Anthony's Shrine are further points of interest.</p>
              </div>

              <div id="munneswaram">
                <h3>12. Munneswaram Temple in Chilaw</h3>
                <p>There are five temples in the <a href="https://www.urlaub-sr-lanka.info/animal-sacrifice-munneswaram/">Munneswaram Temple </a>Complex: three are devoted to Buddhism, Ayyanayake, and Kali, and one is dedicated to Lord Ganesha. There's a Shiva temple as well. Because of their unique architecture, they remain the most popular of all the Sri Lankan temples. Both Hindus and visitors celebrate Mahashivratri in style here. This temple's beauty is due to the Munneswaram event, a 28-day festival that is accessible to individuals of all religious backgrounds.</p>
                <p>Location: 61000, Wariyapola Road, Chillaw, Sri Lanka</p>
                <p>How to Get There: The most convenient way is to fly into Colombo. It's easy to rent a car from there, or you can opt to use the train system.</p>
                <p>Among the other notable attractions are the Anawilundawa Bird Sanctuary, <a href="https://www.urlaub-sr-lanka.info/negombo-city-tour/">Negombo Beach Park</a>, and <a href="https://www.urlaub-sr-lanka.info/sri-lanka-boat-trips/">Negombo Boat Tours</a>.</p>
              </div>

              <div id="faq">
                <h2>Frequently Asked Questions about Temples in Sri Lanka</h2>
                
                <h3>How long does it usually take to visit the Gangaramaya Temple?</h3>
                <p>It varies according to the person. After visiting the main prayer room, touring the rest area takes less than 45 minutes.</p>

                <h3>What kind of <a href="https://www.urlaub-sr-lanka.info/9-rules-you-break-when-visiting-sri-lanka-buddhist-temple/">clothing is appropriate for visiting temples in Sri Lanka</a>?</h3>
                <p>Wearing modest dress is highly recommended for tourists to Sri Lankan temples. Also steer clear of anything without sleeves.</p>

                <h3>Can a someone with a disability access these temples?</h3>
                <p>It is true that a person with a handicap has access to all facilities, which are fully capable of providing for their needs.</p>

                <h3>Is it safe to travel to Sri Lanka?</h3>
                <p>Sri Lanka is safe overall. That being said, common sense precautions should always be taken when visiting a foreign country.</p>

                <h3>Which types of <a href="https://www.urlaub-sr-lanka.info/what-to-pack-for-sri-lanka-clothing-gears-guide-sri-lanka-holidays/">clothes are appropriate to bring to Sri Lanka</a>?</h3>
                <p>That is totally dependent on when you are travelling. Wearing lightweight cotton clothing is a great option in the summer. Packing warm clothes is advised if you intend to visit the mountains because the temperature drops significantly below 2,000 metres. When <a href="https://www.urlaub-sr-lanka.info/visiting-sri-lanka-in-september/">visiting Sri Lankan</a> temples, it is suggested to bring clothing that may be covered.</p>

                <h3>What is the average annual temperature of Sri Lanka?</h3>
                <p>The average temperature in Sri Lanka is 27 °C. The warmest average maximum temperature occurs between February and May, when it reaches 31 degrees Celsius. The lowest average low temperature of 22 degrees Celsius is recorded in January and February.</p>

                <h3>Is eating allowed inside the temples?</h3>
                <p>No, eating is not allowed on temple property. You are only permitted to bring the dinner offerings.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TwelveTemplesPost;