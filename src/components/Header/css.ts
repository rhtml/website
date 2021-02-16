import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    position: 'sticky',
    top: 0,
    height: base(4),
    padding: base(),
  },
  logoWrapper: {
    flexShrink: 0,
  },
  logoAnchor: {
    display: 'flex',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    textDecoration: 'none',
    '&:hover': {
      color: colors.darkGray,
    },
  },
  logoIcon: {
    flexShrink: 0,
    height: base(2),
    marginRight: base(),
  },
  menu: {
    flexGrow: 1,
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: '100%',
    justifyContent: 'flex-end',
    '& > *:not(:last-child)': {
      marginRight: base(),
    },
  },
  menuItem: {
    textDecoration: 'none',
    '&:hover': {
      color: colors.darkGray,
    },
  },
});

export default useStyles;
