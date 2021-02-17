import { createUseStyles } from 'react-jss';
import { base } from '../../css';

const useStyles = createUseStyles({
  footer: {
    padding: base(4),
    '& > *:not(:last-child)': {
      marginBottom: base(),
    },
  },
  maxWidth: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  social: {

  },
  copyrightWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  logoAnchor: {
    textDecoration: 'none',
  },
});

export default useStyles;
