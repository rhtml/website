export type User = {
  email?: string,
  name?: string,
  id?: string
}

export interface IAuthenticationContext {
  user?: User,
  isLoggedIn?: boolean,
  logOut?: () => void,
  setUser?: (user: User) => void,
}
