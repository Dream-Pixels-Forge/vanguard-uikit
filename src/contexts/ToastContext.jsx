import React, { useState, createContext, useContext } from 'react';
import { X, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import { theme } from '../theme';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = ({ title, message, variant = "info", duration = 4000 }) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, message, variant }]);
    setTimeout(() => removeToast(id), duration);
  };

  const removeToast = (id) => setToasts(prev => prev.filter(t => t.id !== id));

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[300] space-y-4">
        {toasts.map(toast => (
          <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};

export const Toast = ({ title, message, variant = "info", onClose, className = "" }) => {
  const variants = {
    success: "border-emerald-400/30 shadow-[0_8px_24px_rgba(16,185,129,0.2)]",
    error: "border-rose-400/30 shadow-[0_8px_24px_rgba(244,63,94,0.2)]",
    warning: "border-amber-400/30 shadow-[0_8px_24px_rgba(245,158,11,0.2)]",
    info: "border-blue-400/30 shadow-[0_8px_24px_rgba(59,130,246,0.2)]"
  };

  const icons = { success: CheckCircle, error: XCircle, warning: AlertTriangle, info: Info };
  const Icon = icons[variant];

  const iconColors = {
    success: 'text-emerald-400',
    error: 'text-rose-400',
    warning: 'text-amber-400',
    info: 'text-blue-400'
  };

  return (
    <div className={`${theme.liquidGlass} ${theme.radius.large} border ${variants[variant]} p-4 min-w-[300px] animate-in slide-in-from-right duration-300 ${className}`}>
      <div className="flex items-start gap-3">
        <Icon size={20} className={iconColors[variant]} />
        <div className="flex-1">
          <p className="text-sm font-bold text-white">{title}</p>
          <p className="text-xs text-white/60 mt-1">{message}</p>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/5 rounded-lg transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
