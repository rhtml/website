import { createUseStyles } from 'react-jss';
import { base, jumbo } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  wrapper: {
    overflow: 'hidden',
    padding: `0 ${base(4)}`,
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
  title: {
    ...jumbo,
    marginBottom: 0,
  },
});

export default useStyles;
