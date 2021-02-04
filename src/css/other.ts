import { fontFamily } from './type';
import { baselinePX } from './vars';

export const resetButton = { // eslint-disable-line
  fontSize: 'inherit',
  textAlign: 'left',
  fontFamily,
  lineHeight: `${baselinePX}px`,
  backgroundColor: 'transparent',
  padding: '0',
  border: 'none',
  color: 'inherit',
  fontWeight: 'inherit',
  cursor: 'pointer',
  '&:focus': {
    outline: 'none',
  },
};
