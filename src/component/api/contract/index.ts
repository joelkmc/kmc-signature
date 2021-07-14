import { AxiosResponse } from 'axios'
import { IPutSignaturePayload } from '../../types/Contract'
import { makeHttpRequest } from '../http'

class ContractApi {
  static getBookingContract = async (bookingId: string): Promise<any> => {
    const getContract: AxiosResponse = await makeHttpRequest({
      url: `/Hub/booking/${bookingId}/contract`,
      method: 'GET',
    })

    return getContract.data
  }

  static createBookingContract = async (bookingId: string): Promise<any> => {
    const getContract: AxiosResponse = await makeHttpRequest({
      url: `/Hub/booking/${bookingId}/contract`,
      method: 'POST',
    })
    console.log(bookingId)
    return getContract.data
  }

  static putSignatureContract = async (
    bookingId: string,
    payload: IPutSignaturePayload
  ): Promise<any> => {
    const getContract: AxiosResponse = await makeHttpRequest({
      url: `/Hub/booking/${bookingId}/contract`,
      method: 'PUT',
      data: payload,
    })

    return getContract.data
  }
}

export default ContractApi
