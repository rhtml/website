export type User = {

}

export interface IAuthenticationContext {
  user?: User,
  isLoggedIn?: boolean,
  logOut?: () => void,
  setUser?: () => void,
}
