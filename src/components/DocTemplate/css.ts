import { createUseStyles } from 'react-jss';
import { base } from '../../css';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    maxWidth: '1200px',
    margin: 'auto',
  },
  sidebar: {
    flexShrink: 0,
    position: 'sticky',
    top: base(4),
    height: '100%',
    padding: base(),
    width: '33%',
  },
  content: {
    flexGrow: 1,
    padding: `0 ${base(2)} ${base(2)}`,
    width: '66%',
  },
});

export default useStyles;
