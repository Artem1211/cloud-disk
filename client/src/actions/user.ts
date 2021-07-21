import axios from 'axios'
import { Dispatch } from 'redux'

import { setUser } from '../store/action-creators/user'
import { API_URL } from '../config'
import { UserAction } from '../types/user'

export const registration = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}api/auth/registration`, {
      email,
      password,
    })
    alert(response.data.message)
  } catch (e) {
    alert(e.response.data.message)
  }
}

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post(`${API_URL}api/auth/login`, {
        email,
        password,
      })
      console.log(response)
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      alert(e.response.data.message)
    }
  }
}

export const auth = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.get(`${API_URL}api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      console.log(response)
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      alert(e.response.data.message)
      localStorage.removeItem('token')
    }
  }
}

export const uploadAvatar = (file: File) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      const response = await axios.post(`${API_URL}api/files/avatar`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      dispatch(setUser(response.data))
    } catch (e) {
      console.log(e)
    }
  }
}

export const deleteAvatar = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.delete(`${API_URL}api/files/avatar`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      dispatch(setUser(response.data))
    } catch (e) {
      console.log(e)
    }
  }
}
