import React from 'react';
import { Box, ChevronRight, Cpu, Layers, User, MoreHorizontal } from 'lucide-react';
import { theme } from '../../theme';

export const WorkspaceSelector = ({ name = "Vanguard HQ", plan = "Workspace Pro", icon: Icon = Box, className = "" }) => (
  <div className={`flex items-center justify-between p-3 ${theme.liquidSurface} rounded-2xl border border-white/10 hover:border-blue-400/30 transition-colors cursor-pointer group ${className}`}>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white shadow-[0_4px_12px_rgba(59,130,246,0.4)]">
        <Icon size={16} />
      </div>
      <div>
        <p className="text-[11px] font-black uppercase tracking-tighter">{name}</p>
        <p className="text-[9px] text-white/30 font-bold">{plan}</p>
      </div>
    </div>
    <ChevronRight size={14} className="text-white/20 group-hover:text-white transition-colors" />
  </div>
);

export const Avatar = ({ src, alt = "Avatar", size = "md", className = "" }) => {
  const sizes = { sm: "w-8 h-8 rounded-lg", md: "w-10 h-10 rounded-xl", lg: "w-12 h-12 rounded-2xl" };
  const fallbackInitials = alt ? alt.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : '?';

  return (
    <div className={`${theme.radius.base} bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-[2px] cursor-pointer hover:rotate-6 ${theme.animation.liquid} shadow-[0_4px_16px_rgba(59,130,246,0.3)] ${sizes[size]} ${className}`}>
      <div className={`w-full h-full ${theme.radius.base} bg-black flex items-center justify-center overflow-hidden`}>
        {src ? <img src={src} alt={alt} className="w-full h-full object-cover" /> : <span className="text-white/70 text-xs font-bold">{fallbackInitials}</span>}
      </div>
    </div>
  );
};

export const AvatarGroup = ({ avatars, max = 4, size = "md", className = "" }) => {
  const visible = avatars.slice(0, max);
  const remaining = avatars.length - max;
  const sizes = { sm: "w-6 h-6 text-[8px]", md: "w-8 h-8 text-[10px]", lg: "w-10 h-10 text-xs" };

  return (
    <div className={`flex -space-x-2 ${className}`}>
      {visible.map((avatar, idx) => (
        <Avatar key={idx} src={avatar.src} alt={avatar.alt} size={size} className="ring-2 ring-black" />
      ))}
      {remaining > 0 && (
        <div className={`${sizes[size]} ${theme.radius.base} bg-white/10 flex items-center justify-center ring-2 ring-black`}>
          <span className="text-white/70 font-bold">+{remaining}</span>
        </div>
      )}
    </div>
  );
};

export const UpgradeCard = ({ version = "v5.4", title, buttonText = "Upgrade", className = "" }) => (
  <div className={`mt-auto p-6 ${theme.radius.xlarge} ${theme.holographic} border border-white/10 relative overflow-hidden group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
    <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
      <Cpu size={100} />
    </div>
    <p className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-2">Engine {version}</p>
    <p className="text-sm font-bold mb-4 relative z-10">{title || "Optimize your calculations with native AI."}</p>
    <button className="w-full py-3 bg-gradient-to-br from-white via-white/90 to-white/80 text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gradient-to-br hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 hover:text-white transition-all shadow-xl shadow-black/20 shadow-[0_8px_24px_rgba(59,130,246,0.3)]">
      {buttonText}
    </button>
  </div>
);

export const BarChart = ({ data = [60, 40, 85, 50, 95, 70, 45, 100, 80, 55, 90, 65, 75, 50], height = 288, className = "" }) => (
  <div className="flex items-end gap-3 px-2" style={{ height }}>
    {data.map((h, i) => (
      <div key={i} className="flex-1 group/bar relative h-full flex items-end">
        <div className="w-full bg-gradient-to-t from-blue-600/20 via-blue-500/40 to-purple-500/60 group-hover/bar:to-blue-400 transition-all duration-500 rounded-t-lg shadow-[0_0_20px_rgba(59,130,246,0.2)]" style={{ height: `${h}%` }} />
        <div className="absolute inset-x-0 bottom-0 bg-blue-500/30 blur-xl opacity-0 group-hover/bar:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
      </div>
    ))}
  </div>
);

export const LineChart = ({ data = [], height = 200, className = "" }) => {
  const max = Math.max(...data);
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${height - (v / max) * height}`).join(' ');

  return (
    <svg className={`w-full ${className}`} viewBox={`0 0 100 ${height}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
          <stop offset="100%" stopColor="rgba(168,85,247,0.5)" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke="url(#lineGradient)" strokeWidth="2" points={points} />
      {data.map((v, i) => (
        <circle key={i} cx={(i / (data.length - 1)) * 100} cy={height - (v / max) * height} r="2" fill="#3b82f6" className="group-hover:r-3 transition-all" />
      ))}
    </svg>
  );
};

export const BackgroundDecor = ({ className = "" }) => (
  <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
    <div className="absolute top-[-15%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-pink-600/10 blur-[140px] rounded-full animate-pulse" />
    <div className="absolute bottom-[-15%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-purple-600/15 via-pink-600/10 to-blue-600/10 blur-[140px] rounded-full opacity-50" />
    <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
  </div>
);

export const GlassPanel = ({ children, className = "", radius = "large", ...props }) => {
  const radii = { base: "rounded-2xl", large: "rounded-[2rem]", xlarge: "rounded-[2.5rem]" };
  return (
    <div className={`${theme.liquidGlass} ${radii[radius]} p-6 md:p-10 ${className} shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]`} {...props}>
      {children}
    </div>
  );
};

export const Card = ({ children, hoverable = true, glass = true, className = "", ...props }) => (
  <div className={`${theme.radius.xlarge} ${glass ? theme.liquidGlass : theme.neuromorphic} p-6 ${hoverable ? 'hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all' : ''} ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={`pb-4 border-b border-white/5 ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = "" }) => (
  <div className={`py-4 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = "" }) => (
  <div className={`pt-4 border-t border-white/5 ${className}`}>{children}</div>
);

export const ProjectRow = ({ name, status, progress, category, className = "" }) => (
  <div className={`flex items-center justify-between p-4 ${theme.radius.base} hover:${theme.liquidSurface} transition-all border border-transparent hover:border-white/5 group ${className}`}>
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 ${theme.radius.base} ${theme.liquidSurface} flex items-center justify-center border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`}>
        <Layers size={18} className="text-blue-400" />
      </div>
      <div>
        <p className="text-sm font-bold tracking-tight">{name}</p>
        <p className="text-[10px] font-black uppercase tracking-widest text-white/30">{category}</p>
      </div>
    </div>
    <div className="flex items-center gap-8">
      <div className="hidden md:block">
        <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-all duration-700" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${status === 'Active' || status === 'active' ? 'border-emerald-400/30 text-emerald-300 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' : 'border-white/10 text-white/40'}`}>
        {status}
      </span>
      <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <MoreHorizontal size={16} />
      </button>
    </div>
  </div>
);

export const AlertItem = ({ title, time, color = "blue", className = "" }) => {
  const colors = { blue: { bg: '#3b82f6', glow: 'rgba(59,130,246,0.5)' }, rose: { bg: '#f43f5e', glow: 'rgba(244,63,94,0.5)' }, emerald: { bg: '#10b981', glow: 'rgba(16,185,129,0.5)' } };
  const c = colors[color] || colors.blue;
  
  return (
    <div className={`p-4 ${theme.radius.base} ${theme.neuromorphic} flex justify-between items-center group cursor-pointer hover:bg-gradient-to-br hover:from-white/[0.06] hover:via-white/[0.03] hover:to-transparent transition-all ${className}`}>
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c.bg, boxShadow: `0 0 10px ${c.glow}` }} />
        <p className="text-xs font-bold tracking-tight">{title}</p>
      </div>
      <span className="text-[9px] font-black text-white/20 uppercase">{time}</span>
    </div>
  );
};

export const UserCard = ({ name, role, avatar, status = "online", className = "" }) => (
  <div className={`flex items-center gap-4 p-4 ${theme.liquidSurface} ${theme.radius.xlarge} ${className}`}>
    <Avatar src={avatar} alt={name} />
    <div className="flex-1">
      <p className="text-sm font-bold text-white">{name}</p>
      <p className="text-[10px] text-white/40">{role}</p>
    </div>
    <div className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-white/20'}`} />
  </div>
);

export const SplitView = ({ left, right, className = "" }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
    <div>{left}</div>
    <div>{right}</div>
  </div>
);

export const SplitPane = ({ children, defaultSize = 50, className = "" }) => (
  <div className={`flex ${className}`}>
    {children}
  </div>
);
