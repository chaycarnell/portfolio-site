import React, { useCallback, useEffect, useState } from 'react';

import { LayoutContext } from './LayoutContext';
import {
  LayoutBreakPoints,
  SupportedViewPorts,
  ViewPortType,
} from './LayoutContext.types';

export const LayoutProvider = ({
  mobileBreakPointPx = LayoutBreakPoints.MOBILE,
  children,
}: React.PropsWithChildren<{ mobileBreakPointPx: number }>) => {
  const [viewport, setViewport] = useState<ViewPortType | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(true);

  // Set viewport on window resize events
  const handleWindowResize = useCallback(
    () =>
      window.innerWidth >= mobileBreakPointPx
        ? setViewport(SupportedViewPorts.DESKTOP)
        : setViewport(SupportedViewPorts.MOBILE),
    [mobileBreakPointPx],
  );

  useEffect(() => {
    // Call initially on first render
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    // Update boolean isMobile value whenever viewport value changes
    setIsMobile(viewport === 'mobile');
  }, [viewport]);

  return (
    <LayoutContext.Provider
      value={{
        viewport,
        isMobile,
        mobileBreakPointPx,
        showHeader,
        setShowHeader,
      }}>
      {children}
    </LayoutContext.Provider>
  );
};
