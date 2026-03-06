import React from 'react';
import { theme } from '../../theme';

export const VanguardButton = ({
  children,
  icon: Icon,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-gradient-to-br from-white via-white/90 to-white/80 text-black hover:shadow-[0_0_50px_rgba(255,255,255,0.3),inset_0_1px_2px_rgba(255,255,255,0.5)] border border-white/30",
    accent: "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_8px_24px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:translate-y-[-2px]",
    glass: "bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-gradient-to-br hover:from-white/15 hover:via-white/8 hover:to-white/[0.03] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]",
    ghost: "bg-transparent text-white/60 hover:text-white hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
    danger: "bg-gradient-to-br from-rose-600 to-rose-700 text-white shadow-[0_8px_24px_rgba(244,63,94,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(244,63,94,0.5)] hover:translate-y-[-2px]"
  };

  const sizes = {
    sm: "px-4 py-2 text-[9px]",
    md: "px-6 py-3.5 text-[10px]",
    lg: "px-8 py-4 text-xs"
  };

  return (
    <button
      className={`group relative ${theme.radius.base} font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 ${theme.animation.slow} active:scale-95 ${variants[variant]} ${sizes[size]} ${className} overflow-hidden`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      <span className="relative z-10">{children}</span>
      {Icon && <Icon size={14} className="group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" />}
    </button>
  );
};
