// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#ff00ff',
        'neon-pink': '#ff69b4',
        'dark': '#0a0a0a',
        'darker': '#050505',
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f3ff, 0 0 20px #00f3ff, 0 0 60px #00f3ff',
        'neon-purple': '0 0 5px #ff00ff, 0 0 20px #ff00ff, 0 0 60px #ff00ff',
        'neon-pink': '0 0 5px #ff69b4, 0 0 20px #ff69b4, 0 0 60px #ff69b4',
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px #00f3ff, 0 0 20px #00f3ff' },
          '50%': { boxShadow: '0 0 5px #00f3ff, 0 0 20px #00f3ff, 0 0 60px #00f3ff' },
        },
      },
    },
  },
  plugins: [],
}