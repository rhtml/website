import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  wrapper: {
    '& > *:not(:last-child)': {
      marginBottom: base(2),
    },
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    '&:not(:last-child)': {
      marginBottom: base(),
    },
  },
  isNested: {
    marginLeft: base(),
  },
  nestedListLabel: {
    marginBottom: base(0.5),
  },
  anchor: {
    textDecoration: 'none',
    '&:hover': {
      color: colors.darkGray,
    },
  },
  isActive: {
    color: colors.darkGray,
    fontWeight: 'bold',
  },
});

export default useStyles;
