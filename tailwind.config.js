module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        supply: ['Supply Mono', 'mono'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        party: '#ff47f3ff',
        party50: '#FFC8FF',
        beige: '#E9EDE9',
        beige50: '#B5C3C4',
        beige75: '#3D5152',
        beige80: '#6D6D6D',
        beige100: '#5E6B6E',
      },
    },
  },
  plugins: [],
};

