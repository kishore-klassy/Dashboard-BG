
import { motion } from 'framer-motion';
import { Home, Settings, User } from 'lucide-react';
import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Sidebar animation variants
  const sidebarVariants = {
    expanded: { width: '250px', opacity: 1 },
    collapsed: { width: '80px', opacity: 1 },
  };

  const menuItems = [
    { icon: <Home />, label: 'Home' },
    { icon: <Settings />, label: 'Settings' },
    { icon: <User />, label: 'Profile' },
  ];

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-800 to-gray-900 h-screen text-white flex flex-col"
      animate={isCollapsed ? 'collapsed' : 'expanded'}
      variants={sidebarVariants}
      transition={{ duration: 0.5 }}
    >
      <button
        className="p-4 text-sm focus:outline-none hover:bg-gray-700"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        Toggle
      </button>

      <nav className="mt-10">
        {menuItems.map(({ icon, label }, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-3 hover:bg-gray-700 rounded-md cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xl">{icon}</span>
            {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
