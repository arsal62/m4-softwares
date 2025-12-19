import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
