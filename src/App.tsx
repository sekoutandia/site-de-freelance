
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServiceDetail from "./pages/ServiceDetail";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import Services from "./pages/dashboard/Services";
import Orders from "./pages/dashboard/Orders";
import Messages from "./pages/dashboard/Messages";
import Settings from "./pages/dashboard/Settings";

// Import all new category pages
import PourVous from "./pages/dashboard/PourVous";
import MeilleursServices from "./pages/dashboard/MeilleursServices";
import DesignGraphisme from "./pages/dashboard/DesignGraphisme";
import SEOCommunication from "./pages/dashboard/SEOCommunication";
import Audiovisuel from "./pages/dashboard/Audiovisuel";
import SiteDeveloppement from "./pages/dashboard/SiteDeveloppement";
import Redaction from "./pages/dashboard/Redaction";
import ReseauxSociaux from "./pages/dashboard/ReseauxSociaux";
import Business from "./pages/dashboard/Business";
import FormationsCoaching from "./pages/dashboard/FormationsCoaching";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Route du tableau de bord avec ses sous-routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="overview" element={<Overview />} />
            <Route path="services" element={<Services />} />
            <Route path="orders" element={<Orders />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
            
            {/* Nouvelles routes pour les catégories */}
            <Route path="pour-vous" element={<PourVous />} />
            <Route path="meilleurs-services" element={<MeilleursServices />} />
            <Route path="design-graphisme" element={<DesignGraphisme />} />
            <Route path="seo-communication" element={<SEOCommunication />} />
            <Route path="audiovisuel" element={<Audiovisuel />} />
            <Route path="site-developpement" element={<SiteDeveloppement />} />
            <Route path="redaction" element={<Redaction />} />
            <Route path="reseaux-sociaux" element={<ReseauxSociaux />} />
            <Route path="business" element={<Business />} />
            <Route path="formations-coaching" element={<FormationsCoaching />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
