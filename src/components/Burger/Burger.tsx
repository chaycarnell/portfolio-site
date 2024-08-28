import { useCallback } from 'react';

import * as S from './Burger.styles';

const Render = ({
  open,
  setOpen,
  ...props
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => {
  const onClick = useCallback(() => setOpen(!open), [open, setOpen]);
  return (
    <S.Burger
      aria-label="Toggle menu"
      aria-expanded={open}
      $open={open}
      onClick={onClick}
      {...props}>
      <span />
      <span />
      <span />
    </S.Burger>
  );
};

export default Render;
