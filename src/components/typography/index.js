import React from 'react';

export const Heading = ({ children, level = 1, uppercase = false, italic = false, className = "" }) => {
  const sizes = {
    1: "text-4xl md:text-5xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl"
  };

  const Component = `h${level}`;

  return (
    <Component className={`font-black tracking-tighter ${uppercase ? 'uppercase' : ''} ${italic ? 'italic' : ''} ${sizes[level]} ${className} bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent`}>
      {children}
    </Component>
  );
};

export const Text = ({ children, size = "md", variant = "default", className = "" }) => {
  const sizes = {
    xs: "text-[9px]",
    sm: "text-[10px]",
    md: "text-xs",
    lg: "text-sm",
    xl: "text-base"
  };

  const variants = {
    default: "text-white/60",
    muted: "text-white/40",
    subtle: "text-white/20",
    primary: "text-blue-300",
    success: "text-emerald-300",
    danger: "text-rose-300"
  };

  return (
    <p className={`font-medium leading-relaxed ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </p>
  );
};

export const Label = ({ children, htmlFor, className = "" }) => (
  <label htmlFor={htmlFor} className="block text-[10px] font-black uppercase tracking-widest text-white/60 mb-2">
    {children}
  </label>
);

export const FormGroup = ({ label, children, className = "" }) => (
  <div className={className}>
    {label && <Label>{label}</Label>}
    {children}
  </div>
);

export const Divider = ({ className = "" }) => {
  const { theme } = require('../../theme');
  return <div className={`h-px ${theme.glass} ${className}`} />;
};
