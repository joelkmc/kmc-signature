/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { BsFileEarmark } from 'react-icons/bs'
import { FaSignature } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'

const timeline = [
  {
    id: 1,
    content: 'Contract initiated by',
    target: 'Jhon Joel Cabagua',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: BsFileEarmark,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Contract signed by',
    target: 'Jhon Joel Cabagua',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: FaSignature,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 3,
    content: 'Contract sent to',
    target: 'jhon.cabagua@kmc.solutions',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: FiSend,
    iconBackground: 'bg-gray-400',
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const classNames = (...classes: any[]): string => {
  return classes.filter(Boolean).join(' ')
}

const PagesNavigation: React.FC = () => {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a href={event.href} className="font-medium text-gray-900">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PagesNavigation
