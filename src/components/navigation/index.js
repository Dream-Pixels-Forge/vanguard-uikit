import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { theme } from '../../theme';

export const Stepper = ({ steps, currentStep = 0, onStepClick, className = "" }) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <div className="flex flex-col items-center">
            <button
              onClick={() => onStepClick?.(idx)}
              disabled={idx > currentStep && !onStepClick}
              className={`w-10 h-10 ${theme.radius.base} flex items-center justify-center transition-all ${
                idx < currentStep ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white' :
                idx === currentStep ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-[0_4px_16px_rgba(59,130,246,0.4)]' :
                'bg-white/5 text-white/30'
              }`}
            >
              {idx < currentStep ? <Check size={18} /> : idx + 1}
            </button>
            <span className={`mt-2 text-[10px] font-bold uppercase tracking-wider ${idx <= currentStep ? 'text-white' : 'text-white/30'}`}>
              {step}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-4 ${idx < currentStep ? 'bg-gradient-to-r from-emerald-500 to-blue-500' : 'bg-white/10'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export const Timeline = ({ items, className = "" }) => (
  <div className={`space-y-6 ${className}`}>
    {items.map((item, idx) => (
      <div key={idx} className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className={`w-3 h-3 ${theme.radius.full} ${item.completed ? 'bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]' : 'bg-white/20'}`} />
          {idx < items.length - 1 && <div className="w-px h-full bg-white/10 mt-2" />}
        </div>
        <div className="flex-1 pb-6">
          <p className="text-xs font-bold text-white">{item.title}</p>
          <p className="text-[10px] text-white/40 mt-1">{item.description}</p>
          {item.time && <span className="text-[9px] text-white/20 mt-2 block">{item.time}</span>}
        </div>
      </div>
    ))}
  </div>
);

export const TimelineItem = ({ title, description, time, icon: Icon, completed = false, className = "" }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className={`w-3 h-3 ${theme.radius.full} ${completed ? 'bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]' : 'bg-white/20'}`} />
      <div className="w-px h-full bg-white/10 mt-2" />
    </div>
    <div className="flex-1 pb-6">
      <p className="text-xs font-bold text-white">{title}</p>
      {description && <p className="text-[10px] text-white/40 mt-1">{description}</p>}
      {time && <span className="text-[9px] text-white/20 mt-2 block">{time}</span>}
    </div>
  </div>
);

export const Carousel = ({ children, className = "" }) => {
  const [current, setCurrent] = useState(0);
  const items = React.Children.toArray(children);

  const next = () => setCurrent((current + 1) % items.length);
  const prev = () => setCurrent((current - 1 + items.length) % items.length);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
          {items.map((item, idx) => <div key={idx} className="w-full flex-shrink-0">{item}</div>)}
        </div>
      </div>
      <button onClick={prev} className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 ${theme.radius.base} ${theme.liquidSurface}`}>
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 ${theme.radius.base} ${theme.liquidSurface}`}>
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, idx) => (
          <button key={idx} onClick={() => setCurrent(idx)} className={`w-2 h-2 ${theme.radius.full} transition-all ${idx === current ? 'bg-white w-4' : 'bg-white/30'}`} />
        ))}
      </div>
    </div>
  );
};

export const CarouselItem = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export const Tabs = ({ tabs, activeTab, onChange, variant = "pills", className = "" }) => {
  const variants = {
    pills: "",
    line: "border-b border-white/10"
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      <div className="flex gap-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
              activeTab === tab.id
                ? variant === 'pills' ? 'bg-gradient-to-br from-white via-white/90 to-white/80 text-black' : 'text-white border-b-2 border-blue-500'
                : 'text-white/40 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export const TabContent = ({ children, active = false, className = "" }) => (
  <div className={`${active ? 'block' : 'hidden'} ${className}`}>{children}</div>
);

export const AccordionItem = ({ title, content, isOpen, onToggle, className = "" }) => (
  <div className={`${theme.radius.xlarge} ${theme.liquidSurface} overflow-hidden ${className}`}>
    <button onClick={onToggle} className="w-full flex items-center justify-between p-4 text-left">
      <span className="text-sm font-bold text-white/70">{title}</span>
      {isOpen ? <ChevronDown size={18} className="text-white/40" /> : <ChevronRight size={18} className="text-white/40" />}
    </button>
    {isOpen && <div className="px-4 pb-4 text-sm text-white/60 leading-relaxed">{content}</div>}
  </div>
);

export const Accordion = ({ items, allowMultiple = false, className = "" }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    if (allowMultiple) {
      setOpenItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    } else {
      setOpenItems(prev => prev.includes(id) ? [] : [id]);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <AccordionItem key={item.id} title={item.title} content={item.content} isOpen={openItems.includes(item.id)} onToggle={() => toggleItem(item.id)} />
      ))}
    </div>
  );
};

const ChevronDown = require('lucide-react').ChevronDown;
const ChevronRight = require('lucide-react').ChevronRight;
