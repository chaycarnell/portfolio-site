import { PageRoutes } from '@sharedTypes/enums';
import { useCallback } from 'react';

import { NavLink } from '../index';
import * as S from './DropdownMenu.styles';

const Render = ({
  open,
  setOpen,
  ...props
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => {
  const closeMenu = useCallback(() => setOpen(false), [setOpen]);
  return (
    <S.DropdownMenu open={open} aria-hidden={!open} {...props}>
      <NavLink to={PageRoutes.ROOT} onClick={closeMenu}>
        About
      </NavLink>
      <NavLink to={PageRoutes.PORTFOLIO} onClick={closeMenu}>
        Portfolio
      </NavLink>
      <NavLink to={PageRoutes.FEEDBACK} onClick={closeMenu}>
        Feedback
      </NavLink>
    </S.DropdownMenu>
  );
};

export default Render;
