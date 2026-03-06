import React from 'react';
import { theme } from '../../theme';

export const ProgressBar = ({ value, variant = "blue", size = "md", showLabel = false, className = "" }) => {
  const variants = {
    blue: "from-blue-500 to-blue-600 shadow-[0_2px_12px_rgba(59,130,246,0.4)]",
    emerald: "from-emerald-500 to-emerald-600 shadow-[0_2px_12px_rgba(16,185,129,0.4)]",
    rose: "from-rose-500 to-rose-600 shadow-[0_2px_12px_rgba(244,63,94,0.4)]",
    amber: "from-amber-500 to-amber-600 shadow-[0_2px_12px_rgba(245,158,11,0.4)]",
    purple: "from-purple-500 to-purple-600 shadow-[0_2px_12px_rgba(168,85,247,0.4)]",
    gradient: "from-blue-500 via-purple-500 to-pink-500 shadow-[0_2px_12px_rgba(59,130,246,0.4)]"
  };

  const sizes = { sm: "h-1", md: "h-2", lg: "h-3" };

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between mb-2">
          <span className="text-[9px] font-bold text-white/60">Progress</span>
          <span className="text-[9px] font-bold text-white/40">{value}%</span>
        </div>
      )}
      <div className={`w-full ${theme.radius.full} ${theme.neuromorphic} overflow-hidden`}>
        <div className={`h-full ${sizes[size]} bg-gradient-to-r ${variants[variant]} rounded-full transition-all duration-700`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
};

export const CircularProgress = ({ value, variant = "blue", size = 64, className = "" }) => {
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  const variantColors = {
    blue: "text-blue-500",
    emerald: "text-emerald-500",
    rose: "text-rose-500",
    amber: "text-amber-500",
    purple: "text-purple-500"
  };

  const glowColors = {
    blue: 'rgba(59,130,246,0.4)',
    emerald: 'rgba(16,185,129,0.4)',
    rose: 'rgba(244,63,94,0.4)',
    amber: 'rgba(245,158,11,0.4)',
    purple: 'rgba(168,85,247,0.4)'
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle className="text-white/5" strokeWidth={strokeWidth} stroke="currentColor" fill="transparent" r={radius} cx={size / 2} cy={size / 2} />
        <circle className={`${variantColors[variant]} transition-all duration-700`} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" stroke="currentColor" fill="transparent" r={radius} cx={size / 2} cy={size / 2} style={{ filter: `drop-shadow(0 2px 8px ${glowColors[variant]})` }} />
      </svg>
      <span className="absolute text-[9px] font-bold text-white/70">{value}%</span>
    </div>
  );
};
