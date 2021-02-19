import { createUseStyles } from 'react-jss';
import { base, resetButton } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  button: {
    ...resetButton,
    padding: base(0.75),
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

  },
  separator: {
    width: base(),
    height: base(),
  },
});

export default useStyles;
