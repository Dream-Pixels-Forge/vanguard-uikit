export const theme = {
  radius: {
    base: "rounded-2xl",
    large: "rounded-[2rem]",
    xlarge: "rounded-[2.5rem]",
    card: "rounded-[2rem]",
    full: "rounded-full",
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    xl: "rounded-3xl"
  },
  glass: "bg-white/5 backdrop-blur-xl border border-white/10",
  liquidGlass: "bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-2xl border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
  neuromorphic: "bg-[#0a0a0b] shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.03)] border border-white/5",
  liquidSurface: "bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
  animation: {
    fast: "transition-all duration-300 ease-out",
    slow: "transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)",
    slower: "transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1)",
    liquid: "transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)",
    bounce: "transition-transform duration-300 cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    elastic: "transition-all duration-500 cubic-bezier(0.68, -0.6, 0.32, 1.6)"
  },
  colors: {
    primary: "bg-blue-600",
    primaryLight: "bg-blue-500",
    primaryDark: "bg-blue-700",
    accent: "text-blue-400",
    accentLight: "text-blue-300",
    accentDark: "text-blue-500",
    success: "text-emerald-400",
    successLight: "text-emerald-300",
    successDark: "text-emerald-500",
    danger: "text-rose-400",
    dangerLight: "text-rose-300",
    dangerDark: "text-rose-500",
    warning: "text-amber-400",
    warningLight: "text-amber-300",
    warningDark: "text-amber-500",
    info: "text-cyan-400",
    infoLight: "text-cyan-300",
    infoDark: "text-cyan-500",
    purple: "text-purple-400",
    pink: "text-pink-400",
    orange: "text-orange-400"
  },
  liquidGradient: "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20",
  holographic: "bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10",
  glows: {
    blue: "shadow-[0_0_20px_rgba(59,130,246,0.5)]",
    purple: "shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    pink: "shadow-[0_0_20px_rgba(236,72,153,0.5)]",
    emerald: "shadow-[0_0_20px_rgba(16,185,129,0.5)]",
    amber: "shadow-[0_0_20px_rgba(245,158,11,0.5)]",
    rose: "shadow-[0_0_20px_rgba(244,63,94,0.5)]",
    cyan: "shadow-[0_0_20px_rgba(6,182,212,0.5)]"
  },
  borders: {
    subtle: "border-white/5",
    light: "border-white/10",
    medium: "border-white/15",
    strong: "border-white/20",
    accent: "border-blue-500/30"
  },
  backgrounds: {
    primary: "bg-[#0a0a0b]",
    surface: "bg-[#0f0f11]",
    elevated: "bg-[#141416]",
    overlay: "bg-black/80"
  },
  shadows: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.3)]",
    "glow-lg": "shadow-[0_0_60px_rgba(59,130,246,0.4)]",
    inner: "shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]",
    "inner-light": "shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
  },
  fonts: {
    sans: "font-sans",
    mono: "font-mono",
    display: "font-display",
    body: "font-body"
  },
  textSizes: {
    xs: "text-[9px]",
    sm: "text-[10px]",
    base: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
    "2xl": "text-xl",
    "3xl": "text-2xl",
    "4xl": "text-3xl",
    "5xl": "text-4xl"
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

export const createTheme = (overrides = {}) => ({
  ...theme,
  ...overrides
});

export const glassVariants = {
  default: theme.glass,
  liquid: theme.liquidGlass,
  neuromorphic: theme.neuromorphic,
  surface: theme.liquidSurface,
  holographic: theme.holographic
};

export const buttonVariants = {
  primary: "bg-gradient-to-br from-white via-white/90 to-white/80 text-black hover:shadow-[0_0_50px_rgba(255,255,255,0.3),inset_0_1px_2px_rgba(255,255,255,0.5)] border border-white/30",
  accent: "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_8px_24px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:translate-y-[-2px]",
  glass: "bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-gradient-to-br hover:from-white/15 hover:via-white/8 hover:to-white/[0.03] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]",
  ghost: "bg-transparent text-white/60 hover:text-white hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
  danger: "bg-gradient-to-br from-rose-600 to-rose-700 text-white shadow-[0_8px_24px_rgba(244,63,94,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(244,63,94,0.5)] hover:translate-y-[-2px]",
  success: "bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-[0_8px_24px_rgba(16,185,129,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.5)] hover:translate-y-[-2px]",
  warning: "bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-[0_8px_24px_rgba(245,158,11,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.5)] hover:translate-y-[-2px]"
};

export const statusColors = {
  blue: { bg: '#3b82f6', text: 'text-blue-300', border: 'border-blue-400/30', glow: 'rgba(59,130,246,0.5)' },
  emerald: { bg: '#10b981', text: 'text-emerald-300', border: 'border-emerald-400/30', glow: 'rgba(16,185,129,0.5)' },
  rose: { bg: '#f43f5e', text: 'text-rose-300', border: 'border-rose-400/30', glow: 'rgba(244,63,94,0.5)' },
  amber: { bg: '#f59e0b', text: 'text-amber-300', border: 'border-amber-400/30', glow: 'rgba(245,158,11,0.5)' },
  purple: { bg: '#a855f7', text: 'text-purple-300', border: 'border-purple-400/30', glow: 'rgba(168,85,247,0.5)' },
  cyan: { bg: '#06b6d4', text: 'text-cyan-300', border: 'border-cyan-400/30', glow: 'rgba(6,182,212,0.5)' },
  pink: { bg: '#ec4899', text: 'text-pink-300', border: 'border-pink-400/30', glow: 'rgba(236,72,153,0.5)' },
  orange: { bg: '#f97316', text: 'text-orange-300', border: 'border-orange-400/30', glow: 'rgba(249,115,22,0.5)' }
};

export const darkGradients = {
  subtle: "bg-gradient-to-br from-white/5 to-transparent",
  medium: "bg-gradient-to-br from-white/10 to-white/5",
  strong: "bg-gradient-to-br from-white/20 to-white/10",
  primary: "bg-gradient-to-br from-blue-600/20 to-purple-600/20",
  success: "bg-gradient-to-br from-emerald-600/20 to-cyan-600/20",
  danger: "bg-gradient-to-br from-rose-600/20 to-orange-600/20",
  warning: "bg-gradient-to-br from-amber-600/20 to-yellow-600/20"
};

export const animationDelays = {
  none: "delay-0",
  tiny: "delay-75",
  small: "delay-150",
  medium: "delay-300",
  large: "delay-500",
  xl: "delay-700",
  "2xl": "delay-1000"
};

export const backdropBlur = {
  none: "backdrop-blur-none",
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
  xl: "backdrop-blur-xl",
  "2xl": "backdrop-blur-2xl",
  "3xl": "backdrop-blur-3xl"
};
