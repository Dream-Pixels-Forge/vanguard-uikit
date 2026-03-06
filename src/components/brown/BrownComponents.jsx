import React from 'react';
import { woodenBrownTheme, brownButtonVariants, brownCardVariants, brownStatusColors } from '../../theme/woodenBrown';

export const BrownButton = ({ children, icon: Icon, variant = "wood", size = "md", className = "", ...props }) => {
  const sizes = { sm: "px-3 py-1.5 text-[10px]", md: "px-5 py-2.5 text-xs", lg: "px-7 py-3 text-sm" };

  return (
    <button className={`group relative ${woodenBrownTheme.radius.base} font-semibold flex items-center justify-center gap-2 ${woodenBrownTheme.animation.slow} active:scale-95 ${brownButtonVariants[variant]} ${sizes[size]} ${className}`} {...props}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10">{children}</span>
      {Icon && <Icon size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

export const BrownIconButton = ({ icon: Icon, variant = "glass", size = "md", className = "", ...props }) => {
  const variants = {
    glass: "bg-gradient-to-br from-amber-800/35 via-orange-900/25 to-amber-800/35 backdrop-blur-md border border-amber-700/35 shadow-[0_2px_8px_rgba(0,0,0,0.4)]",
    accent: "bg-gradient-to-br from-orange-600 to-amber-700 text-amber-100 shadow-[2px_2px_6px_rgba(0,0,0,0.4)]",
    ghost: "bg-transparent hover:bg-amber-900/30",
    wood: "bg-gradient-to-br from-amber-950/50 via-orange-900/40 to-amber-950/50 border border-amber-900/40"
  };
  const sizes = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-12 h-12" };

  return (
    <button className={`${woodenBrownTheme.radius.base} flex items-center justify-center ${woodenBrownTheme.animation.liquid} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      <Icon size={18} className="relative z-10 group-hover:scale-110 transition-transform" />
    </button>
  );
};

export const BrownCard = ({ children, title, description, icon: Icon, variant = "wood", hoverable = true, className = "", ...props }) => {
  const variants = brownCardVariants;
  return (
    <div className={`${woodenBrownTheme.radius.large} p-6 ${hoverable ? 'hover:shadow-xl transition-all duration-300' : ''} ${variants[variant]} ${className}`} {...props}>
      {(title || Icon) && (
        <div className="mb-4">
          {Icon && <div className={`p-3 ${woodenBrownTheme.liquidSurface} ${woodenBrownTheme.radius.base} text-amber-400 mb-3`}><Icon size={22} /></div>}
          {title && <h3 className="text-lg font-semibold text-amber-100">{title}</h3>}
          {description && <p className="text-amber-400/70 text-sm mt-1">{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

export const BrownInput = ({ icon: Icon, placeholder, className = "", ...props }) => (
  <div className={`flex items-center gap-3 px-4 py-3 ${woodenBrownTheme.liquidSurface} ${woodenBrownTheme.radius.base} focus-within:border-amber-500/40 focus-within:shadow-[0_0_15px_rgba(217,119,6,0.3)] ${woodenBrownTheme.animation.slow} ${className}`}>
    {Icon && <Icon size={16} className="text-amber-500/60" />}
    <input type="text" placeholder={placeholder} className="flex-1 bg-transparent border-none outline-none text-sm text-amber-100 placeholder:text-amber-700" {...props} />
  </div>
);

export const BrownBadge = ({ children, variant = "amber", size = "md", className = "" }) => {
  const colors = {
    amber: "bg-amber-900/50 text-amber-300 border-amber-700/50",
    orange: "bg-orange-900/50 text-orange-300 border-orange-700/50",
    gold: "bg-yellow-900/50 text-yellow-300 border-yellow-700/50",
    emerald: "bg-emerald-900/50 text-emerald-300 border-emerald-700/50",
    red: "bg-red-900/50 text-red-300 border-red-700/50"
  };
  const sizes = { sm: "px-2 py-0.5 text-[9px]", md: "px-3 py-1 text-[10px]", lg: "px-4 py-1.5 text-xs" };
  return <span className={`inline-flex items-center font-medium rounded-full border backdrop-blur-sm ${colors[variant]} ${sizes[size]} ${className}`}>{children}</span>;
};

export const BrownStatCard = ({ title, value, change, trend = "up", icon: Icon, className = "" }) => (
  <div className={`${woodenBrownTheme.liquidSurface} ${woodenBrownTheme.radius.card} p-5 group hover:shadow-lg transition-all ${className}`}>
    <div className="flex justify-between items-start mb-3">
      <div className={`p-2.5 ${woodenBrownTheme.woodGradient} text-amber-400 ${woodenBrownTheme.radius.base} group-hover:scale-105 transition-transform`}>
        {Icon && <Icon size={18} />}
      </div>
      <div className={`flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-full ${trend === 'up' ? 'bg-emerald-900/50 text-emerald-300 border border-emerald-700/50' : 'bg-red-900/50 text-red-300 border border-red-700/50'}`}>
        {change}
      </div>
    </div>
    <p className="text-amber-500/60 text-[10px] font-medium uppercase tracking-wide mb-1">{title}</p>
    <h3 className="text-2xl font-bold text-amber-100">{value}</h3>
  </div>
);

export const BrownProgressBar = ({ value, variant = "amber", className = "" }) => {
  const colors = { amber: "from-amber-500 to-amber-600", orange: "from-orange-500 to-orange-600", gold: "from-yellow-500 to-yellow-600", emerald: "from-emerald-500 to-emerald-600" };
  return (
    <div className={`w-full h-2 ${woodenBrownTheme.radius.full} bg-amber-950/50 overflow-hidden ${className}`}>
      <div className={`h-full bg-gradient-to-r ${colors[variant]} rounded-full transition-all duration-500`} style={{ width: `${value}%` }} />
    </div>
  );
};

export const BrownToggle = ({ checked, onChange, label, className = "" }) => (
  <label className={`flex items-center justify-between cursor-pointer ${className}`}>
    <span className="text-sm text-amber-300">{label}</span>
    <div className={`relative w-12 h-6 ${woodenBrownTheme.radius.full} ${checked ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 'bg-amber-900/50'} transition-all duration-300`}>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <div className={`absolute top-1 left-1 w-4 h-4 ${woodenBrownTheme.radius.full} bg-amber-200 shadow-md transition-all duration-300 ${checked ? 'translate-x-6' : ''}`} />
    </div>
  </label>
);

export const BrownSkeleton = ({ className = "" }) => (
  <div className={`${woodenBrownTheme.radius.base} ${woodenBrownTheme.holographic} animate-pulse ${className}`} />
);

export const BrownSpinner = ({ size = "md", className = "" }) => {
  const sizes = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" };
  return <div className={`${sizes[size]} animate-spin ${className}`}><div className="w-full h-full border-2 border-amber-800 border-t-amber-500 rounded-full" /></div>;
};

export const BrownModal = ({ isOpen, onClose, title, children, className = "" }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full max-w-lg mx-4 ${woodenBrownTheme.radius.large} ${woodenBrownTheme.liquidGlass} border border-amber-700/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${className}`}>
        {title && <div className="flex items-center justify-between p-5 border-b border-amber-900/50"><h3 className="text-lg font-semibold text-amber-100">{title}</h3><button onClick={onClose} className="p-1.5 hover:bg-amber-900/50 rounded-lg"><svg size={18} className="text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>}
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export const BrownBackground = ({ className = "" }) => (
  <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
    <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-br from-amber-900/25 via-orange-800/15 to-amber-900/25 blur-[100px]" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-gradient-to-tr from-orange-800/20 via-amber-900/10 to-orange-800/20 blur-[100px]" />
  </div>
);
