import axios from 'axios'
import { Toast } from 'vant'

let toastLoading
let noLoading
let requestStartTime

// 处理loading闪烁
const handleLoading = (callback = () => {}) => {
  const requestEndTime = new Date().getTime()
  const requestTime = requestEndTime - requestStartTime
  const interval = 400
  setTimeout(() => {
    if (!noLoading) {
      toastLoading.clear()
    }
    callback()
  }, interval - requestTime || 0)
}

const codeMessage = {
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  500: '服务器发生错误，请检查服务器。'
}

// 线上接口地址
const SERVER_ADDRESS = 'http://线上地址.com'

const server = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? SERVER_ADDRESS : '/api',
  timeout: 5000,
  hearders: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

// 添加请求拦截器
server.interceptors.request.use(config => {
  return config
})

// 添加响应拦截器
server.interceptors.response.use(
  res => {
    handleLoading()
    const { data } = res
    return data
  },
  error => {
    let message
    if (error.message.indexOf('timeout') !== -1) {
      message = '请求超时，请刷新页面重试'
    } else {
      const { status: httpStatus } = error.response
      message = codeMessage[httpStatus] || '请求错误'
    }
    handleLoading(() => {
      Toast(message)
    })
    return Promise.reject(error)
  }
)

export default (config = {}, notLoading) => {
  noLoading = notLoading
  if (!noLoading) {
    requestStartTime = new Date().getTime()
    toastLoading = Toast.loading({ mask: true, duration: 1000000 })
  }
  return server(config)
}
