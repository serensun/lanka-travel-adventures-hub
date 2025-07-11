
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FourDayTour from "./pages/FourDayTour";
import FiveDayTour from "./pages/FiveDayTour";
import TwoDayTour from "./pages/TwoDayTour";
import TenDayTour from "./pages/TenDayTour";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/2-day-tour" element={<TwoDayTour />} />
          <Route path="/4-day-tour" element={<FourDayTour />} />
          <Route path="/5-day-tour" element={<FiveDayTour />} />
          <Route path="/10-day-tour" element={<TenDayTour />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
