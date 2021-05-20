import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Autocomplete, TextField, IconButton } from '@ui/mui'
import { DehazeIcon, AppsIcon } from '@common/icons'
import { getFiles, uploadFile } from '../../../../actions/file'
import { FileList } from '../FileList'
import './disk.scss'
import { Popup } from '../Popup'
import { setCurrentDir, setFileView, setPopupDisplay } from '../../../../reducers/fileReducer'
import { Uploader } from '../Uploader'

export const Disk = () => {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)
  const loader = useSelector(state => state.app.loader)
  const dirStack = useSelector(state => state.files.dirStack)
  const [dragEnter, setDragEnter] = useState(false)
  const [sort, setSort] = useState('type')

  useEffect(() => {
    dispatch(getFiles(currentDir, sort))
  }, [currentDir, dispatch, sort])

  function showPopupHandler() {
    dispatch(setPopupDisplay('flex'))
  }

  function backClickHandler() {
    const backDirId = dirStack.pop()
    dispatch(setCurrentDir(backDirId))
  }

  function fileUploadHandler(event) {
    const files = [...event.target.files]
    files.forEach(file => dispatch(uploadFile(file, currentDir)))
  }

  function dragEnterHandler(event) {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(true)
  }

  function dragLeaveHandler(event) {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(false)
  }

  function dropHandler(event) {
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
    return (
      <div className='loader'>
        <div className='lds-dual-ring' />
      </div>
    )
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
        <label htmlFor='disk__upload-input' className='disk__upload-label'>
          Загрузить файл
        </label>
        <input
          multiple
          onChange={event => fileUploadHandler(event)}
          type='file'
          id='disk__upload-input'
          className='disk__upload-input'
        />
        <Autocomplete
          options={options}
          getOptionLabel={option => option.label}
          value={options.find(el => el.value === sort)}
          onChange={(event, newValue) => {
            if (newValue) setSort(newValue.value)
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
    <div
      className='drop-area'
      onDrop={dropHandler}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragEnterHandler}
    >
      Перетащите файлы сюда
    </div>
  )
}
