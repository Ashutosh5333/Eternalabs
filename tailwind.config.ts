
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B87F3",
        surface: "#0B0E14",
        surfaceLight: "#141A24",
        border: "#1F2632",
        textMuted: "#8B9BB5",
        success: "#24D26D",
        danger: "#FF4A4A"
      },
      fontFamily: {
        sans: ["Inter", "system-ui"]
      }
    }
  },
  plugins: []
};
export default config;
