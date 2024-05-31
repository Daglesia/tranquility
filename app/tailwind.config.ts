import type { Config } from "tailwindcss";
import { createThemes } from 'tw-colors';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    createThemes({
      default: {
        'primary': '#83DEF0',
        'background': '#151515',
        'background__variant--light': '#242424',
        'secondary': '#52DE7E',
        'secondary__variant--dark': '#5DBE7B',
      },
      grasp: {
        'primary': '#0ABFAD',
        'background': '#151515',
        'background__variant--light': '#242424',
        'secondary': '#027373',
        'secondary__variant--dark': '#025159',
      }
    })
  ],
  theme: {
    fontSize: {
      p: ['1rem', '1rem'],
      h1: ['3.75rem', '5.25rem'],
      h2: ['2.25rem', '3.25rem'],
      h3: ['1.5rem', '1.5rem']
    },
    extend: {
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
    }
  },
};
export default config;
