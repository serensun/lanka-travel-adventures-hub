
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FourDayTour from "./pages/FourDayTour";
import FiveDayTour from "./pages/FiveDayTour";
import TwoDayTour from "./pages/TwoDayTour";
import TenDayTour from "./pages/TenDayTour";
import NewFourDayTour from "./pages/NewFourDayTour";
import KandyFourDayTour from "./pages/KandyFourDayTour";
import TwoDayCulturalTour from "./pages/TwoDayCulturalTour";
import EightDayTour from "./pages/EightDayTour";
import ThreeDayTour from "./pages/ThreeDayTour";
import SevenDayTour from "./pages/SevenDayTour";
import SixDayTour from "./pages/SixDayTour";
import ElevenDayTour from "./pages/ElevenDayTour";
import Itinerary from "./pages/Itinerary";
import Contact from "./pages/Contact";
import { supportedLanguages } from './i18n/config';

const queryClient = new QueryClient();

// Component to handle language detection and routing
const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (lang && Object.keys(supportedLanguages).includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else if (!lang) {
      // If no language in URL, redirect to current language
      const currentLang = i18n.language;
      if (currentLang !== 'en') {
        window.history.replaceState({}, '', `/${currentLang}${location.pathname}`);
      }
    }
  }, [lang, i18n, location.pathname]);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Default English routes (no language prefix) */}
            <Route path="/" element={<LanguageWrapper><Index /></LanguageWrapper>} />
            <Route path="/itinerary" element={<LanguageWrapper><Itinerary /></LanguageWrapper>} />
            <Route path="/2-day-tour" element={<LanguageWrapper><TwoDayTour /></LanguageWrapper>} />
            <Route path="/sri-lanka-rare-4-day-tour" element={<LanguageWrapper><FourDayTour /></LanguageWrapper>} />
            <Route path="/colombo-sri-lanka-4-day-private-tour-with-18-amazing-places" element={<LanguageWrapper><NewFourDayTour /></LanguageWrapper>} />
            <Route path="/kandy-4-day-sri-lanka-full-circle-private-tour-to-colombo" element={<LanguageWrapper><KandyFourDayTour /></LanguageWrapper>} />
            <Route path="/Private-2-Day-Cultural-Triangle-Wildlife-Tour-of-Sri Lanka" element={<LanguageWrapper><TwoDayCulturalTour /></LanguageWrapper>} />
            <Route path="/5-Day-Sri-Lanka-Cultural-Nature-Tour" element={<LanguageWrapper><FiveDayTour /></LanguageWrapper>} />
            <Route path="/Sri-Lanka-Private-10-Day-Round-Tour" element={<LanguageWrapper><TenDayTour /></LanguageWrapper>} />
            <Route path="/sri-lanka-private-8-day-tour-transport-guide-hotels-food" element={<LanguageWrapper><EightDayTour /></LanguageWrapper>} />
            <Route path="/sri-lanka-cultural-triangle-mini-tour" element={<LanguageWrapper><ThreeDayTour /></LanguageWrapper>} />
            <Route path="/beaten-path-sri-lanka-7-day-tour" element={<LanguageWrapper><SevenDayTour /></LanguageWrapper>} />
            <Route path="/6-day-sri-lanka-tour" element={<LanguageWrapper><SixDayTour /></LanguageWrapper>} />
            <Route path="/Sri-Lanka-11-days-tour" element={<LanguageWrapper><ElevenDayTour /></LanguageWrapper>} />
            <Route path="/contact" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
            
            {/* Language-specific routes */}
            <Route path="/:lang" element={<LanguageWrapper><Index /></LanguageWrapper>} />
            <Route path="/:lang/itinerary" element={<LanguageWrapper><Itinerary /></LanguageWrapper>} />
            <Route path="/:lang/2-day-tour" element={<LanguageWrapper><TwoDayTour /></LanguageWrapper>} />
            <Route path="/:lang/sri-lanka-rare-4-day-tour" element={<LanguageWrapper><FourDayTour /></LanguageWrapper>} />
            <Route path="/:lang/colombo-sri-lanka-4-day-private-tour-with-18-amazing-places" element={<LanguageWrapper><NewFourDayTour /></LanguageWrapper>} />
            <Route path="/:lang/kandy-4-day-sri-lanka-full-circle-private-tour-to-colombo" element={<LanguageWrapper><KandyFourDayTour /></LanguageWrapper>} />
            <Route path="/:lang/Private-2-Day-Cultural-Triangle-Wildlife-Tour-of-Sri Lanka" element={<LanguageWrapper><TwoDayCulturalTour /></LanguageWrapper>} />
            <Route path="/:lang/5-Day-Sri-Lanka-Cultural-Nature-Tour" element={<LanguageWrapper><FiveDayTour /></LanguageWrapper>} />
            <Route path="/:lang/Sri-Lanka-Private-10-Day-Round-Tour" element={<LanguageWrapper><TenDayTour /></LanguageWrapper>} />
            <Route path="/:lang/sri-lanka-private-8-day-tour-transport-guide-hotels-food" element={<LanguageWrapper><EightDayTour /></LanguageWrapper>} />
            <Route path="/:lang/sri-lanka-cultural-triangle-mini-tour" element={<LanguageWrapper><ThreeDayTour /></LanguageWrapper>} />
            <Route path="/:lang/beaten-path-sri-lanka-7-day-tour" element={<LanguageWrapper><SevenDayTour /></LanguageWrapper>} />
            <Route path="/:lang/6-day-sri-lanka-tour" element={<LanguageWrapper><SixDayTour /></LanguageWrapper>} />
            <Route path="/:lang/Sri-Lanka-11-days-tour" element={<LanguageWrapper><ElevenDayTour /></LanguageWrapper>} />
            <Route path="/:lang/contact" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
