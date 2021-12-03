/**
 * @工具库
*/

/**
 * 节流
 * @fn 执行的函数
 * @delay 间隔时间
*/
let valid = true
export const throttle = function (fn, delay = 1000) {
  if (valid) {
    valid = false
    setTimeout(() => {
      fn()
      valid = true
    }, delay)
  } else {
    return false
  }
}

/**
 * 防抖
 * @fn 执行的函数
 * @delay 间隔时间
*/
let deBounceTimer = null
export const deBounce = function (fn, delay = 1000) {
  if (deBounceTimer !== null) clearTimeout(deBounceTimer)
  deBounceTimer = setTimeout(fn, delay)
}
