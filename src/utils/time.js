/**
 * @时间处理库
*/
import dayjs from 'dayjs'

export const ymdFormat = 'YYYY-MM-DD'
export const ymFormat = 'YYYY-MM'
export const ymFormat2 = 'YYYYMM'
export const mdFormat = 'MM-DD'
export const ymdhmsFormat = 'YYYY-MM-DD HH:mm:ss'
export const hmFormat = 'HH:mm'
export const hmsFormat = 'HH:mm:ss'
export const ymdFormat2 = 'YYYYMMDD'
export const ymdhmFormat = 'YYYY-MM-DD HH:mm'
export const WeekEnName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const WeekEnShortName = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']
export const WeekCnName = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
export const WeekCnShortName = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

/**
 * 获取指定格式的时间
 * @time 时间
 * @format 格式
 * 默认返回时间格式为 @ymdhmFormat
*/
export const getTimeFormat = function (time, format) {
  const date = dayjs(time)
  return date.format(format || ymdhmFormat)
}

/**
 * 时间计算
 * @time 时间
 * @num 加减的数值
 * @type 加减的类型
 * years|Y          年
 * months|M         月
 * weeks|w          周
 * days|d           天
 * hours|h          小时
 * minutes|m        分钟
 * seconds|s        秒
 * milliseconds|ms  毫秒
*/
export const computeTime = function (time, num, type, format) {
  const date = dayjs(time).add(num, type)
  if (format) {
    return date.format(format)
  } else {
    return date.toDate()
  }
}

/**
 * 获取两个时间之差
 * @time1 时间1
 * @time2 时间2
 * @type  时间类型
 * years|y          年
 * months|M         月
 * weeks|w          周
 * days|d           天
 * hours|h          小时
 * minutes|m        分钟
 * seconds|s        秒
 * milliseconds|ms  毫秒(默认)
*/
export const getTimesDiff = function (time1, time2, type) {
  return dayjs(time1).diff(dayjs(time2), type)
}

/**
 * 获取当前日期是周几
 * @time 时间
 * @type 类型
 * cn  中文
 * cns 中文简称
 * en  英文
 * ens 英文简称
*/
export const getWeekDay = function (time, type) {
  switch (type) {
    case 'cn':
      return WeekCnName[dayjs(time).day()]
    case 'en':
      return WeekEnName[dayjs(time).day()]
    case 'cns':
      return WeekCnShortName[dayjs(time).day()]
    case 'ens':
      return WeekEnShortName[dayjs(time).day()]
    default:
      return WeekCnName[dayjs(time).day()]
  }
}
