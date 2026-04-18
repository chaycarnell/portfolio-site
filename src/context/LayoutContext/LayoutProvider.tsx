import React, { useEffect, useState } from 'react';

import { LayoutContext } from './LayoutContext';
import {
  LayoutBreakPoints,
  SupportedViewPorts,
  ViewPortType,
} from './LayoutContext.types';

const getViewport = (breakpoint: number): ViewPortType =>
  window.innerWidth >= breakpoint
    ? SupportedViewPorts.DESKTOP
    : SupportedViewPorts.MOBILE;

export const LayoutProvider = ({
  mobileBreakPointPx = LayoutBreakPoints.MOBILE,
  children,
}: React.PropsWithChildren<{ mobileBreakPointPx: number }>) => {
  const [viewport, setViewport] = useState<ViewPortType>(() =>
    getViewport(mobileBreakPointPx),
  );
  const [showHeader, setShowHeader] = useState<boolean>(true);

  const isMobile = viewport === 'mobile';

  useEffect(() => {
    const handleResize = () => setViewport(getViewport(mobileBreakPointPx));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileBreakPointPx]);

  return (
    <LayoutContext
      value={{
        viewport,
        isMobile,
        mobileBreakPointPx,
        showHeader,
        setShowHeader,
      }}>
      {children}
    </LayoutContext>
  );
};
