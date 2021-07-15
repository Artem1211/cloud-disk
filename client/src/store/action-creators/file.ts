import { FileActionTypes, FileAction } from '../../types/file'

export const setFiles = (files: unknown): FileAction => ({
  type: FileActionTypes.SET_FILES,
  payload: files,
})
export const setCurrentDir = (dir: unknown): FileAction => ({
  type: FileActionTypes.SET_CURRENT_DIR,
  payload: dir,
})
export const addFile = (file: unknown): FileAction => ({
  type: FileActionTypes.ADD_FILE,
  payload: file,
})
export const setPopupDisplay = (display: unknown): FileAction => ({
  type: FileActionTypes.SET_POPUP_DISPLAY,
  payload: display,
})
export const pushToStack = (dir: unknown): FileAction => ({
  type: FileActionTypes.PUSH_TO_STACK,
  payload: dir,
})
export const deleteFileAction = (dirId: unknown): FileAction => ({
  type: FileActionTypes.DELETE_FILE,
  payload: dirId,
})
export const setFileView = (payload: unknown): FileAction => ({
  type: FileActionTypes.SET_VIEW,
  payload,
})
