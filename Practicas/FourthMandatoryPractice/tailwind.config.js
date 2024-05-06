/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {screens: {
      'md': '835px',
    }},
  },
  plugins: [],
}