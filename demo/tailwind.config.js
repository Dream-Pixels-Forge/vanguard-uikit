/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/vanguard-uikit.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'liquid-flow': 'liquid-flow 3s ease infinite',
        'holographic-shimmer': 'holographic-shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'refraction': 'refraction 3s ease infinite',
      },
      backgroundImage: {
        'holographic': 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
        'liquid-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-inset': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'neuromorphic': '8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.03)',
        'neuromorphic-inset': 'inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.02)',
        'liquid': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'blue-glow-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
}
