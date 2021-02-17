import { createUseStyles } from 'react-jss';
import colors from '../css/colors';
import vars, { base } from '../css/vars';

export default createUseStyles({
  wrapper: {
    width: '100%',
    height: '100%',
    overflow: 'visible',
  },
  stroke: ({ color }) => {
    const chosenColor = colors[color] || 'currentColor';
    return ({
      fill: 'none',
      stroke: chosenColor,
      strokeWidth: `${vars.strokeWidth}px`,
      strokeLinecap: 'square',
    });
  },
  fill: ({ color }) => {
    const chosenColor = colors[color] || 'currentColor';
    return ({
      fill: chosenColor,
    });
  },
  rotation: ({ rotation = '0' }) => ({
    transform: `rotate(${rotation}deg)`,
  }),
  xs: {
    width: '9px',
    height: '9px',
  },
  s: {
    width: base(0.5),
    height: base(0.5),
  },
  m: {
    width: base(),
    height: base(),
  },
  l: {
    width: base(),
    height: base(),
  },
}, { link: true });
