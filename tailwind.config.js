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
        "uc-secondary": "#f2e0c8"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
