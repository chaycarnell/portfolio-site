import styled, { css } from "styled-components";

const transition = css`
  ${({ $showHeader }) =>
    $showHeader ? "max-height 0.15s ease-in" : "max-height 0.15s ease-out"};
`;

const maxHeight = css`
  ${({ $showHeader }) => ($showHeader ? "210px" : "48px")};
`;

export const Wrapper = styled.div`
  width: ${({ $mobile }) => ($mobile ? "100%" : "280px")};
  max-height: ${({ $mobile }) => ($mobile ? maxHeight : "100%")};
  transition: ${({ $mobile }) => ($mobile ? transition : "none")};
  @media (max-width: 400px) {
    max-height: ${({ $showHeader }) => ($showHeader ? "144px" : "48px")};
  }
`;

export const InnerWrapper = styled.div`
  position: relative;
  background: var(--primary);
  grid-template-columns: 160px max-content;
  height: max-content;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const TitlesWrapper = styled.div`
  background-color: var(--primary);
  display: grid;
  align-self: center;
  > h1 {
    margin: 0px 0px 0px 12px;
    @media (max-width: 400px) {
      font-size: 24px;
    }
  }
  > span {
    @media (max-width: 400px) {
      font-size: 18px;
    }
  }
`;

export const Links = styled.div`
  background-color: var(--primary);
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
  background: var(--primary);
  justify-content: center;
  margin-bottom: ${({ $showHeader }) => ($showHeader ? "5px" : "0px")};
  overflow: hidden;
  transition: ${({ $mobile }) => ($mobile ? transition : "none")};
  max-height: ${({ $showHeader }) => ($showHeader ? "none" : "0px")};
  grid-template-columns: ${({ $mobile }) =>
    $mobile ? "160px max-content" : "1fr"};
  @media (max-width: 400px) {
    grid-template-columns: 92px max-content;
    max-height: ${({ $showHeader }) => ($showHeader ? "144px" : "0px")};
  }
`;

export const BottomContent = styled.div`
  border-top: ${({ $showHeader }) =>
    $showHeader ? "1px solid rgba(255, 255, 255, 0.5)" : "none"};
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  display: grid;
  background: var(--primary);
  padding: 8px;
  margin-top: ${({ $mobile }) => ($mobile ? "0px" : "12px")};
  grid-template-columns: ${({ $mobile }) =>
    $mobile ? "max-content 1fr" : "1fr"};
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
