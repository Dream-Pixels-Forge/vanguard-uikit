# Vanguard UIKit

A modern, dark-themed UI component library for React applications. Built with Tailwind CSS and Lucide Icons. Now featuring an enhanced blend of **Glassmorphism**, **Neuromorphism**, and **Liquid Glass** aesthetics.

![Vanguard UIKit](https://via.placeholder.com/800x400/0a0a0b/3b82f6?text=Vanguard+UIKit)

## ✨ New Design Features

### 🪟 Enhanced Glassmorphism
- Multi-layer glass effects with backdrop blur
- Liquid refraction highlights
- Holographic gradient overlays
- Crystal-clear depth perception

### 🔵 Neuromorphic Depth
- Soft shadows for dimensional feel
- Subtle light and dark contrasts
- Tactile, pressable surfaces
- Embedded and elevated states

### 💧 Liquid Glass
- Flowing gradient animations
- Refractive light effects
- Smooth, organic transitions
- Holographic shimmer accents

## Features

- 🌙 Dark theme by default
- ✨ Glassmorphism + Neuromorphism + Liquid Glass fusion
- 💧 Liquid refraction effects
- 🔵 Holographic gradients
- 🎨 500+ Lucide icons
- 📱 Responsive design
- ⚡ Lightweight & fast
- 🎭 Smooth animations
- Highly customizable

## Installation

```bash
npm install vanguard-uikit
```

Or with yarn:

```bash
yarn add vanguard-uikit
```

## Peer Dependencies

Make sure you have these installed:

```bash
npm install react react-dom lucide-react
```

## Quick Start

```jsx
import React from 'react';
import {
  VanguardButton,
  VanguardCard,
  GlassPanel,
  Icons
} from 'vanguard-uikit';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] p-8">
      <GlassPanel>
        <VanguardCard
          title="Welcome"
          description="Build amazing interfaces"
          icon={Icons.Zap}
        >
          <VanguardButton variant="accent">
            Get Started
          </VanguardButton>
        </VanguardCard>
      </GlassPanel>
    </div>
  );
}

export default App;
```

## Components

### Buttons

Enhanced with liquid shine effects and neuromorphic depth:

```jsx
<VanguardButton variant="primary">Primary</VanguardButton>
<VanguardButton variant="accent">Accent</VanguardButton>
<VanguardButton variant="glass">Glass</VanguardButton>
<VanguardButton variant="ghost">Ghost</VanguardButton>
<VanguardButton variant="danger">Danger</VanguardButton>

// With icon
<VanguardButton variant="accent" icon={Icons.ArrowRight}>
  Get Started
</VanguardButton>
```

### Cards

Multi-layer glass with liquid gradient borders:

```jsx
<VanguardCard
  title="Feature"
  description="Description here"
  icon={Icons.Zap}
  tag="New"
  hoverable
/>

<StatCard
  title="Revenue"
  value="$10,000"
  change="+12%"
  trend="up"
  icon={Icons.Wallet}
/>
```

### Form Elements

Neuromorphic depth with liquid highlights:

```jsx
<Input icon={Icons.Search} placeholder="Search..." />
<SearchInput placeholder="Search..." />
<Textarea placeholder="Enter description..." rows={3} />
<Select
  options={[{ label: 'Option 1', value: '1' }]}
  value={value}
  onChange={setValue}
  placeholder="Choose option..."
/>
<Toggle checked={checked} onChange={setChecked} label="Enable" />
<Switch checked={checked} onChange={setChecked} label="Dark mode" />
<Checkbox checked={checked} onChange={setChecked} label="Accept terms" />
<RadioGroup options={options} value={value} onChange={setValue} />
<Slider value={value} onChange={setValue} min={0} max={100} />
```

### Navigation

```jsx
<Navbar scrolled={scrolled}>
  <Logo />
  <NavTab active>Home</NavTab>
  <NavTab>About</NavTab>
</Navbar>

<Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

<Accordion
  items={[{ id: '1', title: 'Question?', content: 'Answer!' }]}
  allowMultiple
/>
```

### Feedback

```jsx
<ToastProvider>
  <YourComponent />
</ToastProvider>

// In YourComponent:
const { addToast } = useToast();
addToast({ title: 'Success!', variant: 'success' });

<Modal isOpen={isOpen} onClose={setIsOpen} title="Modal Title">
  Content here
</Modal>

<ConfirmDialog
  isOpen={isOpen}
  onClose={setIsOpen}
  onConfirm={handleConfirm}
  title="Confirm"
  message="Are you sure?"
/>
```

### Data Display

```jsx
<Table
  columns={[{ header: 'Name', accessor: 'name' }]}
  data={[{ name: 'John' }]}
/>

<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={setPage}
/>

<ProjectRow
  name="Project Name"
  status="Active"
  progress={75}
  category="Development"
/>
```

### Progress

```jsx
<ProgressBar value={75} showLabel variant="blue" />
<CircularProgress value={60} variant="emerald" size={80} />
```

### Badges & Tags

```jsx
<Badge>Default</Badge>
<Badge variant="blue">New</Badge>
<Badge variant="emerald">Active</Badge>
<Badge variant="rose">Error</Badge>

<StatusBadge variant="blue">Live</StatusBadge>
<StatusBadge variant="emerald">Online</StatusBadge>
```

## Using Icons

The kit includes 500+ icons from Lucide:

```jsx
import { Icons } from 'vanguard-uikit';

<Icons.Zap />
<Icons.Box />
<Icons.Settings />
<Icons.User />
// ... and many more
```

## Theme Configuration

The kit uses these enhanced styles:

### Glassmorphism
```jsx
bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02]
backdrop-blur-xl
border border-white/15
shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
```

### Neuromorphism
```jsx
bg-[#0a0a0b]
shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.03)]
border border-white/5
```

### Liquid Glass
```jsx
bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent
backdrop-blur-2xl
border border-white/10
shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
```

## Animation Variants

- `fast`: 300ms ease-out
- `slow`: 500ms cubic-bezier
- `slower`: 700ms cubic-bezier
- `liquid`: 700ms spring-like cubic-bezier

## Color Variants

Available for badges, progress bars, and alerts:
- Blue (default)
- Emerald (success)
- Rose (danger/error)
- Amber (warning)
- Purple (premium)

## Requirements

- React 16.8+
- Tailwind CSS 3+
- Lucide React 0.200+

## Demo

Run the demo app to see all components:

```bash
cd demo
npm install
npm run dev
```

## Changelog

### v2.0 - Enhanced Edition
- ✨ Added glassmorphism enhancements
- 🔵 Added neuromorphic depth effects
- 💧 Added liquid glass animations
- 🎨 Holographic gradient overlays
- 🌊 Liquid refraction effects
- ⚡ Improved animations and transitions

## License

MIT © Dream-Pixels-Forge

---

Built with ❤️ using React + Tailwind CSS
