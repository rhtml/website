import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  header: {
    position: 'sticky',
    top: 0,
    height: base(4),
    padding: `${base()} ${base(4)}`,
    display: 'flex',
    alignItems: 'center',
  },
  maxWidth: {
    display: 'flex',
  },
  logoAnchor: {
    flexShrink: 0,
    display: 'flex',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    textDecoration: 'none',
    position: 'relative',
    '&:hover': {
      color: colors.darkerGray,
    },
  },
  logoIcon: {
    flexShrink: 0,
    width: base(1.5),
    position: 'absolute',
    right: `calc(100% + ${base(0.5)})`,
    transform: 'translate3d(-50%, 0, 0)',
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

  },
  itemAnchor: {
    textDecoration: 'none',
    '&:hover': {
      color: colors.darkerGray,
    },
  },
});

export default useStyles;
