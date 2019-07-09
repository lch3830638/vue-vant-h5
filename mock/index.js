const delay = require('mocker-api/utils/delay')
const page1 = require('./page1')

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true'

const proxy = {
  ...page1
}

module.exports = noProxy ? {} : delay(proxy, 300)
