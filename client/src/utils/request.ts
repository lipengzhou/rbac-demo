import axios from 'axios'
import { useStore } from '../store'

const store = useStore()

const request = axios.create({
  baseURL: 'http://localhost:3001/api/'
})

// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = config.headers || {}
    if (store.user && store.user.token) {
      config.headers['Authorization'] = `Bearer\u0020${store.user.token}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default request
