import React from 'react';
import { motion } from 'framer-motion';

export default function WhatBringsYouHere() {
  const cards = [
    {
      id: 'sleep',
      title: 'Better Sleep',
      subtitle: 'Evening Rest & Unwinding',
      target: '#why-magnesium'
    },
    {
      id: 'recovery',
      title: 'Gym & Recovery',
      subtitle: 'Post-Workout Repair',
      target: '#why-magnesium'
    },
    {
      id: 'period',
      title: 'Period Comfort',
      subtitle: 'Menstrual Ease & Balance',
      target: '#why-magnesium'
    },
    {
      id: 'ingredients',
      title: 'Explore Ingredients',
      subtitle: 'Sprouted Seeds & Cacao',
      target: '#ingredient-story'
    }
  ];

  const handleCardClick = (target) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#0029FF] text-white border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest mb-4">
            GUIDED DISCOVERY
          </div>
          <h2 className="font-heading font-extrabold text-5xl sm:text-7xl text-white tracking-tighter leading-none">
            What brings you here today?
          </h2>
        </div>

        {/* 4 Large Flat Typography Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.button
              key={card.id}
              onClick={() => handleCardClick(card.target)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-[#0029FF] text-white border-2 border-white rounded-2xl p-8 text-left transition-all duration-200 hover:border-[#CCFF00] hover:bg-white hover:text-[#0029FF] group cursor-pointer flex flex-col justify-between h-64"
            >
              <div>
                <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#CCFF00] group-hover:text-[#0029FF]">
                  0{idx + 1}
                </span>
                <h3 className="font-heading font-extrabold text-3xl mt-4 mb-2 leading-tight">
                  {card.title}
                </h3>
              </div>

              <div className="pt-4 border-t-2 border-current font-heading font-extrabold text-xs uppercase tracking-wider">
                {card.subtitle} →
              </div>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}
