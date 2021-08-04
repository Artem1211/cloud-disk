import React from 'react'

import { useDispatch } from 'react-redux'
import { Card, CardContent, Typography, Box } from '@ui/mui'
import { UploadFile } from '../UploaderFile'
import { hideUploader } from '../../../../store/action-creators/upload'
import { StyledUploader, StyledUploaderInner } from './styled'
import { useTypedSelector } from '../../../../hooks'

type Props = {
  className?: string
}

export const Uploader: React.FC<Props> = () => {
  const files = useTypedSelector(state => state.upload.files)
  const isVisible = useTypedSelector(state => state.upload.isVisible)
  const dispatch = useDispatch()

  return (
    (isVisible && (
      <StyledUploader>
        <Card elevation={3}>
          <CardContent>
            <StyledUploaderInner>
              <Box justifyContent='space-between' display='flex'>
                <Typography>Загрузки</Typography>
                <button type='button' onClick={() => dispatch(hideUploader())}>
                  X
                </button>
              </Box>
              {files.map(file => (
                <UploadFile key={file.id} file={file} />
              ))}
            </StyledUploaderInner>
          </CardContent>
        </Card>
      </StyledUploader>
    )) ||
    null
  )
}
