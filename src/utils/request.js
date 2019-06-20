import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'

axios.defaults.baseURL = SERVER_ADDRESS
async function request({ url, type = 'GET', data }) {
  const toast = Toast.loading({ mask: true, duration: 1000000 })
  const requestData = qs.stringify(data)
  try {
    let response = {} // eslint-disable-line
    if (type.toUpperCase() === 'POST') {
      const config = {
        hearders: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      response = await axios.post(url, requestData, config)
    } else {
      response = await axios(`${url}?${requestData}`)
    }
    toast.clear()
    return new Promise((resolve, reject) => {
      // 根据后台的数据格式来进行判断
      // const {
      //   data: { code, msg, data }
      // } = response
      // if (code === '0000') {
      //   resolve(data)
      // } else {
      //   reject(msg)
      // }
    })
  } catch (e) {
    Toast.fail('服务器发生错误')
    toast.clear()
    return new Promise((resolve, reject) => {
      reject(e)
    })
  }
}

export default request
