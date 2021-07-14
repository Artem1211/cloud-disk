import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FolderIcon, InsertDriveFileIcon } from '@common/icons'
import { TableCell, TableRow, Button } from '@ui/mui'

import { pushToStack, setCurrentDir } from '../../../../store/action-creators/file'
import { downloadFile, deleteFile } from '../../../../actions/file'
import sizeFormat from '../../../../utils/sizeFormat'

type Props = {
  className?: string
}
export const File: React.FC<Props> = ({ file }) => {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)
  const fileView = useSelector(state => state.files.view)

  function openDirHandler(openFile) {
    if (openFile.type === 'dir') {
      dispatch(pushToStack(currentDir))
      dispatch(setCurrentDir(openFile._id))
    }
  }

  function downloadClickHandler(e) {
    e.stopPropagation()
    downloadFile(file)
  }

  function deleteClickHandler(e) {
    e.stopPropagation()
    dispatch(deleteFile(file))
  }
  if (fileView === 'list') {
    return (
      <TableRow onClick={() => openDirHandler(file)}>
        <TableCell>{file.type === 'dir' ? <FolderIcon /> : <InsertDriveFileIcon />}</TableCell>
        <TableCell>{file.name}</TableCell>
        <TableCell>{file.date.slice(0, 10)}</TableCell>
        <TableCell>{sizeFormat(file.size)}</TableCell>
        {file.type !== 'dir' ? (
          <TableCell>
            <Button variant='contained' onClick={e => downloadClickHandler(e)}>
              Скачать
            </Button>
          </TableCell>
        ) : (
          <TableCell />
        )}
        <TableCell>
          <Button variant='contained' onClick={e => deleteClickHandler(e)}>
            Удалить
          </Button>
        </TableCell>
      </TableRow>
    )
  }
  if (fileView === 'plate') {
    return (
      <div onClick={() => openDirHandler(file)}>
        {file.type === 'dir' ? <FolderIcon /> : <InsertDriveFileIcon />}
        <div>{file.name}</div>
        <div>
          {file.type !== 'dir' && (
            <Button variant='contained' onClick={e => downloadClickHandler(e)}>
              Скачать
            </Button>
          )}
          <Button variant='contained' onClick={e => deleteClickHandler(e)}>
            Удалить
          </Button>
        </div>
      </div>
    )
  }
  return null
}
