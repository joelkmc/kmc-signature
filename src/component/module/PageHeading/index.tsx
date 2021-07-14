import useDialogState from '../../../hooks/useDialogState'
import { useContractStore } from '../../../store/contractStore'
import SignatureDialog from './SignatureDialog'

const PageHeading: React.FC = () => {
  const [dialogState, closeDialog, openDialog] = useDialogState()
  const isSignButtonDisabled = useContractStore((state) => state.isSignButtonDisabled)

  return (
    <div className="mt-2 flex sm:flex-row justify-end">
      <div className="my-2 flex-shrink-0 flex md:mt-0 md:ml-4">
        {!isSignButtonDisabled && (
          <button
            onClick={openDialog}
            disabled={isSignButtonDisabled}
            type="button"
            className="sm:ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60"
          >
            Click to sign
          </button>
        )}
        <SignatureDialog closeDialog={closeDialog} dialogState={dialogState} />
      </div>
    </div>
  )
}

export default PageHeading
