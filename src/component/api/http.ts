/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { baseUrl } from './apiUrl'

export const makeHttpRequest = async (
  config: AxiosRequestConfig,
  version?: number
): Promise<any> => {
  // const token: string | null = localStorage.getItem('jwt')
  if (!config.baseURL) config.baseURL = baseUrl
  config.withCredentials = true

  axios.defaults.headers['Content-Type'] = 'application/json'
  axios.defaults.headers['charset'] = 'utf-8'

  axios.defaults.headers['x-version'] = version || 2

  return axios.request({ ...config })
}

axios.interceptors.response.use(
  (config) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error.response?.data)
  }
)
