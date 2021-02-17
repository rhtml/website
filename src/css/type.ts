import colors from './colors';
import queries from './queries';
import { base } from './vars';

export const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
export const fontFamilyMono = 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const h1 = {
  color: colors.darkGray,
  fontSize: '85px',
  lineHeight: 1,
  fontWeight: 'bold',
  marginTop: 0,
  marginBottom: base(2),
  [queries.m]: {
    marginBottom: base(),
    fontSize: '45px',
    lineHeight: '45px',
  },
};

export const h2 = {
  color: colors.darkGray,
  fontSize: '68px',
  lineHeight: 1,
  marginTop: 0,
  marginBottom: base(1),
  [queries.m]: {
    fontSize: '26px',
    lineHeight: '30px',
  },
};

export const h3 = {
  color: colors.darkGray,
  fontSize: '54px',
  lineHeight: 1,
  marginTop: 0,
  marginBottom: base(1),
  [queries.m]: {
    fontSize: '18px',
    lineHeight: '24px',
  },
};

export const h4 = {
  color: colors.darkGray,
  fontSize: '18px',
  lineHeight: 1.25,
  marginTop: 0,
  marginBottom: base(1),
};

export const h5 = {
  ...h4,
};

export const h6 = {
  ...h5,
};

export const p = {
  marginTop: 0,
  marginBottom: base(1),
};

export const small = {
  fontSize: '12px',
  lineHeight: 1,
};

export const code = {
  fontFamily: fontFamilyMono,
  lineHeight: 1.5,
  fontSize: '12px',
};

export default {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  code,
};
