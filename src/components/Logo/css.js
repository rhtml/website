import { createUseStyles } from 'react-jss';
import colors from '../../css/colors';

const useStyles = createUseStyles({
  wrapper: {
    '& .stroke': {
      fill: 'none',
      stroke: colors.darkerGray,
      strokeWidth: '1px',
      vectorEffect: 'non-scaling-stroke',
    },
    '& .fill-black': {
      fill: colors.darkerGray,
    },
    '& .fill-white': {
      fill: colors.white,
    },
  },
});

export default useStyles;
