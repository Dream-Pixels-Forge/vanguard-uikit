import React from 'react';
import { woodenTheme, woodenButtonVariants } from '../../theme/wooden';

export const WoodenButton = ({
  children,
  icon: Icon,
  variant = "wood",
  size = "md",
  className = "",
  ...props
}) => {
  const sizes = {
    sm: "px-3 py-1.5 text-[10px]",
    md: "px-5 py-2.5 text-xs",
    lg: "px-7 py-3 text-sm"
  };

  return (
    <button
      className={`group relative ${woodenTheme.radius.base} font-semibold flex items-center justify-center gap-2 ${woodenTheme.animation.slow} active:scale-95 ${woodenButtonVariants[variant]} ${sizes[size]} ${className} overflow-hidden`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10">{children}</span>
      {Icon && <Icon size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

export const WoodenIconButton = ({
  icon: Icon,
  variant = "glass",
  size = "md",
  className = "",
  ...props
}) => {
  const variants = {
    glass: "bg-gradient-to-br from-stone-600/30 via-stone-700/20 to-stone-800/30 backdrop-blur-md border border-stone-500/30 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.4)]",
    accent: "bg-gradient-to-br from-stone-500 to-stone-600 text-stone-100 shadow-[2px_2px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]",
    ghost: "bg-transparent hover:bg-stone-700/30",
    wood: "bg-gradient-to-br from-amber-900/40 via-stone-800/30 to-amber-900/40 border border-amber-900/30 hover:border-amber-700/40"
  };

  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  return (
    <button
      className={`${woodenTheme.radius.base} flex items-center justify-center ${woodenTheme.animation.liquid} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <Icon size={18} className="relative z-10 group-hover:scale-110 transition-transform" />
    </button>
  );
};

export const WoodenCard = ({
  children,
  title,
  description,
  icon: Icon,
  variant = "wood",
  hoverable = true,
  className = "",
  ...props
}) => {
  const variants = {
    default: "bg-[#1c1917] border border-stone-800/50",
    glass: woodenTheme.liquidGlass,
    surface: woodenTheme.liquidSurface,
    wood: "bg-gradient-to-br from-[#1c1917] via-[#292524] to-[#1c1917] border border-stone-700/50 shadow-[4px_4px_16px_rgba(0,0,0,0.4)]",
    pressed: "bg-[#292524] border border-stone-800/50 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.4)]",
    elevated: "bg-gradient-to-br from-[#292524] to-[#44403c] border border-stone-600/40 shadow-lg"
  };

  return (
    <div
      className={`${woodenTheme.radius.large} p-6 ${hoverable ? 'hover:shadow-xl transition-all duration-300' : ''} ${variants[variant]} ${className}`}
      {...props}
    >
      {(title || Icon) && (
        <div className="mb-4">
          {Icon && (
            <div className={`p-3 ${woodenTheme.liquidSurface} ${woodenTheme.radius.base} text-amber-400 mb-3`}>
              <Icon size={22} />
            </div>
          )}
          {title && (
            <h3 className="text-lg font-semibold text-stone-100">{title}</h3>
          )}
          {description && (
            <p className="text-stone-400 text-sm mt-1">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export const WoodenInput = ({
  icon: Icon,
  placeholder,
  className = "",
  ...props
}) => (
  <div className={`flex items-center gap-3 px-4 py-3 ${woodenTheme.liquidSurface} ${woodenTheme.radius.base} focus-within:border-amber-500/40 focus-within:shadow-[0_0_15px_rgba(217,119,6,0.2)] ${woodenTheme.animation.slow} ${className}`}>
    {Icon && <Icon size={16} className="text-stone-500" />}
    <input
      type="text"
      placeholder={placeholder}
      className="flex-1 bg-transparent border-none outline-none text-sm text-stone-200 placeholder:text-stone-600"
      {...props}
    />
  </div>
);

export const WoodenBadge = ({ children, variant = "amber", size = "md", className = "" }) => {
  const colors = {
    amber: "bg-amber-900/40 text-amber-300 border-amber-700/40",
    stone: "bg-stone-700/40 text-stone-300 border-stone-600/40",
    emerald: "bg-emerald-900/40 text-emerald-300 border-emerald-700/40",
    red: "bg-red-900/40 text-red-300 border-red-700/40",
    sky: "bg-sky-900/40 text-sky-300 border-sky-700/40",
    violet: "bg-violet-900/40 text-violet-300 border-violet-700/40"
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[9px]",
    md: "px-3 py-1 text-[10px]",
    lg: "px-4 py-1.5 text-xs"
  };

  return (
    <span className={`inline-flex items-center font-medium rounded-full border backdrop-blur-sm ${colors[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

export const WoodenStatCard = ({
  title,
  value,
  change,
  trend = "up",
  icon: Icon,
  className = ""
}) => (
  <div className={`${woodenTheme.liquidSurface} ${woodenTheme.radius.card} p-5 group hover:shadow-lg transition-all ${className}`}>
    <div className="flex justify-between items-start mb-3">
      <div className={`p-2.5 ${woodenTheme.woodGradient} text-amber-400 ${woodenTheme.radius.base} group-hover:scale-105 transition-transform`}>
        {Icon && <Icon size={18} />}
      </div>
      <div className={`flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-full ${trend === 'up' ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-700/40' : 'bg-red-900/40 text-red-300 border border-red-700/40'}`}>
        {change}
      </div>
    </div>
    <p className="text-stone-500 text-[10px] font-medium uppercase tracking-wide mb-1">{title}</p>
    <h3 className="text-2xl font-bold text-stone-100">{value}</h3>
  </div>
);

export const WoodenProgressBar = ({ value, variant = "amber", className = "" }) => {
  const colors = {
    amber: "from-amber-600 to-amber-700",
    stone: "from-stone-500 to-stone-600",
    emerald: "from-emerald-600 to-emerald-700",
    red: "from-red-600 to-red-700"
  };

  return (
    <div className={`w-full h-2 ${woodenTheme.radius.full} bg-stone-800 overflow-hidden ${className}`}>
      <div
        className={`h-full bg-gradient-to-r ${colors[variant]} rounded-full transition-all duration-500`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export const WoodenToggle = ({ checked, onChange, label, className = "" }) => (
  <label className={`flex items-center justify-between cursor-pointer ${className}`}>
    <span className="text-sm text-stone-300">{label}</span>
    <div className={`relative w-12 h-6 ${woodenTheme.radius.full} ${checked ? 'bg-gradient-to-r from-amber-600 to-amber-700' : 'bg-stone-700'} transition-all duration-300`}>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <div className={`absolute top-1 left-1 w-4 h-4 ${woodenTheme.radius.full} bg-stone-200 shadow-md transition-all duration-300 ${checked ? 'translate-x-6' : ''}`} />
    </div>
  </label>
);

export const WoodenSkeleton = ({ className = "" }) => (
  <div className={`${woodenTheme.radius.base} ${woodenTheme.holographic} animate-pulse ${className}`} />
);

export const WoodenSpinner = ({ size = "md", className = "" }) => {
  const sizes = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" };
  return (
    <div className={`${sizes[size]} animate-spin ${className}`}>
      <div className="w-full h-full border-2 border-stone-700 border-t-amber-500 rounded-full" />
    </div>
  );
};

export const WoodenModal = ({ isOpen, onClose, title, children, className = "" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full max-w-lg mx-4 ${woodenTheme.radius.large} ${woodenTheme.liquidGlass} border border-stone-600/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${className}`}>
        {title && (
          <div className="flex items-center justify-between p-5 border-b border-stone-700/50">
            <h3 className="text-lg font-semibold text-stone-100">{title}</h3>
            <button onClick={onClose} className="p-1.5 hover:bg-stone-700/50 rounded-lg transition-colors">
              <svg size={18} className="text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export const WoodenDropdown = ({ trigger, children, className = "" }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`relative ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className={`absolute top-full mt-2 left-0 z-50 min-w-[180px] ${woodenTheme.liquidGlass} ${woodenTheme.radius.large} border border-stone-600/30 shadow-[0_8px_24px_rgba(0,0,0,0.4)]`}>
            <div className="p-2">{children}</div>
          </div>
        </>
      )}
    </div>
  );
};

import React from 'react';

export const WoodenTooltip = ({ children, content, className = "" }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 px-3 py-1.5 bg-stone-800 border border-stone-600/50 rounded-lg text-xs text-stone-300 shadow-lg whitespace-nowrap">
          {content}
        </div>
      )}
    </div>
  );
};

export const WoodenDivider = ({ className = "" }) => (
  <div className={`h-px bg-stone-700/50 ${className}`} />
);

export const WoodenBackground = ({ className = "" }) => (
  <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
    <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-br from-amber-900/20 via-stone-800/15 to-stone-900/20 blur-[100px]" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-gradient-to-tr from-stone-800/20 via-amber-900/10 to-stone-800/20 blur-[100px]" />
    <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-gradient-to-br from-amber-800/10 via-transparent to-transparent blur-[80px]" />
  </div>
);
