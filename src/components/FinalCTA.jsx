import React from 'react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinalCTA() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#0029FF', '#CCFF00', '#FFFFFF', '#000000']
    });
  };

  return (
    <section className="py-28 bg-[#0029FF] text-white border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0029FF] border-4 border-white p-12 sm:p-24 text-center">
          
          <div className="text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest mb-6">
            JOIN THE WHOLE-FOOD MOVEMENT
          </div>

          {/* Large Heading */}
          <h2 className="font-heading font-extrabold text-6xl sm:text-8xl lg:text-9xl text-white tracking-tighter uppercase mb-6 leading-none">
            READY FOR YOUR <br className="hidden sm:inline" />
            <span className="text-[#CCFF00]">FIRST BITE?</span>
          </h2>

          {/* Short Supporting Text */}
          <p className="font-body text-xl sm:text-2xl text-white font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the delicious, natural way to fuel your body with magnesium-rich ingredients every single day.
          </p>

          {/* Large Green Button */}
          <div className="flex justify-center">
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
            DIRECT LINK TO SHOP.MAGNIKO.STORE • FAST SHIPPING
          </div>

        </div>

      </div>
    </section>
  );
}
