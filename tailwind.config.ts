import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  safelist: [
    'antialiased', 'min-h-screen', 'flex', 'flex-col', 'flex-row', 'flex-grow', 'pt-16',
    'bg-blue-600', 'dark:bg-gray-800', 'bg-gray-50', 'dark:bg-gray-900', 
    'text-gray-900', 'dark:text-white', 'bg-white', 'dark:bg-gray-800',
    'text-gray-600', 'dark:text-gray-300', 'text-blue-600', 'dark:text-blue-400',
    'container', 'mx-auto', 'px-4', 'py-8', 'my-8', 'gap-4',
    'grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3',
    'rounded-lg', 'shadow-md', 'shadow-lg', 'shadow-xl', 'p-6',
    'hover:scale-105', 'transform', 'transition-all', 'duration-300',
    'from-blue-600', 'to-purple-600', 'bg-gradient-to-r', 'bg-clip-text', 'text-transparent',
    'gradient-text', 'gradient-btn', 'hover-card',
    'animate-pulse-slow'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
      },
      zIndex: {
        '-5': '-5',
      },
    },
  },
  plugins: [],
} satisfies Config;
