import { createUseStyles } from 'react-jss';
import colors from '../../css/colors';
import vars, { base } from '../../css/vars';
import { h1 } from '../../css/type';

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
    maxWidth: vars.contentWidth,
    margin: 'auto',
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
  tier: {
    width: '33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  imageCount: {
    marginBottom: 0,
  },
  tierTitle: {
    flexGrow: 1,
    margin: `${base()} 0 ${base(2)}`,
  },
  jumboWrapper: {
    position: 'relative',
  },
  jumbo: {
    ...h1,
    marginBottom: 0,
    position: 'relative',
  },
  priceWrapper: {
    color: colors.darkGray,
  },
  pricePrefix: {
    position: 'absolute',
    right: `calc(100% + ${base(0.5)})`,
    top: base(0.5),
  },
});

export default useStyles;
