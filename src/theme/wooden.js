export const woodenTheme = {
  name: 'wooden-grayish',
  radius: {
    base: "rounded-xl",
    large: "rounded-2xl",
    xlarge: "rounded-3xl",
    card: "rounded-2xl",
    full: "rounded-full",
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    xl: "rounded-2xl"
  },
  glass: "bg-gradient-to-br from-stone-700/40 via-stone-600/30 to-stone-800/40 backdrop-blur-md border border-stone-500/20",
  liquidGlass: "bg-gradient-to-br from-stone-600/30 via-stone-700/20 to-stone-800/30 backdrop-blur-lg border border-stone-500/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]",
  neuromorphic: "bg-[#1c1917] shadow-[6px_6px_12px_rgba(0,0,0,0.4),-4px_-4px_10px_rgba(255,255,255,0.02)] border border-stone-700/50",
  liquidSurface: "bg-gradient-to-br from-stone-600/25 via-stone-700/15 to-stone-800/20 backdrop-blur-md border border-stone-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]",
  woodSurface: "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMWMxY2E3Ii8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMyNjIyMTciIG9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')] bg-[length:4px_4px]",
  woodGrain: "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzFhMTcMTciIG9wYWNpdHk9IjAuNSIvPgo8cGF0aCBkPSJNMCwwIEM1LDAsMTAsNSwxNSw1IEwxNSwxNSBDMTAsMjAsNSwyNSwwLDI1IEwwLDI1IEMtNSwyMCwtMTAsMTUsLTE1LDE1IEwtMTUsMTUgQy0yMCwxMCUsNSwtMjwtMjUsMCBMMCwwIHogTTEwLDEwIEMxMiwxMiwxNCwxNCwxNCwxNCBDMTYsMTYsMTgsMTgsMjAsMjAgTDIwLDIwIEMyMiwyMiwyNCwyNCwyNCwyNCBDMTYsMTYsMTYsMTYsMTYsMTYgTDE2LDE2IEMxNiwxNiwxNiwxNiwxNiwxNiBaIiBmaWxsPSIjMmMyNDE3IiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] bg-[length:20px_20px]",
  animation: {
    fast: "transition-all duration-200 ease-out",
    slow: "transition-all duration-400 ease-in-out",
    slower: "transition-all duration-600 ease-in-out",
    liquid: "transition-all duration-500 ease-out",
    bounce: "transition-transform duration-300 cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    elastic: "transition-all duration-400 cubic-bezier(0.68, -0.6, 0.32, 1.6)"
  },
  colors: {
    primary: "bg-amber-700",
    primaryLight: "bg-amber-600",
    primaryDark: "bg-amber-800",
    accent: "text-amber-400",
    accentLight: "text-amber-300",
    accentDark: "text-amber-500",
    success: "text-emerald-400",
    successLight: "text-emerald-300",
    successDark: "text-emerald-500",
    danger: "text-red-400",
    dangerLight: "text-red-300",
    dangerDark: "text-red-500",
    warning: "text-amber-400",
    warningLight: "text-amber-300",
    warningDark: "text-amber-500",
    info: "text-sky-400",
    infoLight: "text-sky-300",
    infoDark: "text-sky-500",
    purple: "text-violet-400",
    pink: "text-rose-400",
    orange: "text-orange-400"
  },
  liquidGradient: "bg-gradient-to-r from-amber-600/20 via-stone-500/20 to-stone-700/20",
  holographic: "bg-gradient-to-br from-amber-600/15 via-stone-500/15 to-stone-700/15",
  woodGradient: "bg-gradient-to-br from-amber-800/30 via-amber-700/20 to-stone-800/30",
  grainOverlay: "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+CjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iIzFhMTcMTciIG9wYWNpdHk9IjAuMiIvPgo8cGF0aCBkPSJNMTYsMCBMNDgsMCBMNDgsNjQgTDE2LDY0IFoiIGZpbGw9IiMyNjIyMTciIG9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCwxNiBMNjQsMTYgTDY2NCw0OCBMMCw0OCBaIiBmaWxsPSIjMmMyNDE3IiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] bg-[length:64px_64px]",
  glows: {
    amber: "shadow-[0_0_20px_rgba(217,119,6,0.4)]",
    stone: "shadow-[0_0_20px_rgba(120,113,108,0.4)]",
    emerald: "shadow-[0_0_20px_rgba(16,185,129,0.4)]",
    rose: "shadow-[0_0_20px_rgba(244,63,94,0.4)]",
    amberLight: "shadow-[0_0_20px_rgba(251,191,36,0.4)]",
    sky: "shadow-[0_0_20px_rgba(14,165,233,0.4)]",
    violet: "shadow-[0_0_20px_rgba(139,92,246,0.4)]"
  },
  borders: {
    subtle: "border-stone-800/50",
    light: "border-stone-700/40",
    medium: "border-stone-600/30",
    strong: "border-stone-500/30",
    accent: "border-amber-600/40",
    wood: "border-amber-900/30"
  },
  backgrounds: {
    primary: "bg-[#1c1917]",
    surface: "bg-[#292524]",
    elevated: "bg-[#44403c]",
    overlay: "bg-black/70",
    wood: "bg-gradient-to-br from-[#1c1917] to-[#292524]",
    woodLight: "bg-gradient-to-br from-[#292524] to-[#44403c]"
  },
  shadows: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    glow: "shadow-[0_0_30px_rgba(217,119,6,0.3)]",
    "glow-lg": "shadow-[0_0_50px_rgba(217,119,6,0.4)]",
    inner: "shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]",
    "inner-light": "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
    "inner-wood": "shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),inset_0_-1px_0_rgba(255,255,255,0.05)]",
    "wood": "shadow-[4px_4px_16px_rgba(0,0,0,0.4),-2px_-2px_8px_rgba(255,255,255,0.02)]",
    "wood-pressed": "shadow-[inset_2px_2px_6px_rgba(0,0,0,0.4),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]"
  },
  fonts: {
    sans: "font-sans",
    mono: "font-mono",
    display: "font-serif",
    body: "font-sans"
  },
  textSizes: {
    xs: "text-[10px]",
    sm: "text-xs",
    base: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl"
  },
  fontWeights: {
    thin: "font-thin",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black"
  },
  letterSpacings: {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest"
  },
  zIndices: {
    base: "z-0",
    raised: "z-10",
    dropdown: "z-40",
    sticky: "z-50",
    modal: "z-[100]",
    popover: "z-[60]",
    tooltip: "z-[70]",
    toast: "z-[80]"
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  spacing: {
    px: "1px",
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem"
  }
};

export const woodenButtonVariants = {
  primary: "bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-amber-50 hover:shadow-[0_0_30px_rgba(217,119,6,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] border border-amber-700/50",
  accent: "bg-gradient-to-br from-stone-500 via-stone-600 to-stone-700 text-stone-100 shadow-[4px_4px_12px_rgba(0,0,0,0.3),-2px_-2px_8px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(120,113,108,0.4),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:translate-y-[-1px]",
  glass: "bg-gradient-to-br from-stone-600/30 via-stone-700/20 to-stone-800/30 backdrop-blur-md border border-stone-500/30 shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-gradient-to-br hover:from-stone-500/40 hover:via-stone-600/30 hover:to-stone-700/40 hover:shadow-[0_6px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]",
  ghost: "bg-transparent text-stone-400 hover:text-stone-200 hover:bg-gradient-to-br hover:from-stone-700/30 hover:to-transparent hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
  danger: "bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-red-100 shadow-[0_4px_16px_rgba(220,38,38,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] hover:translate-y-[-1px]",
  success: "bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-emerald-100 shadow-[0_4px_16px_rgba(16,185,129,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)] hover:translate-y-[-1px]",
  warning: "bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-amber-100 shadow-[0_4px_16px_rgba(217,119,6,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_6px_20px_rgba(217,119,6,0.4)] hover:translate-y-[-1px]",
  wood: "bg-gradient-to-br from-amber-900/40 via-stone-800/30 to-stone-900/40 text-stone-200 border border-amber-900/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),4px_4px_12px_rgba(0,0,0,0.3)] hover:bg-gradient-to-br hover:from-amber-800/50 hover:via-stone-700/40 hover:to-amber-800/50 hover:shadow-[0_6px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]"
};

export const woodenCardVariants = {
  default: "bg-[#1c1917] border border-stone-800/50 rounded-2xl",
  glass: woodenTheme.liquidGlass,
  surface: woodenTheme.liquidSurface,
  wood: "bg-gradient-to-br from-[#1c1917] via-[#292524] to-[#1c1917] border border-stone-700/50 rounded-2xl shadow-[4px_4px_16px_rgba(0,0,0,0.4),-2px_-2px_8px_rgba(255,255,255,0.02)]",
  pressed: "bg-[#292524] border border-stone-800/50 rounded-2xl shadow-[inset_2px_2px_6px_rgba(0,0,0,0.4),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]",
  elevated: "bg-gradient-to-br from-[#292524] to-[#44403c] border border-stone-600/40 rounded-2xl shadow-lg"
};

export const woodenStatusColors = {
  amber: { bg: '#d97706', text: 'text-amber-300', border: 'border-amber-500/40', glow: 'rgba(217,119,6,0.5)' },
  stone: { bg: '#78716c', text: 'text-stone-300', border: 'border-stone-400/40', glow: 'rgba(120,113,108,0.5)' },
  emerald: { bg: '#10b981', text: 'text-emerald-300', border: 'border-emerald-400/40', glow: 'rgba(16,185,129,0.5)' },
  red: { bg: '#ef4444', text: 'text-red-300', border: 'border-red-400/40', glow: 'rgba(239,68,68,0.5)' },
  amberLight: { bg: '#fbbf24', text: 'text-amber-200', border: 'border-amber-300/40', glow: 'rgba(251,191,36,0.5)' },
  sky: { bg: '#0ea5e9', text: 'text-sky-300', border: 'border-sky-400/40', glow: 'rgba(14,165,233,0.5)' },
  violet: { bg: '#8b5cf6', text: 'text-violet-300', border: 'border-violet-400/40', glow: 'rgba(139,92,246,0.5)' },
  rose: { bg: '#f43f5e', text: 'text-rose-300', border: 'border-rose-400/40', glow: 'rgba(244,63,94,0.5)' }
};

export const woodenDarkGradients = {
  subtle: "bg-gradient-to-br from-stone-800/30 to-transparent",
  medium: "bg-gradient-to-br from-stone-700/40 to-stone-800/30",
  strong: "bg-gradient-to-br from-stone-600/50 to-stone-700/40",
  wood: "bg-gradient-to-br from-amber-900/30 via-stone-800/20 to-stone-900/30",
  amber: "bg-gradient-to-br from-amber-700/20 to-stone-800/20",
  ember: "bg-gradient-to-br from-amber-600/20 via-orange-700/10 to-red-800/20"
};

export const woodenAnimations = {
  grain: "animate-[grain_8s_steps(10)_infinite]",
  fade: "animate-[fadeIn_0.5s_ease-in-out]",
  slide: "animate-[slideIn_0.4s_ease-out]",
  pulse: "animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]",
  shimmer: "animate-[shimmer_2s_linear_infinite]"
};

export const createWoodenTheme = (overrides = {}) => ({
  ...woodenTheme,
  ...overrides
});

export const useWoodenTheme = () => woodenTheme;

export default woodenTheme;
