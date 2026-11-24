/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0D12',
          sidebar: '#10131B',
          header: '#10131B',
          card: '#171B26',
          cardSecondary: '#1D2230',
          border: '#2A3040',
          borderLight: '#374151',
          text: '#F8FAFC',
          textMuted: '#A1A1AA',
          textDim: '#71717A',
        },
        brand: {
          primary: '#7C5CFC', // Primary purple
          secondary: '#A78BFA', // Secondary violet
          accent: '#22D3EE', // Accent cyan
          success: '#34D399', // Emerald success
          error: '#FB7185', // Rose error
          warning: '#FBBF24',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c5cfc', // Primary
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        purpleBrand: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#7c5cfc',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        skyBrand: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee', // Accent Cyan
          500: '#06b6d4',
          600: '#0891b2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.45)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.35)',
        'glow': '0 0 25px -4px rgba(124, 92, 252, 0.28)',
        'glow-cyan': '0 0 25px -4px rgba(34, 211, 238, 0.22)',
        'glow-subtle': '0 0 15px -3px rgba(124, 92, 252, 0.15)',
      }
    },
  },
  plugins: [],
}
