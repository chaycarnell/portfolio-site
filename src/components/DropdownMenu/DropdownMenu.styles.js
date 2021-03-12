import styled from "styled-components";

export const DropdownMenu = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #3564a5;
  background-color: #3564a5;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  width: inherit;
  text-align: center;
  padding: 12px;
  position: relative;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  > a {
    margin-top: 10px;
  }
`;
