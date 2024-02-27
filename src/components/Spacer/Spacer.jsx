import styled from "styled-components";

const Spacer = styled.div`
  height: ${({ $space }) => ($space ? $space : "0px")};
  width: ${({ $space }) => ($space ? $space : "0px")};
`;

export default Spacer;
