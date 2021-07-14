export interface IContractResponse {
  accountManagerName?: string | null
  accountManagerSignature?: string | null
  clientName?: string | null
  clientSignature?: string | null
  bookingId: number
  contractContent: string
  bookingContractSignatures: IBookingContractSignatures[]
}

export interface IPutSignaturePayload {
  signature: string
  id: number
}

export interface IBookingContractSignatures {
  createdBy: string
  createdOn: string
  email: string
  id: number
  modifiedBy: null | string
  modifiedOn: string
  name: string
  order: string
  role: string
  signature: string
}
