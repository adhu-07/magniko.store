import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { MagnikoBarGraphic } from './ProductGraphic';

export default function ProductExperience() {
  const products = [
    {
      id: 'dark-crunch',
      name: 'Dark Crunch',
      tagline: '72% Single-Origin Cacao & Maldon Salt',
      desc: 'Velvety dark chocolate paired with crisp sprouted seeds and crunchy Maldon salt flakes.'
    },
    {
      id: 'dark-rush',
      name: 'Dark Rush',
      tagline: 'Espresso Cacao & Sprouted Seeds',
      desc: 'Intense espresso roast blended with raw cacao and toasted seed energy.'
    },
    {
      id: 'seed-rush',
      name: 'Seed Rush',
      tagline: 'Toasted Pumpkin & Golden Sesame',
      desc: 'Nutty wildflower honey glaze folded over sprouted pumpkin and sesame seeds.'
    },
    {
      id: 'choco-nut',
      name: 'Choco Nut',
      tagline: 'Sprouted Almond Butter & Cacao Nibs',
      desc: 'Creamy roasted almond butter swirled with raw cacao nibs and coconut sugar.'
    }
  ];

  return (
    <section id="product-experience" className="bg-[#0029FF] text-white">
      {products.map((p, idx) => (
        <div
          key={p.id}
          className="min-h-screen py-24 flex items-center justify-center border-b-2 border-white relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#0029FF] border-4 border-white p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-12"
            >
              
              {/* Left Magazine Cover Copy */}
              <div className="lg:w-1/2 flex flex-col text-left">
                <div className="text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest mb-4">
                  MAGAZINE COVER ISSUE 0{idx + 1}
                </div>

                <h3 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tighter leading-none mb-4">
                  {p.name.toUpperCase()}
                </h3>

                <div className="text-sm font-heading font-extrabold text-[#CCFF00] uppercase tracking-wider mb-6">
                  {p.tagline}
                </div>

                <p className="font-body text-xl font-medium text-white max-w-md mb-8 leading-relaxed">
                  {p.desc}
                </p>

                <div>
                  <a
                    href="https://shop.magniko.store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flat-button-lime inline-flex items-center gap-3 font-heading font-extrabold text-lg px-8 py-4 text-black border-2 border-white"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>View Details</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Right Product Object with Physical Hover */}
              <div className="lg:w-1/2 w-full flex justify-center">
                <div className="w-full max-w-lg border-4 border-white p-6 bg-[#0029FF] product-physical-hover cursor-pointer">
                  <MagnikoBarGraphic variant={p.id} className="scale-105 my-6" />
                  <div className="text-center font-heading font-extrabold text-xs text-[#CCFF00] uppercase tracking-widest border-t-2 border-white pt-4">
                    MAGNIKO SIGNATURE RECIPE • 185MG MG
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
