/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query'
import ContractApi from '../../api/contract'
import ReactHtmlParser from 'react-html-parser'
import { useMemo } from 'react'
import { StyledContractSection } from './styleContractContainer'
import { useParams } from 'react-router-dom'
import { useContractStore } from '../../../store/contractStore'
import { IContractResponse } from '../../types/Contract'

export interface IParams {
  bookingNumber: string
}

const MainContent: React.FC = () => {
  const { bookingNumber }: IParams = useParams()
  const [setContractStore] = useContractStore((state) => [state.setContractStore])

  const { mutateAsync, data, isLoading } = useMutation<IContractResponse>(
    ['generate-contract'],
    () => ContractApi.createBookingContract(bookingNumber),
    {
      onSuccess: (successData) => {
        setContractStore({
          isSignButtonDisabled: successData.bookingContractSignatures[0].signature.length > 0,
        })
      },
    }
  )

  useMemo(
    () =>
      data &&
      setContractStore({
        coontractSignatures: data.bookingContractSignatures,
      }),

    [data, setContractStore]
  )

  useMemo(() => {
    bookingNumber && mutateAsync()
    setContractStore({ bookingNumber, createContract: mutateAsync })
  }, [bookingNumber, mutateAsync, setContractStore])

  const transform = useMemo(() => {
    return (node: any): void => {
      if (node.type === 'tag' && node.name === 'img') {
        if (node.attribs.src.length === 0) {
          node.attribs.src = data && data.bookingContractSignatures[0].signature
          node.name = 'div'
          node.attribs.class = 'signature__container'
          return
        } else {
          node.attribs.class = 'w-44 h-auto mx-auto'
        }
      }
    }
  }, [data])

  return (
    <div className="py-4 text-sm">
      <StyledContractSection>
        {isLoading && (
          <div className="flex flex-col animate-pulse ">
            <div className="items-center flex-col mx-auto">
              <div className="bg-gray-200 h-8 w-72 rounded-md"></div>
              <div className="bg-gray-200 h-4 w-60 rounded-md mt-2 mx-auto"></div>
            </div>

            <div className="items-center flex-col mt-8 space-y-2">
              <div className="bg-gray-200 h-4 rounded-md w-4/5"></div>
              <div className="bg-gray-200 h-4 rounded-md w-11/12"></div>
              <div className="bg-gray-200 h-4 rounded-md w-10/12"></div>
              <div className="bg-gray-200 h-4 rounded-md w-4/12"></div>
            </div>

            <div className="items-center flex-col mt-8 space-y-2">
              <div className="bg-gray-200 h-4 rounded-md w-4/5"></div>
              <div className="bg-gray-200 h-4 rounded-md w-11/12"></div>
              <div className="bg-gray-200 h-4 rounded-md w-10/12"></div>
              <div className="bg-gray-200 h-4 rounded-md w-4/12"></div>
            </div>

            <div className="items-center flex-col mt-8 space-y-2">
              <div className="bg-gray-200 h-4 rounded-md w-4/5"></div>
              <div className="bg-gray-200 h-4 rounded-md w-11/12"></div>
              <div className="bg-gray-200 h-4 rounded-md w-10/12"></div>
              <div className="bg-gray-200 h-4 rounded-md w-4/12"></div>
            </div>
            <div className="items-center flex-col mt-4 space-y-2">
              <div className="bg-gray-200 h-4 rounded-md w-3/12"></div>
              <div className="bg-gray-200 h-4 rounded-md w-5/12"></div>
              <div className="bg-gray-200 h-4 rounded-md w-6/12"></div>
              <div className="bg-gray-200 h-4 rounded-md w-4/12"></div>
            </div>
          </div>
        )}

        {data?.contractContent && ReactHtmlParser(data.contractContent, { transform })}
      </StyledContractSection>
    </div>
  )
}

export default MainContent
