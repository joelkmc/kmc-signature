import { IBookingContractSignatures } from './../component/types/Contract'
import { UseMutateAsyncFunction } from 'react-query'
import create, { SetState } from 'zustand'
import { IContractResponse } from '../component/types/Contract'

interface IContractInitial {
  coontractSignatures?: IBookingContractSignatures[]
  bookingNumber?: string
  createContract?: UseMutateAsyncFunction<IContractResponse, unknown, void, unknown>
  isSignButtonDisabled?: boolean
}

interface ContractStore extends IContractInitial {
  setContractStore: (payload: Partial<IContractInitial>) => void
  setSignButtonDisabled: (disabled: boolean) => void
  setBookingNumber: (bookingNum: string) => void
  setCreateContract: (fn: UseMutateAsyncFunction<IContractResponse, unknown, void, unknown>) => void
}

export const useContractStore = create<ContractStore>((set: SetState<ContractStore>) => ({
  setBookingNumber: (bookingNum: string) => set(() => ({ bookingNumber: bookingNum })),
  setSignButtonDisabled: (disabled: boolean) => set(() => ({ isSignButtonDisabled: disabled })),
  setCreateContract: (fn: UseMutateAsyncFunction<IContractResponse, unknown, void, unknown>) =>
    set(() => ({ createContract: fn })),

  setContractStore: (payload: Partial<IContractInitial>) => set(() => payload),
}))
