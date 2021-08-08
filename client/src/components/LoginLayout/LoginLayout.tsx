import React, { useState } from 'react'
import { Button, Paper, Typography, TextField, Grid } from '@ui/mui'

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
      <Grid container spacing={2} alignItems='center'>
        <Grid item>
          <TextField
            onChange={event => setEmail(event.target.value)}
            value={email}
            placeholder='Введите email...'
            variant='outlined'
          />
        </Grid>
        <Grid item>
          <TextField
            onChange={event => setPassword(event.target.value)}
            value={password}
            placeholder='Введите пароль...'
            variant='outlined'
            type='password'
          />
        </Grid>
        <Grid item>
          <Button onClick={() => onSubmit({ email, password })}>{submitTitle}</Button>
        </Grid>
      </Grid>
    </Paper>
  )
}
