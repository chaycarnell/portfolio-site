import styled from "styled-components";

export const FeedbackCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 12px;
  padding: 12px;
  border-radius: 6px;
  display: grid;
  max-width: 240px;
  grid-gap: 8px;
  height: fit-content;
  > p {
    margin: 0px;
  }
`;

export const FeedbackWrapper = styled.div`
  margin: 12px;
  padding: 12px;
  max-width: 1024px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-self: center;
  justify-content: center;
`;
