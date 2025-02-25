import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  safelist: [
    'antialiased', 'min-h-screen', 'flex', 'flex-col', 'flex-row', 'flex-grow', 'pt-16',
    'bg-blue-600', 'dark:bg-gray-800', 'bg-gray-50', 'dark:bg-gray-900', 
    'text-gray-900', 'dark:text-white', 'bg-white', 'dark:bg-gray-800',
    'text-gray-600', 'dark:text-gray-300', 'text-blue-600', 'dark:text-blue-400',
    'container', 'mx-auto', 'px-4', 'py-8', 'my-8', 'gap-4',
    'grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3',
    'rounded-lg', 'shadow-md', 'p-6'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
