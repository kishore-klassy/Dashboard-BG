
 1: 
 2: #!/bin/bash
 3: 
 4: # Step 1: Create React project using Vite
 5: npm create vite@latest dashboard-bg -- --template react
 6: cd dashboard-bg
 7: 
 8: # Step 2: Install TailwindCSS
 9: touch postcss.config.js
10: touch tailwind.config.js
11: #Documentation
12: 
13: # Step 3: Install shadcn/ui dependencies
14: npm install @shadcn/ui react-icons clsx
15: 
16: # Optional: Add shadcn/ui components (here as placeholders for further development)
17: echo "import { Button, Card } from '@shadcn/ui';" > src/components/UIComponents.jsx
