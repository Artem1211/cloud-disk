import React from 'react'
import { TableCell, Table, TableBody, TableHead, TableRow } from '@ui/mui'
import { File } from '../File'
import { useTypedSelector } from '../../../../hooks'

type Props = {
  className?: string
}
export const FileList: React.FC<Props> = () => {
  const files = useTypedSelector(state => state.files.files)
  const fileView = useTypedSelector(state => state.files.view)

  if (files.length === 0) {
    return <div>Файлы не найдены</div>
  }

  if (fileView === 'plate') {
    return (
      <div>
        {files.map(file => (
          <File key={file._id} file={file} />
        ))}
      </div>
    )
  }

  if (fileView === 'list') {
    return (
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Тип</TableCell>
            <TableCell>Название</TableCell>
            <TableCell>Дата</TableCell>
            <TableCell>Размер</TableCell>
            <TableCell>Скачать</TableCell>
            <TableCell>Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map(file => (
            <File file={file} key={file._id} />
          ))}
        </TableBody>
      </Table>
    )
  }
  return null
}
