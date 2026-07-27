import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhyMagnesium() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const blocks = [
    {
      id: 'sleep',
      title: 'Sleep',
      short: 'Supports natural relaxation before bed.',
      detail: 'Magnesium helps quiet mental chatter and relax tired muscles before bedtime, supporting peaceful evening rest without morning grogginess.'
    },
    {
      id: 'recovery',
      title: 'Recovery',
      short: 'Post-workout muscle repair.',
      detail: 'Physical activity rapidly uses up cellular magnesium. Replenishing it through real food helps muscles bounce back smoothly after exercise.'
    },
    {
      id: 'muscle',
      title: 'Muscle Function',
      short: 'Easing tension & cramps.',
      detail: 'Magnesium helps balance calcium levels inside muscle tissue, preventing uncomfortable post-activity tightness, spasms, and cramps.'
    },
    {
      id: 'nutrition',
      title: 'Daily Nutrition',
      short: 'Essential mineral support.',
      detail: 'Provides vital elemental minerals that modern refined diets frequently lack, keeping your body nourished cleanly every day.'
    }
  ];

  return (
    <section id="why-magnesium" className="py-28 bg-white text-black border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-heading font-extrabold text-[#0029FF] uppercase tracking-widest mb-4">
            EDUCATIONAL INSIGHT
          </div>
          <h2 className="font-heading font-extrabold text-5xl sm:text-7xl text-black tracking-tighter leading-none">
            Why Magnesium?
          </h2>
          <p className="font-body text-xl font-medium text-black mt-4">
            Click any topic below to learn how natural food magnesium supports your body.
          </p>
        </div>

        {/* 4 Interactive Accordion Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((block, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div
                key={block.id}
                onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`border-4 border-black p-8 transition-all cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-[#0029FF] text-white scale-[1.03] shadow-none ring-4 ring-[#CCFF00]'
                    : 'bg-white text-black hover:bg-[#0029FF] hover:text-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-current">
                    <span className="font-heading font-extrabold text-xs uppercase tracking-widest">
                      TOPIC 0{idx + 1}
                    </span>
                    <span className="font-heading font-extrabold text-xs px-2 py-0.5 border border-current">
                      {isExpanded ? 'ACTIVE' : 'CLICK TO EXPAND'}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-3xl mb-3">
                    {block.title}
                  </h3>

                  <p className="font-body text-base font-semibold leading-snug mb-4">
                    {block.short}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="pt-4 border-t-2 border-current text-sm font-body leading-relaxed opacity-95"
                      >
                        {block.detail}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-8 pt-3 border-t-2 border-current text-[10px] font-heading font-extrabold uppercase tracking-wider">
                  REAL FOOD ABSORPTION MATRIX
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
