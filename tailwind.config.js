/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  theme: {
    extend:
    {
      fontFamily: {
        'handlee': ['Handlee', 'sans-serif'],
        'caveat': ['Caveat', 'sans-serif']
      },
      colors: {
        'bg-color': '#EFE8F7',
        'app-purple': "#D4AEFF",
        'app-yellow': "#FEDE65"
      },
    },
  },
  daisyui: {
    themes: ["fantasy"],
  },
}
