/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios'
import { IPutSignaturePayload } from '../../types/Contract'
import { makeHttpRequest } from '../http'

class ContractApi {
  static getBookingContract = async (bookingId: string, accessKey: string): Promise<any> => {
    const getContract: AxiosResponse = await makeHttpRequest({
      url: `/Hub/booking/${bookingId}/contract?key=${accessKey}`,
      method: 'GET',
    })

    return getContract.data
  }

  static createBookingContract = async (bookingId: string, accessKey: string): Promise<any> => {
    const getContract: AxiosResponse = await makeHttpRequest({
      url: `/Hub/booking/${bookingId}/contract?key=${accessKey}`,
      method: 'POST',
    })
    console.log(bookingId)
    return getContract.data
  }

  static putSignatureContract = async (
    bookingId: string,
    payload: IPutSignaturePayload,
    accessKey: string
  ): Promise<any> => {
    const getContract: AxiosResponse = await makeHttpRequest({
      url: `/Hub/booking/${bookingId}/contract?key=${accessKey}`,
      method: 'PUT',
      data: payload,
    })

    return getContract.data
  }
}

export default ContractApi
