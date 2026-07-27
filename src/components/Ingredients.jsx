import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IngredientVisual } from './ProductGraphic';

export default function Ingredients() {
  const ingredients = [
    {
      name: 'Pumpkin Seeds',
      shortDesc: 'Sprouted organic seeds rich in bioavailable magnesium, zinc, and healthy plant fats.'
    },
    {
      name: 'Sesame Seeds',
      shortDesc: 'Unhulled golden sesame seeds packed with natural copper, iron, and trace minerals.'
    },
    {
      name: 'Sunflower Seeds',
      shortDesc: 'Cold-pressed roasted kernels offering natural vitamin E and clean energetic sustenance.'
    },
    {
      name: 'Dark Chocolate',
      shortDesc: '72% single-origin unrefined cacao containing natural polyphenols and mood-boosting antioxidants.'
    }
  ];

  return (
    <section id="ingredients" className="py-28 bg-[#0029FF] text-white border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest mb-4">
            PURE SOURCE NUTRITION
          </div>
          <h2 className="font-heading font-extrabold text-5xl sm:text-7xl text-white tracking-tighter leading-none">
            Simple Ingredients.
          </h2>
        </div>

        {/* 4 Ingredient Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {ingredients.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0029FF] text-white border-4 border-white p-8 flex flex-col justify-between"
            >
              <div>
                {/* Large Photography / Visual Placeholder */}
                <div className="mb-6">
                  <IngredientVisual name={item.name} />
                </div>

                <h3 className="font-heading font-extrabold text-3xl text-white mb-3">
                  {item.name}
                </h3>

                <p className="font-body text-base font-medium text-white mb-6 leading-relaxed">
                  {item.shortDesc}
                </p>
              </div>

              <div>
                <a
                  href="https://shop.magniko.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flat-button-white w-full inline-flex items-center justify-center gap-2 font-heading font-extrabold py-3.5 text-base text-black border-2 border-white"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
