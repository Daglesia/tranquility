import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    fontSize: {
      p: ['1rem', '1rem'],
      h1: ['3.75rem', '5.25rem'],
      h2: ['2.25rem', '3.25rem'],
      h3: ['1.5rem', '1.5rem']
    }
  }
};
export default config;
