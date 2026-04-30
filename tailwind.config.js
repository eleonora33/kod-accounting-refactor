/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#0E0D3C',
        graphite: '#252946',
        kodBlue: '#0E0D3C',
        kodGold: '#D3F7FD',
        mist: '#f5fbfd',
        brandNavy: '#0E0D3C',
        brandCyan: '#D3F7FD',
        brandCyanDeep: '#197586',
        brandGold: '#D9B45B',
        brandGoldSoft: '#FFF3CF',
        brandLavender: '#a8adc8',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(14, 13, 60, 0.14)',
      },
      fontFamily: {
        sans: ['Readex Pro', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
