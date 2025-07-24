
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
import TwoDayTour from "./pages/TwoDayTour";
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
import NotFound from "./pages/NotFound";

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
              <Route path="sri-lanka-rare-6-day-tour" element={<SixDayTour />} />
              <Route path="sri-lanka-rare-7-day-tour" element={<SevenDayTour />} />
              <Route path="sri-lanka-rare-8-day-tour" element={<EightDayTour />} />
              <Route path="sri-lanka-rare-11-day-tour" element={<ElevenDayTour />} />
              <Route path="sri-lanka-rare-10-day-tour" element={<TenDayTour />} />
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
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
