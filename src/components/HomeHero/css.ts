import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  wrapper: {
    overflow: 'hidden',
  },
  header: {
    margin: `${base(4)} 0`,
  },
  widgetWrapper: {
    padding: base(2),
    margin: `0 ${base(-2)}`,
    width: `calc(100% + ${base(4)})`,
    backgroundColor: colors.lighterGray,
  },
});

export default useStyles;
