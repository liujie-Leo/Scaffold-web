import request from '../request'
// 外部服务接口

// POST请求
export function login (data) {
  return request({
    url: '/api/user/login',
    method: 'POST',
    data
  })
}

// GET请求
export function getData (data) {
  return request({
    url: '/api/article/getArticle',
    method: 'GET',
    params: data
  })
}
