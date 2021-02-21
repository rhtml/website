import { createUseStyles } from 'react-jss';
import colors from '../../css/colors';
import vars, { base } from '../../css/vars';

const useStyles = createUseStyles({
  wrapper: {
    overflow: 'hidden',
  },
  header: {
    maxWidth: vars.contentWidth,
    margin: 'auto',
    padding: `${base(4)} 0`,
  },
  priceBlock: {
  },
  maxWidth: {
    padding: `${base(4)} 0`,
    display: 'flex',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: base(-4),
      width: '100vw',
      height: '100%',
      backgroundColor: colors.lightGray,
      zIndex: -1,
    },
  },
  form: {

  },
});

export default useStyles;
