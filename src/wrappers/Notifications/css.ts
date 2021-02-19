import { createUseStyles } from 'react-jss';
import colors from '../../css/colors';
import shadows from '../../css/shadows';
import vars, { base } from '../../css/vars';

export default createUseStyles({
  notifications: {
    position: 'fixed',
    bottom: base(),
    left: '50%',
    transform: 'translate3d(-50%, 0, 0)',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  notification: {
    backgroundColor: colors.darkGray,
    color: colors.white,
    padding: base(0.25),
    display: 'flex',
    alignItems: 'center',
    borderRadius: vars.borderRadius,
    boxShadow: shadows.xs,
    '&:not(:last-child)': {
      marginBottom: base(0.5),
    },
  },
});
