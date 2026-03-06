import React from 'react';

export const Badge = ({ children, variant = "default", size = "md", className = "" }) => {
  const variants = {
    default: "bg-white/5 text-white/60 border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
    blue: "bg-gradient-to-br from-blue-500/20 to-blue-500/10 text-blue-300 border-blue-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
    emerald: "bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 text-emerald-300 border-emerald-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
    rose: "bg-gradient-to-br from-rose-500/20 to-rose-500/10 text-rose-300 border-rose-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
    amber: "bg-gradient-to-br from-amber-500/20 to-amber-500/10 text-amber-300 border-amber-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
    purple: "bg-gradient-to-br from-purple-500/20 to-purple-500/10 text-purple-300 border-purple-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[8px]",
    md: "px-3 py-1 text-[9px]",
    lg: "px-4 py-1.5 text-[10px]"
  };

  return (
    <span className={`font-black uppercase tracking-widest rounded-full border backdrop-blur-md ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};
