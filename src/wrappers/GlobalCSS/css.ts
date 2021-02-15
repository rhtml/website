
import { createUseStyles } from 'react-jss';
import { bodyFontSize, colors, base } from '../../css/vars';
import fonts from '../../css/fonts';
import { code, fontFamily, h1, h2, h3, h4, h5, p, small } from '../../css/type';

export default createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      height: '100%',
      fontFamily,
      fontSize: bodyFontSize,
      lineHeight: 1.5,
      color: colors.gray,
    },
    body: {
      margin: '0',
      height: '100%',
    },
    '#root': {},
    '::selection': {
      // background: colors.lightGray,
      // color: colors.white,
      // mixBlendMode: 'normal',
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
    code: {
      ...code,
    },
    ul: {
      paddingLeft: 0,
      marginLeft: base(2),
      margin: 0,
      '& > li:not(:last-child)': {
        marginBottom: base(0.5),
      },
    },
    ol: {
      paddingLeft: 0,
      marginLeft: base(2),
      margin: 0,
      '& > li:not(:last-child)': {
        marginBottom: base(0.5),
      },
    },
    svg: {
      '& > *': {
        vectorEffect: 'non-scaling-stroke',
      },
    },
  },
});
