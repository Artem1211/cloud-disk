import { UploadActionTypes } from '../../types/upload'

export const showUploader = () => ({ type: UploadActionTypes.SHOW_UPLOADER })
export const hideUploader = () => ({ type: UploadActionTypes.HIDE_UPLOADER })
export const addUploadFile = file => ({
  type: UploadActionTypes.ADD_UPLOAD_FILE,
  payload: file,
})
export const removeUploadFile = fileId => ({
  type: UploadActionTypes.REMOVE_UPLOAD_FILE,
  payload: fileId,
})
export const changeUploadFile = payload => ({
  type: UploadActionTypes.CHANGE_UPLOAD_FILE,
  payload,
})
