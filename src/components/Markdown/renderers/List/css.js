
import { createUseStyles } from 'react-jss';
import { base } from '../../../../css';

const useStyles = createUseStyles({
  list: {
    paddingLeft: 0,
    marginLeft: base(2),
    margin: 0,
    '& > li:not(:last-child)': {
      marginBottom: base(0.5),
    },
  },
});

export default useStyles;
