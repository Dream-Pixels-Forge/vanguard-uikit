import React from 'react';
import { Star, Download, Eye, Heart, Share2, ExternalLink, Copy, Check } from 'lucide-react';
import { theme } from '../../theme';

export const ProductCard = ({ image, title, price, rating = 0, reviews = 0, tags = [], className = "" }) => {
  const [liked, setLiked] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${theme.radius.xlarge} ${theme.liquidSurface} overflow-hidden group ${className}`}>
      <div className="relative aspect-square overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <button className={`flex-1 py-2 bg-white/20 backdrop-blur-md ${theme.radius.base} text-white text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/30 transition-all`}>
              <Eye size={14} /> View
            </button>
            <button onClick={() => setLiked(!liked)} className={`p-2 ${theme.radius.base} ${liked ? 'bg-rose-500' : 'bg-white/20 backdrop-blur-md'} transition-all`}>
              <Heart size={14} className={liked ? 'text-white fill-white' : 'text-white'} />
            </button>
            <button onClick={handleShare} className="p-2 bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all">
              {copied ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} className="text-white" />}
            </button>
          </div>
        </div>
        {tags.length > 0 && (
          <div className="absolute top-4 left-4 flex gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-500/80 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold text-white mb-2 truncate">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-white">{price}</span>
          <div className="flex items-center gap-1">
            <Star size={12} className="text-amber-400 fill-amber-400" />
            <span className="text-[10px] text-white/60">{rating} ({reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FileCard = ({ name, size, type, icon: Icon, className = "" }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center gap-4 p-4 ${theme.radius.xlarge} ${theme.liquidSurface} cursor-pointer transition-all ${hovered ? 'bg-gradient-to-br from-white/[0.08] to-transparent' : ''} ${className}`}
    >
      <div className={`w-12 h-12 ${theme.radius.base} ${theme.holographic} flex items-center justify-center`}>
        <Icon size={24} className="text-blue-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-white truncate">{name}</p>
        <p className="text-[10px] text-white/40">{size} • {type}</p>
      </div>
      {hovered && (
        <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
          <Download size={16} className="text-white/60" />
        </button>
      )}
    </div>
  );
};

export const CodeBlock = ({ code, language = "javascript", className = "" }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative ${theme.radius.xlarge} ${theme.neuromorphic} overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
        <span className="text-[10px] text-white/40 font-mono uppercase">{language}</span>
        <button onClick={handleCopy} className="text-white/40 hover:text-white transition-colors">
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-xs font-mono text-white/70 whitespace-pre">{code}</code>
      </pre>
    </div>
  );
};

export const Callout = ({ title, message, variant = "info", icon: Icon, className = "" }) => {
  const variants = {
    info: { bg: 'from-blue-500/10', border: 'border-blue-400/30', text: 'text-blue-300', icon: 'text-blue-400' },
    success: { bg: 'from-emerald-500/10', border: 'border-emerald-400/30', text: 'text-emerald-300', icon: 'text-emerald-400' },
    warning: { bg: 'from-amber-500/10', border: 'border-amber-400/30', text: 'text-amber-300', icon: 'text-amber-400' },
    error: { bg: 'from-rose-500/10', border: 'border-rose-400/30', text: 'text-rose-300', icon: 'text-rose-400' }
  };

  const v = variants[variant];
  const icons = { info: Info, success: CheckCircle, warning: AlertTriangle, error: XCircle };
  const IconComponent = Icon || icons[variant];

  return (
    <div className={`p-4 ${theme.radius.xlarge} bg-gradient-to-br ${v.bg} to-transparent border ${v.border} ${className}`}>
      <div className="flex gap-3">
        <IconComponent size={20} className={v.icon} />
        <div>
          {title && <p className={`text-sm font-bold ${v.text} mb-1`}>{title}</p>}
          <p className="text-xs text-white/60">{message}</p>
        </div>
      </div>
    </div>
  );
};

const { Info, CheckCircle, AlertTriangle, XCircle } = require('lucide-react');

export const Tag = ({ children, removable = false, onRemove, className = "" }) => (
  <span className={`inline-flex items-center gap-1 px-3 py-1 ${theme.radius.full} bg-white/5 text-white/60 text-[9px] font-bold uppercase tracking-wider ${className}`}>
    {children}
    {removable && (
      <button onClick={onRemove} className="ml-1 hover:text-white">
        <X size={12} />
      </button>
    )}
  </span>
);

export const Tags = ({ items, className = "" }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>
    {items.map((item, idx) => (
      <Tag key={idx} removable={item.removable} onRemove={item.onRemove}>{item.label}</Tag>
    ))}
  </div>
);

export const Calendar = ({ date, className = "" }) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [currentDate, setCurrentDate] = React.useState(new Date(date || Date.now()));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div className={`${theme.radius.xlarge} ${theme.liquidSurface} p-4 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-1 hover:bg-white/5 rounded-lg"><ChevronLeft size={16} /></button>
        <span className="text-xs font-bold text-white">{months[month]} {year}</span>
        <button onClick={nextMonth} className="p-1 hover:bg-white/5 rounded-lg"><ChevronRight size={16} /></button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map(day => <span key={day} className="text-[8px] text-white/30 font-bold">{day}</span>)}
        {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
          return (
            <button key={day} className={`p-1 text-[10px] ${isToday ? 'bg-blue-500 text-white rounded-lg' : 'text-white/60 hover:bg-white/5 rounded-lg'}`}>
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const { ChevronLeft, ChevronRight, X } = require('lucide-react');

export const Counter = ({ value = 0, min = 0, max = 100, onChange, className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <button onClick={() => onChange(Math.max(min, value - 1))} className={`w-8 h-8 ${theme.radius.base} ${theme.liquidSurface} flex items-center justify-center hover:bg-white/10`}>
      <Minus size={14} />
    </button>
    <span className="w-12 text-center text-sm font-bold text-white">{value}</span>
    <button onClick={() => onChange(Math.min(max, value + 1))} className={`w-8 h-8 ${theme.radius.base} ${theme.liquidSurface} flex items-center justify-center hover:bg-white/10`}>
      <Plus size={14} />
    </button>
  </div>
);

const { Minus, Plus } = require('lucide-react');

export const Rating = ({ value = 0, max = 5, onChange, className = "" }) => (
  <div className={`flex gap-1 ${className}`}>
    {Array.from({ length: max }).map((_, i) => (
      <button key={i} onClick={() => onChange?.(i + 1)} className="transition-transform hover:scale-110">
        <Star size={16} className={i < value ? 'text-amber-400 fill-amber-400' : 'text-white/20'} />
      </button>
    ))}
  </div>
);

export const Tooltip = ({ children, content, position = "top", className = "" }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const positions = { top: "bottom-full left-1/2 -translate-x-1/2 mb-2", bottom: "top-full left-1/2 -translate-x-1/2 mt-2", left: "right-full top-1/2 -translate-y-1/2 mr-2", right: "left-full top-1/2 -translate-y-1/2 ml-2" };

  return (
    <div className={`relative inline-block ${className}`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && (
        <div className={`absolute ${positions[position]} z-50 px-3 py-1.5 ${theme.radius.base} ${theme.liquidGlass} border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.3)] whitespace-nowrap animate-in fade-in zoom-in-95 duration-200`}>
          <span className="text-[9px] font-bold text-white/70">{content}</span>
        </div>
      )}
    </div>
  );
};
