import { createUseStyles } from 'react-jss';
import { base, resetButton } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  button: {
    ...resetButton,
    backgroundColor: colors.darkerGray,
    color: colors.white,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: colors.darkGray,
    },
  },
  anchor: {
    textDecoration: 'none',
  },
  separator: {
    width: base(),
    height: base(),
  },
  s: {
    padding: base(0.25),
  },
  m: {
    padding: base(0.75),
  },
});

export default useStyles;
