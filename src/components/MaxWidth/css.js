import { createUseStyles } from 'react-jss';
import vars, { base } from '../../css/vars';

const useStyles = createUseStyles({
  maxWidth: {
    margin: 'auto',
    maxWidth: vars.contentWidth,
    width: '100%',
    paddingLeft: base(4),
    paddingRight: base(4),
  },
});

export default useStyles;
