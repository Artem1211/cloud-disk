import { UserActionTypes, UserAction, UserState } from '../../types/user'

const defaultState: UserState = {
  currentUser: {},
  isAuth: false,
}

export default function userReducer(state = defaultState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      console.log(action.payload)
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      }
    case UserActionTypes.LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      }
    default:
      return state
  }
}
