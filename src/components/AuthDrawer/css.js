import { createUseStyles } from 'react-jss';
import vars, { base } from '../../css/vars';
import queries from '../../css/queries';
import { resetButton } from '../../css/other';
import colors from '../../css/colors';
import shadows from '../../css/shadows';

export default createUseStyles({
  modal: {
    position: 'absolute',
    transition: `${vars.defaultTransTime}ms ${vars.defaultTransCurve} transform`,
    margin: '0',
    right: '0',
    top: 0,
    backgroundColor: colors.white,
    boxShadow: shadows.jumbo,
    padding: base(2),
    width: '600px',
    transform: `translate3d(0, calc(-100% - ${base(1.5)}), 0)`,
    border: `${colors.lightGray} 1px solid`,
    borderRadius: `${vars.borderRadius}px`,
    [queries.m]: {
      width: '100%',
      padding: base(1),
    },
  },
  isOpen: {
    transform: `translate3d(0, ${base(2)}, 0)`,
  },
  closeButton: {
    ...resetButton,
    display: 'block',
    marginLeft: 'auto',
    cursor: 'pointer',
    width: base(),
    height: base(),
    position: 'absolute',
    top: base(2),
    right: base(2),
  },
  form: {
    '& > *:not(:last-child)': {
      marginBottom: base(),
    },
  },
});
