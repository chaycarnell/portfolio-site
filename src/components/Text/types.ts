export const SupportedTextTypes = Object.freeze({
  REGULAR: 'regular',
  HEADER: 'header',
  PADDED: 'padded',
  BOLD: 'bold',
  LINK: 'link',
});

export type SupportedTextType =
  (typeof SupportedTextTypes)[keyof typeof SupportedTextTypes];
