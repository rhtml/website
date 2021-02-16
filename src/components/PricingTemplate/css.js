import { createUseStyles } from 'react-jss';
import colors from '../../css/colors';
import vars from '../../css/vars';

const useStyles = createUseStyles({
  wrapper: {
  },
  header: {
    maxWidth: vars.contentWidth,
    margin: 'auto',
  },
  priceBlock: {
    backgroundColor: colors.lightGray,
  },
  priceContent: {
    maxWidth: vars.contentWidth,
    margin: 'auto',
  },
});

export default useStyles;
