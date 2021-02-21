import React, { forwardRef } from 'react';
import Button from '../../../components/Button';
import { useForm } from '../../Form';
import { Props } from './types';

const Submit: React.FC<Props> = forwardRef((props, ref) => {
  const {
    label,
    isLoading: isLoadingFromProp,
  } = props;

  const formContext = useForm();
  const isLoading = formContext ? formContext.isLoading : isLoadingFromProp;

  return (
    <Button
      {...{
        ...props,
        htmlElement: 'button',
        htmlAttributes: {
          disabled: isLoading,
          type: 'submit',
        },
        label: !isLoading ? label : 'Loading',
        ref,
      }}
    />
  );
});

export default Submit;
