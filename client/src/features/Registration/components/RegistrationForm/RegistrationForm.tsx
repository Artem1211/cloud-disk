import React, { useState } from 'react'
import { Button, Paper, Typography } from '@ui/mui'
import Input from '../../../../utils/input/Input'
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

      <Input value={email} setValue={setEmail} type='text' placeholder='Введите email...' />

      <Input
        value={password}
        setValue={setPassword}
        type='password'
        placeholder='Введите пароль...'
      />
      <Button onClick={() => registration(email, password)}>Зарегестрироваться</Button>
    </Paper>
  )
}
