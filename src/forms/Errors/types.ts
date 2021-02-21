export type Error = {
  message: string;
}

export type Props = {
  color?: 'white' | 'red',
  className?: string,
  errors?: Error[],
}
