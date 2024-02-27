import styled from "styled-components";

export const ContentCard = styled.div`
  display: grid;
  justify-self: ${({ $center }) => ($center ? "center" : "initial")};
  padding: ${({ $padding }) => ($padding ? $padding : "0px")};
  margin: ${({ $margin }) => ($margin ? $margin : "0px")};
  border: ${({ $border }) => ($border ? `1px solid rgba(0,0,0,0.1)` : "none")};
  overflow-y: ${({ $scrollable }) => ($scrollable ? "auto" : "unset")};
  border-radius: 6px;
  max-width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "1024px")};
`;
