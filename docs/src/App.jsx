import React, { useState, useEffect } from 'react';
import { 
  Zap, Box, Layers, Sparkles, ArrowRight, Copy, Check, 
  Github, Twitter, Heart, Code, Palette, Rocket
} from 'lucide-react';
import {
  VanguardButton,
  VanguardCard,
  StatCard,
  Badge,
  GlassPanel,
  Heading,
  Text,
  BackgroundDecor,
  Navbar,
  Logo,
  FooterSection,
  Divider,
  FadeIn,
  SlideIn,
} from './vanguard-uikit.jsx';

function App() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const installCommand = 'npm install vanguard-uikit';
  
  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    { icon: Sparkles, title: 'Glassmorphism', description: 'Multi-layer glass effects with backdrop blur and crystal-clear refraction.' },
    { icon: Box, title: 'Neuromorphism', description: 'Soft dimensional shadows for tactile, pressable surfaces with depth.' },
    { icon: Layers, title: 'Liquid Glass', description: 'Flowing gradient animations with refractive light and holographic effects.' },
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized for speed with minimal bundle size and efficient rendering.' },
    { icon: Palette, title: 'Beautiful Design', description: 'Dark-themed with stunning gradient overlays and modern aesthetics.' },
    { icon: Code, title: 'Easy to Use', description: 'Simple API with TypeScript support and comprehensive documentation.' }
  ];

  const stats = [
    { label: 'Components', value: '50+' },
    { label: 'Icons', value: '500+' },
    { label: 'Version', value: '1.0.1' },
    { label: 'License', value: 'MIT' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden">
      <BackgroundDecor />
      
      {/* Navigation */}
      <Navbar scrolled={scrolled} className="!px-4 md:!px-8">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Logo name="VANGUARD" subtitle="UI Kit" />
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Features</a>
            <a href="#components" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Components</a>
            <a href="#installation" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Install</a>
            <VanguardButton variant="primary" size="sm" onClick={() => window.open('https://github.com/Dream-Pixels-Forge/vanguard-uikit', '_blank')}>GitHub</VanguardButton>
          </div>
        </div>
      </Navbar>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="text-center md:text-left">
                <Badge variant="blue" size="lg" className="mb-6 inline-block">✨ v1.0.1 Now Available on npm</Badge>
                <Heading level={1} className="text-5xl md:text-7xl lg:text-8xl mb-6">
                  Build Faster.<br />
                  <span className="gradient-text">Look Better.</span>
                </Heading>
                <Text size="xl" className="max-w-2xl mx-auto md:mx-0 mb-10 text-white/60">
                  A modern dark-themed UI component library with glassmorphism, neuromorphism, and liquid glass aesthetics.
                </Text>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
                  <VanguardButton variant="accent" size="lg" icon={ArrowRight} onClick={() => document.getElementById('installation').scrollIntoView({ behavior: 'smooth' })}>Get Started</VanguardButton>
                  <VanguardButton variant="glass" size="lg" icon={Github} onClick={() => window.open('https://github.com/Dream-Pixels-Forge/vanguard-uikit', '_blank')}>View on GitHub</VanguardButton>
                </div>
              </div>
              <div className="hidden md:block">
                <img src="/hero.png" alt="Vanguard UI Kit Preview" className="w-full h-auto rounded-3xl shadow-2xl glow" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="glass rounded-2xl p-6">
                  <p className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.value}</p>
                  <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SlideIn direction="up">
            <GlassPanel className="!p-8 md:!p-12">
              <div className="text-center mb-8">
                <Heading level={2} className="mb-4">Install in Seconds</Heading>
                <Text className="text-white/60">Get started with Vanguard UI Kit</Text>
              </div>
              <div className="glass rounded-2xl p-4 md:p-6 mb-6">
                <div className="flex items-center justify-between">
                  <code className="text-sm md:text-base font-mono text-blue-400">{installCommand}</code>
                  <button onClick={handleCopy} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                    <span className="text-xs font-bold">{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </GlassPanel>
          </SlideIn>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="purple" className="mb-4">Features</Badge>
              <Heading level={2} className="mb-4">Why Choose Vanguard?</Heading>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <SlideIn key={i} direction="up" delay={i * 100}>
                <VanguardCard icon={feature.icon} title={feature.title} description={feature.description} delay={i * 100} />
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Components Preview */}
      <section id="components" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="emerald" className="mb-4">Components</Badge>
              <Heading level={2} className="mb-4">Beautiful Components</Heading>
              <Text className="text-white/60">50+ ready-to-use components</Text>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <SlideIn direction="left">
              <GlassPanel>
                <Heading level={3} className="mb-6">Buttons</Heading>
                <div className="flex flex-wrap gap-4">
                  <VanguardButton variant="primary">Primary</VanguardButton>
                  <VanguardButton variant="accent">Accent</VanguardButton>
                  <VanguardButton variant="glass">Glass</VanguardButton>
                  <VanguardButton variant="danger">Danger</VanguardButton>
                </div>
              </GlassPanel>
            </SlideIn>
            <SlideIn direction="right">
              <GlassPanel>
                <Heading level={3} className="mb-6">Stat Cards</Heading>
                <div className="grid grid-cols-2 gap-4">
                  <StatCard title="Revenue" value="$48.2K" change="+14%" trend="up" icon={Zap} />
                  <StatCard title="Users" value="2,845" change="+8%" trend="up" icon={Box} />
                </div>
              </GlassPanel>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SlideIn direction="up">
            <div className="glass rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
              <div className="relative z-10">
                <Heading level={2} className="mb-4">Ready to Build Something Amazing?</Heading>
                <Text className="mb-8 text-white/60 max-w-xl mx-auto">Join developers building beautiful interfaces with Vanguard UI Kit.</Text>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <VanguardButton variant="accent" size="lg" icon={Rocket} onClick={() => document.getElementById('installation').scrollIntoView({ behavior: 'smooth' })}>Install Now</VanguardButton>
                  <VanguardButton variant="glass" size="lg" icon={Github} onClick={() => window.open('https://github.com/Dream-Pixels-Forge/vanguard-uikit', '_blank')}>View Source</VanguardButton>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black"><Box size={20} /></div>
                <div><p className="text-lg font-black">VANGUARD</p><p className="text-[8px] font-black uppercase tracking-widest text-blue-400">UI KIT</p></div>
              </div>
              <Text size="sm" className="text-white/40">Building beautiful interfaces with modern design aesthetics.</Text>
            </div>
            <FooterSection title="Product" links={['Components', 'Documentation', 'Changelog', 'Roadmap']} />
            <FooterSection title="Resources" links={['Getting Started', 'Installation', 'Examples', 'Support']} />
            <FooterSection title="Company" links={['About', 'Blog', 'Contact', 'Careers']} />
          </div>
          <Divider className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Text variant="subtle">© 2026 Vanguard UI Kit. Made with <Heart size={14} className="inline text-rose-400" /> by Dream-Pixels-Forge</Text>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Dream-Pixels-Forge/vanguard-uikit" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white"><Github size={20} /></a>
              <a href="https://twitter.com/dp_forge" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white"><Twitter size={20} /></a>
              <a href="https://npmjs.com/package/vanguard-uikit" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white"><Rocket size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
