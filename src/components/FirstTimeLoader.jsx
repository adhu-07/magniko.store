import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FirstTimeLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="first-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#0029FF] text-white flex flex-col items-center justify-center pointer-events-none select-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <div className="w-14 h-14 bg-[#CCFF00] text-black border-2 border-white flex items-center justify-center font-heading font-extrabold text-4xl shadow-xl">
              M
            </div>
            <span className="font-heading font-extrabold text-5xl sm:text-6xl tracking-tighter text-white">
              MAGNIKO
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
