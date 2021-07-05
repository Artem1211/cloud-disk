import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppBar, Toolbar, Typography, TextField, Avatar } from '@ui/mui'
import { LibraryBooksIcon } from '@common/icons'
import { logout } from '../../../../reducers/userReducer'
import { searchFiles, getFiles } from '../../../../actions/file'
import { showLoader } from '../../../../reducers/appReducer'
import { API_URL } from '../../../../config'

type Props = {
  className?: string
}
export const Navbar: React.FC<Props> = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  const currentDir = useSelector(state => state.files.currentDir)
  const currentUser = useSelector(state => state.user.currentUser)

  const dispatch = useDispatch()
  const [searchName, setSearchName] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(false)

  const avatar = currentUser.avatar && `${API_URL + currentUser.avatar}`

  function searchChangeHandler(e) {
    setSearchName(e.target.value)
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout)
    }
    dispatch(showLoader())
    if (e.target.value !== '') {
      setSearchTimeout(
        setTimeout(
          value => {
            dispatch(searchFiles(value))
          },
          500,
          e.target.value
        )
      )
    } else {
      dispatch(getFiles(currentDir))
    }
  }
  return (
    <AppBar position='static'>
      <Toolbar>
        <LibraryBooksIcon />
        <Typography>MERN CLOUD</Typography>
        {isAuth && (
          <TextField
            placeholder='Название файла...'
            value={searchName}
            onChange={searchChangeHandler}
            variant='outlined'
          />
        )}
        {!isAuth && (
          <div>
            <NavLink to='/login'>Войти</NavLink>
          </div>
        )}
        {!isAuth && (
          <div>
            <NavLink to='/registration'>Регистрация</NavLink>
          </div>
        )}
        {isAuth && <Typography onClick={() => dispatch(logout())}>Выход</Typography>}
        {isAuth && (
          <NavLink to='/profile'>
            <Avatar src={avatar} />
          </NavLink>
        )}
      </Toolbar>
    </AppBar>
  )
}
