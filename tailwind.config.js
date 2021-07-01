module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fonts: {

      },
      colors: {
        "uc-primary": "#0e0e0e",
        "uc-secondary": "#f2e0c8",
        "uc-gray": "#b7b7b7"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
