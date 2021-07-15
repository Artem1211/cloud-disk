export type UserState = {
  currentUser: unknown
  isAuth: boolean
}

export enum UserActionTypes {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
}

type SetUserAction = {
  type: UserActionTypes.SET_USER
  payload: unknown
}

type LogoutAction = {
  type: UserActionTypes.LOGOUT
}

export type UserAction = SetUserAction | LogoutAction
