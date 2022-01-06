import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppBar, Toolbar, Typography, TextField, Avatar, Grid, Link } from '@ui/mui'
import { LibraryBooksIcon } from '@common/icons'
import { logout } from '../../../../store/action-creators/user'
import { searchFiles, getFiles } from '../../../../actions/file'
import { showLoader } from '../../../../store/action-creators/app'
import { API_URL } from '../../../../config'
import { useTypedSelector } from '../../../../hooks'
import { toolbarStyles } from './styled'

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
    <AppBar position='static' css={toolbarStyles}>
      <Toolbar>
        <Grid container spacing={2} justify='space-between' alignItems='center'>
          <Grid item>
            <Grid container spacing={2} alignItems='center'>
              <Grid item>
                <LibraryBooksIcon />
              </Grid>

              <Grid item>
                <Typography>MERN CLOUD</Typography>
              </Grid>

              {isAuth && (
                <Grid item>
                  <TextField
                    placeholder='Название файла...'
                    value={searchName}
                    onChange={searchChangeHandler}
                    variant='outlined'
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
          {!isAuth && (
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <Link to='/login' component={NavLink} color='inherit'>
                    Войти
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/registration' component={NavLink} color='inherit'>
                    Регистрация
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          )}

          {isAuth && (
            <Grid item>
              <Typography onClick={() => dispatch(logout())}>Выход</Typography>
              <Link to='/profile' component={NavLink} color='inherit'>
                {avatar && <Avatar src={avatar} />}
              </Link>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
