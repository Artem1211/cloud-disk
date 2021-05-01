import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import UploadFile from './UploadFile'
import './uploader.scss'
import { hideUploader } from '../../../reducers/uploadReducer'

const Uploader = () => {
  const files = useSelector(state => state.upload.files)
  const isVisible = useSelector(state => state.upload.isVisible)
  const dispatch = useDispatch()

  return (
    isVisible && (
      <div className='uploader'>
        <div className='uploader__header'>
          <div className='uploader__title'>Загрузки</div>
          <button
            type='button'
            className='uploader__close'
            onClick={() => dispatch(hideUploader())}
          >
            X
          </button>
        </div>
        {files.map(file => (
          <UploadFile key={file.id} file={file} />
        ))}
      </div>
    )
  )
}

export default Uploader