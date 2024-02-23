import styled from "styled-components";

export const FeedbackCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 6px;
  background: white;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  break-inside: avoid;
`;

export const FeedbackWrapper = styled.div`
  margin: 12px;
  padding: 12px;
  column-count: 3;
  column-gap: 12px;
  max-width: 1024px;
  @media (max-width: 768px) {
    column-count: 2;
  }
  @media (max-width:  480px) {
    column-count: 1;
  }
`;
