import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        githubGray: '#24292e',
        gptGray: '#1e1e1e', // Define the exact color
        gradient: 'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'
      },
      boxShadow: {
        'deep-right': '10px 10px 20px rgba(0, 0, 0, 0.25)',  // Right side shadow
        'deep-left': '-10px 10px 20px rgba(0, 0, 0, 0.25)',  // Left side shadow
        'deep-top': '10px -10px 20px rgba(0, 0, 0, 0.25)',   // Top side shadow
        'deep-bottom': '10px 10px 20px rgba(0, 0, 0, 0.25)', // Bottom side shadow
        'deep-all': '10px 10px 20px rgba(0, 0, 0, 0.5)',     // All sides shadow
      }
    },
  },
  plugins: [],
};
export default config;
