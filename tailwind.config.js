/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Grey": "#43454D",
        "BG1": "#292F36",
        "BG2": "#1A1E23",
        "Brand1": "#12F7D6",
        "Brand2": "#98FAEC"

      },
      fontFamily: {
        "UbuntoRegular": "ubuntu-regular",
        "UbuntoMedium": "ubuntu-medium",
        "UbuntoLight": "ubuntu-light",
        "plexMedium": "Plex-medium",
        "plexRegular": "Plex-regular",
      },
      container: {

        center: true

      },

      screens: {
        'xs': '342px',
        'sm': '704px',
        'md': '1024px',
        'lg': '1664px'

      }

    },

  },
  plugins: [function ({ addVariant }) {
    addVariant('child', '& > *')
    addVariant('child-hover', '& > *:hover')
  }

  ],
}

