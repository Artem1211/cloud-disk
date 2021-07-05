import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Paper, Typography, TextField } from '@ui/mui'
import { login } from '../../../../actions/user'

type Props = {
  className?: string
}

export const LoginForm: React.FC<Props> = ({ className }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  return (
    <Paper className={className}>
      <Typography variant='h6'>Авторизация</Typography>

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
      <Button onClick={() => dispatch(login(email, password))}>Войти</Button>
    </Paper>
  )
}
