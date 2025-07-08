// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tema Claro
        'light-bg-primary': '#FFFFFF',
        'light-bg-secondary': '#F8FAFC',
        'light-text-primary': '#1E293B',
        'light-text-secondary': '#64748B',
        'light-primary': '#3B82F6',
        'light-secondary': '#10B981',
        'light-accent': '#8B5CF6',
        'light-border': '#E2E8F0',

        // Tema Escuro
        'dark-bg-primary': '#0F172A',
        'dark-bg-secondary': '#1E293B',
        'dark-text-primary': '#F8FAFC',
        'dark-text-secondary': '#CBD5E1',
        'dark-primary': '#60A5FA',
        'dark-secondary': '#34D399',
        'dark-accent': '#A78BFA',
        'dark-border': '#334155',
      },
      boxShadow: {
        'light': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'dark': '0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
}
export default config