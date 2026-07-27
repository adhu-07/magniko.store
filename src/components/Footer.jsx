import React, { useState } from 'react';
import { ArrowUp, ShoppingBag, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#0029FF] text-white pt-20 md:pt-24 pb-16 border-t-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Newsletter Section */}
        <div className="bg-[#0029FF] border-4 border-white p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-left">
            <div className="text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest mb-2">
              FOLLOW OUR JOURNEY
            </div>
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-2">
              Get fresh batches & story updates.
            </h3>
            <p className="font-body text-sm font-medium text-white opacity-90">
              No spam. Just natural whole-food announcements and store drop releases.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-[#CCFF00] text-black font-heading font-extrabold px-6 py-4 border-2 border-white">
                <CheckCircle2 className="w-5 h-5 text-black" />
                <span>YOU'RE SUBSCRIBED TO MAGNIKO!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-md">
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  aria-label="Email address for newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="bg-white text-black font-body text-sm font-semibold px-4 py-3.5 border-2 border-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#CCFF00] w-full min-h-[48px]"
                />
                <MagneticButton className="w-full sm:w-auto">
                  <button
                    type="submit"
                    className="flat-button-lime font-heading font-extrabold text-sm px-6 py-3.5 text-black border-2 border-white shrink-0 flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </MagneticButton>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b-2 border-white">
          
          {/* Brand Info & Mission Left */}
          <div className="md:col-span-6 space-y-6 text-left">
            <a href="#" className="flex items-center gap-3 group focus-visible:outline-none">
              <div className="w-12 h-12 bg-[#CCFF00] text-black border-2 border-white flex items-center justify-center font-heading font-extrabold text-3xl">
                M
              </div>
              <span className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tighter text-white">
                MAGNIKO
              </span>
            </a>

            <p className="text-white font-body text-base font-medium leading-relaxed max-w-md">
              Magniko creates snack bars crafted with naturally magnesium-rich ingredients. We believe daily wellness should come from real food you love eating, not synthetic pills.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-wider">
              <span>Made with care.</span>
              <span>•</span>
              <span>Crafted in India.</span>
            </div>

            <div>
              <MagneticButton href="https://shop.magniko.store" target="_blank" rel="noopener noreferrer">
                <div className="flat-button-lime inline-flex items-center gap-2 font-heading font-extrabold text-xs px-5 py-2.5 text-black min-h-[44px]">
                  <ShoppingBag className="w-4 h-4" />
                  <span>shop.magniko.store</span>
                </div>
              </MagneticButton>
            </div>
          </div>

          {/* Quick Nav Middle */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#CCFF00] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 font-heading font-bold text-base text-white">
              <li><a href="#hero" className="hover:text-[#CCFF00] transition-colors">Home</a></li>
              <li><a href="#why-magniko" className="hover:text-[#CCFF00] transition-colors">Why Magniko</a></li>
              <li><a href="#ingredient-story" className="hover:text-[#CCFF00] transition-colors">Ingredient Story</a></li>
              <li><a href="#product-experience" className="hover:text-[#CCFF00] transition-colors">Product Experience</a></li>
              <li><a href="#why-magnesium" className="hover:text-[#CCFF00] transition-colors">Why Magnesium</a></li>
              <li><a href="#shop-section" className="hover:text-[#CCFF00] transition-colors">Shop Collection</a></li>
            </ul>
          </div>

          {/* Contact & Social Links Right */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#CCFF00] mb-4">
              Contact & Social
            </h4>
            
            <div className="space-y-3 font-heading font-bold text-sm text-white">
              <div>
                <a
                  href="https://www.instagram.com/snackwithmagniko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#CCFF00] transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-[#CCFF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>@snackwithmagniko</span>
                </a>
              </div>

              <div>
                <a
                  href="mailto:contact@magniko.store"
                  className="hover:text-[#CCFF00] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#CCFF00]" />
                  <span>contact@magniko.store</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://shop.magniko.store"
                target="_blank"
                rel="noopener noreferrer"
                className="flat-button-lime w-full inline-flex items-center justify-center gap-2 font-heading font-extrabold text-xs py-3 px-4 text-black min-h-[44px]"
              >
                <span>VISIT OFFICIAL STORE</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright Bottom */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white font-body font-medium">
          <div className="max-w-2xl text-center md:text-left leading-relaxed">
            <span className="font-heading font-extrabold text-[#CCFF00]">Disclaimer:</span> Magniko is a whole-food snack bar crafted with natural ingredients. It is not intended to diagnose, treat, cure, or prevent any medical condition.
          </div>

          <div className="flex items-center gap-4 shrink-0 font-heading font-extrabold">
            <span>© {new Date().getFullYear()} MAGNIKO. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-3 bg-[#CCFF00] text-black border-2 border-white hover:bg-white hover:text-[#0029FF] transition-colors focus-visible:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
