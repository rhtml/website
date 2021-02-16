import { createUseStyles } from 'react-jss';
import { base } from '../../../../css';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
  wrapper: {
    position: 'relative',
    left: base(-2),
    paddingLeft: base(2),
    width: `calc(100% + ${base(2)})`,
    '&:hover $linkIcon': {
      opacity: 1,
    },
  },
  linkIcon: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translate3d(0, -50%, 0)',
    opacity: 0,
    '& path': {
      fill: colors.darkGray,
    },
  },
});

export default useStyles;
