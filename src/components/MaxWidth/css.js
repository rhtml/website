import { createUseStyles } from 'react-jss';
import vars from '../../css/vars';

const useStyles = createUseStyles({
  maxWidth: {
    margin: 'auto',
    maxWidth: vars.contentWidth,
    width: '100%',
  },
});

export default useStyles;
