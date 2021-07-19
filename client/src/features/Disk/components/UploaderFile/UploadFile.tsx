import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUploadFile } from '../../../../store/action-creators/upload'
import { UploadFile as UploadFileType } from '../../../../types/upload'
import {
  StyledFile,
  StyledFileHeader,
  StyledFilePercent,
  StyledFileProgressBar,
  StyledFileUploadBar,
} from './styled'

type Props = {
  className?: string
  file: UploadFileType
}
export const UploadFile: React.FC<Props> = ({ file }) => {
  const dispatch = useDispatch()

  return (
    <StyledFile>
      <StyledFileHeader>
        <div>{file.name}</div>
        <button type='button' onClick={() => dispatch(removeUploadFile(file.id))}>
          X
        </button>
      </StyledFileHeader>
      <StyledFileProgressBar>
        <StyledFileUploadBar style={{ width: `${file.progress}%` }} />
        <StyledFilePercent>{`${file.progress}%`}</StyledFilePercent>
      </StyledFileProgressBar>
    </StyledFile>
  )
}
