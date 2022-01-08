import React, { useState } from 'react'
import { Button, Paper, Typography, TextField, Stack } from '@ui/mui'

type Props = {
  className?: string
  onSubmit: (value: { email: string; password: string }) => void
  title: string
  submitTitle: string
}

export const LoginLayout: React.FC<Props> = ({ className, onSubmit, title, submitTitle }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Paper className={className}>
      <Typography variant='h6'>{title}</Typography>
      <Stack direction='row' spacing={2}>
        <TextField
          onChange={event => setEmail(event.target.value)}
          value={email}
          placeholder='Введите email...'
          variant='outlined'
        />
        <TextField
          onChange={event => setPassword(event.target.value)}
          value={password}
          placeholder='Введите пароль...'
          variant='outlined'
          type='password'
        />
        <Button onClick={() => onSubmit({ email, password })}>{submitTitle}</Button>
      </Stack>
    </Paper>
  )
}
