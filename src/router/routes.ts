import childRoutes from './child-routes'

const Layout = () => import('@/components/Layout/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Root',
        redirect: {
          name: 'Project'
        }
      },
      ...childRoutes
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/components/Page404.vue')
  }
]

export default routes
