import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calendar, Users, DollarSign, Filter } from 'lucide-react';
import tourGallery1 from '../assets/tour-gallery-1.avif';
import tourGallery2 from '../assets/tour-gallery-2.avif';
import tourGallery3 from '../assets/tour-gallery-3.avif';
import newTourGallery1 from '../assets/new-tour-gallery-1.avif';
import newTourGallery5 from '../assets/new-tour-gallery-5.avif';
import culturalTriangleWildlifeHero from '../assets/cultural-triangle-wildlife-hero.avif';
import twoDayWildlifeHero from '../assets/2-day-wildlife-hero.avif';
import sriLanka10DayHero from '../assets/sri-lanka-10-day-hero.avif';
import sriLankaAuthentic18Places from '../assets/sri-lanka-authentic-18-places.avif';
import sriLanka8DayHero from '../assets/sri-lanka-8-day-hero.avif';
import sriLanka3DayHero from '../assets/sri-lanka-3-day-hero.avif';
import sriLanka3DayHillCountryHero from '../assets/sri-lanka-3-day-new-hero.avif';
import sriLanka6DayHero from '../assets/sri-lanka-6-day-hero.avif';
import sriLanka7DayHero from '../assets/sri-lanka-7-day-hero.avif';
import sevenDayTourHero from '../assets/seven-day-tour-hero.avif';
import sriLanka11DayHero from '../assets/sri-lanka-11-day-hero.avif';
import sriLanka14DayHero from '../assets/sri-lanka-14-day-hero.avif';
import westCoastMangrovesHero from '../assets/west-coast-mangroves-hero.avif';
import culturalTriangleWilpattuHero from '../assets/cultural-triangle-wilpattu-hero.avif';
import kandyTourHero from '../assets/kandy-tour-hero.avif';
import fiveDayCountrysideHero from '../assets/5-day-countryside-hero.avif';
import tenDayRoundTourHero from '../assets/10-day-round-tour-hero.avif';

const Itinerary = () => {
  const [activityFilter, setActivityFilter] = useState('all');
  const [destinationFilter, setDestinationFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const tourPackages = [
    {
      id: '2day-tour',
      title: '2-Day Green Bless Tour',
      description: 'Experience the natural beauty of Sri Lanka with visits to Sigiriya Rock Fortress and Dambulla Cave Temple.',
      duration: 2,
      price: 'From $180',
      image: tourGallery1,
      path: '/sri-lanka-green-bless-2-day-cultural-tour',
      highlights: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', 'Cultural Triangle'],
      activities: ['Cultural', 'Sightseeing'],
      destinations: ['Sigiriya', 'Dambulla']
    },
    {
      id: '4day-tour',
      title: 'Sri Lanka Rare 4-Day Tour',
      description: 'Discover the cultural heritage and natural wonders of Sri Lanka including ancient cities and wildlife.',
      duration: 4,
      price: 'From $350',
      image: culturalTriangleWildlifeHero,
      path: '/sri-lanka-rare-4-day-tour',
      highlights: ['Ancient Cities', 'Wildlife Safari', 'Cultural Sites'],
      activities: ['Cultural', 'Wildlife', 'Adventure'],
      destinations: ['Polonnaruwa', 'Anuradhapura', 'Minneriya']
    },
    {
      id: 'jungle-adventure-tour',
      title: '4-Day Jungle Adventure in Sri Lanka – Explore Lush Rainforests and Thrilling National Parks',
      description: 'This guided Sri Lanka wildlife tour packs in the best of the island\'s biodiversity—explore 2 national parks, 2 rainforests, a mangrove lagoon, misty hill country, and the scenic south & west coasts—all in one unforgettable journey!',
      duration: 4,
      price: 'From $475',
      image: tourGallery3,
      path: '/4-Day-Jungle-Adventure-Sri-Lanka–Explore-Lush-Rainforests-and-Thrilling-National-Parks',
      highlights: ['Rainforest Exploration', 'Wildlife Safari', 'Whale Watching', 'Cultural Sites'],
      activities: ['Wildlife', 'Adventure', 'Nature'],
      destinations: ['Sinharaja', 'Yala', 'Udawalawe', 'Mirissa', 'Galle']
    },
    {
      id: 'majical-sri-lanka-18-days-tour',
      title: 'Majical Sri Lanka 18 days tour',
      description: 'Embark on an 18-day journey blending culture, adventure, and wildlife in perfect harmony. Discover ancient wonders, conquer legendary peaks, and track majestic leopards in their natural habitat - all while enjoying well-paced moments of relaxation',
      duration: 18,
      price: 'From $1975',
      image: 'https://serendipitypvt.com/wp-content/uploads/2025/05/158.avif',
      path: '/Majical-Sri-Lanka-18-days-tour',
      highlights: ['Ancient Wonders', 'Wildlife Safari', 'Highland Treks', 'Beach Relaxation', 'Cultural Heritage'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Beach'],
      destinations: ['Sigiriya', 'Kandy', 'Ella', 'Yala', 'Mirissa', 'Galle', 'Polonnaruwa', 'Horton Plains']
    },
    {
      id: '4day-new-tour',
      title: 'Sri Lanka 4-Day Private Tour With 18 Amazing Places',
      description: 'An intensive 4-day journey covering 18 spectacular destinations across Sri Lanka.',
      duration: 4,
      price: 'From $400',
      image: sriLankaAuthentic18Places,
      path: '/colombo-sri-lanka-4-day-private-tour-with-18-amazing-places',
      highlights: ['18 Amazing Places', 'Private Tour', 'Comprehensive Experience'],
      activities: ['Cultural', 'Sightseeing', 'Adventure'],
      destinations: ['Colombo', 'Kandy', 'Nuwara Eliya', 'Ella']
    },
    {
      id: 'explore-sri-lanka-6-days',
      title: 'Explore Great Sri Lanka with tourist hot spots in 6 days',
      description: 'Discover Sri Lanka\'s top destinations on this exclusive six-day private tour. Sit back and take in the sights while your personal guide handles all the arrangements, including private transportation for a seamless experience.',
      duration: 6,
      price: 'From $650',
      image: sriLanka6DayHero,
      path: '/Explore-Sri Lanka-with-tourist-hot-spots-6-days',
      highlights: ['Cultural Triangle', 'Hill Country', 'Wildlife Safaris', 'Coastal Beaches'],
      activities: ['Cultural', 'Wildlife', 'Nature', 'Beach'],
      destinations: ['Sigiriya', 'Polonnaruwa', 'Kandy', 'Yala', 'Mirissa', 'Galle']
    },
    {
      id: '8-day-adventure',
      title: 'Sri Lanka 8-Day Tour with Adventure, Wildlife, ancient Temples, hill country and beaches',
      description: 'Embark on an 8-day adventure across Sri Lanka, beginning in Colombo. Tour UNESCO World Heritage Sites, embark on a wildlife safari, visit the cultural city of Kandy, and enjoy leisure time on the beautiful South Coast.',
      duration: 8,
      price: 'From $790',
      image: sriLanka8DayHero,
      path: '/Sri-Lanka-8-Day-Tour-with-Adventure-Wildlife-ancient-Temples-hill-country-beaches',
      highlights: ['UNESCO Sites', 'Wildlife Safari', 'Cultural Heritage', 'Coastal Relaxation'],
      activities: ['Adventure', 'Wildlife', 'Cultural', 'Beach'],
      destinations: ['Colombo', 'Sigiriya', 'Kandy', 'Ella', 'South Coast']
    },
    {
      id: '4day-kandy-tour',
      title: '4-Day Sri Lanka Full Circle Private Tour To Colombo',
      description: 'Why take weeks when you can see it all in just 4 action-packed days? This carefully crafted itinerary delivers Sri Lanka\'s greatest hits - from ancient kingdoms and wildlife safaris to beach bliss and cultural treasures.',
      duration: 4,
      price: 'From $499',
      image: newTourGallery5,
      path: '/kandy-4-day-sri-lanka-full-circle-private-tour-to-colombo',
      highlights: ['Ancient Wonders', 'Hill Country Train', 'Wildlife Safari', 'Coastal Charms'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Beach', 'Sightseeing'],
      destinations: ['Kandy', 'Sigiriya', 'Dambulla', 'Nuwara Eliya', 'Ella', 'Yala', 'Galle', 'Colombo']
    },
    {
      id: '5day-tour',
      title: '5-Day Sri Lanka Cultural & Nature Tour',
      description: 'Perfect blend of cultural exploration and nature discovery across Sri Lanka\'s most iconic destinations.',
      duration: 5,
      price: 'From $500',
      image: tourGallery3,
      path: '/sri-lanka-rare-5-day-tour',
      highlights: ['Cultural Heritage', 'Nature Exploration', 'Scenic Landscapes'],
      activities: ['Cultural', 'Nature', 'Photography'],
      destinations: ['Kandy', 'Sigiriya', 'Nuwara Eliya']
    },
    {
      id: '5day-countryside-tour',
      title: '5-Day Private Country Side Tour with Ella, Udawalawe',
      description: 'Experience the scenic beauty of Sri Lanka\'s countryside from Kandy. Wander through charming hill towns, wildlife reserves, coastal beaches, and heritage sites, and enjoy a memorable train ride across the scenic hill country.',
      duration: 5,
      price: 'From $620',
      image: fiveDayCountrysideHero,
      path: '/5-Day-Private-Country-Side-Tour-Ella-Udawalawe',
      highlights: ['Heritage Sites', 'Wildlife Safari', 'Hill Country Train', 'Coastal Beaches'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature'],
      destinations: ['Kandy', 'Sigiriya', 'Ella', 'Udawalawe', 'Galle', 'Bentota']
    },
    {
      id: '10day-tour',
      title: 'Sri Lanka Private 10-Day Round Tour',
      description: 'The ultimate Sri Lankan experience covering all major attractions, cultural sites, and natural wonders.',
      duration: 10,
      price: 'From $1200',
      image: sriLanka10DayHero,
      path: '/sri-lanka-rare-10-day-tour',
      highlights: ['Complete Island Tour', 'All Major Attractions', 'Cultural Immersion'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Beach'],
      destinations: ['Colombo', 'Kandy', 'Sigiriya', 'Ella', 'Yala', 'Galle', 'Bentota']
    },
    {
      id: '10day-round-tour',
      title: 'Sri Lanka Private 10-Day Round Tour Car, Guide, Hotels, Food',
      description: 'Experience the island\'s breathtaking diversity as you embark on a picturesque train ride through emerald tea plantations in the hill country, spot magnificent leopards and elephants during an exciting jeep safari in Yala National Park, then unwind on palm-fringed golden beaches where turquoise waters meet powdery soft sand.',
      duration: 10,
      price: 'From $790',
      image: tenDayRoundTourHero,
      path: '/Sri-Lanka-Private-10-Day-Round-Tour-Car-Guide-Hotels-Food',
      highlights: ['Cultural Triangle', 'Train Journey', 'Wildlife Safari', 'Beach Relaxation'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Beach'],
      destinations: ['Colombo', 'Sigiriya', 'Kandy', 'Ella', 'Yala', 'Galle', 'Bentota']
    },
    {
      id: '8day-tour',
      title: 'Sri Lanka Private 8-day Tour; Transport, Guide, Hotels, Food',
      description: 'Explore ancient wonders of Sri Lanka\'s Cultural Triangle with your personal guide. Marvel at misty mountain vistas, untouched golden beaches, and cascading waterfalls.',
      duration: 8,
      price: 'From $750',
      image: sriLanka8DayHero,
      path: '/sri-lanka-private-8-day-tour-transport-guide-hotels-food',
      highlights: ['Cultural Triangle', 'Sigiriya Rock Fortress', 'Yala Safari', 'Hill Country Train'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature'],
      destinations: ['Anuradhapura', 'Sigiriya', 'Kandy', 'Ella', 'Yala']
    },
    {
      id: '8day-private-tour',
      title: 'Sri Lanka 8-Day Private Tour-:25 Amazing Places+Activities',
      description: 'Explore the highlights of Sri Lanka on an 8-day journey with included stays. Experience 25 incredible destinations, featuring historic sites, wildlife reserves, picturesque highlands, untouched beaches, and charming rural towns.',
      duration: 8,
      price: 'From $759',
      image: sriLanka8DayHero,
      path: '/Sri-Lanka-8-Day-Private-Tour-25-Amazing-Places-Activities',
      highlights: ['Cultural Triangle', 'Sigiriya Rock Fortress', 'Yala Safari', 'Hill Country Train', '25 Destinations'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Beach'],
      destinations: ['Anuradhapura', 'Sigiriya', 'Kandy', 'Ella', 'Yala', 'Galle', 'Mirissa']
    },
    {
      id: '2day-cultural-triangle',
      title: 'Private 2-Day Cultural Triangle + Wildlife Tour of Sri Lanka',
      description: 'Awaken Your Spirit: 2-Day Sacred Journey Through Sri Lanka\'s Cultural Heart with UNESCO World Heritage sites.',
      duration: 2,
      price: 'From $299',
      image: culturalTriangleWildlifeHero,
      highlights: ['UNESCO World Heritage Sites', 'Cultural Triangle', 'Wildlife Safari', 'Buddhist Temples'],
      activities: ['Cultural', 'Wildlife', 'Spiritual', 'Heritage'],
      destinations: ['Sigiriya', 'Dambulla', 'Polonnaruwa', 'Kandy', 'Minneriya'],
      path: '/Private-2-Day-Cultural-Triangle-Wildlife-Tour-of-Sri Lanka'
    },
    {
      id: '3day-cultural-triangle',
      title: 'All-Inclusive Cultural Triangle Private Tour: Sri Lanka 3-day Tour',
      description: 'Embark on an unforgettable journey through Sri Lanka\'s legendary Cultural Triangle, packed into three exhilarating days of discovery!',
      duration: 3,
      price: 'From $399',
      image: sriLanka3DayHero,
      path: '/sri-lanka-cultural-triangle-mini-tour',
      highlights: ['UNESCO Treasures', 'Sigiriya Rock Fortress', 'Sacred Kandy', 'Dambulla Cave Temple'],
      activities: ['Cultural', 'Heritage', 'Sightseeing'],
      destinations: ['Anuradhapura', 'Sigiriya', 'Polonnaruwa', 'Kandy', 'Dambulla']
    },
    {
      id: '3day-hill-country-tour',
      title: 'Sri Lanka Private 3-Day Hill Country Tour with Train Ride',
      description: 'Discover Sri Lanka\'s picturesque hill region and the charming town of Ella on a three-day excursion from Colombo. Highlights include a stop at the Pinnawala Elephant Orphanage, a visit to the revered Temple of the Sacred Tooth Relic, and a breathtaking train journey through stunning landscapes.',
      duration: 3,
      price: 'From $390',
      image: sriLanka3DayHillCountryHero,
      path: '/Sri-Lanka-Private-3-Day-Hill-Country-Tour-with-Train-Ride',
      highlights: ['Pinnawala Elephant Orphanage', 'Temple of the Sacred Tooth Relic', 'Nine Arch Bridge', 'Scenic Train Ride', 'Hill Country Tea Plantations'],
      activities: ['Cultural', 'Nature', 'Sightseeing', 'Adventure'],
      destinations: ['Kandy', 'Nuwara Eliya', 'Ella', 'Pinnawala']
    },
    {
      id: '6day-tour',
      title: 'All-Inclusive Sri Lanka 6-day Private Tour',
      description: 'Experience the best of Sri Lanka in just 6 days with this perfectly balanced itinerary combining thrilling wildlife encounters, ancient cultural treasures, and tropical beach relaxation.',
      duration: 6,
      price: 'From $599',
      image: culturalTriangleWildlifeHero,
      path: '/6-day-sri-lanka-tour',
      highlights: ['Yala National Park Safari', 'Cultural Triangle Exploration', 'West Coast Beach Escape', 'Tea Country & Botanic Gardens'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Beach'],
      destinations: ['Anuradhapura', 'Sigiriya', 'Kandy', 'Ella', 'Yala', 'Galle', 'Bentota']
    },
    {
      id: '7day-tour',
      title: '7-day Sri Lanka tour: Beaten path Sri Lanka',
      description: 'From the Cultural Triangle\'s archaeological marvels to Yala\'s wildlife wonders, this tour showcases Sri Lanka\'s diversity.',
      duration: 7,
      price: 'From $749',
      image: sriLanka7DayHero,
      path: '/beaten-path-sri-lanka-7-day-tour',
      highlights: ['5 UNESCO World Heritage Sites', 'Wildlife safaris in Yala National Park', 'Scenic train through tea country', 'Ancient cities & cultural experiences', 'Beach relaxation on southern coast'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Beach'],
      destinations: ['Anuradhapura', 'Sigiriya', 'Polonnaruwa', 'Kandy', 'Ella', 'Yala', 'Bentota', 'Colombo']
    },
    {
      id: '7day-private-tour',
      title: 'Sri Lanka Private 7-day Tour: Transport, Guide, Hotels, Food',
      description: 'Discover Sri Lanka\'s vibrant cultural heritage, tour its ancient landmarks, unwind on serene beaches, and experience the thrill of a wildlife safari. Enjoy personalized, flexible journeys with the convenience of a private vehicle.',
      duration: 7,
      price: 'From $750',
      image: sevenDayTourHero,
      path: '/Sri-Lanka-Private-7-day-Tour-Transport-Guide-Hotels-Food',
      highlights: ['Ancient Temples & Palaces', 'Sigiriya Rock Fortress', 'Scenic Train to Ella', 'Yala Wildlife Safari', 'Cultural Shows'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Sightseeing'],
      destinations: ['Colombo', 'Sigiriya', 'Dambulla', 'Kandy', 'Ella', 'Yala', 'Bentota']
    },
    {
      id: '11day-tour',
      title: 'Sri Lanka 11-days tour, Insight Into Sri Lanka',
      description: 'Discover Sri Lanka (11-day tour) offers a leisurely journey through the island\'s top attractions, including ancient sites in the Cultural Triangle, scenic hill country, wildlife reserves in the south, beautiful west coast beaches, and much more.',
      duration: 11,
      price: 'From $875',
      image: sriLanka11DayHero,
      path: '/Sri-Lanka-11-days-tour',
      highlights: ['Cultural Triangle', 'Scenic Train Adventure', 'Wildlife Safari in Yala', 'Southern Coast Beaches', 'West Coast Relaxation', 'Nature & Leisure Strolls'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Beach', 'Sightseeing'],
      destinations: ['Negombo', 'Sigiriya', 'Dambulla', 'Polonnaruwa', 'Kandy', 'Ella', 'Yala', 'Unawatuna', 'Galle', 'Colombo']
    },
    {
      id: 'all-in-sri-lanka-7-day-tour',
      title: 'All in Sri Lanka 7-days tour, history, culture, nature',
      description: 'Immerse yourself in Sri Lanka\'s living heritage with ancient ruins, beaches, and wildlife safaris.',
      duration: 7,
      price: 'From $820',
      image: sriLanka7DayHero,
      path: '/All-in-Sri-Lanka-7-days-tour-history-culture-nature',
      highlights: ['Cultural Triangle', 'Wildlife Safaris', 'Beach Paradise', 'Train Journey'],
      activities: ['Cultural', 'Wildlife', 'Beach', 'Adventure'],
      destinations: ['Anuradhapura', 'Sigiriya', 'Kandy', 'Ella', 'Yala', 'Bentota', 'Galle']
    },
    {
      id: 'cocktail-tour',
      title: 'Sri Lanka 6-days tour, Sri Lanka cocktail tour with a mix of history and culture of Sri Lanka',
      description: 'Discover echoes of Sri Lanka\'s sacred history, from the towering rock fortress of Sigiriya to the ancient ruins of Anuradhapura. On this 6-day journey, uncover breathtaking blends of nature and human ingenuity as you explore vibrant cities, lush jungles, and mysterious caves.',
      duration: 6,
      price: 'From $690',
      image: "https://preview--seerendipitytours.lovable.app/assets/cocktail-tour-1-DX3AXVUf.avif",
      path: '/Sri-Lanka-cocktail-tour',
      highlights: ['Ancient Wonders', 'Sigiriya Rock Fortress', 'Cultural Heart of Kandy', 'Spice Gardens & Wildlife'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature'],
      destinations: ['Sigiriya', 'Anuradhapura', 'Polonnaruwa', 'Kandy', 'Colombo']
    },
    {
      id: 'kandy-one-day-tour',
      title: 'Full-Day Kandy Cultural & Nature Tour',
      description: 'This Full-Day Kandy Cultural & Nature Tour from Colombo, Bentota, Kalutara, and other west coast resorts includes visits to the Pinnawala Elephant Orphanage, the sacred Temple of the Tooth in Kandy, the Peradeniya Botanical Gardens, and a tea factory.',
      duration: 1,
      price: 'From $99',
      image: "https://serendipitypvt.com/wp-content/uploads/2025/05/15.avif",
      path: '/Full-Day-andy-ultural-ature-our-from-Colombo',
      highlights: ['Pinnawala Elephant Orphanage', 'Temple of the Tooth', 'Peradeniya Botanical Gardens', 'Tea Factory Visit'],
      activities: ['Cultural', 'Nature', 'Wildlife', 'Photography'],
      destinations: ['Colombo', 'Pinnawala', 'Kandy', 'Peradeniya', 'Matale']
    },
    {
      id: 'full-circle-tour',
      title: '4-Day Sri Lanka Full Circle Private Tour To Colombo',
      description: 'This 4-day tour packs in the highlights of an 8-day Sri Lanka classic tour, covering nearly the same route and key destinations in half the time. You\'ll experience the best of the country\'s must-see sights, just like on the longer itinerary.',
      duration: 4,
      price: 'From $595',
      image: "https://serendipitypvt.com/wp-content/uploads/2025/05/17.avif",
      path: '/4-Day-Sri-Lanka-Full-Circle-Private-Tour-To-Colombo',
      highlights: ['Complete Sri Lanka Experience', 'UNESCO World Heritage Sites', 'Hill Country Train', 'Wildlife Safari', 'Beach Relaxation'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Beach', 'Sightseeing'],
      destinations: ['Colombo', 'Sigiriya', 'Dambulla', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Galle', 'Bentota']
    },
    {
      id: 'west-coast-mangroves-tour',
      title: 'West coast Beach, River Mangroves lagoon, Wildlife boat Tour',
      description: 'Mangrove forests are rapidly disappearing, making this perhaps the final chance to experience these extraordinary ecological treasures. Home to a rich diversity of trees, plants, vines, wildlife, and bird species, they offer a unique natural wonder.',
      duration: 1,
      price: 'From $90',
      image: westCoastMangrovesHero,
      path: '/West-coast-Beach-River-Mangroves-lagoon-Wildlife-boat-Tour',
      highlights: ['Mangrove Safari', 'Sea Turtle Conservation', 'Buddhist Temple Visit', 'Bentota Beach', 'Spice Garden Tour'],
      activities: ['Wildlife', 'Nature', 'Cultural', 'Beach', 'Boat Tour'],
      destinations: ['Bentota', 'Madu River', 'Galle']
    },
    {
      id: 'cultural-triangle-wilpattu-tour',
      title: '4-Day Cultural Triangle Tour with Wilpattu Safari',
      description: 'Embark on an unforgettable journey through Sri Lanka\'s legendary Cultural Triangle and explore the fascinating wildlife at Wilpattu national park. This immersive 4-day experience takes you to three magnificent ancient capitals.',
      duration: 4,
      price: 'From $590',
      image: culturalTriangleWilpattuHero,
      path: '/4-Day-Cultural-Triangle-Tour-with-Wilpattu-Safari',
      highlights: ['Ancient Capitals', 'Wilpattu Safari', 'UNESCO Sites', 'Sacred Temples', 'Wildlife Encounters'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Heritage'],
      destinations: ['Anuradhapura', 'Sigiriya', 'Polonnaruwa', 'Kandy', 'Wilpattu']
    },
    {
      id: 'kandy-sigiriya-ella-tour',
      title: '4-Day Kandy, Sigiriya, Ella and Nuwara Eliya Tour',
      description: 'Unforgettable 4-day exploration of Sri Lanka\'s diverse landscapes and wildlife. This expertly guided tour takes you from the historic streets to the heart of the island\'s most breathtaking natural attractions.',
      duration: 4,
      price: 'From $585',
      image: kandyTourHero,
      path: '/4-Day-andy-Sigiriya-Ella-Nuwara-Eliya-Tour',
      highlights: ['Elephant Encounters', 'Botanical Wonders', 'Wildlife Safari', 'Mountain Magic', 'River Excitement'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature'],
      destinations: ['Kandy', 'Sigiriya', 'Ella', 'Nuwara Eliya', 'Minneriya', 'Kitulgala']
    },
    {
      id: 'bentota-galle-tour',
      title: '1 Day Tour Bentota, Galle, Mangrove Lagoon and Sea Turtles',
      description: 'On a day excursion from Colombo, explore the Cinnamon Island, boat in a mangrove lagoon and observe birds, monkeys, and crocodiles up close, and enjoy the picturesque beaches of Mirissa and Galle on the south coast.',
      duration: 1,
      price: 'From $90',
      image: "https://serendipitypvt.com/wp-content/uploads/2025/07/8.avif",
      path: '/1-Day-Tour-Bentota-Galle-Mangrove-Lagoon-Sea-Turtles',
      highlights: ['Swimming in Hikkadwa Beach', 'Kosgoda Turtle Hatchery', 'Bentota lagoon exploration', 'Historic Galle Fort'],
      activities: ['Cultural', 'Nature', 'Wildlife', 'Beach'],
      destinations: ['Bentota', 'Galle', 'Hikkadwa', 'Kosgoda']
    },
    {
      id: '14day-grand-tour',
      title: 'Sri Lanka grand tour 14 days',
      description: 'Enjoy a 14-day guided tour visiting highlights such as Sigiriya, Dambulla, Polonnaruwa, and Kandy. Discover ancient cave temples, historic royal palaces, scenic tea trails, lush botanical gardens, stunning waterfalls, and unwind at Bentota Beach.',
      duration: 14,
      price: 'From $1190',
      image: sriLanka14DayHero,
      path: '/Sri-Lanka-grand-tour-14-days',
      highlights: ['Cultural Triangle', 'Wildlife Safaris', 'Hill Country Train', 'Beach Relaxation', 'Ancient Temples'],
      activities: ['Cultural', 'Wildlife', 'Adventure', 'Nature', 'Beach'],
      destinations: ['Sigiriya', 'Dambulla', 'Polonnaruwa', 'Kandy', 'Ella', 'Yala', 'Bentota', 'Galle']
    },
    {
      id: 'yala-safari-tour',
      title: '3-Day southern Sri Lanka Yala Safari, Galle Fort, Whale Watching Tour',
      description: 'On this guided tour, spend three days lounging on the south coast beach of Sri Lanka. See whales swimming in the water, have a guided walking tour of Galle Fort, and go on a full-day Yala safari.',
      duration: 3,
      price: 'From $390',
      image: "https://serendipitypvt.com/wp-content/uploads/2025/07/5.avif",
      path: '/3-day-southern-sri-lanka-yala-safari-galle-fort-whale-watching-tour',
      highlights: ['Wild buffaloes, bears, elephants, crocs, and leopards', 'Mirissa beach relaxation', 'Ancient temple boat safari', 'Herbal message and Sri Lankan Ayurveda', 'Galle Fort exploration'],
      activities: ['Wildlife', 'Beach', 'Cultural', 'Adventure'],
      destinations: ['Mirissa', 'Yala', 'Galle', 'Bentota', 'Colombo']
    },
    {
      id: '2-day-wildlife-tour',
      title: '2-Day wildlife tour; rainforest and National park',
      description: 'Embark on an unforgettable wildlife adventure with an off-road jeep safari through Udawalawe National Park. Explore Sri Lanka\'s rich biodiversity during a guided rainforest walk with our expert naturalist.',
      duration: 2,
      price: 'From $350',
      image: twoDayWildlifeHero,
      path: '/2-Day-wildlife-tour-rainforest-National-park',
      highlights: ['Sinharaja Rainforest Trek', 'Udawalawe Safari', 'Blue Train Journey', 'Tea Country Exploration'],
      activities: ['Wildlife', 'Nature', 'Adventure', 'Scenic'],
      destinations: ['Sinharaja', 'Udawalawe', 'Ella', 'Nuwara Eliya']
    }
  ];

  const filteredTourPackages = useMemo(() => {
    return tourPackages.filter(tour => {
      const matchesActivity = activityFilter === 'all' || tour.activities.some(activity => 
        activity.toLowerCase().includes(activityFilter.toLowerCase())
      );
      const matchesDestination = destinationFilter === 'all' || tour.destinations.some(dest => 
        dest.toLowerCase().includes(destinationFilter.toLowerCase())
      );
      const matchesDuration = durationFilter === 'all' || 
        (durationFilter === '1-3' && tour.duration <= 3) ||
        (durationFilter === '4-6' && tour.duration >= 4 && tour.duration <= 6) ||
        (durationFilter === '7+' && tour.duration >= 7);
      
      return matchesActivity && matchesDestination && matchesDuration;
    }).sort((a, b) => a.duration - b.duration);
  }, [activityFilter, destinationFilter, durationFilter]);

  const paginatedTourPackages = useMemo(() => {
    const endIndex = currentPage * itemsPerPage;
    return filteredTourPackages.slice(0, endIndex);
  }, [filteredTourPackages, currentPage]);

  const hasMore = paginatedTourPackages.length < filteredTourPackages.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sri Lanka Tour Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the beauty of Sri Lanka with our carefully crafted tour packages. 
            From quick getaways to comprehensive island tours, find the perfect journey for you.
          </p>
        </div>

        {/* Filter Form */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter Tour Packages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="activity">Activity Type</Label>
                <Select value={activityFilter} onValueChange={setActivityFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Activities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Activities</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="wildlife">Wildlife</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="nature">Nature</SelectItem>
                    <SelectItem value="beach">Beach</SelectItem>
                    <SelectItem value="sightseeing">Sightseeing</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Select value={destinationFilter} onValueChange={setDestinationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Destinations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Destinations</SelectItem>
                    <SelectItem value="colombo">Colombo</SelectItem>
                    <SelectItem value="kandy">Kandy</SelectItem>
                    <SelectItem value="sigiriya">Sigiriya</SelectItem>
                    <SelectItem value="ella">Ella</SelectItem>
                    <SelectItem value="nuwara eliya">Nuwara Eliya</SelectItem>
                    <SelectItem value="galle">Galle</SelectItem>
                    <SelectItem value="dambulla">Dambulla</SelectItem>
                    <SelectItem value="yala">Yala</SelectItem>
                    <SelectItem value="polonnaruwa">Polonnaruwa</SelectItem>
                    <SelectItem value="anuradhapura">Anuradhapura</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Select value={durationFilter} onValueChange={setDurationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Durations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Durations</SelectItem>
                    <SelectItem value="1-3">1-3 Days</SelectItem>
                    <SelectItem value="4-6">4-6 Days</SelectItem>
                    <SelectItem value="7+">7+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:gap-6">
          {paginatedTourPackages.length > 0 ? (
            paginatedTourPackages.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-blue-600 border-blue-200">
                          <Calendar className="w-3 h-3 mr-1" />
                          {tour.duration} {tour.duration === 1 ? 'Day' : 'Days'}
                        </Badge>
                        <div className="flex items-center text-green-600 font-semibold">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {tour.price}
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {tour.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-base">
                        {tour.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Tour Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tour.highlights.map((highlight, index) => (
                            <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          <span>Private Group Tour</span>
                        </div>
                        <Link to={tour.path}>
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            View Details & Book
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card className="bg-white/90 backdrop-blur-sm p-8 text-center">
              <CardContent>
                <p className="text-gray-600 text-lg">
                  No tour packages match your current filters. Try adjusting your search criteria.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {hasMore && (
          <div className="text-center mt-8">
            <Button 
              onClick={() => setCurrentPage(currentPage + 1)}
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Show More Tours ({filteredTourPackages.length - paginatedTourPackages.length} remaining)
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom tour package? Contact us for personalized itineraries.
          </p>
          <Link to="/?section=contact">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;