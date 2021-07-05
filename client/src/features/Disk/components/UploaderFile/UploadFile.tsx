import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUploadFile } from '../../../../reducers/uploadReducer'
import {
  StyledFile,
  StyledFileHeader,
  StyledFilePercent,
  StyledFileProgressBar,
  StyledFileUploadBar,
} from './styled'

type Props = {
  className?: string
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
