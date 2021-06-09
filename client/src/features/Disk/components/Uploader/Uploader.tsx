import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent, Typography } from '@ui/mui'
import { UploadFile } from '../UploaderFile'
import './uploader.scss'
import { hideUploader } from '../../../../reducers/uploadReducer'
import {
  StyledUploader,
  StyledUploaderClose,
  StyledUploaderHeader,
  StyledUploaderInner,
} from './styled'

export const Uploader = () => {
  const files = useSelector(state => state.upload.files)
  const isVisible = true
  // const isVisible = useSelector(state => state.upload.isVisible)
  const dispatch = useDispatch()

  return (
    isVisible && (
      <StyledUploader>
        <Card elevation={3}>
          <CardContent>
            <StyledUploaderInner>
              <StyledUploaderHeader>
                <Typography>Загрузки</Typography>
                <StyledUploaderClose type='button' onClick={() => dispatch(hideUploader())}>
                  X
                </StyledUploaderClose>
              </StyledUploaderHeader>
              {files.map(file => (
                <UploadFile key={file.id} file={file} />
              ))}
            </StyledUploaderInner>
          </CardContent>
        </Card>
      </StyledUploader>
    )
  )
}
