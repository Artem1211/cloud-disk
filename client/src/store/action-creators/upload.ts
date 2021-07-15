import { UploadActionTypes, UploadAction } from '../../types/upload'

export const showUploader = (): UploadAction => ({ type: UploadActionTypes.SHOW_UPLOADER })
export const hideUploader = (): UploadAction => ({ type: UploadActionTypes.HIDE_UPLOADER })
export const addUploadFile = (file: unknown): UploadAction => ({
  type: UploadActionTypes.ADD_UPLOAD_FILE,
  payload: file,
})
export const removeUploadFile = (fileId: unknown): UploadAction => ({
  type: UploadActionTypes.REMOVE_UPLOAD_FILE,
  payload: fileId,
})
export const changeUploadFile = (payload: unknown): UploadAction => ({
  type: UploadActionTypes.CHANGE_UPLOAD_FILE,
  payload,
})
