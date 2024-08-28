import styled from 'styled-components';

export const Page = styled.div<{
  $center: boolean;
  $padding: string | null;
  $margin: string | null;
  $scrollable: boolean;
  $border: boolean;
  $fullWidth: boolean;
}>`
  display: grid;
  justify-self: ${({ $center }) => ($center ? 'center' : 'initial')};
  padding: ${({ $padding }) => ($padding ? $padding : '0px')};
  margin: ${({ $margin }) => ($margin ? $margin : '0px')};
  border: ${({ $border }) => ($border ? `1px solid rgba(0,0,0,0.1)` : 'none')};
  overflow-y: ${({ $scrollable }) => ($scrollable ? 'auto' : 'unset')};
  border-radius: 6px;
  max-width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '1024px')};
  justify-content: center;
`;
