import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  demoWidget: {
    padding: base(2),
    backgroundColor: colors.lighterGray,
  },
  header: {
    width: '100%',
    display: 'flex',
    marginBottom: base(2),
  },
  title: {
    flexGrow: 1,
    marginBottom: 0,
  },
  innerWrapper: {
    marginBottom: base(2),
    display: 'flex',
    '& > *': {
      width: '50%',
    },
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
  },
  codeBlock: {
    flexGrow: 1,
  },
  iFrame: {
    backgroundColor: 'white',
    width: '100%',
    border: 'none',
    flexGrow: 1,
  },
});

export default useStyles;
