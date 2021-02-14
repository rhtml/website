import { createUseStyles } from 'react-jss';
import { base } from '../../css';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
  },
  sidebar: {
    flexShrink: 0,
    position: 'sticky',
    top: base(4),
    height: '100%',
    padding: base(),
    width: '400px',
  },
  content: {
    flexGrow: 1,
    padding: `0 ${base(2)} ${base(2)}`,
    maxWidth: '800px',
  },
});

export default useStyles;
