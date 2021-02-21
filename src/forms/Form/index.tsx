import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useContext,
} from 'react';
import { flatten, unflatten } from 'flatley';
import { APIError, fireRequest } from '../../api';
import useStyles from './css';
import reducer from './reducer';
import validateFields from './validateFields';
import isFormValid from './isFormValid';
import {
  Props,
  IFormContext,
  IReducerAction,
  FieldState,
} from './types';

const initialState: FieldState = {};

const FormContext = createContext<IFormContext | null>(null);
export const useForm = (): IFormContext => useContext(FormContext);

const Form: React.FC<Props> = forwardRef<HTMLFormElement, Props>((props, ref) => {
  const {
    className,
    method,
    action,
    onResponse,
    onError,
    defaultValues,
    children,
    name,
    onSubmit,
    apiErrors: apiErrorsFromProps,
    isLoading: isLoadingFromProps,
    flattenOnSubmit,
    unflattenOnSubmit,
    submitOnChange,
    htmlAttributes,
  } = props;

  const [fieldState, dispatchFieldState] = useReducer<React.Reducer<FieldState, IReducerAction>>(reducer, initialState);
  const [apiErrors, setAPIErrors] = useState<APIError[]>();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const hiddenSubmitButton = useRef<HTMLButtonElement>();
  const fieldsAreInitialized = useRef(false);
  const submitOnChangeIsReady = useRef(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // initialize the fields, do not validate
  useEffect(() => {
    if (defaultValues && !fieldsAreInitialized.current) {
      dispatchFieldState({
        type: 'REPLACE_FIELDS',
        payload: defaultValues,
      });
      fieldsAreInitialized.current = true;
    }
  }, [defaultValues]);

  // click a submit button on every change
  useEffect(() => {
    if (submitOnChange) {
      if (fieldState && fieldsAreInitialized.current) {
        if (submitOnChangeIsReady.current) {
          hiddenSubmitButton.current.click();
        } else submitOnChangeIsReady.current = true;
      }
    }
  }, [submitOnChange, fieldState]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setHasSubmitted(true);

    const validatedFields = validateFields(fieldState);
    const formIsValid = isFormValid(validatedFields);

    if (!formIsValid) {
      dispatchFieldState({
        type: 'REPLACE_FIELDS',
        payload: validatedFields,
      });
      setIsLoading(false);
    } else {
      const keyValuePairs = {};
      Object.entries(fieldState).forEach(([key, { value }]) => { keyValuePairs[key] = value; });

      if (typeof onSubmit === 'function') return onSubmit(keyValuePairs);

      let body = keyValuePairs;

      if (flattenOnSubmit) body = flatten(body);
      if (unflattenOnSubmit) body = unflatten(body);

      const {
        res,
        err,
        json,
      } = await fireRequest({
        sleepDuration: 1000, // give the impression of a load, even when lightning fast
        method,
        url: action,
        options: {
          body: JSON.stringify(body),
        },
      });

      if (err && typeof onError === 'function') onError(err);

      if (res) {
        const { errors } = json;
        if (errors) setAPIErrors(errors);
        if (typeof onResponse === 'function') await onResponse(json);
      }

      setIsLoading(false);
      return true;
    }
    return false;
  }, [
    action,
    fieldState,
    flattenOnSubmit,
    method,
    onError,
    onResponse,
    onSubmit,
    unflattenOnSubmit,
  ]);

  return (
    <FormContext.Provider
      value={{
        apiErrors: apiErrorsFromProps || apiErrors,
        isLoading: typeof isLoadingFromProps === 'boolean' ? isLoadingFromProps : isLoading,
        fieldState,
        dispatchFieldState: (args) => {
          dispatchFieldState({
            ...args,
            hasSubmitted,
          });
        },
        hasSubmitted,
      }}
    >
      <form
        onSubmit={handleSubmit}
        name={name}
        noValidate
        className={[
          classes.form,
          className,
        ].filter(Boolean).join(' ')}
        ref={ref}
        {...htmlAttributes}
      >
        {children && children}
        {submitOnChange && (
          <button
            type="submit"
            ref={hiddenSubmitButton}
            className={classes.hiddenSubmitButton}
          >
            Submit
          </button>
        )}
      </form>
    </FormContext.Provider>
  );
});

export default Form;
