import { createUseStyles } from 'react-jss';
import colors from '../../../../css/colors';
import vars from '../../../../css/vars';

const useStyles = createUseStyles({
  code: {
    padding: '4px',
    borderRadius: `${vars.borderRadius}px`,
    backgroundColor: colors.lightGray,
    fontSize: '85%',
  },
});

export default useStyles;
