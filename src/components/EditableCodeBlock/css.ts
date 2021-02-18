import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';
import vars from '../../css/vars';

const useStyles = createUseStyles({
  editableCodeBlock: {
    display: 'flex',
    width: '100%',
  },
  textArea: {
    padding: `${base()} !important`,
    caretColor: colors.white,
    background: `${colors.darkGray} !important`,
    borderRadius: `${vars.borderRadius}px`,
  },
});

export default useStyles;
