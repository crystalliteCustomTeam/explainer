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
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1500px',
          'xxl': '1700px',
          '3xl': '1900px',
        }
      },
      fontFamily: {
        sans: ["var(--font-primary)"],
        poppins: ["var"],
        sfMono: ["var(--font-sfmono)"],
        rubik: ["var(--font-rubik)"],
      },
      colors: {
        "primary": { 100: "#f5090b" },
        "secondary": { 100: "#ff2d4b" },
      },
      animation: {
        login_blur: 'login_blur 3s infinite',
        run: 'run 3s linear infinite',
        border_draw_right: 'borderdrawright 8s ease infinite',
      },
      keyframes: {
        login_blur: {
          '0%': { transform: 'translate(0) rotate(45deg)' },
          '100%': { transform: 'translateX(370px) rotate(0deg)' },
        },
        run: {
          '0%': { transform: 'translateX(0)' }, 
          '100%': { transform: 'translateX(50%)' },
        },
        borderdrawright:{
          '0%': {borderRightWidth: '0'},
          '100%': { borderRightWidth: '100%'},
        },
        
        
        
      }

    },
  },
  plugins: [],
}