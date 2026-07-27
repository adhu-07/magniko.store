import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IngredientVisual } from './ProductGraphic';

export default function IngredientStory() {
  const items = [
    {
      name: 'Pumpkin Seeds',
      heading: 'Organic Sprouted Pumpkin Seeds',
      story: 'We start with raw organic pumpkin seeds, sprouted to break down phytic acid and maximize nutrient absorption.',
      whyChosen: 'Chosen for its natural elemental magnesium density and rich zinc profile.',
      nutrition: '120mg Natural Mg per serving',
      imageLeft: true
    },
    {
      name: 'Sesame Seeds',
      heading: 'Unhulled Golden Sesame',
      story: 'Traditional golden sesame seeds provide a delicate nuttiness and satisfying natural crunch.',
      whyChosen: 'Chosen to complement elemental magnesium with natural calcium, iron, and trace minerals.',
      nutrition: '95mg Natural Mg per serving',
      imageLeft: false
    },
    {
      name: 'Sunflower Seeds',
      heading: 'Roasted Sunflower Kernels',
      story: 'Cold-pressed sunflower seeds bring wholesome plant protein and healthy fats to sustain long-lasting energy.',
      whyChosen: 'Chosen for clean energetic balance and high natural vitamin E antioxidant content.',
      nutrition: '85mg Natural Mg per serving',
      imageLeft: true
    },
    {
      name: 'Dark Chocolate',
      heading: '72% Single-Origin Dark Cacao',
      story: 'Pure unrefined cacao butter and solids offer deep, decadent chocolate flavor without excess sugar.',
      whyChosen: 'Chosen for rich polyphenols and natural neurotransmitter precursors that uplift mood.',
      nutrition: '65mg Natural Mg per serving',
      imageLeft: false
    }
  ];

  return (
    <section id="ingredient-story" className="py-28 bg-white text-black border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-heading font-extrabold text-[#0029FF] uppercase tracking-widest mb-4">
            THE INGREDIENT STORY
          </div>
          <h2 className="font-heading font-extrabold text-5xl sm:text-7xl text-black tracking-tighter leading-none">
            Every ingredient has a purpose.
          </h2>
        </div>

        {/* Alternating Layout Blocks */}
        {items.map((item, idx) => (
          <div key={item.name} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group cursor-pointer">
            
            {/* Visual Column (Subtle scale on hover) */}
            <div className={`lg:col-span-6 ${item.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="transform group-hover:scale-[1.03] transition-transform duration-300 border-4 border-black group-hover:border-[#0029FF]"
              >
                <IngredientVisual name={item.name} />
              </motion.div>
            </div>

            {/* Text Column (Heading shifts upward a few pixels) */}
            <div className={`lg:col-span-6 ${item.imageLeft ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-xs font-heading font-extrabold text-[#0029FF] uppercase tracking-widest mb-2">
                  INGREDIENT 0{idx + 1}
                </div>

                <h3 className="font-heading font-extrabold text-4xl sm:text-5xl text-black mb-4 group-hover:-translate-y-1 transition-transform duration-200">
                  {item.heading}
                </h3>

                <p className="font-body text-lg font-medium text-black mb-4 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {item.story}
                </p>

                <div className="bg-[#0029FF] text-white p-4 border-2 border-black mb-6 font-body text-sm font-semibold">
                  <span className="text-[#CCFF00] font-heading font-extrabold uppercase mr-2">Why Chosen:</span>
                  {item.whyChosen}
                </div>

                <div className="flex items-center justify-between pt-4 border-t-2 border-black">
                  <span className="font-heading font-extrabold text-xs uppercase bg-[#CCFF00] text-black px-3 py-1 border border-black">
                    {item.nutrition}
                  </span>

                  <a
                    href="https://shop.magniko.store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flat-button-lime inline-flex items-center gap-2 font-heading font-extrabold px-6 py-2.5 text-xs text-black border-2 border-black"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
