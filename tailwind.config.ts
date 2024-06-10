import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0D141C',
        blue: '#1A80E5',
        deep_blue: '#4F7396',
        gray100: '#D1DBE8',
        gray200: '#E8EDF2',
      },
    },
  },
  plugins: [],
};
export default config;
