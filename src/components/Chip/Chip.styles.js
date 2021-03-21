import styled from "styled-components";

export const Chip = styled.div`
  display: grid;
  width: max-content;
  background-color: ${({ color }) => (color ? color : 'var(--primary)')};
  padding: 8px;
  margin: 4px 4px 4px 0px;
  border-radius: 6px;
  > p {
    margin: 0px;
  }
`;