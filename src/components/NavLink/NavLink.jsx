import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
  font-size: ${({ size }) => (size ? size : "initial")};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  color: ${({ color }) => (color ? color : " var(--white)")};
  font-family: "Helvetica", "Verdana", sans-serif;
  text-decoration: "underline";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export default NavLink;
