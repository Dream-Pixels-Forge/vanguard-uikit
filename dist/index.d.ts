// TypeScript definitions for Vanguard UIKit

import * as React from 'react';

// Theme
export const theme: {
  radius: {
    base: string;
    large: string;
    xlarge: string;
    card: string;
    full: string;
  };
  glass: string;
  animation: {
    fast: string;
    slow: string;
    slower: string;
  };
  colors: {
    primary: string;
    accent: string;
    success: string;
    danger: string;
    warning: string;
  };
};

// Buttons
export interface VanguardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  variant?: 'primary' | 'accent' | 'glass' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const VanguardButton: React.FC<VanguardButtonProps>;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  variant?: 'glass' | 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const IconButton: React.FC<IconButtonProps>;

// Cards
export interface VanguardCardProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  tag?: string;
  hoverable?: boolean;
  glass?: boolean;
  className?: string;
  delay?: string;
}

export const VanguardCard: React.FC<VanguardCardProps>;

export interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend?: 'up' | 'down';
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  className?: string;
}

export const StatCard: React.FC<StatCardProps>;

// Badges
export interface StatusBadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'emerald' | 'rose' | 'amber' | 'purple';
}

export const StatusBadge: React.FC<StatusBadgeProps>;

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'emerald' | 'rose' | 'amber' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps>;

// Form Elements
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export const Input: React.FC<InputProps>;

export interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps>;

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  rows?: number;
}

export const Textarea: React.FC<TextareaProps>;

export interface SelectProps {
  options: Array<{ label: string; value: string }>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Select: React.FC<SelectProps>;

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export const Toggle: React.FC<ToggleProps>;

export const Switch: React.FC<ToggleProps>;

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps>;

export interface RadioGroupProps {
  options: Array<{ label: string; value: string }>;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps>;

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export const Slider: React.FC<SliderProps>;

// Progress
export interface ProgressBarProps {
  value?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'blue' | 'emerald' | 'rose' | 'amber' | 'purple' | 'gradient';
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps>;

export interface CircularProgressProps {
  value?: number;
  size?: number;
  strokeWidth?: number;
  variant?: 'blue' | 'emerald' | 'rose' | 'amber' | 'purple';
  showValue?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps>;

// Navigation
export interface SidebarItemProps {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  active?: boolean;
  className?: string;
}

export const SidebarItem: React.FC<SidebarItemProps>;

export interface NavTabProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const NavTab: React.FC<NavTabProps>;

export interface TabsProps {
  tabs: Array<{ id: string; label: string }>;
  activeTab: string;
  onChange: (id: string) => void;
  variant?: 'pills' | 'line';
  className?: string;
}

export const Tabs: React.FC<TabsProps>;

export interface TabContentProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export const TabContent: React.FC<TabContentProps>;

export interface AccordionProps {
  items: Array<{ id: string; title: string; content: React.ReactNode }>;
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps>;

// Lists
export interface ProjectRowProps {
  name: string;
  status: string;
  progress: number;
  category: string;
  className?: string;
}

export const ProjectRow: React.FC<ProjectRowProps>;

export interface AlertItemProps {
  title: string;
  time: string;
  color?: 'blue' | 'rose' | 'emerald';
  className?: string;
}

export const AlertItem: React.FC<AlertItemProps>;

// Table
export interface TableColumn {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
  onRowClick?: (row: any) => void;
  emptyMessage?: string;
  className?: string;
}

export const Table: React.FC<TableProps>;

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps>;

// Layout
export interface WorkspaceSelectorProps {
  name?: string;
  plan?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  className?: string;
}

export const WorkspaceSelector: React.FC<WorkspaceSelectorProps>;

export interface AvatarProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar: React.FC<AvatarProps>;

export interface UpgradeCardProps {
  version?: string;
  title?: string;
  buttonText?: string;
  className?: string;
}

export const UpgradeCard: React.FC<UpgradeCardProps>;

export interface BarChartProps {
  data?: number[];
  height?: number;
  className?: string;
}

export const BarChart: React.FC<BarChartProps>;

export interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  radius?: 'base' | 'large' | 'xlarge';
}

export const GlassPanel: React.FC<GlassPanelProps>;

export const BackgroundDecor: React.FC<{ className?: string }>;

// Typography
export interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  uppercase?: boolean;
  italic?: boolean;
  className?: string;
}

export const Heading: React.FC<HeadingProps>;

export interface TextProps {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'muted' | 'subtle' | 'primary' | 'success' | 'danger';
  className?: string;
}

export const Text: React.FC<TextProps>;

// Form
export interface LabelProps {
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}

export const Label: React.FC<LabelProps>;

export interface FormGroupProps {
  children: React.ReactNode;
  label?: string;
  error?: string;
  className?: string;
}

export const FormGroup: React.FC<FormGroupProps>;

// Social
export interface SocialLinkProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href?: string;
  className?: string;
}

export const SocialLink: React.FC<SocialLinkProps>;
export const SocialLinks: React.FC<{ className?: string }>;

// Navbar
export interface NavbarProps {
  scrolled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps>;

export interface LogoProps {
  name?: string;
  subtitle?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps>;

// Footer
export interface FooterLinkProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export const FooterLink: React.FC<FooterLinkProps>;

export interface FooterSectionProps {
  title: string;
  links?: string[];
  className?: string;
}

export const FooterSection: React.FC<FooterSectionProps>;

// Modal
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showClose?: boolean;
  className?: string;
}

export const Modal: React.FC<ModalProps>;
export const Dialog: React.FC<ModalProps>;

export interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'primary';
}

export const ConfirmDialog: React.FC<ConfirmDialogProps>;

// Dropdown
export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  className?: string;
}

export const Dropdown: React.FC<DropdownProps>;

export interface DropdownItemProps {
  children: React.ReactNode;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  onClick?: () => void;
  danger?: boolean;
  className?: string;
}

export const DropdownItem: React.FC<DropdownItemProps>;
export const DropdownDivider: React.FC<{ className?: string }>;

// Tooltip
export interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const Tooltip: React.FC<TooltipProps>;

// Toast
export interface ToastProps {
  title?: string;
  message?: string;
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  onClose: () => void;
  className?: string;
}

export const Toast: React.FC<ToastProps>;

export interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps>;

export interface UseToastReturn {
  addToast: (toast: Omit<ToastProps, 'onClose'>) => void;
  removeToast: (id: number) => void;
}

export function useToast(): UseToastReturn;

// Loaders
export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'circle' | 'card';
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps>;
export const SkeletonText: React.FC<{ lines?: number; className?: string }>;
export const SkeletonCard: React.FC<{ className?: string }>;

export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Loader: React.FC<LoaderProps>;
export const Spinner: React.FC<LoaderProps>;

// Empty State
export interface EmptyStateProps {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps>;

// Specialized Cards
export interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features?: string[];
  popular?: boolean;
  buttonText?: string;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps>;

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps>;

export interface FeatureCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps>;

// Utilities
export const Divider: React.FC<{ className?: string }>;
export const VerticalDivider: React.FC<{ className?: string }>;
export const Placeholder: React.FC<{ className?: string }>;
export const Blur: React.FC<{ children: React.ReactNode; className?: string }>;
export const Fade: React.FC<{ children: React.ReactNode; className?: string }>;
export const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }>;
export const SlideIn: React.FC<{ children: React.ReactNode; direction?: 'up' | 'down' | 'left' | 'right'; delay?: number; className?: string }>;
export const ScaleIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }>;

// Layout
export interface GridProps {
  children: React.ReactNode;
  cols?: number;
  gap?: number;
  className?: string;
}

export const Grid: React.FC<GridProps>;

export interface StackProps {
  children: React.ReactNode;
  direction?: 'vertical' | 'horizontal';
  gap?: number;
  className?: string;
}

export const Stack: React.FC<StackProps>;
export const Center: React.FC<{ children: React.ReactNode; className?: string }>;
export const Between: React.FC<{ children: React.ReactNode; className?: string }>;

// Icons
export const Icons: Record<string, React.ComponentType<{ size?: number; className?: string }>>;

export default {
  VanguardButton,
  IconButton,
  VanguardCard,
  StatCard,
  StatusBadge,
  Badge,
  Input,
  SearchInput,
  Textarea,
  Select,
  Toggle,
  Switch,
  Checkbox,
  RadioGroup,
  Slider,
  ProgressBar,
  CircularProgress,
  SidebarItem,
  NavTab,
  Tabs,
  TabContent,
  Accordion,
  ProjectRow,
  AlertItem,
  Table,
  Pagination,
  WorkspaceSelector,
  Avatar,
  UpgradeCard,
  BarChart,
  BackgroundDecor,
  GlassPanel,
  Heading,
  Text,
  Label,
  FormGroup,
  SocialLink,
  SocialLinks,
  Navbar,
  Logo,
  FooterLink,
  FooterSection,
  Modal,
  Dialog,
  ConfirmDialog,
  Dropdown,
  DropdownItem,
  DropdownDivider,
  Tooltip,
  Toast,
  ToastProvider,
  useToast,
  Skeleton,
  SkeletonText,
  SkeletonCard,
  Loader,
  Spinner,
  EmptyState,
  PricingCard,
  TestimonialCard,
  FeatureCard,
  Divider,
  VerticalDivider,
  Placeholder,
  Blur,
  Fade,
  FadeIn,
  SlideIn,
  ScaleIn,
  Grid,
  Stack,
  Center,
  Between,
  Icons,
  theme
};
