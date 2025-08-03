
// Tours App
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Itinerary from "./pages/Itinerary";
import Contact from "./pages/Contact";
import ThreeDayTour from "./pages/ThreeDayTour";
import FourDayTour from "./pages/FourDayTour";
import FiveDayTour from "./pages/FiveDayTour";
import SixDayTour from "./pages/SixDayTour";
import SevenDayTour from "./pages/SevenDayTour";
import EightDayTour from "./pages/EightDayTour";
import ElevenDayTour from "./pages/ElevenDayTour";
import TenDayTour from "./pages/TenDayTour";
import TenDayRoundTour from "./pages/TenDayRoundTour";
import ThreeDayHillCountryTour from "./pages/ThreeDayHillCountryTour";
import TwoDayTour from "./pages/TwoDayTour";
import TwoDayWildlifeTour from "./pages/TwoDayWildlifeTour";
import NewFourDayTour from "./pages/NewFourDayTour";
import KandyFourDayTour from "./pages/KandyFourDayTour";
import TwoDayCulturalTour from "./pages/TwoDayCulturalTour";
import CocktailTour from "./pages/CocktailTour";
import KandyOneDayTour from "./pages/KandyOneDayTour";
import FullCircleTour from "./pages/FullCircleTour";
import WestCoastMangrovesTour from "./pages/WestCoastMangrovesTour";
import CulturalTriangleWilpattuTour from "./pages/CulturalTriangleWilpattuTour";
import KandySigiriyaEllaTour from "./pages/KandySigiriyaEllaTour";
import BentotaGalleTour from "./pages/BentotaGalleTour";
import YalaSafariTour from "./pages/YalaSafariTour";
import JungleAdventureTour from "./pages/JungleAdventureTour";
import SevenDayPrivateTour from "./pages/SevenDayPrivateTour";
import AllInSriLankaSevenDayTour from "./pages/AllInSriLankaSevenDayTour";
import FiveDayCountrysideTour from "./pages/FiveDayCountrysideTour";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import TwelveTemplesPost from "./pages/TwelveTemplesPost";
import SriLankaPrivateToursPost from "./pages/SriLankaPrivateToursPost";
import CulturalHeritageTour from "./pages/CulturalHeritageTour";
import SriLankaTravelRoute from "./pages/SriLankaTravelRoute";
import OneDayTripToGallePost from "./pages/OneDayTripToGallePost";
import CulturalTriangleSingleDayPost from "./pages/CulturalTriangleSingleDayPost";
import EighteenDayTour from "./pages/EighteenDayTour";
import FourteenDayTour from "./pages/FourteenDayTour";
import NotFound from "./pages/NotFound";
import FourDaysInSriLanka from "./pages/FourDaysInSriLanka";
import HiddenHistoricalSites from "./pages/HiddenHistoricalSites";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="itinerary" element={<Itinerary />} />
              <Route path="contact" element={<Contact />} />
              <Route path="sri-lanka-rare-3-day-tour" element={<ThreeDayTour />} />
              <Route path="sri-lanka-rare-4-day-tour" element={<FourDayTour />} />
              <Route path="sri-lanka-rare-5-day-tour" element={<FiveDayTour />} />
              <Route path="Sri-Lanka-5-Day-Private-Country-Side-Tour-Car-Hotels-Food" element={<FiveDayTour />} />
              <Route path="sri-lanka-rare-6-day-tour" element={<SixDayTour />} />
              <Route path="sri-lanka-rare-7-day-tour" element={<SevenDayTour />} />
              <Route path="sri-lanka-rare-8-day-tour" element={<EightDayTour />} />
              <Route path="sri-lanka-rare-11-day-tour" element={<ElevenDayTour />} />
              <Route path="sri-lanka-rare-10-day-tour" element={<TenDayTour />} />
              <Route path="Sri-Lanka-8-Day-Tour-with-Adventure-Wildlife-ancient-Temples-hill-country-beaches" element={<TenDayTour />} />
              <Route path="Sri-Lanka-Private-10-Day-Round-Tour-Car-Guide-Hotels-Food" element={<TenDayRoundTour />} />
              <Route path="Sri-Lanka-Private-3-Day-Hill-Country-Tour-with-Train-Ride" element={<ThreeDayHillCountryTour />} />
              <Route path="sri-lanka-rare-2-day-tour" element={<TwoDayTour />} />
              <Route path="sri-lanka-rare-new-4-day-tour" element={<NewFourDayTour />} />
              <Route path="kandy-4-day-sri-lanka-full-circle-private-tour-to-colombo" element={<KandyFourDayTour />} />
              <Route path="sri-lanka-green-bless-2-day-cultural-tour" element={<TwoDayCulturalTour />} />
              <Route path="Sri-Lanka-cocktail-tour" element={<CocktailTour />} />
              <Route path="Full-Day-andy-ultural-ature-our-from-Colombo" element={<KandyOneDayTour />} />
              <Route path="4-Day-Sri-Lanka-Full-Circle-Private-Tour-To-Colombo" element={<FullCircleTour />} />
              <Route path="West-coast-Beach-River-Mangroves-lagoon-Wildlife-boat-Tour" element={<WestCoastMangrovesTour />} />
              <Route path="4-Day-Cultural-Triangle-Tour-with-Wilpattu-Safari" element={<CulturalTriangleWilpattuTour />} />
              <Route path="4-Day-andy-Sigiriya-Ella-Nuwara-Eliya-Tour" element={<KandySigiriyaEllaTour />} />
              <Route path="1-Day-Tour-Bentota-Galle-Mangrove-Lagoon-Sea-Turtles" element={<BentotaGalleTour />} />
              <Route path="3-day-southern-sri-lanka-yala-safari-galle-fort-whale-watching-tour" element={<YalaSafariTour />} />
              <Route path="Sri-Lanka-Private-7-day-Tour-Transport-Guide-Hotels-Food" element={<SevenDayPrivateTour />} />
              <Route path="All-in-Sri-Lanka-7-days-tour-history-culture-nature" element={<AllInSriLankaSevenDayTour />} />
              <Route path="5-Day-Private-Country-Side-Tour-Ella-Udawalawe" element={<FiveDayCountrysideTour />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="8-places-to-visit-in-anuradhapura" element={<BlogPost />} />
              <Route path="8-places-to-visit-in-anuradhapura/" element={<BlogPost />} />
              <Route path="12-temples-in-sri-lanka-amazing-locations-you-must-see-while-travelling" element={<TwelveTemplesPost />} />
              <Route path="12-temples-in-sri-lanka-amazing-locations-you-must-see-while-travelling/" element={<TwelveTemplesPost />} />
              <Route path="Sri-Lanka-private-tours" element={<SriLankaPrivateToursPost />} />
              <Route path="Sri-Lanka-private-tours/" element={<SriLankaPrivateToursPost />} />
              <Route path="cultural-heritage-tours-in-sri-lanka-explore-the-soul-of-the-island" element={<CulturalHeritageTour />} />
              <Route path="cultural-heritage-tours-in-sri-lanka-explore-the-soul-of-the-island/" element={<CulturalHeritageTour />} />
              <Route path="sri-lanka-travel-route" element={<SriLankaTravelRoute />} />
              <Route path="sri-lanka-travel-route/" element={<SriLankaTravelRoute />} />
              <Route path="One-Day-Trip-to-Galle-from-Colombo" element={<OneDayTripToGallePost />} />
              <Route path="One-Day-Trip-to-Galle-from-Colombo/" element={<OneDayTripToGallePost />} />
              <Route path="Visit-Dambulla-Sigiriya-and-Polonnaruwa-single-day" element={<CulturalTriangleSingleDayPost />} />
              <Route path="Visit-Dambulla-Sigiriya-and-Polonnaruwa-single-day/" element={<CulturalTriangleSingleDayPost />} />
              <Route path="4-Day-Jungle-Adventure-Sri-Lanka–Explore-Lush-Rainforests-and-Thrilling-National-Parks" element={<JungleAdventureTour />} />
              <Route path="Majical-Sri-Lanka-18-days-tour" element={<EighteenDayTour />} />
              <Route path="Sri-Lanka-8-Day-Private-Tour-25-Amazing-Places-Activities" element={<EightDayTour />} />
              <Route path="Explore-Sri Lanka-with-tourist-hot-spots-6-days" element={<SixDayTour />} />
              <Route path="Sri-Lanka-grand-tour-14-days" element={<FourteenDayTour />} />
              <Route path="colombo-sri-lanka-4-day-private-tour-with-18-amazing-places" element={<EighteenDayTour />} />
              <Route path="6-day-sri-lanka-tour" element={<SixDayTour />} />
              <Route path="beaten-path-sri-lanka-7-day-tour" element={<SevenDayTour />} />
              <Route path="sri-lanka-private-8-day-tour-transport-guide-hotels-food" element={<EightDayTour />} />
              <Route path="Sri-Lanka-11-days-tour" element={<ElevenDayTour />} />
              <Route path="2-Day-wildlife-tour-rainforest-National-park" element={<TwoDayWildlifeTour />} />
              <Route path="4-Days-in-Sri-Lanka" element={<FourDaysInSriLanka />} />
              <Route path="Hidden-historical-sites-Sri-Lanka" element={<HiddenHistoricalSites />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
