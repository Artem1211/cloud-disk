import React, { useState } from 'react'
import { Button, Paper, Typography, TextField } from '@ui/mui'
import { registration } from '../../../../actions/user'

type Props = {
  className?: string
}
export const RegistrationForm: React.FC<Props> = ({ className }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Paper className={className}>
      <Typography variant='h6'>Регистрация</Typography>

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
      />

      <Button onClick={() => registration(email, password)}>Зарегестрироваться</Button>
    </Paper>
  )
}
