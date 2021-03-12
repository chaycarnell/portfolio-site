import React from "react";
import * as S from "./Text.styles";

/**
 * Render text based on type passed, defaults to paragraph
 * @param {string} type i.e. Regular, Bold
 * @param {string} size i.e. 12px, 1rem
 * @param {string} children to render
 * @returns {import("react").ReactElement}
 */
const Render = ({
  type = "regular",
  size,
  color,
  children = "",
  onClick = null,
  noSelect = false,
  center = false,
}) => {
  switch (type) {
    case "header":
      return (
        <S.Header size={size} color={color} noSelect={noSelect} center={center}>
          {children}
        </S.Header>
      );
    case "regular":
      return (
        <S.Paragraph
          size={size}
          color={color}
          noSelect={noSelect}
          center={center}
        >
          {children}
        </S.Paragraph>
      );
    case "bold":
      return (
        <S.Bold size={size} color={color} noSelect={noSelect} center={center}>
          {children}
        </S.Bold>
      );
    case "link":
      return (
        <S.Link
          size={size}
          color={color}
          onClick={() => onClick && onClick()}
          noSelect={noSelect}
          center={center}
        >
          {children}
        </S.Link>
      );
    default:
      return (
        <S.Paragraph
          size={size}
          color={color}
          noSelect={noSelect}
          center={center}
        >
          {children}
        </S.Paragraph>
      );
  }
};

export default Render;
