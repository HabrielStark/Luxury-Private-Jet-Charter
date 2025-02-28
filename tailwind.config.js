/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(var(--color-primary) / 0.05)',
          100: 'hsl(var(--color-primary) / 0.1)',
          200: 'hsl(var(--color-primary) / 0.2)',
          300: 'hsl(var(--color-primary) / 0.3)',
          400: 'hsl(var(--color-primary) / 0.4)',
          500: 'hsl(var(--color-primary) / 0.5)',
          600: 'hsl(var(--color-primary) / 0.6)',
          700: 'hsl(var(--color-primary) / 0.7)',
          800: 'hsl(var(--color-primary) / 0.8)',
          900: 'hsl(var(--color-primary) / 0.9)',
          950: 'hsl(var(--color-primary) / 0.95)',
        },
        secondary: {
          500: 'hsl(var(--color-secondary) / 0.5)',
          600: 'hsl(var(--color-secondary) / 0.6)',
        },
        accent: {
          500: 'hsl(var(--color-accent) / 0.5)',
        },
        background: 'hsl(var(--color-background) / 1)',
        foreground: 'hsl(var(--color-foreground) / 1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
};