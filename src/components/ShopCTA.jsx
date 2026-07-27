import React from 'react';
import { ShoppingBag, ArrowUpRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ShopCTA() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#0029FF', '#CCFF00', '#FFFFFF', '#000000']
    });
  };

  return (
    <section className="py-24 bg-[#0029FF] text-white border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0029FF] text-white p-12 sm:p-20 border-4 border-white text-center relative">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#CCFF00] text-black border-2 border-white font-heading font-extrabold text-xs uppercase tracking-widest mb-8">
            <Sparkles className="w-4 h-4 text-black" />
            <span>JOIN THE WHOLE-FOOD REVOLUTION</span>
          </div>

          {/* Massive Dominating Headline */}
          <h2 className="font-heading font-extrabold text-6xl sm:text-8xl lg:text-9xl tracking-tighter text-white uppercase mb-8 leading-none">
            READY FOR YOUR <br className="hidden sm:inline" />
            <span className="text-[#CCFF00]">
              FIRST BITE?
            </span>
          </h2>

          <p className="text-white font-body text-xl sm:text-3xl font-medium max-w-3xl mx-auto mb-10 leading-snug">
            Experience the delicious, natural way to fuel your daily magnesium needs. No chalky pills, just pure enjoyment.
          </p>

          {/* Flat Shop Now Primary CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://shop.magniko.store"
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="flat-button-lime inline-flex items-center gap-3 font-heading font-extrabold text-2xl px-12 py-6 text-black border-4 border-white"
            >
              <ShoppingBag className="w-7 h-7" />
              <span>SHOP NOW</span>
              <ArrowUpRight className="w-7 h-7" />
            </a>
          </div>

          <div className="mt-8 text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest">
            DIRECT LINK TO SHOP.MAGNIKO.STORE • FAST SHIPPING AVAILABLE
          </div>

        </div>

      </div>
    </section>
  );
}
