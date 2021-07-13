import useDialogState from '../../../hooks/useDialogState'
import SignatureDialog from './SignatureDialog'

const PageHeading: React.FC = () => {
  const [dialogState, closeDialog, openDialog] = useDialogState()

  return (
    <div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-proxiExtraBold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Coworking Contract
          </h2>
        </div>
        <div className="my-2 flex-shrink-0 flex md:mt-0 md:ml-4">
          <button
            onClick={openDialog}
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Click to sign
          </button>
          <SignatureDialog closeDialog={closeDialog} dialogState={dialogState} />
        </div>
      </div>
    </div>
  )
}

export default PageHeading
