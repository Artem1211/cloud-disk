import { UploadActionTypes, UploadAction, UploadFile } from '../../types/upload'

export const showUploader = (): UploadAction => ({ type: UploadActionTypes.SHOW_UPLOADER })
export const hideUploader = (): UploadAction => ({ type: UploadActionTypes.HIDE_UPLOADER })
export const addUploadFile = (file: UploadFile): UploadAction => ({
  type: UploadActionTypes.ADD_UPLOAD_FILE,
  payload: file,
})
export const removeUploadFile = (fileId: number): UploadAction => ({
  type: UploadActionTypes.REMOVE_UPLOAD_FILE,
  payload: fileId,
})
export const changeUploadFile = (payload: UploadFile): UploadAction => ({
  type: UploadActionTypes.CHANGE_UPLOAD_FILE,
  payload,
})
