import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';
import vars from '../../css/vars';

const useStyles = createUseStyles({
  docTemplate: {
    padding: `0 ${base(2)}`,
  },
  maxWidth: {
    maxWidth: vars.contentWidth,
    margin: 'auto',
    display: 'flex',
  },
  sidebar: {
    padding: base(4),
    paddingLeft: 0,
    width: '33%',
    height: `calc(100vh - ${base(6)})`,
    position: 'sticky',
    top: base(4),
    '&::after': {
      content: '""',
      backgroundColor: colors.lighterGray,
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100vw',
      height: '100%',
      zIndex: '-1',
    },
  },
  content: {
    flexGrow: 1,
    paddingTop: base(4),
    paddingLeft: base(4),
    paddingBottom: base(2),
    width: '66%',
  },
  markdownWrapper: {
    marginBottom: base(2),
  },
  footer: {
    marginTop: base(2),
    borderTop: `solid 1px ${colors.gray}`,
    paddingTop: base(2),
  },
});

export default useStyles;
