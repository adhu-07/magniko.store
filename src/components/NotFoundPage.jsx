import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function NotFoundPage({ onReturnHome }) {
  return (
    <div className="min-h-screen bg-[#0029FF] text-white flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden">
      
      {/* Header Logo */}
      <div className="flex items-center justify-between border-b-2 border-white pb-6">
        <a href="#" onClick={onReturnHome} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#CCFF00] text-black border-2 border-white flex items-center justify-center font-heading font-extrabold text-2xl">
            M
          </div>
          <span className="font-heading font-extrabold text-3xl tracking-tighter text-white">
            MAGNIKO
          </span>
        </a>

        <a
          href="https://shop.magniko.store"
          target="_blank"
          rel="noopener noreferrer"
          className="flat-button-lime font-heading font-extrabold text-xs px-4 py-2 text-black"
        >
          SHOP NOW
        </a>
      </div>

      {/* Main 404 Editorial Content */}
      <div className="max-w-4xl mx-auto my-auto text-left py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-xs font-heading font-extrabold text-[#CCFF00] uppercase tracking-widest mb-4">
            ERROR 404 • PAGE NOT FOUND
          </div>

          <h1 className="font-heading font-extrabold text-6xl sm:text-8xl lg:text-9xl text-white tracking-tighter leading-none mb-6">
            <span className="block text-white">LOOKS LIKE THIS</span>
            <span className="block text-[#CCFF00]">SNACK WANDERED OFF.</span>
          </h1>

          <p className="font-body text-xl sm:text-2xl text-white font-medium max-w-xl mb-10 leading-relaxed opacity-95">
            The page you're looking for doesn't exist, has been moved, or is temporarily taking a rest.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
            <MagneticButton onClick={onReturnHome}>
              <div className="flat-button-lime inline-flex items-center justify-center gap-3 font-heading font-extrabold text-base px-8 py-4 text-black border-2 border-white min-h-[48px] w-full sm:w-auto">
                <ArrowLeft className="w-5 h-5" />
                <span>Return to Homepage</span>
              </div>
            </MagneticButton>

            <a
              href="https://shop.magniko.store"
              target="_blank"
              rel="noopener noreferrer"
              className="flat-button-white inline-flex items-center justify-center gap-2 font-heading font-extrabold text-base px-8 py-4 text-black border-2 border-white min-h-[48px] text-center"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Explore Store</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer Disclaimer */}
      <div className="border-t-2 border-white pt-6 text-xs font-heading font-bold text-white flex flex-col sm:flex-row justify-between gap-4">
        <span>© {new Date().getFullYear()} MAGNIKO. Crafted with naturally magnesium-rich ingredients.</span>
        <span>contact@magniko.store</span>
      </div>

    </div>
  );
}
