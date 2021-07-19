export type UploadFile = {
  name: string
  progress: number
  id: number
}

export type UploadState = {
  isVisible: boolean
  files: UploadFile[]
}

export enum UploadActionTypes {
  SHOW_UPLOADER = 'SHOW_UPLOADER',
  HIDE_UPLOADER = 'HIDE_UPLOADER',
  ADD_UPLOAD_FILE = 'ADD_UPLOAD_FILE',
  REMOVE_UPLOAD_FILE = 'REMOVE_UPLOAD_FILE',
  CHANGE_UPLOAD_FILE = 'CHANGE_UPLOAD_FILE',
}

type ShowUploaderAction = {
  type: UploadActionTypes.SHOW_UPLOADER
}

type HideUploaderAction = {
  type: UploadActionTypes.HIDE_UPLOADER
}

type AddUploadFileAction = {
  type: UploadActionTypes.ADD_UPLOAD_FILE
  payload: UploadFile
}

type RemoveUploadFileAction = {
  type: UploadActionTypes.REMOVE_UPLOAD_FILE
  payload: number
}

type ChangeUploadFileAction = {
  type: UploadActionTypes.CHANGE_UPLOAD_FILE
  payload: UploadFile
}

export type UploadAction =
  | ShowUploaderAction
  | HideUploaderAction
  | AddUploadFileAction
  | RemoveUploadFileAction
  | ChangeUploadFileAction
