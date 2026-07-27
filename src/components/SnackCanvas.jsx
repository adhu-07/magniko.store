import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Leaf, Zap, HeartPulse } from 'lucide-react';

export default function SnackCanvas({ activeFlavour = 'dark-chocolate' }) {
  const containerRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);

  // Mouse hover 3D tilt interaction
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const flavourConfigs = {
    'dark-chocolate': {
      title: 'Midnight Dark Cacao',
      barBg: '#0029FF',
      textColor: '#FFFFFF',
      wrapperBg: '#CCFF00',
      wrapperText: '#000000',
      seeds: ['#FFFFFF', '#CCFF00', '#000000', '#FFFFFF'],
      badge: '185mg Mg'
    },
    'golden-honey': {
      title: 'Golden Honey & Pumpkin',
      barBg: '#CCFF00',
      textColor: '#000000',
      wrapperBg: '#0029FF',
      wrapperText: '#FFFFFF',
      seeds: ['#000000', '#0029FF', '#FFFFFF', '#000000'],
      badge: '165mg Mg'
    },
    'almond-berry': {
      title: 'Toasted Almond & Berry',
      barBg: '#FFFFFF',
      textColor: '#000000',
      wrapperBg: '#0029FF',
      wrapperText: '#CCFF00',
      seeds: ['#0029FF', '#CCFF00', '#000000', '#0029FF'],
      badge: '175mg Mg'
    }
  };

  const current = flavourConfigs[activeFlavour] || flavourConfigs['dark-chocolate'];

  const ingredientNodes = [
    {
      id: 'pumpkin',
      label: 'Organic Pumpkin Seeds',
      amount: '120mg Mg',
      icon: Leaf,
      x: '10%',
      y: '18%',
      detail: 'Highest natural food source of elemental magnesium per gram.'
    },
    {
      id: 'cacao',
      label: '72% Single-Origin Cacao',
      amount: '45mg Mg',
      icon: Sparkles,
      x: '82%',
      y: '25%',
      detail: 'Rich in polyphenols and natural neurotransmitter precursors.'
    },
    {
      id: 'sea-salt',
      label: 'Maldon Flake Sea Salt',
      amount: 'Trace Minerals',
      icon: HeartPulse,
      x: '12%',
      y: '78%',
      detail: 'Enhances mineral absorption and balances electrolyte hydration.'
    },
    {
      id: 'almonds',
      label: 'Sprouted Raw Almonds',
      amount: '20mg Mg',
      icon: Zap,
      x: '76%',
      y: '76%',
      detail: 'Slow-release healthy fats for steady blood sugar curve.'
    }
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center perspective-1000 select-none py-6"
    >
      {/* Flat Graphic Snack Bar Container */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-72 md:w-80 h-44 md:h-48 rounded-none border-4 border-black transition-transform duration-200 cursor-grab active:cursor-grabbing"
      >
        {/* Solid Bar Body */}
        <div
          className="absolute inset-0 border-2 border-black flex flex-col justify-between p-5"
          style={{ backgroundColor: current.barBg, color: current.textColor }}
        >
          {/* Flat Seed Chunks */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg width="100%" height="100%">
              <rect x="15%" y="20%" width="22" height="12" fill={current.seeds[0]} stroke="#000" strokeWidth="2" transform="rotate(15)" />
              <rect x="50%" y="15%" width="28" height="14" fill={current.seeds[1]} stroke="#000" strokeWidth="2" transform="rotate(-10)" />
              <rect x="75%" y="30%" width="20" height="10" fill={current.seeds[2]} stroke="#000" strokeWidth="2" transform="rotate(35)" />
              <circle cx="35%" cy="65%" r="8" fill={current.seeds[3]} stroke="#000" strokeWidth="2" />
              <circle cx="82%" cy="70%" r="10" fill={current.seeds[0]} stroke="#000" strokeWidth="2" />
              <rect x="55%" y="60%" width="24" height="12" fill={current.seeds[1]} stroke="#000" strokeWidth="2" transform="rotate(-25)" />
            </svg>
          </div>

          {/* Solid Wrapper Band */}
          <div
            className="relative z-10 px-4 py-2 flex items-center justify-between border-2 border-black"
            style={{ backgroundColor: current.wrapperBg, color: current.wrapperText }}
          >
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold tracking-wider text-base">MAGNIKO</span>
              <span className="text-[10px] uppercase font-heading font-bold border border-current px-2 py-0.5">
                REAL FOOD
              </span>
            </div>
            <div className="w-3 h-3 bg-black border border-white" />
          </div>

          {/* Snack Bar Bottom Detail */}
          <div className="relative z-10 flex items-end justify-between">
            <div>
              <div className="text-[10px] font-heading font-bold uppercase tracking-widest">BAR VARIETY</div>
              <div className="text-base font-heading font-extrabold">{current.title}</div>
            </div>
            <div className="bg-black text-[#CCFF00] font-heading font-bold text-xs px-3 py-1 border border-white">
              {current.badge}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Flat Interactive Ingredient Nodes */}
      {ingredientNodes.map((node) => {
        const IconComponent = node.icon;
        const isActive = activeNode === node.id;

        return (
          <div
            key={node.id}
            style={{ left: node.x, top: node.y }}
            className="absolute z-20"
          >
            <button
              onClick={() => setActiveNode(isActive ? null : node.id)}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-heading font-bold transition-all border-2 border-black ${
                isActive
                  ? 'bg-[#CCFF00] text-black ring-4 ring-black'
                  : 'bg-white text-black hover:bg-[#0029FF] hover:text-white'
              }`}
            >
              <IconComponent className="w-3.5 h-3.5" />
              <span>{node.label}</span>
              <span className="px-1.5 py-0.5 text-[10px] bg-black text-white font-bold">
                {node.amount}
              </span>
            </button>

            {/* Flat Expanded Detail Box */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 w-60 p-4 bg-white text-black text-xs border-2 border-black z-30"
              >
                <div className="font-heading font-extrabold text-[#0029FF] text-sm mb-1">{node.label}</div>
                <div className="text-black font-body text-xs leading-relaxed">{node.detail}</div>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
