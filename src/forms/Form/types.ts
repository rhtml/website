import {
  APIError,
  APIMethods,
  ParsedJSON,
} from '../../api';

export type Props = {
  isLoading: boolean,
  apiErrors: APIError[],
  method: APIMethods,
  action: string,
  onResponse: (json: ParsedJSON) => void,
  onError: (Error) => void,
  defaultValues: Record<string, Field>,
  className: string,
  name: string,
  onSubmit: (FieldState) => void,
  flattenOnSubmit: boolean,
  unflattenOnSubmit: boolean,
  submitOnChange: boolean,
  htmlAttributes: Record<string, unknown>,
}

export type FormState = {
  apiErrors?: APIError[],
  isLoading?: boolean,
  fieldState?: FieldState
}

export type FieldState = {
  [key: string]: Field
}

type FieldValidation = {
  isValid: boolean,
  message: string
}

export type Field = {
  name: string,
  value: string,
  validation: (string) => FieldValidation,
  isValid: boolean,
  validationMessage: string
}

export interface IFormContext {
  apiErrors?: APIError[],
  isLoading?: boolean,
  fieldState?: FieldState,
  dispatchFieldState?: (IReducerAction) => void,
  hasSubmitted?: boolean,
}

export interface IReducerAction {
  type: 'UPDATE_FIELDS' | 'REPLACE_FIELDS';
  payload: Record<string, Field>,
  hasSubmitted?: boolean
}
