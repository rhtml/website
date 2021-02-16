import { createUseStyles } from 'react-jss';
import { base, colors } from '../../css';

const useStyles = createUseStyles({
  wrapper: {
    backgroundColor: colors.lighterGray,
    padding: base(2),
    display: 'flex',
    justifyContent: 'space-between',
  },
  prev: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  next: {
    marginRight: 0,
    marginLeft: 'auto',
  },
});

export default useStyles;
