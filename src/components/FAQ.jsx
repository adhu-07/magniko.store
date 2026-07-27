import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is Magniko a supplement or pharmaceutical company?',
      answer: 'No. Magniko is strictly a whole-food snack bar brand. We do not manufacture synthetic pills, powders, or supplements. Our bars are baked using naturally magnesium-dense whole ingredients like sprouted pumpkin seeds, raw cacao, and roasted nuts.'
    },
    {
      question: 'How much natural magnesium is in each bar?',
      answer: 'Depending on the flavour variety, each Magniko bar delivers between 165mg and 185mg of highly bioavailable elemental magnesium derived directly from real food matrixes.'
    },
    {
      question: 'When is the best time of day to eat a Magniko bar?',
      answer: 'You can enjoy Magniko anytime! They make an ideal post-workout recovery snack to prevent muscle cramps, a clean afternoon energy boost at your desk, or a relaxing evening treat before bed.'
    },
    {
      question: 'Are Magniko bars vegan and gluten-free?',
      answer: 'Yes! All Magniko bars are 100% plant-based, gluten-free, dairy-free, and non-GMO. We never use artificial syrups, preservatives, or chemical fillers.'
    },
    {
      question: 'Where can I purchase Magniko bars?',
      answer: 'Magniko bars are available exclusively through our official store at shop.magniko.store with fast, convenient shipping directly to your doorstep.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0029FF] text-white border-b-2 border-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#CCFF00] text-black border-2 border-white text-xs font-heading font-extrabold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-black" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-heading font-extrabold text-5xl sm:text-6xl text-white tracking-tighter">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-white font-body text-xl mt-4 font-medium">
            Everything you need to know about our natural whole-food magnesium bars.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-4 border-white bg-[#0029FF] transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-extrabold text-xl sm:text-2xl transition-colors ${
                    isOpen ? 'bg-[#CCFF00] text-black' : 'bg-[#0029FF] text-white hover:bg-white hover:text-[#0029FF]'
                  }`}
                >
                  <span>{faq.question}</span>
                  <div className={`w-9 h-9 border-2 border-current flex items-center justify-center shrink-0 font-bold ${
                    isOpen ? 'bg-black text-[#CCFF00]' : 'bg-white text-[#0029FF]'
                  }`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 pt-4 text-white font-body text-base sm:text-lg font-medium leading-relaxed bg-[#0029FF] border-t-2 border-white"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
