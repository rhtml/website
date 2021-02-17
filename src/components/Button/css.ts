import { createUseStyles } from 'react-jss';
import { base, resetButton } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  button: {
    ...resetButton,
    padding: base(0.75),
    backgroundColor: colors.darkGray,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.gray,
    },
  },
  anchor: {

  },
});

export default useStyles;
