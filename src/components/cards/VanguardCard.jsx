import React from 'react';
import { theme } from '../../theme';

export const VanguardCard = ({
  children,
  title,
  description,
  icon: Icon,
  tag,
  hoverable = true,
  glass = true,
  className = "",
  delay = "0",
  ...props
}) => {
  return (
    <div
      className={`group relative p-[1px] ${theme.radius.xlarge} overflow-hidden ${hoverable ? 'animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms`, ...props.style }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-[spin_8s_linear_infinite_reverse]" style={{ margin: '-100%' }} />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className={`relative z-10 h-full w-full bg-[#0a0a0b] ${glass ? theme.liquidGlass : theme.neuromorphic} p-8 md:p-10 ${theme.radius.xlarge} flex flex-col justify-between`}>
        {(title || Icon || tag) && (
          <div>
            <div className="flex justify-between items-start mb-8">
              {Icon && (
                <div className={`p-4 ${theme.liquidSurface} rounded-2xl text-blue-400 group-hover:scale-110 group-hover:rotate-3 ${theme.animation.liquid} shadow-[0_4px_16px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]`}>
                  <Icon size={24} />
                </div>
              )}
              {tag && (
                <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md">
                  {tag}
                </span>
              )}
            </div>
            {title && (
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{title}</h3>
            )}
            {description && (
              <p className="text-white/40 leading-relaxed text-sm font-medium">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
