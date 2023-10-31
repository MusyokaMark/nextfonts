import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--inter)"],
        poppins: ["var(--poppins)"],
        robotoMono: ["var(--font-roboto-mono)"],
        agbalumo: ["var(--agbalumo)"],
        kenia: ["var(--kenia)"],
      }
    },
  },
  plugins: [],
}
export default config
