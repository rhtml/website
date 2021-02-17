import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import vars from '../../css/vars';

const useStyles = createUseStyles({
  footer: {
    padding: base(4),
    '& > *:not(:last-child)': {
      marginBottom: base(),
    },
  },
  maxWidth: {
    width: '100%',
    margin: 'auto',
    maxWidth: vars.contentWidth,
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
