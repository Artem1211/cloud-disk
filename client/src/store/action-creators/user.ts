import { UserActionTypes } from '../../types/user'

export const setUser = user => ({ type: UserActionTypes.SET_USER, payload: user })
export const logout = () => ({ type: UserActionTypes.LOGOUT })
