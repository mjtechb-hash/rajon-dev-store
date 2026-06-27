/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0f172a", // প্রফেশনাল ডার্ক মোড ব্যাকগ্রাউন্ড
        brandGreen: "#22c55e", // প্লে-স্টোর স্টাইল সবুজ থিম কালার
      },
    },
  },
  plugins: [],
};
