import request from '../request'
// 外部服务接口

// POST请求
export function getBankInfoList (data) {
  return request({
    url: '',
    method: 'POST',
    data
  })
}

// GET请求
export function GetOptionsSysDictionary (data) {
  return request({
    url: '',
    method: 'GET',
    params: data
  })
}
