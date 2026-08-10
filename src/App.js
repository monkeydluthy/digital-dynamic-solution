import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Service Pages
import WebDesign from './pages/WebDesign';
import InternetMarketing from './pages/InternetMarketing';
import Consulting from './pages/Consulting';
import SocialMedia from './pages/SocialMedia';
import SEO from './pages/SEO';
import LogoDesign from './pages/LogoDesign';
import WebsiteMaintenance from './pages/WebsiteMaintenance';
import SocialMediaMaintenance from './pages/SocialMediaMaintenance';
import ContentCreation from './pages/ContentCreation';
import CaseStudy from './pages/CaseStudy';
import Nexus from './pages/Nexus';
import NightSync from './pages/NightSync';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nexus" element={<Nexus />} />
          <Route path="/nightsync" element={<NightSync />} />
          <Route path="/case-studies/:slug" element={<CaseStudy />} />

          {/* Service Routes */}
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/web-design-seo" element={<WebDesign />} />
          <Route path="/internet-marketing" element={<InternetMarketing />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/app-development" element={<Consulting />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/logo-design" element={<LogoDesign />} />
          <Route path="/website-maintenance" element={<WebsiteMaintenance />} />
          <Route path="/sm-maintenance" element={<SocialMediaMaintenance />} />
          <Route path="/content-creation" element={<ContentCreation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
