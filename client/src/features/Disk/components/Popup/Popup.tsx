import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@ui/mui'
import Input from '../../../../utils/input/Input'
import { setPopupDisplay } from '../../../../reducers/fileReducer'
import { createDir } from '../../../../actions/file'

export const Popup = () => {
  const [dirName, setDirName] = useState('')
  const popupDisplay = useSelector(state => state.files.popupDisplay)
  const currentDir = useSelector(state => state.files.currentDir)
  const dispatch = useDispatch()

  function createHandler() {
    dispatch(createDir(currentDir, dirName))
    dispatch(setPopupDisplay('none'))
  }

  const handleClose = () => {
    dispatch(setPopupDisplay('none'))
  }

  return (
    <div>
      <Dialog
        open={popupDisplay === 'flex'}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Создать новую папку</DialogTitle>
        <DialogContent>
          <Input
            type='text'
            placeholder='Введите название папки...'
            value={dirName}
            setValue={setDirName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Отмена
          </Button>
          <Button onClick={() => createHandler()} color='primary'>
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
