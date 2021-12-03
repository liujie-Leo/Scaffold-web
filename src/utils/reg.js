/**
 * @正则校验库
*/

// 数字
export const number = function (value) {
  return /^[0-9]*$/.test(value)
}

// 汉字
export const chinese = function (value) {
  return /^[\u4e00-\u9fa5]{0,}$/.test(value)
}

// 邮箱
export const email = function (value) {
  return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
}

// 大陆手机号码
export const mobile = function (value) {
  return /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(value)
}

// 大陆座机
export const phone = function (value) {
  return /^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$/.test(value)
}
