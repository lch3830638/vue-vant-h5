import moment from 'moment'

/**
 * @param {Any} value
 * @param {String,Number,Date} format
 */
export function formatDate(value, format = 'YYYY-MM-DD') {
  if (!value) return ''
  const isPass =
    typeof value === 'string' ||
    typeof value === 'number' ||
    Object.prototype.toString.call(value) === '[object Date]'
  if (!isPass) {
    console.warn('Unsupported types,Support String、Number、Date：', value)
    return value
  }
  return moment(value).format(format)
}
