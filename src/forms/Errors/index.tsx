import React from 'react';
// import { useForm } from '../Form/context';
import useStyles from './css';
import isFormValid from '../Form/isFormValid';
import { Props } from './types';

const Errors: React.FC<Props> = (props) => {
  const {
    color,
    className,
    errors: errorsFromProps,
  } = props;

  const { apiErrors, fieldState } = {}; // useForm() || {};
  const formIsValid = isFormValid(fieldState);
  const hasPropsErrors = Array.isArray(errorsFromProps) && errorsFromProps.length > 0;

  const classes = useStyles();

  if (apiErrors || !formIsValid || hasPropsErrors) {
    return (
      <div
        className={[
          classes[color],
          className,
        ].filter(Boolean).join(' ')}
      >
        {apiErrors && Array.isArray(apiErrors)
          && (
            <div>
              <div>
                Something went wrong:
              </div>
              {apiErrors.map((error, index) => {
                const { message } = error;
                return (
                    <div key={index}>
                      <span>
                        {message}
                      </span>
                    </div>
                );
              })}
          </div>
          )}
        {formIsValid === false
          && Object.entries(fieldState).map(([, entry], index) => {
            const { isValid, validationMessage } = entry;

            if (isValid === false) {
              return (
                <div key={index}>
                  {validationMessage}
                </div>
              );
            }
            return null;
          })}
          {hasPropsErrors && (
            <div>
              <div>
                Something went wrong:
              </div>
              {errorsFromProps.map((item, index) => {
                const {
                  message,
                } = item;

                return (
                  <div key={index}>
                    {message}
                  </div>
                );
              })}
            </div>
          )}
      </div>
    );
  }
  return null;
};

export default Errors;
