import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowUpRight, ShieldCheck, Truck } from 'lucide-react';
import { MagnikoBarGraphic } from './ProductGraphic';
import { productsData, brandTrustBadges } from '../data/productsData';
import MagneticButton from './MagneticButton';

export default function ShopSection() {
  return (
    <section id="shop-section" className="py-28 bg-white text-black border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-heading font-extrabold text-[#0029FF] uppercase tracking-widest mb-4">
            OFFICIAL STORE COLLECTION
          </div>
          <h2 className="font-heading font-extrabold text-5xl sm:text-7xl text-black tracking-tighter leading-none">
            Choose Your Favourite.
          </h2>
          <p className="font-body text-lg font-medium text-black mt-3">
            Every bar is crafted with bioavailable magnesium from organic sprouted seeds and single-origin dark cacao.
          </p>
        </div>

        {/* 4 Equally Sized Clean Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {productsData.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black p-8 flex flex-col justify-between hover:border-[#0029FF] transition-all group"
            >
              <div>
                {/* Product Graphic Render */}
                <div className="flex justify-center mb-6 py-6 bg-[#0029FF] border-2 border-black group-hover:scale-[1.02] transition-transform">
                  <MagnikoBarGraphic variant={p.imageVariant} />
                </div>

                <div className="text-[10px] font-heading font-extrabold text-[#0029FF] uppercase tracking-widest mb-1">
                  {p.magnesiumContent}
                </div>

                <h3 className="font-heading font-extrabold text-3xl text-black mb-2">
                  {p.variantName}
                </h3>

                <p className="font-body text-sm font-medium text-black mb-6 leading-snug">
                  {p.description}
                </p>
              </div>

              {/* Clean Shop Button & Price */}
              <div>
                <div className="flex items-center justify-between mb-4 pt-3 border-t-2 border-black">
                  <span className="font-heading font-extrabold text-lg text-black">
                    ₹{p.price}
                  </span>
                  <span className="text-xs font-heading font-bold text-[#0029FF] uppercase">
                    IN STOCK
                  </span>
                </div>

                <MagneticButton href={p.shopUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <div className="flat-button-lime w-full inline-flex items-center justify-center gap-2 font-heading font-extrabold py-3.5 text-sm text-black border-2 border-black min-h-[48px]">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Shop Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elegant Subtle Trust Bar */}
        <div className="bg-[#0029FF] text-white p-6 border-4 border-black flex flex-col sm:flex-row items-center justify-around gap-6 text-xs font-heading font-extrabold uppercase tracking-wider">
          {brandTrustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
