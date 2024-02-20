import React from "react";

import { Text } from "../index";
import { Chip } from "./Chip.styles";

const Render = ({ color = "#3564a5", textColor = "#FFF", children }) => {
  return (
    <Chip color={color}>
      <Text type="regular" color={textColor}>
        {children}
      </Text>
    </Chip>
  );
};

export default Render;
