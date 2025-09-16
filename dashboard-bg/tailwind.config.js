
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',  // Enable dark mode to use class-based toggles
  theme: {
    extend: {
      // Custom accent gradients
      backgroundImage: {
        'gradient-accent': 'linear-gradient(90deg, #38bdf8, #6366f1)',
        'gradient-secondary': 'linear-gradient(70deg, #f472b6, #fb923c)',
      },

      // Rounded corners
      borderRadius: {
        'custom-md': '12px',
        'custom-lg': '24px',
      },

      // Box shadows
      boxShadow: {
        'custom-soft': '0px 4px 10px rgba(0,0,0,0.1)',
        'custom-strong': '0px 6px 12px rgba(0,0,0,0.25)',
      },

      // Additional utilities
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },

      // Typography extensions
      fontFamily: {
        'dashboard': ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
