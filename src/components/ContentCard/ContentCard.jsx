import React from "react";

import { ContentCard } from "./ContentCard.styles";

const Render = ({
  border = false,
  center = false,
  margin = null,
  padding = null,
  scrollable = false,
  fullWidth = false,
  children,
}) => (
  <ContentCard
    $border={border}
    $center={center}
    $margin={margin}
    $padding={padding}
    $scrollable={scrollable}
    $fullWidth={fullWidth}
  >
    {children}
  </ContentCard>
);

export default Render;
