import { createUseStyles } from 'react-jss';
import { base, bodyFontSize } from '../../../css/vars';
import colors from '../../../css/colors';

export default createUseStyles({
  '@keyframes onAutoFillStart': {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  '@keyframes onAutoFillCancel': {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  input: ({ type }) => ({
    width: '100%',
    ...type === 'hidden' ? {
      height: 0,
      overflow: 'hidden',
    } : {},
  }),
  label: {
    color: 'inherit',
    marginBottom: base(0.5),
  },
  labelActive: {
    composes: '$label',
  },
  labelDisabled: {
    composes: '$label',
    color: colors.darkGray,
  },
  labelError: {
    composes: '$label',
    color: 'red',
  },
  htmlLabel: {
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.darkGray,
  },
  htmlInput: {
    backgroundColor: 'transparent',
    fontSize: `${bodyFontSize}px`,
    color: 'inherit',
    fontWeight: 'bold',
    padding: `${base(0.5)} 0`,
    border: 'none',
    width: '100%',
    paddingLeft: base(0.5),
    '&::placeholder': {
      color: 'inherit',
      opacity: 0.5,
    },
    '&:focus': {
      outline: 'none',
    },
    '&:disabled': {
      color: colors.darkGray,
    },
  },
  appendedText: {
    fontWeight: 'bold',
    margin: `0 ${base(0.5)}`,
  },
});
