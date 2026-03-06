import React from 'react';

export const FadeIn = ({ children, delay = 0, className = "" }) => (
  <div className={`animate-in fade-in duration-700 ${className}`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

export const FadeOut = ({ children, delay = 0, className = "" }) => (
  <div className={`animate-in fade-out duration-700 ${className}`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

export const SlideIn = ({ children, direction = "up", delay = 0, className = "" }) => {
  const directions = { up: "slide-in-from-bottom-10", down: "slide-in-from-top-10", left: "slide-in-from-left-10", right: "slide-in-from-right-10" };
  return (
    <div className={`animate-in fade-in ${directions[direction]} duration-700 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export const SlideOut = ({ children, direction = "down", delay = 0, className = "" }) => {
  const directions = { up: "slide-out-to-top-10", down: "slide-out-to-bottom-10", left: "slide-out-to-left-10", right: "slide-out-to-right-10" };
  return (
    <div className={`animate-in fade-in ${directions[direction]} duration-700 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export const ScaleIn = ({ children, delay = 0, className = "" }) => (
  <div className={`animate-in zoom-in-95 fade-in duration-700 ${className}`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

export const ScaleOut = ({ children, delay = 0, className = "" }) => (
  <div className={`animate-in zoom-out-95 fade-out duration-700 ${className}`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

export const Spin = ({ children, className = "" }) => (
  <div className={`animate-spin ${className}`}>{children}</div>
);

export const Pulse = ({ children, className = "" }) => (
  <div className={`animate-pulse ${className}`}>{children}</div>
);

export const Bounce = ({ children, className = "" }) => (
  <div className={`animate-bounce ${className}`}>{children}</div>
);

export const Shake = ({ children, className = "" }) => (
  <div className={`animate-shake ${className}`}>{children}</div>
);

export const Wiggle = ({ children, className = "" }) => (
  <div className={`animate-wiggle ${className}`}>{children}</div>
);

export const GridLayout = ({ children, columns = 3, gap = "6", className = "" }) => {
  const cols = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5", 6: "grid-cols-6" };
  const gaps = { 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4", 6: "gap-6", 8: "gap-8", 10: "gap-10", 12: "gap-12" };
  return <div className={`grid ${cols[columns]} ${gaps[gap]} ${className}`}>{children}</div>;
};

export const Stack = ({ children, direction = "vertical", gap = "4", className = "" }) => {
  const directions = { vertical: "flex-col", horizontal: "flex-row" };
  const gaps = { 0: "gap-0", 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4", 6: "gap-6", 8: "gap-8" };
  return <div className={`flex ${directions[direction]} ${gaps[gap]} ${className}`}>{children}</div>;
};

export const Inline = ({ children, gap = "4", className = "" }) => {
  const gaps = { 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4", 6: "gap-6", 8: "gap-8" };
  return <div className={`inline-flex ${gaps[gap]} ${className}`}>{children}</div>;
};

export const Center = ({ children, className = "" }) => (
  <div className={`flex items-center justify-center ${className}`}>{children}</div>
);

export const Between = ({ children, className = "" }) => (
  <div className={`flex items-center justify-between ${className}`}>{children}</div>
);

export const Around = ({ children, className = "" }) => (
  <div className={`flex items-center justify-around ${className}`}>{children}</div>
);

export const Evenly = ({ children, className = "" }) => (
  <div className={`flex items-center justify-evenly ${className}`}>{children}</div>
);

export const Start = ({ children, className = "" }) => (
  <div className={`flex items-center justify-start ${className}`}>{children}</div>
);

export const End = ({ children, className = "" }) => (
  <div className={`flex items-center justify-end ${className}`}>{children}</div>
);

export const VStack = ({ children, gap = "4", className = "" }) => {
  const gaps = { 0: "gap-0", 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4", 6: "gap-6", 8: "gap-8" };
  return <div className={`flex flex-col ${gaps[gap]} ${className}`}>{children}</div>;
};

export const HStack = ({ children, gap = "4", className = "" }) => {
  const gaps = { 0: "gap-0", 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4", 6: "gap-6", 8: "gap-8" };
  return <div className={`flex flex-row ${gaps[gap]} ${className}`}>{children}</div>;
};

export const Spacer = ({ size = 4, className = "" }) => (
  <div className={`flex-${size} ${className}`} />
);

export const Divider = ({ className = "" }) => {
  const { theme } = require('../../theme');
  return <div className={`h-px ${theme.glass} ${className}`} />;
};

export const VerticalDivider = ({ className = "" }) => {
  const { theme } = require('../../theme');
  return <div className={`w-px ${theme.glass} ${className}`} />;
};

export const Placeholder = ({ className = "" }) => (
  <div className={`bg-white/5 ${theme?.radius?.base || 'rounded-2xl'} animate-pulse ${className}`} />
);

export const Blur = ({ children, amount = "md", className = "" }) => {
  const amounts = { sm: "blur-sm", md: "blur", lg: "blur-lg", xl: "blur-xl" };
  return <div className={`${amounts[amount]} ${className}`}>{children}</div>;
};

export const Fade = ({ children, className = "" }) => (
  <div className={`opacity-50 ${className}`}>{children}</div>
);

export const Truncate = ({ children, lines = 1, className = "" }) => (
  <div className={lines === 1 ? `truncate ${className}` : `line-clamp-${lines} ${className}`}>{children}</div>
);

export const AspectRatio = ({ ratio = "16/9", className = "", children }) => (
  <div className={`aspect-${ratio.replace('/', '-')} ${className}`}>{children}</div>
);

export const Container = ({ children, size = "full", className = "" }) => {
  const sizes = { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg", xl: "max-w-xl", "2xl": "max-w-2xl", full: "max-w-full" };
  return <div className={`mx-auto px-4 ${sizes[size]} ${className}`}>{children}</div>;
};
