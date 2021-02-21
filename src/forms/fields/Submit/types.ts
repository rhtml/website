import { Props as ButtonProps } from '../../../components/Button/types';

export type SubmitProps = {
  onClick?: () => void,
  label?: string,
  isLoading?: boolean,
}

export type Props = SubmitProps & ButtonProps;
