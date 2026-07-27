import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import SnackCanvas from './SnackCanvas';

export default function Flavours() {
  const [selectedFlavourKey, setSelectedFlavourKey] = useState('dark-chocolate');

  const flavours = [
    {
      key: 'dark-chocolate',
      name: 'Midnight Dark Chocolate & Sea Salt',
      tagline: 'Deep 72% Cacao & Maldon Flakes',
      badge: 'BEST SELLER',
      mgContent: '185mg Bioavailable Mg',
      calories: '210 kcal',
      protein: '9g Plant Protein',
      notes: 'Velvety dark chocolate paired with crisp sprouted seeds and crunchy Maldon salt flakes.',
      profile: {
        sweetness: 45,
        crunch: 85,
        richness: 95,
        saltiness: 60
      }
    },
    {
      key: 'golden-honey',
      name: 'Golden Honey & Pumpkin Crunch',
      tagline: 'Nutty Honey Glaze & Sprouted Seeds',
      badge: 'STAFF FAVORITE',
      mgContent: '165mg Bioavailable Mg',
      calories: '205 kcal',
      protein: '8g Plant Protein',
      notes: 'Lightly sweet raw wildflower honey folded over toasted pumpkin seeds and almond butter.',
      profile: {
        sweetness: 75,
        crunch: 90,
        richness: 65,
        saltiness: 35
      }
    },
    {
      key: 'almond-berry',
      name: 'Toasted Almond & Berry Swirl',
      tagline: 'Wild Raspberry & Creamy Almond Butter',
      badge: 'NEW RELEASE',
      mgContent: '175mg Bioavailable Mg',
      calories: '215 kcal',
      protein: '10g Plant Protein',
      notes: 'Tart freeze-dried raspberries swirled through roasted almond butter and organic cacao butter.',
      profile: {
        sweetness: 60,
        crunch: 70,
        richness: 80,
        saltiness: 25
      }
    }
  ];

  const currentFlavour = flavours.find((f) => f.key === selectedFlavourKey) || flavours[0];

  return (
    <section id="flavours" className="py-24 bg-[#0029FF] text-white border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#CCFF00] text-black border-2 border-white text-xs font-heading font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>ARTISANAL RECIPES</span>
          </div>
          <h2 className="font-heading font-extrabold text-5xl sm:text-7xl text-white tracking-tighter">
            Explore Signature Flavours
          </h2>
          <p className="text-white font-body text-xl mt-4 font-medium">
            Handcrafted with raw organic cacao, sprouted seeds, and pure nut butters.
          </p>
        </div>

        {/* Interactive Flavour Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Flavour Buttons List Left */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {flavours.map((flavour) => {
              const isSelected = flavour.key === selectedFlavourKey;

              return (
                <button
                  key={flavour.key}
                  onClick={() => setSelectedFlavourKey(flavour.key)}
                  className={`p-6 border-4 border-white text-left transition-all relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#CCFF00] text-black border-4 border-white'
                      : 'bg-[#0029FF] text-white hover:bg-white hover:text-[#0029FF]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-heading font-extrabold px-3 py-1 border border-current ${
                      isSelected ? 'bg-black text-[#CCFF00]' : 'bg-white text-[#0029FF]'
                    }`}>
                      {flavour.badge}
                    </span>
                    <span className="text-xs font-heading font-extrabold uppercase">
                      {flavour.mgContent}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-1">
                    {flavour.name}
                  </h3>

                  <p className="text-xs font-body font-semibold uppercase opacity-90">
                    {flavour.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Flavour Detail & Visual Right */}
          <div className="lg:col-span-7 bg-[#0029FF] text-white border-4 border-white p-8 sm:p-10 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFlavour.key}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Visual Bar Canvas Render */}
                <div className="flex justify-center bg-[#0029FF] p-4 border-2 border-white">
                  <SnackCanvas activeFlavour={currentFlavour.key} />
                </div>

                {/* Flavour Title & Notes */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                      {currentFlavour.name}
                    </h3>
                    <span className="font-heading font-extrabold text-black text-sm bg-[#CCFF00] px-3 py-1 border-2 border-white uppercase">
                      {currentFlavour.mgContent}
                    </span>
                  </div>
                  <p className="text-white font-body text-base leading-relaxed font-medium">
                    {currentFlavour.notes}
                  </p>
                </div>

                {/* Solid Metric Bars */}
                <div className="grid grid-cols-2 gap-4 bg-[#0029FF] p-6 border-2 border-white">
                  <div>
                    <div className="flex justify-between text-xs font-heading font-extrabold text-white mb-1 uppercase">
                      <span>Sweetness</span>
                      <span className="text-[#CCFF00]">{currentFlavour.profile.sweetness}%</span>
                    </div>
                    <div className="w-full bg-[#0029FF] h-3 border-2 border-white p-0.5">
                      <div className="bg-[#CCFF00] h-full" style={{ width: `${currentFlavour.profile.sweetness}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-heading font-extrabold text-white mb-1 uppercase">
                      <span>Crunch Factor</span>
                      <span className="text-[#CCFF00]">{currentFlavour.profile.crunch}%</span>
                    </div>
                    <div className="w-full bg-[#0029FF] h-3 border-2 border-white p-0.5">
                      <div className="bg-[#CCFF00] h-full" style={{ width: `${currentFlavour.profile.crunch}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-heading font-extrabold text-white mb-1 uppercase">
                      <span>Richness</span>
                      <span className="text-[#CCFF00]">{currentFlavour.profile.richness}%</span>
                    </div>
                    <div className="w-full bg-[#0029FF] h-3 border-2 border-white p-0.5">
                      <div className="bg-[#CCFF00] h-full" style={{ width: `${currentFlavour.profile.richness}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-heading font-extrabold text-white mb-1 uppercase">
                      <span>Saltiness</span>
                      <span className="text-[#CCFF00]">{currentFlavour.profile.saltiness}%</span>
                    </div>
                    <div className="w-full bg-[#0029FF] h-3 border-2 border-white p-0.5">
                      <div className="bg-[#CCFF00] h-full" style={{ width: `${currentFlavour.profile.saltiness}%` }} />
                    </div>
                  </div>
                </div>

                {/* Direct Shop Action Button */}
                <div className="pt-2">
                  <a
                    href="https://shop.magniko.store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flat-button-lime w-full inline-flex items-center justify-center gap-2 font-heading font-extrabold py-4 text-lg text-black"
                  >
                    <span>ORDER {currentFlavour.name.toUpperCase()} NOW</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
