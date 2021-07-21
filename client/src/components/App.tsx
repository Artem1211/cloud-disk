import React, { useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container } from '@ui/mui'
import { GlobalStyle } from './AppGlobalStyles'
import { LoginForm, RegistrationForm, Navbar, Profile, Disk } from '../features'
import { useTypedSelector } from '../hooks'

import { auth } from '../actions/user'

export const App = () => {
  const isAuth = useTypedSelector(state => state.user.isAuth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <Navbar />
        {!isAuth ? (
          <Switch>
            <Route component={RegistrationForm} path='/registration' />
            <Route component={LoginForm} path='/login' />
            <Redirect to='/login' />
          </Switch>
        ) : (
          <Switch>
            <Route exact component={Disk} path='/' />
            <Route exact component={Profile} path='/profile' />
            <Redirect to='/' />
          </Switch>
        )}
      </Container>
      <GlobalStyle />
    </BrowserRouter>
  )
}
