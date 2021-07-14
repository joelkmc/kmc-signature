import { useRef } from 'react'
import ReactSignatureCanvas from 'react-signature-canvas'
import DialogComp from '../../element/Dialog'
import { usePutSignature } from '../../../hooks/Contract'
import { useContractStore } from '../../../store/contractStore'
import { useToasts } from 'react-toast-notifications'
import { AiOutlineLoading } from 'react-icons/ai'

interface SignatureDialogProps {
  dialogState: boolean
  closeDialog: () => void
}

const SignatureDialog: React.FC<SignatureDialogProps> = ({ closeDialog, dialogState }) => {
  const signatureCanvasRef = useRef<ReactSignatureCanvas>(null)
  const { addToast } = useToasts()

  const [bookingNumber, coontractSignatures, createContract] = useContractStore((state) => [
    state.bookingNumber,
    state.coontractSignatures,
    state.createContract,
  ])

  const { mutateAsync, isLoading } = usePutSignature({
    onSuccess: () => {
      createContract && createContract()
      closeDialog()
      addToast('You have signed the contract. An email will be sent to you shortly!', {
        appearance: 'success',
        autoDismiss: true,
      })
    },
  })

  const handleCanvasClear = (): void => {
    signatureCanvasRef.current?.clear()
  }

  const handleSubmit = (): void => {
    const dataImg = signatureCanvasRef.current?.toDataURL().toString()
    if (dataImg && bookingNumber && coontractSignatures) {
      mutateAsync({
        bookingNumber: bookingNumber,
        data: { signature: dataImg, id: coontractSignatures[0].id },
      })
    }
  }

  return (
    <div className="border">
      <DialogComp closeDialog={closeDialog} dialogState={dialogState} title="Signature">
        <div className="my-5">
          <div className="border border-gray-200 bg-gray-100 rounded-md overflow-hidden">
            <ReactSignatureCanvas
              ref={signatureCanvasRef}
              penColor="black"
              dotSize={5}
              canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
            />
          </div>

          <button
            onClick={handleCanvasClear}
            type="button"
            disabled={isLoading}
            className="mt-2 disabled:opacity-80 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </span>
            Clear
          </button>
        </div>

        <div className="mt-5 justify-end flex gap-2">
          <button
            disabled={isLoading}
            className="disabled:opacity-80 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={closeDialog}
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>{' '}
            Cancel
          </button>
          <button
            disabled={isLoading}
            className="disabled:opacity-80 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleSubmit}
          >
            <span className="mr-2">
              {isLoading ? (
                <AiOutlineLoading className="animate-spin" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </span>{' '}
            Submit
          </button>
        </div>
      </DialogComp>
    </div>
  )
}

export default SignatureDialog
