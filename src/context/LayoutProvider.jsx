import React, { useCallback, useEffect, useState } from "react";

import { LayoutContext } from "./LayoutContext";

export const LayoutProvider = ({ breakpointPx = 860, children }) => {
  const [viewport, setViewport] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  // Set viewport on window resize events
  const handleWindowResize = useCallback(
    () =>
      window.innerWidth >= breakpointPx
        ? setViewport("desktop")
        : setViewport("mobile"),
    [breakpointPx]
  );

  useEffect(() => {
    // Call initially on first render
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

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
