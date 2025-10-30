import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary luxury palette
        champagne: {
          50: '#FDFCFB',
          100: '#F7F4F0',
          200: '#EFE8DA', // Primary champagne
          300: '#E5DAC8',
          400: '#D9CBB5',
          500: '#CCBCA2',
        },
        terracotta: {
          100: '#E5C4B5',
          200: '#D9A895',
          300: '#CF8E75',
          400: '#C27A5E', // Primary terracotta
          500: '#B56B4F',
          600: '#A25C40',
        },
        sand: {
          50: '#FDFDFB',
          100: '#F9F8F5',
          200: '#F5F3ED', // Primary sand
          300: '#EDE9E0',
          400: '#E5DFD3',
          500: '#DDD5C6',
        },
        // Supporting colors
        ocean: {
          50: '#F0F5F8',
          100: '#D9E8F1',
          300: '#A8C5D1',
          400: '#7BA3B4',
          500: '#4C7FA1',
          600: '#3A5F7F',
        },
        earth: {
          100: '#D4C4B5',
          200: '#C4B5A0',
          300: '#A69482',
        },
        // Text colors
        neutral: {
          text: '#1E1E1E', // Soft black as primary text
          'text-light': '#4A4A4A',
          'text-lighter': '#6B6B6B',
          light: '#FAF9F6',
          lighter: '#FEFEFE',
        },
        // Accent colors
        accent: {
          gold: '#D4B894', // Champagne gold accent
          sage: '#9DB4A3',
          terracotta: '#C27A5E',
          warm: '#D4A59A',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      spacing: {
        'container': '1200px',
        'container-sm': '800px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
