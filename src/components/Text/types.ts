export enum SupportedTextTypes {
  REGULAR = 'regular',
  HEADER = 'header',
  PADDED = 'padded',
  BOLD = 'bold',
  LINK = 'link',
}

export type SupportedTextType = `${SupportedTextTypes}`;
