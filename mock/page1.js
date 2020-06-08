const Mock = require('mockjs')

// 车场列表
const parkList = Mock.mock({
  'data|10': [
    {
      'id|+1': 1,
      parkName: /大车场[1-9]/,
      parkAddr: '@city()',
    },
  ],
}).data

module.exports = {
  'GET /api/list': (req, res) => {
    res.json({
      code: '0',
      message: '',
      parkList,
    })
  },
}
