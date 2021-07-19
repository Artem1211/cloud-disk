import { FileActionTypes, FileAction, File, PopupDisplay, View } from '../../types/file'

export const setFiles = (files: File[]): FileAction => ({
  type: FileActionTypes.SET_FILES,
  payload: files,
})
export const setCurrentDir = (dir: string): FileAction => ({
  type: FileActionTypes.SET_CURRENT_DIR,
  payload: dir,
})
export const addFile = (file: File): FileAction => ({
  type: FileActionTypes.ADD_FILE,
  payload: file,
})
export const setPopupDisplay = (display: PopupDisplay): FileAction => ({
  type: FileActionTypes.SET_POPUP_DISPLAY,
  payload: display,
})
export const pushToStack = (dir: string): FileAction => ({
  type: FileActionTypes.PUSH_TO_STACK,
  payload: dir,
})
export const deleteFileAction = (dirId: string): FileAction => ({
  type: FileActionTypes.DELETE_FILE,
  payload: dirId,
})
export const setFileView = (payload: View): FileAction => ({
  type: FileActionTypes.SET_VIEW,
  payload,
})
