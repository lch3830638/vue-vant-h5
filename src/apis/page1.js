import request from '@/utils/request'

const getList = data => {
  return request({
    url: '/api/list',
    data,
  })
}

export {
  getList,
}
