import type { Config } from 'tailwindcss';
const colors = require('./app/ui/styles/colors.js');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '13px',
        sm: '16px',
        base: '20px',
        lg: '25px',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: colors,
      backgroundImage: {
        'primary-gradient': `linear-gradient(to bottom, ${colors.dark}, ${colors.white})`,
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  }
};
export default config;
