import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Paper, Typography } from '@ui/mui'
import Input from '../../../../utils/input/Input'
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

      <Input value={email} setValue={setEmail} type='text' placeholder='Введите email...' />

      <Input
        value={password}
        setValue={setPassword}
        type='password'
        placeholder='Введите пароль...'
      />
      <Button onClick={() => dispatch(login(email, password))}>Войти</Button>
    </Paper>
  )
}
