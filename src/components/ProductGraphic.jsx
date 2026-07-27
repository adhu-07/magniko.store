import React from 'react';

export function MagnikoBarGraphic({ variant = 'dark-crunch', className = '' }) {
  const variantMap = {
    'dark-crunch': {
      barBg: '#0029FF',
      textColor: '#FFFFFF',
      wrapperBg: '#CCFF00',
      wrapperText: '#000000',
      label: 'DARK CRUNCH',
      sub: '72% cacao & sea salt'
    },
    'dark-rush': {
      barBg: '#000000',
      textColor: '#FFFFFF',
      wrapperBg: '#0029FF',
      wrapperText: '#FFFFFF',
      label: 'DARK RUSH',
      sub: 'espresso & dark cacao'
    },
    'seed-rush': {
      barBg: '#CCFF00',
      textColor: '#000000',
      wrapperBg: '#0029FF',
      wrapperText: '#FFFFFF',
      label: 'SEED RUSH',
      sub: 'toasted pumpkin & sesame'
    },
    'choco-nut': {
      barBg: '#FFFFFF',
      textColor: '#000000',
      wrapperBg: '#CCFF00',
      wrapperText: '#000000',
      label: 'CHOCO NUT',
      sub: 'almond butter & cacao nibs'
    }
  };

  const v = variantMap[variant] || variantMap['dark-crunch'];

  return (
    <div className={`relative w-full max-w-md aspect-[16/9] select-none ${className}`}>
      {/* Outer Crisp Flat Frame */}
      <div className="w-full h-full border-4 border-black flex flex-col justify-between p-6 shadow-none" style={{ backgroundColor: v.barBg, color: v.textColor }}>
        
        {/* Seed & Texture Graphics */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-90">
          <svg width="100%" height="100%">
            <rect x="12%" y="18%" width="32" height="14" fill="#000" stroke="#FFF" strokeWidth="2" transform="rotate(12 25 25)" />
            <rect x="58%" y="12%" width="38" height="18" fill={v.wrapperBg} stroke="#000" strokeWidth="2" transform="rotate(-8 60 20)" />
            <rect x="75%" y="45%" width="28" height="12" fill="#FFF" stroke="#000" strokeWidth="2" transform="rotate(25 80 50)" />
            <circle cx="30%" cy="70%" r="10" fill="#000" stroke="#FFF" strokeWidth="2" />
            <circle cx="85%" cy="75%" r="12" fill={v.wrapperBg} stroke="#000" strokeWidth="2" />
            <rect x="45%" y="65%" width="30" height="14" fill="#FFF" stroke="#000" strokeWidth="2" transform="rotate(-15 50 70)" />
          </svg>
        </div>

        {/* Top Brand Wrapper Band */}
        <div className="relative z-10 border-2 border-black px-4 py-2 flex items-center justify-between" style={{ backgroundColor: v.wrapperBg, color: v.wrapperText }}>
          <div className="font-heading font-extrabold text-xl tracking-tight">MAGNIKO</div>
          <div className="text-[10px] font-heading font-extrabold uppercase px-2 py-0.5 border border-current">
            100% REAL FOOD
          </div>
        </div>

        {/* Bottom Flavor Bar Tagline */}
        <div className="relative z-10 flex items-end justify-between">
          <div>
            <div className="text-xs font-heading font-bold uppercase tracking-wider opacity-80">MAGNESIUM SNACK BAR</div>
            <div className="text-2xl font-heading font-extrabold">{v.label}</div>
            <div className="text-xs font-body font-semibold">{v.sub}</div>
          </div>
          <div className="bg-black text-[#CCFF00] font-heading font-extrabold text-xs px-3 py-1.5 border border-white">
            185mg Mg
          </div>
        </div>

      </div>
    </div>
  );
}

export function IngredientVisual({ name, className = '' }) {
  const ingredientData = {
    'Pumpkin Seeds': {
      bg: '#0029FF',
      color: '#CCFF00',
      label: 'PUMPKIN SEEDS',
      stat: '120mg Mg / 100g',
      desc: 'Cold-pressed sprouted organic seeds high in natural magnesium & zinc.'
    },
    'Sesame Seeds': {
      bg: '#CCFF00',
      color: '#000000',
      label: 'SESAME SEEDS',
      stat: '95mg Mg / 100g',
      desc: 'Unhulled golden sesame providing calcium, iron, and bioavailable minerals.'
    },
    'Sunflower Seeds': {
      bg: '#FFFFFF',
      color: '#000000',
      label: 'SUNFLOWER SEEDS',
      stat: '85mg Mg / 100g',
      desc: 'Rich in vitamin E and essential healthy omega fatty acids.'
    },
    'Dark Chocolate': {
      bg: '#000000',
      color: '#FFFFFF',
      label: '72% DARK CACAO',
      stat: '65mg Mg / 100g',
      desc: 'Single-origin unrefined dark cacao rich in natural antioxidants.'
    }
  };

  const data = ingredientData[name] || ingredientData['Pumpkin Seeds'];

  return (
    <div className={`border-4 border-black p-8 flex flex-col justify-between h-72 ${className}`} style={{ backgroundColor: data.bg, color: data.color }}>
      <div className="flex items-center justify-between border-b-2 border-current pb-4">
        <span className="font-heading font-extrabold text-xs tracking-widest uppercase">INGREDIENT SPOTLIGHT</span>
        <span className="font-heading font-extrabold text-xs px-2.5 py-1 border border-current">{data.stat}</span>
      </div>

      <div>
        <h4 className="font-heading font-extrabold text-3xl mb-2">{data.label}</h4>
        <p className="font-body text-sm font-medium leading-relaxed opacity-90">{data.desc}</p>
      </div>

      <div className="text-[10px] font-heading font-extrabold tracking-wider uppercase border-t-2 border-current pt-3">
        WHOLE FOOD • ZERO ADDITIVES
      </div>
    </div>
  );
}
