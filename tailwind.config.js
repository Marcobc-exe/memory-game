/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        laptop: {
          max: "1024px",
        },
        tabletXL: {
          max: "768px",
        },
        tabletL: {
          max: "620px",
        },
        tablet: {
          max: "590px",
        },
        mobileL: {
          max: "425px",
        },
        mobileM: {
          max: "375px",
        },
        mobileS: {
          max: "325px",
        },
      },
      boxShadow: {
        cardShadow: "3px 3px 10px 0px rgb(0 0 0 / 50%)",
      },
    },
  },
  plugins: [],
};
