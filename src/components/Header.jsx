import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const navContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Why Magniko', href: '#why-magniko', id: 'why-magniko' },
    { label: 'Story', href: '#ingredient-story', id: 'ingredient-story' },
    { label: 'Ingredients', href: '#ingredients', id: 'ingredients' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#footer', id: 'footer' }
  ];

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', 'why-magniko', 'ingredient-story', 'ingredients', 'products', 'faq', 'footer'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  // Calculate macOS Dock scale for each item on desktop
  const getDockScale = (index) => {
    if (hoveredIdx === null) return 1;
    const distance = Math.abs(index - hoveredIdx);
    if (distance === 0) return 1.15;
    if (distance === 1) return 1.07;
    return 1;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0029FF] border-b-2 border-white py-3 shadow-lg'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus-visible:outline-none">
            <div className={`bg-[#CCFF00] text-black border-2 border-white flex items-center justify-center font-heading font-extrabold transition-all duration-300 ${
              scrolled ? 'w-8 h-8 text-xl' : 'w-10 h-10 text-2xl'
            }`}>
              M
            </div>
            <span className={`font-heading font-extrabold tracking-tighter text-white transition-all duration-300 ${
              scrolled ? 'text-2xl' : 'text-3xl'
            }`}>
              MAGNIKO
            </span>
          </a>

          {/* Desktop macOS Dock Navigation (Hidden on Mobile) */}
          <nav
            ref={navContainerRef}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`hidden md:flex items-center gap-5 px-6 py-2 transition-all duration-300 ${
              scrolled ? 'bg-[#0029FF] border-2 border-white' : 'bg-black/30 backdrop-blur-none border-2 border-white/40'
            }`}
          >
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              const scale = getDockScale(index);

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredIdx(index)}
                  animate={{ scale }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className={`text-xs lg:text-sm font-heading font-extrabold transition-colors relative py-1.5 px-2 ${
                    isActive ? 'text-[#CCFF00]' : 'text-white hover:text-[#CCFF00]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="dockUnderline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CCFF00]"
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* Desktop Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton href="https://shop.magniko.store" target="_blank" rel="noopener noreferrer">
              <div className={`flat-button-lime animate-cta-pulse inline-flex items-center gap-2 font-heading font-extrabold text-black transition-all duration-300 ${
                scrolled ? 'px-5 py-2 text-xs' : 'px-7 py-3 text-sm'
              }`}>
                <span>SHOP NOW</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Navigation Button (Fixed & Touch Friendly) */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="https://shop.magniko.store"
              target="_blank"
              rel="noopener noreferrer"
              className="flat-button-lime font-heading font-extrabold text-xs px-4 py-2.5 flex items-center gap-1 text-black min-h-[44px]"
            >
              <span>SHOP NOW</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 border-2 border-white bg-[#0029FF] text-white hover:bg-[#CCFF00] hover:text-black min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Occupies most screen height with large thumb navigation) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '85vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#0029FF] border-t-4 border-b-4 border-white px-6 py-8 text-white flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-5">
              <div className="text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest mb-2">
                NAVIGATION MENU
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-heading font-extrabold border-b-2 border-white/30 pb-3 flex items-center justify-between transition-colors ${
                    activeSection === link.id ? 'text-[#CCFF00]' : 'text-white hover:text-[#CCFF00]'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id ? (
                    <span className="text-xs bg-[#CCFF00] text-black px-2.5 py-1 font-extrabold">ACTIVE</span>
                  ) : (
                    <span className="text-sm text-white/60">→</span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="https://shop.magniko.store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center flat-button-lime font-heading font-extrabold py-4 text-lg flex items-center justify-center gap-2 text-black border-2 border-white min-h-[52px]"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>SHOP MAGNIKO STORE</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
