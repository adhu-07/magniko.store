import React from 'react';
import { motion } from 'framer-motion';

export default function TrustSection() {
  const trustStatements = [
    { title: 'FSSAI Registered', detail: 'Fully registered and compliant with national food safety standards.' },
    { title: 'Crafted Carefully', detail: 'Slow-baked in small batches to preserve raw whole-food nutrition.' },
    { title: 'Made with Naturally Magnesium-Rich Ingredients', detail: 'Sourced directly from organic sprouted seeds and single-origin dark cacao.' },
    { title: 'Four Unique Flavours', detail: 'Artisanal recipes balancing dark cacao, sprouted seeds, and roasted nut butter.' }
  ];

  return (
    <section className="py-24 bg-[#0029FF] text-white border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest mb-4">
            QUALITY & TRUST
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tighter leading-none">
            Built on Transparency.
          </h2>
        </div>

        {/* Clean 4-Statement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustStatements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#0029FF] text-white border-4 border-white p-8 flex flex-col justify-between"
            >
              <div>
                <div className="font-heading font-extrabold text-xs text-[#CCFF00] uppercase tracking-widest mb-4 pb-3 border-b-2 border-white">
                  GUARANTEE 0{idx + 1}
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-white mb-3">
                  {item.title}
                </h3>

                <p className="font-body text-sm font-medium text-white leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-8 pt-3 border-t-2 border-white text-[10px] font-heading font-extrabold text-[#CCFF00] uppercase tracking-wider">
                MAGNIKO QUALITY PROMISE
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
