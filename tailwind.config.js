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
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Spectral SC', 'serif']
      },
      fontSize: {
        pagehead: [{
          lineHeight: '0.8',
        }],
        subhead: ['14px', {
          letterSpacing: '3px',
        }],
        xsx: ['10px', {
          lineHeight: '1',
        }],
        xsm: ['0.9rem', {
          letterSpacing: '0.3em',
          lineHeight: '18px',
        }]
      },
      colors: {
        "uc-primary": "#0e0e0e",
        "uc-secondary": "#f2e0c8",
        "uc-gray": "#b7b7b7",
        "uc-gold": "#bd8d4c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
