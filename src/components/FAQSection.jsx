import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is Magniko?',
      answer: 'Magniko is a premium healthy snack bar crafted in India using naturally magnesium-rich whole food ingredients like sprouted pumpkin seeds, sesame seeds, sunflower seeds, and single-origin 72% dark cacao. It is designed to fit seamlessly into daily routines without artificial supplements.'
    },
    {
      question: 'Is Magniko made with real whole-food ingredients?',
      answer: 'Yes, 100%. Magniko is built around real whole foods people already know and enjoy. We use organic sprouted seeds to maximize nutrient absorption and single-origin dark chocolate, with zero synthetic preservatives, artificial flavors, or filler ingredients.'
    },
    {
      question: 'What ingredients are used in Magniko Bars?',
      answer: 'Our core ingredients include sprouted organic pumpkin seeds (pumpkin seed snack), unhulled golden sesame seeds, cold-pressed sunflower kernels, 72% dark cacao nibs (dark chocolate snack), and pure wildflower honey.'
    },
    {
      question: 'Who can enjoy Magniko as a daily snack?',
      answer: 'Magniko is crafted for anyone seeking a better snack choice. It serves as an ideal healthy office snack for busy professionals, a post-workout recovery snack for gym lifestyles, an energizing healthy college snack, or a soothing evening treat before bed.'
    },
    {
      question: 'How should Magniko be stored?',
      answer: 'For optimal crunch and rich cacao flavor, store your Magniko seed bars in a cool, dry place away from direct sunlight. No refrigeration is required, making them perfect for on-the-go snacking.'
    }
  ];

  return (
    <section id="faq" className="py-28 bg-[#0029FF] text-white border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#CCFF00]" />
            <span>SEARCH INTENT & FREQUENT QUESTIONS</span>
          </div>
          <h2 className="font-heading font-extrabold text-5xl sm:text-7xl text-white tracking-tighter leading-none">
            Frequently Asked Questions.
          </h2>
          <p className="font-body text-lg font-medium text-white opacity-90 mt-4">
            Everything you need to know about Magniko, our real food ingredients, and elemental magnesium nutrition.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="border-4 border-white bg-[#0029FF] transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-extrabold text-xl sm:text-2xl text-white focus-visible:outline-none hover:text-[#CCFF00]"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-xs text-[#CCFF00] font-extrabold uppercase tracking-widest border border-[#CCFF00] px-2 py-1 shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#CCFF00]' : 'text-white'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 pt-2 border-t-2 border-white/40 font-body text-base font-medium text-white leading-relaxed opacity-95"
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
