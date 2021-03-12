import React from "react";
import { Chip } from "./Chip.styles";
import { Text } from "../index";

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
