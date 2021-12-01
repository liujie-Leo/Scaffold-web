import router from '@/router'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Toast } from 'vant'
import { successCodes, errorCodes } from './errorCode'

const TIME_OUT = 1 // 默认接口请求延迟，单位：分钟

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: TIME_OUT * 6000
})

service.interceptors.request.use(
  (config) => {
    Toast.loading({ message: '加载中', duration: 0, forbidClick: true })
    if (Cookies.get('AuthenToken')) {
      config.headers.Authorization = Cookies.get('AuthenToken')
    }
    return config
  },
  (error) => {
    Toast.clear()
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    console.log(response)
    const httpStatus = response.status ? Number(response.status) : 0
    const serviceStatus = response.data.status
      ? Number(response.data.status)
      : 0
    const responseData = response.data ?? {}
    console.log('####')
    console.log(serviceStatus)
    console.log(responseData)
    // Http状态码正常
    if (successCodes.includes(httpStatus)) {
      // 服务状态码正常
      if (successCodes.includes(serviceStatus)) {
        Toast.clear()
        return Promise.resolve(responseData.data)
      } else {
        // 服务状态码异常
        Toast.clear()
        const message = responseData.message
          ? `ErrorCode:${responseData.code},${responseData.message}`
          : '未知s错误'
        Toast.fail(message)
        return Promise.reject(responseData)
      }
    }
  },
  (error) => {
    console.log(error)
    const errorData = error.response ?? {}
    const httpStatus = errorData.status ? Number(errorData.status) : 0

    // 登录失效
    if (httpStatus === 401) {
      Toast('登录失效，即将为您跳转到登录页面')
      setTimeout(() => {
        router.replace('/login')
      }, 1500)
    } else if (errorCodes.includes(httpStatus)) {
      // 其他类型的http状态错误
      const message = errorCodes[httpStatus]
      Toast.clear()
      Toast.fail(message)
    }
    return Promise.reject(errorData)
  }
)

export default service
