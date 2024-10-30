export const SupportedViewPorts = Object.freeze({
  MOBILE: 'mobile',
  DESKTOP: 'desktop',
});

export const LayoutBreakPoints = Object.freeze({
  MOBILE: 860,
});

export type ViewPortType =
  (typeof SupportedViewPorts)[keyof typeof SupportedViewPorts];
