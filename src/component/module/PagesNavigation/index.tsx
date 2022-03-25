/* This example requires Tailwind CSS v2.0+ */
import dayjs from 'dayjs'
import React from 'react'
import { useMemo } from 'react'
import { FaSignature } from 'react-icons/fa'
import { useContractStore } from '../../../store/contractStore'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const classNames = (...classes: any[]): string => {
  return classes.filter(Boolean).join(' ')
}

const PagesNavigation: React.FC = () => {
  const signatures = useContractStore((state) => state.coontractSignatures)

  const data = useMemo(() => {
    return signatures
      ?.map((signature) => {
        if (signature.signature.length > 0) {
          return {
            content: 'Contract signed by',
            target: signature.name,
            href: '#',
            date: dayjs(signature.modifiedOn).format('MMM DD, YYYY'),
            datetime: dayjs(signature.modifiedOn).format('YYYY MM DD'),
            icon: FaSignature,
            iconBackground: 'bg-gray-400',
          }
        }
      })
      ?.filter((item) => item)
  }, [signatures])

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {data && data?.length > 0 ? (
          data?.map((event, eventIdx) => (
            <li key={event?.datetime}>
              <div className="relative pb-8">
                {eventIdx !== data.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={classNames(
                        event?.iconBackground,
                        'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                      )}
                    >
                      {event && <event.icon className="h-5 w-5 text-white" aria-hidden="true" />}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-sm text-gray-500">
                        {event?.content}{' '}
                        <a href={event?.href} className="font-medium text-gray-900">
                          {event?.target}
                        </a>
                      </p>
                    </div>
                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                      <time dateTime={event?.datetime}>{event?.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="text-sm text-center">No documents signed yet.</p>
        )}
      </ul>
    </div>
  )
}

export default PagesNavigation
