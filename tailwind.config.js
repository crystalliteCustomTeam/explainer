/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1200px',
          xl: '1360px',
          '2xl': '1500px',
        }
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1500px',
        'xxl': '1700px',
        '3xl': '1900px',
      },
      fontFamily: {
        sans: ["var(--font-primary)"],
        poppins: ["var"]
      },
      colors: {
        "primary": { 100: "#f5090b" },
        "secondary": { 100: "#ff2d4b" },
      }
    },
  },
  plugins: [],
}