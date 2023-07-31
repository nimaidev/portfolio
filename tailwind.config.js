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
        'caveat': ['Caveat', 'sans-serif']
      },
      colors: {
        'bg-color': '#EFE8F7',
        'app-purple': "#D4AEFF",
        'app-yellow': "#FEDE65",
        'app-purple': "#D4AEFF",
        'primary-dark': "#FEDE65",
        'app-sky': "#87CEEB",
        'app-dark-yellow': "#FFF8DC"
      },
    },
  },
  daisyui: {
    themes: ["fantasy"],
  },
}
