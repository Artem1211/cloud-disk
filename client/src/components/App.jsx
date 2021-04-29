import React, { useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from './navbar'
import './app.scss'

import Registration from './authorization/Registration'
import Login from './authorization/Login'

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
              <Route component={Registration} path='/registration' />
              <Route component={Login} path='/login' />
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
