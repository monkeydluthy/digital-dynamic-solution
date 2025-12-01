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

// Example Pages
import CarouselExample from './pages/ExamplePages/CarouselExample';
import DropdownExample from './pages/ExamplePages/DropdownExample';
import FaqExample from './pages/ExamplePages/FaqExample';

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

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Example Routes */}
          <Route path="/examples/carousel" element={<CarouselExample />} />
          <Route path="/examples/dropdown" element={<DropdownExample />} />
          <Route path="/examples/faq" element={<FaqExample />} />

          {/* Service Routes */}
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/internet-marketing" element={<InternetMarketing />} />
          <Route path="/consulting" element={<Consulting />} />
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
