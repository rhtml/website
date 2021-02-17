import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  wrapper: {

  },
  header: {
    margin: `${base(4)} 0`,
  },
  widgetWrapper: {
    padding: base(2),
    backgroundColor: colors.lighterGray,
  },
});

export default useStyles;
