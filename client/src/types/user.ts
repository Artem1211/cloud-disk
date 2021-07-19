export type User = {
  id: string
  email: string
  diskSpace: number
  usedSpace: number
  avatar: null | string
}

export type UserState = {
  currentUser: User | null
  isAuth: boolean
}

export enum UserActionTypes {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
}

type SetUserAction = {
  type: UserActionTypes.SET_USER
  payload: User
}

type LogoutAction = {
  type: UserActionTypes.LOGOUT
}

export type UserAction = SetUserAction | LogoutAction
