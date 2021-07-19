import React from 'react'

import { useDispatch } from 'react-redux'
import { Card, CardContent, Typography } from '@ui/mui'
import { UploadFile } from '../UploaderFile'
import { hideUploader } from '../../../../store/action-creators/upload'
import {
  StyledUploader,
  StyledUploaderClose,
  StyledUploaderHeader,
  StyledUploaderInner,
} from './styled'
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
    )) ||
    null
  )
}
