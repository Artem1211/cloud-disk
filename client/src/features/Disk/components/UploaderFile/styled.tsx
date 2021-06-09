import styled from 'styled-components'

const backgroundColor = '#e9e6e6'
const fontColor = '#566885'

export const StyledFile = styled.div`
  background-color: ${backgroundColor};
  border-radius: 8px;
  margin: 5px 0;
  padding: 5px 10px;
`
export const StyledFileHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyledFileProgressBar = styled.div`
  height: 1rem;
  border-radius: 8px;
  background-color: ${fontColor};
  display: flex;
  margin: 3px 0;
`
export const StyledFileUploadBar = styled.button`
  background-color: green;
  border-radius: 8px;
`
export const StyledFilePercent = styled.div`
  color: ${backgroundColor};
  left: 50%;
  position: absolute;
`
