import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import FirstTimeLoader from './components/FirstTimeLoader';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatBringsYouHere from './components/WhatBringsYouHere';
import WhyMagniko from './components/WhyMagniko';
import IngredientStory from './components/IngredientStory';
import ProductExperience from './components/ProductExperience';
import WhyMagnesium from './components/WhyMagnesium';
import TrustSection from './components/TrustSection';
import ShopSection from './components/ShopSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';

export default function App() {
  const [is404, setIs404] = useState(false);

  // Check URL hash for #404 test route
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#404') {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    if (is404) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [is404]);

  if (is404) {
    return (
      <NotFoundPage
        onReturnHome={() => {
          window.location.hash = '#hero';
          setIs404(false);
        }}
      />
    );
  }

  return (
    <div className="bg-[#0029FF] text-white min-h-screen font-sans selection:bg-[#CCFF00] selection:text-black">
      {/* 1. First-Time <1s Logo Loader Overlay */}
      <FirstTimeLoader />

      {/* 2. Header with Desktop macOS Dock Navigation & Mobile Drawer */}
      <Header />

      <main>
        {/* 3. Hero Section (100vh, #0029FF, Cinematic Staggered Reveal) */}
        <Hero />

        {/* 4. What Brings You Here Today? (4 Typography-Only Cards) */}
        <WhatBringsYouHere />

        {/* 5. Why Magniko (#0029FF, Scroll Statement Reveals) */}
        <WhyMagniko />

        {/* 6. Ingredient Story (#FFFFFF, Alternating L/R Layout) */}
        <IngredientStory />

        {/* 7. Product Experience (#0029FF, Full Viewport Magazine Covers) */}
        <ProductExperience />

        {/* 8. Why Magnesium (#FFFFFF, Single-Expanded Interactive Accordion) */}
        <WhyMagnesium />

        {/* 9. Trust Section (#0029FF, Clean 4-Statement Grid) */}
        <TrustSection />

        {/* 10. Shop Section (#FFFFFF, "Choose Your Favourite.", Spacious Clean Cards) */}
        <ShopSection />

        {/* 11. FAQ Section (#0029FF, Answer High Search Intent Queries) */}
        <FAQSection />

        {/* 12. Final CTA (#0029FF, "READY FOR YOUR FIRST BITE?") */}
        <FinalCTA />
      </main>

      {/* 13. Minimal Editorial Footer with Contact Details & Newsletter */}
      <Footer />
    </div>
  );
}
