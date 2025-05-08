/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {},
    },
    theme: {
      extend: {
        fontFamily: {
          prompt: ['Prompt', 'sans-serif','Ubuntu_Sans_Mono'], // เพิ่มตรงนี้
        },
      },
    },
    plugins: [],
  };