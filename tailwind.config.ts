import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: { 
    extend: {
      fontFamily: {
        primary: "Jockey One"
      },
      keyframes: {
        bullet: {
          '0%': { transform: 'translateY(50vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh)', opacity: '1' },
        },
      },
      animation: {
        bullet: 'bullet 7s linear infinite',
        bullet2: 'bullet 5s linear infinite',
        bullet3: 'bullet 4s linear infinite',
      },
      skew: {
        '25': '25deg',
        '-25': '-25deg',
      },
    },
    container: { center: true }
  },
};
