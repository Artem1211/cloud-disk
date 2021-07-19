import { UserActionTypes, UserAction, UserState } from '../../types/user'

const defaultState: UserState = {
  currentUser: null,
  isAuth: false,
}

export default function userReducer(state = defaultState, action: UserAction): UserState {
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
        currentUser: null,
        isAuth: false,
      }
    default:
      return state
  }
}
