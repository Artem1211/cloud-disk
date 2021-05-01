import React, { useState } from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../assets/img/navbar-logo.svg'
import { logout } from '../../reducers/userReducer'
import { searchFiles, getFiles } from '../../actions/file'
import { showLoader } from '../../reducers/appReducer'
import avatarLogo from '../../assets/img/avatar.svg'
import { API_URL } from '../../config'

export const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  const currentDir = useSelector(state => state.files.currentDir)
  const currentUser = useSelector(state => state.user.currentUser)

  const dispatch = useDispatch()
  const [searchName, setSearchName] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(false)

  const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo

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
    <div className='navbar'>
      <div className='container'>
        <img alt='' className='navbar__logo' src={Logo} />
        <div className='navbar__header'>MERN CLOUD</div>
        {isAuth && (
          <input
            className='navbar__search'
            placeholder='Название файла...'
            type='text'
            value={searchName}
            onChange={searchChangeHandler}
          />
        )}
        {!isAuth && (
          <div className='navbar__login'>
            <NavLink to='/login'>Войти</NavLink>
          </div>
        )}
        {!isAuth && (
          <div className='navbar__registration'>
            <NavLink to='/registration'>Регистрация</NavLink>
          </div>
        )}
        {isAuth && (
          <div className='navbar__login' onClick={() => dispatch(logout())}>
            Выход
          </div>
        )}
        {isAuth && (
          <NavLink to='/profile'>
            <img alt='' className='navbar__avatar' src={avatar} />
          </NavLink>
        )}
      </div>
    </div>
  )
}

export default Navbar