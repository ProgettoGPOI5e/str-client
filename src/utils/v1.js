import axios from 'axios'

import getUrl from './getUrl'

const env = process.env.NODE_ENV

const v1 = axios.create({
  baseURL: `${getUrl(env)}/api/v1`,
  withCredentials: true,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})

export default v1
