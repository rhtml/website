import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';
import shadows from '../../css/shadows';

const useStyles = createUseStyles({
  helpTooltip: {
    position: 'relative',
    zIndex: 1,
  },
  button: {
    width: base(),
    height: base(),
    backgroundColor: colors.lightGray,
    color: colors.darkerGray,
    padding: base(0.5),
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.gray,
    },
  },
  icon: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    textAlign: 'center',
  },
  content: {
    pointerEvents: 'none',
    opacity: 0,
    position: 'absolute',
    top: `calc(100% + ${base(0.5)})`,
    left: '50%',
    transform: 'translate3d(-50%, 0, 0)',
    width: '400px',
    backgroundColor: colors.white,
    padding: base(),
    boxShadow: shadows.l,
  },
  isOpen: {
    '& $icon': {
      backgroundColor: colors.gray,
    },
    '& $content': {
      opacity: 1,
      pointerEvents: 'all',
    },
  },
});

export default useStyles;
