import React from 'react';
import { woodenHoneycombTheme, honeycombButtonVariants, honeycombCardVariants } from '../../theme/woodenHoneycomb';

export const HoneycombButton = ({ children, icon: Icon, variant = "honey", size = "md", className = "", ...props }) => {
  const sizes = { sm: "px-3 py-1.5 text-[10px]", md: "px-5 py-2.5 text-xs", lg: "px-7 py-3 text-sm" };
  return (
    <button className={`group relative ${woodenHoneycombTheme.radius.base} font-semibold flex items-center justify-center gap-2 ${woodenHoneycombTheme.animation.honey} active:scale-95 ${honeycombButtonVariants[variant]} ${sizes[size]} ${className}`} {...props}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10">{children}</span>
      {Icon && <Icon size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

export const HoneycombIconButton = ({ icon: Icon, variant = "glass", size = "md", className = "", ...props }) => {
  const variants = { glass: "bg-gradient-to-br from-amber-900/45 via-yellow-800/35 to-amber-900/45 backdrop-blur-md border border-amber-700/45", accent: "bg-gradient-to-br from-yellow-500 to-amber-500 text-yellow-950", ghost: "bg-transparent hover:bg-amber-900/40", honey: "bg-gradient-to-br from-yellow-500/30 via-amber-400/25 to-yellow-600/30 border border-yellow-500/40" };
  const sizes = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-12 h-12" };
  return <button className={`${woodenHoneycombTheme.radius.base} flex items-center justify-center ${woodenHoneycombTheme.animation.honey} ${variants[variant]} ${sizes[size]} ${className}`} {...props}><Icon size={18} className="relative z-10 group-hover:scale-110 transition-transform" /></button>;
};

export const HoneycombCard = ({ children, title, description, icon: Icon, variant = "honey", hoverable = true, className = "", ...props }) => (
  <div className={`${woodenHoneycombTheme.radius.large} p-6 ${hoverable ? 'hover:shadow-[0_0_30px_rgba(251,191,36,0.2)] transition-all duration-300' : ''} ${honeycombCardVariants[variant]} ${className}`} {...props}>
    {(title || Icon) && <div className="mb-4">{Icon && <div className={`p-3 ${woodenHoneycombTheme.liquidSurface} ${woodenHoneycombTheme.radius.base} text-yellow-400 mb-3`}><Icon size={22} /></div>}{title && <h3 className="text-lg font-semibold text-yellow-100">{title}</h3>}{description && <p className="text-yellow-400/70 text-sm mt-1">{description}</p>}</div>}
    {children}
  </div>
);

export const HoneycombInput = ({ icon: Icon, placeholder, className = "", ...props }) => (
  <div className={`flex items-center gap-3 px-4 py-3 ${woodenHoneycombTheme.liquidSurface} ${woodenHoneycombTheme.radius.base} focus-within:border-yellow-500/50 focus-within:shadow-[0_0_15px_rgba(251,191,36,0.3)] ${woodenHoneycombTheme.animation.slow} ${className}`}>
    {Icon && <Icon size={16} className="text-yellow-500/60" />}
    <input type="text" placeholder={placeholder} className="flex-1 bg-transparent border-none outline-none text-sm text-yellow-100 placeholder:text-yellow-700" {...props} />
  </div>
);

export const HoneycombBadge = ({ children, variant = "honey", size = "md", className = "" }) => {
  const colors = { honey: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40", amber: "bg-amber-900/50 text-amber-300 border-amber-700/50", gold: "bg-yellow-900/50 text-yellow-300 border-yellow-700/50", emerald: "bg-emerald-900/50 text-emerald-300 border-emerald-700/50", red: "bg-red-900/50 text-red-300 border-red-700/50" };
  const sizes = { sm: "px-2 py-0.5 text-[9px]", md: "px-3 py-1 text-[10px]", lg: "px-4 py-1.5 text-xs" };
  return <span className={`inline-flex items-center font-medium rounded-full border backdrop-blur-sm ${colors[variant]} ${sizes[size]} ${className}`}>{children}</span>;
};

export const HoneycombStatCard = ({ title, value, change, trend = "up", icon: Icon, className = "" }) => (
  <div className={`${woodenHoneycombTheme.liquidSurface} ${woodenHoneycombTheme.radius.card} p-5 group hover:shadow-[0_0_25px_rgba(251,191,36,0.2)] transition-all ${className}`}>
    <div className="flex justify-between items-start mb-3">
      <div className={`p-2.5 ${woodenHoneycombTheme.honeyGradient} text-yellow-400 ${woodenHoneycombTheme.radius.base} group-hover:scale-105 transition-transform`}>{Icon && <Icon size={18} />}</div>
      <div className={`flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-full ${trend === 'up' ? 'bg-emerald-900/50 text-emerald-300 border border-emerald-700/50' : 'bg-red-900/50 text-red-300 border border-red-700/50'}`}>{change}</div>
    </div>
    <p className="text-yellow-500/60 text-[10px] font-medium uppercase tracking-wide mb-1">{title}</p>
    <h3 className="text-2xl font-bold text-yellow-100">{value}</h3>
  </div>
);

export const HoneycombProgressBar = ({ value, variant = "honey", className = "" }) => {
  const colors = { honey: "from-yellow-400 to-amber-500", amber: "from-amber-500 to-amber-600", gold: "from-yellow-500 to-yellow-600", emerald: "from-emerald-500 to-emerald-600" };
  return <div className={`w-full h-2 ${woodenHoneycombTheme.radius.full} bg-yellow-950/30 overflow-hidden ${className}`}><div className={`h-full bg-gradient-to-r ${colors[variant]} rounded-full shadow-[0_0_10px_rgba(251,191,36,0.4)] transition-all duration-500`} style={{ width: `${value}%` }} /></div>;
};

export const HoneycombToggle = ({ checked, onChange, label, className = "" }) => (
  <label className={`flex items-center justify-between cursor-pointer ${className}`}>
    <span className="text-sm text-yellow-300">{label}</span>
    <div className={`relative w-12 h-6 ${woodenHoneycombTheme.radius.full} ${checked ? 'bg-gradient-to-r from-yellow-400 to-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.5)]' : 'bg-yellow-900/40'} transition-all duration-300`}>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <div className={`absolute top-1 left-1 w-4 h-4 ${woodenHoneycombTheme.radius.full} bg-yellow-200 shadow-md transition-all duration-300 ${checked ? 'translate-x-6' : ''}`} />
    </div>
  </label>
);

export const HoneycombSkeleton = ({ className = "" }) => <div className={`${woodenHoneycombTheme.radius.base} ${woodenHoneycombTheme.holographic} animate-pulse ${className}`} />;

export const HoneycombSpinner = ({ size = "md", className = "" }) => {
  const sizes = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" };
  return <div className={`${sizes[size]} animate-spin ${className}`}><div className="w-full h-full border-2 border-yellow-800 border-t-yellow-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]" /></div>;
};

export const HoneycombModal = ({ isOpen, onClose, title, children, className = "" }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full max-w-lg mx-4 ${woodenHoneycombTheme.radius.large} ${woodenHoneycombTheme.liquidGlass} border border-yellow-700/45 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(251,191,36,0.1)] ${className}`}>
        {title && <div className="flex items-center justify-between p-5 border-b border-yellow-900/50"><h3 className="text-lg font-semibold text-yellow-100">{title}</h3><button onClick={onClose} className="p-1.5 hover:bg-yellow-900/50 rounded-lg"><svg size={18} className="text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>}
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export const HoneycombBackground = ({ className = "" }) => (
  <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
    <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-br from-yellow-500/15 via-amber-600/10 to-yellow-500/15 blur-[100px] animate-pulse" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-gradient-to-tr from-amber-600/15 via-yellow-500/10 to-amber-600/15 blur-[100px]" />
    <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent blur-[80px]" />
  </div>
);

export const HoneycombPattern = ({ className = "" }) => (
  <div className={`absolute inset-0 opacity-30 ${woodenHoneycombTheme.honeySurface} ${className}`} />
);
