import React, { useContext, useEffect, useState } from "react";

// A basic viewport context to help with responsive layout conditional rendering
// something like https://www.npmjs.com/package/react-responsive feels a bit overkill for this site
const LayoutContext = React.createContext();
export const useViewport = () => useContext(LayoutContext);
export const LayoutProvider = ({ breakpointPx = 860, children }) => {
  const [viewport, setViewport] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  // Set viewport on window resize events
  const handleWindowResize = () =>
    window.innerWidth >= breakpointPx
      ? setViewport("desktop")
      : setViewport("mobile");

  useEffect(() => {
    // Call initially on first render
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    // Update boolean isMobile value whenever viewport value changes
    setIsMobile(viewport === "mobile");
  }, [viewport]);

  return (
    <LayoutContext.Provider
      value={{ viewport, isMobile, breakpointPx, showHeader, setShowHeader }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
