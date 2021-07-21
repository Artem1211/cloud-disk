import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Autocomplete, TextField, IconButton, CircularProgress } from '@ui/mui'
import { DehazeIcon, AppsIcon } from '@common/icons'
import { getFiles, uploadFile } from '../../../../actions/file'
import { FileList } from '../FileList'
import { Popup } from '../Popup'
import { setCurrentDir, setFileView, setPopupDisplay } from '../../../../store/action-creators/file'
import { Uploader } from '../Uploader'
import { StyledDropArea } from './styled'
import { useTypedSelector } from '../../../../hooks'
import { SortType } from '../../../../types/file'

type Props = {
  className?: string
}

export const Disk: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const currentDir = useTypedSelector(state => state.files.currentDir)
  const loader = useTypedSelector(state => state.app.loader)
  const dirStack = useTypedSelector(state => state.files.dirStack)
  const [dragEnter, setDragEnter] = useState(false)
  const [sort, setSort] = useState<SortType>('type')

  useEffect(() => {
    dispatch(getFiles(currentDir, sort))
  }, [currentDir, dispatch, sort])

  function showPopupHandler() {
    dispatch(setPopupDisplay('flex'))
  }

  function backClickHandler() {
    const backDirId = dirStack.pop()
    dispatch(setCurrentDir(backDirId || null))
  }

  function fileUploadHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const files = [...(event.target.files || [])]
    files.forEach(file => dispatch(uploadFile(file, currentDir)))
  }

  function dragEnterHandler(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(true)
  }

  function dragLeaveHandler(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(false)
  }

  function dropHandler(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    event.stopPropagation()
    const files = [...event.dataTransfer.files]
    files.forEach(file => dispatch(uploadFile(file, currentDir)))
    setDragEnter(false)
  }

  const options = [
    { label: 'По имени', value: 'name' },
    { label: 'По типу', value: 'type' },
    { label: 'По дате', value: 'date' },
  ]
  if (loader) {
    return <CircularProgress />
  }
  return !dragEnter ? (
    <div
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragEnterHandler}
    >
      <div>
        <Button variant='contained' onClick={() => backClickHandler()}>
          Назад
        </Button>
        <Button variant='contained' onClick={() => showPopupHandler()}>
          Создать папку
        </Button>
        <label htmlFor='disk__upload-input'>Загрузить файл</label>
        <input
          multiple
          onChange={event => fileUploadHandler(event)}
          type='file'
          id='disk__upload-input'
        />
        <Autocomplete
          options={options}
          getOptionLabel={option => option.label}
          value={options.find(el => el.value === sort)}
          onChange={(_s, newValue) => {
            if (newValue) setSort(newValue.value as SortType)
          }}
          style={{ width: 300 }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={params => <TextField {...params} label='Сортировка' variant='outlined' />}
        />
        <IconButton size='small' onClick={() => dispatch(setFileView('plate'))}>
          <AppsIcon />
        </IconButton>
        <IconButton size='small' onClick={() => dispatch(setFileView('list'))}>
          <DehazeIcon />
        </IconButton>
      </div>
      <FileList />
      <Popup />
      <Uploader />
    </div>
  ) : (
    <StyledDropArea
      onDrop={dropHandler}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragEnterHandler}
    >
      Перетащите файлы сюда
    </StyledDropArea>
  )
}
