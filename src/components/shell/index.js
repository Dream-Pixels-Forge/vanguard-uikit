import React, { useState } from 'react';
import { Menu, X, Search, Bell, Settings, User, LogOut, ChevronDown } from 'lucide-react';
import { theme } from '../../theme';
import { Avatar, Dropdown, DropdownItem, DropdownDivider } from '../layout';

export const Navbar = ({ scrolled = false, children, className = "" }) => (
  <nav className={`fixed top-0 w-full z-[100] px-6 md:px-12 py-6 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0b]/90 backdrop-blur-2xl border-b border-white/5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' : 'bg-transparent'} ${className}`}>
    {children}
  </nav>
);

export const NavbarBrand = ({ children, className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>{children}</div>
);

export const NavbarMenu = ({ children, className = "" }) => (
  <div className={`hidden md:flex items-center gap-1 ${className}`}>{children}</div>
);

export const NavbarActions = ({ children, className = "" }) => (
  <div className={`flex items-center gap-4 ${className}`}>{children}</div>
);

export const NavbarItem = ({ children, active = false, className = "" }) => (
  <a href="#" className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all ${active ? 'text-white' : 'text-white/40 hover:text-white'} ${className}`}>
    {children}
  </a>
);

export const NavbarSearch = ({ placeholder = "Search...", className = "" }) => (
  <div className={`flex items-center gap-2 px-4 py-2 ${theme.liquidSurface} ${theme.radius.base} ${className}`}>
    <Search size={14} className="text-white/30" />
    <input type="text" placeholder={placeholder} className="bg-transparent border-none outline-none text-xs text-white/70 placeholder:text-white/20 w-32" />
  </div>
);

export const NavbarNotification = ({ count = 0, className = "" }) => (
  <button className={`relative p-2 ${theme.radius.base} ${theme.liquidSurface} hover:bg-white/5 transition-all ${className}`}>
    <Bell size={18} className="text-white/60" />
    {count > 0 && (
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">
        {count > 9 ? '9+' : count}
      </span>
    )}
  </button>
);

export const NavbarAvatar = ({ src, alt, dropdownItems = [], className = "" }) => (
  <Dropdown
    trigger={
      <button className={`flex items-center gap-2 p-1 ${theme.radius.base} hover:bg-white/5 transition-all ${className}`}>
        <Avatar src={src} alt={alt} size="sm" />
        <ChevronDown size={14} className="text-white/40" />
      </button>
    }
    align="right"
  >
    {dropdownItems.map((item, idx) => (
      item.divider ? <DropdownDivider key={idx} /> : <DropdownItem key={idx} icon={item.icon} onClick={item.onClick}>{item.label}</DropdownItem>
    ))}
  </Dropdown>
);

export const MobileNav = ({ isOpen, onClose, children, className = "" }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[150] md:hidden">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className={`absolute top-0 left-0 w-80 h-full ${theme.liquidGlass} p-6 animate-in slide-in-from-left ${className}`}>
        <div className="flex justify-between items-center mb-8">
          <span className="text-lg font-black tracking-widest text-white">MENU</span>
          <button onClick={onClose}><X size={24} /></button>
        </div>
        <div className="space-y-2">{children}</div>
      </div>
    </div>
  );
};

export const Hamburger = ({ isOpen, onClick, className = "" }) => (
  <button onClick={onClick} className={`p-2 ${theme.radius.base} ${theme.liquidSurface} hover:bg-white/5 ${className}`}>
    {isOpen ? <X size={20} /> : <Menu size={20} />}
  </button>
);

export const Logo = ({ name = "VANGUARD", subtitle = "Forge Studio", className = "" }) => {
  const { Box } = require('lucide-react');
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-10 h-10 bg-gradient-to-br from-white via-white/90 to-white/80 rounded-xl flex items-center justify-center text-black shadow-[0_4px_16px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.5)] group-hover:rotate-[10deg] group-hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)] transition-all duration-500">
        <Box size={20} />
      </div>
      <div className="leading-none">
        <span className="text-lg font-black tracking-tighter block bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">{name}</span>
        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-blue-300">{subtitle}</span>
      </div>
    </div>
  );
};

export const FooterLink = ({ children, href = "#", className = "" }) => (
  <li className={`hover:text-white transition-colors cursor-pointer ${className}`}>{children}</li>
);

export const FooterSection = ({ title, links = [], className = "" }) => (
  <div className={`space-y-6 ${className}`}>
    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300">{title}</p>
    <ul className="space-y-4 text-[12px] font-bold text-white/40">
      {links.map((link, idx) => (
        <FooterLink key={idx}>{typeof link === 'string' ? link : link.label}</FooterLink>
      ))}
    </ul>
  </div>
);

export const Footer = ({ children, className = "" }) => (
  <footer className={`bg-[#0a0a0b] border-t border-white/5 py-12 px-6 md:px-12 ${className}`}>{children}</footer>
);

export const FooterBottom = ({ children, className = "" }) => (
  <div className={`mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 ${className}`}>{children}</div>
);

export const SocialLink = ({ icon: Icon, href = "#", className = "" }) => (
  <a href={href} className={`w-10 h-10 ${theme.radius.base} ${theme.liquidSurface} flex items-center justify-center hover:bg-gradient-to-br hover:from-white/20 hover:via-white/10 hover:to-white/5 hover:shadow-[0_4px_16px_rgba(255,255,255,0.15)] transition-all ${className}`}>
    <Icon size={18} />
  </a>
);

export const SocialLinks = ({ className = "" }) => {
  const { Twitter, Github, Linkedin } = require('lucide-react');
  return (
    <div className={`flex gap-4 ${className}`}>
      <SocialLink icon={Twitter} />
      <SocialLink icon={Github} />
      <SocialLink icon={Linkedin} />
    </div>
  );
};

export const Breadcrumb = ({ items, className = "" }) => (
  <nav className={`flex items-center gap-2 text-xs ${className}`}>
    {items.map((item, idx) => (
      <React.Fragment key={idx}>
        {idx > 0 && <span className="text-white/20">/</span>}
        {item.href ? <a href={item.href} className="text-white/40 hover:text-white transition-colors">{item.label}</a> : <span className="text-white/70">{item.label}</span>}
      </React.Fragment>
    ))}
  </nav>
);

export const BreadcrumbItem = ({ label, href, active = false, className = "" }) => (
  <a href={href} className={`text-xs font-medium transition-colors ${active ? 'text-white' : 'text-white/40 hover:text-white'} ${className}`}>
    {label}
  </a>
);
