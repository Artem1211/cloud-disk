import React from 'react'
import { registration } from '../../../../actions/user'
import { LoginLayout } from '../../../../components/LoginLayout'

type Props = {
  className?: string
}
export const RegistrationForm: React.FC<Props> = ({ className }) => {
  return (
    <LoginLayout
      className={className}
      title='Регистрация'
      submitTitle='Зарегистрироваться'
      onSubmit={({ email, password }) => registration(email, password)}
    />
  )
}
