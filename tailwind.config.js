/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sigma: {
          blue: {
            50: '#eef3fb',
            100: '#d6e2f4',
            200: '#adc6e9',
            300: '#7aa3da',
            400: '#4a7cc4',
            500: '#2a5da8',
            600: '#1f4a8c',
            700: '#193d73',
            800: '#142f5a',
            900: '#0e2242',
            950: '#0a1730',
          },
          navy: {
            700: '#1b2a4a',
            800: '#142039',
            900: '#0d1728',
            950: '#080f1c',
          },
          ivory: {
            50: '#fdfcf8',
            100: '#f9f5ec',
            200: '#f2ebd8',
            300: '#e8dcc0',
            400: '#d9c79e',
          },
          stone: {
            100: '#f5f3ef',
            200: '#e9e4db',
            300: '#d6cfc2',
            400: '#b8ad9b',
            500: '#9a8d78',
            600: '#7d7160',
          },
          amber: {
            400: '#f4a838',
            500: '#e88c12',
            600: '#cc7400',
            700: '#a85d00',
          },
          green: {
            400: '#3da667',
            500: '#2d8a52',
            600: '#246d42',
            700: '#1c5635',
          },
          graphite: {
            700: '#3a3a3a',
            800: '#2a2a2a',
            900: '#1c1c1c',
            950: '#121212',
          },
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h1': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h2': ['clamp(1.875rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h4': ['clamp(1.25rem, 1.75vw, 1.5rem)', { lineHeight: '1.25', fontWeight: '600' }],
        'eyebrow': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.18em', fontWeight: '700' }],
        'label': ['0.875rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      maxWidth: {
        'content': '1280px',
        'wide': '1440px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        'section': '8rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      transitionTimingFunction: {
        'sigma': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 1s ease both',
        'slow-zoom': 'slow-zoom 6s ease-out both',
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
