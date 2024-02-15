import { Popover } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useWindowSize } from '../../hooks/useWindowSize'
import PagesNavigation from '../module/PagesNavigation'
import PageHeading from '../module/PageHeading'
import { useContractStore } from '../../store/contractStore'

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ')
}

const AppLayout: React.FC = ({ children }) => {
  const { width } = useWindowSize()

  const signatures = useContractStore((state) => state.coontractSignatures)

  return (
    <div className="min-h-screen bg-gray-100">
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-white shadow-sm lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between lg:gap-8">
                <div className="flex md:inset-y-0 lg:static py-4">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="#">
                      <img
                        className="block h-8 w-auto"
                        src="https://cdn.kmc.solutions/project-statics/kmc-logo-black-with-text.png"
                        alt="Workflow"
                      />
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block min-w-0 md:px-8 lg:px-0 py-4">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500">
                    <span className="text-sm font-medium leading-none text-white">
                      {signatures ? (
                        signatures[0].name.charAt(0).toUpperCase()
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      )}
                    </span>
                  </span>
                </div>

                {/* Mobile menu button */}
                {width && width < 1024 && (
                  <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                    <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Popover.Button>
                  </div>
                )}
              </div>
            </div>
            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="border-t border-gray-200 pt-2 pb-3">
                <div className="p-3 max-w-2xl mx-auto">
                  <PagesNavigation />
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div className="py-6">
        <div className="max-w-[1460px] mx-auto px-6 lg:grid lg:grid-cols-12 gap-4">
          <div className="col-span-12">
            <PageHeading />
          </div>
          {width && width >= 1024 && (
            <div className="hidden lg:block lg:col-span-3 ">
              <div className=" max-h-96 h-full overflow-auto sticky top-6 bg-white rounded-lg shadow py-6 px-6 ">
                <nav aria-label="Sidebar" className="divide-y divide-gray-300">
                  <PagesNavigation />
                </nav>
              </div>
            </div>
          )}
          <main className="lg:col-span-9 ">
            <div className="h-full min-h-screen bg-white rounded-lg shadow py-6 px-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AppLayout
