import { useState } from 'react'

const useDialogState = (initialValue = false): [boolean, () => void, () => void] => {
  const [dialogState, setDialogState] = useState<boolean>(initialValue)

  const handleCloseDialog = (): void => {
    setDialogState(false)
  }

  const handleOpenDialog = (): void => {
    setDialogState(true)
  }

  return [dialogState, handleCloseDialog, handleOpenDialog]
}
export default useDialogState
