/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ── Colors (exact hex from DESIGN.md) ──────────────────────────────
      colors: {
        // Primary — Steel Navy
        primary: '#051625',
        'on-primary': '#ffffff',
        'primary-container': '#1b2b3a',
        'on-primary-container': '#8292a5',
        'inverse-primary': '#b8c8dc',
        'primary-fixed': '#d3e4f8',
        'primary-fixed-dim': '#b8c8dc',
        'on-primary-fixed': '#0c1d2b',
        'on-primary-fixed-variant': '#384858',

        // Secondary — Safety Orange
        secondary: '#a04100',
        'on-secondary': '#ffffff',
        'secondary-container': '#fe6b00',
        'on-secondary-container': '#572000',
        'secondary-fixed': '#ffdbcc',
        'secondary-fixed-dim': '#ffb693',
        'on-secondary-fixed': '#351000',
        'on-secondary-fixed-variant': '#7a3000',

        // Tertiary
        tertiary: '#041528',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#1a2a3e',
        'on-tertiary-container': '#8191a9',
        'tertiary-fixed': '#d3e4fe',
        'tertiary-fixed-dim': '#b7c8e1',
        'on-tertiary-fixed': '#0b1c30',
        'on-tertiary-fixed-variant': '#38485d',

        // Surface
        surface: '#f8f9fb',
        'surface-dim': '#d8dadc',
        'surface-bright': '#f8f9fb',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f2f4f6',
        'surface-container': '#eceef0',
        'surface-container-high': '#e6e8ea',
        'surface-container-highest': '#e0e3e5',
        'surface-variant': '#e0e3e5',
        'surface-tint': '#506071',
        'inverse-surface': '#2d3133',
        'inverse-on-surface': '#eff1f3',

        // On-surface
        'on-surface': '#191c1e',
        'on-surface-variant': '#43474c',
        'on-background': '#191c1e',

        // Outline
        outline: '#74777c',
        'outline-variant': '#c4c6cc',

        // Error
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',

        // Background
        background: '#f8f9fb',
      },

      // ── Border Radius (rigid geometric, max 4px per DESIGN.md) ─────────
      borderRadius: {
        sm: '0.125rem',    // 2px
        DEFAULT: '0.25rem', // 4px
        md: '0.375rem',    // 6px
        lg: '0.5rem',      // 8px
        xl: '0.75rem',     // 12px
        full: '9999px',
      },

      // ── Spacing (8px base grid) ─────────────────────────────────────────
      spacing: {
        xs: '4px',
        sm: '12px',
        base: '8px',
        md: '24px',
        lg: '48px',
        xl: '80px',
        gutter: '24px',
        'margin-mobile': '16px',
        'margin-desktop': '64px',
      },

      // ── Font Families ───────────────────────────────────────────────────
      fontFamily: {
        'headline-lg': ['Hanken Grotesk', 'sans-serif'],
        'headline-lg-mobile': ['Hanken Grotesk', 'sans-serif'],
        'headline-md': ['Hanken Grotesk', 'sans-serif'],
        'headline-sm': ['Hanken Grotesk', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'body-sm': ['Inter', 'sans-serif'],
        'label-mono': ['JetBrains Mono', 'monospace'],
        'button-text': ['Hanken Grotesk', 'sans-serif'],
      },

      // ── Font Sizes (with lineHeight + fontWeight from DESIGN.md) ────────
      fontSize: {
        'headline-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'headline-sm': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-mono': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '500' }],
        'button-text': ['14px', { lineHeight: '16px', letterSpacing: '0.02em', fontWeight: '700' }],
      },

      // ── Max Width ───────────────────────────────────────────────────────
      maxWidth: {
        content: '1280px',
      },

      // ── Box Shadow — hard offset, no blur (per DESIGN.md Elevation) ─────
      boxShadow: {
        'tech': '4px 4px 0px 0px rgba(5, 22, 37, 0.10)',
        'tech-orange': '4px 4px 0px 0px rgba(254, 107, 0, 0.20)',
      },

      // ── Keyframes & Animation ───────────────────────────────────────────
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.4s ease-out forwards',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
