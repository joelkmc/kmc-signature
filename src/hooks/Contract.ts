/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query'
import ContractApi from '../component/api/contract'
import { IContractResponse, IPutSignaturePayload } from '../component/types/Contract'

export const useContract = (
  bookingId: string,
  accessKey: string,
  options?: UseQueryOptions<IContractResponse>
): UseQueryResult<IContractResponse> => {
  return useQuery(
    ['contract', bookingId],
    () => ContractApi.getBookingContract(bookingId, accessKey),
    options
  )
}

interface payload {
  bookingNumber: string
  data: IPutSignaturePayload
  accessKey: string
}

export const usePutSignature = (
  options?: UseMutationOptions<any, unknown, payload, unknown>
): UseMutationResult<any, unknown, payload, unknown> => {
  return useMutation(
    ['contract'],
    (payload: { bookingNumber: string; data: IPutSignaturePayload; accessKey: string }) =>
      ContractApi.putSignatureContract(payload.bookingNumber, payload.data, payload.accessKey),
    options
  )
}
