import { createUseStyles } from 'react-jss';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  anchor: {
    backgroundColor: colors.lighterGray,
    textDecoration: 'none',
    color: colors.darkGray,
    borderBottom: '1px solid',
    borderColor: 'inherit',
    '&:hover': {
      backgroundColor: colors.lightGray,
      color: colors.darkerGray,
    },
  },
  unstyled: {
    backgroundColor: 'transparent',
    border: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});

export default useStyles;
