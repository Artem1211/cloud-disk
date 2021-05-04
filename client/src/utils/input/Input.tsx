import React from 'react'
// import { TextField } from '../../common/ui/mui'
import { TextField } from '@ui/mui'

const Input = ({ setValue, value, type, placeholder }) => {
  return (
    <TextField
      onChange={event => setValue(event.target.value)}
      value={value}
      placeholder={placeholder}
      variant='outlined'
      type=''
    />
  )
}

export default Input
