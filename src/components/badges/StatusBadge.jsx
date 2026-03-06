import React from 'react';
import { theme } from '../../theme';

export const StatusBadge = ({ children, variant = "blue" }) => {
  const variantColors = {
    blue: { bg: 'from-blue-500/20 to-blue-500/10', text: 'text-blue-300', border: 'border-blue-400/30', glow: 'rgba(59,130,246,0.5)', color: '#3b82f6' },
    emerald: { bg: 'from-emerald-500/20 to-emerald-500/10', text: 'text-emerald-300', border: 'border-emerald-400/30', glow: 'rgba(16,185,129,0.5)', color: '#10b981' },
    rose: { bg: 'from-rose-500/20 to-rose-500/10', text: 'text-rose-300', border: 'border-rose-400/30', glow: 'rgba(244,63,94,0.5)', color: '#f43f5e' },
    amber: { bg: 'from-amber-500/20 to-amber-500/10', text: 'text-amber-300', border: 'border-amber-400/30', glow: 'rgba(245,158,11,0.5)', color: '#f59e0b' },
    purple: { bg: 'from-purple-500/20 to-purple-500/10', text: 'text-purple-300', border: 'border-purple-400/30', glow: 'rgba(168,85,247,0.5)', color: '#a855f7' }
  };

  const colors = variantColors[variant];

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.liquidSurface} backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`}>
      <div className={`w-1.5 h-1.5 rounded-full bg-${variant}-500 animate-pulse shadow-[0_0_12px_${colors.glow}]`} style={{
        backgroundColor: colors.color,
        boxShadow: `0 0 12px ${colors.glow}, 0 0 24px ${colors.glow}40`
      }} />
      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/70">{children}</span>
    </div>
  );
};
