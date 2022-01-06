import axios from 'axios'
import { Dispatch } from 'redux'

import { hideLoader, showLoader } from '../store/action-creators/app'
import { addFile, deleteFileAction, setFiles } from '../store/action-creators/file'
import { addUploadFile, changeUploadFile, showUploader } from '../store/action-creators/upload'
import { API_URL } from '../config'
import { SortType, FileAction, File as FileType } from '../types/file'
import { AppAction } from '../types/app'
import { UploadAction } from '../types/upload'

export function getFiles(dirId: string | null, sort?: SortType) {
  return async (dispatch: Dispatch<FileAction | AppAction>) => {
    try {
      dispatch(showLoader())
      let url = `${API_URL}api/files`
      if (dirId) {
        url = `${API_URL}api/files?parent=${dirId}`
      }
      if (sort) {
        url = `${API_URL}api/files?sort=${sort}`
      }
      if (dirId && sort) {
        url = `${API_URL}api/files?parent=${dirId}&sort=${sort}`
      }
      console.log(localStorage.getItem('token'), 'token')
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      console.log(response.data)
      dispatch(setFiles(response.data))
    } catch (e) {
      // @ts-ignore
      alert(e.response.data.message)
    } finally {
      dispatch(hideLoader())
    }
  }
}

export function createDir(dirId: string | null, name: string) {
  return async (dispatch: Dispatch<FileAction>) => {
    try {
      const response = await axios.post(
        `${API_URL}api/files`,
        {
          name,
          parent: dirId,
          type: 'dir',
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      console.log(response.data)
      dispatch(addFile(response.data))
    } catch (e) {
      // @ts-ignore
      alert(e.response.data.message)
    }
  }
}

export function uploadFile(file: File, dirId: string | null) {
  return async (dispatch: Dispatch<FileAction | UploadAction>) => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      if (dirId) {
        formData.append('parent', dirId)
      }
      const uploadFileInner = { name: file.name, progress: 0, id: Date.now() }
      dispatch(showUploader())
      dispatch(addUploadFile(uploadFileInner))
      const response = await axios.post(`${API_URL}api/files/upload`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        onUploadProgress: progressEvent => {
          const totalLength = progressEvent.lengthComputable
            ? progressEvent.total
            : progressEvent.target.getResponseHeader('content-length') ||
              progressEvent.target.getResponseHeader('x-decompressed-content-length')
          console.log('total', totalLength)
          if (totalLength) {
            uploadFileInner.progress = Math.round((progressEvent.loaded * 100) / totalLength)
            dispatch(changeUploadFile(uploadFileInner))
          }
        },
      })
      console.log(response.data)
      dispatch(addFile(response.data))
    } catch (e) {
      // @ts-ignore
      alert(e.response.data.message)
    }
  }
}

export async function downloadFile(file: FileType) {
  const response = await fetch(`${API_URL}api/files/download?id=${file._id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  if (response.status === 200) {
    const blob = await response.blob()
    const downloadUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = file.name
    document.body.appendChild(link)
    link.click()
    link.remove()
  }
}

export function deleteFile(file: FileType) {
  return async (dispatch: Dispatch<FileAction>) => {
    try {
      const response = await axios.delete(`${API_URL}api/files?id=${file._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      dispatch(deleteFileAction(file._id))
      alert(response.data.message)
    } catch (e) {
      // @ts-ignore
      alert(e.response.data.message)
    }
  }
}

export function searchFiles(search: string) {
  return async (dispatch: Dispatch<FileAction | UploadAction | AppAction>) => {
    try {
      const response = await axios.get(`${API_URL}api/files/search?search=${search}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      dispatch(setFiles(response.data))
    } catch (e) {
      // @ts-ignore
      alert(e?.response?.data?.message)
    } finally {
      dispatch(hideLoader())
    }
  }
}
