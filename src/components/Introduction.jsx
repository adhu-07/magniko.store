import React from 'react';
import { motion } from 'framer-motion';
import { IngredientVisual } from './ProductGraphic';

export default function Introduction() {
  return (
    <section id="introduction" className="py-28 bg-white text-black border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="font-heading font-extrabold text-5xl sm:text-7xl text-black tracking-tighter leading-none mb-6"
            >
              Made from ingredients you already know.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-black font-body text-xl font-medium leading-relaxed max-w-[650px] mb-8"
            >
              We don’t use mysterious chemical isolates or synthetic binding powders. Magniko bars are baked directly from whole sprouted pumpkin seeds, raw unrefined cacao, roasted almonds, and Maldon sea salt — food your body recognizes and absorbs naturally.
            </motion.p>

            <div className="flex items-center gap-6 border-t-2 border-black pt-6 font-heading font-extrabold text-sm uppercase">
              <span className="text-[#0029FF]">100% WHOLE FOOD MATRIX</span>
              <span>•</span>
              <span className="text-black">NO CHEMICAL ISOLATES</span>
            </div>
          </div>

          {/* Right Ingredient Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <IngredientVisual name="Pumpkin Seeds" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
