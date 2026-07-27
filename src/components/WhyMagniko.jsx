import React from 'react';
import { motion } from 'framer-motion';

export default function WhyMagniko() {
  const statements = [
    {
      titleLine1: 'REAL INGREDIENTS.',
      titleLine2: 'NOT SHORTCUTS.',
      description: 'Magniko starts with foods people already know and enjoy, crafted into a convenient everyday snack.'
    },
    {
      titleLine1: 'SMALL BAR.',
      titleLine2: 'BIG DIFFERENCE.',
      description: 'Made to fit naturally into everyday routines.'
    }
  ];

  return (
    <section id="why-magniko" className="py-28 bg-[#0029FF] text-white border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {statements.map((stmt, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl"
          >
            <div className="text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest mb-4">
              STATEMENT 0{idx + 1}
            </div>

            <h2 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tighter leading-none mb-6">
              <span className="block text-white">{stmt.titleLine1}</span>
              <span className="block text-[#CCFF00]">{stmt.titleLine2}</span>
            </h2>

            <p className="font-body text-xl sm:text-2xl text-white font-medium max-w-2xl leading-relaxed">
              {stmt.description}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
