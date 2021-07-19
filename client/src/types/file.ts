export type File = {
  _id: string
  name: string
  type: string
  accessLink: string
  size: number
  path: string
  date: string
  user: string
  parent: string | null
  childs: string[]
}

export type PopupDisplay = 'flex' | 'none'
export type View = 'list' | 'plate'

export type FileState = {
  files: File[]
  currentDir: null | string
  popupDisplay: PopupDisplay
  dirStack: (null | string)[]
  view: View
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
  payload: File[]
}

type SetCurrentDirAction = {
  type: FileActionTypes.SET_CURRENT_DIR
  payload: string
}

type AddFileAction = {
  type: FileActionTypes.ADD_FILE
  payload: File
}

type SetPopupDisplayAction = {
  type: FileActionTypes.SET_POPUP_DISPLAY
  payload: PopupDisplay
}

type PushToStackAction = {
  type: FileActionTypes.PUSH_TO_STACK
  payload: string
}

type DeleteFileAction = {
  type: FileActionTypes.DELETE_FILE
  payload: string
}

type SetViewAction = {
  type: FileActionTypes.SET_VIEW
  payload: View
}

export type FileAction =
  | SetFilesAction
  | SetCurrentDirAction
  | AddFileAction
  | SetPopupDisplayAction
  | PushToStackAction
  | DeleteFileAction
  | SetViewAction
