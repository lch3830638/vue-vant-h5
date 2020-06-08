export default [
  {
    path: '/',
    name: 'view1',
    meta: {
      title: '页面2-1',
    },
    component: () => import('./views/view1'),
  },
  {
    path: '/view2',
    name: 'view2',
    meta: {
      title: '页面2-2',
    },
    component: () => import('./views/view2'),
  },
]
