import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Zap, Heart, Leaf, Utensils, ArrowRight, Sparkles } from 'lucide-react';

export default function InteractiveJourney() {
  const [activeCardId, setActiveCardId] = useState('sleep');

  const journeyCards = [
    {
      id: 'sleep',
      title: 'Better Sleep',
      icon: Moon,
      tagline: 'Evening Rest & Unwinding',
      description: 'Magnesium regulates neurotransmitters like GABA that quiet the central nervous system, helping your muscles relax naturally before sleep.',
      benefits: [
        'Natural GABA support without morning grogginess',
        'Relaxes tense leg muscles and nightly restlessness',
        'Complements nighttime unwinding routines'
      ],
      recommendedBar: 'Midnight Dark Chocolate & Sea Salt',
      magnesiumAmount: '185mg Bioavailable Mg'
    },
    {
      id: 'gym',
      title: 'Gym & Recovery',
      icon: Zap,
      tagline: 'Muscle Repair & Cramp Prevention',
      description: 'Physical exertion depletes cellular magnesium rapidly. Magniko restores electrolyte equilibrium and speeds up glycogen & muscle tissue synthesis.',
      benefits: [
        'Prevents painful post-workout muscle cramps',
        'Replenishes magnesium lost through intense sweat',
        'Clean whole-food energy without artificial stimulants'
      ],
      recommendedBar: 'Golden Honey & Pumpkin Crunch',
      magnesiumAmount: '165mg Bioavailable Mg'
    },
    {
      id: 'period',
      title: 'Period Comfort',
      icon: Heart,
      tagline: 'Smooth Muscle Ease & Bloating Relief',
      description: 'Magnesium relaxes uterine smooth muscles, easing menstrual contractions while balancing mood fluctuations and fluid retention naturally.',
      benefits: [
        'Eases uterine muscle cramping intensity',
        'Combats hormonal fatigue and serotonin dips',
        'Pure cacao provides natural mood-boosting endorphins'
      ],
      recommendedBar: 'Midnight Dark Chocolate & Sea Salt',
      magnesiumAmount: '185mg Bioavailable Mg'
    },
    {
      id: 'ingredients',
      title: 'Ingredients',
      icon: Leaf,
      tagline: 'Whole Food Nutrient Sources',
      description: 'We harvest magnesium from nature’s most potent nutrient sources: raw sprouted pumpkin seeds, unrefined cacao, almonds, and Maldon sea salt.',
      benefits: [
        'Zero synthetic chemical additives or artificial binders',
        'Whole-food matrix maximizes natural digestive absorption',
        'Naturally gluten-free and plant-based whole foods'
      ],
      recommendedBar: 'All Magniko Flavours',
      magnesiumAmount: '100% Food-Sourced'
    },
    {
      id: 'flavours',
      title: 'Flavours',
      icon: Utensils,
      tagline: 'Indulgent, Craveable Recipes',
      description: 'Snacking shouldn’t feel like taking medicine. Our artisanal recipes balance rich dark chocolate, toasted nuts, and subtle sea salt crunch.',
      benefits: [
        'Crafted by award-winning pastry chefs and nutritionists',
        'Satisfies sweet and savory cravings cleanly',
        'No bitter metallic aftertaste common in magnesium pills'
      ],
      recommendedBar: 'Flavour Variety Bundle',
      magnesiumAmount: '3 Signature Recipes'
    }
  ];

  const activeCard = journeyCards.find((c) => c.id === activeCardId) || journeyCards[0];

  return (
    <section id="interactive-journey" className="py-24 bg-[#0029FF] text-white border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#CCFF00] text-black border-2 border-white text-xs font-heading font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>INTERACTIVE DISCOVERY</span>
          </div>
          <h2 className="font-heading font-extrabold text-5xl sm:text-7xl text-white tracking-tighter">
            What brings you here today?
          </h2>
          <p className="text-white font-body text-xl mt-4 font-medium">
            Select a goal below to see how natural whole-food magnesium supports your body.
          </p>
        </div>

        {/* 5 Card Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {journeyCards.map((card) => {
            const IconComp = card.icon;
            const isSelected = card.id === activeCardId;

            return (
              <button
                key={card.id}
                onClick={() => setActiveCardId(card.id)}
                className={`p-5 border-2 border-white text-left transition-all flex flex-col justify-between h-40 ${
                  isSelected
                    ? 'bg-[#CCFF00] text-black border-2 border-white font-extrabold'
                    : 'bg-[#0029FF] text-white hover:bg-white hover:text-[#0029FF]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 border-2 border-current flex items-center justify-center font-bold ${
                    isSelected ? 'bg-black text-[#CCFF00]' : 'bg-white text-[#0029FF]'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <div className="w-3 h-3 bg-black border border-white" />
                  )}
                </div>

                <div>
                  <div className={`text-xs font-heading font-bold uppercase mb-1 ${isSelected ? 'text-black' : 'text-[#CCFF00]'}`}>
                    {card.tagline.split('&')[0]}
                  </div>
                  <div className="font-heading font-extrabold text-xl leading-tight">
                    {card.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Revealed White Contrast Drawer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="border-4 border-white p-8 sm:p-12 bg-white text-black"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Content Detail Left */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#0029FF] text-[#CCFF00] font-heading font-extrabold text-xs px-3 py-1 border border-black uppercase tracking-wider">
                    {activeCard.tagline}
                  </span>
                  <span className="text-xs font-heading font-extrabold text-[#0029FF] uppercase">
                    {activeCard.magnesiumAmount}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-4xl sm:text-5xl text-black mb-4">
                  {activeCard.title} & Magniko
                </h3>

                <p className="text-black font-body text-lg leading-relaxed mb-6 font-medium">
                  {activeCard.description}
                </p>

                {/* Key Advantages Checklist */}
                <div className="space-y-3 mb-8">
                  {activeCard.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#0029FF] text-[#CCFF00] border border-black flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <span className="text-base font-body font-semibold text-black">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="https://shop.magniko.store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flat-button-lime inline-flex items-center gap-2 font-heading font-extrabold px-8 py-4 text-base text-black"
                  >
                    <span>EXPLORE {activeCard.title.toUpperCase()} BARS</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Graphic Box Right */}
              <div className="lg:col-span-5 bg-[#0029FF] text-white p-8 border-4 border-black flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-[#CCFF00] text-black border-2 border-white flex items-center justify-center mb-6">
                  <activeCard.icon className="w-8 h-8" />
                </div>

                <div className="mb-6">
                  <div className="text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest mb-1">
                    RECOMMENDED CHOICE
                  </div>
                  <div className="font-heading font-extrabold text-2xl text-white">
                    {activeCard.recommendedBar}
                  </div>
                  <div className="text-xs font-body font-semibold text-white mt-1">
                    Crafted with organic seeds & raw cacao
                  </div>
                </div>

                <div className="w-full bg-white text-black p-3 border-2 border-black flex items-center justify-between text-xs font-heading font-bold">
                  <span>Bioavailability</span>
                  <span className="text-[#0029FF] font-extrabold uppercase">High Absorption Matrix</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
