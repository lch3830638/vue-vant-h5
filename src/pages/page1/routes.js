export default [
  {
    path: '/',
    name: 'view1',
    meta: { title: '页面1-1' },
    component: () => import('./views/view1')
  },
  {
    path: '/view2',
    name: 'view2',
    meta: { title: '页面1-2' },
    component: () => import('./views/view2')
  }
]
