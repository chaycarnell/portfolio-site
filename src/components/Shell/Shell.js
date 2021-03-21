import styled from "styled-components";

const Shell = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-auto-flow: ${({ viewport }) =>
    viewport === "desktop" ? "column" : "row"};
  grid-auto-rows: ${({ viewport }) =>
    viewport === "desktop" ? "1fr" : "max-content 1fr"};
    grid-auto-columns: ${({ viewport }) =>
    viewport === "desktop" ? "max-content 1fr" : "1fr"};
  overflow: hidden;
`;

export default Shell;
