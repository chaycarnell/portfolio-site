import { useViewport } from '@context/LayoutContext/LayoutContext';
import React, { useCallback, useEffect } from 'react';

import { Page } from './Page.styles';

const Render = ({
  border = false,
  center = false,
  margin = null,
  padding = null,
  scrollable = false,
  fullWidth = false,
  children,
}: React.PropsWithChildren<{
  border?: boolean;
  center?: boolean;
  margin?: string | null;
  padding?: string | null;
  scrollable?: boolean;
  fullWidth?: boolean;
}>) => {
  const { setShowHeader } = useViewport();

  // Handle scroll
  const handleScroll = useCallback(
    (e: Event) => {
      const target = e.target as HTMLDivElement;
      const atTop = target?.scrollTop === 0;
      // Only fag as "hideable" if the scroll container has a greater height than
      // window height, otherwise don't bother hiding
      const shouldHide = target.scrollHeight > window.innerHeight + 100;
      if (atTop) setShowHeader(true);
      if (!atTop && shouldHide) setShowHeader(false);
    },
    [setShowHeader],
  );

  useEffect(() => {
    document
      ?.getElementById('pageWrapper')
      ?.addEventListener('scroll', handleScroll);
    return () =>
      document
        ?.getElementById('pageWrapper')
        ?.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Page
      id="pageWrapper"
      $border={border}
      $center={center}
      $margin={margin}
      $padding={padding}
      $scrollable={scrollable}
      $fullWidth={fullWidth}>
      {children}
    </Page>
  );
};

export default Render;
