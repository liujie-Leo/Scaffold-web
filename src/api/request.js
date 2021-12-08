import router from '@/router'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Message } from 'element-ui'
import { successStatus, errorStatus, successCodes, errorCodes } from './httpStatus'

const TIME_OUT = 60 // 默认接口请求延迟，单位：秒
const loginPath = '/login' // 登录页路由

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: TIME_OUT * 1000
})

service.interceptors.request.use(
  (config) => {
    if (Cookies.get('AuthenToken')) {
      config.headers.Authorization = Cookies.get('AuthenToken')
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const httpStatus = response.status ? Number(response.status) : 0
    const serviceStatus = response.data.status ? Number(response.data.status) : 0
    const responseData = response.data ?? {}
    // Http状态码正常
    if (successCodes.includes(httpStatus)) {
      // 服务状态码正常
      if (successCodes.includes(serviceStatus)) {
        return Promise.resolve(responseData.data)
      } else {
        // 服务状态码异常
        const message = responseData.message ? `ErrorCode:${responseData.code},${responseData.message}` : successStatus[1]
        Message.error(message)
        return Promise.reject(responseData)
      }
    }
  },
  // Http状态码异常
  (error) => {
    const errorData = error.response || {}
    const httpStatus = errorData.status ? Number(errorData.status) : 0
    // 登录失效
    if (httpStatus === 401) {
      Message.error(errorStatus[httpStatus])
      setTimeout(() => {
        router.replace(loginPath)
      }, 1500)
    } else if (errorCodes.includes(httpStatus)) {
      // 其他类型的http状态错误
      const message = errorStatus[httpStatus]
      Message.error(message)
    } else {
      Message.error(errorStatus[httpStatus])
    }
    return Promise.reject(errorData)
  }
)

export default service
