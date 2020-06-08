import request from '@/utils/request'

const getList = data => {
  return request({
    url: '/list',
    data,
  })
}

export {
  getList,
}
