
#!/bin/bash

# Initialize React project
npx create-react-app dashboard-bg
cd dashboard-bg

# Install dependencies
npm install tailwindcss postcss autoprefixer
npm install @shadcn/ui lucide-react recharts framer-motion

# Initialize TailwindCSS
npx tailwindcss init

# Create extra directory structure
mkdir components styles assets

# Create tailwind.config.js configuration
cat <<EOT > tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1a202c',
      },
      gradientColorStops: {
        primary: '#6366f1',
        secondary: '#e11d48',
      },
    },
  },
  plugins: [],
};
EOT

# Add styles/index.css integration
cat <<EOT > styles/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOT

# Final setup message
echo "Project initialized and dependencies installed."
