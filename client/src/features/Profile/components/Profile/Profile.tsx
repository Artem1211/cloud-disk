import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@ui/mui'
import { deleteAvatar, uploadAvatar } from '../../../../actions/user'

type Props = {
  className?: string
}
export const Profile: React.FC<Props> = () => {
  const dispatch = useDispatch()

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) dispatch(uploadAvatar(file))
  }

  return (
    <div>
      <Button variant='contained' onClick={() => dispatch(deleteAvatar())}>
        Удалить аватар
      </Button>
      <input
        accept='image/*'
        onChange={e => changeHandler(e)}
        type='file'
        placeholder='Загрузить аватар'
      />
    </div>
  )
}
