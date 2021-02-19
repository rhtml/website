import { createUseStyles } from 'react-jss';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  wrapper: {
    '& *': {
      fill: 'none',
      stroke: colors.darkerGray,
      strokeWidth: '1px',
      vectorEffect: 'non-scaling-stroke',
    },
  },
});

export default useStyles;
