/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"], // my markdown stuff is in ../docs, not /src
  darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'white',
      black: 'black',
      primary: {
        DEFAULT: 'var(--ifm-color-primary)',
        light: 'var(--ifm-color-primary-light)',
        dark: 'var(--ifm-color-primary-dark)',
      },
    },
  },
  extend: {
  },
  plugins: [],
}
