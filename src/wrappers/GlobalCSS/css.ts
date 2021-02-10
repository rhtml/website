
import { createUseStyles } from 'react-jss';
import { bodyFontSize, colors, base } from '../../css/vars';
import fonts from '../../css/fonts';
import { fontFamily, h1, h2, h3, h4, h5, p, small } from '../../css/type';

export default createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      height: '100%',
      fontFamily,
      fontSize: bodyFontSize,
      lineHeight: base(),
      color: colors.gray,
    },
    body: {
      margin: '0',
      height: '100%',
    },
    '#root': {},
    '::selection': {
      background: colors.red,
      color: colors.white,
      mixBlendMode: 'normal',
    },
    img: {
      maxWidth: '100%',
      width: '100%',
      display: 'block',
    },
    ...fonts,
    h1: {
      ...h1,
    },
    h2: {
      ...h2,
    },
    h3: {
      ...h3,
    },
    h4: {
      ...h4,
    },
    h5: {
      ...h5,
    },
    p: {
      ...p,
    },
    small: {
      ...small,
    },
    a: {
      color: 'inherit',
    },
    svg: {
      '& > *': {
        vectorEffect: 'non-scaling-stroke',
      },
    },
  },
});