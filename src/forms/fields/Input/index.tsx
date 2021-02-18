import React, { useEffect, useRef, useState } from 'react';
import useStyles from './css';
// import { useForm } from '../../Form/context';
import { Props } from './types';

const Input: React.FC<Props> = (props) => {
  const inputRef = useRef(null);

  const {
    id,
    name,
    label,
    type = 'text',
    className,
    autoComplete,
    disabled,
    onChange,
    value: valueFromProps, // (might also be renamed to 'initialValue', as this component controls itself after initializing)
    hasError: hasErrorFromProps,
    min,
    step,
    required,
    placeholder,
  } = props;

  const formContext = undefined;
  const valueFromContextOrProps = formContext?.fieldState?.[name]?.value || valueFromProps;
  const hasError = hasErrorFromProps || formContext?.fieldState?.[name]?.isValid === false;
  const [internalState, setInternalState] = useState(valueFromContextOrProps); // use internal state to avoid external debouncing
  const [isFocused, setIsFocused] = useState(false);

  // state can be externally controlled, either directly through props or automatically via the 'formContext'
  useEffect(() => {
    if (valueFromContextOrProps !== undefined && valueFromContextOrProps !== internalState) setInternalState(valueFromContextOrProps);
  }, [valueFromContextOrProps, internalState]);

  const classes = useStyles({ type });

  return (
    <div
      className={[
        classes.input,
        className,
      ].filter(Boolean).join(' ')}
    >
      <label
        htmlFor={id}
        className={classes.htmlLabel}
      >
        <div
          className={[
            classes.label,
            (internalState || isFocused) && classes.labelActive,
            disabled && classes.labelDisabled,
            hasError && classes.labelError,
          ].filter(Boolean).join(' ')}
        >
          {`${label}${required ? '*' : ''}`}
        </div>
        <input
          {...{
            ref: inputRef,
            id,
            name,
            type,
            disabled,
            autoComplete,
            className: classes.htmlInput,
            placeholder,
            onChange: (e) => {
              const { value: incomingValue } = e.target;
              setInternalState(incomingValue);
              if (formContext) {
                formContext.dispatchFieldState({
                  type: 'UPDATE_FIELD',
                  payload: {
                    name,
                    value: incomingValue,
                  },
                });
              }
              if (typeof onChange === 'function') onChange(incomingValue);
            },
            min,
            step,
            value: internalState || '',
            required,
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </label>
    </div>
  );
};

export default Input;
