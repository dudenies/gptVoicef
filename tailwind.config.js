/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#f6f6f6",
          "300": "#f4f4f4",
          "400": "rgba(238, 238, 238, 0.4)",
        },
        white: "#fff",
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#e6e6e6",
        },
        forestgreen: {
          "100": "#0da625",
          "200": "#0ca625",
        },
        limegreen: "#26bf40",
        gray: {
          "100": "#002433",
          "200": "rgba(0, 36, 51, 0.5)",
        },
        darkslategray: {
          "100": "#335766",
          "200": "#085e79",
          "300": "#333",
        },
        deepskyblue: {
          "100": "#08bef8",
          "200": "#00a6de",
        },
        lightgray: "rgba(212, 212, 212, 0.4)",
        steelblue: "#2e85a1",
        black: "#000",
        red: "#ff0303",
      },
      spacing: {},
      fontFamily: {
        "button-button": "Poppins",
      },
      borderRadius: {
        "6xs": "7px",
        "7xs-3": "5.3px",
        "39xl-1": "58.1px",
        "8xs": "5px",
        "8xs-8": "4.8px",
        "6xs-1": "6.1px",
        "3xs": "10px",
        "7xs-1": "5.1px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "18px",
      "sm-8": "13.8px",
      "9xl": "28px",
      "base-2": "16.2px",
      "sm-5": "13.5px",
      "2xl-8": "21.8px",
      mid: "17px",
      "smi-2": "12.2px",
      inherit: "inherit",
    },
    screens: {
      mq1600: {
        raw: "screen and (max-width: 1600px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
