import styled from "styled-components";

const defaults = {
  "font-size": "12px",
  "font-family": `'Helvetica', 'Verdana', sans-serif`,
  color: "#444",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
};

const disableSelect = {
  "-webkit-touch-callout": "none" /* iOS Safari */,
  "-webkit-user-select": "none" /* Safari */,
  "-moz-user-select": "none" /* Old versions of Firefox */,
  "-ms-user-select": "none" /* Internet Explorer/Edge */,
  "user-select": "none",
};

export const Header = styled.h1`
  ${defaults}
  ${({ noSelect }) => noSelect && disableSelect}
  font-size: ${({ size }) => size || "32px"};
  color: ${({ color }) => color || defaults.color};
  text-align: ${({ center }) => (center ? "center" : "initial")};
`;

export const Paragraph = styled.p`
  ${defaults}
  ${({ noSelect }) => noSelect && disableSelect}
  font-size: ${({ size }) => size || defaults.size};
  color: ${({ color }) => color || defaults.color};
  text-align: ${({ center }) => (center ? "center" : "initial")};
`;

export const Bold = styled.span`
  ${defaults}
  ${({ noSelect }) => noSelect && disableSelect}
  font-weight: bolder;
  font-size: ${({ size }) => size || defaults.size};
  color: ${({ color }) => color || defaults.color};
  text-align: ${({ center }) => (center ? "center" : "initial")};
`;

export const Link = styled.a`
  ${defaults}
  cursor: pointer;
  ${({ noSelect }) => noSelect && disableSelect}
  font-weight: bolder;
  text-decoration: underline;
  font-size: ${({ size }) => size || defaults.size};
  color: ${({ color }) => color || defaults.color};
  text-align: ${({ center }) => (center ? "center" : "initial")};
`;
