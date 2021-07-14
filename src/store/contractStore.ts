import { UseMutateAsyncFunction } from 'react-query'
import create, { SetState } from 'zustand'
import { IContractResponse } from '../component/types/Contract'

interface ContractStore {
  bookingNumber?: string
  id?: number
  createContract?: UseMutateAsyncFunction<IContractResponse, unknown, void, unknown>
  isSignButtonDisabled?: boolean
  setSignButtonDisabled: (disabled: boolean) => void
  setBookingNumber: (bookingNum: string) => void
  setId: (id: number) => void
  setCreateContract: (fn: UseMutateAsyncFunction<IContractResponse, unknown, void, unknown>) => void
}

export const useContractStore = create<ContractStore>((set: SetState<ContractStore>) => ({
  setBookingNumber: (bookingNum: string) => set(() => ({ bookingNumber: bookingNum })),
  setId: (id: number) => set(() => ({ id })),
  setSignButtonDisabled: (disabled: boolean) => set(() => ({ isSignButtonDisabled: disabled })),
  setCreateContract: (fn: UseMutateAsyncFunction<IContractResponse, unknown, void, unknown>) =>
    set(() => ({ createContract: fn })),
}))
