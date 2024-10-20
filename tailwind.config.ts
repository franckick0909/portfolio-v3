import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'pinyon-script': ['var(--font-pinyon-script)'],
        'inter': ['var(--font-inter)'],
        'marcellus': ['var(--font-marcellus)'],
      },
    },
  },
  plugins: [],
  safelist: [
    'hover:border-b-black',
    'hover:border-b-2',
    // Ajoutez d'autres classes de hover si nécessaire
  ],
};
export default config;
