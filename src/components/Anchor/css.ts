import { createUseStyles } from 'react-jss';
import { colors } from '../../css';

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
});

export default useStyles;
