import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ size }) => (size ? size : "initial")};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-family: "Helvetica", "Verdana", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export default NavLink;
