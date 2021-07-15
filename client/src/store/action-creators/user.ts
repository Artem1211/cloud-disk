import { UserActionTypes, UserAction } from '../../types/user'

export const setUser = (user: unknown): UserAction => ({
  type: UserActionTypes.SET_USER,
  payload: user,
})
export const logout = (): UserAction => ({ type: UserActionTypes.LOGOUT })
