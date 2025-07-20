
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FourDayTour from "./pages/FourDayTour";
import FiveDayTour from "./pages/FiveDayTour";
import TwoDayTour from "./pages/TwoDayTour";
import TenDayTour from "./pages/TenDayTour";
import NewFourDayTour from "./pages/NewFourDayTour";
import Itinerary from "./pages/Itinerary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/2-day-tour" element={<TwoDayTour />} />
            <Route path="/sri-lanka-rare-4-day-tour" element={<FourDayTour />} />
            <Route path="/colombo-sri-lanka-4-day-private-tour-with-18-amazing-places" element={<NewFourDayTour />} />
            <Route path="/5-Day-Sri-Lanka-Cultural-Nature-Tour" element={<FiveDayTour />} />
            <Route path="/Sri-Lanka-Private-10-Day-Round-Tour" element={<TenDayTour />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
