import { createUseStyles } from 'react-jss';
import { base } from '../../css';

const useStyles = createUseStyles({
  wrapper: {
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
});

export default useStyles;
