import { createUseStyles } from 'react-jss';
import { base } from '../../css';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    position: 'sticky',
    top: 0,
    height: base(4),
    padding: base(),
  },
  logo: {
    flexShrink: 0,
  },
  menu: {
    flexGrow: 1,
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: '100%',
    justifyContent: 'flex-end',
  },
});

export default useStyles;
