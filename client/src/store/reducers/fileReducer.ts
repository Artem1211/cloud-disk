import { FileActionTypes } from '../../types/file'

const defaultState = {
  files: [],
  currentDir: null,
  popupDisplay: 'none',
  dirStack: [],
  view: 'list',
}

export default function fileReducer(state = defaultState, action) {
  switch (action.type) {
    case FileActionTypes.SET_FILES:
      return { ...state, files: action.payload }
    case FileActionTypes.SET_CURRENT_DIR:
      return { ...state, currentDir: action.payload }
    case FileActionTypes.ADD_FILE:
      return { ...state, files: [...state.files, action.payload] }
    case FileActionTypes.SET_POPUP_DISPLAY:
      return { ...state, popupDisplay: action.payload }
    case FileActionTypes.PUSH_TO_STACK:
      return { ...state, dirStack: [...state.dirStack, action.payload] }
    case FileActionTypes.DELETE_FILE:
      return {
        ...state,
        files: [...state.files.filter(file => file._id !== action.payload)],
      }
    case FileActionTypes.SET_VIEW:
      return { ...state, view: action.payload }
    default:
      return state
  }
}
