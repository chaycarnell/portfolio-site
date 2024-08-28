import React from 'react';

import { ContentCard } from './ContentCard.styles';

interface ContentCardProps {
  border?: boolean;
  center?: boolean;
  margin?: string;
  padding?: string;
  scrollable?: boolean;
  fullWidth?: boolean;
}

const Render = ({
  border,
  center,
  margin,
  padding,
  scrollable,
  fullWidth,
  children,
}: React.PropsWithChildren<ContentCardProps>) => (
  <ContentCard
    $border={border}
    $center={center}
    $margin={margin}
    $padding={padding}
    $scrollable={scrollable}
    $fullWidth={fullWidth}>
    {children}
  </ContentCard>
);

export default Render;
