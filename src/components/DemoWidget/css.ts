import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  demoWidget: {
    padding: base(2),
    backgroundColor: colors.lighterGray,
  },
  codeWrapper: {
    width: '50%',
  },
});

export default useStyles;
