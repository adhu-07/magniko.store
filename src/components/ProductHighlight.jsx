import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { MagnikoBarGraphic } from './ProductGraphic';

export default function ProductHighlight() {
  return (
    <section className="py-28 bg-[#0029FF] text-white border-b-2 border-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Magazine Ad Layout */}
        <div className="bg-[#0029FF] border-4 border-white p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Magazine Copy */}
          <div className="lg:w-1/2 flex flex-col text-left">
            <div className="text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest mb-4">
              EDITORIAL FEATURE • MAGNIKO REVOLUTION
            </div>

            <h2 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tighter leading-none mb-6">
              PURE. REAL. <br />
              DELICIOUS.
            </h2>

            <p className="font-body text-xl font-medium text-white max-w-lg mb-8 leading-snug">
              The snack bar crafted for people who refuse to swallow chalky magnesium pills. High in natural food magnesium, zero chemical isolates.
            </p>

            <div>
              <a
                href="https://shop.magniko.store"
                target="_blank"
                rel="noopener noreferrer"
                className="flat-button-lime inline-flex items-center gap-3 font-heading font-extrabold text-xl px-10 py-5 text-black border-2 border-white"
              >
                <ShoppingBag className="w-6 h-6" />
                <span>SHOP NOW</span>
                <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Very Large Product Visual */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-lg border-4 border-white p-6 bg-[#0029FF]">
              <MagnikoBarGraphic variant="dark-crunch" className="scale-110 my-6" />
              <div className="text-center font-heading font-extrabold text-xs text-[#CCFF00] uppercase tracking-widest border-t-2 border-white pt-4">
                OFFICIAL STORE • FAST NATIONWIDE SHIPPING
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
