import React from "react";

import * as S from './Burger.styles';

const Render = ({ open, setOpen, ...props }) => (
  <S.Burger
    aria-label="Toggle menu"
    aria-expanded={open}
    $open={open}
    onClick={() => setOpen(!open)}
    {...props}
  >
    <span />
    <span />
    <span />
  </S.Burger>
);

export default Render;
