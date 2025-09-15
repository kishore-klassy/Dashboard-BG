
/**
 * React hook that provides the current window width and a custom layoutType 
 * (e.g., 'mobile', 'tablet', or 'desktop'). It automatically updates on window resize.
 */
import { useState, useEffect } from "react";

const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to determine layout type dynamically
  const getLayoutType = () => {
    if (windowWidth < 768) return "mobile";
    if (windowWidth < 1024) return "tablet";
    return "desktop";
  };

  const [layoutType, setLayoutType] = useState(getLayoutType());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setLayoutType(getLayoutType());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return { windowWidth, layoutType };
};

export default useResponsive;
