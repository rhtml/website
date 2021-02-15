import { createUseStyles } from 'react-jss';
import { base, colors } from '../../../../css';

const useStyles = createUseStyles({
  code: {
    padding: base(0.25),
    borderRadius: '4px',
    backgroundColor: colors.lightGray,
    fontSize: '85%',
  },
});

export default useStyles;
