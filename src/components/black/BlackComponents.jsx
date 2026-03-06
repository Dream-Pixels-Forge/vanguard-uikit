import React from 'react';
import { woodenBlackTheme, blackButtonVariants, blackCardVariants } from '../../theme/woodenBlack';

export const BlackButton = ({ children, icon: Icon, variant = "sleek", size = "md", className = "", ...props }) => {
  const sizes = { sm: "px-3 py-1.5 text-[10px]", md: "px-5 py-2.5 text-xs", lg: "px-7 py-3 text-sm" };
  return (
    <button className={`group relative ${woodenBlackTheme.radius.base} font-semibold flex items-center justify-center gap-2 ${woodenBlackTheme.animation.slow} active:scale-95 ${blackButtonVariants[variant]} ${sizes[size]} ${className}`} {...props}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10">{children}</span>
      {Icon && <Icon size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

export const BlackIconButton = ({ icon: Icon, variant = "glass", size = "md", className = "", ...props }) => {
  const variants = { glass: "bg-gradient-to-br from-zinc-800/45 via-zinc-900/35 to-zinc-800/45 backdrop-blur-md border border-zinc-700/45", accent: "bg-gradient-to-br from-zinc-500 to-zinc-600 text-zinc-100", ghost: "bg-transparent hover:bg-zinc-800/50", sleek: "bg-zinc-800/80 border border-zinc-700/50" };
  const sizes = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-12 h-12" };
  return <button className={`${woodenBlackTheme.radius.base} flex items-center justify-center ${woodenBlackTheme.animation.sleek} ${variants[variant]} ${sizes[size]} ${className}`} {...props}><Icon size={18} className="relative z-10" /></button>;
};

export const BlackCard = ({ children, title, description, icon: Icon, variant = "sleek", hoverable = true, className = "", ...props }) => (
  <div className={`${woodenBlackTheme.radius.large} p-6 ${hoverable ? 'hover:shadow-xl transition-all duration-300' : ''} ${blackCardVariants[variant]} ${className}`} {...props}>
    {(title || Icon) && <div className="mb-4">{Icon && <div className={`p-3 ${woodenBlackTheme.liquidSurface} ${woodenBlackTheme.radius.base} text-zinc-400 mb-3`}><Icon size={22} /></div>}{title && <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>}{description && <p className="text-zinc-400 text-sm mt-1">{description}</p>}</div>}
    {children}
  </div>
);

export const BlackInput = ({ icon: Icon, placeholder, className = "", ...props }) => (
  <div className={`flex items-center gap-3 px-4 py-3 ${woodenBlackTheme.liquidSurface} ${woodenBlackTheme.radius.base} focus-within:border-zinc-500/50 focus-within:shadow-[0_0_15px_rgba(113,113,122,0.3)] ${woodenBlackTheme.animation.slow} ${className}`}>
    {Icon && <Icon size={16} className="text-zinc-500" />}
    <input type="text" placeholder={placeholder} className="flex-1 bg-transparent border-none outline-none text-sm text-zinc-200 placeholder:text-zinc-600" {...props} />
  </div>
);

export const BlackBadge = ({ children, variant = "zinc", size = "md", className = "" }) => {
  const colors = { zinc: "bg-zinc-800/50 text-zinc-300 border-zinc-700/50", silver: "bg-zinc-700/50 text-zinc-200 border-zinc-600/50", emerald: "bg-emerald-900/50 text-emerald-300 border-emerald-700/50", red: "bg-red-900/50 text-red-300 border-red-700/50" };
  const sizes = { sm: "px-2 py-0.5 text-[9px]", md: "px-3 py-1 text-[10px]", lg: "px-4 py-1.5 text-xs" };
  return <span className={`inline-flex items-center font-medium rounded-full border backdrop-blur-sm ${colors[variant]} ${sizes[size]} ${className}`}>{children}</span>;
};

export const BlackStatCard = ({ title, value, change, trend = "up", icon: Icon, className = "" }) => (
  <div className={`${woodenBlackTheme.liquidSurface} ${woodenBlackTheme.radius.card} p-5 group hover:shadow-lg transition-all ${className}`}>
    <div className="flex justify-between items-start mb-3">
      <div className={`p-2.5 ${woodenBlackTheme.woodGradient} text-zinc-400 ${woodenBlackTheme.radius.base} group-hover:scale-105 transition-transform`}>{Icon && <Icon size={18} />}</div>
      <div className={`flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-full ${trend === 'up' ? 'bg-emerald-900/50 text-emerald-300 border border-emerald-700/50' : 'bg-red-900/50 text-red-300 border border-red-700/50'}`}>{change}</div>
    </div>
    <p className="text-zinc-500 text-[10px] font-medium uppercase tracking-wide mb-1">{title}</p>
    <h3 className="text-2xl font-bold text-zinc-100">{value}</h3>
  </div>
);

export const BlackProgressBar = ({ value, variant = "zinc", className = "" }) => {
  const colors = { zinc: "from-zinc-500 to-zinc-600", silver: "from-zinc-400 to-zinc-500", emerald: "from-emerald-500 to-emerald-600", red: "from-red-500 to-red-600" };
  return <div className={`w-full h-2 ${woodenBlackTheme.radius.full} bg-zinc-900/60 overflow-hidden ${className}`}><div className={`h-full bg-gradient-to-r ${colors[variant]} rounded-full transition-all duration-500`} style={{ width: `${value}%` }} /></div>;
};

export const BlackToggle = ({ checked, onChange, label, className = "" }) => (
  <label className={`flex items-center justify-between cursor-pointer ${className}`}>
    <span className="text-sm text-zinc-300">{label}</span>
    <div className={`relative w-12 h-6 ${woodenBlackTheme.radius.full} ${checked ? 'bg-gradient-to-r from-zinc-500 to-zinc-600' : 'bg-zinc-800'} transition-all duration-300`}>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <div className={`absolute top-1 left-1 w-4 h-4 ${woodenBlackTheme.radius.full} bg-zinc-200 shadow-md transition-all duration-300 ${checked ? 'translate-x-6' : ''}`} />
    </div>
  </label>
);

export const BlackSkeleton = ({ className = "" }) => <div className={`${woodenBlackTheme.radius.base} ${woodenBlackTheme.holographic} animate-pulse ${className}`} />;

export const BlackSpinner = ({ size = "md", className = "" }) => {
  const sizes = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" };
  return <div className={`${sizes[size]} animate-spin ${className}`}><div className="w-full h-full border-2 border-zinc-800 border-t-zinc-400 rounded-full" /></div>;
};

export const BlackModal = ({ isOpen, onClose, title, children, className = "" }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full max-w-lg mx-4 ${woodenBlackTheme.radius.large} ${woodenBlackTheme.liquidGlass} border border-zinc-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${className}`}>
        {title && <div className="flex items-center justify-between p-5 border-b border-zinc-800"><h3 className="text-lg font-semibold text-zinc-100">{title}</h3><button onClick={onClose} className="p-1.5 hover:bg-zinc-800 rounded-lg"><svg size={18} className="text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>}
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export const BlackBackground = ({ className = "" }) => (
  <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
    <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-br from-zinc-800/20 via-zinc-900/15 to-zinc-800/20 blur-[100px]" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-gradient-to-tr from-zinc-900/20 via-zinc-800/10 to-zinc-900/20 blur-[100px]" />
  </div>
);
