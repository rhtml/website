export type Field = {
  value: string,
  isValid: boolean,
  validationMessage?: string
}

export type Form = {
  apiErrors?: Error[],
  fieldState?: Field[],
}

export type Error = {
  message: string;
}

export type Props = {
  color?: 'white' | 'red',
  className?: string,
  errors?: Error[],
}
