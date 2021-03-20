import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${({ mobile }) => (mobile ? "100%" : "280px")};
  height: ${({ mobile }) => (mobile ? "215px" : "100%")};
`;

export const InnerWrapper = styled.div`
  position: relative;
  background: #3564a5;
  grid-template-columns: 160px max-content;
  height: max-content;
  width: 100%;
  height: 100%;
  z-index: 999;
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
  grid-template-columns: ${({ mobile }) =>
    mobile ? "160px max-content" : "1fr"};
`;

export const BottomContent = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  display: grid;
  background: #3564a5;
  padding: 8px;
  margin-top: ${({ isMobile }) => (isMobile ? "0px" : "12px")};
  grid-template-columns: ${({ isMobile }) =>
    isMobile ? "max-content 1fr" : "1fr"};
`;

export const NavWrapper = styled.div`
  display: grid;
  -ms-flex-pack: center;
  justify-items: center;
  margin-top: 12px;
  width: 100%;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-gap: 8px;
`;
