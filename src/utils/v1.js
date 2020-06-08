import axios from 'axios'
import store from '@/store'

import getUrl from './getUrl'

const env = process.env.NODE_ENV

const v1 = axios.create({
  baseURL: `${getUrl(env)}/api/v1`,
  withCredentials: true
})

v1.interceptors.request.use((config) => {
  if (store.getters.isAuthenticated) {
    config.headers.Authorization = 'Bearer ' + store.getters.getToken
  }

  return config
})

export default v1
