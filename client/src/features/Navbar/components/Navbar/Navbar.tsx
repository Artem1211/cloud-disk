import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppBar, Toolbar, Typography, TextField, Avatar } from '@ui/mui'
import { LibraryBooksIcon } from '@common/icons'
import { logout } from '../../../../store/action-creators/user'
import { searchFiles, getFiles } from '../../../../actions/file'
import { showLoader } from '../../../../store/action-creators/app'
import { API_URL } from '../../../../config'
import { useTypedSelector } from '../../../../hooks'

type Props = {
  className?: string
}
export const Navbar: React.FC<Props> = () => {
  const isAuth = useTypedSelector(state => state.user.isAuth)
  const currentDir = useTypedSelector(state => state.files.currentDir)
  const currentUser = useTypedSelector(state => state.user.currentUser)

  const dispatch = useDispatch()
  const [searchName, setSearchName] = useState('')

  const avatar = currentUser?.avatar && `${API_URL + currentUser.avatar}`

  function searchChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchName(e.target.value)
    dispatch(showLoader())
    // Сделать дебаунс
    if (e.target.value !== '') {
      dispatch(searchFiles(e.target.value))
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
        {isAuth && <NavLink to='/profile'>{avatar && <Avatar src={avatar} />}</NavLink>}
      </Toolbar>
    </AppBar>
  )
}
