import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { MagnikoBarGraphic } from './ProductGraphic';

export default function FeaturedProducts() {
  const products = [
    {
      id: 'dark-crunch',
      name: 'Dark Crunch',
      desc: 'Rich 72% single-origin cacao paired with Maldon sea salt crunch.',
      badge: 'BEST SELLER'
    },
    {
      id: 'dark-rush',
      name: 'Dark Rush',
      desc: 'Intense espresso-infused dark cacao with roasted sprouted seeds.',
      badge: 'ENERGY FAVORITE'
    },
    {
      id: 'seed-rush',
      name: 'Seed Rush',
      desc: 'Toasted pumpkin, sunflower, and golden sesame seed crunch.',
      badge: 'NUTTY RECIPE'
    },
    {
      id: 'choco-nut',
      name: 'Choco Nut',
      desc: 'Creamy sprouted almond butter swirled with raw cacao nibs.',
      badge: 'NEW RELEASE'
    }
  ];

  return (
    <section id="products" className="py-28 bg-white text-black border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-xs font-heading font-extrabold text-[#0029FF] uppercase tracking-widest mb-4">
            SIGNATURE COLLECTION
          </div>
          <h2 className="font-heading font-extrabold text-5xl sm:text-7xl text-black tracking-tighter leading-none">
            Choose Your Favourite.
          </h2>
        </div>

        {/* 4 Large Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black p-8 sm:p-10 flex flex-col justify-between hover:border-[#0029FF] transition-all"
            >
              <div>
                {/* Product Badge */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-black">
                  <span className="bg-[#0029FF] text-[#CCFF00] font-heading font-extrabold text-xs px-3 py-1 border border-black">
                    {p.badge}
                  </span>
                  <span className="text-xs font-heading font-bold text-black uppercase">
                    185mg Bioavailable Mg
                  </span>
                </div>

                {/* Large Product Render */}
                <div className="flex justify-center my-6 py-4 bg-[#0029FF] border-2 border-black">
                  <MagnikoBarGraphic variant={p.id} />
                </div>

                {/* Flavour Name & Short Description */}
                <h3 className="font-heading font-extrabold text-4xl text-black mb-3">
                  {p.name}
                </h3>

                <p className="font-body text-lg font-medium text-black mb-8 leading-snug">
                  {p.desc}
                </p>
              </div>

              {/* Shop Button */}
              <div>
                <a
                  href="https://shop.magniko.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flat-button-lime w-full inline-flex items-center justify-center gap-2 font-heading font-extrabold py-4 text-lg text-black border-2 border-black"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Shop Now</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
