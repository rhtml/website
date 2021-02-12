import { createUseStyles } from 'react-jss';
import { base } from '../../css';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
  },
  sidebar: {
    flex: 1,
    position: 'sticky',
    top: base(4),
    height: '100%',
    padding: base(),
  },
  content: {
    flex: 3,
  },
});

export default useStyles;
