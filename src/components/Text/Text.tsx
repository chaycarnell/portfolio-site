import * as S from './Text.styles';

enum SupportedTextTypes {
  REGULAR = 'regular',
  HEADER = 'header',
  PADDED = 'padded',
  BOLD = 'bold',
  LINK = 'link',
}

const Render = ({
  type = SupportedTextTypes.REGULAR,
  size,
  color,
  children,
  onClick = () => {},
  noSelect,
  center,
}: React.PropsWithChildren<{
  type: `${SupportedTextTypes}`;
  size?: string;
  color?: string;
  onClick?: () => void;
  noSelect?: boolean;
  center?: boolean;
}>) => {
  switch (type) {
    case SupportedTextTypes.HEADER:
      return (
        <S.Header
          $size={size}
          color={color}
          $noSelect={noSelect}
          $center={center}>
          {children}
        </S.Header>
      );
    case SupportedTextTypes.REGULAR:
      return (
        <S.Paragraph
          $size={size}
          color={color}
          $noSelect={noSelect}
          $center={center}>
          {children}
        </S.Paragraph>
      );
    case SupportedTextTypes.PADDED:
      return (
        <S.PaddedParagraph
          $size={size}
          color={color}
          $noSelect={noSelect}
          $center={center}>
          {children}
        </S.PaddedParagraph>
      );
    case SupportedTextTypes.BOLD:
      return (
        <S.Bold
          $size={size}
          color={color}
          $noSelect={noSelect}
          $center={center}>
          {children}
        </S.Bold>
      );
    case SupportedTextTypes.LINK:
      return (
        <S.Link
          $size={size}
          color={color}
          onClick={onClick}
          $noSelect={noSelect}
          $center={center}>
          {children}
        </S.Link>
      );
    default:
      return (
        <S.Paragraph
          $size={size}
          color={color}
          $noSelect={noSelect}
          $center={center}>
          {children}
        </S.Paragraph>
      );
  }
};

export default Render;
