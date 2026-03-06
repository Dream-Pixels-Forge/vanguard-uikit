import React, { useState } from 'react';
import { X } from 'lucide-react';
import { theme } from '../../theme';

export const Modal = ({ isOpen, onClose, title, children, size = "md", showClose = true, className = "" }) => {
  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[90vw]"
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />
      <div className={`relative w-full ${sizes[size]} mx-4 ${theme.radius.large} ${theme.liquidGlass} border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] animate-in zoom-in-95 fade-in duration-300 ${className}`}>
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <h3 className="text-xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{title}</h3>
            {showClose && (
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-xl transition-colors">
                <X size={20} />
              </button>
            )}
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export const Dialog = ({ isOpen, onClose, title, children, footer, className = "" }) => (
  <Modal isOpen={isOpen} onClose={onClose} title={title} showClose={false} className={className}>
    <div className="space-y-4">
      {children}
      {footer && (
        <div className="flex justify-end gap-4 pt-4 border-t border-white/5">
          {footer}
        </div>
      )}
    </div>
  </Modal>
);

import { VanguardButton } from '../buttons';

export const ConfirmDialog = ({ isOpen, onClose, onConfirm, title = "Confirm", message, confirmText = "Confirm", cancelText = "Cancel", variant = "danger" }) => (
  <Dialog isOpen={isOpen} onClose={onClose} title={title} footer={
    <>
      <VanguardButton variant="glass" onClick={onClose}>{cancelText}</VanguardButton>
      <VanguardButton variant={variant} onClick={() => { onConfirm(); onClose(); }}>{confirmText}</VanguardButton>
    </>
  }>
    <p className="text-white/60 text-sm">{message}</p>
  </Dialog>
);

export const Dropdown = ({ trigger, children, align = "left", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className={`absolute top-full mt-2 ${align === 'right' ? 'right-0' : 'left-0'} z-50 min-w-[200px] ${theme.liquidGlass} ${theme.radius.large} border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] animate-in fade-in zoom-in-95 duration-200`}>
            <div className="p-2">{children}</div>
          </div>
        </>
      )}
    </div>
  );
};

export const DropdownItem = ({ children, icon: Icon, danger = false, onClick, className = "" }) => (
  <button onClick={() => { onClick?.(); }} className={`w-full flex items-center gap-3 px-3 py-2 ${theme.radius.base} text-left text-sm font-bold transition-all ${danger ? 'text-rose-400 hover:bg-rose-500/10' : 'text-white/70 hover:bg-white/5'}`}>
    {Icon && <Icon size={16} />}
    {children}
  </button>
);

export const DropdownDivider = ({ className = "" }) => (
  <div className={`my-2 h-px ${theme.glass} ${className}`} />
);

export const Tooltip = ({ children, content, position = "top", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };

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
