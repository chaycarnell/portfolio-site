import { createContext, use } from 'react';

import {
  LayoutBreakPoints,
  SupportedViewPorts,
  ViewPortType,
} from './LayoutContext.types';

interface LayoutContextProps {
  viewport: ViewPortType;
  isMobile: boolean;
  mobileBreakPointPx: number;
  showHeader: boolean;
  setShowHeader: (val: boolean) => void;
}

export const LayoutContext = createContext<LayoutContextProps>({
  viewport: SupportedViewPorts.DESKTOP,
  isMobile: false,
  mobileBreakPointPx: LayoutBreakPoints.MOBILE,
  showHeader: true,
  setShowHeader: () => {},
});

export const useViewport = (): LayoutContextProps => use(LayoutContext);
