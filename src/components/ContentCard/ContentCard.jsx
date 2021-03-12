import React from "react";
import { ContentCard } from "./ContentCard.styles";

const Render = ({
  border = false,
  center = false,
  margin = null,
  padding = null,
  children,
}) => (
  <ContentCard
    border={border}
    center={center}
    margin={margin}
    padding={padding}
  >
    {children}
  </ContentCard>
);

export default Render;
