import { createUseStyles } from 'react-jss';
import { base } from '../../css';
import colors from '../../css/colors';
import shadows from '../../css/shadows';
import vars from '../../css/vars';

const useStyles = createUseStyles({
  demoWidget: {
    backgroundColor: colors.lighterGray,
  },
  header: {
    width: '100%',
    display: 'flex',
    marginBottom: base(2),
    alignItems: 'center',
  },
  titleWrapper: {
    flexGrow: 1,
  },
  title: {
    marginBottom: 0,
  },
  innerWrapper: {
    marginBottom: base(2),
    display: 'flex',
    '& > *': {
      width: '50%',
    },
  },
  dropdown: {
    position: 'relative',
    height: '100%',
  },
  dropdownButton: {
    padding: `${base()} ${base(0.5)}`,
    backgroundColor: colors.darkerGray,
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '0',
      top: '0',
      height: '100%',
      width: '1px',
      backgroundColor: colors.white,
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: colors.darkGray,
      '& path': {
        stroke: colors.white,
      },
    },
  },
  dropdownContent: {
    opacity: 0,
    position: 'absolute',
    right: 0,
    top: `calc(100% + ${base(0.5)})`,
    backgroundColor: colors.darkerGray,
    padding: base(),
    color: colors.lightGray,
    width: '350px',
    boxShadow: shadows.l,
    zIndex: 1,
  },
  dropdownOpen: {
    opacity: 1,
  },
  imageTypeWrapper: {
    position: 'relative',
    display: 'flex',
    marginTop: base(),
  },
  imageTypeLabel: {
    marginRight: base(),
  },
  imageTypes: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    '& > *:not(:last-child)': {
      marginRight: base(0.5),
    },
  },
  imageType: {
    opacity: 0.5,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: `${vars.borderRadius}px`,
    '&:hover': {
      cursor: 'pointer',
      opacity: 1,
      backgroundColor: colors.darkGray,
    },
  },
  activeImageType: {
    opacity: 1,
    backgroundColor: colors.lightGray,
    color: colors.darkerGray,
    '&:hover': {
      backgroundColor: colors.lightGray,
    },
  },
  errors: {
    marginTop: base(),
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  itemTitle: {
    display: 'flex',
    marginBottom: base(),
    alignItems: 'center',
  },
  codeBlock: {
    flexGrow: 1,
  },
  codeBlockTextArea: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  iFrame: {
    border: `1px ${colors.darkGray} solid`,
    width: '100%',
    flexGrow: 1,
    borderRadius: `${vars.borderRadius}px`,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  tooltip: {
    marginLeft: base(0.5),
  },
});

export default useStyles;
