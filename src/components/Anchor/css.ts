import { createUseStyles } from 'react-jss';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  anchor: {
    backgroundColor: colors.lighterGray,
    textDecoration: 'none',
    color: colors.gray,
    borderBottom: '1px solid',
    borderColor: 'inherit',
    '&:hover': {
      backgroundColor: colors.lightGray,
      color: colors.darkGray,
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
