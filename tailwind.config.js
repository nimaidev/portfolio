/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
  theme: {
    typography: (theme) => ({}),
    extend:
    {
      fontFamily: {
        'handlee': ['Handlee', 'sans-serif'],
        'firacode': ['Fira Code', 'monospace']
      },
      colors: {
        'app-dark': '#2E3532',
        'app-primary': "#8B2635",
        'app-white': "#e0e2db",
        'app-gray': "#D2D4C8",
        'app-teal': "#d3efbd",
        'primary-dark': "#2E3532",
        'app-sky': "#2e3532",
        'app-dark-yellow': "#FFF8DC"
      },
    },
  },
  daisyui: {
    themes: ["fantasy"],
  },
}
