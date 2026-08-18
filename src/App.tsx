import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileLeadBar } from '@/components/layout/MobileLeadBar';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { UserIntent } from '@/components/sections/UserIntent';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { ExploreLocations } from '@/components/sections/ExploreLocations';
import { PropertyTypes } from '@/components/sections/PropertyTypes';
import { WhySigma } from '@/components/sections/WhySigma';
import { BusinessEcosystem } from '@/components/sections/BusinessEcosystem';
import { Founder } from '@/components/sections/Founder';
import { CareerJourney } from '@/components/sections/CareerJourney';
import { SuccessStory } from '@/components/sections/SuccessStory';
import { WorkingMarkets } from '@/components/sections/WorkingMarkets';
import { Insights } from '@/components/sections/Insights';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { PropertiesPage } from '@/pages/PropertiesPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';
import { LocationsHubPage } from '@/pages/LocationsHubPage';
import { LocationDetailPage } from '@/pages/LocationDetailPage';
import { AboutPage } from '@/pages/AboutPage';
import { FounderPage } from '@/pages/FounderPage';
import { LeadershipHubPage } from '@/pages/LeadershipHubPage';
import { LeaderProfilePage } from '@/pages/LeaderProfilePage';
import { CareersPage } from '@/pages/CareersPage';
import { SuccessStoriesPage } from '@/pages/SuccessStoriesPage';
import { SuccessStoryDetailPage } from '@/pages/SuccessStoryDetailPage';
import { ServicesHubPage } from '@/pages/ServicesHubPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { InvestmentHubPage } from '@/pages/InvestmentHubPage';
import { NriServicesPage } from '@/pages/NriServicesPage';
import { SellPropertyPage } from '@/pages/SellPropertyPage';
import { ContactPage } from '@/pages/ContactPage';
import { ConsultationPage } from '@/pages/ConsultationPage';
import { BookSiteVisitPage } from '@/pages/BookSiteVisitPage';
import { RequestPricePage } from '@/pages/RequestPricePage';
import { RequestCallbackPage } from '@/pages/RequestCallbackPage';
import { CompareProjectsPage } from '@/pages/CompareProjectsPage';
import { ThankYouPage } from '@/pages/ThankYouPage';
import { AdminPage } from '@/pages/AdminPage';
import { FloatingLeadLauncher } from '@/components/conversion/FloatingLeadLauncher';
import { UtmTracker } from '@/components/conversion/UtmTracker';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <UserIntent />
      <FeaturedProjects />
      <ExploreLocations />
      <PropertyTypes />
      <WhySigma />
      <BusinessEcosystem />
      <Founder />
      <CareerJourney />
      <SuccessStory />
      <WorkingMarkets />
      <Insights />
      <FinalCTA />
    </main>
  );
}

function AppLayout() {
  const { pathname } = useLocation();
  const isAdmin = pathname === '/admin';

  return (
    <>
      <UtmTracker />
      <ScrollToTop />
      {!isAdmin && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/projects" element={<PropertiesPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/locations" element={<LocationsHubPage />} />
        <Route path="/locations/:slug" element={<LocationDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/leadership" element={<LeadershipHubPage />} />
        <Route path="/leadership/:slug" element={<LeaderProfilePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/success-stories/:slug" element={<SuccessStoryDetailPage />} />
        <Route path="/services" element={<ServicesHubPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/investment" element={<InvestmentHubPage />} />
        <Route path="/nri-services" element={<NriServicesPage />} />
        <Route path="/sell-property" element={<SellPropertyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/book-site-visit" element={<BookSiteVisitPage />} />
        <Route path="/request-price" element={<RequestPricePage />} />
        <Route path="/request-callback" element={<RequestCallbackPage />} />
        <Route path="/compare" element={<CompareProjectsPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      {!isAdmin && <Footer />}
      {!isAdmin && <MobileLeadBar />}
      {!isAdmin && <FloatingLeadLauncher />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
