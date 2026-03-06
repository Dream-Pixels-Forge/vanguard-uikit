import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { theme } from '../../theme';

export const StatCard = ({
  title,
  value,
  change,
  trend = "up",
  icon: Icon,
  className = ""
}) => (
  <div className={`${theme.liquidSurface} ${theme.radius.card} p-6 group hover:bg-gradient-to-br hover:from-white/[0.1] hover:via-white/[0.05] hover:to-white/[0.02] ${theme.animation.slow} ${className}`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 ${theme.holographic} text-blue-400 rounded-xl group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white ${theme.animation.liquid} shadow-[0_4px_12px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]`}>
        {Icon && <Icon size={20} />}
      </div>
      <div className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${trend === 'up' ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 text-emerald-300 border border-emerald-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' : 'bg-gradient-to-br from-rose-500/20 to-rose-500/10 text-rose-300 border border-rose-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'}`}>
        {trend === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
        {change}
      </div>
    </div>
    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{title}</p>
    <h3 className="text-3xl font-bold tracking-tighter group-hover:translate-x-1 transition-transform bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{value}</h3>
  </div>
);
