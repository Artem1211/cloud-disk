import { AppActionTypes, AppState, AppAction } from '../../types/app'

const defaultState: AppState = {
  loader: false,
}

export default function appReducer(state = defaultState, action: AppAction) {
  switch (action.type) {
    case AppActionTypes.SHOW_LOADER:
      return { ...state, loader: true }

    case AppActionTypes.HIDE_LOADER:
      return { ...state, loader: false }

    default:
      return state
  }
}
