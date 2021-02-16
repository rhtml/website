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

export const shadows = {
  xs: '0px 2px 4px rgba(0, 0, 0, 0.05)',
  s: '0px 4px 10px rgba(0, 0, 0, 0.05)',
  l: '0px 40px 120px rgba(0, 0, 0, 0.05)',
  inputS: '0px 2px 4px 0px rgba(0, 0, 0, 0.05)',
  inputM: '0px 2px 6px 0px rgba(0, 0, 0, 0.05)',
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
  borderRadius: 5,
  strokeWidth: 2,
  transTime: 100,
  transCurve: 'linear',
  shadows,
  defaultTransTime: 400,
  defaultTransCurve: 'cubic-bezier(.345,0,0,1)',
  breakpoints,
};
