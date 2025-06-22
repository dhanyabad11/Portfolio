/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        'primary': '#e74c3c',
        'primary-dark': '#c0392b',
        'text-primary': '#333333',
        'text-secondary': '#444444',
        'gray-sidebar': '#f8f9fa',
        'border-light': '#f0f0f0',
      },
      maxWidth: {
        'content': '800px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
}