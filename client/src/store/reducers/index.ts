import { combineReducers } from 'redux'

import fileReducer from './fileReducer'
import userReducer from './userReducer'
import uploadReducer from './uploadReducer'

import appReducer from './appReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer,
  upload: uploadReducer,
  app: appReducer,
})

export type RootState = ReturnType<typeof rootReducer>
