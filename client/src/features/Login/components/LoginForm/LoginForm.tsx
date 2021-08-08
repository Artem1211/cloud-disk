import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../../../actions/user'
import { LoginLayout } from '../../../../components/LoginLayout'

type Props = {
  className?: string
}

export const LoginForm: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch()
  return (
    <LoginLayout
      className={className}
      title='Авторизация'
      submitTitle='Войти'
      onSubmit={({ email, password }) => dispatch(login(email, password))}
    />
  )
}
