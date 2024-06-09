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
    },
    container: { center: true }
  },
};
