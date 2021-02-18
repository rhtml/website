export type Props = {
  id?: string,
  name: string,
  label?: string,
  type?: 'text' | 'email' | 'password' | 'number' | 'hidden',
  className?: string,
  autoComplete?: string,
  disabled?: boolean,
  onChange?: (string) => void,
  value?: string | number,
  hasError?: boolean,
  resetTo?: string,
  min?: number,
  step?: number,
  required?: boolean,
  placeholder?: string
}
