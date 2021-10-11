import { useEffect, useState } from 'react'
import { useContractStore } from '../../../store/contractStore'
import DialogComp from '../../element/Dialog'

interface SuccessfulDialogProps {
  dialogState: boolean
  closeDialog: () => void
}

const SuccessfulDialog: React.FC<SuccessfulDialogProps> = ({ closeDialog, dialogState }) => {
  const [counter, setCounter] = useState(5)
  const bookingNumber = useContractStore((state) => state.bookingNumber)

  useEffect(() => {
    !dialogState && setCounter(5)

    setTimeout(() => {
      if (dialogState && counter > 0) {
        setCounter((old) => old - 1)
      }
    }, 1000)

    if (counter === 0) {
      // // production
      // window.location.href = `https://hub.kmc.solutions/user/bookings/${bookingNumber}`

      // Staging
      window.location.href = `https://kmc-hub.vercel.app/user/bookings/${bookingNumber}`

      // // dev env
      // window.location.href = `http://localhost:3000/user/bookings/${bookingNumber}`
    }
  }, [counter, dialogState, bookingNumber])

  return (
    <DialogComp closeDialog={closeDialog} dialogState={dialogState} title="Success!">
      <div className="py-5">
        <p>You&apos;re almost done!</p>
        <p className="mt-3 text-sm">
          You have successfully signed your agreement with us! We will redirect you back to your
          booking page.
        </p>
      </div>

      {counter === 0 ? (
        <p className="text-center text-gray-400">Redirecting...</p>
      ) : (
        <div className="border rounded-full border-blue-400 text-blue-600 w-20 h-20 mx-auto flex justify-center items-center">
          <span className="text-3xl">{counter}</span>
        </div>
      )}

      <div className="text-center mt-7">
        <p className="text-sm">Dont want to wait?</p>
        <button
          className="disabled:opacity-80 inline-flex items-center px-4 text-sm text-blue-500 focus:outline-none focus:underline"
          onClick={closeDialog}
        >
          Click here to redirect.
        </button>
      </div>
    </DialogComp>
  )
}

export default SuccessfulDialog
