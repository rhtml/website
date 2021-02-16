import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  wrapper: {
    position: 'relative',
    width: `calc(100% +  ${base(4)})`,
    left: base(-2),
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.lighterGray,
    '& > *': {
      textDecoration: 'none',
    },
  },
  item: {
    width: '50%',
    padding: base(2),
    '&:hover': {
      backgroundColor: colors.lightGray,
      color: colors.darkGray,
    },
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: base(0.5),
    position: 'relative',
  },
  prev: {
    marginLeft: 0,
    marginRight: 'auto',
    '& $arrowIcon': {
      left: 0,
      top: '50%',
      transform: `translate3d(calc(-100% - ${base(0.5)}), -50%, 0)`,
    },
  },
  next: {
    marginRight: 0,
    marginLeft: 'auto',
    textAlign: 'right',
    '& $arrowIcon': {
      right: 0,
      top: '50%',
      transform: `translate3d(calc(100% + ${base(0.5)}), -50%, 0)`,
    },
    '& $label': {
      justifyContent: 'flex-end',
    },
  },
  arrowIcon: {
    position: 'absolute',
  },
});

export default useStyles;
