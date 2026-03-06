import React from 'react';
import { theme } from '../../theme';

export const IconButton = ({
  icon: Icon,
  variant = "glass",
  size = "md",
  className = "",
  ...props
}) => {
  const variants = {
    glass: "bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-xl border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-gradient-to-br hover:from-white/15 hover:via-white/8 hover:to-white/[0.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]",
    primary: "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_4px_12px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)]",
    ghost: "bg-transparent hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
  };

  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  return (
    <button
      className={`${theme.radius.base} flex items-center justify-center ${theme.animation.liquid} ${variants[variant]} ${sizes[size]} ${className} overflow-hidden`}
      {...props}
    >
      <div className="absolute inset-0 rounded-[inherit] border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <Icon size={18} className="relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
    </button>
  );
};
