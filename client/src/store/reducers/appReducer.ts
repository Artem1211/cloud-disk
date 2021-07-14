import { AppActionTypes } from '../../types/app'

const defaultState = {
  loader: false,
}

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case AppActionTypes.SHOW_LOADER:
      return { ...state, loader: true }

    case AppActionTypes.HIDE_LOADER:
      return { ...state, loader: false }

    default:
      return state
  }
}
