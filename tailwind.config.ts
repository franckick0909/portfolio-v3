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
         'sawarabi-mincho': ['var(--font-sawarabi-mincho)'],
        'berkshire-swash': ['var(--font-berkshire-swash)'],
        'pinyon-script': ['var(--font-pinyon-script)'],
        'luxurious-script': ['var(--font-luxurious-script)'],
        'inter': ['var(--font-inter)'],
        'allura': ['var(--font-allura)'],
      },
    },
  },
  plugins: [],
};
export default config;
