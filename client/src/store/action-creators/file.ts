import { FileActionTypes } from '../../types/file'

export const setFiles = files => ({ type: FileActionTypes.SET_FILES, payload: files })
export const setCurrentDir = dir => ({ type: FileActionTypes.SET_CURRENT_DIR, payload: dir })
export const addFile = file => ({ type: FileActionTypes.ADD_FILE, payload: file })
export const setPopupDisplay = display => ({
  type: FileActionTypes.SET_POPUP_DISPLAY,
  payload: display,
})
export const pushToStack = dir => ({ type: FileActionTypes.PUSH_TO_STACK, payload: dir })
export const deleteFileAction = dirId => ({
  type: FileActionTypes.DELETE_FILE,
  payload: dirId,
})
export const setFileView = payload => ({ type: FileActionTypes.SET_VIEW, payload })
