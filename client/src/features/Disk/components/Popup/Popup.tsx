import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@ui/mui'
import { setPopupDisplay } from '../../../../store/action-creators/file'
import { createDir } from '../../../../actions/file'

type Props = {
  className?: string
}
export const Popup: React.FC<Props> = () => {
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
          <TextField
            onChange={event => setDirName(event.target.value)}
            value={dirName}
            placeholder='Введите название папки...'
            variant='outlined'
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
