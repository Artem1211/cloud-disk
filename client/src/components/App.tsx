import React, { useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from './navbar'
import './app.scss'

import { LoginForm, RegistrationForm } from '../features'

import { auth } from '../actions/user'
import Disk from './disk/Disk'

import Profile from './profile/Profile'

function App() {
  const isAuth = useSelector(state => state.user.isAuth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <div className='wrap'>
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
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
