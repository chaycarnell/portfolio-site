import styled from "styled-components";

export const Wrapper = styled.div`
  height: 200px;
  margin-bottom: 20px;
`;

export const TitlesWrapper = styled.div`
  background-color: #3564a5;
  display: grid;
  align-self: center;
  > h1 {
    margin-top: 0px;
  }
`;

export const Links = styled.div`
  background-color: #3564a5;
  height: 30px;
  display: grid;
  align-items: center;
  justify-self: center;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 8px;
`;

export const TopContent = styled.div`
  display: grid;
  background: #3564a5;
  justify-content: center;
  margin-bottom: 5px;
  grid-template-columns: 160px max-content;
`;

export const BottomContent = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  display: grid;
  background: #3564a5;
  padding: 8px;
  grid-template-columns: max-content 1fr;
`;

export const MobileView = styled.div`
  position: relative;
  padding-top: 5px;
  background: #3564a5;
  grid-template-columns: 160px max-content;
  height: max-content;
  width: 100%;
  z-index: 999;
`;
