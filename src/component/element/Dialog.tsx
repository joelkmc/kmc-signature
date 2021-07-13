import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface DialogCompProps {
  closeDialog: () => void
  dialogState: boolean
  title: string
}

const DialogComp: React.FC<DialogCompProps> = ({ dialogState, closeDialog, title, children }) => {
  return (
    <>
      <Transition appear show={dialogState} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeDialog}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 border-b border-gray-100"
                >
                  {title}
                </Dialog.Title>
                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default DialogComp