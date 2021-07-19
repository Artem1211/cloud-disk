import { UserActionTypes, UserAction, User } from '../../types/user'

export const setUser = (user: User): UserAction => ({
  type: UserActionTypes.SET_USER,
  payload: user,
})
export const logout = (): UserAction => ({ type: UserActionTypes.LOGOUT })
