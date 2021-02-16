import { createUseStyles } from 'react-jss';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
  code: {
    padding: '4px',
    borderRadius: '4px',
    backgroundColor: colors.lightGray,
    fontSize: '85%',
  },
});

export default useStyles;
