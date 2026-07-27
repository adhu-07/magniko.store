import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import { MagnikoBarGraphic } from './ProductGraphic';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const { scrollY } = useScroll();

  // Subtle scroll parallax offset (disabled on small screens automatically via CSS or subtle transform)
  const productY = useTransform(scrollY, [0, 600], [0, 25]);
  const textY = useTransform(scrollY, [0, 600], [0, -15]);

  return (
    <section id="hero" className="relative w-full min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-[#0029FF] text-white border-b-2 border-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <motion.div style={{ y: textY }} className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#CCFF00] text-black border-2 border-white w-fit mb-6"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest">
                NATURAL WHOLE-FOOD SNACK BAR
              </span>
            </motion.div>

            {/* Multiline Headline: Line-by-Line Reveal */}
            <h1 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-9xl tracking-tighter leading-[0.88] uppercase mb-8 text-white">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white"
              >
                SMALL BAR.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[#CCFF00]"
              >
                BIG DIFFERENCE.
              </motion.span>
            </h1>

            {/* Subheading Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-2xl text-white font-body font-medium max-w-xl leading-snug mb-10"
            >
              <p>Crafted with naturally magnesium-rich ingredients.</p>
              <p className="font-heading font-extrabold text-white mt-1">
                A snack you'll actually enjoy.
              </p>
            </motion.div>

            {/* Action Buttons: Stack on Mobile, Flex on Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              {/* Primary Magnetic CTA with pulse */}
              <MagneticButton href="https://shop.magniko.store" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <div className="flat-button-lime animate-cta-pulse inline-flex items-center justify-center gap-3 font-heading font-extrabold text-lg px-9 py-4.5 text-black border-2 border-white min-h-[52px] w-full sm:w-auto">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Shop Now</span>
                </div>
              </MagneticButton>

              {/* Secondary CTA */}
              <a
                href="#introduction"
                className="flat-button-white inline-flex items-center justify-center gap-2 font-heading font-extrabold text-base px-8 py-4.5 text-black border-2 border-white min-h-[52px] w-full sm:w-auto text-center"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

          </motion.div>

          {/* Right Side: Product Visual Focus */}
          <motion.div style={{ y: productY }} className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center border-4 border-white bg-[#0029FF] p-6 product-physical-hover cursor-pointer"
            >
              <MagnikoBarGraphic variant="dark-crunch" className="scale-105 my-4" />
              <div className="w-full text-center mt-4 pt-4 border-t-2 border-white">
                <div className="font-heading font-extrabold text-xl text-white">MIDNIGHT DARK CRUNCH</div>
                <div className="text-xs font-heading font-bold text-[#CCFF00] tracking-widest uppercase mt-0.5">
                  185mg Bioavailable Magnesium • 100% Whole Food
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
