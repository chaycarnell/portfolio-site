import React from "react";
import { NavLink } from "../index";
import * as S from "./DropdownMenu.styles";

const Render = ({ open, setOpen, ...props }) => {
  const closeMenu = () => setOpen(false);
  return (
    <S.DropdownMenu open={open} aria-hidden={!open} {...props}>
      <NavLink to="/" onClick={closeMenu}>
        About
      </NavLink>
      <NavLink to="/portfolio" onClick={closeMenu}>
        Portfolio
      </NavLink>
      <NavLink to="/feedback" onClick={closeMenu}>
        Feedback
      </NavLink>
    </S.DropdownMenu>
  );
};

export default Render;
