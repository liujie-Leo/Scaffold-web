// 已包含http常用状态码，根据后台配置情况配置额外的状态码
export const successStatus = {
  200: 'Http请求成功',
  10000: '服务请求成功'
}

export const errorStatus = {
  0: '网络请求失败，请检查您的网络情况',
  1: '未知错误',
  400: '请求报文存在语法错误',
  401: '登录信息失效，即将为您跳转到登录页面',
  403: '服务器拒绝该访问',
  404: '请求路径不存在',
  500: '服务器请求错误',
  503: '当前服务不可用'
}

export const successCodes = Object.keys(successStatus).map(item => { return Number(item) })

export const errorCodes = Object.keys(errorStatus).map(item => { return Number(item) })
