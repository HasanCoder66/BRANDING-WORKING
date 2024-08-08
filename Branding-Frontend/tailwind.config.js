/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobileSm: "320px",
        mobileRg: "376px",
        tabletSm: "480px",
        tabletRg: "640px",
        tabletLg: "768px",
        laptopSm: "901px",
        laptopRg: "1024px",
        desktopSm: "1200px",
        desktopRg: "1350px",
        desktopLg: "1536px",
      },
      colors: {
        "theme-red": "#fca311",
        "theme-black": "#000000",
        "theme-yellow": "#fca311",
        "coral-light": "#FEF6F5",
      },
      backgroundImage: {
        "solution-bg-image": "url('/src/assets/solution-bg.jpg')",
        "login-bg-image": "url('/src/assets/loginbg.jpg')",
      },
      animation: {
        moveDown: "moveDown 0.7s ease-out 1",
      },
      keyframes: {
        moveDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-150%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
