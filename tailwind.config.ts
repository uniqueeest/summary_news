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
      borderRadius: {
        basic: '10px',
        button: '12px',
      },
      fontSize: {
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        26: '1.625rem',
        28: '1.75rem',
        30: '1.875rem',
      },
    },
  },
  plugins: [],
};
export default config;
