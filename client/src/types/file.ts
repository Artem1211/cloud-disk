export type FileState = {
  files: unknown[]
  currentDir: unknown
  popupDisplay: unknown
  dirStack: unknown[]
  view: unknown
}

export enum FileActionTypes {
  SET_FILES = 'SET_FILES',
  SET_CURRENT_DIR = 'SET_CURRENT_DIR',
  ADD_FILE = 'ADD_FILE',
  SET_POPUP_DISPLAY = 'SET_POPUP_DISPLAY',
  PUSH_TO_STACK = 'PUSH_TO_STACK',
  DELETE_FILE = 'DELETE_FILE',
  SET_VIEW = 'SET_VIEW',
}

type SetFilesAction = {
  type: FileActionTypes.SET_FILES
  payload: unknown
}

type SetCurrentDirAction = {
  type: FileActionTypes.SET_CURRENT_DIR
  payload: unknown
}

type AddFileAction = {
  type: FileActionTypes.ADD_FILE
  payload: unknown
}

type SetPopupDisplayAction = {
  type: FileActionTypes.SET_POPUP_DISPLAY
  payload: unknown
}

type PushToStackAction = {
  type: FileActionTypes.PUSH_TO_STACK
  payload: unknown
}

type DeleteFileAction = {
  type: FileActionTypes.DELETE_FILE
  payload: unknown
}

type SetViewAction = {
  type: FileActionTypes.SET_VIEW
  payload: unknown
}

export type FileAction =
  | SetFilesAction
  | SetCurrentDirAction
  | AddFileAction
  | SetPopupDisplayAction
  | PushToStackAction
  | DeleteFileAction
  | SetViewAction
