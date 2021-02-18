import colors from './colors';

export const bodyFontSize = 16;
export const baselinePX = 24;

export const base = (multiplier = 1): string => `${(baselinePX / bodyFontSize) * multiplier}rem`;

export const defaultWallColor = '#EDEDED';

export const breakpoints = {
  xs: 480,
  s: 600,
  m: 850,
  l: 1024,
  xl: 1440,
};

const shadowSpread = 'inset 0px 0px 0px 2px';
export const borderShadows = {
  lightGray: `${shadowSpread} ${colors.lightGray}`,
  gray: `${shadowSpread} ${colors.gray}`,
};

export default {
  bodyFontSize,
  baselinePX,
  base,
  borderRadius: 4,
  strokeWidth: 2,
  transTime: 100,
  transCurve: 'linear',
  contentWidth: '1200px',
  defaultTransTime: 400,
  defaultTransCurve: 'cubic-bezier(.345,0,0,1)',
  breakpoints,
};
