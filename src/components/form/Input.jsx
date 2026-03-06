import React from 'react';
import { Command, Search, ChevronDown, Check } from 'lucide-react';
import { theme } from '../../theme';

export const Input = ({ icon: Icon, placeholder, className = "", ...props }) => (
  <div className={`flex items-center gap-3 px-5 py-3 ${theme.liquidSurface} rounded-2xl focus-within:border-blue-400/50 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] ${theme.animation.slow} ${className}`}>
    {Icon && <Icon size={16} className="text-white/30" />}
    <input
      type="text"
      placeholder={placeholder}
      className="bg-transparent border-none outline-none text-xs font-bold w-full placeholder:text-white/20"
      {...props}
    />
    <Command size={14} className="text-white/20" />
  </div>
);

export const SearchInput = ({ placeholder = "Search...", className = "" }) => (
  <div className={`flex items-center gap-3 px-5 py-3 ${theme.liquidSurface} rounded-2xl focus-within:border-blue-400/50 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2)] ${theme.animation.slow} ${className}`}>
    <Search size={16} className="text-white/30" />
    <input
      type="text"
      placeholder={placeholder}
      className="bg-transparent border-none outline-none text-xs font-bold w-full md:w-48 placeholder:text-white/20"
    />
    <Command size={14} className="text-white/20" />
  </div>
);

export const Textarea = ({ placeholder, rows = 3, className = "", ...props }) => (
  <div className={`${theme.liquidSurface} rounded-2xl p-4 focus-within:border-blue-400/50 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.2)] ${theme.animation.slow} ${className}`}>
    <textarea
      placeholder={placeholder}
      rows={rows}
      className="w-full bg-transparent border-none outline-none text-xs font-bold placeholder:text-white/20 resize-none"
      {...props}
    />
  </div>
);

export const Select = ({ options, value, onChange, placeholder = "Select...", className = "" }) => (
  <div className={`relative ${theme.liquidSurface} rounded-2xl ${className}`}>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full appearance-none bg-transparent border-none outline-none px-5 py-3 text-xs font-bold text-white cursor-pointer"
    >
      <option value="" className="bg-[#0a0a0b]">{placeholder}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value} className="bg-[#0a0a0b]">{opt.label}</option>
      ))}
    </select>
    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
  </div>
);

export const Toggle = ({ checked, onChange, label, className = "" }) => (
  <label className={`flex items-center justify-between cursor-pointer group ${className}`}>
    <span className="text-xs font-bold text-white/70">{label}</span>
    <div className={`relative w-12 h-6 ${theme.radius.full} ${checked ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_12px_rgba(59,130,246,0.4)]' : theme.neuromorphic} transition-all duration-300`}>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <div className={`absolute top-1 left-1 w-4 h-4 ${theme.radius.full} bg-white shadow-md transition-all duration-300 ${checked ? 'translate-x-6' : ''}`} />
    </div>
  </label>
);

export const Switch = ({ checked, onChange, label, className = "" }) => (
  <label className={`flex items-center gap-3 cursor-pointer group ${className}`}>
    <div className={`relative w-10 h-5 ${theme.radius.full} ${checked ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_12px_rgba(59,130,246,0.4)]' : theme.neuromorphic} transition-all duration-300`}>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <div className={`absolute top-0.5 left-0.5 w-4 h-4 ${theme.radius.full} bg-gradient-to-br from-white to-white/90 shadow-lg transition-all duration-300 ${checked ? 'translate-x-5' : ''}`} />
    </div>
    <span className="text-xs font-bold text-white/70">{label}</span>
  </label>
);

export const Checkbox = ({ checked, onChange, label, className = "" }) => (
  <label className={`flex items-center gap-3 cursor-pointer group ${className}`}>
    <div className={`relative w-5 h-5 ${theme.radius.base} ${checked ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.4)]' : theme.neuromorphic} flex items-center justify-center transition-all duration-300`}>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {checked && <Check size={12} className="text-white" />}
    </div>
    <span className="text-xs font-bold text-white/70">{label}</span>
  </label>
);

export const RadioGroup = ({ options, value, onChange, className = "" }) => (
  <div className={`space-y-3 ${className}`}>
    {options.map((opt, idx) => (
      <label key={idx} className="flex items-center gap-3 cursor-pointer group">
        <div className={`relative w-4 h-4 rounded-full ${value === opt.value ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.4)]' : theme.neuromorphic} flex items-center justify-center transition-all duration-300`}>
          <input type="radio" className="sr-only" name="radio" value={opt.value} checked={value === opt.value} onChange={(e) => onChange(e.target.value)} />
          {value === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
        </div>
        <span className="text-xs font-bold text-white/70">{opt.label}</span>
      </label>
    ))}
  </div>
);

export const Slider = ({ value, onChange, min = 0, max = 100, className = "" }) => (
  <div className={`relative w-full h-2 ${theme.radius.full} ${theme.neuromorphic} ${className}`}>
    <div 
      className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-[0_2px_12px_rgba(59,130,246,0.4)]"
      style={{ width: `${((value - min) / (max - min)) * 100}%` }}
    />
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
    />
    <div 
      className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 ${theme.radius.full} bg-gradient-to-br from-white to-white/90 shadow-lg pointer-events-none transition-all duration-100`}
      style={{ left: `calc(${((value - min) / (max - min)) * 100}% - 10px)` }}
    />
  </div>
);

export const FileUpload = ({ onChange, accept, multiple, className = "" }) => (
  <label className={`flex flex-col items-center justify-center gap-3 p-8 ${theme.liquidSurface} ${theme.radius.xlarge} cursor-pointer hover:bg-gradient-to-br hover:from-white/[0.08] hover:via-white/[0.04] hover:to-white/[0.02] transition-all ${className}`}>
    <Upload size={32} className="text-white/30" />
    <div className="text-center">
      <p className="text-sm font-bold text-white/70">Drop files here or click to upload</p>
      <p className="text-xs text-white/40 mt-1">PNG, JPG, GIF up to 10MB</p>
    </div>
    <input type="file" className="hidden" accept={accept} multiple={multiple} onChange={onChange} />
  </label>
);

import { Upload } from 'lucide-react';

export const ColorPicker = ({ value, onChange, className = "" }) => (
  <div className={`flex items-center gap-3 p-3 ${theme.liquidSurface} ${theme.radius.base} ${className}`}>
    <input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-8 h-8 rounded-lg bg-transparent border-none cursor-pointer"
    />
    <span className="text-xs font-bold text-white/60 uppercase">{value}</span>
  </div>
);

export const DatePicker = ({ value, onChange, className = "" }) => (
  <div className={`flex items-center gap-3 px-5 py-3 ${theme.liquidSurface} ${theme.radius.base} ${className}`}>
    <Calendar size={16} className="text-white/30" />
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-transparent border-none outline-none text-xs font-bold text-white/70"
    />
  </div>
);

import { Calendar } from 'lucide-react';

export const TimePicker = ({ value, onChange, className = "" }) => (
  <div className={`flex items-center gap-3 px-5 py-3 ${theme.liquidSurface} ${theme.radius.base} ${className}`}>
    <Clock size={16} className="text-white/30" />
    <input
      type="time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-transparent border-none outline-none text-xs font-bold text-white/70"
    />
  </div>
);

import { Clock } from 'lucide-react';

export const RangeSlider = ({ value, onChange, min = 0, max = 100, className = "" }) => (
  <div className={`relative w-full ${className}`}>
    <div className="flex justify-between mb-2">
      <span className="text-[9px] font-bold text-white/40">{min}</span>
      <span className="text-[9px] font-bold text-white/70">{value}</span>
      <span className="text-[9px] font-bold text-white/40">{max}</span>
    </div>
    <Slider value={value} onChange={onChange} min={min} max={max} />
  </div>
);

export const FormField = ({ label, error, children, className = "" }) => (
  <div className={`space-y-2 ${className}`}>
    {label && <label className="block text-[10px] font-black uppercase tracking-widest text-white/60">{label}</label>}
    {children}
    {error && <p className="text-[9px] text-rose-400">{error}</p>}
  </div>
);

export const InputGroup = ({ prepend, append, children, className = "" }) => (
  <div className={`flex items-center ${theme.liquidSurface} ${theme.radius.base} ${className}`}>
    {prepend && <div className="px-3 text-white/40">{prepend}</div>}
    <div className="flex-1">{children}</div>
    {append && <div className="px-3 text-white/40">{append}</div>}
  </div>
);
