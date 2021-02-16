import { createUseStyles } from 'react-jss';
import { colors } from '../../../../css';

const useStyles = createUseStyles({
  code: {
    padding: '4px',
    borderRadius: '4px',
    backgroundColor: colors.lightGray,
    fontSize: '85%',
  },
});

export default useStyles;
