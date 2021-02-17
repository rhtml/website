import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  editableCodeBlock: {
    display: 'flex',
    width: '100%',
  },
  textArea: {
    padding: `${base()} !important`,
    caretColor: colors.white,
    background: `${colors.darkGray} !important`,
    borderRadius: '4px',
  },
});

export default useStyles;
